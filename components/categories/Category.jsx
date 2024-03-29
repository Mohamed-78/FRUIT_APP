import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./category.style";
import { useNavigation } from "@react-navigation/native";

export function Category({ item }) {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate("ExplorerProduct");
  };
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.container(item)}
      onPress={handlePress}
    >
      <View style={styles.imageContainer(item)}>
        <Image
          source={item.image}
          resizeMode="contain"
          style={styles.productImage}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.productName(item)} numberOfLines={1}>
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default Category;
