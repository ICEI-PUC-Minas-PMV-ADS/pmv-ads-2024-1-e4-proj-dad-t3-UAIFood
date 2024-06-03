import { Text, View, StyleSheet, Image } from 'react-native';

export default function RestaurantInfoScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
       
        <Image style={styles.logo} source={require('../assets/uaifoodLogo.jpeg')} />

      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Nossa História</Text>
        <Text style={styles.content}>Há mais de 40 anos, em Bele Hprizonte, nasceu uma ideia que viria a se tornar um marco na gastronomia local: o restaurante "UAIFood".</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Missão</Text>
        <Text style={styles.content}>Nosso restaurante de comida mineira, com mais de 40 anos de existência, tem como missão proporcionar aos nossos clientes uma experiência gastronômica autêntica</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Visão</Text>
        <Text style={styles.content}>Valorizamos e preservamos a autenticidade da culinária mineira, honrando as tradições e técnicas culinárias transmitidas ao longo de décadas.</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Endereço</Text>
        <Text style={styles.content}>Avenida Brasil, 12, centro, 360010 - 555, BH</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'center',
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
  },
});

