import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import FundTransfer from '../screens/FundTransfer';
import ViewPayment from '../screens/ViewPayment';
import ViewPaymentDetails from '../screens/ViewPaymentDetails';
import Login from '../screens/Login';
import FinanceBudget from '../screens/Finance';
import {RootStackParamList} from '../types/NavigationTypes';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import Tranfer from '../screens/Transfer';
import Budget from '../screens/Budget';

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
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="LandingScreen">
        <Stack.Screen name="Transfers" component={MyTabs} />
        <Stack.Screen name="LandingScreen" component={HomeScreen} />
        <Stack.Screen name="FinanceBudget" component={FinanceBudget} />
        <Stack.Screen name="Transfer" component={Tranfer} />
        <Stack.Screen name="Budget" component={Budget} />

        {/* <Stack.Screen name="Login" component={Login} /> */}
        <Stack.Screen name="PaymentDetails" component={ViewPaymentDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
