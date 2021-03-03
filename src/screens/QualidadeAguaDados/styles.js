import { StyleSheet, Dimensions } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    height: Height,
  },
  viewTopo: {
    width: Width,
    height: hp('45%'),
    backgroundColor: '#2DB3BACC',
    borderBottomLeftRadius: wp('10%'),
    borderBottomRightRadius: wp('30%'),
  },
  imageToo: {
    width: Width,
  },
  viewMiddle: {
    alignSelf: 'center',
    elevation: wp('2%'),
    width: wp('65%'),
    height: hp('8%'),
    position: 'absolute',
    marginTop: hp('-4%'),
    backgroundColor: '#FFFFFF',
    borderRadius: wp('5%'),
  },
  text: {
    fontSize: wp('4.8%'),
    marginTop: hp('2.5%'),
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#318568',
  },
  viewBottom: {
    alignSelf: 'center',
    position: 'absolute',
    width: wp('90%'),
    height: hp('80%'),
    marginTop: hp('20%'),
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: wp('15%'),
    borderTopRightRadius: wp('15%'),
  },
  iconOut: {
    position: 'absolute',
    marginTop: hp('6%'),
    marginLeft: hp('3%'),
  },

  inputAlign: {
    marginTop: hp('10%'),
    alignSelf: 'center',
  },
  input: {
    marginTop: hp('2%'),
    backgroundColor: '#FFFFFF',
  },
  button: {
    alignSelf: 'center',
    marginTop: hp('5%'),
  },
});
