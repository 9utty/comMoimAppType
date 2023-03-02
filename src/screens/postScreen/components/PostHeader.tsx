import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  Alert,
  BackHandler,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import ImageButton from "../../../components/ImageButton";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import { deleteAllImages } from "../../../redux/Image/ImageAction";
import { deleteAllEventPost } from "../../../redux/EventPost/EventPostAction";

type RootStackParamList = {
  Home: undefined;
  Search: undefined;
};

export const PostHeader: React.FC<{
  setEventTitle: (text: string) => void;
  setEventDescription: (text: string) => void;
  setOpenTalk: (text: string) => void;
}> = (props) => {
  const dispatch = useDispatch();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleBackButton = () => {
    Alert.alert(
      "",
      "작성을 취소하시겠습니까?",
      [
        {
          text: "No",
          onPress: () => null,
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => {
            props.setEventDescription("");
            props.setEventTitle("");
            props.setOpenTalk("");
            dispatch(deleteAllImages());
            dispatch(deleteAllEventPost());
            navigation.goBack();
          },
        },
      ],
      { cancelable: false }
    );
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackButton);
    return () =>
      BackHandler.removeEventListener("hardwareBackPress", handleBackButton);
  }, []);

  const onPressSubmit = () => {
    Alert.alert(
      "",
      "이벤트를 업로드하시겠습니까?",
      [
        {
          text: "No",
          onPress: () => console.log("Post submission cancelled"),
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => {
            navigation.navigate("Search");
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <SafeAreaView edges={["top"]}>
      <View style={styleHeader.container}>
        <ImageButton
          onPress={handleBackButton}
          style={styleHeader.backButton}
          source={require("../../../assets/back.png")}
        />
        <ImageButton
          onPress={onPressSubmit}
          style={styleHeader.submitButton}
          source={require("../../../assets/OK.png")}
        />
      </View>
    </SafeAreaView>
  );
};

const styleHeader = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: Dimensions.get("window").height * 0.07,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
    paddingTop: 5,
    borderBottomColor: "black",
    borderBottomWidth: 3,
    backgroundColor: "white",
  },
  backButton: {
    marginTop: -10,
    width: Dimensions.get("window").width * 0.13,
    height: Dimensions.get("window").height * 0.07,
  },
  submitButton: {
    marginTop: -10,
    width: Dimensions.get("window").width * 0.13,
    height: Dimensions.get("window").height * 0.07,
  },
});
