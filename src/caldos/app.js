import React from 'react';
import { View } from 'react-native';
import CaldosList from './CaldosList';
import AddCaldo from './AddCaldo';

const App = () => {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <CaldosList />
      <AddCaldo />
    </View>
  );
};

export default App;