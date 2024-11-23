import React from "react";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./src/routes";
import "./src/styles/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "@src/hooks/useRedux/store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar style="dark" translucent backgroundColor="transparent" />
        <SafeAreaView
          style={{ width: "100%", height: "100%", display: "flex" }}
        >
          <Routes />
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
