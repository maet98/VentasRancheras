/*import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialButtonShare1 from "../components/MaterialButtonShare1";
import MaterialButtonViolet2 from "../components/MaterialButtonViolet2";
import MaterialDisabledTextbox1 from "../components/MaterialDisabledTextbox1";
import MaterialDisabledTextbox2 from "../components/MaterialDisabledTextbox2";
import MaterialRightIconTextbox1 from "../components/MaterialRightIconTextbox1";
import MaterialRightIconTextbox2 from "../components/MaterialRightIconTextbox2";
import MaterialDisabledTextbox3 from "../components/MaterialDisabledTextbox3";
import MaterialButtonShare3 from "../components/MaterialButtonShare3";

function Registater(props) {
  return (
    <View style={styles.container}>
      <MaterialButtonShare1
        style={styles.materialButtonShare1}
      ></MaterialButtonShare1>
      <MaterialButtonViolet2
        style={styles.materialButtonViolet2}
      ></MaterialButtonViolet2>
      <MaterialDisabledTextbox1
        style={styles.materialDisabledTextbox1}
      ></MaterialDisabledTextbox1>
      <MaterialDisabledTextbox2
        style={styles.materialDisabledTextbox2}
      ></MaterialDisabledTextbox2>
      <MaterialRightIconTextbox1
        style={styles.materialRightIconTextbox1}
      ></MaterialRightIconTextbox1>
      <MaterialRightIconTextbox2
        style={styles.materialRightIconTextbox2}
      ></MaterialRightIconTextbox2>
      <Text style={styles.password}>Password</Text>
      <Text style={styles.userName}>User name</Text>
      <MaterialDisabledTextbox3
        style={styles.materialDisabledTextbox3}
      ></MaterialDisabledTextbox3>
      <MaterialButtonShare3
        style={styles.materialButtonShare3}
      ></MaterialButtonShare3>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  materialButtonShare1: {
    width: 171,
    height: 167,
    borderRadius: 100,
    marginTop: 115,
    alignSelf: "center"
  },
  materialButtonViolet2: {
    width: 163,
    height: 51,
    marginTop: 413,
    marginLeft: 111
  },
  materialDisabledTextbox1: {
    width: 360,
    height: 43,
    marginTop: -421,
    marginLeft: 9
  },
  materialDisabledTextbox2: {
    width: 360,
    height: 43,
    marginTop: 17,
    marginLeft: 9
  },
  materialRightIconTextbox1: {
    width: 353,
    height: 43,
    marginTop: 116,
    marginLeft: 13
  },
  materialRightIconTextbox2: {
    width: 357,
    height: 43,
    marginTop: 16,
    marginLeft: 13
  },
  password: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    fontFamily: "roboto-regular",
    lineHeight: 18,
    marginTop: -132,
    marginLeft: 5
  },
  userName: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    fontFamily: "roboto-regular",
    lineHeight: 18,
    marginTop: -235,
    marginLeft: 9
  },
  materialDisabledTextbox3: {
    width: 360,
    height: 43,
    marginTop: 133,
    marginLeft: 9
  },
  materialButtonShare3: {
    width: 56,
    height: 56,
    marginTop: -433,
    marginLeft: 19
  }
});

export default Registater;*/

import React, { PureComponent } from "react";
import { View, Button, TextInput, StyleSheet } from "react-native";

import Axios from "../../../../apis/api";

export default class Registater extends PureComponent {
	state = {
		address: "",

		DisplayName: "",
		CompanyName: "",

		FreeFormNumber: "",
		Lat: "",
		Long: "",
	};
	onChangeText = (key, val) => {
		this.setState({ [key]: val });
	};

	handleEmail = (text) => {
		this.setState({ address: text });
	};
	handleLat = (text) => {
		this.setState({ Lat: text });
	};
	handleLong = (text) => {
		this.setState({ Long: text });
	};

	handleLastName = (text) => {
		this.setState({ DisplayName: text });
	};
	handleType = (text) => {
		this.setState({ FreeFormNumber: text });
	};
	handleUserName = (text) => {
		this.setState({ CompanyName: text });
	};
	signUp = async (address, DisplayName, CompanyName, FreeFormNumber, Lat, Long) => {
		const PrimaryEmailAddr = { Address: address };

		const PrimaryPhone = {
			FreeFormNumber: FreeFormNumber,
		};
		Axios.post("/client", {
			DisplayName,
			CompanyName,
			PrimaryEmailAddr,
			PrimaryPhone,
			Lat,
			Long,
		}).then((response) => {
			//console.log("response: ", response);
			if (response.data) {
				alert("Client Registrated");
				this.props.navigation.navigate("Welcome");
			}
		});

		//const { username, password, email, firstName, type, lastName } = this.state;
	};

	render() {
		return (
			<View style={styles.container}>
				<TextInput
					style={styles.input}
					placeholder="DisplayName"
					autoCapitalize="none"
					placeholderTextColor="white"
					onChangeText={this.handleLastName}
				/>

				<TextInput
					style={styles.input}
					placeholder="CompanyName"
					autoCapitalize="none"
					placeholderTextColor="white"
					onChangeText={this.handleUserName}
				/>

				<TextInput
					style={styles.input}
					placeholder="Email"
					autoCapitalize="none"
					placeholderTextColor="white"
					onChangeText={this.handleEmail}
				/>
				<TextInput
					style={styles.input}
					placeholder="phone number"
					autoCapitalize="none"
					placeholderTextColor="white"
					onChangeText={this.handleType}
				/>

				<TextInput
					style={styles.input}
					placeholder="Lat"
					autoCapitalize="none"
					placeholderTextColor="white"
					onChangeText={this.handleLat}
				/>

				<TextInput
					style={styles.input}
					placeholder="Long"
					autoCapitalize="none"
					placeholderTextColor="white"
					onChangeText={this.handleLong}
				/>

				<Button
					title="Sign UP"
					onPress={() =>
						this.signUp(
							this.state.address,
							this.state.DisplayName,
							this.state.CompanyName,
							this.state.FreeFormNumber,
							this.state.Lat,
							this.state.Long
						)
					}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	input: {
		width: 350,
		height: 55,
		backgroundColor: "#42A5F5",
		margin: 10,
		padding: 8,
		color: "white",
		borderRadius: 14,
		fontSize: 18,
		fontWeight: "500",
	},
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
