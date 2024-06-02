import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Platform, ScrollView, Image, TextInput } from 'react-native';
import { Text } from 'react-native-elements';
import { Button } from '@rneui/themed';
import styles from '../style/LoginStyle';
import { lerUsuarios } from '../users/UsuarioDB';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const navigation = useNavigation();

  const handleCadastroPress = () => {
    navigation.navigate('Cadastro do usuário');
  };

  const entrar = async () => {
    if (!email || !password) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }
  
    try {
      const usuarios = await lerUsuarios();
      console.log('Usuários:', usuarios);
  
      const usuario = usuarios.find(u => u.email === email && u.senha === password);
  
      if (usuario) {
        Alert.alert('Sucesso', 'Logado com sucesso');
      } else {
        Alert.alert('Erro', 'Credenciais inválidas. Por favor, verifique se seu e-mail e senha estão corretos.');
      }
    } catch (error) {
      Alert.alert('Erro', 'Houve um erro ao fazer login. Por favor, tente novamente mais tarde.');
      console.error('Erro ao fazer login:', error);
    }
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

          <TextInput
            placeholder="E-mail"
            placeholderTextColor="gray"
            onChangeText={(value) => setEmail(value)}
            keyboardType="email-address"
            style={styles.input}
          />

          <TextInput
            placeholder="Senha"
            placeholderTextColor="gray"
            onChangeText={(value) => setPassword(value)}
            secureTextEntry={true}
            style={styles.input}
          />

          <Button
            title="LOGIN"
            buttonStyle={styles.loginButton}
            containerStyle={styles.loginButtonContainer}
            titleStyle={styles.loginButtonTitle}
            onPress={entrar}
          />

          <View style={{ alignItems: 'center', marginTop: 20 }}>
            <View style={{flexDirection: 'row', alignItems: 'center',}}>
              <Text>
                Não tem conta?{' '}
              </Text>
              <View style={styles.registerContainer}>
                <Text style={styles.registerText} onPress={handleCadastroPress}>
                  Registrar-se
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}