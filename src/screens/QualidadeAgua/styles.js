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
    height: hp('35%'),
    backgroundColor: '#2DB3BACC',
    borderBottomLeftRadius: wp('5%'),
    borderBottomRightRadius: wp('28%'),
    marginTop: hp('20'),
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
    width: wp('79%'),
    height: hp('30%'),
    borderRadius: wp('16%'),
    marginTop: hp('14%'),
    marginLeft: hp('5%'),
  },
  graphycPier: {
    height: hp('26%'),
    marginTop: hp('1%'),
    marginRight: wp('3%'),
    marginLeft: wp('17%'),
  },
  viewGraphycBar: {
    elevation: wp('5%'),
    backgroundColor: '#FFFFFF',
    borderRadius: wp('10%'),
    width: wp('90%'),
    height: hp('30%'),
    alignSelf: 'center',
    marginTop: hp('10%'),
  },
  graphycBar: {
    height: hp('25%'),
    width: wp('80%'),
    marginTop: hp('2.5%'),
    alignSelf: 'center',
  },
  titleGraphyc: {
    marginTop: hp('-19%'),
    marginLeft: hp('6%'),
    fontSize: wp('6%'),
    color: '#2E587F',
  },
  viewLegend1: {
    backgroundColor: '#9BD47Fe6',
    borderRadius: wp('5%'),
    position: 'absolute',
    elevation: wp('3%'),
    width: wp('25%'),
    height: hp('11%'),
    marginLeft: hp('1%'),
    marginTop: hp('36%'),
    alignItems: 'center',
    paddingVertical: wp('2%'),
  },
  viewLegend2: {
    backgroundColor: '#69CD64e6',
    borderRadius: wp('5%'),
    position: 'absolute',
    elevation: wp('3%'),
    width: wp('25%'),
    height: hp('11%'),
    marginLeft: hp('18%'),
    marginTop: hp('36%'),
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
    marginTop: hp('8%'),
    marginLeft: wp('5%'),
    position: 'absolute',
    color: '#2E587F',

  },
  textKit1: {
    marginTop: hp('11.5%'),
    marginLeft: wp('25%'),
    position: 'absolute',
    color: '#2E587F',

  },
  textKit2: {
    marginTop: hp('9%'),
    marginLeft: wp('40%'),
    position: 'absolute',
    color: '#2E587F',

  },
  textKit3: {
    marginTop: hp('3%'),
    marginLeft: wp('64%'),
    position: 'absolute',
    color: '#2E587F',

  },
  textKit4: {
    marginTop: hp('7%'),
    marginLeft: wp('78%'),
    position: 'absolute',
    color: '#2E587F',

  },
  mouths: {
    marginLeft: wp('2%'),
    marginTop: wp('-52%'),
  },
  textMouths: {
    marginTop: wp('5%'),
    color: '#2E587F',
  },
  viewBox: {
    flexDirection: 'row',
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
