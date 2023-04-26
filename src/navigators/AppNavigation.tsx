import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import FundTransfer from '../screens/FundTransfer';
import ViewPayment from '../screens/ViewPayment';
import {RootStackParamList} from '../types/NavigationTypes';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator<RootStackParamList>();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Transfer" component={FundTransfer} />
        <Tab.Screen name="Payment" component={ViewPayment} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
