import { StyleSheet, Dimensions } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const Width = Dimensions.get("window").width;

export default StyleSheet.create({
  container: {},
  text: {
    color: "#FFFFFF",
    fontSize: wp("8%"),
  },
  header: {
    marginTop: hp("10%"),
    marginRight: hp("10%"),
    marginLeft: hp("6%"),

  },
  buttons: {
    marginTop: hp("10%"),
    alignItems: "center",
  },
  button: {
    width: wp("80%"),
    marginTop: hp("2%"),
  },
  rodape: {
    position: "absolute",
    marginTop: hp("70%"),
    width: Width,
  },
});
