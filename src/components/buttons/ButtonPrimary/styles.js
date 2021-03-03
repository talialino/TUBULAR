import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
  Container: {
    height: hp("6.5%"),
    width: wp("65%"),
    backgroundColor: "#1F9FA2",

    borderRadius: hp("0.8%"),
    alignItems: "center",
    justifyContent: "center",
  },
  Text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: wp("5%"),
    textAlign: "center",
  },
});
