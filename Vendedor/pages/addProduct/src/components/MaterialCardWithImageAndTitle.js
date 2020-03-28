import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import MaterialDisabledTextbox2 from "./MaterialDisabledTextbox2";
import MaterialCheckboxWithLabel from "./MaterialCheckboxWithLabel";

function MaterialCardWithImageAndTitle(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.cardBody}>
        <View style={styles.bodyContent}>
          <Text style={styles.titleStyle}>Papas</Text>
        </View>
        <Image
          source={require("../assets/images/cardImage2.png")}
          style={styles.cardItemImagePlace}
        ></Image>
      </View>
      <MaterialDisabledTextbox2
        style={styles.materialDisabledTextbox2}
      ></MaterialDisabledTextbox2>
      <Text style={styles.count}>Count</Text>
      <Text style={styles.price120}>Price 120 $</Text>
      <MaterialCheckboxWithLabel
        style={styles.materialCheckboxWithLabel}
      ></MaterialCheckboxWithLabel>
    </View>
  );
}

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
      width: -2
    },
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    overflow: "hidden"
  },
  cardBody: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  bodyContent: {
    flex: 1,
    padding: 16,
    paddingTop: 24
  },
  titleStyle: {
    color: "#000",
    paddingBottom: 12,
    fontSize: 24,
    fontFamily: "roboto-regular"
  },
  cardItemImagePlace: {
    width: 98,
    height: 77,
    backgroundColor: "#ccc",
    margin: 16
  },
  materialDisabledTextbox2: {
    top: 73,
    left: 91,
    width: 51,
    height: 29,
    position: "absolute"
  },
  count: {
    top: 83,
    left: 24,
    color: "#121212",
    position: "absolute",
    fontSize: 18,
    fontFamily: "roboto-regular"
  },
  price120: {
    top: 55,
    left: 26,
    color: "#121212",
    position: "absolute",
    fontSize: 18,
    fontFamily: "roboto-regular"
  },
  materialCheckboxWithLabel: {
    top: 69,
    left: 142,
    width: 90,
    height: 40,
    position: "absolute"
  }
});

export default MaterialCardWithImageAndTitle;
