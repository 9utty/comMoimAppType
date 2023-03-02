import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Platform,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { ImagePickerTitle } from "./ImagePickerTitleComponent";
import { ImagePickerButton } from "./ImagePickerButtonComponent";

export const ImagePickerComponent: React.FC<{
  selectedImages: string[];
  uploadButtonEnabled: boolean;
  setSelectedImages: (image: string[]) => void;
  setUploadButtonEnabled: (focused: boolean) => void;
}> = (props) => {
  // function to handle image selection
  const handleImageSelection = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!");
      return;
    }

    let result = (await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 3],
      allowsEditing: true,
      quality: 0.2,
    } as ImagePicker.ImagePickerOptions)) as ImagePicker.ImagePickerResult;

    if (result && result.assets) {
      const newSelectedImages = props.selectedImages.concat(
        result.assets.map((asset) => asset.uri)
      );
      props.setSelectedImages(newSelectedImages);

      // enable upload button if the number of images is less than 5
      if (newSelectedImages.length < 5) {
        props.setUploadButtonEnabled(false);
      }
    }
    if (props.selectedImages.length > 4) {
      // disable upload button if maximum number of images has been reached
      props.setUploadButtonEnabled(true);
      return;
    }
  };

  // function to handle image cancellation
  const handleImageCancel = (index: number) => {
    const newSelectedImages = [...props.selectedImages];
    newSelectedImages.splice(index, 1);
    props.setSelectedImages(newSelectedImages);

    // enable upload button if the number of images is less than 5
    if (newSelectedImages.length < 5) {
      props.setUploadButtonEnabled(false);
    }
  };

  return (
    <View>
      <ImagePickerTitle ImageCount={props.selectedImages.length} />
      {props.selectedImages.length > 0 && (
        <ScrollView horizontal={true}>
          {props.selectedImages.map((imageUri, index) => (
            <View key={index} style={{ marginRight: 10 }}>
              <Image
                source={{ uri: imageUri }}
                style={{
                  width: Dimensions.get("window").width * 0.6,
                  height: Dimensions.get("window").width * 0.6 * 0.75,
                }}
                resizeMode="contain"
              />
              <TouchableOpacity onPress={() => handleImageCancel(index)}>
                <Text>Cancel Image</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      )}
      <ImagePickerButton
        handlePreview={handleImageSelection}
        disableUploadButton={props.uploadButtonEnabled}
      />
      <TouchableOpacity
        onPress={handleImageSelection}
        disabled={!props.uploadButtonEnabled}
      >
        <Text>Select Images</Text>
      </TouchableOpacity>
      <Text>{`Number of Images Uploaded: ${props.selectedImages.length}/5`}</Text>
    </View>
  );
};
