import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import FundTransfer from '../screens/FundTransfer';
import ViewPayment from '../screens/ViewPayment';
import ViewPaymentDetails from '../screens/ViewPaymentDetails';
import {RootStackParamList} from '../types/NavigationTypes';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootStackParamList>();
const MyTabs = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Transfer" component={FundTransfer} />
      <Tab.Screen name="Payment" component={ViewPayment} />
    </Tab.Navigator>
  );
};
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Transfer">
        <Stack.Screen name="Transfers" component={MyTabs} />
        <Stack.Screen name="PaymentDetails" component={ViewPaymentDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
