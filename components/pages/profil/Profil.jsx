import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import styles from "./profil.style";
import { images } from "../../../constants";
import icons from "../../../constants/icons";
import { useFonts } from "expo-font";

export function Profil() {
  let [fontsLoaded] = useFonts({
    regular: require('../../../assets/font/Montserrat-Regular.ttf'),
    light: require('../../../assets/font/Montserrat-Light.ttf'),
    bold: require('../../../assets/font/Montserrat-Bold.ttf'),
    medium: require('../../../assets/font/Montserrat-Medium.ttf'),
  });

  if(!fontsLoaded){
    return (
      <Text>Loading...</Text>
    )
  }
  return (
    <ScrollView style={styles.backgroundPage}>
      <View style={styles.appMarginTop}>
        <View style={styles.userProfilInfo}>
          <Image
            source={require("../../../assets/images/profil.png")}
            resizeMode="cover"
            style={styles.imgProfil}
          />
          <View style={{ marginLeft: 16, flex: 1 }}>
            <View style={styles.userInfo}>
              <Text style={styles.textFontSize}>Afsar Hossen</Text>
            </View>
            <Text style={styles.subTitle}>Imushuv97@gmail.com</Text>
          </View>
        </View>
        <View style={styles.traitHorizontal} />
        <View style={{padding: 10}}>
          <View style={styles.ViewFlexDirection}>
            <View style={styles.menuDirection}>
              <Image
                source={require('../../../assets/icons/shopping-bag.png')}
                resizeMode="cover"
                style={styles.iconWidth}
              />
              <View style={{ marginLeft: 16, flex: 1 }}>
                <View style={styles.menuContainer}>
                  <Text style={styles.menuFontSize}>Order</Text>
                  <Image
                    source={require('../../../assets/icons/next.png')}
                    resizeMode="cover"
                    style={styles.iconWidth}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.traitHorizontal} />
          <View style={styles.ViewFlexDirection}>
            <View style={styles.menuDirection}>
              <Image
                source={require('../../../assets/icons/info.png')}
                resizeMode="cover"
                style={styles.iconWidth}
              />
              <View style={{ marginLeft: 16, flex: 1 }}>
                <View style={styles.menuContainer}>
                  <Text style={styles.menuFontSize}>My Details</Text>
                  <Image
                    source={require('../../../assets/icons/next.png')}
                    resizeMode="cover"
                    style={styles.iconWidth}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.horizontalBar} />
          <View style={styles.ViewFlexDirection}>
            <View style={styles.menuDirection}>
              <Image
                source={require('../../../assets/icons/pin.png')}
                resizeMode="cover"
                style={styles.iconWidth}
              />
              <View style={{ marginLeft: 16, flex: 1 }}>
                <View style={styles.menuContainer}>
                  <Text style={styles.menuFontSize}>Delevery Adress</Text>
                  <Image
                    source={require('../../../assets/icons/next.png')}
                    resizeMode="cover"
                    style={styles.iconWidth}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.horizontalBar} />
          <View style={styles.ViewFlexDirection}>
            <View style={styles.menuDirection}>
              <Image
                source={require('../../../assets/icons/credit-card.png')}
                resizeMode="cover"
                style={styles.iconWidth}
              />
              <View style={{ marginLeft: 16, flex: 1 }}>
                <View style={styles.menuContainer}>
                  <Text style={styles.menuFontSize}>Paiement Methods</Text>
                  <Image
                    source={require('../../../assets/icons/next.png')}
                    resizeMode="cover"
                    style={styles.iconWidth}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.traitHorizontal} />
          <View style={styles.ViewFlexDirection}>
            <View style={styles.menuDirection}>
              <Image
                source={require('../../../assets/icons/gift-card.png')}
                resizeMode="cover"
                style={styles.iconWidth}
              />
              <View style={{ marginLeft: 16, flex: 1 }}>
                <View style={styles.menuContainer}>
                  <Text style={styles.menuFontSize}>Promo Card</Text>
                  <Image
                    source={require('../../../assets/icons/next.png')}
                    resizeMode="cover"
                    style={styles.iconWidth}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.traitHorizontal} />
          <View style={styles.ViewFlexDirection}>
            <View style={styles.menuDirection}>
              <Image
                source={require('../../../assets/icons/bell.png')}
                resizeMode="cover"
                style={styles.iconWidth}
              />
              <View style={{ marginLeft: 16, flex: 1 }}>
                <View style={styles.menuContainer}>
                  <Text style={styles.menuFontSize}>Notifications</Text>
                  <Image
                    source={require('../../../assets/icons/next.png')}
                    resizeMode="cover"
                    style={styles.iconWidth}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.traitHorizontal} />
          <View style={styles.ViewFlexDirection}>
            <View style={styles.menuDirection}>
              <Image
                source={require('../../../assets/icons/question.png')}
                resizeMode="cover"
                style={styles.iconWidth}
              />
              <View style={{ marginLeft: 16, flex: 1 }}>
                <View style={styles.menuContainer}>
                  <Text style={styles.menuFontSize}>Help</Text>
                  <Image
                    source={require('../../../assets/icons/next.png')}
                    resizeMode="cover"
                    style={styles.iconWidth}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.traitHorizontal} />
          <View style={styles.ViewFlexDirection}>
            <View style={styles.menuDirection}>
              <Image
                source={require('../../../assets/icons/about.png')}
                resizeMode="cover"
                style={styles.iconWidth}
              />
              <View style={{ marginLeft: 16, flex: 1 }}>
                <View style={styles.menuContainer}>
                  <Text style={styles.menuFontSize}>About</Text>
                  <Image
                    source={require('../../../assets/icons/next.png')}
                    resizeMode="cover"
                    style={styles.iconWidth}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.traitHorizontal} />
          <View style={styles.checkoutBtnPosition}>
              <TouchableOpacity style={styles.CheckoutBtn}>
                  <Text style={styles.btnText}>Log Out</Text>
              </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default Profil;
