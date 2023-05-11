import { View, Text, Image, FlatList } from "react-native";
import React from "react";

const ListItem = () => {
  return (
    <View className="flex w-screen h-screen px-4 py-10 flex-wrap gap-3">
      <Image
        source={require("../img/_.jpeg")}
        style={{}}
        className="rounded-md w-40 h-48 "
      />
      <Image
        source={require("../img/Hiro_Hamada.jpeg")}
        style={{}}
        className="rounded-md w-40 h-48 "
      />
      <Image
        source={require("../img/johnny.jpeg")}
        style={{}}
        className="rounded-md w-40 h-48 "
      />
      <Image
        source={require("../img/Raizo.jpeg")}
        style={{}}
        className="rounded-md w-40 h-48 "
      />
      <Image
        source={require("../img/Tadashi_Hamada.jpeg")}
        style={{}}
        className="rounded-md w-40 h-48 "
      />
      <Image
        source={require("../img/WALL-E.jpeg")}
        style={{}}
        className="rounded-md w-40 h-48 "
      />
    </View>
  );
};

export default ListItem;
