import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialRightIconTextbox(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TextInput
        placeholder="Password"
        placeholderTextColor="rgba(230, 230, 230,1)"
        style={styles.inputStyle}
      ></TextInput>
      <Icon name="eye" style={styles.iconStyle}></Icon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#D9D5DC",
    borderBottomWidth: 1
  },
  inputStyle: {
    flex: 1,
    color: "#000",
    alignSelf: "stretch",
    paddingTop: 14,
    paddingRight: 16,
    paddingBottom: 8,
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 16
  },
  iconStyle: {
    color: "rgba(228,228,228,1)",
    fontFamily: "Roboto",
    fontSize: 24,
    paddingRight: 8
  }
});

export default MaterialRightIconTextbox;
