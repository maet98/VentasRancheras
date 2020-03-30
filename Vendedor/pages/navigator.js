import { createSwitchNavigator, crea, TabNavigator, createAppContainer } from "react-navigation";
import Welcome from "../pages/welcome/src/screens/Welcom";
import { createStackNavigator } from "react-navigation-stack";
import Login from "../pages/login/src/screens/Untitled1";
import Orden from "../pages/orden/src/screens/Untitled4.js";
import AddProduct from "../pages/addProduct/src/screens/AddProduct.js";

import OneProduct from "../pages/addProduct/src/screens/ViewOneProduct.js";
import Menu from "../pages/menu/src/screens/Menu.js";
import NewMenu from "../pages/menu/src/screens/NewMenu";
import Register from "../pages/registater/src/screens/Registater.js";
import NewOrden from "../pages/newOrden/src/screens/Neworden.js";
export const Tabs = createAppContainer(
	//createSwitchNavigator(
	createStackNavigator(
		{
			// Welcome: {
			// 	screen: Welcome
			// },
			// Login: {
			// 	screen: Login
			// }
			Orden,
			OneProduct,
			NewMenu,
			Register,
			AddProduct,
			Welcome,
			Menu,
			NewOrden,

			Login
		},
		{
			initialRouteName: "Welcome"
		}
	)
);
