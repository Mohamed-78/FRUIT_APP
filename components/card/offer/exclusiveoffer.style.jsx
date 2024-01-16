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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalSubText:{
    fontSize: 15,
    color: "gray",
    marginBottom: 15,
  },
  closeModalText: {
    fontSize: 16,
    color: "#007BFF",
  },
  imgCart:{
    flexDirection:"row",
    justifyContent: "center",
  },
  checkoutText:{
    marginTop: 15,
    fontSize: 22,
    color: "gray",
  },
});

export default styles;
