import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";

const ListItem = ({ navigation }) => {
  const [siswa, setSiswa] = useState([]);
  const [numColumns, setNumColumns] = useState(2);

  useEffect(() => {
    getSiswa();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("DetailScreen", {
          image: item.url,
          name: item.nama,
          instagram: item.instagram,
          quote: item.quotes,
          id: item.id,
        })
      }
    >
      <Image
        source={{ uri: item.url }}
        style={{ margin: 10 }}
        className="rounded-md w-40 h-48 "
      />
    </TouchableOpacity>
  );

  const getSiswa = async () => {
    try {
      const response = await axios.get("http://192.168.100.118:5000/siswa");
      setSiswa(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View className="w-screen h-screen mt-4">
      <FlatList
        data={siswa}
        renderItem={renderItem}
        className=" mt-5 "
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
      />
    </View>
  );
};

export default ListItem;
