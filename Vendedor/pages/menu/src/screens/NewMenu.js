import * as React from "react";
import {
	Text,
	View,
	StyleSheet,
	TouchableOpacity,
	TouchableHighlight,
	FlatList,
	Image,
	Button,
	ActivityIndicator,
	ScrollView,
	Linking,
	Platform,
	Alert,
} from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { SearchBar, ListItem } from "react-native-elements";
import listItem from "../../../../data/OrdenJson";
//console.log("ListItem : ",{this.state.dataSource});
import ViewCard from "../components/ViewCard";
import FooterCard from "../components/FooterCard";
import PlusBottom from "../components/PlusBottom";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { connect } from "react-redux";
import { getAllProduct } from "../../../../redux/actions/product";
//import { getAllOder } from "../../../../redux/actions/order";
import Axios from "../../../../apis/api";
class Menu extends React.Component {
	constructor(props) {
		super(props);
		//setting default state
		this.state = {
			isLoading: true,
			search: "",
			viewFlat: false,
			saveOldArray: true,
			setIt: true,
			routeList: [],
			routeListData: [],

			//dataSource: this.props.listProduct,
			dataSource: [],
			dataComplete: [],
			userType: true,
			listProduct: [],
		};
		this.arrayholder = [];

		this.arrayOrder = [];
	}

	async componentDidMount() {
		if (this.props.user.type === "Repartidor") {
			await Axios.get(`/route/${this.props.user.Id}`).then((response) => {
				this.setState({ routeList: response.data[0].stops, routeListData: response.data });
			});

			this.setState({ userType: false, viewFlat: true });

			//console.log("this : ", this.state.routeList);
		}

		//console.log("Component Did Mount");

		await this.allOrder();
		await this.allProduct();
	}

	allOrder = async () => {
		await Axios.get("/order").then((response) => {
			//console.log("Response All older", response);
			if (!response.data.error) {
				this.arrayOrder = response.data;

				this.setState({ dataSource: response.data, dataComplete: response.data });
			}
		});
	};

	openThreeButtonAlert = (item) => {
		Alert.alert(
			"Order",
			"Click OK To Confirm This Order",
			[
				{ text: "Cancel", onPress: () => console.log("Cancel Pressed"), style: "cancel" },
				{ text: "OK", onPress: () => this.PayOrder(item) },
			],
			{ cancelable: false }
		);
	};

	allProduct = async () => {
		await Axios.get("/product").then((response) => {
			//console.log("Response All product", response);
			if (response.data) {
				this.setState({ listProduct: response.data });
			}
		});
	};

	filterOrderByItemId = async (item) => {
		var dataSave = {};
		const uniqueItem = await this.state.dataComplete.filter((items) => {
			if (parseInt(items.Id) === parseInt(item.orderId)) {
				dataSave = items;
			}
			parseInt(items.Id) === parseInt(item.orderId);
		});

		console.log("dataSave : ", dataSave.EmailStatus);

		return dataSave.EmailStatus;

		// console.log("hi");
		// Alert.alert(
		// 	"Alert Title",

		// 	"My Alert Msg",
		// 	[
		// 		{ text: "Ask me later", onPress: () => console.log("Ask me later pressed", dataSave) },
		// 		{ text: "Cancel", onPress: () => console.log("Cancel Pressed"), style: "cancel" },
		// 		{ text: "OK", onPress: () => console.log("OK Pressed") },
		// 	],
		// 	{ cancelable: false }
		// );
	};

	handleButtonChange(value) {
		this.setState({
			dataSource: value,
			setIt: false,
		});
		this.arrayholder = value;
	}

	onPressSignIN = () => {
		this.props.navigation.navigate("Login");
	};

	onPressRegister = () => {
		console.log("aqui register");
		this.props.navigation.navigate("Register");
	};

	addNewOrden = () => {
		this.props.navigation.navigate("CreateOrder");
	};

	renderFlatList = (Item) => {
		this.props.navigation.navigate("OneProduct");
	};

	onChangeListItem = (status) => {
		this.setState({ dataSource: this.state.dataComplete });
	};

	_onPressPay = () => {
		console.log("Pay");
	};

	search = (text) => {
		console.log(text);
	};

	_onPress = (item) => {
		console.log("CLIK me", item);
	};

