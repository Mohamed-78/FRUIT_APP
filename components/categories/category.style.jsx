import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
  container: (item) => ({
    width: 175,
    padding: SIZES.xLarge,
    borderWidth: 1,
    borderColor: item.borderColor,
    backgroundColor: item.backgroundColor,
    borderRadius: SIZES.medium,
    justifyContent: "space-between",
    alignItems: 'center',
    shadowColor: COLORS.white,
  }),
  imageContainer: (item) => ({
    width: 70,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  }),
  productImage: {
    width: "190%",
  },
  infoContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "131%",
    marginTop: SIZES.large,
  },
  productName: (item) => ({
    fontSize: SIZES.medium,
    fontWeight: "bold"
  }),
});

export default styles;
