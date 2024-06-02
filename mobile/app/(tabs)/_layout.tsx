import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../../scripts/Login';
import CadastroUsuario from '../../scripts/CadastroUsuario';

const Stack = createStackNavigator();

const Layout = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro do usuário" component={CadastroUsuario} />
    </Stack.Navigator>
  );
};

export default Layout;