	checkStatus = (status) => {
		const newData = this.state.dataComplete.filter((item) => item.EmailStatus === status);

		this.setState({ dataSource: newData });
	};

	clear = () => {
		this.search.clear();
	};

	SearchFilterFunction(text) {
		const { saveOldArray } = this.state;
		//this.setState({ dataSource: this.arrayholder });
		//passing the inserted text in textinput
		const newData = this.state.dataSource.filter(function (item) {
			//applying filter for the inserted text in search bar
			const itemData = item.Id ? item.Id.toUpperCase() : "".toUpperCase();
			const textData = text.toUpperCase();
			return itemData.indexOf(textData) > -1;
		});

		if (saveOldArray) {
			this.setState({
				//setting the filtered newData on datasource
				//After setting the data it will automatically re-render the view
				dataSource: this.arrayholder,
				saveOldArray: false,
			});
		}

		this.setState({
			search: text,
		});
		//console.log("this.state.text : ", text);
		if (newData.length > 0) {
			this.setState({ dataSource: newData });
			this.arrayholder = newData;
		} else {
			this.setState({ dataSource: this.state.dataComplete });
		}
	}

	ListViewItemSeparator = () => {
		//Item sparator view
		return (
			<View
				style={{
					height: 0.3,
					width: "90%",
					backgroundColor: "#080808",
				}}
			/>
		);
	};

	PayOrder = async (item) => {
		//console.log("item : ", item);
		console.log("Item a Pagar : ", item);
		var dataSave = {};
		const uniqueItem = await this.state.dataComplete.filter((items) => {
			if (parseInt(items.Id) === parseInt(item.orderId)) {
				dataSave = items;
			}
			parseInt(items.Id) === parseInt(item.orderId);
		});

		//console.log("dataSave : ", dataSave);
		const ClientId = dataSave.Id;
		const TotalAmt = dataSave.Balance;

		console.log("ClientId : ", ClientId);
		console.log("TotalAmt : ", TotalAmt);
		Axios.post(`/order/confirmOrder/${ClientId}`, {
			ClientId,
			TotalAmt,
		}).then((response) => {
			//console.log("response: ", response);
			if (response.data) {
				alert("Confirmed");
			}
		});
		await Axios.get("/client").then((Response) => {
			this.setState({ listClient: Response.data, backupListClient: Response.data });
		});
		await Axios.get("/order").then((Response) => {
			this.setState({ dataSource: Response.data, dataComplete: Response.data });
		});
	};

	openGps = (lat, lng) => {
		// lat = -25;
		// lng = 80;
		console.log("Lat : ", lat);
		console.log("long : ", lng);
		var scheme = Platform.OS === "ios" ? "maps:" : "geo:";
		var url = scheme + `${lat},${lng}`;
		Linking.openURL(url);
	};

