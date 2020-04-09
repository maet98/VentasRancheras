import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { View, Button, TextInput, StyleSheet } from "react-native";
import Welcome from "./pages/welcome/src/screens/Welcom.js";
import Register from "./pages/registater/src/screens/Registater.js";
import Orden from "./pages/orden/src/screens/Untitled4.js";
import AddProduct from "./pages/addProduct/src/screens/AddProduct.js";
//import Login from "./pages/login/src/screens/Untitled1.js";
//import Map from "./pages/map/src/screens/Map.js";
import Menu from "./pages/menu/src/screens/Menu.js";
//import NewOrden from "./pages/newOrden/src/screens/Neworden.js";
import Expo from "expo";

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

const fetchFonts = () => {
	return Font.loadAsync({
		// "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
		//"open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
		"roboto-regular": require("./assets/font/roboto-regular.ttf"),
	});
};

export default function App() {
	const [fontLoaded, setFontLoaded] = useState(false);
	if (!fontLoaded) {
		return (
			<AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} onError={(err) => console.log(err)} />
		);
	}
	return (
		<Provider store={store}>
			<Tabs />
		</Provider>
	);
}
