import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  Dimensions,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import * as Location from "expo-location";
import { MoimHeader } from "../home/components/MoimHeader";
import { ImagePickerComponent } from "./components/ImagePickerComponent";
import { Spacer } from "../../components/Spacer";
import { PostInput } from "./components/PostInputComponent";
import { useNavigation } from "@react-navigation/native";
import { PostHeader } from "./components/PostHeader";

export enum inputType {
  TITLE,
  DESCRIPTION,
  OPENTALKLING,
}

export const PostEventScreen = () => {
  const [location, setLocation] = useState("");
  const [eventTitle, setEventTitle] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventOpenTalk, setEventOpenTalk] = useState("");
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [uploadButtonEnabled, setUploadButtonEnabled] = useState(false);
  const navigation = useNavigation();

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("location", location);
      formData.append("title", eventTitle);
      formData.append("description", eventDescription);

      const response = await fetch("https://example.com/api/post-event", {
        method: "POST",
        body: formData,
      });
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <View
      style={{
        backgroundColor: "white",
      }}
    >
      <PostHeader
        setEventTitle={setEventTitle}
        setEventDescription={setEventDescription}
        setOpenTalk={setEventOpenTalk}
        setSelectedImages={setSelectedImages}
        setUploadButton={setUploadButtonEnabled}
      />
      <ScrollView
        contentContainerStyle={{
          paddingTop: Dimensions.get("window").height * 0.05,
          paddingBottom: Dimensions.get("window").height * 0.15,
        }}
      >
        <View style={StylePost.container}>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 28, fontWeight: "bold" }}>
              ????????? ????????????
            </Text>
          </View>
          <PostInput
            inputTitle="????????? ??????"
            textMax={50}
            value={eventTitle}
            onChangeText={setEventTitle}
            PlaceHolder={"????????? ????????? ??????????????????."}
            type={inputType.TITLE}
            isForce={true}
          />
          <View
            style={{
              width: Dimensions.get("window").width * 0.8,
              height: Dimensions.get("window").height * 0.5,
            }}
          >
            <ImagePickerComponent
              selectedImages={selectedImages}
              uploadButtonEnabled={uploadButtonEnabled}
              setSelectedImages={setSelectedImages}
              setUploadButtonEnabled={setUploadButtonEnabled}
            />
          </View>
          <PostInput
            inputTitle="????????? ??????"
            textMax={200}
            value={eventDescription}
            onChangeText={setEventDescription}
            PlaceHolder={"????????? ????????? ??????????????????."}
            type={inputType.DESCRIPTION}
            isForce={true}
          />
          <Spacer size={10} />
          <Text>??????</Text>
          <Spacer size={10} />
          <Text>????????????</Text>
          <PostInput
            inputTitle="????????? ??????"
            textMax={200}
            value={eventOpenTalk}
            onChangeText={setEventOpenTalk}
            PlaceHolder={"????????? ????????? ??????????????????."}
            type={inputType.OPENTALKLING}
            isForce={false}
          />
        </View>
        <Button title="Submit" onPress={handleSubmit} />
        <Spacer size={Dimensions.get("window").height * 0.1} />
      </ScrollView>
    </View>
  );
};

const StylePost = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
  },
});
