import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
    container:{
        backgroundColor: COLORS.primary,
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        width: "100%",
        height: "27%",
        borderRadius: 10
    },
    text:{
        color: COLORS.lightWhite,
        fontWeight: "500",
        fontSize: 19
    }
})
export default styles;