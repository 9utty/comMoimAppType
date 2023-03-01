import React, { useState } from "react";
import { View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as ImageManipulator from "expo-image-manipulator";
import { ImagePickerOptions } from "expo-image-picker/build/ImagePicker.types";
import { ImagePickerTitle } from "./ImagePickerTitleComponent";
import { ImagePreviewList } from "./ImagePreviewListComponent";
import { ImagePickerButton } from "./ImagePickerButtonComponent";

type ImagePickerProps = {
  onImageSelected: (uris: string[]) => void;
};

export const ImagePickerComponent: React.FC<ImagePickerProps> = ({
  onImageSelected,
}) => {
  const [previewUris, setPreviewUris] = useState<string[]>([]);
  const [imageCount, setImageCount] = useState(0);

  const handlePreview = async () => {
    try {
      const options: ImagePickerOptions = {
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1.0,
        allowsEditing: true,
        aspect: [1, 1],
        base64: false,
        allowsMultipleSelection: true,
      };
      const result = await ImagePicker.launchImageLibraryAsync(options);

      if (result.canceled) {
        return;
      }

      const newUris = result.assets.map((asset) => asset.uri);

      const resizedUris = await Promise.all(
        newUris.map(async (uri) => {
          const { uri: resizedUri } = await ImageManipulator.manipulateAsync(
            uri,
            [
              { resize: { width: 720, height: 540 } },
              { crop: { originX: 0, originY: 0, width: 720, height: 540 } },
            ],
            { format: ImageManipulator.SaveFormat.JPEG, compress: 0.6 }
          );
          return resizedUri;
        })
      );

      setPreviewUris([...previewUris, ...resizedUris]);
      onImageSelected([...previewUris, ...resizedUris]);
      setImageCount((prevCount) => prevCount + resizedUris.length);
    } catch (error) {
      console.error("Error picking image:", error);
    }
  };

  return (
    <View>
      <ImagePickerTitle ImageCount={imageCount} />
      <View>
        <ImagePreviewList
          previewUris={previewUris}
          onImageSelected={onImageSelected}
          setPreviewUris={setPreviewUris}
        />
      </View>
      <ImagePickerButton
        handlePreview={handlePreview}
        disableUploadButton={previewUris.length >= 5}
      />
    </View>
  );
};
