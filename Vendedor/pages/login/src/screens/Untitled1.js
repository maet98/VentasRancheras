/*import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialDisabledTextbox from "../components/MaterialDisabledTextbox";
import MaterialRightIconTextbox from "../components/MaterialRightIconTextbox";
import MaterialButtonShare2 from "../components/MaterialButtonShare2";
import MaterialButtonShare from "../components/MaterialButtonShare";
import MaterialButtonDark from "../components/MaterialButtonDark";

function Untitled1(props) {
  return (
    <View style={styles.container}>
      <MaterialDisabledTextbox
        style={styles.materialDisabledTextbox}
      ></MaterialDisabledTextbox>
      <MaterialRightIconTextbox
        style={styles.materialRightIconTextbox}
      ></MaterialRightIconTextbox>
      <View style={styles.loremIpsumStack}>
        <Text style={styles.loremIpsum}></Text>
        <MaterialButtonShare2
          style={styles.materialButtonShare2}
        ></MaterialButtonShare2>
      </View>
      <MaterialButtonShare
        style={styles.materialButtonShare}
      ></MaterialButtonShare>
      <MaterialButtonDark
        style={styles.materialButtonDark}
      ></MaterialButtonDark>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(63,81,181,1)"
  },
  materialDisabledTextbox: {
    width: 360,
    height: 43,
    marginTop: 363,
    alignSelf: "center"
  },
  materialRightIconTextbox: {
    width: 360,
    height: 43,
    marginTop: 60,
    alignSelf: "center"
  },
  loremIpsum: {
    top: 43,
    left: 42,
    color: "#121212",
    position: "absolute",
    fontFamily: "roboto-regular"
  },
  materialButtonShare2: {
    top: 0,
    left: 0,
    width: 56,
    height: 56,
    position: "absolute"
  },
  loremIpsumStack: {
    width: 56,
    height: 56,
    marginTop: -441,
    marginLeft: 20
  },
  materialButtonShare: {
    width: 165,
    height: 165,
    borderRadius: 100,
    marginTop: 7,
    alignSelf: "center"
  },
  materialButtonDark: {
    width: 160,
    height: 53,
    marginTop: 309,
    alignSelf: "center"
  }
});

export default Untitled1;*/

import React, { useState, Component } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import {
	StyleSheet,
	KeyboardAvoidingView,
	View,
	Text,
	ActivityIndicator,
	TextInput,
	Button,
	TouchableOpacity,
	Image,
} from "react-native";

//import { selectSong, fetchClient } from "../../../../redux/actions";
import { login } from "../../../../redux/actions/user";
//import { loginUser } from "../../../../redux/actions/user";
import { connect } from "react-redux";

class Untitled1 extends Component {
	// state = { email: "", password: "" };

	// _login = async () => {
	// 	const { email, password } = this.state;
	// 	console.log("Main Login email : ", email);
	// 	console.log("Main Login password : ", password);
	// 	try {
	// 		// here place your signup logic
	// 		console.log("user successfully login !: ");
	// 		//this.props.navigation.navigate("NewMenu");
	// 	} catch (err) {
	// 		console.log("error login : ", err);
	// 	}
	// };
	constructor(props) {
		super(props);
		//this.props.fetchClient.bind(this);

		this.state = {
			email: "",
			password: "",
			list: [],
			isLoged: false,
		};
	}
	handleEmail = (text) => {
		this.setState({ email: text });
	};
	handlePassword = (text) => {
		this.setState({ password: text });
	};
	_login = async (email, password) => {
		console.log("aquiiii");
		await this.props.dispatch(login(email, password));
	};

	// handleSignIn = async () => {
	//   const { email, password } = this.state;
	//   await this.props.dispatch(login(email, password));
	// };

	componentDidMount() {}

	componentDidUpdate() {
		const listClient = this.props.user;

		//console.log("this.props : ", this.props);

		if (listClient.Id != null) {
			//	console.log("listClient.token : ", listClient.token);

			this.props.navigation.navigate("AppVenta");
		} else {
			//console.log("listClient : ", listClient.token);
		}
	}
	// onChangeText = (key, val) => {
	// 	this.setState({ [key]: val });
	// };
	// onChange = text => {
	// 	this.setState({ code: text });
	// };
	render() {
		// console.log("List : ", this.props.state.listClient);

		return (
			<KeyboardAvoidingView behavior="padding" style={styles.container}>
				<TextInput
					style={styles.input}
					// placeholder="Email"
					autoCapitalize="none"
					placeholder="Email"
					//placeholderTextColor = "#9a73ef"
					autoCapitalize="none"
					onChangeText={this.handleEmail}
				/>
				<TextInput
					style={styles.input}
					// placeholder="Password"
					secureTextEntry={true}
					autoCapitalize="none"
					placeholder="Password"
					onChangeText={this.handlePassword}
				/>
				<Button title="Login" onPress={() => this._login(this.state.email, this.state.password)}>
					LOGIN
				</Button>
				{/* <TouchableOpacity onPress={() => this._login(this.state.email, this.state.password)}>
					<Text> Login </Text>
				</TouchableOpacity> */}
			</KeyboardAvoidingView>
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

	btnEye: {
		position: "absolute",
		top: 55,
		right: 28,
	},
	iconEye: {
		width: 25,
		height: 25,
		tintColor: "rgba(0,0,0,0.2)",
	},
});

const mapStateToProps = (state) => {
	//console.log("State In Login Page :", state.userLogin);
	const listProduct = state.listProduct;
	return {
		user: state.userLogin,
		listProduct: listProduct,
	};
};

export default connect(mapStateToProps)(Untitled1);

//Fulanodetal@gmail.com