	render() {
		if (this.state.viewFlat) {
			return (
				//ListView to show with textinput used as search bar
				// <ScrollView keyboardShouldPersistTaps="handled">
				<View style={styles.viewStyle}>
					<SearchBar
						round
						searchIcon={{ size: 24 }}
						onChangeText={(text) => this.SearchFilterFunction(text)}
						onClear={(text) => this.SearchFilterFunction("")}
						placeholder="Type Here..."
						value={this.state.search}
					/>
					{/* <ViewCard /> */}

					<FlatList
						extraData={this.state}
						data={this.state.routeList}
						ItemSeparatorComponent={this.ListViewItemSeparator}
						//renderItem={this.renderItemOrder}
						Item
						Separator
						View
						renderItem={({ item }) => (
							// Single Comes here which will be repeatative for the FlatListItems
							<TouchableHighlight onPress={() => this.openThreeButtonAlert(item)}>
								{/* <ViewCard Item={item} /> */}

								<View style={[styleCard.container]}>
									<View style={styleCard.cardBody}>
										<View style={styleCard.bodyContent}>
											{/* <Text style={styleCard.titleStyle}>{item.Description}</Text> */}
											{/* <Text style={styles.subtitleStyle}>Address: {this.props.Item.address}</Text> */}
											<Text style={styleCard.subtitleStyle}>name: {item.name}</Text>
											{item.entregado ? (
												<Text style={styleCard.subtitleStyle}>Entrago : Yes</Text>
											) : (
												<Text style={styleCard.subtitleStyle}>Entrago : No</Text>
											)}

											<Text style={styleCard.subtitleStyle}>latitude : {item.latitude}</Text>
											<Text style={styleCard.subtitleStyle}>longitude : {item.longitude}</Text>
											<Text style={styleCard.subtitleStyle}>priority : {item.priority}</Text>
										</View>
										{/* <Image
											style={styleCard.cardItemImagePlace}
											source={
												{
													// uri: `${this.props.Item.url}`
												}
											}
										></Image> */}
										<View style={{ flexDirection: "row", flex: 1, justifyContent: "center", alignItems: "center" }}>
											<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
												{/* {
													this.filterOrderByItemId(item) === "undefined" ? (
														<Text>Error</Text>
													) : this.filterOrderByItemId(item) !== "NotSet" ? (
														<Text>Confirmed</Text>
													) : (
														<Button onPress={() => this.PayOrder(item)} title="To Confirm" />
													)

													// <Button onPress={() => this.PayOrder(item)} title="To Confirm" />
												} */}

												<Button onPress={() => this.openThreeButtonAlert(item)} title="Order" />
											</View>

											<Button onPress={() => this.openGps(item.latitude, item.longitude)} title="Go to" />
										</View>

										{/* <Image source={require("../assets/images/cardImage4.png")} style={styles.cardItemImagePlace}></Image> */}
									</View>
								</View>
							</TouchableHighlight>
						)}
						enableEmptySections={true}
						style={{ marginTop: 10 }}
						keyExtractor={(item, index) => index.toString()}
					/>
					<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
						{this.state.userType ? (
							/* <PlusBottom onPress={this.addNewOrden} /> */
							<TouchableOpacity onPress={this.addNewOrden} style={[stylesBtnPlus.container]}>
								<Icon name="plus" style={stylesBtnPlus.icon}></Icon>
							</TouchableOpacity>
						) : null}
					</View>
					{/* <FooterCard /> */}
					<View style={[styles.container]}>
						<TouchableOpacity onPress={() => this.onChangeListItem("0")} style={styles.btnWrapper1}>
							<MaterialCommunityIconsIcon name="view-list" style={styles.icon1}></MaterialCommunityIconsIcon>
							<Text style={styles.btn1Text}>View Ordes</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => this.checkStatus("NotSet")} style={styles.activebtnWrapper}>
							<MaterialCommunityIconsIcon name="check-all" style={styles.activeIcon}></MaterialCommunityIconsIcon>
							<Text style={styles.activeText}>Checking</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => this.checkStatus("NeedToSend")} style={styles.btnWrapper2}>
							<MaterialCommunityIconsIcon
								name="package-variant-closed"
								style={styles.icon2}
							></MaterialCommunityIconsIcon>
							<Text style={styles.btn2Text}>On wait</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => this.checkStatus("EmailSent")} style={styles.btnWrapper3}>
							<MaterialCommunityIconsIcon name="square-inc-cash" style={styles.icon3}></MaterialCommunityIconsIcon>
							<Text style={styles.btn3Text}>Pay</Text>
						</TouchableOpacity>

