import React from 'react';
import { View, TextInput, StyleSheet, Image, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS, SIZES } from "../../../constants/theme";
import { FONT } from '../../../constants/theme';
import { images } from '../../../constants';
import ExclusiveOffer from '../../card/offer/ExclusiveOffer';
import BestSelling from '../../card/selling/BestSelling';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts } from "expo-font";
import useFetch from '../../../api/useFetch';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Organic Bananas',
    sub_title: '7pcs, Priceg',
    image: images.banane
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Super Pineapple',
    sub_title: '1kg, Priceg',
    image: images.ananas
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f28',
    title: 'African mangoes',
    sub_title: '1kg, Priceg',
    image: images.mangue
  },
];

const selling = [
  {
    id: 'c1b1-46c2-aed5-3ad53abb28ba',
    title: 'org watermelon',
    sub_title: '7pcs, Priceg',
    image: images.pasteque
  },
  {
    id: 'c605-48d3-a4f8-fbd91aa97f63',
    title: 'African Ginger',
    sub_title: '1kg, Priceg',
    image: images.gingembre
  },
  {
    id: 'c605-48d3-a4f8-fbd91aa97f28',
    title: 'African mangoes',
    sub_title: '1kg, Priceg',
    image: images.mangue
  },
];

export function Welcome({navigation }) {

  let [fontsLoaded] = useFonts({
    regular: require('../../../assets/font/Montserrat-Regular.ttf'),
    light: require('../../../assets/font/Montserrat-Light.ttf'),
    bold: require('../../../assets/font/Montserrat-Bold.ttf'),
  });

  if(!fontsLoaded){
    return (
      <Text>Loading...</Text>
    )
  }

  return (
    <ScrollView style={styles.backgroundPage}>
      <View style={styles.appMarginTop}>
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
        <View style={styles.bannerContainer}>
          <Image source={images.banner} resizeMode="cover" style={styles.bannerStyle}/>
        </View>
        <View style={styles.productText}>
          <Text style={styles.textLeft}>Exclusive Offer</Text>
          <TouchableOpacity>
            <Text style={styles.textRight}>See all</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cardsContainer}>
          <FlatList 
            data={DATA}
            renderItem={({ item }) =>(
              <ExclusiveOffer item={item} navigation={navigation}/>
            )}
            keyExtractor={item => item.id}
            contentContainerStyle={{columnGap: SIZES.small}}
            horizontal
          />
        </View>
        <View style={styles.productTextSecond}>
          <Text style={styles.textLeft}>Best Selling</Text>
          <TouchableOpacity>
            <Text style={styles.textRight}>See all</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cardsContainer}>
          <FlatList 
            data={selling}
            renderItem={({ item }) =>(
              <BestSelling item={item}/>
            )}
            keyExtractor={item => item.id}
            contentContainerStyle={{columnGap: SIZES.small}}
            horizontal
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  appMarginTop:{
    marginTop: '10%'
  },
  backgroundPage:{
    backgroundColor: "#fff"
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    //flexDirection: "column",
    marginTop: SIZES.large,
    height: 50,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: "center",
    borderRadius: 9,
    height: "100%",
    width: "90%",
  },
  searchInput: {
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
  },
  bannerContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  bannerStyle: {
    borderRadius: 9,
    width: 370,
    height: 110,
  },
  productText:{
    padding: 25,
    justifyContent: "space-between",
    flexDirection: "row"
  },
  textLeft:{
    fontFamily: "bold",
    fontSize: 15
  },
  textRight:{
    color: COLORS.primary,
    fontWeight: "bold"
  },
  cardsContainer: {
    padding: 25,
    marginTop: -28
  },
  productTextSecond:{
    marginTop: -20,
    padding: 25,
    justifyContent: "space-between",
    flexDirection: "row"
  },
});

export default Welcome;
