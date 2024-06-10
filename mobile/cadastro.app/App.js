import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { TextInput, Button, Headline } from 'react-native-paper';


const CadastroScreen = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');

  const handleCadastro = () => {
    // Lógica para processar o cadastro
    console.log({
      nome,
      email,
      cep,
      rua,
      numero,
      complemento,
      bairro,
      cidade,
    });
    // Navegar para outra tela, se necessário
    // navigation.navigate('NextScreen');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Headline style={styles.header}>Cadastro</Headline>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          value={nome}
          onChangeText={setNome}
          style={styles.input}
          mode="outlined"
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>E-mail</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          style={styles.input}
          mode="outlined"
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>CEP</Text>
        <TextInput
          value={cep}
          onChangeText={setCep}
          keyboardType="numeric"
          style={styles.input}
          mode="outlined"
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Rua</Text>
        <TextInput
          value={rua}
          onChangeText={setRua}
          style={styles.input}
          mode="outlined"
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Número</Text>
        <TextInput
          value={numero}
          onChangeText={setNumero}
          keyboardType="numeric"
          style={styles.input}
          mode="outlined"
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Complemento</Text>
        <TextInput
          value={complemento}
          onChangeText={setComplemento}
          style={styles.input}
          mode="outlined"
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Bairro</Text>
        <TextInput
          value={bairro}
          onChangeText={setBairro}
          style={styles.input}
          mode="outlined"
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Cidade</Text>
        <TextInput
          value={cidade}
          onChangeText={setCidade}
          style={styles.input}
          mode="outlined"
        />
      </View>
      <Button
        mode="contained"
        onPress={handleCadastro}
        style={styles.button}
        color="black"
      >
        Continuar
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#0000',
  },
  header: {
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    marginBottom: 1,
    fontWeight: 'bold',
    fontSize: 16,
  },
  input: {
    borderRadius: 10, // Bordas arredondadas
  },
  button: {
    marginTop: 20,
    borderRadius: 7, // Bordas arredondadas no botão
  },
});

export default CadastroScreen;
