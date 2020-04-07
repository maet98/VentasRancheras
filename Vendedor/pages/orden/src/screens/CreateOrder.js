import * as React from "react";
import { connect } from "react-redux";
import { SearchBar } from "react-native-elements";
import { FlatList, TextInput, SafeAreaView, TouchableHighlight, TouchableOpacity } from "react-native";
import update from "react-addons-update"; // ES6
//var update = require("react-addons-update"); // ES5 with npm
import CardViewOrder from "../components/CardViewOrder";

import ViewCardProduct from "../../../menu/src/components/ViewCard";
import { Text, View, Button, StyleSheet, ActivityIndicator, ScrollView, Platform } from "react-native";
import Axios from "../../../../apis/api";

class CreateOder extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			renderCreateOder: false,
			isLoading: true,
			search: "",
			searchProduct: "",
			viewFlat: true,
			viewFlatClient: 1,
			saveOldArray: true,

			setIt: true,
			//dataSource: this.props.listProduct,
			userType: true,
			clientSelected: [],
			listClient: [],
			backupListClient: [],
			product: [],
			backupProduct: [],
			arrSelected: [
				// {
				// 	nameItem: "aceite",
				// 	IdItem: 4,
				// 	Amount: 6,
				// 	price: 200,
				// },
				// {
				// 	nameItem: "ace",
				// 	IdItem: 10,
				// 	Amount: 7,
				// 	price: 100,
				// },
			],
			listProduct: [
				// {
				// 	Description: "aceite De Fabrica",
				// 	Name: "aceite",
				// 	UnitPrice: 200,
				// },
				// {
				// 	nameItem: "ace De Santiago",
				// 	Name: "ace",
				// 	UnitPrice: 100,
				// },
			],
		};
		this.arrayholder = this.state.arrSelected;

		this.arrayOrder = this.state.arrSelected;
		this.tempArrayOrder = [];
	}

	addItemToArrSelected = async (nameItem, itemId, Amount, price) => {
		const songs = this.state.arrSelected;
		const intItemId = parseInt(itemId);
		//console.log("all : ", nameItem, itemId, Amount, price);
		//console.log("songs : ", songs);
		const newjectObItem = { nameItem: nameItem, itemId: intItemId, Amount: Amount, price: price };
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

		//	console.log("ArrSelected : ", this.arrayOrder);
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

	_onPressProduct = (item) => {
		//console.log("item---------------- : ", item.item.Name);
		this.setState({ product: [] });
		//console.log("value : ", item);
		const nameItem = item.item.Name;
		const itemId = item.item.Id;
		const Amount = 1;
		const price = item.item.UnitPrice;
		this.addItemToArrSelected(nameItem, itemId, Amount, price);
		//console.log("item---------------- : ", item);
		//alert("Item Selected : ", item.Description);
	};

	_onPressClient = (item) => {
		this.setState({ clientSelected: item });
	};

	setPay = async () => {
		const item = this.state.clientSelected;
		const ClientId = item.Id;
		const TotalAmt = item.Balance;
		if (this.state.clientSelected.Balance) {
			if (this.state.clientSelected.Balance > 0) {
				Axios.post("/payment", {
					ClientId,
					TotalAmt,
				}).then((response) => {
					//console.log("response: ", response);
					if (response.data) {
						alert("Click On Create");
					}
				});
				await Axios.get("/client").then((Response) => {
					//console.log("Response : ", Response);
					this.setState({ listClient: Response.data, backupListClient: Response.data });
				});
			} else {
				alert("Payed,Click On Create");
			}
		} else {
			alert("Select a  Cliente First");
		}
	};

	PayOrder = async (item) => {
		const ClientId = item.Id;
		const TotalAmt = item.Balance;
		Axios.post("/payment", {
			ClientId,
			TotalAmt,
		}).then((response) => {
			//console.log("response: ", response);
			if (response.data) {
				alert("Payed");
			}
		});
		await Axios.get("/client").then((Response) => {
			this.setState({ listClient: Response.data, backupListClient: Response.data });
		});
	};

	SearchFilterFunctionClient = (text) => {
		if (!text) {
			this.setState({
				listClient: this.state.backupListClient,
			});
		}

		const { saveOldArray } = this.state;

		//passing the inserted text in textinput
		const newData = this.state.listClient.filter(function (item) {
			//applying filter for the inserted text in search bar
			const itemData = item.DisplayName ? item.DisplayName.toUpperCase() : "".toUpperCase();
			const textData = text.toUpperCase();
			return itemData.indexOf(textData) > -1;
		});

		if (saveOldArray) {
			this.setState({
				//setting the filtered newData on datasource
				//After setting the data it will automatically re-render the view
				//dataSource: this.arrayholder,
				saveOldArray: false,
			});
		}

		this.setState({
			searchProduct: text,
		});
		console.log("this.state.text : ", text);
		if (newData.length > 0) {
			this.setState({ listClient: newData });
		} else {
			//this.arrayholder = this.state.dataSource;
		}
	};

	SearchFilterFunction = (text) => {
		const dataSearch = this.state.lis;
		this.setState({
			searchProduct: text,
		});

		//console.log("DataSearch : ", dataSearch);
		// //passing the inserted text in textinput
		const newProduct = dataSearch.Item.filter(function (item) {
			// 	//applying filter for the inserted text in search bar
			const itemDataProduct = item.Name ? item.Name.toUpperCase() : "".toUpperCase();
			const textDataProduct = text.toUpperCase();
			return itemDataProduct.indexOf(textDataProduct) > -1;
		});
	};
	handleSearchProduct = (text) => {
		if (!text) {
			this.setState({
				product: this.state.backupProduct,
			});
		}
		this.setState({ searchProduct: text });

		const newProduct = this.state.backupProduct.Item.filter(function (item) {
			// 	//applying filter for the inserted text in search bar
			const itemDataProduct = item.Name ? item.Name.toUpperCase() : "".toUpperCase();
			const textDataProduct = text.toUpperCase();
			return itemDataProduct.indexOf(textDataProduct) > -1;
		});

		if (newProduct.length > 0) {
			this.setState({ product: newProduct });
		} else {
			//this.arrayholder = this.state.dataSource;
		}
	};

	buyArrSelected = () => {
		const Items = this.state.arrSelected;
		const employeeId = this.props.user.Id;
		const clientId = this.state.clientSelected.Id;

		console.log("Items : ", Items);
		console.log("employeeId : ", employeeId);
		console.log("clientId : ", clientId);

		this.setState({ arrSelected: [] });
		if (this.state.clientSelected.Balance == 0) {
			Axios.post("/order", {
				Items,
				employeeId,
				clientId,
			}).then((response) => {
				//console.log("response: ", response);
				if (response.data) {
					alert("Order Create");
				}
			});
		}

		//this.props.navigation.navigate("NewMenu");
	};

	async componentDidMount() {
		//console.log("componentDidMount");
		await Axios.get("/client").then((Response) => {
			//console.log("Response Client : ", Response.data);
			this.setState({ listClient: Response.data, backupListClient: Response.data });
		});

		await Axios.get("/product").then((Response) => {
			//console.log("product Response : ", Response);
			this.setState({ product: Response.data, backupProduct: Response.data });
		});

		//console.log("list Client : ", this.state.listClient);

		//console.log("listClient : ", listClient);
	}

	setCreate = async () => {
		const item = this.state.clientSelected;
		// if (item.length > 0) {
		// 	this.setState({ renderCreateOder: true });
		// } else {
		// 	alert("select a client first : ", item.size);
		// }

		this.setState({ renderCreateOder: true });
	};

	render() {
		if (this.state.renderCreateOder) {
			return (
				<View>
					<View style={{ height: 100 }}>
						<SearchBar
							defaultValue=""
							round
							searchIcon={{ size: 24 }}
							onChangeText={(text) => this.handleSearchProduct(text)}
							placeholder="Search Product"
							value={this.state.searchProduct}
						/>
					</View>

					<View style={{ height: 150 }}>
						<SafeAreaView>
							<FlatList
								extraData={this.state}
								data={this.state.product}
								ItemSeparatorComponent={this.ListViewItemSeparator}
								//Item Separator View
								renderItem={({ item }) => (
									// Single Comes here which will be repeatative for the FlatListItems
									<TouchableHighlight onPress={() => this._onPressProduct({ item })}>
										<ViewCardProduct Item={item} />
									</TouchableHighlight>
								)}
								enableEmptySections={true}
								style={{ marginTop: 10 }}
								keyExtractor={(item, index) => index.toString()}
							/>
						</SafeAreaView>
					</View>
					<View
						style={{
							paddingTop: 5,
							height: 400,

							backgroundColor: "grey",
							borderWidth: 5,
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

					<View style={{ height: 35 }}>
						<Button onPress={() => this.buyArrSelected()} title="Buy all" />
					</View>
				</View>
			);
		} else {
			return (
				<View>
					<View style={{ alignItems: "center", justifyContent: "center", alignContent: "center", height: 150 }}>
						<Text>SEARCH client</Text>
						<TextInput
							style={styles.input}
							autoCapitalize="none"
							placeholder="name client"
							onChangeText={(text) => this.SearchFilterFunctionClient(text)}
						/>
					</View>

					<View style={{ paddingTop: 10, height: 400 }}>
						<FlatList
							extraData={this.state}
							data={this.state.listClient}
							ItemSeparatorComponent={this.ListViewItemSeparator}
							//renderItem={this.renderItemOrder}
							Item
							Separator
							View
							renderItem={({ item }) => (
								// Single Comes here which will be repeatative for the FlatListItems
								<TouchableHighlight onPress={() => this._onPressClient(item)}>
									<View style={[styleCard.container]}>
										<View style={styleCard.cardBody}>
											<View style={styleCard.bodyContent}>
												<Text style={styleCard.titleStyle}>{item.Description}</Text>
												<Text style={styleCard.subtitleStyle}>GivenName: {item.DisplayName}</Text>
												<Text style={styleCard.subtitleStyle}>FamilyName : {item.FullyQualifiedName}</Text>
												<Text style={styleCard.subtitleStyle}>Email : {item.PrimaryEmailAddr.Address}</Text>

												<Text style={styleCard.subtitleStyle}>Balance : {item.Balance}</Text>
											</View>

											<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
												{item.Balance <= 0 ? (
													<Text>Payed</Text>
												) : (
													<Button onPress={() => this.PayOrder(item)} title="Pay" />
												)}
											</View>
										</View>
									</View>
								</TouchableHighlight>
							)}
							enableEmptySections={true}
							style={{ marginTop: 10 }}
							keyExtractor={(item, index) => index.toString()}
						/>
					</View>

					<View style={{ paddingTop: 10, alignItems: "center", justifyContent: "center", flexDirection: "row" }}>
						{this.state.clientSelected.Balance <= 0 ? (
							<Button onPress={() => this.setCreate()} title="Create" />
						) : (
							<Button onPress={() => this.setPay()} title="Pay" />
						)}

						<Text>Balance User : {this.state.clientSelected.Balance}</Text>
					</View>
				</View>
			);
		}
	}
}

const styles = StyleSheet.create({
	viewStyle: {
		backgroundColor: "white",

		marginTop: Platform.OS == "ios" ? 10 : 0,
	},
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
	textStyle: {
		padding: 10,
	},
	container: {
		backgroundColor: "#3f51b5",
		flexDirection: "row",
		alignItems: "center",
		elevation: 3,
		shadowOffset: {
			height: -2,
			width: 0,
		},
		shadowColor: "#111",
		shadowOpacity: 0.2,
		shadowRadius: 1.2,
	},
	btnWrapper1: {
		flex: 1.05,
		alignItems: "center",
		paddingTop: 8,
		paddingBottom: 6,
		minWidth: 80,
		maxWidth: 168,
		paddingHorizontal: 12,
	},
	icon1: {
		backgroundColor: "transparent",
		color: "#FFFFFF",
		fontSize: 24,
		opacity: 0.8,
	},
	cardBody: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	btn1Text: {
		color: "#FFFFFF",
		opacity: 0.8,
		fontSize: 12,
		fontFamily: "roboto-regular",
	},
	activebtnWrapper: {
		flex: 1.08,
		alignItems: "center",
		paddingTop: 6,
		paddingBottom: 10,
		minWidth: 80,
		maxWidth: 168,
		paddingHorizontal: 12,
	},
	activeIcon: {
		backgroundColor: "transparent",
		color: "#FFFFFF",
		fontSize: 24,
		opacity: 1,
	},
	activeText: {
		color: "#FFFFFF",
		opacity: 1,
		paddingTop: 4,
		fontSize: 14,
		fontFamily: "roboto-regular",
	},
	btnWrapper2: {
		flex: 0.93,
		alignItems: "center",
		paddingTop: 8,
		paddingBottom: 6,
		minWidth: 80,
		maxWidth: 168,
		paddingHorizontal: 12,
	},
	icon2: {
		backgroundColor: "transparent",
		color: "#FFFFFF",
		fontSize: 24,
		opacity: 0.8,
	},
	btn2Text: {
		color: "#FFFFFF",
		opacity: 0.8,
		fontFamily: "roboto-regular",
	},
	btnWrapper3: {
		flex: 1,
		alignItems: "center",
		paddingTop: 8,
		paddingBottom: 6,
		minWidth: 80,
		maxWidth: 168,
		paddingHorizontal: 12,
	},
	icon3: {
		backgroundColor: "transparent",
		color: "#FFFFFF",
		fontSize: 24,
		opacity: 0.8,
	},
	btn3Text: {
		color: "#FFFFFF",
		opacity: 0.8,
		fontFamily: "roboto-regular",
	},
	button: {
		flex: 0.91,
		alignItems: "center",
		paddingTop: 8,
		paddingBottom: 6,
		minWidth: 80,
		maxWidth: 168,
		paddingHorizontal: 12,
	},
	icon4: {
		backgroundColor: "transparent",
		color: "#FFFFFF",
		fontSize: 24,
		opacity: 0.8,
	},
	pay: {
		color: "#FFFFFF",
		opacity: 0.8,
		fontFamily: "roboto-regular",
	},
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
			width: 0,
		},
		shadowColor: "#111",
		shadowOpacity: 0.2,
		shadowRadius: 1.2,
	},
	icon: {
		color: "#fff",
		fontFamily: "Roboto",
		fontSize: 24,
		alignSelf: "center",
	},
});

