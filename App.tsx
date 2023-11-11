import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {store, persistor} from './src/features/store';
import AppNavigation from './src/navigators/AppNavigation';
import FundTransfer from './src/screens/FundTransfer';
import LoginScreen from './src/screens/Login';

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
        <AppNavigation />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
