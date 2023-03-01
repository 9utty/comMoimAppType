import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";
import * as Location from "expo-location";
import { MoimHeader } from "../../components/MoimHeader";
import { ImagePickerComponent } from "./components/ImagePickerComponent";
import { Spacer } from "../../components/Spacer";
import { PostInput } from "./components/PostInputComponent";

export const PostEventScreen = () => {
  const [location, setLocation] = useState("");
  const [imageUris, setImageUris] = useState<string[]>([]);
  const [eventTitle, setEventTitle] = useState("");
  const [eventDescription, setEventDescription] = useState("");

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      imageUris.forEach((uri) => {
        formData.append("picture", uri);
      });
      formData.append("location", location);
      formData.append("title", eventTitle);
      formData.append("description", eventDescription);

      const response = await fetch("https://example.com/api/post-event", {
        method: "POST",
        body: formData,
      });

      // handle response
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  const handleImageSelected = (uris: string[]) => {
    setImageUris(uris);
  };

  return (
    <View style={{ backgroundColor: "white" }}>
      <MoimHeader showBackButton={true} />
      <ScrollView
        style={{
          marginTop: -20,
          paddingTop: -50,
        }}
      >
        <View style={StylePost.container}>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 28, fontWeight: "bold" }}>
              이벤트 작성하기
            </Text>
          </View>
          <PostInput
            inputTitle="이벤트 제목"
            textMax={50}
            value={eventTitle}
            onChangeText={setEventTitle}
          />
          <ImagePickerComponent onImageSelected={handleImageSelected} />
          <PostInput
            inputTitle="이벤트 설명"
            textMax={500}
            value={eventDescription}
            onChangeText={setEventDescription}
          />
        </View>
        <Button title="Submit" onPress={handleSubmit} />
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
