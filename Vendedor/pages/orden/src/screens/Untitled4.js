import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialCard6 from "../components/MaterialCard6";
import MaterialButtonShare4 from "../components/MaterialButtonShare4";
import MaterialButtonViolet3 from "../components/MaterialButtonViolet3";
import MaterialButtonViolet4 from "../components/MaterialButtonViolet4";
import MaterialButtonViolet5 from "../components/MaterialButtonViolet5";

function Untitled4(props) {
  return (
    <View style={styles.container}>
      <View style={styles.materialCard6Stack}>
        <MaterialCard6 style={styles.materialCard6}></MaterialCard6>
        <MaterialButtonShare4
          style={styles.materialButtonShare4}
        ></MaterialButtonShare4>
      </View>
      <View style={styles.materialButtonViolet3Row}>
        <MaterialButtonViolet3
          style={styles.materialButtonViolet3}
        ></MaterialButtonViolet3>
        <MaterialButtonViolet4
          style={styles.materialButtonViolet4}
        ></MaterialButtonViolet4>
        <MaterialButtonViolet5
          style={styles.materialButtonViolet5}
        ></MaterialButtonViolet5>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  materialCard6: {
    top: 0,
    left: 0,
    width: 375,
    height: 671,
    position: "absolute"
  },
  materialButtonShare4: {
    top: 49,
    left: 15,
    width: 56,
    height: 56,
    position: "absolute"
  },
  materialCard6Stack: {
    width: 375,
    height: 671
  },
  materialButtonViolet3: {
    width: 88,
    height: 36
  },
  materialButtonViolet4: {
    width: 100,
    height: 36,
    marginLeft: 35
  },
  materialButtonViolet5: {
    width: 100,
    height: 36,
    marginLeft: 23
  },
  materialButtonViolet3Row: {
    height: 36,
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 15,
    marginRight: 14
  }
});

export default Untitled4;
