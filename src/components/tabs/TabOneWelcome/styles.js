import { StyleSheet, Dimensions } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    width: Width,
    height: Height,
  },
  image: {
    marginTop: hp('-23%'),
    marginLeft: wp('7%'),
  },
  title: {
    fontSize: wp('6.5%'),
    color: '#1F9FA2',
    marginTop: hp('12%'),
    marginLeft: wp('0%'),
  },
  textBody: {
    textAlign: 'center',
    width: wp('80%'),
    position: 'absolute',
    fontSize: wp('4.5%'),
    color: '#1F9FA2',
    marginTop: hp('55%'),
  },
  circules: {
    alignSelf: 'center',
    flexDirection: 'row',
    position: 'absolute',
  },
  circule0: {
    top: hp('80%'),
    width: wp('5%'),
    height: hp('2.5%'),
    borderRadius: wp('100%'),
    backgroundColor: '#1F9FA2',
  },
  circule1: {
    top: hp('80%'),
    width: wp('5%'),
    height: hp('2.5%'),
    borderRadius: wp('100%'),
    backgroundColor: '#1F9FA299',
  },
  circule2: {
    top: hp('80%'),
    width: wp('5%'),
    height: hp('2.5%'),
    borderRadius: wp('100%'),
    backgroundColor: '#1F9FA299',
  },
  circule3: {
    top: hp('80%'),
    width: wp('5%'),
    height: hp('2.5%'),
    borderRadius: wp('100%'),
    backgroundColor: '#1F9FA299',
  },
});
