import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  appName: {
    fontSize: 36,
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 15,
    color: '#fff', // Change the input text color to white
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#fff',
  },
  dividerText: {
    marginHorizontal: 10,
    color: '#fff',
    fontWeight: 'bold',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingVertical: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 15, // Add horizontal padding for spacing
  },
  googleButtonText: {
    flex: 1,
    textAlign: 'center',
    color: '#000',
    fontWeight: 'bold',
    marginLeft: 10, // Space between icon and text
  },
  appleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000',
    borderRadius: 5,
    paddingVertical: 10,
    marginBottom: 10,
    paddingHorizontal: 15, // Add horizontal padding for spacing
  },
  appleButtonText: {
    flex: 1,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 10, // Space between icon and text
  },
  facebookButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4267B2', // Facebook blue
    borderRadius: 5,
    paddingVertical: 10,
    marginBottom: 10,
    paddingHorizontal: 15, // Add horizontal padding for spacing
  },
  facebookButtonText: {
    flex: 1,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 10, // Space between icon and text
  },
  registerButton: {
    backgroundColor: '#FF5A5F',
    borderRadius: 5,
    paddingVertical: 10,
    marginBottom: 10,
  },
  registerButtonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  loginButton: {
    backgroundColor: '#FF5A5F',
    borderRadius: 5,
    paddingVertical: 10,
    marginBottom: 10,
  },
  loginButtonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  link: {
    textAlign: 'center',
    color: '#fff',
    marginVertical: 5,
  },
  // Define your styles here
  messageBox: {
    backgroundColor: '#4CAF50', // Green background for the message
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  messageText: {
    color: '#fff',
  },
  errorBox: {
    backgroundColor: '#f44336', // Red background for the error
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  errorText: {
    color: '#fff',
  },
  successInput: {
    borderColor: 'green', // Green border for success
    borderWidth: 1,
  },
});

export default styles;
