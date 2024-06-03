import React from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CategoryList from './components/CategoryList';
import RestaurantList from './components/RestaurantList';
import styles from './styles';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView>
        <SearchBar />
        <CategoryList />
        <RestaurantList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
