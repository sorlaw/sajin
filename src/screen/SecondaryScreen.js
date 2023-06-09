import {
  View,
  Text,
  TextInput,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Icon } from "@rneui/base";
import ModalAdd from "../components/ModalAdd.js";
import axios from "axios";
import { debounce } from "lodash";

const SecondaryScreen = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [siswa, setSiswa] = useState();

  const findSiswa = async (val) => {
    try {
      const response = await axios.get(
        `http://192.168.43.197:5000/siswa/api/${val}`
      );
      setSiswa(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = debounce((text) => {
    findSiswa(text);
  }, 500);

  const handleChange = (text) => {
    setSearch(text);
    handleSearch(text);
  };

  const moveScreen = () => {
    navigation.navigate("DetailScreen", {
      image: siswa.url,
      nama: siswa.nama,
      instagram: siswa.instagram,
      quote: siswa.quotes,
      id: siswa.id,
    });
  };

  return (
    <View className="flex mt-7">
      <View className="flex flex-row w-screen">
        <Image source={require("../img/Logo.png")} className="w-24 h-24" />
        <TextInput
          onChangeText={handleChange}
          value={search}
          className="border border-gray-600 self-center rounded-sm w-56 h-12"
          selectionColor="#3C486B"
          placeholder="Masukkan Nama Alumni"
          placeholderTextColor="#3C486B"
          style={{ padding: 10 }}
        />
      </View>
      {!siswa ? (
        ""
      ) : (
        <TouchableOpacity onPress={moveScreen}>
          <View className="flex flex-row items-center justify-evenly border border-green-700 w-56 h-28 mx-24 -my-6">
            <Image
              source={{
                uri: siswa.url,
              }}
              className="w-20 h-24 rounded-md"
            />
            <Text className="text-md text-black">{siswa.nama}</Text>
          </View>
        </TouchableOpacity>
      )}

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
