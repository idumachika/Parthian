import React, {useEffect, useState} from 'react';
import {ActivityIndicator, TouchableWithoutFeedback} from 'react-native';
import {View, StyleSheet, TextInput, Keyboard, Alert} from 'react-native';
import CustomButton from '../components/CustomButton';
import {useSelector} from 'react-redux';
import {
  useFundTransferMutation,
  useGetBanksQuery,
  useAccountVerificationMutation,
} from '../features/transferApi';
import RNPickerSelect from '../components/dropDownPicker';
import {generateRandom, validateAmount} from '../utils/utility';

interface Bank {
  label: string;
  value: string;
}

interface Props {
  bankMap: Bank[];
  data: {
    data: Account[];
  } | null;
  accountValidationLoadng: boolean;
  loadBankDetail: boolean;
  updateNewItem: (obj: {label: string; value: string}) => void;
  account_bank: string;
  account_number: string;
  amount: string;
  narration: string;
  accountName: string | null;
  handleSubmit: () => void;
  submitTransferLoading: boolean;
}

const FundTransfer: React.FC<Props> = ({}) => {
  const [fundTransfer, result] = useFundTransferMutation();
  const {data, isLoading: loadBankDetail, error} = useGetBanksQuery('');
  const [accountVerification, response] = useAccountVerificationMutation();

  const {isLoading: accountValidationLoadng} = response;
  const {isLoading: submitTransferLoading} = result;
  const [accountName, setAccountName] = useState('');
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
  const user = useSelector(state => state);
  console.log('=======', user.user);

  type NewItemType = {
    label: keyof typeof transferItem;
    value: string;
  };
  const updateNewItem = ({label, value}: NewItemType) => {
    setTransferItem({...transferItem, [label]: value});
  };

  const {account_bank, account_number, amount, narration} = transferItem;

  useEffect(() => {
    if (account_number.trim().length === 10) {
      VerifyAccountNumber();
    }
  }, [account_number]);

  const VerifyAccountNumber = () => {
    const transferItem: {account_bank: string; account_number: string} = {
      account_bank,
      account_number,
    };
    try {
      accountVerification(transferItem)
        .then(res => {
          const {data} = res;
          if (data?.status === 'success') {
            setAccountName(data?.data?.account_name);
          } else {
            Alert.alert('Failed', 'Account Validation Failed');
          }
        })
        .then(error => {
          console.log(error);
        });
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmit = async (): Promise<void> => {
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
          const {data} = res;
          if (data.status === 'success') {
            Alert.alert('success', 'Transfer Successful');
          } else {
            Alert.alert('fail', 'Transfer Failed');
          }
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
  if (accountValidationLoadng) {
    return (
      <View style={styles.accountLoader}>
        <ActivityIndicator size={30} color={'black'} />
      </View>
    );
  }

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
            {/* {bankMap.length > 0 && (
              <RNPickerSelect
                placeholder={{
                  label: '-- Select Bank --',
                  value: '......',
                }}
                items={bankMap}
                onValueChange={(account_bank: string) =>
                  updateNewItem({label: 'account_bank', value: account_bank})
                }
                value={account_bank}
              />
            )} */}

            <TextInput
              style={[styles.input, styles.total]}
              placeholder="Account Number"
              onChangeText={text =>
                updateNewItem({label: 'account_number', value: text})
              }
              value={account_number}
              keyboardType="numeric"
            />
            {accountName ? (
              <TextInput
                style={[styles.input, styles.total]}
                placeholder="Account Name"
                value={accountName}
                keyboardType="numeric"
              />
            ) : null}

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
  accountLoader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default FundTransfer;
