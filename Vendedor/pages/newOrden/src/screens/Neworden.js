import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialCard12 from "../components/MaterialCard12";
import MaterialDisabledTextbox from "../components/MaterialDisabledTextbox";
import MaterialCardWithTextOverImage from "../components/MaterialCardWithTextOverImage";
import MaterialButtonShare2 from "../components/MaterialButtonShare2";
import MaterialButtonShare1 from "../components/MaterialButtonShare1";
import MaterialButtonViolet from "../components/MaterialButtonViolet";
import MaterialDisabledTextbox1 from "../components/MaterialDisabledTextbox1";
import MaterialButtonShare from "../components/MaterialButtonShare";

function Neworden(props) {
  return (
    <View style={styles.container}>
      <MaterialCard12 style={styles.materialCard122}></MaterialCard12>
      <MaterialCard12 style={styles.materialCard123}></MaterialCard12>
      <MaterialDisabledTextbox
        style={styles.materialDisabledTextbox}
      ></MaterialDisabledTextbox>
      <View style={styles.materialCardWithTextOverImageStack}>
        <MaterialCardWithTextOverImage
          style={styles.materialCardWithTextOverImage}
        ></MaterialCardWithTextOverImage>
        <MaterialButtonShare2
          style={styles.materialButtonShare2}
        ></MaterialButtonShare2>
        <Text style={styles.loremIpsum}></Text>
        <MaterialButtonShare1
          style={styles.materialButtonShare1}
        ></MaterialButtonShare1>
      </View>
      <View style={styles.packets0Row}>
        <Text style={styles.packets0}>Packets 0</Text>
        <MaterialButtonViolet
          style={styles.materialButtonViolet}
        ></MaterialButtonViolet>
      </View>
      <MaterialDisabledTextbox1
        style={styles.materialDisabledTextbox1}
      ></MaterialDisabledTextbox1>
      <View style={styles.materialButtonShareRow}>
        <MaterialButtonShare
          style={styles.materialButtonShare}
        ></MaterialButtonShare>
        <Text style={styles.prices2000}>Prices 2,000$</Text>
      </View>
      <MaterialCard12 style={styles.materialCard12}></MaterialCard12>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  materialCard122: {
    width: 359,
    height: 86,
    marginTop: 545,
    marginLeft: 7
  },
  materialCard123: {
    width: 359,
    height: 86,
    marginTop: 1,
    marginLeft: 7
  },
  materialDisabledTextbox: {
    width: 360,
    height: 43,
    marginTop: -430,
    alignSelf: "center"
  },
  materialCardWithTextOverImage: {
    top: 0,
    left: 0,
    width: 375,
    height: 272,
    position: "absolute"
  },
  materialButtonShare2: {
    top: 217,
    left: 326,
    width: 40,
    height: 40,
    position: "absolute"
  },
  loremIpsum: {
    top: 108,
    left: 116,
    color: "#121212",
    position: "absolute",
    fontFamily: "roboto-regular"
  },
  materialButtonShare1: {
    top: 45,
    left: 14,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCardWithTextOverImageStack: {
    width: 375,
    height: 272,
    marginTop: -331
  },
  packets0: {
    color: "#121212",
    fontSize: 24,
    fontFamily: "roboto-regular"
  },
  materialButtonViolet: {
    width: 100,
    height: 36,
    marginLeft: 147
  },
  packets0Row: {
    height: 36,
    flexDirection: "row",
    marginTop: 151,
    marginLeft: 14,
    marginRight: 9
  },
  materialDisabledTextbox1: {
    width: 360,
    height: 43,
    marginTop: -115,
    marginLeft: 6
  },
  materialButtonShare: {
    width: 56,
    height: 56
  },
  prices2000: {
    color: "#121212",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginLeft: 21,
    marginTop: 23
  },
  materialButtonShareRow: {
    height: 56,
    flexDirection: "row",
    marginTop: 343,
    marginLeft: 160,
    marginRight: 29
  },
  materialCard12: {
    width: 359,
    height: 86,
    marginTop: -327,
    marginLeft: 7
  }
});

export default Neworden;
