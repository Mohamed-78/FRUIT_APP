import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './category.style';

export function Category({ item}){
    return (
        <TouchableOpacity style={styles.container(item)}>
          <TouchableOpacity style={styles.imageContainer(item)}>
            <Image source={item.image} resizeMode="contain" style={styles.productImage}/> 
          </TouchableOpacity>
          <View style={styles.infoContainer}>
            <Text style={styles.productName(item)} numberOfLines={1}>
              {item.title}
            </Text>
          </View>
        </TouchableOpacity>
    )
}

export default Category;