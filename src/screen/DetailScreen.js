import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Icon } from "@rneui/base";
import React, { useState, useEffect } from "react";
import axios from "axios";

const DetailScreen = ({ route, navigation }) => {
  const { image, name, instagram, quote, id } = route.params;
  const [level, setLevel] = useState("");

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("level");
      if (value !== null && value == "1") {
        // value previously stored
        setLevel("admin");
      } else {
        setLevel("user");
      }
    } catch (e) {
      // error reading value
      console.log(e);
    }
  };

  const deleteSiswa = () => {
    axios.delete(`http://192.168.100.118:5000/siswa/${id}`);
    alert("data terhapus");
    navigation.navigate("Details");
  };

  return (
    <View className="w-screen h-screen flex justify-center items-center">
      <View className="w-4/5 h-3/5 bg-green-500 rounded-lg flex justify-center items-center ">
        <Image
          source={{
            uri: image,
          }}
          className="w-32 h-36 rounded-md "
        />
        <Text className="text-lg text-white mt-2">{name}</Text>
        <Text className="text-lg text-white mt-2">{instagram}</Text>
        <Text className="text-md text-white mt-3 text-center italic">
          {quote}
        </Text>
      </View>
      {level == "1" ? (
        <View className="flex self-start mx-8 flex-row my-2">
          <TouchableOpacity className=" self-start" onPress={deleteSiswa}>
            <Icon
              name="delete"
              type="materialicons"
              size={40}
              color="#B70404"
              className="justify-self-end"
            />
          </TouchableOpacity>
        </View>
      ) : (
        ""
      )}
    </View>
  );
};

export default DetailScreen;
