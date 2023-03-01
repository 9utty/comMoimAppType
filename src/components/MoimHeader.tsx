import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ImageButton from "./ImageButton";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";

type RootStackParamList = {
  Home: undefined;
  Search: undefined;
};

const styleHeader = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
    paddingTop: 5,
    borderBottomColor: "black",
    borderBottomWidth: 3,
    backgroundColor: "white",
  },
  backButton: {
    width: 55,
    height: 50,
  },
  moimButton: {
    width: 100,
    height: 30,
  },
  searchButton: {
    paddingTop: -5,
    width: 55,
    height: 50,
  },
});

export const MoimHeader: React.FC<{ showBackButton: boolean }> = (props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const onPressBack = () => {
    navigation.goBack();
  };

  const onPressSearch = () => {
    navigation.navigate("Search");
  };

  return (
    <SafeAreaView>
      <View style={styleHeader.container}>
        {props.showBackButton ? (
          <ImageButton
            onPress={onPressBack}
            style={styleHeader.backButton}
            source={require("../assets/back.png")}
          />
        ) : (
          <Image
            source={require("../assets/moim.png")}
            style={styleHeader.moimButton}
          />
        )}
        <ImageButton
          onPress={onPressSearch}
          style={styleHeader.searchButton}
          source={require("../assets/search.png")}
        />
      </View>
    </SafeAreaView>
  );
};
