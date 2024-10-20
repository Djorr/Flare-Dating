// pages/profile/Profile.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, Switch, TextInput, ScrollView, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const availableInterests = [
  "Casual Daten",
  "Iets serieus",
  "Alleen pleizier",
  "Weet ik niet",
];

const { width } = Dimensions.get('window');

const Profile = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('0612345678');
  const [email, setEmail] = useState('test@test.nl');
  const [isBioVisible, setIsBioVisible] = useState(false);
  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [newPhoneNumber, setNewPhoneNumber] = useState(phoneNumber);
  const [newEmail, setNewEmail] = useState(email);
  const [selectedInterests, setSelectedInterests] = useState([]);

  const toggleInterest = (interest) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter(item => item !== interest)); // Verwijder interesse
    } else {
      setSelectedInterests([...selectedInterests, interest]); // Voeg interesse toe
    }
  };

  const handlePhoneEdit = () => {
    if (isEditingPhone) {
      setPhoneNumber(newPhoneNumber);
      setIsEditingPhone(false);
    } else {
      setIsEditingPhone(true);
    }
  };

  const handleEmailEdit = () => {
    if (isEditingEmail) {
      setEmail(newEmail);
      setIsEditingEmail(false);
    } else {
      setIsEditingEmail(true);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header voor Logout en Instellingen */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.settingsButton}>
          <MaterialIcons name="settings" size={24} color="#FF5A5F" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.logoutButton}>
          <MaterialIcons name="logout" size={24} color="#FF5A5F" />
        </TouchableOpacity>
      </View>

      {/* Profielinformatie */}
      <View style={styles.content}>
        <View style={styles.profileImageContainer}>
          <Image
            source={{ uri: 'https://i.gyazo.com/6e0357508cdd07d3315b21cf11b1438a.jpg' }}
            style={styles.profileImage}
          />
        </View>
        <View style={styles.nameContainer}>
          <MaterialIcons name="verified" size={16} color="#FF5A5F" style={styles.verifiedIcon} />
          <Text style={styles.name}>John Doe, 25</Text>
        </View>
        <View style={styles.locationContainer}>
          <MaterialIcons name="place" size={20} color="#FF5A5F" />
          <Text style={styles.location}>Amsterdam</Text>
        </View>

        {/* Actieknoppen */}
        <View style={styles.actionContainer}>
          <View style={styles.actionBox}>
            <MaterialIcons name="star" size={40} color="#FF5A5F" /> {/* Ster icoon */}
            <Text style={styles.actionCount}>0</Text>
            <Text style={styles.actionText}>Super Likes</Text>
            <Text style={styles.actionSubText}>MEER KOPEN</Text>
            <TouchableOpacity style={styles.addButton}>
              <View style={styles.plusContainer}>
                <MaterialIcons name="add" size={16} color="#fff" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.actionBox}>
            <MaterialIcons name="flash-on" size={40} color="#FF5A5F" /> {/* Boost icoon */}
            <Text style={styles.actionCount}>0</Text>
            <Text style={styles.actionText}>Boosts</Text>
            <Text style={styles.actionSubText}>MEER KOPEN</Text>
            <TouchableOpacity style={styles.addButton}>
              <View style={styles.plusContainer}>
                <MaterialIcons name="add" size={16} color="#fff" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.actionBox}>
            <MaterialIcons name="subscriptions" size={40} color="#FF5A5F" /> {/* Abonnement icoon */}
            <Text style={styles.actionCount}>-</Text>
            <Text style={styles.actionText}>Abonnement</Text> {/* Geen label */}
            <Text style={styles.actionSubText}>NU KOPEN</Text>
            <TouchableOpacity style={styles.addButton}>
              <View style={styles.plusContainer}>
                <MaterialIcons name="add" size={16} color="#fff" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Vaste onderaanavigatie */}
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

      {/* Instellingenmodal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Account Instellingen</Text>

            {/* Telefoonnummer Sectie */}
            <View style={styles.inputContainer}>
              <Text style={styles.modalText}>Telefoonnummer:</Text>
              <View style={styles.editableRow}>
                {isEditingPhone ? (
                  <TextInput
                    style={styles.input}
                    value={newPhoneNumber}
                    onChangeText={setNewPhoneNumber}
                    keyboardType="phone-pad"
                  />
                ) : (
                  <Text style={styles.modalValue}>{phoneNumber}</Text>
                )}
                <TouchableOpacity onPress={handlePhoneEdit}>
                  <MaterialIcons name={isEditingPhone ? "check" : "edit"} size={24} color="#FF5A5F" />
                </TouchableOpacity>
              </View>
            </View>

            {/* E-mail Sectie */}
            <View style={styles.inputContainer}>
              <Text style={styles.modalText}>Email:</Text>
              <View style={styles.editableRow}>
                {isEditingEmail ? (
                  <TextInput
                    style={styles.input}
                    value={newEmail}
                    onChangeText={setNewEmail}
                    keyboardType="email-address"
                  />
                ) : (
                  <Text style={styles.modalValue}>{email}</Text>
                )}
                <TouchableOpacity onPress={handleEmailEdit}>
                  <MaterialIcons name={isEditingEmail ? "check" : "edit"} size={24} color="#FF5A5F" />
                </TouchableOpacity>
              </View>
            </View>

            <Text style={styles.modalTitle}>Premium Instellingen</Text>

            {/* Bio Zichtbaarheid Toggle */}
            <View style={styles.inputContainer}>
              <Text style={styles.modalText}>Heeft een bio:</Text>
              <Switch
                value={isBioVisible}
                onValueChange={() => setIsBioVisible(previousState => !previousState)}
              />
            </View>

            {/* Interesse Selectie */}
            <Text style={styles.modalText}>Interesses:</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={true}
              style={styles.interestContainer}
              contentContainerStyle={{ paddingVertical: 5 }}
            >
              {availableInterests.map((interest) => (
                <TouchableOpacity
                  key={interest}
                  style={[
                    styles.interestButton,
                    selectedInterests.includes(interest) && styles.selectedInterestButton
                  ]}
                  onPress={() => toggleInterest(interest)}
                >
                  <Text style={[
                    styles.interestButtonText,
                    selectedInterests.includes(interest) && styles.selectedInterestButtonText
                  ]}>{interest}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>

            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Sluiten</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

// Stijlen voor de component
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  settingsButton: {
    padding: 10,
  },
  logoutButton: {
    padding: 10,
  },
  content: {
    alignItems: 'center',
    flex: 1,
    marginTop: 20,
  },
  profileImageContainer: {
    borderRadius: 50,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: '#FF5A5F',
    marginBottom: 10,
    width: width * 0.25, // 25% van de schermbreedte
    height: width * 0.25, // 25% van de schermbreedte
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  verifiedIcon: {
    marginRight: 5,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  location: {
    fontSize: 16,
    color: '#888',
    marginLeft: 5,
  },
  actionContainer: {
    marginTop: 30, // Vergroot de ruimte tussen de info en de kaarten
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  actionBox: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    position: 'relative',
  },
  actionCount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF5A5F',
  },
  actionText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  actionSubText: {
    fontSize: 14,
    color: '#FF5A5F',
    textAlign: 'center',
  },
  addButton: {
    position: 'absolute',
    bottom: -15, // Helpt om de plusknop half op de kaart te laten verschijnen
  },
  plusContainer: {
    backgroundColor: '#FF5A5F',
    borderRadius: 30,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    maxHeight: '80%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 5,
  },
  modalValue: {
    fontWeight: 'bold',
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#FF5A5F',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  inputContainer: {
    marginVertical: 10,
  },
  editableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    flex: 1,
    marginRight: 10,
  },
  interestContainer: {
    marginVertical: 10,
    paddingVertical: 10,
  },
  interestButton: {
    backgroundColor: '#F5F5F5',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  selectedInterestButton: {
    backgroundColor: '#FF5A5F',
  },
  interestButtonText: {
    color: '#FF5A5F',
  },
  selectedInterestButtonText: {
    color: '#fff',
  },
});

// Exporteer de component
export default Profile;
