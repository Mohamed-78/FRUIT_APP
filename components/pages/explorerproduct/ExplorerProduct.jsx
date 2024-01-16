import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import styles from "./explorerproduct.style";
import icons from "../../../constants/icons";
import { images } from "../../../constants";

const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "Organic Bananas",
      sub_title: "7pcs, Priceg",
      image: images.banane,
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Super Pineapple",
      sub_title: "1kg, Priceg",
      image: images.ananas,
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f28",
      title: "African mangoes",
      sub_title: "1kg, Priceg",
      image: images.mangue,
    },
  ];

export function ExplorerProduct() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.explorerText}>
          <Image source={icons.back} style={styles.iconWidth} />
          <Text style={styles.textFontSize}>Fruits & vegetable</Text>
          <Image source={icons.question} style={styles.iconWidth} />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
        {DATA.map((item) => (
            <React.Fragment key={item.id}>
                <View style={styles.containerCardProduct}>
                    <TouchableOpacity
                    style={styles.imageContainer}
                    >
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
                        <TouchableOpacity
                        style={styles.addBtn}
                        >
                        <Image
                            source={icons.add}
                            resizeMode="contain"
                            style={styles.addBtnImage}
                        />
                        </TouchableOpacity>
                    </View>
                    </View>
                </View>
            </React.Fragment>
        ))}
        </ScrollView>
      </View>
    </>
  );
}

export default ExplorerProduct;
