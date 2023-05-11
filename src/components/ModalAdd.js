import {
  Text,
  View,
  Modal,
  TextInput,
  Pressable,
  Button,
  Image,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import styles from "../style/style";
import { Icon } from "@rneui/base";
import { Picker } from "@react-native-picker/picker";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ModalAdd = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [nama, setNama] = useState("");
  const [tahun, setTahun] = useState(2020);
  const [quote, setQuote] = useState("");
  const [instagram, setInstagram] = useState("");
  const [img, setImg] = useState(null);
  const [file, setFile] = useState("");

  useEffect(() => {}, []);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
      selectionLimit: 1,
      base64: false,
    });

    // console.log(result);
    // if (!canceled) {
    //   setImg(result.assets[0]);
    //   console.log(result.assets[0]);
    // }
    if (!result.canceled) {
      setImg(result.assets[0]);
    }
  };

  // addingData();

  const saveSiswa = () => {
    if (!img) {
      alert("Image Harus di Upload");
    } else {
      const filename = img.uri.substring(
        img.uri.lastIndexOf("/") + 1,
        img.uri.length
      );
      const formData = new FormData();
      formData.append("nama", nama);
      formData.append("tahun", tahun);
      formData.append("instagram", instagram);
      formData.append("quotes", quote);
      formData.append("file", {
        uri: img.uri,
        name: filename,
        type: img.type,
      });
      axios
        .post("http://192.168.100.118/siswa", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          if (response.status == 200) {
            alert("siswa berhasil dibuat");
          } else {
            console.log(response);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <View>
      <Icon
        name="plussquare"
        type="antdesign"
        color="#03C988"
        size={40}
        style={{ width: 40, marginStart: 33 }}
        onPress={() => setModalVisible(true)}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          alert("Modal has been closed");
          setModalVisible(!modalVisible);
        }}
      >
        <ScrollView>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Masukkan Nama</Text>
              <TextInput
                style={styles.input}
                className="bg-sky-700 text-white"
                value={nama}
                onChangeText={setNama}
              />
              <Text style={styles.modalText}>Masukkan Tahun</Text>
              <Picker
                selectedValue={tahun}
                onValueChange={(itemValue, itemIndex) => setTahun(itemValue)}
                style={{ width: 120, height: 50 }}
              >
                <Picker.Item label="2020" value="java" />
                <Picker.Item label="2021" value="script" />
              </Picker>
              <Text style={styles.modalText}>Masukkan Instagram</Text>
              <TextInput
                style={styles.input}
                className="bg-sky-700 text-white"
                value={instagram}
                onChangeText={setInstagram}
              />

              <Text style={styles.modalText}>Masukkan Quote</Text>
              <TextInput
                className="bg-sky-700 text-white m-3 p-3 w-48 "
                value={quote}
                onChangeText={setQuote}
                multiline={true}
                numberOfLines={4}
              />
              <Button title="Pilih gambar" onPress={pickImage} />
              {img && (
                <Image
                  source={{ uri: img.uri }}
                  style={{ width: 200, height: 200 }}
                />
              )}
              <View className="flex flex-row w-full justify-between mt-5">
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                  className="mt-5"
                >
                  <Text style={styles.textStyle} onPress={saveSiswa}>
                    Tambahkan
                  </Text>
                </Pressable>
                <Pressable
                  style={[styles.button]}
                  onPress={() => setModalVisible(!modalVisible)}
                  className="mt-5 bg-red-700"
                >
                  <Text style={styles.textStyle}>batal</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </ScrollView>
      </Modal>
    </View>
  );
};

export default ModalAdd;