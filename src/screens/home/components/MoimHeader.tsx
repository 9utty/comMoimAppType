import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  Alert,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import ImageButton from "../../../components/ImageButton";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";

type RootStackParamList = {
  Home: undefined;
  Search: undefined;
};

const styleHeader = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height:
      Platform.OS === "ios"
        ? Dimensions.get("window").height * 0.07
        : Dimensions.get("window").height * 0.1,
    borderBottomColor: "black",
    borderBottomWidth: 3,
    backgroundColor: "white",
  },
  backButton: {
    marginTop: Platform.OS === "ios" ? -10 : 0,
    width: Dimensions.get("window").width * 0.13,
    height: Dimensions.get("window").height * 0.07,
  },
  moimButton: {
    width: Dimensions.get("window").width * 0.3 + 3,
    height: Dimensions.get("window").height * 0.05 + 1,
    paddingTop: 30,
    marginHorizontal: Platform.OS === "ios" ? 20 : 10,
    paddingVertical: 10,
  },
  searchButton: {
    marginTop: Platform.OS === "ios" ? -10 : 5,
    marginHorizontal: 20,
    width: Dimensions.get("window").width * 0.13,
    height: Dimensions.get("window").height * 0.07,
  },
});

export const MoimHeader: React.FC<{
  showBackButton: boolean;
}> = (props) => {
  const dispatch = useDispatch();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const onPressBack = () => {
    //해당 코드 작성
  };

  const onPressSearch = () => {
    navigation.navigate("Search");
  };

  return (
    <SafeAreaView edges={["top"]}>
      <View style={styleHeader.container}>
        <Image
          source={require("../../../assets/moim.png")}
          style={styleHeader.moimButton}
        />
        <ImageButton
          onPress={onPressSearch}
          style={styleHeader.searchButton}
          source={require("../../../assets/search.png")}
        />
      </View>
    </SafeAreaView>
  );
};