const styleCard = StyleSheet.create({
	container: {
		backgroundColor: "#FFF",
		flexWrap: "nowrap",
		elevation: 3,
		borderRadius: 2,
		borderColor: "#CCC",
		borderWidth: 1,
		shadowOffset: {
			height: 2,
			width: -2,
		},
		shadowColor: "#000",
		shadowOpacity: 0.1,
		shadowRadius: 1.5,
		overflow: "hidden",
	},
	cardBody: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	bodyContent: {
		flex: 1,
		padding: 16,
		paddingTop: 24,
	},
	titleStyle: {
		color: "#000",
		paddingBottom: 12,
		fontSize: 24,
		fontFamily: "roboto-regular",
	},
	subtitleStyle: {
		color: "#000",
		opacity: 0.5,
		fontSize: 14,
		fontFamily: "roboto-regular",
		lineHeight: 16,
	},
	cardItemImagePlace: {
		width: 80,
		height: 80,
		backgroundColor: "#ccc",
		margin: 16,
	},
	actionBody: {
		flexDirection: "row",
		padding: 8,
	},
	actionButton1: {
		height: 36,
		padding: 8,
	},
	actionText1: {
		color: "#000",
		opacity: 0.9,
		fontSize: 14,
	},
	actionButton2: {
		height: 36,
		padding: 8,
	},
	actionText2: {
		color: "#000",
		opacity: 0.9,
		fontSize: 14,
	},
});

