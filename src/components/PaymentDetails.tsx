import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type Item = {
  name: string;
  total: number;
  price: number;
  desc: string;
};

type MyProps = {
  item: Item[];
  onPress: (item: any) => void;
};
const PaymentDetails = ({item, onPress}: MyProps) => {
  interface Item {
    account_number: string;
    bank_code: string;
    full_name: string;
    amount: number;
    fee: number;
    status: string;
    reference: string;
    narration: string;
    bank_name: string;
  }

  const {
    account_number,
    full_name,
    amount,
    fee,
    status,
    reference,
    narration,
    bank_name,
  } = item;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.name}>Account Number: {account_number}</Text>
        <Text style={styles.name}>Full Name: {full_name}</Text>
        <Text style={styles.name}>Amount: {amount}</Text>
        <Text style={styles.name}>Bank Name: {bank_name}</Text>
        <Text style={styles.name}>Narration: {narration}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    padding: 20,
    marginVertical: 8,
    borderRadius: 8,
  },
  item: {
    backgroundColor: '#007aff',
    padding: 20,
    marginVertical: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 10,

    // color: '#000',
  },
  text: {
    fontSize: 16,
    // color: '#000',
  },
});

export default PaymentDetails;
