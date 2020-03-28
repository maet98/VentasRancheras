import React from "react";
import { View, Button, TextInput, StyleSheet } from "react-native";
import Welcome from "./pages/welcome/src/screens/Welcom.js";
import Register from "./pages/registater/src/screens/Registater.js";
import Orden from "./pages/orden/src/screens/Untitled4.js";
import AddProduct from "./pages/addProduct/src/screens/AddProduct.js";
//import Login from "./pages/login/src/screens/Untitled1.js";
//import Map from "./pages/map/src/screens/Map.js";
import Menu from "./pages/menu/src/screens/Menu.js";
//import NewOrden from "./pages/newOrden/src/screens/Neworden.js";

import { Provider } from "react-redux";
import { store } from "./redux/store";
// export default function App() {
// 	return (
// 		<View>
// 			<AddProduct />
// 		</View>
// 	);
// }
import { Tabs } from "./pages/navigator";
export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Tabs />
			</Provider>
		);
	}
}
