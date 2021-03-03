import { StyleSheet, Dimensions } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const Width = Dimensions.get("window").width;

export default StyleSheet.create({
  container: {
    alignItems: "center",
  },
  image: {
    marginTop: hp("15%"),
  },
  inputHeader: {
    marginTop: hp("2%"),
  },
  input: {
    marginTop: hp("1%"),
  },
  text: {
    marginTop: hp("2%"),
    color: "#7EDA52",
    fontWeight: "bold",
  },
  button: {
    marginTop: hp("3%"),
  },
  rodape: {
    position: "absolute",
    marginTop: hp("70%"),
    width: Width,
  },
});
