import React, { Component, PureComponent } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { getOneProduct } from "../../../../redux/actions/product";
import NumericInput from "react-native-numeric-input";
//console.log("ListItem : ",{this.state.dataSource});
class CardViewOrder extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			Amount: this.props.Item.Amount,
			price: this.props.Item.price,
			nameItem: this.props.Item.nameItem,
			value: 1,
			IdTtem: this.props.Item.itemId,
			total: this.props.Item.price * this.props.Item.Amount,
		};
		//this.getOneProduct.bind(this);
	}
	clickView = async (Item) => {
		//console.log("View!: ", Item);
		//await this.props.dispatch(getOneProduct("Sprinkler Pipes"));
		this.props.navigation.navigate("OneProduct");
		// here place your signup logic
		//console.log("View!: ", Item.item);
	};
	onChangeValue = async (value) => {
		if (value >= 0) {
			this.setState({ value: value });
		}
	};

	// componentDidMount() {
	// 	//console.log("the value of : ", this.props.Item);
	// 	this.setState({
	// 		Amount: this.props.Item[0].Amount,
	// 		price: this.props.Item[0].price,
	// 		nameItem: this.props.Item[0].nameItem,
	// 		value: 1,
	// 		IdTtem: this.props.Item[0].itemId,
	// 		total: this.props.Item[0].price * this.props.Item[0].Amount,
	// 	});
	// }

	clickPaying = async () => {
		// here place your signup logic
		console.log("Paying!: ");
	};
	render() {
		//console.log("Items..... : ", this.props.Item);
		//console.log("Items : ", this.props.Item);
		//const _Items = this.props.Item.item;
		return (
			<View style={[styles.container]}>
				<View style={styles.cardBody}>
					<View style={styles.bodyContent}>
						<Text style={styles.titleStyle}>IdItem: {this.state.IdItem}</Text>
						{/* <Text style={styles.subtitleStyle}>Address: {this.props.Item.address}</Text> */}
						<Text style={styles.subtitleStyle}>Name: {this.state.nameItem}</Text>
						<Text style={styles.subtitleStyle}>Price: {this.state.price}</Text>
						<Text style={styles.subtitleStyle}>Total : {this.state.total}</Text>
					</View>

					<View>
						<NumericInput
							value={this.state.value}
							onChange={(value) => this.setState({ value, total: value * this.state.price })}
							onLimitReached={(isMax, msg) => console.log(isMax, msg)}
							totalWidth={240}
							totalHeight={50}
							iconSize={25}
							// type="up-down"
							minValue={1}
							step={1}
							valueType="real"
							rounded
							textColor="#B0228C"
							iconStyle={{ color: "white" }}
							rightButtonBackgroundColor="#EA3788"
							leftButtonBackgroundColor="#E56B70"
						/>
					</View>

					{/* <Image source={require("../assets/images/cardImage4.png")} style={styles.cardItemImagePlace}></Image> */}
				</View>
			</View>
		);
	}
}

const mapStateToProps = (state) => {
	//console.log("State In Menu Page :", state);
	return {
		listProduct: state.listProduct,
	};
};

export default connect(mapStateToProps)(CardViewOrder);

const styles = StyleSheet.create({
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
