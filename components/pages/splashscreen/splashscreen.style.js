import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 16,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    justifyContent: "center",
  },
  centerElement: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeText: {
    color: COLORS.titleColor,
    fontSize: 35,
    fontWeight: "bold",
  },
  subTitle: {
    color: COLORS.titleColor,
    fontSize: 15,
  },
});

export default styles;
