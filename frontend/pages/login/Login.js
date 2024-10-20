// Login.js
import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, StatusBar, Animated, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';
import styles from '../../styles'; // Pas het pad aan op basis van jouw mapstructuur

const { width } = Dimensions.get('window');

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [birthdateString, setBirthdateString] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [message, setMessage] = useState('');
  const [errorFields, setErrorFields] = useState({ name: false, email: false, password: false, birthdate: false });
  const [errorMessages, setErrorMessages] = useState({ name: '', email: '', password: '', birthdate: '', general: '' });
  const errorAnim = useRef(new Animated.Value(0)).current;

  const handleLogin = async () => {
    if (!email.trim()) return showErrorMessage('email', 'Vul je email in.');
    if (!password.trim()) return showErrorMessage('password', 'Vul je wachtwoord in.');

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) return showErrorMessage('email', 'Voer een geldige e-mail in.');

    try {
      const response = await axios.post('http://127.0.0.1:5000/login', { email, password });
      if (response.status === 200) {
        navigation.navigate('Home', { user: response.data });
      }
    } catch (error) {
      console.error('Login error:', error);
      showErrorMessage('general', 'Ongeldige inloggegevens. Probeer het opnieuw.');
    }
  };

  const showErrorMessage = (field, message) => {
    setErrorFields((prev) => ({ ...prev, [field]: true }));
    setErrorMessages((prev) => ({ ...prev, [field]: message }));
    Animated.timing(errorAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      setTimeout(() => {
        Animated.timing(errorAnim, { toValue: 0, duration: 300, useNativeDriver: false }).start(() => {
          setErrorFields((prev) => ({ ...prev, [field]: false }));
          setErrorMessages((prev) => ({ ...prev, [field]: '' }));
        });
      }, 2000);
    });
  };

  const handleRegister = async () => {
    setErrorFields({ name: false, email: false, password: false, birthdate: false });

    const isEmptyFields = { name: name.trim() === '', email: email.trim() === '', password: password.trim() === '', birthdate: birthdateString.trim() === '' };
    if (isEmptyFields.name) return showErrorMessage('name', 'Vul je naam in.');
    if (isEmptyFields.email) return showErrorMessage('email', 'Vul je email in.');
    if (isEmptyFields.password) return showErrorMessage('password', 'Vul je wachtwoord in.');
    if (isEmptyFields.birthdate) return showErrorMessage('birthdate', 'Vul je geboortedatum in.');

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) return showErrorMessage('email', 'Voer een geldige e-mail in.');
    if (password.length < 8) return showErrorMessage('password', 'Wachtwoord moet minimaal 8 karakters zijn.');
    if (!/^\d{2}-\d{2}-\d{4}$/.test(birthdateString)) return showErrorMessage('birthdate', 'Geboortedatum moet in het formaat dd-mm-jjjj zijn.');

    const [day, month, year] = birthdateString.split('-').map(Number);
    const birthDate = new Date(year, month - 1, day);
    const age = new Date().getFullYear() - birthDate.getFullYear();
    if (age < 18) return showErrorMessage('birthdate', 'Je moet minimaal 18 jaar oud zijn om je te registreren.');

    try {
      const response = await axios.post('http://127.0.0.1:5000/register', {
        username: name,
        password: password,
        email: email,
        birthdate: birthDate.toISOString(),
        location: {
          type: "Point",
          coordinates: [0, 0] // Plaats hier de echte coördinaten als nodig
        }
      });
      console.log(response.data);
      setMessage('Registratie succesvol!');
      navigation.navigate('Home', { user: response.data });
    } catch (error) {
      console.error('Registration error:', error);
      showErrorMessage('general', 'Er is een fout opgetreden tijdens registratie. Probeer het opnieuw.');
    }
  };

  const formatBirthdate = (text) => {
    const numericText = text.replace(/\D/g, '').substring(0, 8);
    const day = numericText.substring(0, 2);
    const month = numericText.substring(2, 4);
    const year = numericText.substring(4, 8);
    setBirthdateString(`${day}${day && month ? '-' : ''}${month}${month && year ? '-' : ''}${year}`);
  };

  const handleForgotPassword = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setErrorMessages((prev) => ({ ...prev, general: 'Voer een geldig e-mailadres in.' }));
      return;
    }

    setMessage('Mocht je e-mail bekend zijn bij ons, dan ontvang je deze binnen 10 minuten met daarin een link om jouw wachtwoord te wijzigen.');
    setErrorMessages((prev) => ({ ...prev, general: '' }));
    setEmail(''); // Clear the input
  };

  return (
    <LinearGradient colors={['#FF5A5F', '#FF9A5F', '#FF5A5F']} style={styles.container}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <Text style={styles.appName}>Flare</Text>

      {!isRegistering && !isForgotPassword ? (
        <>
          <TouchableOpacity style={styles.googleButton} onPress={() => handleLogin('Google')}>
            <Icon name="google" size={24} color="#4285F4" style={styles.icon} />
            <Text style={styles.googleButtonText}>Verder met Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.appleButton} onPress={() => handleLogin('Apple')}>
            <Icon name="apple" size={24} color="#fff" style={styles.icon} />
            <Text style={styles.appleButtonText}>Verder met Apple</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.facebookButton} onPress={() => handleLogin('Facebook')}>
            <Icon name="facebook" size={24} color="#fff" style={styles.icon} />
            <Text style={styles.facebookButtonText}>Verder met Facebook</Text>
          </TouchableOpacity>
          <View style={styles.dividerContainer}>
            <View style={styles.divider} />
            <Text style={styles.dividerText}>OF</Text>
            <View style={styles.divider} />
          </View>

          {message ? (
            <View style={styles.messageBox}>
              <Text style={styles.messageText}>{message}</Text>
            </View>
          ) : null}

          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#fff"
            value={email}
            onFocus={() => setEmail('')}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Wachtwoord"
            placeholderTextColor="#fff"
            secureTextEntry
            value={password}
            onFocus={() => setPassword('')}
            onChangeText={setPassword}
          />
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Inloggen</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsRegistering(true)}>
            <Text style={styles.link}>Nog geen account? Registreren</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            setIsForgotPassword(true);
            setEmail('');
          }}>
            <Text style={styles.link}>Wachtwoord vergeten?</Text>
          </TouchableOpacity>
        </>
      ) : null}

      {isRegistering && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Naam"
            placeholderTextColor="#fff"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Geboortedatum (dd-mm-jjjj)"
            placeholderTextColor="#fff"
            value={birthdateString}
            onChangeText={formatBirthdate}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#fff"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Wachtwoord"
            placeholderTextColor="#fff"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
            <Text style={styles.registerButtonText}>Registreren</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsRegistering(false)}>
            <Text style={styles.link}>Heb je al een account? Inloggen</Text>
          </TouchableOpacity>
        </>
      )}

      {isForgotPassword && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Voer je e-mail in"
            placeholderTextColor="#fff"
            value={email}
            onChangeText={setEmail}
          />
          <TouchableOpacity style={styles.registerButton} onPress={handleForgotPassword}>
            <Text style={styles.registerButtonText}>Verstuur resetlink</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsForgotPassword(false)}>
            <Text style={styles.link}>Terug naar inloggen</Text>
          </TouchableOpacity>
        </>
      )}

      {errorFields.name && <Text style={styles.errorText}>{errorMessages.name}</Text>}
      {errorFields.email && <Text style={styles.errorText}>{errorMessages.email}</Text>}
      {errorFields.password && <Text style={styles.errorText}>{errorMessages.password}</Text>}
      {errorFields.birthdate && <Text style={styles.errorText}>{errorMessages.birthdate}</Text>}
      {errorMessages.general && <Text style={styles.errorText}>{errorMessages.general}</Text>}

      <Animated.View style={{ opacity: errorAnim }}>
        <Text style={styles.errorText}>{errorMessages.general}</Text>
      </Animated.View>
    </LinearGradient>
  );
};

export default Login;
