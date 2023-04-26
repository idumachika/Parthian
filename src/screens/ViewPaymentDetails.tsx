import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
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

const ViewPaymentDetails: React.FC = ({navigation}: any) => {
  const {
    data: paymentDetail,
    isLoading: loadPaymentDetail,
    error,
  } = useGetAllPaymentByIDQuery('');
  console.log('data', paymentDetail);


  return (
    <View style={styles.container}>
      <Text>paymentDetails</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default ViewPaymentDetails;
