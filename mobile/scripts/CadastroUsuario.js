import React, { useState, useEffect } from 'react';
import { Alert, Platform } from 'react-native';
import { StyleSheet, View, Image, KeyboardAvoidingView } from 'react-native';
import { Button, CheckBox, Input, Text } from 'react-native-elements';
import { TextInputMask } from 'react-native-masked-text';
import { ScrollView } from 'react-native-gesture-handler';
import styles from '../style/LoginStyle';
import { salvarUsuarios, lerUsuarios } from '../users/UsuarioDB';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function CadastroUsuario({ navigation }) {

  const [email, setEmail] = useState(null)
  const [nome, setNome] = useState(null)
  const [cpf, setCpf] = useState(null)
  const [senha, setSenha] = useState(null)
  const [telefone, setTelefone] = useState(null)
  const [isSelected, setSelected] = useState(false)
  const [errorEmail, setErrorEmail] = useState(null)
  const [errorCpf, setErrorCpf] = useState(null)
  const [errorTelefone, setErrorTelefone] = useState(null)
  const [errorNome, setErrorNome] = useState(null)
  const [errorSenha, setErrorSenha] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const [confirmarSenha, setConfirmarSenha] = useState(null);

  let cpfField = null
  let telefoneField = null

  useEffect(() => {
    // Verifica se já existe algum usuário cadastrado
    AsyncStorage.getItem('usuarios').then((usuarios) => {
      if (!usuarios) {
        // Se não existir, cria uma lista vazia de usuários
        AsyncStorage.setItem('usuarios', JSON.stringify([]));
      }
    });
  }, []);

  const validar = () => {
    let error = false
    setErrorEmail(null)
    setErrorCpf(null)
    setErrorSenha(null)
    setErrorNome(null)

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!re.test(String(email).toLowerCase())) {
      setErrorEmail("Preencha seu e-mail corretamente")
      error = true
    }
    if (!cpfField.isValid()) {
      setErrorCpf("Preencha seu CPF corretamente")
      error = true
    }
    if (telefone == null) {
      setErrorTelefone("Preencha seu telefone corretamente")
      error = true
    }
    if (senha == null) {
      setErrorSenha("Preencha sua senha corretamente")
      error = true
    }
    if (senha !== confirmarSenha) {
      setErrorSenha('As senhas não coincidem');
      error = true;
    }
    if (nome == null)
      setErrorNome("Preencha seu nome")
    return !error
  }

  const salvar = async () => {
    if (validar()) {
      setLoading(true);

      const usuarioCriado = {
        nome: nome,
        email: email,
        cpf: cpf,
        telefone: telefone,
        senha: senha
      };

      try {
        // Ler os usuários existentes
        const usuarios = await lerUsuarios();

        // Adicionar o novo usuário à lista de usuários
        usuarios.push(usuarioCriado);

        // Salvar a lista atualizada de usuários
        await salvarUsuarios(usuarios);

        setLoading(false);
        Alert.alert('Sucesso', 'Usuário cadastrado com sucesso', [
          { text: 'OK', onPress: () => navigation.goBack() }
        ]);
      } catch (error) {
        setLoading(false);
        Alert.alert('Erro', 'Houve um erro inesperado ao salvar o usuário.');
        console.error('Erro ao salvar usuário:', error);
      }
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={[styles.container]}
      keyboardVerticalOffset={85}>
      <ScrollView style={{ width: "100%" }}>
        <View style={specificStyle.headerCadastro}>
          <Text h1 style={specificStyle.titulo}>Cadastro</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <Input
              label="Nome"
              placeholder="Digite seu nome"
              onChangeText={value => setNome(value)}
              errorMessage={errorNome}
              style={specificStyle.input}
            />
            <Input
              label="E-mail"
              placeholder="Digite seu e-mail"
              onChangeText={value => {
                setEmail(value)
                setErrorEmail(null)
              }}
              keyboardType="email-address"
              errorMessage={errorEmail}
              style={specificStyle.input}
            />
            <Text style={specificStyle.inputLabelNumber}>CPF</Text>
            <View style={styles.containerMask}>
              <TextInputMask
                placeholder="Digite seu CPF"
                placeholderTextColor="#777A8D"
                type={'cpf'}
                value={cpf}
                onChangeText={value => {
                  setCpf(value)
                  setErrorCpf(null)
                }}
                keyboardType="number-pad"
                returnKeyType="done"
                style={styles.maskedInput}
                ref={(ref) => cpfField = ref}
              />
            </View>
            <Text style={styles.errorMessage}>{errorCpf}</Text>
            <Text style={specificStyle.inputLabelNumber}>Telefone</Text>
            <View style={styles.containerMask}>
              <TextInputMask
                placeholder="Digite seu telefone"
                backgroundColor="white"
                placeholderTextColor="#777A8D"
                type={'cel-phone'}
                options={{
                  maskType: 'BRL',
                  withDDD: true,
                  dddMask: '(99)'
                }}
                value={telefone}
                onChangeText={value => setTelefone(value)}
                keyboardType="phone-pad"
                returnKeyType="done"
                style={styles.maskedInput}
                ref={(ref) => telefoneField = ref}
              />
            </View>
            <Text style={styles.errorMessage}>{errorTelefone}</Text>
            <Input
              label="Senha"
              placeholder="Digite sua senha"
              onChangeText={value => setSenha(value)}
              errorMessage={errorSenha}
              secureTextEntry={true}
            />
            <Input
              label="Confirmar Senha"
              placeholder="Digite sua senha novamente"
              onChangeText={value => setConfirmarSenha(value)}
              errorMessage={errorSenha} 
              secureTextEntry={true}
            />

            <CheckBox
              title="Eu aceito os termos de uso"
              checkedIcon="check"
              uncheckedIcon="square-o"
              checkedColor="green"
              uncheckedColor="black"
              checked={isSelected}
              onPress={() => setSelected(!isSelected)}
            />

            {isLoading &&
              <Text>Carregando...</Text>
            }

            {!isLoading &&
              <Button
                title=" Salvar"
                icon={{
                  name: 'check',
                  size: 20,
                  color: 'white',
                }}
                iconRight
                iconContainerStyle={{ marginLeft: 10 }}
                titleStyle={{ fontWeight: '800' }}
                buttonStyle={{
                  backgroundColor: '#44BD72',
                  borderColor: 'transparent',
                  borderWidth: 0,
                  borderRadius: 10,
                }}
                containerStyle={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 20,

                }}
                onPress={salvar}
                loading={isLoading}
              />
            }
          </View>
        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const specificStyle = StyleSheet.create({
  specificContainer: {
    flex: 1,
    backgroundColor: '#fffffff'
  },
  titulo: {
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 50,
  },
  inputLabelNumber: {
    marginLeft: 10,
    marginRight: 10,
    fontWeight: 'bold',
    color: "#86919A",
    fontSize: 16,

  },
  headerCadastro: {
    backgroundColor: '#ffffff',
    marginBottom: 40,
    height: 100,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  input: {
    flexGrow: 1,
    height: 40,
    borderBottomColor: "#999",
  }
})