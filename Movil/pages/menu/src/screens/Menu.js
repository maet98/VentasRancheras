import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialCardWithImageAndTitle from "../components/MaterialCardWithImageAndTitle";
import MaterialBasicFooter from "../components/MaterialBasicFooter";
import MaterialButtonShare6 from "../components/MaterialButtonShare6";
import CupertinoSearchBarWithMic2 from "../components/CupertinoSearchBarWithMic2";

function Menu(props) {
  return (
    <View style={styles.container}>
      <View style={styles.materialCardWithImageAndTitle5Stack}>
        <MaterialCardWithImageAndTitle
          style={styles.materialCardWithImageAndTitle5}
        ></MaterialCardWithImageAndTitle>
        <MaterialBasicFooter
          style={styles.materialBasicFooter}
        ></MaterialBasicFooter>
        <MaterialButtonShare6
          style={styles.materialButtonShare6}
        ></MaterialButtonShare6>
      </View>
      <View style={styles.materialCardWithImageAndTitle6Stack}>
        <MaterialCardWithImageAndTitle
          style={styles.materialCardWithImageAndTitle6}
        ></MaterialCardWithImageAndTitle>
        <CupertinoSearchBarWithMic2
          style={styles.cupertinoSearchBarWithMic2}
        ></CupertinoSearchBarWithMic2>
      </View>
      <MaterialCardWithImageAndTitle
        style={styles.materialCardWithImageAndTitle2}
      ></MaterialCardWithImageAndTitle>
      <MaterialCardWithImageAndTitle
        style={styles.materialCardWithImageAndTitle3}
      ></MaterialCardWithImageAndTitle>
      <MaterialCardWithImageAndTitle
        style={styles.materialCardWithImageAndTitle4}
      ></MaterialCardWithImageAndTitle>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  materialCardWithImageAndTitle5: {
    top: 0,
    left: 0,
    width: 375,
    height: 162,
    position: "absolute"
  },
  materialBasicFooter: {
    top: 68,
    left: 0,
    width: 375,
    height: 95,
    position: "absolute"
  },
  materialButtonShare6: {
    top: 37,
    left: 159,
    width: 58,
    height: 62,
    position: "absolute"
  },
  materialCardWithImageAndTitle5Stack: {
    width: 375,
    height: 163,
    marginTop: 649
  },
  materialCardWithImageAndTitle6: {
    top: 0,
    left: 0,
    width: 375,
    height: 162,
    position: "absolute"
  },
  cupertinoSearchBarWithMic2: {
    top: 59,
    left: 0,
    width: 375,
    height: 44,
    position: "absolute"
  },
  materialCardWithImageAndTitle6Stack: {
    width: 375,
    height: 162,
    marginTop: -812
  },
  materialCardWithImageAndTitle2: {
    width: 375,
    height: 162
  },
  materialCardWithImageAndTitle3: {
    width: 375,
    height: 162
  },
  materialCardWithImageAndTitle4: {
    width: 375,
    height: 162
  }
});

export default Menu;
