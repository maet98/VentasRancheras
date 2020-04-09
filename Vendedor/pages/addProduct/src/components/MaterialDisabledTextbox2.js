import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";

function MaterialDisabledTextbox2(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TextInput
        placeholder="0"
        editable={false}
        style={styles.inputStyle}
      ></TextInput>
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
    paddingTop: 16,
    paddingRight: 5,
    paddingBottom: 8,
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 16
  }
});

export default MaterialDisabledTextbox2;
