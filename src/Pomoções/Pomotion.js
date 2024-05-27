import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const PromotionsScreen = () => {
  const [promotions, setPromotions] = useState([
    { id: 1, name: 'Pizza', discount: '20%' },
    { id: 2, name: 'Hamburguer', discount: '30%' },
    { id: 3, name: 'Sushi', discount: '25%' },
  ]);

  const addPromotion = () => {
    const newPromotion = { id: promotions.length + 1, name: 'Nova Promoção', discount: '10%' };
    setPromotions([...promotions, newPromotion]);
  };

  const removePromotion = (id) => {
    const updatedPromotions = promotions.filter(promotion => promotion.id !== id);
    setPromotions(updatedPromotions);
  };

  const renderPromotionItem = ({ item }) => (
    <View style={styles.promotionItem}>
      <Text style={styles.promotionName}>{item.name}</Text>
      <Text style={styles.promotionDiscount}>{item.discount} OFF</Text>
      <TouchableOpacity onPress={() => removePromotion(item.id)}>
        <Text style={styles.removeButton}>Remover</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Promoções</Text>
      <FlatList
        data={promotions}
        renderItem={renderPromotionItem}
        keyExtractor={item => item.id.toString()}
      />
      <TouchableOpacity style={styles.addButton} onPress={addPromotion}>
        <Text style={styles.addButtonText}>Adicionar Promoção</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  promotionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  promotionName: {
    fontSize: 18,
  },
  promotionDiscount: {
    fontSize: 16,
    color: 'green',
  },
  removeButton: {
    color: 'red',
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default PromotionsScreen;