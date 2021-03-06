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
    marginTop: hp('18%'),
    marginLeft: wp('-5%'),
  },
  textBody: {
    textAlign: 'center',
    width: wp('80%'),
    position: 'absolute',
    fontSize: wp('4.5%'),
    color: '#1F9FA2',
    marginTop: hp('60%'),
  },
  bodyCircule: {
    flexDirection: 'row',
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
    backgroundColor: '#1F9FA299',
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
    backgroundColor: '#1F9FA2',
  },
});
