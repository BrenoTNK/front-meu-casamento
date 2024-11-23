import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ActivityIndicator, View, Text, StyleSheet } from "react-native";
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
import { useApi } from "@src/hooks/useAPI/useApi";
import { getUserService } from "@src/services/userService";
import { getMarriagesByUserService } from "@src/services/marriageService";
import { RootState } from "@src/hooks/useRedux/store";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@src/hooks/useRedux/userSlice";

const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes = () => {
  const api = useApi();
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);
  const [hasMarriage, setHasMarriage] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getUserService(api);

        if (response.data?.user?.id) {
          const { data } = await getMarriagesByUserService(
            api,
            response.data.user.id
          );

          dispatch(
            setUser({
              id: response.data.user.id,
              name: response.data.user.name,
              email: response.data.user.email,
              marriage: {
                id: data?.marriages[0]?.id || null,
                person1: data?.marriages[0]?.person1 || "",
                person2: data?.marriages[0]?.person2 || "",
                numberGuests: data?.marriages[0]?.numberGuests || 0,
                party: data?.marriages[0]?.party || "N",
                religious: data?.marriages[0]?.religious || "N",
                honeyMoon: data?.marriages[0]?.honeyMoon || "N",
                season: data?.marriages[0]?.season || "",
                religion: data?.marriages[0]?.religion || "",
                city: data?.marriages[0]?.city || "",
                style: data?.marriages[0]?.style || "",
                time: data?.marriages[0]?.time || "",
                local: data?.marriages[0]?.local || "",
                budget: data?.marriages[0]?.budget || 5000,
              },
            })
          );

          setHasMarriage(!!data?.marriages?.length);
        }
      } catch (error) {
        console.error("Erro ao buscar usuário:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, [api, dispatch]);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={styles.loadingText}>Carregando...</Text>
      </View>
    );
  }

  return (
    <Navigator initialRouteName={hasMarriage ? "Home" : "FirstForm"}>
      {/* FirstForm */}
      <Screen
        name="FirstForm"
        component={FirstForm}
        options={{ headerShown: false }}
      />

      {/* Footer navigates */}
      <Screen
        name="Home"
        component={Home}
        options={{ header: () => <Footer icon="Home" /> }}
      />
      <Screen
        name="Favorites"
        component={Favorites}
        options={{ header: () => <Footer icon="Favorites" /> }}
      />
      <Screen
        name="Sales"
        component={Sales}
        options={{ header: () => <Footer icon="Sales" /> }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{ header: () => <Footer icon="Profile" /> }}
      />

      {/* Home navigates */}
      <Screen
        name="Flower"
        component={Flower}
        options={({ route }) => ({
          headerShown: true,
          headerTitle: route.params?.title || "",
        })}
      />
      <Screen
        name="FlowerList"
        component={FlowerList}
        options={{ header: () => <Footer /> }}
      />

      <Screen
        name="Cake"
        component={Cake}
        options={({ route }) => ({
          headerShown: true,
          headerTitle: route.params?.title || "",
        })}
      />
      <Screen
        name="CakeList"
        component={CakeList}
        options={{ header: () => <Footer /> }}
      />

      <Screen
        name="Buffet"
        component={Buffet}
        options={({ route }) => ({
          headerShown: true,
          headerTitle: route.params?.title || "",
        })}
      />
      <Screen
        name="BuffetList"
        component={BuffetList}
        options={{ header: () => <Footer /> }}
      />

      <Screen
        name="Party"
        component={Party}
        options={({ route }) => ({
          headerShown: true,
          headerTitle: route.params?.title || "",
        })}
      />
      <Screen
        name="PartyList"
        component={PartyList}
        options={{ header: () => <Footer /> }}
      />

      <Screen
        name="Clouth"
        component={Clouth}
        options={({ route }) => ({
          headerShown: true,
          headerTitle: route.params?.title || "",
        })}
      />
      <Screen
        name="ClouthList"
        component={ClouthList}
        options={{ header: () => <Footer /> }}
      />

      <Screen
        name="Gift"
        component={Gift}
        options={({ route }) => ({
          headerShown: true,
          headerTitle: route.params?.title || "",
        })}
      />
      <Screen
        name="GiftList"
        component={GiftList}
        options={{ header: () => <Footer /> }}
      />
    </Navigator>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: "#000",
  },
});