						<TouchableOpacity style={styles.btnWrapper3}>
							<MaterialCommunityIconsIcon name="car" style={styles.icon3}></MaterialCommunityIconsIcon>
							<Text style={styles.btn3Text}>Route</Text>
						</TouchableOpacity>
						{/* <TouchableOpacity onPress={this.onPressSignIN} style={styles.button}>
							<MaterialCommunityIconsIcon name="xamarin-outline" style={styles.icon4}></MaterialCommunityIconsIcon>
							<Text style={styles.pay}>close</Text>
						</TouchableOpacity> */}
					</View>
				</View>
				// </ScrollView>
			);
		} else {
			return (
				<View style={styles.viewStyle}>
					<SearchBar
						round
						searchIcon={{ size: 24 }}
						onChangeText={(text) => this.SearchFilterFunction(text)}
						onClear={(text) => this.SearchFilterFunction("")}
						placeholder="Type Here..."
						value={this.state.search}
					/>
					<Button
						style={{ alignItems: "left", justifyContent: "left" }}
						onPress={() => this.onPressRegister()}
						title="Register Client"
					/>

					<FlatList
						extraData={this.state}
						data={this.state.dataSource}
						ItemSeparatorComponent={this.ListViewItemSeparator}
						//renderItem={this.renderItemOrder}
						Item
						Separator
						View
						renderItem={({ item }) => (
							// Single Comes here which will be repeatative for the FlatListItems
							<TouchableHighlight onPress={() => this._onPress(item)}>
								{/* <ViewCard Item={item} /> */}

								<View style={[styleCard.container]}>
									<View style={styleCard.cardBody}>
										<View style={styleCard.bodyContent}>
											<Text style={styleCard.titleStyle}>{item.Description}</Text>
											{/* <Text style={styles.subtitleStyle}>Address: {this.props.Item.address}</Text> */}
											<Text style={styleCard.subtitleStyle}>employeeId: {item.employeeId}</Text>
											<Text style={styleCard.subtitleStyle}>Id Item : {item.Id}</Text>
											<Text style={styleCard.subtitleStyle}>Status : {item.EmailStatus}</Text>
											<Text style={styleCard.subtitleStyle}>Balance : {item.Balance}</Text>
											<Text style={styleCard.subtitleStyle}>CreatedAt : {item.MetaData.CreateTime}</Text>
										</View>
										{/* <Image
											style={styleCard.cardItemImagePlace}
											source={
												{
													// uri: `${this.props.Item.url}`
												}
											}
										></Image> */}
										<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
											{item.EmailStatus === "EmailSent" ? (
												<Text>Confirmed</Text>
											) : (
												<Text>To Confirm</Text>
												// <Button onPress={() => this.PayOrder(item)} title="Pay" />
											)}
										</View>

										{/* <Image source={require("../assets/images/cardImage4.png")} style={styles.cardItemImagePlace}></Image> */}
									</View>
								</View>
							</TouchableHighlight>
						)}
						enableEmptySections={true}
						style={{ marginTop: 10 }}
						keyExtractor={(item, index) => index.toString()}
					/>

					<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
						{/* <PlusBottom onPress={this.addNewOrden} /> */}
						<TouchableOpacity onPress={this.addNewOrden} style={[stylesBtnPlus.container]}>
							<Icon name="plus" style={stylesBtnPlus.icon}></Icon>
						</TouchableOpacity>
					</View>
					{/* <FooterCard /> */}
					<View style={[styles.container]}>
						<TouchableOpacity onPress={() => this.onChangeListItem("0")} style={styles.btnWrapper1}>
							<MaterialCommunityIconsIcon name="view-list" style={styles.icon1}></MaterialCommunityIconsIcon>
							<Text style={styles.btn1Text}>View Ordes</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => this.checkStatus("NotSet")} style={styles.activebtnWrapper}>
							<MaterialCommunityIconsIcon name="check-all" style={styles.activeIcon}></MaterialCommunityIconsIcon>
							<Text style={styles.activeText}>Checking</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => this.checkStatus("NeedToSend")} style={styles.btnWrapper2}>
							<MaterialCommunityIconsIcon
								name="package-variant-closed"
								style={styles.icon2}
							></MaterialCommunityIconsIcon>
							<Text style={styles.btn2Text}>On wait</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => this.checkStatus("EmailSent")} style={styles.btnWrapper3}>
							<MaterialCommunityIconsIcon name="square-inc-cash" style={styles.icon3}></MaterialCommunityIconsIcon>
							<Text style={styles.btn3Text}>Pay</Text>
						</TouchableOpacity>

						{/* <TouchableOpacity onPress={this.onPressSignIN} style={styles.button}>
							<MaterialCommunityIconsIcon name="xamarin-outline" style={styles.icon4}></MaterialCommunityIconsIcon>
							<Text style={styles.pay}>close</Text>
						</TouchableOpacity> */}
					</View>
				</View>
			);
		}
	}
}

const styles = StyleSheet.create({
	viewStyle: {
		flex: 1,
		backgroundColor: "white",
		marginTop: Platform.OS == "ios" ? 10 : 0,
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

const mapStateToProps = (state) => {
	//console.log("State In Menu Page :", state.userLogin);
	return {
		user: state.userLogin,
		listProduct: state.listProduct,
	};
};

export default connect(mapStateToProps)(Menu);
