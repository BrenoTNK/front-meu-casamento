import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import useAuth from "@hooks/useAuth";
import Footer from "@components/Footer";
import FirstForm from "@screens/App/FirstForm";
import Home from "@screens/App/Home";
import Profile from "@screens/App/Profile";
import Favorites from "@screens/App/Favorites";
import Sales from "@screens/App/Sales";
import { Flower, FlowerList } from "@screens/App/Flower";
import { Cake, CakeList } from "@screens/App/Cake";
import { Buffet, BuffetList } from "@screens/App/Buffet";
import { Gift, GiftList } from "@screens/App/Gift";
import { Party, PartyList } from "@screens/App/Party";
import { Clouth, ClouthList } from "@screens/App/Clouth";


const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes = () => {

  const { user } = useAuth();

  return (
    <Navigator initialRouteName={ (user?.person1 && user?.person2) || user?.username === "admin" ? 'Home' : 'FirstForm' }>
      {/* FirstForm */}
      <Screen name="FirstForm" component={ FirstForm } options={{ headerShown: false }} />

      {/* Footer navigates */}
      <Screen name="Home" component={ Home } options={{ header: () => <Footer icon="Home" /> }} />
      <Screen name="Favorites" component={ Favorites } options={{ header: () => <Footer icon="Favorites" /> }}  />

      <Screen name="Sales" component={ Sales } options={{ header: () => <Footer icon="Sales" /> }}  />
      <Screen name="Profile" component={ Profile } options={{ header: () => <Footer icon="Profile" /> }}  />

      {/* Home navigates */}
      <Screen name="Flower" component={ Flower } options={({ route }) => ({ headerShown: true, headerTitle: route.params?.title || '' })} />
      <Screen name="FlowerList" component={ FlowerList } options={{ header: () => <Footer /> }} />

      <Screen name="Cake" component={ Cake } options={({ route }) => ({ headerShown: true, headerTitle: route.params?.title || '' })} />
      <Screen name="CakeList" component={ CakeList } options={{ header: () => <Footer /> }} />

      <Screen name="Buffet" component={ Buffet } options={({ route }) => ({ headerShown: true, headerTitle: route.params?.title || '' })} />
      <Screen name="BuffetList" component={ BuffetList } options={{ header: () => <Footer /> }} />

      <Screen name="Party" component={ Party } options={({ route }) => ({ headerShown: true, headerTitle: route.params?.title || '' })} />
      <Screen name="PartyList" component={ PartyList } options={{ header: () => <Footer /> }} />

      <Screen name="Clouth" component={ Clouth } options={({ route }) => ({ headerShown: true, headerTitle: route.params?.title || '' })} />
      <Screen name="ClouthList" component={ ClouthList } options={{ header: () => <Footer /> }} />

      <Screen name="Gift" component={ Gift } options={({ route }) => ({ headerShown: true, headerTitle: route.params?.title || '' })} />
      <Screen name="GiftList" component={ GiftList } options={{ header: () => <Footer /> }} />
    </Navigator>
  );
};