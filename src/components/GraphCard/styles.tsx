
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
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

