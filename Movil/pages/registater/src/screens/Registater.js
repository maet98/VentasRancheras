import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialButtonShare1 from "../components/MaterialButtonShare1";
import MaterialButtonViolet2 from "../components/MaterialButtonViolet2";
import MaterialDisabledTextbox1 from "../components/MaterialDisabledTextbox1";
import MaterialDisabledTextbox2 from "../components/MaterialDisabledTextbox2";
import MaterialRightIconTextbox1 from "../components/MaterialRightIconTextbox1";
import MaterialRightIconTextbox2 from "../components/MaterialRightIconTextbox2";
import MaterialDisabledTextbox3 from "../components/MaterialDisabledTextbox3";
import MaterialButtonShare3 from "../components/MaterialButtonShare3";

function Registater(props) {
  return (
    <View style={styles.container}>
      <MaterialButtonShare1
        style={styles.materialButtonShare1}
      ></MaterialButtonShare1>
      <MaterialButtonViolet2
        style={styles.materialButtonViolet2}
      ></MaterialButtonViolet2>
      <MaterialDisabledTextbox1
        style={styles.materialDisabledTextbox1}
      ></MaterialDisabledTextbox1>
      <MaterialDisabledTextbox2
        style={styles.materialDisabledTextbox2}
      ></MaterialDisabledTextbox2>
      <MaterialRightIconTextbox1
        style={styles.materialRightIconTextbox1}
      ></MaterialRightIconTextbox1>
      <MaterialRightIconTextbox2
        style={styles.materialRightIconTextbox2}
      ></MaterialRightIconTextbox2>
      <Text style={styles.password}>Password</Text>
      <Text style={styles.userName}>User name</Text>
      <MaterialDisabledTextbox3
        style={styles.materialDisabledTextbox3}
      ></MaterialDisabledTextbox3>
      <MaterialButtonShare3
        style={styles.materialButtonShare3}
      ></MaterialButtonShare3>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  materialButtonShare1: {
    width: 171,
    height: 167,
    borderRadius: 100,
    marginTop: 115,
    alignSelf: "center"
  },
  materialButtonViolet2: {
    width: 163,
    height: 51,
    marginTop: 413,
    marginLeft: 111
  },
  materialDisabledTextbox1: {
    width: 360,
    height: 43,
    marginTop: -421,
    marginLeft: 9
  },
  materialDisabledTextbox2: {
    width: 360,
    height: 43,
    marginTop: 17,
    marginLeft: 9
  },
  materialRightIconTextbox1: {
    width: 353,
    height: 43,
    marginTop: 116,
    marginLeft: 13
  },
  materialRightIconTextbox2: {
    width: 357,
    height: 43,
    marginTop: 16,
    marginLeft: 13
  },
  password: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    fontFamily: "roboto-regular",
    lineHeight: 18,
    marginTop: -132,
    marginLeft: 5
  },
  userName: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    fontFamily: "roboto-regular",
    lineHeight: 18,
    marginTop: -235,
    marginLeft: 9
  },
  materialDisabledTextbox3: {
    width: 360,
    height: 43,
    marginTop: 133,
    marginLeft: 9
  },
  materialButtonShare3: {
    width: 56,
    height: 56,
    marginTop: -433,
    marginLeft: 19
  }
});

export default Registater;
