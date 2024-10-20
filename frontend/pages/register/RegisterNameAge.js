// RegisterNameAge.js
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Picker } from 'react-native';

const RegisterNameAge = ({ navigation }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleNext = () => {
    navigation.navigate('RegisterInterests', { name, age });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Registreren</Text>
      <TextInput placeholder="Naam" value={name} onChangeText={setName} style={styles.input} />
      <Picker selectedValue={age} onValueChange={(itemValue) => setAge(itemValue)} style={styles.picker}>
        <Picker.Item label="Selecteer je leeftijd" value="" />
        {[...Array(100).keys()].map((age) => (
          <Picker.Item key={age} label={age + 1} value={age + 1} />
        ))}
      </Picker>
      <Button title="Volgende" onPress={handleNext} disabled={!name || !age} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
  },
});

export default RegisterNameAge;
