import React, { Component, PureComponent } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function MaterialButtonViolet1(props) {
	return (
		<TouchableOpacity onPress={props.onPress} style={[styles.container, props.style]}>
			<Text style={styles.caption}>Register</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "rgba(24,24,25,1)",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		paddingRight: 16,
		paddingLeft: 16,
		elevation: 2,
		minWidth: 88,
		borderRadius: 2,
		shadowOffset: {
			height: 1,
			width: 0
		},
		shadowColor: "#000",
		shadowOpacity: 0.35,
		shadowRadius: 5
	},
	caption: {
		color: "#fff",
		fontSize: 14,
		fontFamily: "roboto-regular"
	}
});

export default MaterialButtonViolet1;
