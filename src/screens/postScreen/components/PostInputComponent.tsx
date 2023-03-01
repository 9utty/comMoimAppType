import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { Spacer } from "../../../components/Spacer";
import { Octicons } from "@expo/vector-icons";

export const PostInput: React.FC<{
  inputTitle: string;
  textMax: number;
  PlaceHolder?: string;
  onChangeText: (text: string) => void;
  value: string;
}> = (props) => {
  const { inputTitle, textMax, PlaceHolder, onChangeText, value } = props;
  const [context, setContext] = useState(value);
  return (
    <View>
      <Spacer />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontWeight: "bold", fontSize: 18, marginRight: 5 }}>
            {inputTitle}
          </Text>
          <Octicons
            name="check"
            size={14}
            color="red"
            style={{ paddingHorizontal: 4 }}
          />
        </View>
        <View>
          <Text style={{ alignItems: "center", fontSize: 10, marginTop: 3 }}>
            {context.length} / {textMax}
          </Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 10,
          paddingBottom: 5,
          borderRadius: 5,
          borderColor: "rgba(0,0,0,0.2)",
          borderWidth: 1,
        }}
      >
        <TextInput
          value={context}
          onChangeText={(text) => {
            setContext(text);
            onChangeText(text);
          }}
          maxLength={textMax}
          placeholder={PlaceHolder || "Enter your text here..."}
          multiline={true}
        />
      </View>
    </View>
  );
};
