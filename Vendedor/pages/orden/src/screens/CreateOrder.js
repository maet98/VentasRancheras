import * as React from "react";
import { connect } from "react-redux";
import { SearchBar, ListItem } from "react-native-elements";

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
			dataSource: this.props.listProduct,
			userType: true,
			arrSelected: {}
		};
		this.arrayholder = [];

		this.arrayOrder = [];
		this.tempArrayOrder = [];
	}

	addItemToArrSelected = async () => {
		const newjectObItem = ["nameItem", "IdTtem", "Amount"];
		this.tempArrayOrder = this.state.arrSelected;

		this.setState({
			arrSelected: [...this.tempArrayOrder, newjectObItem]
		});

		console.log("ArrSelected : ", this.state.arrSelected);
	};

	updateAmountItem = async Item => {
		var Items = Object.assign({}, { nameItem: nameItem, IdItem: IdItem, amount: amount });
		this.setState(prevState => ({
			arrSelected: [...prevState.arrSelected, Items]
		}));
		// var tempArr = this.state.arrSelected;
		this.setState(state => update(state, { arrSelected: { $push: [4] } }));

		console.log("ArrSelected : ", this.state.arrSelected);
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

				<Button onPress={this.addItemToArrSelected} title="Click button" />
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
