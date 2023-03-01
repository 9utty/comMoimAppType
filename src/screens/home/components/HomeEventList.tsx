import React from "react";
import { View, Text } from "react-native";
import { EventButton } from "./EventButton";

export const HomeEventList: React.FC<{
  onPressEvent: () => void;
}> = (props) => {
  return (
    <View style={{ flexDirection: "column" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          marginLeft: 30,
          marginTop: 10,
        }}
      ></View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          paddingBottom: 30,
        }}
      >
        <EventButton onPressEvent={props.onPressEvent} />
        <EventButton onPressEvent={props.onPressEvent} />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          paddingBottom: 30,
        }}
      >
        <EventButton onPressEvent={props.onPressEvent} />
        <EventButton onPressEvent={props.onPressEvent} />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          paddingBottom: 30,
        }}
      >
        <EventButton onPressEvent={props.onPressEvent} />
        <EventButton onPressEvent={props.onPressEvent} />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          paddingBottom: 30,
        }}
      >
        <EventButton onPressEvent={props.onPressEvent} />
        <EventButton onPressEvent={props.onPressEvent} />
      </View>
    </View>
  );
};
