// RegisterPhotoUpload.js
import React from 'react';
import { Text, View, Button } from 'react-native';
import commonStyles from '../../styles'; // Go up two levels to reach styles.js

const RegisterPhotoUpload = ({ navigation, route }) => {
  const { name, age, interest } = route.params;

  const handlePhotoUpload = () => {
    // Logic to handle photo upload
    navigation.navigate('Home');
  };

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.header}>Upload je foto's</Text>
      <Text>(Minimaal 1, maximaal 6 foto's)</Text>
      {/* Add Photo Upload Logic Here */}
      <Button title="Upload Foto's" onPress={handlePhotoUpload} />
    </View>
  );
};

export default RegisterPhotoUpload;
