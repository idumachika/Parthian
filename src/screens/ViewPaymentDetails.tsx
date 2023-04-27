import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {useGetAllPaymentByIDQuery} from '../features/transferApi';
import PaymentDetails from '../components/PaymentDetails';

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
  const {data} = paymentDetail;
  console.log('data======', data.data);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Summary Screen</Text>
      {/* <View style={styles.summaryContainer}>
        <Text style={styles.summaryText}>
          Account Number: {data?.account_number}
        </Text>
        <Text style={styles.summaryText}>Amount: {data?.amount}</Text>
        <Text style={styles.summaryText}>Fee: {data?.fee}</Text>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  summaryContainer: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
  },
  summaryText: {
    fontSize: 18,
    marginBottom: 10,
  },
});
export default ViewPaymentDetails;
