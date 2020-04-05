import * as React from "react";
import { connect } from "react-redux";
import { SearchBar } from "react-native-elements";
import { FlatList, SafeAreaView, TouchableHighlight, TouchableOpacity } from "react-native";
import update from "react-addons-update"; // ES6
//var update = require("react-addons-update"); // ES5 with npm
import CardViewOrder from "../components/CardViewOrder";

import ViewCardProduct from "../../../menu/src/components/ViewCard";
import { Text, View, Button, StyleSheet, ActivityIndicator, ScrollView, Platform } from "react-native";

class CreateOder extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: true,
			search: "",
			viewFlat: true,
			saveOldArray: true,
			setIt: true,
			//dataSource: this.props.listProduct,
			userType: true,
			arrSelected: [
				{
					nameItem: "aceite",
					IdItem: 4,
					Amount: 6,
					price: 200
				},
				{
					nameItem: "ace",
					IdItem: 10,
					Amount: 7,
					price: 100
				}
			],
			listProduct: [
				{
					Description: "aceite De Fabrica",
					Name: "aceite",

					UnitPrice: 200
				},
				{
					nameItem: "ace De Santiago",
					Name: "ace",

					UnitPrice: 100
				}
			]
		};
		this.arrayholder = this.state.arrSelected;

		this.arrayOrder = this.state.arrSelected;
		this.tempArrayOrder = [];
	}

	addItemToArrSelected = async (nameItem = "aceite", IdItem = 4, Amount = 6) => {
		const songs = this.state.arrSelected;
		//console.log("songs : ", songs);
		const newjectObItem = [{ nameItem: nameItem, IdTtem: IdItem, Amount: Amount }];
		const totalSongs = songs.push(newjectObItem);
		//console.log(" totalSongs : ", totalSongs);
		//console.log(songs);
		// var tpArrayOrder = [];
		// tpArrayOrder = this.state.arrSelected;
		// tpArrayOrder.add(newjectObItem);

		// this.setState({
		// 	arrSelected: tpArrayOrder
		// });
		this.arrayholder = this.state.arrSelected;

		console.log("ArrSelected : ", this.arrayOrder);
	};

	// updateAmountItem = async Item => {
	// 	var Items = Object.assign({}, { nameItem: nameItem, IdItem: IdItem, amount: amount });
	// 	this.setState(prevState => ({
	// 		arrSelected: [...prevState.arrSelected, Items]
	// 	}));
	// 	// var tempArr = this.state.arrSelected;
	// 	this.setState(state => update(state, { arrSelected: { $push: [4] } }));

	// 	//	console.log("ArrSelected : ", this.state.arrSelected);
	// };

	componentDidUpdate() {
		this.arrayOrder = this.state.arrSelected;
		this.arrayholder = this.state.arrSelected;
		//console.log("arrayOrder : ", this.arrayOrder);
	}

	_onPress = item => {
		console.log("value : ", item);
		//alert("Item Selected : ", item.Description);
	};

	SearchFilterFunction = text => {
		const { saveOldArray } = this.state;

		//passing the inserted text in textinput
		const newData = this.arrayholder.filter(function(item) {
			//applying filter for the inserted text in search bar
			const itemData = item.nameItem ? item.nameItem.toUpperCase() : "".toUpperCase();
			const textData = text.toUpperCase();
			return itemData.indexOf(textData) > -1;
		});

		if (saveOldArray) {
			this.setState({
				//setting the filtered newData on datasource
				//After setting the data it will automatically re-render the view
				//dataSource: this.arrayholder,
				saveOldArray: false
			});
		}

		this.setState({
			search: text
		});
		console.log("this.state.text : ", text);
		if (newData.length > 0) {
			this.arrayholder = newData;
		} else {
			//this.arrayholder = this.state.dataSource;
		}
	};

	render() {
		return (
			<View style={styles.viewStyle}>
				<SearchBar
					round
					searchIcon={{ size: 24 }}
					onChangeText={text => this.SearchFilterFunction(text)}
					onClear={text => this.SearchFilterFunction("")}
					placeholder="Type Here..."
					value={this.state.search}
				/>

				<View style={{ height: 200, paddingBottom: "20px" }}>
					<SafeAreaView>
						<FlatList
							data={this.state.listProduct}
							extraData={this.state}
							ItemSeparatorComponent={this.ListViewItemSeparator}
							//Item Separator View
							renderItem={({ item }) => (
								// Single Comes here which will be repeatative for the FlatListItems
								<TouchableHighlight onPress={() => this._onPress(item)}>
									<ViewCardProduct Item={item} />
								</TouchableHighlight>
							)}
							enableEmptySections={true}
							style={{ marginTop: 10 }}
							keyExtractor={(item, index) => index.toString()}
						/>
						<View style={styles.actionBody}>
							<TouchableOpacity onPress={this.clickPaying} style={styles.actionButton2}>
								<Text style={styles.actionText2}>Add To Cart</Text>
							</TouchableOpacity>
						</View>
					</SafeAreaView>
				</View>
				<View
					style={{
						paddingTop: "10px",

						backgroundColor: "grey",
						borderWidth: 5,
						margin: "10px"
					}}
				>
					<SafeAreaView>
						<FlatList
							extraData={this.state}
							data={this.state.arrSelected}
							ItemSeparatorComponent={this.ListViewItemSeparator}
							//Item Separator View
							renderItem={({ item }) => (
								// Single Comes here which will be repeatative for the FlatListItems
								<TouchableHighlight onPress={() => this._onPress(item)}>
									<CardViewOrder Item={item} />
								</TouchableHighlight>
							)}
							enableEmptySections={true}
							style={{ marginTop: 10 }}
							keyExtractor={(item, index) => index.toString()}
						/>
					</SafeAreaView>
				</View>

				<Button style={{ position: "absoulute" }} onPress={() => this.addItemToArrSelected()} title="Click button" />
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
	cardBody: {
		flexDirection: "row",
		justifyContent: "space-between"
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

const stylesBtnPlus = StyleSheet.create({
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

const mapStateToProps = state => {
	//console.log("State In Menu Page :", state.userLogin);
	return {
		user: state.userLogin,
		listProduct: state.listProduct
	};
};

export default connect(mapStateToProps)(CreateOder);
