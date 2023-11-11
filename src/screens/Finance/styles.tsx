import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    paddingBottom: 60,
  },
  HeaderContainer: {
    width: '100%',
    height: 300,
    backgroundColor: '#7165E3',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  ActivityCardContent: {
    backgroundColor: '#7165E3',
    borderRadius: 15,
    width: 50,
    height: 50,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#9EA6BE',
    lineHeight: 20,
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 13,
    lineHeight: 20,
    fontWeight: '700',
    color: '#1C1939',
    marginBottom: 5,
  },
  moreDetailBtn: {
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 20,
    color: '#7165E3',
    marginTop: 10,
  },
  RecommendationCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginHorizontal: 20,
    paddingVertical: 30,
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  CardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 15,
    color: '#fff',
    lineHeight: 20,
    fontWeight: '700',
  },
});
