import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    backgroundColor: 'white',
    width: 350,
    borderRadius: 10,
    padding: 40,
  },
  input: {
    flexGrow: 1,
    height: 40,
    borderBottomColor: "#999",
    borderWidth: 1,
    borderRadius:8,
    padding: 10,
    paddingTop: 8,
    marginBottom: 10
  },
  maskedInput: {
    flexGrow: 1,
    height: 40,
    fontSize: 18,
    borderBottomColor: "#999",
    borderBottomWidth: 1,
    borderStyle: "solid",
    alignSelf: "flex-start"
  },
  containerMask: {
    flexDirection: "row",
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  errorMessage: {
    alignSelf: "flex-start",
    marginLeft: 15,
    color: "#f00",
    fontSize: 12,
  },
  containerHome: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    marginTop: 30,
    marginBottom: 10,
    width: 265,
    height: 200,
    justifyContent: 'center'
  },
  loginButton: {
    backgroundColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'black'
  },
  loginButtonContainer: {
    width: '100%',
    alignSelf: 'center',
    marginVertical: 10,
    backgroundColor: 'black'
  },
  loginButtonTitle: {
    fontWeight: 'bold',
    color: 'white',
  },
  registerContainer: {
    flexDirection: 'row',
    backgroundColor: 'red',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },

  registerText: {
    color: 'white',
  },
});

export default styles;