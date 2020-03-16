import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

function MaterialCardWithTextOverImage1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Image
        source={require("../assets/images/office-800.jpg")}
        resizeMode="center"
        style={styles.cardItemImagePlace}
      ></Image>
      <View style={styles.cardBody}>
        <View style={styles.bodyContent}>
          <Text style={styles.titleStyle}>Welcome</Text>
        </View>
        <View style={styles.actionBody}>
          <TouchableOpacity style={styles.actionButton1}></TouchableOpacity>
          <TouchableOpacity style={styles.actionButton2}></TouchableOpacity>
        </View>
      </View>
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
  cardItemImagePlace: {
    flex: 1,
    backgroundColor: "#ccc",
    minHeight: 359
  },
  cardBody: {
    left: 0,
    backgroundColor: "rgba(0,0,0,0.2)",
    position: "absolute",
    right: 0,
    bottom: 0
  },
  bodyContent: {
    justifyContent: "center",
    padding: 16,
    paddingTop: 24
  },
  titleStyle: {
    color: "#FFF",
    paddingBottom: 12,
    fontSize: 24,
    fontFamily: "roboto-regular"
  },
  actionBody: {
    flexDirection: "row",
    padding: 8
  },
  actionButton1: {
    height: 36,
    padding: 8
  },
  actionButton2: {
    height: 36,
    padding: 8
  }
});

export default MaterialCardWithTextOverImage1;
