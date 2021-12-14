// ProfilesAnimate

import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Animation from "./src/Animation";

export default function ProfilesAnimate() {
//   const animatedImages = [
//     {
//       circle: 100,
//       image: require("../../assets/profiles/bsa_ux.jpeg"),
//     },
//     {
//       circle: 150,
//       image: require("../../assets/profiles/dieegosf.jpeg"),
//     },
//     {
//       circle: 90,
//       image: require("../../assets/profiles/feuxdesign.jpeg"),
//     },
//     {
//       circle: 120,
//       image: require("../../assets/profiles/gilbertopradodesign.jpeg"),
//     },
//     {
//       circle: 130,
//       image: require("../../assets/profiles/imateussilva.jpeg"),
//     },
//   ];
//   const animatedBlurBubbles = [
//     {
//       circle: 100,
//       color: "#cffc03",
//     },
//     {
//       circle: 180,
//       color: "#fc0384",
//     },
//     {
//       circle: 90,
//       color: "#8803fc",
//     },
//     {
//       circle: 120,
//       color: "#fc8003",
//     },
//     {
//       circle: 140,
//       color: "#0703fc",
//     },
//     {
//       circle: 130,
//       color: "#fcb103",
//     },
//     {
//       circle: 150,
//       color: "#03ebfc",
//     },
//   ];
  return (
    <View style={styles.container}>
      <Animation
        VELOCITY={3}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});