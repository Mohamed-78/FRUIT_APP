import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './bestselling.style';
import icons from '../../../constants/icons';

export function BestSelling({ item}){
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
                <TouchableOpacity style={styles.addBtn}>
                    <Image source={icons.add} resizeMode="contain" style={styles.addBtnImage} />
                </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
    )
}

export default BestSelling;