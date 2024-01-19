import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    padding: "5%",
    flex: 1,
    height: "100%",
    backgroundColor: "#fff",
    paddingTop: "10%",
  },
  explorerText: {
    paddingTop: "10%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  categoriesContainer: {
    marginTop: "10%",
  },
  categoryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textFontSize: {
    fontSize: 17,
    fontWeight: "bold",
  },
  iconWidth:{
    width: 25,
    height: 25
  },
  containerCardProduct: {
    marginTop: "5%",
    width: 170,
    padding: SIZES.xLarge,
    borderWidth: 1,
    borderColor: COLORS.secondary,
    borderRadius: SIZES.medium,
    justifyContent: "space-between",
    alignItems: 'center',
    shadowColor: COLORS.white,
  },
  imageContainer: {
    width: 50,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  productImage: {
    width: "190%", 
  },
  infoContainer: {
    width: "125%",
    marginTop: SIZES.large,
  },
  productName: {
    fontSize: SIZES.medium,
  },
  infoWrapper: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  location: {
    fontSize: SIZES.medium - 2,
    color: "#B3AEC6",
  },
  addBtn: {
    width: 30,
    height: 30,
    backgroundColor: COLORS.primary,
    borderTopLeftRadius: 10,
    borderBottomEndRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  addBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: COLORS.white,
  },
  priceElement:{
    marginTop: 18,
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: -18
  },
  priceTitle:{
    fontWeight: "600",
    color: "#000"
  },
});

export default styles;
