import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import styles from "./detail.style";
import icons from "../../../constants/icons";
import { useNavigation } from '@react-navigation/native';

export function Detail() {

    const navigation = useNavigation();

    const goBack = () => {
      navigation.navigate('Shop');
    };

  return (
    <ScrollView style={styles.backgroundPage}>
      <View style={styles.appMarginTop}>
        <View style={styles.content}>
          <View style={styles.topIconPosition}>
            <TouchableOpacity onPress={goBack}>
                <Image
                source={require("../../../assets/icons/left-chevron.png")}
                resizeMode="cover"
                style={styles.iconWidth}
                />
            </TouchableOpacity>
            <Image
              source={require("../../../assets/icons/upload.png")}
              resizeMode="cover"
              style={styles.iconWidth}
            />
          </View>
          <View style={styles.imgProduit}>
            <Image
              source={require("../../../assets/images/produits/ananas.png")}
              resizeMode="contain"
              style={styles.imgProduitWidth}
            />
          </View>
        </View>
      </View>
      <View style={styles.titreProduitPosition}>
        <View>
          <Text style={styles.titreProduit}>Natural Yellow Pineapple</Text>
          <Text style={styles.sousTitreProduit}>1kg, Price</Text>
        </View>
        <Image
          source={require("../../../assets/icons/heart.png")}
          resizeMode="cover"
          style={styles.iconWidth}
        />
      </View>
      <View style={styles.positionQteElement}>
        <View style={styles.viewBottomQte}>
          <TouchableOpacity style={styles.touchQteBtn}>
            <Image
              source={icons.add}
              resizeMode="contain"
              style={styles.qteBtn}
            />
          </TouchableOpacity>
          <Text style={{ marginHorizontal: 8 }}>1</Text>
          <TouchableOpacity style={styles.touchQteBtn}>
            <Image
              source={icons.add}
              resizeMode="contain"
              style={styles.qteBtn}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.titrePrix}>$4.99</Text>
      </View>
      <View style={styles.horizontalBar} />
      <View style={styles.descriptionElement}>
        <Text style={styles.titreDescription}>Product Detail</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio porro ut
          nobis perferendis. Sapiente, eos ab illo distinctio nemo veniam beatae
          culpa magni, id facilis nobis asperiores enim. Sint, libero.
        </Text>
      </View>
      <View style={styles.horizontalBar} />
      <View style={styles.descriptionElement}>
        <Text style={styles.titreDescription}>Nutritions</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio porro ut
          nobis perferendis. Sapiente, eos ab illo distinctio nemo veniam beatae
          culpa magni, id facilis nobis asperiores enim. Sint, libero.
        </Text>
      </View>
      <View style={styles.checkoutBtnPosition}>
            <TouchableOpacity style={styles.CheckoutBtn}>
                <Text style={styles.btnText}>Add To Basket</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
  );
}

export default Detail;
