import styles from "./explorer.style";
import React from 'react';
import { View, TextInput, StyleSheet, Image, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { images } from "../../../constants";
import Category from "../../categories/Category";
import { SIZES } from "../../../constants";

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5',
      title: 'Fruit & Vegetable',
      image: images.fruit,
      backgroundColor: "#eef7f2",
      borderColor: "#53b175"
    },
    {
      id: '3ac68afc-c605-48d3-a4f8',
      title: 'Cooking Oil & Ghee',
      image: images.huile,
      backgroundColor: "#fef5ec",
      borderColor: "#fccf9f"
    },
    {
      id: '3ac68afc-c605-48d3-a4f8',
      title: 'Meat & Fish',
      image: images.viande,
      backgroundColor: "#fde8e5",
      borderColor: "#f7afa5"
    },
    {
      id: '3ac68afc-c605-48d3-k4f8',
      title: 'Bakery & Snacks',
      image: images.farine,
      backgroundColor: "#f5eaf8",
      borderColor: "#e8b4f7"
    },
    {
      id: '3ac68afc-c605-48d3-f4f8',
      title: 'Dairy & Eggs',
      image: images.lait,
      backgroundColor: "#fff8e6",
      borderColor: "#f7de9e"
    },
    {
      id: '3ac68afc-c605-48d3-f4f8',
      title: 'Beverages',
      image: images.alcool,
      backgroundColor: "#eef7fc",
      borderColor: "#b2ddf4",
      detail:[
        {
          title: 'Diet Coke',
          sub_title: '335ml, Price',
          image: images.coke,
          price: '$1.99'
        },
        {
          title: 'Sprite Can',
          sub_title: '325ml, Price',
          image: images.pepsi,
          price: '$1.50'
        }
      ]
    },
  ];

export function Explorer() {

    return (
      <>
       <View style={styles.container}>
          <View style={styles.explorerText}>
            <Text style={styles.textFontSize}>Find Products</Text>
          </View>
          <View style={styles.searchContainer}>
            <View style={styles.searchWrapper}>
              <TextInput
                style={styles.searchInput}
                value=""
                onChange={() => ({})}
                placeholder="Search Store"
              />
            </View>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.categoriesContainer}>
              {DATA.map((item, index) => {
                if (index % 2 === 0) {
                  const nextItem = DATA[index + 1];
                  return (
                    <View style={styles.categoryRow} key={index}>
                      <Category item={item} />
                      {nextItem && <Category item={nextItem} />}
                    </View>
                  );
                }
                return null;
              })}
            </View>
          </ScrollView>
        </View>
      </>
    );
}
  
export default Explorer;