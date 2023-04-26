import React from 'react';
import {View, Text, FlatList, StyleSheet, ActivityIndicator} from 'react-native';
import {
  useGetAllPaymentQuery,
} from '../features/transferApi';
import PaymentDetails from '../components/PaymentDetails'


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

const ViewPayment: React.FC = ({ navigation }: any) => {
  const {
    data: paymentDetail,
    isLoading: loadPaymentDetail,
    error,
  } = useGetAllPaymentQuery('');
    console.log('data', paymentDetail);

     const navigateToScreen = (inventory: any) => {
       navigation.navigate(
         'Inventory Detail' as never,
         {id: inventory.id} as never,
       );
     };
    
     const renderPaymentDetails = () => {
       return (
         <FlatList
           data={paymentDetail?.data}
           r={
             <View>
               <Text style={{color: '#333', fontSize: 24}}>
                 No Payment Found
               </Text>
             </View>
           }
           renderItem={({item}) => (
             <PaymentDetails
               onPress={() => navigateToScreen(item)}
               item={item}
             />
           )}
           keyExtractor={item => item.id}
         />
       );
     };

  return (
    <View style={styles.container}>
      {loadPaymentDetail ?<View style={styles.loader}>
        <ActivityIndicator size={30} color="#000" />
      </View> : renderPaymentDetails()
  }</View>);
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
    alignItems:'center',
  }
 
});
export default ViewPayment;
