import * as React from "react";
import { Text, View, StyleSheet, FlatList, ActivityIndicator, Platform } from "react-native";
import { SearchBar } from "react-native-elements";
import listItem from "../../../../data/OrdenJson";
//console.log("ListItem : ",{this.state.dataSource});
import ViewCard from "../components/ViewCard";
import FooterCard from "../components/FooterCard";
import PlusBottom from "../components/PlusBottom";

export default class Menu extends React.Component {
	constructor(props) {
		super(props);
		//setting default state
		this.state = { isLoading: true, search: "" };
		this.arrayholder = [];
	}

	render() {
		const item = this.props.Item;

		return (
			//ListView to show with textinput used as search bar
			<View style={styles.viewStyle}>
				<ViewCard Item={item} />

				<PlusBottom />
				<FooterCard onPress={} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	viewStyle: {
		flex: 1,
		backgroundColor: "white",
		marginTop: Platform.OS == "ios" ? 10 : 0
	},
	textStyle: {
		padding: 10
	}
});
