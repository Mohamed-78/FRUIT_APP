import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './exclusiveoffer.style';
import icons from '../../../constants/icons';
import { useNavigation } from '@react-navigation/native';

export function ExclusiveOffer({ item }){
  
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Detail');
  };

  return (
    <TouchableOpacity style={styles.container(item)}>
      <TouchableOpacity style={styles.imageContainer(item)}>
        <Image source={item.image} resizeMode="contain" style={styles.productImage}/> 
      </TouchableOpacity>
      <View style={styles.infoContainer}>
        <Text style={styles.productName(item)} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.location}>{item.sub_title}</Text>
        <View style={styles.priceElement}>
          <Text style={styles.priceTitle}>$4.99</Text>
          <TouchableOpacity style={styles.addBtn} onPress={handlePress}>
            <Image source={icons.add} resizeMode="contain" style={styles.addBtnImage} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ExclusiveOffer;