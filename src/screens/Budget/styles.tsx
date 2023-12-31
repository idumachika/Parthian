import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    // flex: 1,
    paddingBottom: 60,
    backgroundColor: '#fff',
  },
  HeaderContainer: {
    width: '100%',
    height: 290,
    marginTop: 20,
  },
  HeaderProfileSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  profileName: {
    color: '#fff',
    fontSize: 15,
    lineHeight: 19,
    fontWeight: '400',
  },
  balanceContainer: {
    paddingHorizontal: 30,
    justifyContent: 'center',
    paddingTop: 30,
  },
  amountTxt: {
    color: '#1C1939',
    fontSize: 22,
    lineHeight: 28,
    fontWeight: '700',
    textAlign: 'center',
  },
  availbalance: {
    color: '#1C1939',
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 25,
    textAlign: 'center',
    paddingTop: 10,
  },
  cardContainer: {
    position: 'absolute',
    bottom: '-30%',
    left: 0,
    right: 0,
    paddingHorizontal: 20,
  },
  cardWrapper: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 3,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  cardTitle: {
    color: '#1C1939CC',
    fontSize: 12,
    lineHeight: 14,
    marginBottom: 5,
    fontWeight: '400',
    marginLeft: 20,
  },
  cardAmount: {
    color: '#1C1939',
    fontSize: 24,
    lineHeight: 31,
    fontWeight: '700',
    marginLeft: 10,
  },

  cardDescriptionContainer: {
    paddingHorizontal: 30,
    paddingTop: 10,
  },
  cardDescription: {
    color: '#1C1939',
    fontSize: 13,
    lineHeight: 20,
    fontWeight: '400',
  },
  cardTellMore: {
    color: '#7165E3',
    fontSize: 13,
    lineHeight: 20,
    fontWeight: '700',
  },
  leftTextTitle: {
    color: '#7165E3',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 20,
  },
  TransactionCardContent: {
    backgroundColor: '#fff',
    borderRadius: 20,
    width: 55,
    height: 55,
    marginTop: 20,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 3,
  },
  transSubSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  HeaderTitle: {
    color: '#1C1939',
    fontSize: 18,
    lineHeight: 23,
    fontWeight: '700',
  },
  transContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  transItem: {
    color: '#1C1939',
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '700',
    marginBottom: 5,
  },
  transaction: {
    color: '#1C1939',
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '400',
  },
  TransAmount: {
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 23,
    color: '#1C1939',
  },

  grapCardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    width: '50%',
    marginTop: 20,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },

  graphTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1C1939',
    lineHeight: 18,
    marginBottom: 5,
  },
  graphNumber: {
    color: '#9EA6BE',
    lineHeight: 15,
    fontSize: 12,
    fontWeight: '700',
  },
  graphContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
