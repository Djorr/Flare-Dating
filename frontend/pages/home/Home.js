import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import Header from '../../components/Header'; // Import the Header component
import Footer from '../../components/Footer'; // Import the Footer component

const { width, height } = Dimensions.get('window');

const Home = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  const [users, setUsers] = useState([
    {
      name: 'Lara',
      age: 26,
      location: 'Amsterdam, Nederland',
      bio: 'Avontuurlijke geest met een passie voor de natuur.',
      image: 'https://randomuser.me/api/portraits/women/25.jpg',
    },
    {
      name: 'Mila',
      age: 24,
      location: 'Rotterdam, Nederland',
      bio: 'Houdt van dansen en uitgaan met vrienden.',
      image: 'https://randomuser.me/api/portraits/women/26.jpg',
    },
    {
      name: 'Zoe',
      age: 27,
      location: 'Utrecht, Nederland',
      bio: 'Een creatief brein met een liefde voor kunst.',
      image: 'https://randomuser.me/api/portraits/women/27.jpg',
    },
    {
      name: 'Noa',
      age: 29,
      location: 'Den Haag, Nederland',
      bio: 'Een foodie met een passie voor koken en bakken.',
      image: 'https://randomuser.me/api/portraits/women/28.jpg',
    },
    {
      name: 'Nina',
      age: 25,
      location: 'Groningen, Nederland',
      bio: 'Een boekenworm en filmliefhebber.',
      image: 'https://randomuser.me/api/portraits/women/29.jpg',
    },
    {
      name: 'Jade',
      age: 30,
      location: 'Eindhoven, Nederland',
      bio: 'Technologie-enthousiast en altijd op zoek naar innovatie.',
      image: 'https://randomuser.me/api/portraits/women/30.jpg',
    },
  ]);

  // Function to swipe between users
  const handleSwipe = (direction) => {
    if (index < users.length - 1) {
      setIndex((prev) => prev + 1);
    } else {
      setIndex(users.length); // When users run out, show "no more users"
    }
  };

  useEffect(() => {
    if (index >= users.length) {
      setUsers(users); // Reset or refresh user list
      setIndex(0); // Reset index to allow new swipes
    }
  }, [index, users]);

  return (
    <View style={styles.container}>
      {/* Fixed Header */}
      <Header title="Home" showBackButton={false} navigation={navigation} />

      <LinearGradient colors={['#FF5A5F', '#FF9A5F']} style={styles.gradientBackground}>
        <ScrollView contentContainerStyle={styles.cardContainer} showsVerticalScrollIndicator={false}>
          {index < users.length ? (
            <View style={styles.card}>
              <Image 
                source={{ uri: users[index].image }} 
                style={styles.image} 
                resizeMode="cover" 
              />
              <View style={styles.infoContainer}>
                <Text style={styles.name}>{`${users[index].name}, ${users[index].age}`}</Text>
                <View style={styles.locationContainer}>
                  <MaterialIcons name="location-on" size={16} color="#FF5A5F" />
                  <Text style={styles.location}>{users[index].location}</Text>
                </View>
                <Text style={styles.bio}>{users[index].bio}</Text>
              </View>
            </View>
          ) : (
            <View style={styles.noUsersContainer}>
              <Image
                source={{ uri: 'https://example.com/no-swipes-image.jpg' }} // Placeholder for no-swipe image
                style={styles.noUsersImage}
                resizeMode="contain" 
              />
              <Text style={styles.noUsersText}>Geen meer mensen om te swipen!</Text>
            </View>
          )}
        </ScrollView>

        {/* Button Container below the ScrollView */}
        {index < users.length && (
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button, styles.likeButton]} onPress={() => handleSwipe('like')}>
              <MaterialIcons name="thumb-up" size={width * 0.1} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.starButton]} onPress={() => alert('Star button pressed!')}>
              <MaterialIcons name="star" size={width * 0.1} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.dislikeButton]} onPress={() => handleSwipe('dislike')}>
              <MaterialIcons name="thumb-down" size={width * 0.1} color="#fff" />
            </TouchableOpacity>
          </View>
        )}
      </LinearGradient>

      {/* Footer with navigation icons */}
      <Footer navigation={navigation} />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradientBackground: {
    flex: 1,
    padding: 0,
  },
  cardContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 100,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    overflow: 'hidden',
    width: '90%',
    height: height * 0.65,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '80%',
  },
  infoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: '5%',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  name: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    color: '#333',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  location: {
    marginLeft: 5,
    color: '#FF5A5F',
  },
  bio: {
    marginTop: 5,
    color: '#555',
    fontStyle: 'italic',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 20,
    paddingBottom: 40,
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
  },
  button: {
    backgroundColor: '#FF5A5F',
    borderRadius: 50,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    width: width * 0.15,
  },
  dislikeButton: {
    backgroundColor: '#FF5A5F',
  },
  likeButton: {
    backgroundColor: '#4CAF50',
  },
  starButton: {
    backgroundColor: '#FFC107',
  },
  noUsersContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  noUsersImage: {
    width: width * 0.5,
    height: height * 0.25,
    marginBottom: 10,
  },
  noUsersText: {
    fontSize: width * 0.05,
    color: '#555',
    textAlign: 'center',
  },
});

export default Home;
