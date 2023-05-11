import { View, Text, TextInput, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Icon } from "@rneui/base";
import ModalAdd from "../components/ModalAdd.js";

const SecondaryScreen = ({ navigation }) => {
  const [search, setSearch] = useState("");

  return (
    <View className="flex mt-7">
      <View className="flex flex-row w-screen">
        <Image source={require("../img/Logo.png")} className="w-24 h-24" />
        <TextInput
          onChangeText={setSearch}
          value={search}
          className="border border-gray-600 self-center rounded-sm w-56 h-12"
          selectionColor="#3C486B"
        />
      </View>
      <ModalAdd />
      <Pressable
        onPress={() => navigation.navigate("ListItem")}
        className="flex justify-center items-center"
      >
        <View className="w-4/5 h-20 bg-green-800 m-5 rounded-md flex  flex-row justify-evenly items-center">
          <Text className="text-white text-2xl">Angkatan 2020</Text>
          <Icon
            name="navigate-next"
            type="materialicons"
            size={40}
            color="#FFEBEB"
          />
        </View>
      </Pressable>
    </View>
  );
};

export default SecondaryScreen;
