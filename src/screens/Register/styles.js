import { StyleSheet, Dimensions } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const Width = Dimensions.get('window').width;

export default StyleSheet.create({
  title: {
    fontSize: wp('6.5%'),
    color: '#FFFFFF',
    marginTop: hp('11%'),
    marginLeft: wp('11%'),
  },
  inputHeader: {
    marginTop: hp('4%'),
    alignItems: 'center',
  },
  input: {
    marginTop: hp('2%'),
    backgroundColor: '#54CDD1',
    borderBottomColor: '#FFFFFF',
    color: '#FFF',
  },
  button: {
    marginTop: hp('6%'),
    marginLeft: wp('17%'),
  },
  rodape: {
    position: 'absolute',
    marginTop: hp('70%'),
    width: Width,
  },
});
