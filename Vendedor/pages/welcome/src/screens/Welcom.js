import React, { Component, PureComponent } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import MaterialCardWithTextOverImage1 from "../components/MaterialCardWithTextOverImage1";
import MaterialButtonViolet from "../components/MaterialButtonViolet";
import MaterialButtonViolet1 from "../components/MaterialButtonViolet1";

class Welcom extends PureComponent {
	onPressSignIN = () => {
		this.props.navigation.navigate("Login");
	};
	onPressRegister = () => {
		this.props.navigation.navigate("Register");
	};

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.materialCardWithTextOverImage1Stack}>
					<MaterialCardWithTextOverImage1 style={styles.materialCardWithTextOverImage1}>
						<Text style={styles.ventasRancheras}>Ventas Rancheras</Text>
					</MaterialCardWithTextOverImage1>
				</View>
				<View
					style={{
						flex: 1,
						flexDirection: "row",
						alignContent: "center",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Button onPress={this.onPressSignIN} title="LOGIN" />
					{/* <Button onPress={this.onPressRegister} title="Register" /> */}
				</View>

				{/* <MaterialButtonViolet1
					onPress={this.onPressRegister}
					style={styles.materialButtonViolet1}
				></MaterialButtonViolet1> */}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "rgba(180,180,180,1)",
	},
	materialCardWithTextOverImage1: {
		flex: 1,
		alignItems: "center",

		top: 0,
		left: 0,
		width: 377,
		height: 204,
		position: "absolute",
	},
	ventasRancheras: {
		flex: 1,
		top: 410,
		left: 8,
		color: "rgba(255,255,255,1)",
		//position: "absolute",
		fontSize: 45,
		fontFamily: "georgia-regular",
		lineHeight: 14,
	},
	materialButtonViolet: {
		top: 200,
		left: 100,
		width: 188,
		height: 49,
		position: "absolute",
	},
	materialCardWithTextOverImage1Stack: {
		width: 377,
		height: 305,
		marginLeft: -2,
	},
	materialButtonViolet1: {
		width: 317,
		height: 49,
		marginTop: 59,
		marginLeft: 22,
	},
});

export default Welcom;
