// components/Header.js
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Header = ({ navigation, showLogout = true }) => {
  return (
    <View style={styles.header}>
      {showLogout && (
        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.logoutButton}>
          <MaterialIcons name="logout" size={24} color="#FF5A5F" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    height: 60,
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    elevation: 2,
  },
  logoutButton: {
    padding: 10,
  },
});

export default Header;
