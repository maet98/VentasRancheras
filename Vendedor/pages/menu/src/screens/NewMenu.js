import * as React from "react";
import {
	Text,
	View,
	StyleSheet,
	TouchableOpacity,
	TouchableHighlight,
	FlatList,
	ActivityIndicator,
	ScrollView,
	Platform
} from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
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
	componentDidMount() {
		console.log("ListItem : ", listItem);
		return fetch("https://jsonplaceholder.typicode.com/posts")
			.then(response => response.json())
			.then(responseJson => {
				this.setState(
					{
						isLoading: false,
						dataSource: listItem
					},
					function() {
						this.arrayholder = listItem;
					}
				);
			})
			.catch(error => {
				console.error(error);
			});
	}

	onChangeListItem = status => {
		//const status = "2";
		if (status > 0) {
			//listItem: this.state.listItem.filter(item => item.status === status),
			this.arrayholder = listItem.filter(item => item.status === status);
			this.setState({
				//setting the filtered newData on datasource
				//After setting the data it will automatically re-render the view
				dataSource: this.arrayholder
			});

			console.log("Array Holder : ", this.arrayholder);
		}
	};

	_onPressPay = () => {
		console.log("Pay");
	};

	search = text => {
		console.log(text);
	};

	_onPress = item => {
		console.log("CLIK me", item);
	};
	clear = () => {
		this.search.clear();
	};

	SearchFilterFunction(text) {
		//passing the inserted text in textinput
		const newData = this.arrayholder.filter(function(item) {
			//applying filter for the inserted text in search bar
			const itemData = item.title ? item.title.toUpperCase() : "".toUpperCase();
			const textData = text.toUpperCase();
			return itemData.indexOf(textData) > -1;
		});

		this.setState({
			//setting the filtered newData on datasource
			//After setting the data it will automatically re-render the view
			dataSource: newData,
			search: text
		});
	}

	ListViewItemSeparator = () => {
		//Item sparator view
		return (
			<View
				style={{
					height: 0.3,
					width: "90%",
					backgroundColor: "#080808"
				}}
			/>
		);
	};

	render() {
		return (
			//ListView to show with textinput used as search bar
			// <ScrollView keyboardShouldPersistTaps="handled">
			<View style={styles.viewStyle}>
				<SearchBar
					round
					searchIcon={{ size: 24 }}
					onChangeText={text => this.SearchFilterFunction(text)}
					onClear={text => this.SearchFilterFunction("")}
					placeholder="Type Here..."
					value={this.state.search}
				/>
				{/* <ViewCard /> */}
				<FlatList
					data={this.state.dataSource}
					ItemSeparatorComponent={this.ListViewItemSeparator}
					//Item Separator View
					renderItem={({ item }) => (
						// Single Comes here which will be repeatative for the FlatListItems
						<TouchableHighlight onPress={() => this._onPress(item)}>
							<ViewCard Item={item} />
						</TouchableHighlight>
					)}
					enableEmptySections={true}
					style={{ marginTop: 10 }}
					keyExtractor={(item, index) => index.toString()}
				/>
				<PlusBottom />
				{/* <FooterCard /> */}
				<View style={[styles.container]}>
					<TouchableOpacity onPress={() => this.onChangeListItem("0")} style={styles.btnWrapper1}>
						<MaterialCommunityIconsIcon name="view-list" style={styles.icon1}></MaterialCommunityIconsIcon>
						<Text style={styles.btn1Text}>View Ordes</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => this.onChangeListItem("1")} style={styles.activebtnWrapper}>
						<MaterialCommunityIconsIcon name="check-all" style={styles.activeIcon}></MaterialCommunityIconsIcon>
						<Text style={styles.activeText}>Checking</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => this.onChangeListItem("2")} style={styles.btnWrapper2}>
						<MaterialCommunityIconsIcon name="package-variant-closed" style={styles.icon2}></MaterialCommunityIconsIcon>
						<Text style={styles.btn2Text}>On wait</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => this.onChangeListItem("3")} style={styles.btnWrapper3}>
						<MaterialCommunityIconsIcon name="square-inc-cash" style={styles.icon3}></MaterialCommunityIconsIcon>
						<Text style={styles.btn3Text}>Pay</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button}>
						<MaterialCommunityIconsIcon name="xamarin-outline" style={styles.icon4}></MaterialCommunityIconsIcon>
						<Text style={styles.pay}>close</Text>
					</TouchableOpacity>
				</View>
			</View>
			// </ScrollView>
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
	},
	container: {
		backgroundColor: "#3f51b5",
		flexDirection: "row",
		alignItems: "center",
		elevation: 3,
		shadowOffset: {
			height: -2,
			width: 0
		},
		shadowColor: "#111",
		shadowOpacity: 0.2,
		shadowRadius: 1.2
	},
	btnWrapper1: {
		flex: 1.05,
		alignItems: "center",
		paddingTop: 8,
		paddingBottom: 6,
		minWidth: 80,
		maxWidth: 168,
		paddingHorizontal: 12
	},
	icon1: {
		backgroundColor: "transparent",
		color: "#FFFFFF",
		fontSize: 24,
		opacity: 0.8
	},
	btn1Text: {
		color: "#FFFFFF",
		opacity: 0.8,
		fontSize: 12,
		fontFamily: "roboto-regular"
	},
	activebtnWrapper: {
		flex: 1.08,
		alignItems: "center",
		paddingTop: 6,
		paddingBottom: 10,
		minWidth: 80,
		maxWidth: 168,
		paddingHorizontal: 12
	},
	activeIcon: {
		backgroundColor: "transparent",
		color: "#FFFFFF",
		fontSize: 24,
		opacity: 1
	},
	activeText: {
		color: "#FFFFFF",
		opacity: 1,
		paddingTop: 4,
		fontSize: 14,
		fontFamily: "roboto-regular"
	},
	btnWrapper2: {
		flex: 0.93,
		alignItems: "center",
		paddingTop: 8,
		paddingBottom: 6,
		minWidth: 80,
		maxWidth: 168,
		paddingHorizontal: 12
	},
	icon2: {
		backgroundColor: "transparent",
		color: "#FFFFFF",
		fontSize: 24,
		opacity: 0.8
	},
	btn2Text: {
		color: "#FFFFFF",
		opacity: 0.8,
		fontFamily: "roboto-regular"
	},
	btnWrapper3: {
		flex: 1,
		alignItems: "center",
		paddingTop: 8,
		paddingBottom: 6,
		minWidth: 80,
		maxWidth: 168,
		paddingHorizontal: 12
	},
	icon3: {
		backgroundColor: "transparent",
		color: "#FFFFFF",
		fontSize: 24,
		opacity: 0.8
	},
	btn3Text: {
		color: "#FFFFFF",
		opacity: 0.8,
		fontFamily: "roboto-regular"
	},
	button: {
		flex: 0.91,
		alignItems: "center",
		paddingTop: 8,
		paddingBottom: 6,
		minWidth: 80,
		maxWidth: 168,
		paddingHorizontal: 12
	},
	icon4: {
		backgroundColor: "transparent",
		color: "#FFFFFF",
		fontSize: 24,
		opacity: 0.8
	},
	pay: {
		color: "#FFFFFF",
		opacity: 0.8,
		fontFamily: "roboto-regular"
	}
});
