import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerTitle}>Cardápio</Text>
      <Text style={styles.footerText}>Não perca nossas ofertas incríveis!</Text>
    </View>
  );
};

export default Footer;