const stylesViewOrder = StyleSheet.create({
	container: {
		backgroundColor: "#FFF",
		flexWrap: "nowrap",
		elevation: 3,
		borderRadius: 2,
		borderColor: "#CCC",
		borderWidth: 1,
		shadowOffset: {
			height: 2,
			width: -2,
		},
		shadowColor: "#000",
		shadowOpacity: 0.1,
		shadowRadius: 1.5,
		overflow: "hidden",
	},
	cardBody: {
		alignContent: "center",
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "space-between",
		flex: 1,
	},
	bodyContent: {
		flex: 1,
		padding: 16,
		paddingTop: 24,
	},
	titleStyle: {
		color: "#000",
		paddingBottom: 12,
		fontSize: 24,
		fontFamily: "roboto-regular",
	},
	subtitleStyle: {
		color: "#000",
		opacity: 0.5,
		fontSize: 14,
		fontFamily: "roboto-regular",
		lineHeight: 16,
	},
	cardItemImagePlace: {
		width: 80,
		height: 80,
		backgroundColor: "#ccc",
		margin: 16,
	},
	actionBody: {
		flexDirection: "row",
		padding: 8,
	},
	actionButton1: {
		height: 36,
		padding: 8,
	},
	actionText1: {
		color: "#000",
		opacity: 0.9,
		fontSize: 14,
	},
	actionButton2: {
		height: 36,
		padding: 8,
	},
	actionText2: {
		color: "#000",
		opacity: 0.9,
		fontSize: 14,
	},
});

const mapStateToProps = (state) => {
	//console.log("State In Menu Page :", state.userLogin);
	return {
		user: state.userLogin,
		listProduct: state.listProduct,
	};
};

export default connect(mapStateToProps)(CreateOder);
