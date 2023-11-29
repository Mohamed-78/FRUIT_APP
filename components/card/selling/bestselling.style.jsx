import { StyleSheet } from "react-native";

import { COLORS, SIZES, SHADOWS } from "../../../constants";

const styles = StyleSheet.create({
  container: (item) => ({
    width: 145,
    padding: SIZES.xLarge,
    borderWidth: 1,
    borderColor: COLORS.secondary,
    borderRadius: SIZES.medium,
    justifyContent: "space-between",
    alignItems: 'center',
    shadowColor: COLORS.white,
  }),
  imageContainer: (item) => ({
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  }),
  productImage: {
    width: "190%",
    //width: "100%",
    //height: "100%", 
  },
  infoContainer: {
    width: "125%",
    marginTop: SIZES.large,
  },
  productName: (item) => ({
    fontSize: SIZES.medium,
  }),
  infoWrapper: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  publisher: (selectedJob) => ({
    fontSize: SIZES.medium - 2,
  }),
  location: {
    fontSize: SIZES.medium - 2,
    color: "#B3AEC6",
  },
  addBtn: {
    width: 30,
    height: 30,
    backgroundColor: COLORS.primary,
    borderRadius: 15,
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
  }
});

export default styles;
