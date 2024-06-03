import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../styles';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>MeuApp</Text>
      <TouchableOpacity>
        <Image source={require('../assets/menu-icon.png')} style={styles.menuIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
