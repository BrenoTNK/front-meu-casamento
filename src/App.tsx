import React from 'react';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './routes';
import { AuthProvider } from './services/AuthContext';
import './styles/bootstrap.min.css';


const App: React.FC = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar style="dark" translucent backgroundColor="transparent" />
        <SafeAreaView style={{ width: '100%', height: '100%', display: 'flex' }}>
          <Routes />
        </SafeAreaView>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;