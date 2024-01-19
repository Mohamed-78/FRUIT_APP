import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants/theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        backgroundColor: "#fff",
        paddingTop: "10%",
      },
    appMarginTop:{
        marginTop: '15%'
      },
    backgroundPage:{
        backgroundColor: "#fff"
    },
    imgProfil:{
        width: 80,
        height: 80
    },
    userInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textFontSize:{
        fontSize: 17,
        fontWeight: "bold",
    },
    menuFontSize:{
        fontSize: 16,
        fontFamily: "medium"
    },
    userProfilInfo:{
        padding: 22,
        flexDirection: "row", 
        alignItems: "center"
    },
    subTitle:{
        color: "#B3AEC6",
    },
    traitHorizontal:{
        marginTop: 5,
        borderBottomColor: "#c6c6c6",
        borderBottomWidth: 0.2,
        //marginVertical: 10,
    },
    menuPosition:{
        padding: 22,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    iconWidth:{
        width: 25,
        height: 25
    },
    ViewFlexDirection:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 16,
    },
    menuDirection:{
        flexDirection: "row", 
        alignItems: "center"
    },
    menuContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    horizontalBar: {
        borderBottomColor: "#c6c6c6",
        borderBottomWidth: 0.3,
        marginVertical: 0,
        marginLeft: 15,
        marginRight: 20,   
    },
    CheckoutBtn:{
        padding: 15.5,
        width: 340,
        height: 55,
        borderRadius: 10,
        backgroundColor: "#f3f3f3",
    },
    checkoutBtnPosition:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
        marginTop: 40,
        marginBottom: 30,
    },
    btnText:{
        color: COLORS.primary,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 17
    },
});

export default styles;