import React, { useState } from "react";
import {
  View,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import styles from "./cart.style";
import { images } from "../../../constants";
import icons from "../../../constants/icons";

const DATA = [
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
  {
    id: "9002elky",
    title: "Jhonny Walker",
    sub_title: "325ml, Price",
    image: images.wisky,
    price: "$50.90",
  },
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
];

export function Cart() {
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
        <View style={styles.CartText}>
          <Text style={styles.textFontSize}>My Cart</Text>
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
                      <TouchableOpacity>
                        <Image
                          source={icons.bin}
                          resizeMode="cover"
                          style={{ width: 20, height: 20 }}
                        />
                      </TouchableOpacity>
                    </View>
                    <Text style={styles.subTitle}>{item.sub_title}</Text>
                    <View style={styles.alignContent}>
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
                    </View>
                  </View>
                </View>
                <View style={styles.priceContainer}>
                  <Text style={styles.priceFontWeight}>{item.price}</Text>
                </View>
              </View>
              {index < DATA.length - 1 && <View style={styles.horizontalBar} />}
            </React.Fragment>
          ))}
        </ScrollView>
        <View style={styles.checkoutBtnPosition}>
          <TouchableOpacity style={styles.CheckoutBtn}>
            <Text style={styles.btnText}>Go to Checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

export default Cart;
