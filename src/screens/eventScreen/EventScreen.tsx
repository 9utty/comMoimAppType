import React, { useState, useRef, useEffect } from "react";
import {
  View,
  ScrollView,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";
import { MoimHeader } from "../home/components/MoimHeader";

const { width } = Dimensions.get("window");

type ImageType = {
  uri: string;
};

const images: ImageType[] = [
  {
    uri: "https://www.shutterstock.com/image-photo/attractive-young-woman-wearing-bright-600w-1150009292.jpg",
  },
  {
    uri: "https://www.shutterstock.com/image-photo/colorful-summer-portrait-attractive-young-600w-167186057.jpg",
  },
  {
    uri: "https://www.shutterstock.com/image-photo/beautiful-woman-wearing-colorful-wig-600w-460053265.jpg",
  },
];

const ImageSlide = (): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    if (scrollViewRef.current && activeIndex !== 0) {
      scrollViewRef.current.scrollTo({
        x: activeIndex * width,
        animated: true,
      });
    }
  }, [activeIndex]);

  const handleMomentumScrollEnd = (event: any) => {
    const { contentOffset } = event.nativeEvent;
    const index = Math.round(contentOffset.x / width);
    setActiveIndex(index);
  };

  return (
    <View style={{ marginHorizontal: 15 }}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleMomentumScrollEnd}
        contentContainerStyle={{ alignItems: "center" }}
      >
        {images.map((image: ImageType, index: number) => (
          <View key={index} style={{ width, height: width * 0.75 }}>
            <Image
              source={image}
              style={{ width, height: width * 0.75 }}
              resizeMode="cover"
            />
          </View>
        ))}
      </ScrollView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        {images.map((_: ImageType, index: number) => (
          <View
            key={index}
            style={{
              width: 8,
              height: 8,
              borderRadius: 4,
              marginHorizontal: 5,
              backgroundColor: index === activeIndex ? "#000" : "#a5a5a5",
            }}
          />
        ))}
      </View>
    </View>
  );
};

export default ImageSlide;

export const EventScreen: React.FC = () => {
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <MoimHeader showBackButton={true} />
      <ImageSlide />
      <View
        style={{
          marginTop: 10,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>메인 주제</Text>
      </View>
    </View>
  );
};
