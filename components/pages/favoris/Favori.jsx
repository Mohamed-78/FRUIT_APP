import React from "react";
import {
  View,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { images } from "../../../constants";
import styles from "./fovori.style";
import icons from "../../../constants/icons";

// Données factices pour les produits dans le panier
const DATA = [
  {
    id: "9009lky",
    title: "Jus d'orange",
    sub_title: "105ml, Price",
    image: images.juice,
    price: "$10.90",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Super Pineapple",
    sub_title: "1kg, Priceg",
    image: images.ananas,
    price: "$40.99",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f28",
    title: "African mangoes",
    sub_title: "1kg, Priceg",
    image: images.mangue,
    price: "$12.00",
  },
  {
    id: "jd98yd",
    title: "Ginger Beer",
    sub_title: "335ml, Price",
    image: images.beer,
    price: "$4.99",
  },
  {
    id: "9002elkj",
    title: "Sprite Can",
    sub_title: "325ml, Price",
    image: images.pepsi,
    price: "$1.90",
  },
];

export function Favori() {
  return (
    <View style={styles.container}>
      <View style={styles.FavText}>
        <Text style={styles.textFontSize}>Favorurite</Text>
      </View>
      <View style={styles.traitHorizontal} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {DATA.map((item, index) => (
          <React.Fragment key={item.id}>
            <View style={styles.ViewFlexDirection}>
              <View style={styles.cartDirection}>
                <Image
                  source={item.image}
                  resizeMode="cover"
                  style={styles.imageWidth}
                />
                <View style={{ marginLeft: 16, flex: 1 }}>
                  <View style={styles.titleContainer}>
                    <Text style={styles.textFontSize}>{item.title}</Text>
                    <View style={styles.alignPriceElement}>
                      <Text style={styles.priceFontWeight}>{item.price}</Text>
                      <TouchableOpacity>
                        <Image source={icons.bin} style={styles.iconSize} />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <Text style={styles.subTitle}>{item.sub_title}</Text>
                </View>
              </View>
            </View>
            {index < DATA.length - 1 && <View style={styles.horizontalBar} />}
          </React.Fragment>
        ))}
      </ScrollView>

      <View style={styles.checkoutBtnPosition}>
        <TouchableOpacity style={styles.CheckoutBtn}>
          <Text style={styles.btnText}>Add All To Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Favori;
