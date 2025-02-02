import React, { Component, PureComponent } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

class PlusBottom extends PureComponent {
	render() {
		return (
			<TouchableOpacity style={[styles.container]}>
				<Icon name="plus" style={styles.icon}></Icon>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		//flex: 1,
		backgroundColor: "rgba(0,0,0,1)",
		alignItems: "center",
		//	position: "absolute",
		justifyContent: "center",
		elevation: 2,
		minWidth: 40,
		minHeight: 40,
		width: 85,
		borderRadius: 28,
		shadowOffset: {
			height: 2,
			width: 0
		},
		shadowColor: "#111",
		shadowOpacity: 0.2,
		shadowRadius: 1.2
	},
	icon: {
		color: "#fff",
		fontFamily: "Roboto",
		fontSize: 24,
		alignSelf: "center"
	}
});

export default PlusBottom;
