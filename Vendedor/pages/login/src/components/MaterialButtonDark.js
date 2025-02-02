import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function MaterialButtonDark(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.caption}>Login</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#212121",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 16,
    paddingLeft: 16,
    elevation: 2,
    minWidth: 88,
    borderRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 5
  },
  caption: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "roboto-regular",
    lineHeight: 18
  }
});

export default MaterialButtonDark;
