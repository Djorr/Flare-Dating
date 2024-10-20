// RegisterInterests.js
import React, { useState } from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import commonStyles from '../../styles'; // Go up two levels to reach styles.js

const RegisterInterests = ({ navigation, route }) => {
  const { name, age } = route.params;
  const [interest, setInterest] = useState('');

  const handleNext = () => {
    navigation.navigate('RegisterPhotoUpload', { name, age, interest });
  };

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.header}>Waar ben je naar op zoek?</Text>
      <TouchableOpacity onPress={() => setInterest('date')} style={styles.button}>
        <Text>Dating</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setInterest('chat')} style={styles.button}>
        <Text>Chatten</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setInterest('relationship')} style={styles.button}>
        <Text>Relatie</Text>
      </TouchableOpacity>
      <Button title="Volgende" onPress={handleNext} disabled={!interest} />
    </View>
  );
};

export default RegisterInterests;
