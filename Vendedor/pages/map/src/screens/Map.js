import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialMapView from "../components/MaterialMapView";
import MaterialButtonShare5 from "../components/MaterialButtonShare5";
import MaterialButtonShare4 from "../components/MaterialButtonShare4";

function Map(props) {
  return (
    <View style={styles.container}>
      <MaterialMapView style={styles.materialMapView}></MaterialMapView>
      <MaterialButtonShare5
        style={styles.materialButtonShare5}
      ></MaterialButtonShare5>
      <MaterialButtonShare4
        style={styles.materialButtonShare6}
      ></MaterialButtonShare4>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  materialMapView: {
    width: 375,
    height: 812
  },
  materialButtonShare5: {
    width: 56,
    height: 56
  },
  materialButtonShare6: {
    top: 49,
    left: 15,
    width: 56,
    height: 56,
    position: "absolute"
  }
});

export default Map;
