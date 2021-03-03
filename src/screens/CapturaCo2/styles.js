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
    borderBottomLeftRadius: wp('1%'),
    borderBottomRightRadius: wp('30%'),
  },
  imageToo: {
    width: Width,
  },
  iconOut: {
    position: 'absolute',
    marginTop: hp('5%'),
    marginLeft: hp('2%'),
  },
  data: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    marginTop: hp('10%'),
  },
  dayYars: {
    flexDirection: 'column',
  },
  day: {
    fontSize: wp('15%'),
    color: '#FFFFFF',
  },
  mouth: {
    fontSize: wp('8%'),
    color: '#FFFFFF',
  },
  yars: {
    fontSize: wp('8%'),
    color: '#FFFFFF',
  },
  viewGraphyc: {
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    elevation: wp('3%'),
    width: wp('75%'),
    height: hp('35%'),
    borderRadius: wp('16%'),
    marginTop: hp('28%'),
    marginLeft: hp('4%'),
  },
  graphyc: {
    height: hp('26%'),
    marginTop: hp('5%'),
    marginRight: hp('4%'),
  },
  titleGraphyc: {
    marginTop: hp('10%'),
    marginLeft: hp('12%'),
    fontSize: wp('10%'),
  },
  viewLegend: {
    backgroundColor: '#FFBEA8',
    borderRadius: wp('5%'),
    position: 'absolute',
    elevation: wp('3%'),
    width: wp('25%'),
    height: hp('11%'),
    marginLeft: hp('29%'),
    marginTop: hp('19%'),
    alignItems: 'center',
    paddingVertical: wp('2%'),
  },
  textLegend: {
    width: wp('18%'),
    textAlign: 'center',
    fontSize: wp('4.2%'),
  },
  buttons: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: hp('30%'),
  },

  button: {
    backgroundColor: '#318568C7',
    borderRadius: wp('4%'),
    width: wp('40%'),
    height: hp('10%'),
    marginRight: wp('4%'),
    marginLeft: wp('4%'),
  },
  textButton: {
    color: '#FFFFFF',
    fontSize: wp('4%'),
    padding: wp('2%'),
  },
  flowButton: {
    marginLeft: hp('14%'),
  },
});
