import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
  input: {
    padding: 12,
    height: hp("6%"),
    width: wp("79%"),
    backgroundColor: "#F8F8F8",

    fontSize: wp("5%"),
    color: "#1F9FA2",

    borderBottomColor: "#1F9FA2",
    borderBottomWidth: wp("0.6%"),
  },
});
