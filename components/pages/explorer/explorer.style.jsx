import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants/theme";

const styles = StyleSheet.create({
    container: {
      width: "100%"
    },
    searchContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: SIZES.large,
        height: 50,
      },
      searchWrapper: {
        flex: 1,
        backgroundColor: COLORS.white,
        alignItems: "center",
        borderRadius: 9,
        height: "100%",
        width: "90%",
      },
      searchInput: {
        width: "100%",
        height: "100%",
        paddingHorizontal: SIZES.medium,
      },
    appMarginTop:{
        marginTop: '10%'
      },
    backgroundPage:{
        backgroundColor: "#fff"
    },
    explorerText:{
        marginTop: 25,
        justifyContent: "center",
        alignItems: "center"
    },
    textFontSize:{
        fontSize: 17,
        fontWeight: "bold"
    },
    categoriesContainer: {
      marginTop: 20,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    categoryRow: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: SIZES.medium,
      width: '95%',
    },
});

export default styles;