import React from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles';

const FoodOption = ({ image, name, price }) => {
  return (
    <View style={styles.foodOption}>
      <Image source={image} style={styles.foodImage} />
      <Text style={styles.foodName}>{name}</Text>
      <Text style={styles.foodPrice}>{price}</Text>
      <TouchableOpacity>
        <Image source={require('../assets/menu-icon.png')} style={styles.cartIcon} />
      </TouchableOpacity>
    </View>
  );
};

const FoodOptions = ({ options }) => {
  return (
    <ScrollView horizontal style={styles.foodOptionsContainer} showsHorizontalScrollIndicator={false}>
      {options.map((option, index) => (
        <FoodOption key={index} image={option.image} name={option.name} price={option.price} />
      ))}
    </ScrollView>
  );
};

export default FoodOptions;
