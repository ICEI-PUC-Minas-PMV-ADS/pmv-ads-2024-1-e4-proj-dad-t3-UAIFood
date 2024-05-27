import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Login from '../../scripts/Login';

const Layout = () => {
  const navigation = useNavigation();

  return <Login navigation={navigation} />;
};

export default Layout;