import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { TabBar } from "./src/navigations/TabbarNavigation";
import { View } from "react-native";

export default function App() {
  return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        <TabBar />
      </View>
    </NavigationContainer>
  );
}
