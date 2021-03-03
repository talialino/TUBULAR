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
    width: wp('90%'),
    height: hp('30%'),
    backgroundColor: '#2DB3BACC',
    borderBottomLeftRadius: wp('5%'),
    borderBottomRightRadius: wp('28%'),
    borderTopRightRadius: wp('20%'),
  },
  iconOut: {
    position: 'absolute',
    marginTop: hp('5%'),
    marginLeft: hp('2%'),
  },
  data: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    marginTop: hp('4%'),
    marginLeft: hp('28%'),
  },
  dayYars: {
    flexDirection: 'column',
  },
  day: {
    fontSize: wp('12%'),
    color: '#2DB3BACC',
  },
  mouth: {
    fontSize: wp('5%'),
    color: '#2DB3BACC',
  },
  yars: {
    fontSize: wp('5%'),
    color: '#2DB3BACC',
  },
  viewGraphycPie: {
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    elevation: wp('3%'),
    width: wp('75%'),
    height: hp('35%'),
    borderRadius: wp('16%'),
    marginTop: hp('23%'),
    marginLeft: hp('2%'),
  },
  graphycPier: {
    height: hp('26%'),
    marginTop: hp('6%'),
    marginRight: hp('4%'),
  },
  viewGraphycBar: {
    elevation: wp('3%'),
    backgroundColor: '#FFFFFF',
    borderRadius: wp('4%'),
    width: wp('90%'),
    alignSelf: 'center',
    marginTop: hp('4%'),
  },
  graphycBar: {
    height: hp('26%'),
    width: wp('78%'),
    marginTop: hp('-2%'),
    alignSelf: 'center',
    marginLeft: hp('4%'),
  },
  titleGraphyc: {
    marginTop: hp('-19%'),
    marginLeft: hp('6%'),
    fontSize: wp('6%'),
    color: '#2E587F',
  },
  viewLegend1: {
    backgroundColor: '#9BD47FE6',
    borderRadius: wp('5%'),
    position: 'absolute',
    elevation: wp('3%'),
    width: wp('25%'),
    height: hp('11%'),
    marginLeft: hp('29%'),
    marginTop: hp('5%'),
    alignItems: 'center',
    paddingVertical: wp('2%'),
  },
  viewLegend2: {
    backgroundColor: '#FFC8B6E6',
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
  textLegendPie: {
    marginTop: hp('2%'),
    width: wp('18%'),
    textAlign: 'center',
    fontSize: wp('4.2%'),
    color: '#2E587F',
  },
  textLegendBar: {
    marginTop: hp('20%'),
    alignSelf: 'center',
    width: wp('70%'),
    textAlign: 'center',
    fontSize: wp('6%'),
    color: '#2E587F',
  },

  kits: {
    marginTop: hp('-20.5%'),
  },
  textKit: {
    marginBottom: hp('2%'),
    marginLeft: hp('0.5%'),
  },
  mouths: {
    flexDirection: 'row',
  },
  textMouths: {
    marginLeft: hp('5.6%'),
  },
  viewBox: {
    flexDirection: 'row',
  },
  boxList: {
    marginTop: hp('12'),
    width: wp('30%'),
    height: hp('5%'),
  },

  buttons: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: hp('8%'),
    marginBottom: hp('2%'),
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
