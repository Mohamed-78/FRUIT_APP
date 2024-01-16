import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import styles from "./detail.style";
import icons from "../../../constants/icons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export function Detail() {
  const navigation = useNavigation();
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.topIconPosition}>
            <TouchableOpacity onPress={() => {navigation.goBack();}}>
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
          <View style={styles.imgProduct}>
            <Image
              source={require("../../../assets/images/produits/banane.png")}
              resizeMode="contain"
              style={styles.imgProductWidth}
            />
          </View>
        </View>
        <View style={styles.titleProductPosition}>
          <View>
            <Text style={styles.titreProduit}>Natural Organic Banana</Text>
            <Text style={styles.sousTitreProduit}>7pcs, Price</Text>
          </View>
          <TouchableOpacity>
            <Image
              source={require("../../../assets/icons/heart.png")}
              resizeMode="cover"
              style={styles.iconWidth}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.positionQteElement}>
          <View style={styles.viewBottomQte}>
            <TouchableOpacity
              style={styles.touchQteBtn}
              onPress={decreaseQuantity}
            >
              <Image
                source={icons.minus}
                resizeMode="contain"
                style={styles.qteBtn}
              />
            </TouchableOpacity>
            <Text style={{ marginHorizontal: 8 }}>{quantity}</Text>
            <TouchableOpacity
              style={styles.touchQteBtn}
              onPress={increaseQuantity}
            >
              <Image
                source={icons.add}
                resizeMode="contain"
                style={styles.qteBtn}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.titrePrix}>$4.99</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.horizontalBar} />
          <View style={styles.descriptionElement}>
            <Text style={styles.titreDescription}>Product Detail</Text>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              porro ut nobis perferendis. Sapiente, eos ab illo distinctio nemo
              veniam beatae culpa magni, id facilis nobis asperiores enim. Sint,
              libero.
            </Text>
          </View>
          <View style={styles.horizontalBar} />
          <View style={styles.descriptionElement}>
            <Text style={styles.titreDescription}>Nutritions</Text>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              porro ut nobis perferendis. Sapiente, eos ab illo distinctio nemo
              veniam beatae culpa magni, id facilis nobis asperiores enim. Sint,
              libero.
            </Text>
          </View>
        </ScrollView>

        <View style={styles.checkoutBtnPosition}>
          <TouchableOpacity style={styles.CheckoutBtn}>
            <Text style={styles.btnText}>Add To Basket</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

export default Detail;
