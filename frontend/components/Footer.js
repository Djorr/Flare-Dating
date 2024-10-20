// Footer.js
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Footer = ({ navigation }) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.iconContainer}>
        <MaterialIcons name="home" size={30} color="#FF5A5F" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Location')} style={styles.iconContainer}>
        <MaterialIcons name="place" size={30} color="#FF5A5F" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Messages')} style={styles.iconContainer}>
        <MaterialIcons name="message" size={30} color="#FF5A5F" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.iconContainer}>
        <MaterialIcons name="person" size={30} color="#FF5A5F" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 0,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    elevation: 3,
    width: '100%',
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
});

export default Footer;
