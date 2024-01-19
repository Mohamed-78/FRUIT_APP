import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import styles from "./explorerproduct.style";
import icons from "../../../constants/icons";
import { images } from "../../../constants";
import { useNavigation } from "@react-navigation/native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Organic Bananas",
    sub_title: "7pcs, Prix au kg",
    image: images.banane,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Super Pineapple",
    sub_title: "1kg, Prix au kg",
    image: images.ananas,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f28",
    title: "African mangoes",
    sub_title: "1kg, Prix au kg",
    image: images.mangue,
  },
  {
    id: "3ac68afc-w605-48d3-a4f8-fbd91aa97f28",
    title: "Apple",
    sub_title: "1kg, Prix au kg",
    image: images.mangue,
  },
  {
    id: "lac68afc-w605-48d3-a4f8-fbd91aa97f28",
    title: "Apple",
    sub_title: "1kg, Prix au kg",
    image: images.mangue,
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bam",
    title: "Organic Bananas",
    sub_title: "7pcs, Prix au kg",
    image: images.banane,
  },
];

const ExplorerProduct = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.explorerText}>
        <TouchableOpacity onPress={() => {navigation.goBack()}}>
            <Image source={icons.back} style={styles.iconWidth} />
        </TouchableOpacity>
        <Text style={styles.textFontSize}>Fruits & légumes</Text>
        <TouchableOpacity>
            <Image source={icons.question} style={styles.iconWidth} />
        </TouchableOpacity>
      </View>
      <View style={styles.categoriesContainer}>
        {DATA.map((item, index) => {
          if (index % 2 === 0) {
            const nextItem = DATA[index + 1];
            return (
              <View style={styles.categoryRow} key={index}>
                <ProductCard item={item} />
                {nextItem && <ProductCard item={nextItem} />}
              </View>
            );
          }
          return null;
        })}
      </View>
    </View>
  );
};

const ProductCard = ({ item }) => {
  return (
    <View style={styles.containerCardProduct}>
      <TouchableOpacity style={styles.imageContainer}>
        <Image
          source={item.image}
          resizeMode="contain"
          style={styles.productImage}
        />
      </TouchableOpacity>
      <View style={styles.infoContainer}>
        <Text style={styles.productName} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.location}>{item.sub_title}</Text>
        <View style={styles.priceElement}>
          <Text style={styles.priceTitle}>$4.99</Text>
          <TouchableOpacity style={styles.addBtn}>
            <Image
              source={icons.add}
              resizeMode="contain"
              style={styles.addBtnImage}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ExplorerProduct;
