import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {useGetAllPaymentByIDQuery} from '../features/transferApi';
type Item = {
  account_number: string;
  bank_code: string;
  full_name: string;
  amount: number;
  fee: number;
  status: string;
  reference: string;
  narration: string;
  bank_name: string;
};

type MyProps = {
  item: Item[];
};

type Props = {
  route: {
    params: {
      name: string;
    };
  };
};

const ViewPaymentDetails: React.FC = ({navigation, route}: any) => {
  const {id} = route?.params;

  const {
    data: paymentDetail,
    isLoading: loadPaymentDetail,
    error,
  } = useGetAllPaymentByIDQuery(id);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Details</Text>
      {loadPaymentDetail ? (
        <View style={styles.loader}>
          <ActivityIndicator size={30} color={'black'} />
        </View>
      ) : (
        <View style={styles.summaryContainer}>
          {Object.keys(paymentDetail?.data).map((ky, i) => {
            return (
              <View key={i} style={styles.summaryContent}>
                <Text style={styles.summaryTextRight}>{ky}</Text>
                <Text style={styles.summaryTextLeft}>
                  {paymentDetail?.data[ky]}
                </Text>
              </View>
            );
          })}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  summaryContainer: {
    flex: 1,
    marginTop: 20,
  },
  summaryContent: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    borderRadius: 8,
  },
  summaryTextRight: {
    fontSize: 14,
    marginRight: 10,
    flex: 1.5,
  },
  summaryTextLeft: {
      fontSize: 14,
      flex: 1,
      textAlign: 'left',
  },

  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default ViewPaymentDetails;
