import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Header from '../../components/Header'; // Import the Header component
import Footer from '../../components/Footer'; // Import the Footer component

const { width } = Dimensions.get('window');

const Messages = ({ navigation }) => {
  const matches = [
    { id: '1', name: 'Emma', image: 'https://randomuser.me/api/portraits/women/7.jpg' },
    { id: '2', name: 'Sophie', image: 'https://randomuser.me/api/portraits/women/8.jpg' },
    { id: '3', name: 'Olivia', image: 'https://randomuser.me/api/portraits/women/9.jpg' },
    { id: '4', name: 'Ava', image: 'https://randomuser.me/api/portraits/women/10.jpg' },
    { id: '5', name: 'Isabella', image: 'https://randomuser.me/api/portraits/women/11.jpg' },
    { id: '6', name: 'Mia', image: 'https://randomuser.me/api/portraits/women/12.jpg' },
  ];

  const messages = [
    { id: '1', name: 'Emma', text: 'Hallo! Hoe gaat het?', time: 'Vandaag', image: 'https://randomuser.me/api/portraits/women/13.jpg' },
    { id: '2', name: 'Sophie', text: 'Zullen we afspreken?', time: 'Gisteren', image: 'https://randomuser.me/api/portraits/women/14.jpg' },
    { id: '3', name: 'Olivia', text: 'Hey, wat doe je vanavond?', time: 'Eergisteren', image: 'https://randomuser.me/api/portraits/women/15.jpg' },
    { id: '4', name: 'Ava', text: 'Heb je mijn laatste bericht gezien?', time: 'Vandaag', image: 'https://randomuser.me/api/portraits/women/16.jpg' },
    { id: '5', name: 'Isabella', text: 'Wat zijn je plannen voor dit weekend?', time: 'Vandaag', image: 'https://randomuser.me/api/portraits/women/17.jpg' },
    { id: '6', name: 'Mia', text: 'Ik heb een geweldige film gezien!', time: 'Gisteren', image: 'https://randomuser.me/api/portraits/women/18.jpg' },
  ];

  const renderMessage = ({ item }) => (
    <TouchableOpacity style={styles.messageContainer} onPress={() => navigation.navigate('Chat', { userName: item.name })}>
      <Image source={{ uri: item.image }} style={styles.messageImage} />
      <View style={styles.messageTextContainer}>
        <Text style={styles.messageName}>{item.name}</Text>
        <Text style={styles.messageText}>{item.text}</Text>
      </View>
      <Text style={styles.messageTime}>{item.time}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header Component */}
      <Header title="Berichten" showBackButton={true} navigation={navigation} />

      {/* Matches section */}
      <View style={styles.matchesContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollView}>
          {matches.map((match) => (
            <View key={match.id} style={styles.matchCircle}>
              <Image source={{ uri: match.image }} style={styles.matchImage} />
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Messages section */}
      <Text style={styles.sectionTitle}>Berichten</Text>
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />

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
  matchesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '5%',
    marginBottom: 20,
    marginTop: 10,
  },
  scrollView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  matchCircle: {
    width: width * 0.15,
    height: width * 0.15,
    borderRadius: width * 0.075,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#FF5A5F',
    marginRight: 10,
  },
  matchImage: {
    width: '100%',
    height: '100%',
  },
  sectionTitle: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    marginLeft: '5%',
    marginBottom: 10,
  },
  list: {
    paddingHorizontal: '5%',
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: width * 0.04,
    marginBottom: 10,
    elevation: 2,
  },
  messageImage: {
    width: width * 0.1,
    height: width * 0.1,
    borderRadius: (width * 0.1) / 2,
    marginRight: 10,
  },
  messageTextContainer: {
    flex: 1,
  },
  messageName: {
    fontSize: width * 0.045,
    fontWeight: 'bold',
  },
  messageText: {
    fontSize: width * 0.04,
    color: '#555',
  },
  messageTime: {
    fontSize: width * 0.035,
    color: '#999',
  },
});

export default Messages;
