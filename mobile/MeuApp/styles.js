import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    backgroundColor: '#ff0000', // vermelho
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#ff0000', // vermelho
  },
  headerTitle: {
    fontSize: 20,
    color: '#ffffff', // branco
  },
  menuIcon: {
    width: 25,
    height: 25,
  },
  menuOptionsVertical: {
    backgroundColor: '#ff0000', // vermelho
    paddingVertical: 10,
  },
  menuOption: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ffffff', // branco
  },
  menuOptionText: {
    color: '#ffffff', // branco
    fontSize: 16,
  },
  carousel: {
    height: 200,
    backgroundColor: '#f1f1f1',
  },
  carouselItem: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselImage: {
    width: width,
    height: 200,
    resizeMode: 'cover',
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  dot: {
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ff0000',
    marginHorizontal: 4,
  },
  foodOptionsContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  foodOption: {
    alignItems: 'center',
    width: width / 2 - 20,
    marginHorizontal: 10,
  },
  foodImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginBottom: 5,
  },
  foodName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  foodPrice: {
    fontSize: 14,
    color: '#777',
    marginBottom: 5,
  },
  cartIcon: {
    width: 20,
    height: 20,
  },
  footer: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ff0000', // vermelho
  },
  footerTitle: {
    fontSize: 18,
    color: '#ffffff', // branco
  },
  footerText: {
    fontSize: 14,
    color: '#ffffff', // branco
    marginTop: 5,
  },
});

export default styles;
