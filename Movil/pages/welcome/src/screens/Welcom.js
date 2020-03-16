import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialCardWithTextOverImage1 from "../components/MaterialCardWithTextOverImage1";
import MaterialButtonViolet from "../components/MaterialButtonViolet";
import MaterialButtonViolet1 from "../components/MaterialButtonViolet1";

function Welcom(props) {
  return (
    <View style={styles.container}>
      <View style={styles.materialCardWithTextOverImage1Stack}>
        <MaterialCardWithTextOverImage1
          style={styles.materialCardWithTextOverImage1}
        ></MaterialCardWithTextOverImage1>
        <Text style={styles.ventasRancheras}>Ventas Rancheras</Text>
        <MaterialButtonViolet
          style={styles.materialButtonViolet}
        ></MaterialButtonViolet>
      </View>
      <MaterialButtonViolet1
        style={styles.materialButtonViolet1}
      ></MaterialButtonViolet1>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(180,180,180,1)"
  },
  materialCardWithTextOverImage1: {
    top: 0,
    left: 0,
    width: 377,
    height: 474,
    position: "absolute"
  },
  ventasRancheras: {
    top: 410,
    left: 8,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 45,
    fontFamily: "georgia-regular",
    lineHeight: 14
  },
  materialButtonViolet: {
    top: 456,
    left: 100,
    width: 188,
    height: 49,
    position: "absolute"
  },
  materialCardWithTextOverImage1Stack: {
    width: 377,
    height: 505,
    marginLeft: -2
  },
  materialButtonViolet1: {
    width: 317,
    height: 49,
    marginTop: 59,
    marginLeft: 22
  }
});

export default Welcom;
