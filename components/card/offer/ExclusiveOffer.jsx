import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, Modal } from "react-native";
import styles from "./exclusiveoffer.style";
import icons from "../../../constants/icons";
import { useNavigation } from "@react-navigation/native";
import SmallButtom from "../../buttons/smallButton/SmallButton";

export function ExclusiveOffer({ item }) {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("Detail");
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const closeModal = () => {
    console.log("Closing modal");
    setIsModalVisible(false);
  };

  const handleAddToCart = () => {
    console.log("Adding to cart");
    setIsModalVisible(true);
  };

  return (
    <>
      <TouchableOpacity style={styles.container(item)}>
        <TouchableOpacity
          style={styles.imageContainer(item)}
          onPress={handlePress}
        >
          <Image
            source={item.image}
            resizeMode="contain"
            style={styles.productImage}
          />
        </TouchableOpacity>
        <View style={styles.infoContainer}>
          <Text style={styles.productName(item)} numberOfLines={1}>
            {item.title}
          </Text>
          <Text style={styles.location}>{item.sub_title}</Text>
          <View style={styles.priceElement}>
            <Text style={styles.priceTitle}>$4.99</Text>
            <TouchableOpacity style={styles.addBtn} onPress={handleAddToCart}>
              <Image
                source={icons.add}
                resizeMode="contain"
                style={styles.addBtnImage}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.imgCart}>
              <Image source={icons.success} />
            </View>
            <Text style={styles.modalText}>Success !</Text>
            <Text style={styles.modalSubText}>
              Item was successfully added to cart
            </Text>
            <SmallButtom
              onPress={closeModal}
              buttonTitle={"Continue shopping"}
            />
          </View>
        </View>
      </Modal>
    </>
  );
}

export default ExclusiveOffer;
