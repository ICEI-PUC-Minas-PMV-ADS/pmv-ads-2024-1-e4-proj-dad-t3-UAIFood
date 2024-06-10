import React from 'react';
import { View, ScrollView } from 'react-native';
import Header from './components/Header';
import Carousel from './components/Carousel';
import FoodOptions from './components/FoodOptions';
import Footer from './components/Footer';
import styles from './styles';

const App = () => {
  const foodOptions = [
    { image: require('./assets/food1.jpg'), name: 'Comida A', price: 'R$ 20,00' },
    { image: require('./assets/food2.jpg'), name: 'Comida B', price: 'R$ 25,00' },
    { image: require('./assets/food2.jpg'), name: 'Comida B', price: 'R$ 25,00' },
    // Adicione mais opções de comida aqui se necessário
  ];

  return (
    <ScrollView style={styles.container}>
      <Header />
      <Carousel images={[
        require('./assets/carousel1.jpg'),
        require('./assets/carousel2.jpg'),
        require('./assets/carousel3.jpg')
      ]} />
      <FoodOptions options={foodOptions} />
      <Carousel images={[
        require('./assets/carousel1.jpg'),
        require('./assets/carousel2.jpg'),
        require('./assets/carousel3.jpg')
      ]} />
      <Footer />
    </ScrollView>
  );
};

export default App;
