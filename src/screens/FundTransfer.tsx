import React, {useState} from 'react';
import {ActivityIndicator, TouchableWithoutFeedback} from 'react-native';
import {View, StyleSheet, TextInput, Keyboard, Alert} from 'react-native';
import CustomButton from '../components/CustomButton';
import {
  useFundTransferMutation,
  useGetBanksQuery,
} from '../features/transferApi';
import RNPickerSelect from '../components/dropDownPicker';
import {generateRandom, validateAmount} from '../utils/utility';

const FundTransfer = ({navigation}: any) => {
  const [fundTransfer, result] = useFundTransferMutation();
  const {data, isLoading: loadBankDetail, error} = useGetBanksQuery('');
  console.log('data=====', data);
  const {data: finalGetandSubmit, isLoading: submitTransferLoading} = result;
  console.log('finalGetandSubmit', finalGetandSubmit);
  const [transferItem, setTransferItem] = useState({
    account_bank: '',
    account_number: '',
    amount: '',
    narration: '',
    currency: '',
    reference: '',
    callback_url: '',
    debit_currency: '',
  });

  type NewItemType = {
    label: keyof typeof transferItem;
    value: string;
  };

  const updateNewItem = ({label, value}: NewItemType) => {
    setTransferItem({...transferItem, [label]: value});
  };

  const {account_bank, account_number, amount, narration} = transferItem;

  const handleSubmit = async () => {
    if (!account_bank || !account_number || !amount || !narration) {
      Alert.alert('Please fill in all fields');
      return;
    }

    const transferItem = {
      account_bank,
      account_number,
      amount,
      narration,
      currency: 'NGN',
      reference: generateRandom().toString(),
      callback_url: 'https://www.flutterwave.com/ng/',
      debit_currency: 'NGN',
    };

    if (!validateAmount(amount)) {
      Alert.alert(
        'Invalid amount. Please enter an amount between 100 and 10,000,000.',
      );
      return;
    }

    try {
      fundTransfer(transferItem)
        .then(res => {
          console.log(res);
        })
        .then(error => {
          console.log(error);
        });
    } catch (e) {
      console.log(e);
    }
  };

  let bankMap = data?.data.map((account: {name: any; code: any}) => ({
    label: account.name,
    value: account.code,
  }));
  return (
    <View style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        {loadBankDetail ? (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ActivityIndicator size={30} color="#000" />
          </View>
        ) : (
          <View style={styles.container}>
            {data?.data.length > 0 && (
              <RNPickerSelect
                placeholder={{
                  label: '-- Select Bank --',
                  value: '......',
                }}
                items={bankMap}
                onValueChange={(account_bank: React.SetStateAction<never[]>) =>
                  updateNewItem({label: 'account_bank', value: account_bank})
                }
                value={account_bank}
              />
            )}

            <TextInput
              style={[styles.input, styles.total]}
              placeholder="Account Number"
              onChangeText={text =>
                updateNewItem({label: 'account_number', value: text})
              }
              value={account_number}
              keyboardType="numeric"
            />
            <TextInput
              style={[styles.input, styles.price]}
              placeholder="Amount"
              onChangeText={text =>
                updateNewItem({label: 'amount', value: text})
              }
              value={amount}
              keyboardType="numeric"
            />
            <TextInput
              style={[styles.input, styles.desc]}
              placeholder="Narration"
              onChangeText={text =>
                updateNewItem({label: 'narration', value: text})
              }
              value={narration}
            />

            <CustomButton
              title={
                submitTransferLoading ? (
                  <ActivityIndicator size={30} color={'#FFF'} />
                ) : (
                  'Transfer'
                )
              }
              disabled={submitTransferLoading}
              backgroundColor={'#0074D9'}
              textColor={'#fff'}
              onPress={handleSubmit}></CustomButton>
          </View>
        )}
      </TouchableWithoutFeedback>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  modalBG: {
    flex: 1,
    zIndex: -1,
  },
  addButton: {
    backgroundColor: '#007aff',
  },
  addButtonLabel: {
    fontSize: 32,
    color: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDDDDD',
    fontSize: 15,
    paddingHorizontal: 8,
    borderRadius: 4,
    color: '#000000',
  },
  name: {
    height: 60,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  total: {
    height: 60,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  price: {
    height: 60,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  desc: {
    height: 60,
    marginBottom: 20,
    fontWeight: 'bold',
  },
});
export default FundTransfer;
