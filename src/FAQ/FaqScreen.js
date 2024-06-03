import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';

export default function FaqScreen() {
  const faqs = [
    {
      title: 'Quais são as formas de pagamentos?',
      content: 'Aceitamos cartões de crédito, débito, dinheiro e pagamentos via aplicativos.'
    },
    {
      title: 'Como funciona as entregas?',
      content: 'Nossas entregas são realizadas em um raio de até 10 km, com taxa variável de acordo com a distância.'
    },
    {
      title: 'Tem retirada no local?',
      content: 'Sim, você pode retirar seu pedido diretamente no restaurante.'
    },
    {
      title: 'Consigo fazer reservas?',
      content: 'Sim, aceitamos reservas. Você pode fazer reservas pelo nosso telefone ou pelo site.'
    },
    {
      title: 'Qual o horário de funcionamento?',
      content: 'Estamos abertos todos os dias das 10h às 22h.'
    }
  ];

  const handleCallPress = () => {
    Linking.openURL('tel:+55123456789');
  };

  return (
    <View style={styles.container}>
      <View style={styles.contactSection}>
        <Text style={styles.contactTitle}>Contato</Text>
        <Text style={styles.contactInfo}>Telefone:(31) 3103-2828</Text>
        <Text style={styles.contactInfo}>E-mail: contato@uaifood.com</Text>
        <TouchableOpacity style={styles.callButton} onPress={handleCallPress}>
          <Text style={styles.callButtonText}>Ligar Agora</Text>
        </TouchableOpacity>
      </View>
      {faqs.map((faq, index) => (
        <View key={index} style={styles.faqItem}>
          <Text style={styles.faqTitle}>{faq.title}</Text>
          <Text style={styles.faqContent}>{faq.content}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  contactSection: {
    marginBottom: 20,
  },
  contactTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  contactInfo: {
    fontSize: 16,
    marginBottom: 5,
  },
  callButton: {
    backgroundColor: '#000000',
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 5,
  },
  callButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  faqItem: {
    marginBottom: 20,
  },
  faqTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  faqContent: {
    fontSize: 16,
    color: '#333',
  },
});

