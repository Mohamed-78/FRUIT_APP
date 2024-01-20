import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { images } from "../../../constants";
import InputLine from "../../input/inputLine/InputLine";
import { COLORS } from "../../../constants";

export default function Login() {
  return (
    <>
      <ImageBackground source={images.header_bg} style={styles.backgroundImage}>
        <View style={styles.container}>
          <Text style={styles.signin}>Sign In</Text>
          <View style={styles.inputContent}>
            <Text style={styles.label}>Email</Text>
            <InputLine
              placeholder={"Ex: zadis@mail.com"}
              onChange={(text, index) => {}}
            />
          </View>
          <View style={styles.inputContent}>
            <Text style={styles.label}>Password</Text>
            <InputLine
              placeholder={"Your password"}
              onChange={(text, index) => {}}
              secureTextEntry={true}
            />
          </View>
          <View style={styles.passwordForget}>
            <TouchableOpacity>
              <Text style={styles.forgetPassword}>Password forget?</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Sign In</Text>
          </TouchableOpacity>

          <View style={styles.registerAccount}>
            <Text style={styles.registerAccountText}>
              Or you have an account?
            </Text>
          </View>

          <TouchableOpacity style={styles.buttonOutline}>
            <Text style={styles.textOutline}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: "25%",
    flex: 0.5,
    justifyContent: 'center',
    padding: 20,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    height: "50%",
    justifyContent: "center",
    backgroundColor: COLORS.primary,
  },
  inputContent: {
    marginBottom: "10%",
  },
  label: {
    fontSize: 17,
    color: COLORS.lightWhite,
  },
  signin: {
    marginBottom: "10%",
    fontSize: 30,
    fontWeight: "700",
  },
  loginBtnContent: {
    padding: 20,
  },
  buttonContainer: {
    padding: 20,
  },
  button: {
    backgroundColor: COLORS.lightWhite,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    width: "100%",
    height: 55,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonOutline: {
    borderColor: COLORS.lightWhite,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    width: "100%",
    height: 55,
    borderRadius: 10,
  },
  text: {
    color: COLORS.primary,
    fontWeight: "500",
    fontSize: 19,
  },
  textOutline: {
    color: COLORS.lightWhite,
    fontWeight: "500",
    fontSize: 19,
  },
  passwordForget: {
    marginTop: "-5%",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 20,
  },
  forgetPassword: {
    fontSize: 17,
  },
  registerAccount: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 20,
  },
  registerAccountText: {
    fontSize: 17,
  },
});