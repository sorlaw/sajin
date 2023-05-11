import { View, Text, Image, TextInput, Pressable, Linking } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "../style/style.js";
import axios from "axios";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { Button } from "@rneui/base";

const HomeScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState(null);
  useEffect(() => {
    loginCheck();
  }, []);

  const loginCheck = async () => {
    try {
      const response = await axios.get(
        "http://192.168.43.197:5000/api/data/user"
      );
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const moveScreen = () => {
    // navigation.navigate('Details')

    for (const d of data) {
      if (d.username == username && d.password == password) {
        navigation.navigate("Details");
      }
    }
  };

  return (
    <View className=" flex justify-center items-center w-screen h-screen gap-y-3">
      <Image source={require("../img/Logo.png")} />
      <TextInput
        style={styles.input}
        onChangeText={setUsername}
        value={username}
        className="text-white bg-blue-400"
        placeholder="Masukkan Username"
        placeholderTextColor="#FFF"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        className="text-white bg-green-400 "
        placeholder="Masukkan Password"
        placeholderTextColor="#FFF"
        secureTextEntry={true}
      />
      <Pressable
        style={styles.login}
        className=" bg-gray-500 flex justify-center items-center p-3"
        onPress={moveScreen}
      >
        <Text className="text-white">Masuk</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;
