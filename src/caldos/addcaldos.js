import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddCaldo = () => {
  const [nome, setNome] = useState('');
  const [ingredientes, setIngredientes] = useState('');

  const handleSubmit = () => {
    fetch('http://localhost:5000/caldos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nome, ingredientes }),
    })
      .then(response => response.text())
      .then(message => {
        console.log(message);
        setNome('');
        setIngredientes('');
      })
      .catch(error => console.error('Error adding caldo', error));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome do caldo"
        value={nome}
        onChangeText={text => setNome(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Ingredientes"
        value={ingredientes}
        onChangeText={text => setIngredientes(text)}
      />
      <Button title="Adicionar Caldo" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

export default AddCaldo;