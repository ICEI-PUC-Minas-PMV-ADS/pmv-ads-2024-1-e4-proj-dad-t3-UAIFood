import React from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import { Avatar, Card, Title } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ProfileScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} style={styles.backIcon} />
          <Text style={styles.backText}>Voltar ao perfil</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.profileHeader}>
        <Avatar.Image size={100} source={{ uri: 'https://via.placeholder.com/100' }} />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Nome do Usuário</Text>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Editar Perfil</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Card style={styles.infoCard}>
        <View style={styles.infoContainer}>
          <View style={styles.infoRow}>
            <Icon name="home" size={24} style={styles.icon} />
            <Text style={styles.infoText}>Endereço: Rua Exemplo, 123</Text>
          </View>
        </View>
      </Card>

      <Card style={styles.infoCard}>
        <View style={styles.infoContainer}>
          <View style={styles.infoRow}>
            <Icon name="phone" size={24} style={styles.icon} />
            <Text style={styles.infoText}>Contato: (11) 1234-5678</Text>
          </View>
        </View>
      </Card>

      <Card style={styles.infoCard}>
        <View style={styles.infoContainer}>
          <View style={styles.infoRow}>
            <Icon name="email" size={24} style={styles.icon} />
            <Text style={styles.infoText}>Email: usuario@exemplo.com</Text>
          </View>
        </View>
      </Card>

      <Text style={styles.sectionTitle}>Para você:</Text>

      <View style={styles.blocksContainer}>
        <View style={styles.row}>
          <Card style={styles.card}>
            <Card.Content>
              <Icon name="shopping-bag" size={24} style={styles.cardIcon} />
              <Title style={styles.cardTitle}>Pedidos</Title>
            </Card.Content>
          </Card>
          <Card style={styles.card}>
            <Card.Content>
              <Icon name="card-giftcard" size={24} style={styles.cardIcon} />
              <Title style={styles.cardTitle}>Cupons</Title>
            </Card.Content>
          </Card>
        </View>
        <View style={styles.row}>
          <Card style={styles.card}>
            <Card.Content>
              <Icon name="local-fire-department" size={24} style={styles.cardIcon} />
              <Title style={styles.cardTitle}>Promoção</Title>
            </Card.Content>
          </Card>
          <Card style={styles.card}>
            <Card.Content>
              <Icon name="favorite" size={24} style={styles.cardIcon} />
              <Title style={styles.cardTitle}>Favorito</Title>
            </Card.Content>
          </Card>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  headerContainer: {
    marginTop: 40,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIcon: {
    color: '#000',
  },
  backText: {
    fontSize: 16,
    color: '#000',
    marginLeft: 5,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileInfo: {
    marginLeft: 15,
    flex: 1,
    justifyContent: 'center',
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  editButton: {
    marginTop: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000',
    alignSelf: 'flex-start',
  },
  editButtonText: {
    color: '#000',
    fontSize: 12,
    fontWeight: 'bold',
  },
  infoCard: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#fff',
    elevation: 3,
  },
  infoContainer: {
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
    color: '#000',
  },
  infoText: {
    fontSize: 16,
    color: '#000',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
    marginTop: 20,
  },
  blocksContainer: {
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    flex: 1,
    margin: 5,
    backgroundColor: '#fff',
    elevation: 3,
  },
  cardIcon: {
    alignSelf: 'center',
    marginBottom: 10,
    color: '#000',
  },
  cardTitle: {
    textAlign: 'center',
    color: '#000',
  },
});

export default ProfileScreen;
