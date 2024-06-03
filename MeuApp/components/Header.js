import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../styles';

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleMenu}>
          <Image source={require('../assets/menu-icon.png')} style={styles.menuIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Ofertas Especiais</Text>
      </View>
      {menuVisible && (
        <View style={styles.menuOptionsVertical}>
          <TouchableOpacity style={styles.menuOption}>
            <Text style={styles.menuOptionText}>Cardápio</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuOption}>
            <Text style={styles.menuOptionText}>Carrinho</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuOption}>
            <Text style={styles.menuOptionText}>Sobre Nós</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Header;
