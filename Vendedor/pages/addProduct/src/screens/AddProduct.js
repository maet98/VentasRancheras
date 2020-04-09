import React, { Component, PureComponent } from "react";
import { StyleSheet, View } from "react-native";
import MaterialCardWithImageAndTitle from "../components/MaterialCardWithImageAndTitle";
import CupertinoSearchBarWithMic from "../components/CupertinoSearchBarWithMic";
import MaterialButtonShare4 from "../components/MaterialButtonShare4";
//import { render } from "react-dom";

class AddProduct extends PureComponent {
	render() {
		return (
			<View style={styles.container}>
				<MaterialCardWithImageAndTitle style={styles.materialCardWithImageAndTitle5}></MaterialCardWithImageAndTitle>
				<MaterialCardWithImageAndTitle style={styles.materialCardWithImageAndTitle4}></MaterialCardWithImageAndTitle>
				<View style={styles.materialCardWithImageAndTitle3Stack}>
					<MaterialCardWithImageAndTitle style={styles.materialCardWithImageAndTitle3}></MaterialCardWithImageAndTitle>
					<MaterialCardWithImageAndTitle style={styles.materialCardWithImageAndTitle2}></MaterialCardWithImageAndTitle>
				</View>
				<MaterialCardWithImageAndTitle style={styles.materialCardWithImageAndTitle}></MaterialCardWithImageAndTitle>
				<CupertinoSearchBarWithMic style={styles.cupertinoSearchBarWithMic}></CupertinoSearchBarWithMic>
				<View style={styles.materialCardWithImageAndTitle6Stack}>
					<MaterialCardWithImageAndTitle style={styles.materialCardWithImageAndTitle6}></MaterialCardWithImageAndTitle>
					<MaterialCardWithImageAndTitle style={styles.materialCardWithImageAndTitle7}></MaterialCardWithImageAndTitle>
					<MaterialButtonShare4 style={styles.materialButtonShare4}></MaterialButtonShare4>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	materialCardWithImageAndTitle5: {
		width: 375,
		height: 109,
		marginTop: 521,
		marginLeft: 1
	},
	materialCardWithImageAndTitle4: {
		width: 375,
		height: 109,
		marginTop: -218,
		marginLeft: 1
	},
	materialCardWithImageAndTitle3: {
		top: 108,
		left: 0,
		width: 375,
		height: 109,
		position: "absolute"
	},
	materialCardWithImageAndTitle2: {
		top: 0,
		left: 1,
		width: 375,
		height: 109,
		position: "absolute"
	},
	materialCardWithImageAndTitle3Stack: {
		width: 376,
		height: 217,
		marginTop: -326
	},
	materialCardWithImageAndTitle: {
		width: 375,
		height: 115,
		marginTop: -332,
		marginLeft: 1
	},
	cupertinoSearchBarWithMic: {
		width: 375,
		height: 44,
		marginTop: -159
	},
	materialCardWithImageAndTitle6: {
		top: 0,
		left: 0,
		width: 375,
		height: 109,
		position: "absolute"
	},
	materialCardWithImageAndTitle7: {
		top: 108,
		left: 0,
		width: 375,
		height: 109,
		position: "absolute"
	},
	materialButtonShare4: {
		top: 86,
		left: 287,
		width: 56,
		height: 56,
		position: "absolute"
	},
	materialCardWithImageAndTitle6Stack: {
		width: 375,
		height: 217,
		marginTop: 550,
		marginLeft: 1
	}
});

export default AddProduct;
