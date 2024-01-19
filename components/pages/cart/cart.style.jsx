import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "#fff",
    paddingTop: "10%",
  },
  CartText: {
    marginTop: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  textFontSize: {
    fontSize: 17,
    fontWeight: "bold",
  },
  subTitle: {
    color: "#B3AEC6",
  },
  categoriesContainer: {
    marginTop: 20,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  categoryRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: SIZES.medium,
    width: "95%",
  },
  traitHorizontal: {
    marginTop: 20,
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
    marginVertical: 10,
  },
  cartDirection: {
    flexDirection: "row",
    alignItems: "center",
  },
  imageWidth: {
    width: 100,
    height: 100,
  },
  quantiteBtn: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  ViewFlexDirection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  viewBottomQte: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  qteBtn: {
    width: "40%",
    height: "40%",
    tintColor: COLORS.white,
  },
  touchQteBtn: {
    width: 30,
    height: 30,
    backgroundColor: COLORS.primary,
    borderTopLeftRadius: 10,
    borderBottomEndRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  alignContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  priceContainer: {
    marginTop: 50,
    marginLeft: "auto",
  },
  priceFontWeight: {
    fontSize: 16,
    fontWeight: "bold",
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  horizontalBar: {
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
    marginVertical: 0,
    marginLeft: 35,
    marginRight: 20,
  },
  CheckoutBtn: {
    padding: 10,
    width: 310,
    height: 45,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
  },
  checkoutBtnPosition: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10%",
    marginBottom: "10%",
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  positionBtnText: {
    justifyContent: "center",
    flexDirection: "row",
  },
});

export default styles;
