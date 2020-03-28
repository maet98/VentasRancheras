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

import React, { Component } from "react";

import {
	StyleSheet,
	KeyboardAvoidingView,
	View,
	ActivityIndicator,
	TextInput,
	Button,
	TouchableOpacity,
	Image
} from "react-native";

export default class Untitled1 extends Component {
	login = async () => {
		//const { username, password } = this.state;
		try {
			// here place your signup logic
			console.log("user successfully login !: ");
			this.props.navigation.navigate("NewMenu");
		} catch (err) {
			console.log("error login : ", err);
		}
	};
	onChangeText = (key, val) => {
		this.setState({ [key]: val });
	};

	render() {
		return (
			<KeyboardAvoidingView behavior="padding" style={styles.container}>
				<TextInput
					style={styles.input}
					placeholder="Username"
					autoCapitalize="none"
					placeholderTextColor="white"
					onChangeText={val => this.onChangeText("username", val)}
				/>
				<TextInput
					style={styles.input}
					placeholder="Password"
					secureTextEntry={true}
					autoCapitalize="none"
					placeholderTextColor="white"
					onChangeText={val => this.onChangeText("password", val)}
				/>
				<Button title="Login" onPress={this.login} />
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
		fontWeight: "500"
	},
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},

	btnEye: {
		position: "absolute",
		top: 55,
		right: 28
	},
	iconEye: {
		width: 25,
		height: 25,
		tintColor: "rgba(0,0,0,0.2)"
	}
});
