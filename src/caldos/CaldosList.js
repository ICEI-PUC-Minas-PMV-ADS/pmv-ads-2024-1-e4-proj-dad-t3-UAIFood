import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';




const CaldosList = () => {
  const [caldos, setCaldos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/caldos')
      .then(response => response.json())
      .then(data => setCaldos(data))
      .catch(error => console.error('Error fetching caldos', error));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Caldos</Text>
      <FlatList
        data={caldos}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.caldo}>
            <Text>{item.nome}</Text>
            <Text>{item.ingredientes}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  caldo: {
    marginBottom: 10,
  },
});

export default CaldosList;