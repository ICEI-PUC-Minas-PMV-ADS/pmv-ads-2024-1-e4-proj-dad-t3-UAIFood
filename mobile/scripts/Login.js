import React, { useState } from 'react';
import { StyleSheet, View, KeyboardAvoidingView, Platform, ScrollView, Image } from 'react-native';
import { Input, Text } from 'react-native-elements';
import { Button } from '@rneui/themed';
import styles from '../style/MainStyle';

export default function Login({ navigation }) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const cadastrar = () => {
    navigation.navigate('Cadastro do usuário');
  };

  const entrar = () => {
    // Adicione a lógica de login aqui
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0} 
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
      >
        <View style={styles.formContainer}>
        <Image
            source={require('../assets/images/logo.png')}
            style={styles.logo}
          />
          <Input
            placeholder="E-mail"
            placeholderTextColor="gray"
            onChangeText={(value) => setEmail(value)}
            keyboardType="email-address"
            inputContainerStyle={styles.inputContainerStyle}
            inputStyle={styles.input}
          />
          <Input
            placeholder="Senha"
            placeholderTextColor="gray"
            onChangeText={(value) => setPassword(value)}
            secureTextEntry={true}
            inputContainerStyle={styles.inputContainerStyle}
            inputStyle={styles.input}
          />
          <Button
            title="LOGIN"
            buttonStyle={styles.loginButton}
            containerStyle={styles.loginButtonContainer}
            titleStyle={styles.loginButtonTitle}
            onPress={entrar}
          />

          <Text style={styles.registrarTexto} onPress={cadastrar}>
            Não tem conta? Registrar-se
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}