import { useNavigation } from "@react-navigation/native";
import React, { useCallback } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { MoimHeader } from "../../components/MoimHeader";
import { HomeEventList } from "./components/HomeEventList";
import { HomeHashtagList } from "./components/HomeHashtagList";

export const HomeScreen: React.FC = () => {
  const homenavigation = useNavigation();
  const onPressEvent = useCallback(() => {
    homenavigation.navigate("Event" as never);
  }, [homenavigation]);
  const onPressHashtag = useCallback(() => {
    homenavigation.navigate("HashTag" as never);
  }, [homenavigation]);
  return (
    <View style={{ backgroundColor: "white" }}>
      <MoimHeader showBackButton={false} />
      <ScrollView style={HomeScreenStyle.container}>
        <HomeHashtagList onPressHashtag={onPressHashtag} />
        <HomeEventList onPressEvent={onPressEvent} />
      </ScrollView>
    </View>
  );
};

const HomeScreenStyle = StyleSheet.create({
  container: {
    marginTop: -30,
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 30,
  },
});
