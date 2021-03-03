import { StyleSheet, Dimensions } from "react-native";

const Width = Dimensions.get("window").width;
const Height = Dimensions.get("window").height;

export default StyleSheet.create({
  Container: {
    width: Width,
    height: Height,
    backgroundColor: "#F8F8F8",
  },
});
