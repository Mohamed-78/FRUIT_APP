import React from "react";
import { View, Text, ImageBackground } from "react-native";
import NormalButton from "../../buttons/normalButton/NormalButton";
import styles from "./splashscreen.style";
import { images } from "../../../constants";
import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate("Login");
    };

  return (
    <ImageBackground source={images.splashscreen} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.centerElement}>
          <Text style={styles.welcomeText}>
            Welcome to ShopStore
          </Text>
          <Text style={styles.subTitle}>
            Get the best products in as fast as one hour
          </Text>
        </View>
        <View style={styles.bottomContainer}>
          <NormalButton onPress={handlePress} buttonTitle={"Get Started"} />
        </View>
      </View>
    </ImageBackground>
  );
};

export default SplashScreen;
