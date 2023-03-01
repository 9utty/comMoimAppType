import React from "react";
import { TouchableOpacity, View, Text, Dimensions } from "react-native";

type ImagePickerButtonProps = {
  handlePreview: () => void;
  disableUploadButton: boolean;
};

export const ImagePickerButton: React.FC<ImagePickerButtonProps> = ({
  handlePreview,
  disableUploadButton,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
      }}
    >
      <TouchableOpacity
        style={{
          backgroundColor: disableUploadButton ? "#ccc" : "#e0321f",
          padding: 10,
          borderRadius: 5,
          width: Dimensions.get("window").width - 300,
        }}
        onPress={handlePreview}
        disabled={disableUploadButton}
      >
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
            업로드
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
