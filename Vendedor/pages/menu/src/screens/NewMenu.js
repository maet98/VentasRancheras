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
import { SearchBar, ListItem } from "react-native-elements";
import listItem from "../../../../data/OrdenJson";
//console.log("ListItem : ",{this.state.dataSource});
import ViewCard from "../components/ViewCard";
import FooterCard from "../components/FooterCard";
import PlusBottom from "../components/PlusBottom";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { connect } from "react-redux";
import { getAllProduct } from "../../../../redux/actions/product";
import { getAllOder } from "../../../../redux/actions/order";
import Axios from "../../../../apis/api";
class Menu extends React.Component {
	constructor(props) {
		super(props);
		//setting default state
		this.state = {
			isLoading: true,
			search: "",
			viewFlat: true,
			saveOldArray: true,
			setIt: true,
			dataSource: this.props.listProduct,
			userType: true
		};
		this.arrayholder = [];

		this.arrayOrder = [];
		//this.handleButtonChange = this.handleButtonChange.bind(this);

		//this.getAllProduct.bind(this);
		//this.getAllOder.bind(this);
	}

	allOrder = async () => {
		Axios.get("/order").then(response => {
			if (response.data) {
				this.arrayOrder = response.data;
				console.log("response this.arrayOrder : ", this.arrayOrder);
			}
		});
	};

	handleButtonChange(value) {
		this.setState({
			dataSource: value,
			setIt: false
		});
		this.arrayholder = value;
		//this.arrayOrder = value;
		//console.log("SetIT : ", this.arrayOrder);
	}
	async componentDidMount() {
		if (this.props.user.type === "Repartidor") {
			this.setState({ userType: false });
		}
		this.arrayholder = await this.props.dispatch(getAllProduct());
		await this.allOrder();
		console.log("BOOOOOOOOO BOOOOOOOO");

		this.arrayOrder = await this.props.dispatch(getAllOder());
		console.log("AAAAAAAAAAAAAA BOOOOOOOO");
	}

	onPressSignIN = () => {
		this.props.navigation.navigate("Login");
	};

	addNewOrden = () => {
		this.props.navigation.navigate("NewOrden");
	};

	renderFlatList = Item => {
		this.props.navigation.navigate("OneProduct");
	};

	onChangeListItem = status => {
		this.setState({
			viewFlat: false
		});

		//console.log("This : ", this.props.user);
		// const { dataSource } = this.state;
		// console.log("DataSourece : ", status);
		// if (saveOldArray) {
		// 	this.setState({
		// 		//setting the filtered newData on datasource
		// 		//After setting the data it will automatically re-render the view
		// 		dataSource: this.arrayholder,
		// 		saveOldArray: false
		// 	});
		// }
		// //const status = "2";
		// if (status > 0) {
		// 	//listItem: this.state.listItem.filter(item => item.status === status),
		// 	this.arrayholder = this.state.dataSource.filter(item => item.status === status);
		// 	// this.setState({
		// 	// 	//setting the filtered newData on datasource
		// 	// 	//After setting the data it will automatically re-render the view
		// 	// 	dataSource: this.arrayholder
		// 	// });
		// 	//console.log("Array Holder : ", this.arrayholder);
		// } else {
		// 	this.arrayholder = dataSource;
		//}
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
		const { saveOldArray } = this.state;
		//this.setState({ dataSource: this.arrayholder });
		//passing the inserted text in textinput
		const newData = this.arrayholder.filter(function(item) {
			//applying filter for the inserted text in search bar
			const itemData = item.Description ? item.Description.toUpperCase() : "".toUpperCase();
			const textData = text.toUpperCase();
			return itemData.indexOf(textData) > -1;
		});

		if (saveOldArray) {
			this.setState({
				//setting the filtered newData on datasource
				//After setting the data it will automatically re-render the view
				dataSource: this.arrayholder,
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
			this.arrayholder = this.state.dataSource;
		}
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

	componentDidUpdate() {
		const { listProduct } = this.props;
		const { setIt } = this.state;
		//console.log("Data Before : ", dataSource);
		//console.log("setIt Before: ", setIt);
		// if (setIt === true) {
		// 	console.log("setIt Before: ", setIt);
		// 	console.log("listProduct ID : ", listProduct.ID);
		if (typeof this.arrayholder === "undefined" && listProduct.ID != "undefined" && setIt === true) {
			// 		//console.log('Variable "listProduct" is undefined.');
			this.handleButtonChange(this.props.listProduct);
			// 		console.log("Data Now : ", dataSource);
			// 		//console.log("this.props.listProduct : ", this.props.listProduct);
		}
		// }
		// console.log("setIt After-------: ", setIt);
		//this.props.dispatch(getAllProduct());
		//const listClient = this.props.listProduct;
		//this.arrayholder = this.props.listProduct;
		//console.log("this.arrayholder.token : ", this.arrayholder);
	}

	render() {
		if (this.state.viewFlat) {
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

					{/* <FlatList
						data={this.arrayholder}
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
					/> */}
					<View style={{ flex: 1, justifyContent: "center", alignItems: "center", paddingTop: "40px" }}>
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
						<TouchableOpacity onPress={() => this.onChangeListItem("1")} style={styles.activebtnWrapper}>
							<MaterialCommunityIconsIcon name="check-all" style={styles.activeIcon}></MaterialCommunityIconsIcon>
							<Text style={styles.activeText}>Checking</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => this.onChangeListItem("2")} style={styles.btnWrapper2}>
							<MaterialCommunityIconsIcon
								name="package-variant-closed"
								style={styles.icon2}
							></MaterialCommunityIconsIcon>
							<Text style={styles.btn2Text}>On wait</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => this.onChangeListItem("3")} style={styles.btnWrapper3}>
							<MaterialCommunityIconsIcon name="square-inc-cash" style={styles.icon3}></MaterialCommunityIconsIcon>
							<Text style={styles.btn3Text}>Pay</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={this.onPressSignIN} style={styles.button}>
							<MaterialCommunityIconsIcon name="xamarin-outline" style={styles.icon4}></MaterialCommunityIconsIcon>
							<Text style={styles.pay}>close</Text>
						</TouchableOpacity>
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
						onChangeText={text => this.SearchFilterFunction(text)}
						onClear={text => this.SearchFilterFunction("")}
						placeholder="Type Here..."
						value={this.state.search}
					/>

					<View style={{ flex: 1, justifyContent: "center", alignItems: "center", paddingTop: "40px" }}>
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
						<TouchableOpacity onPress={() => this.onChangeListItem("1")} style={styles.activebtnWrapper}>
							<MaterialCommunityIconsIcon name="check-all" style={styles.activeIcon}></MaterialCommunityIconsIcon>
							<Text style={styles.activeText}>Checking</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => this.onChangeListItem("2")} style={styles.btnWrapper2}>
							<MaterialCommunityIconsIcon
								name="package-variant-closed"
								style={styles.icon2}
							></MaterialCommunityIconsIcon>
							<Text style={styles.btn2Text}>On wait</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => this.onChangeListItem("3")} style={styles.btnWrapper3}>
							<MaterialCommunityIconsIcon name="square-inc-cash" style={styles.icon3}></MaterialCommunityIconsIcon>
							<Text style={styles.btn3Text}>Pay</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={this.onPressSignIN} style={styles.button}>
							<MaterialCommunityIconsIcon name="xamarin-outline" style={styles.icon4}></MaterialCommunityIconsIcon>
							<Text style={styles.pay}>close</Text>
						</TouchableOpacity>
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

export default connect(mapStateToProps)(Menu);
