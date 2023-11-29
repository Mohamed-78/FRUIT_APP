import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants/theme";

const styles = StyleSheet.create({
    container: {
        width: "100%"
    },
    searchContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginTop: SIZES.large,
        height: 50,
    },
    searchWrapper: {
        flex: 1,
        backgroundColor: COLORS.white,
        marginRight: SIZES.small,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: SIZES.medium,
        height: "100%",
    },
    searchInput: {
        width: "100%",
        height: "100%",
        paddingHorizontal: SIZES.medium,
    },
});

export default styles;