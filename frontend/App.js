// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './pages/login/Login'; // Your login component
import RegisterNameAge from './pages/register/RegisterNameAge'; // Component for Name and Age
import RegisterInterests from './pages/register/RegisterInterests'; // Component for Interests
import RegisterPhotoUpload from './pages/register/RegisterPhotoUpload'; // Component for Photo Upload
import Home from './pages/home/Home'; // Home screen after registration
import Messages from './pages/home/Messages'; // Messages page
import Profile from './pages/home/Profile'; // Profile page

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: false }} // Hide header for Login
        />
        <Stack.Screen 
          name="RegisterNameAge" 
          component={RegisterNameAge} 
          options={{ headerShown: false }} // Hide header for Registration
        />
        <Stack.Screen 
          name="RegisterInterests" 
          component={RegisterInterests} 
          options={{ headerShown: false }} // Hide header for Interests
        />
        <Stack.Screen 
          name="RegisterPhotoUpload" 
          component={RegisterPhotoUpload} 
          options={{ headerShown: false }} // Hide header for Photo Upload
        />
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ headerShown: false }} // Hide header for Home
        />
        <Stack.Screen 
          name="Messages" 
          component={Messages} 
          options={{ headerShown: false }} // Hide header for Messages
        />
        <Stack.Screen 
          name="Profile" 
          component={Profile} 
          options={{ headerShown: false }} // Hide header for Profile
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
