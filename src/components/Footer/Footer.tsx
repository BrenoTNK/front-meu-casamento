import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Ionicons } from '@expo/vector-icons';
import Fontisto from '@expo/vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native';

interface FooterProps {
  icon?: string;
}


const Footer: React.FC<FooterProps> = ({ icon }) => {

  const navigation = useNavigation();

  const handlePress = (route: string) => {
    navigation.navigate(route as never);
  };


  return (
    <Navbar bg="light" fixed="bottom" className="p-3">
      <Container fluid className="justify-content-between">
        <Ionicons
          name="home"
          size={ 25 }
          color={ icon === 'Home' ? '#868e96' : '#000' }
          onPress={ () => handlePress('Home') }
        />
        <Ionicons
          name="heart"
          size={ 25 }
          color={ icon === 'Favorites' ? '#868e96' : '#000' }
          onPress={ () => handlePress('Favorites') }
        />
        <Ionicons
          name="chatbox"
          size={ 25 }
          color={ icon === 'Chat' ? '#868e96' : '#000' }
          onPress={ () => handlePress('Chat') }
        />
        <Fontisto
          name="shopping-sale"
          size={ 25 }
          color={ icon === 'Sales' ? '#868e96' : '#000' }
          onPress={ () => handlePress('Sales') }
        />
        <Ionicons
          name="person"
          size={ 25 }
          color={ icon === 'Profile' ? '#868e96' : '#000' }
          onPress={ () => handlePress('Profile') }
        />
      </Container>
    </Navbar>
  );
};

export default Footer;
