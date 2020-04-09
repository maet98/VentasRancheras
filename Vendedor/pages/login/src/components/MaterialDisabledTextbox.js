import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialDisabledTextbox(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TextInput
        placeholder="User Name"
        placeholderTextColor="rgba(248,248,248,1)"
        editable={false}
        style={styles.inputStyle}
      ></TextInput>
      <Icon name="information-outline" style={styles.iconStyle}></Icon>
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
    color: "rgba(255,255,255,1)",
    alignSelf: "stretch",
    paddingTop: 16,
    paddingRight: 5,
    paddingBottom: 8,
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 16
  },
  iconStyle: {
    color: "rgba(226,226,226,1)",
    fontFamily: "Roboto",
    fontSize: 24,
    paddingRight: 8,
    opacity: 0.7
  }
});

export default MaterialDisabledTextbox;
