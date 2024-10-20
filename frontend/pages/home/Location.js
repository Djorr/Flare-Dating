import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Header from '../../components/Header'; // Import the Header component
import Footer from '../../components/Footer'; // Import the Footer component

const Location = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header Component */}
      <Header title="Location" showBackButton={true} navigation={navigation} />

      <View style={styles.content}>
        <Text style={styles.text}>Your Current Location:</Text>
        <Text style={styles.text}>Amsterdam, Netherlands</Text>
        {/* Placeholder for future Google Maps integration */}
      </View>

      {/* Footer Component */}
      <Footer navigation={navigation} />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: '#333',
    marginVertical: 10,
  },
});

export default Location;
