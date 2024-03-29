import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants/theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    backgroundPage:{
        backgroundColor: "#fff",
    },
    content:{
        backgroundColor: "#f3f3f3",
        padding: 20,
        paddingTop: "15%",
        height: '45%',
        width: "100%",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    },
    iconWidth:{
        width: 25,
        height: 25
    },
    topIconPosition:{
        flexDirection: "row", 
        justifyContent: "space-between"
    },
    imgProduct:{
        marginTop: -50,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    imgProductWidth:{
        width: 300,
        height: 300
    },
    titleProductPosition:{
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    titreProduit:{
        fontWeight: "bold",
        fontSize: 18
    },
    sousTitreProduit:{
        color: "gray"
    },
    viewBottomQte:{
        flexDirection: "row", 
        alignItems: "center"
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
    positionQteElement:{
        marginTop: -10,
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    titrePrix:{
        fontWeight: "bold",
        fontSize: 18
    },
    horizontalBar: {
        borderBottomColor: "#c6c6c6",
        borderBottomWidth: 0.3,
        marginVertical: 1,
        marginLeft: 15,
        marginRight: 20,   
    },
    descriptionElement:{
        padding: 20,
        flex: 1,
        justifyContent: "flex-start"
    },
    titreDescription:{
        fontSize: 15,
        fontWeight: "bold"
    },
    description:{
        marginTop: 5,
        color: "gray"
    },
    checkoutBtnPosition:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
        marginTop: 10,
        marginBottom: 30,
    },
    btnText:{
        color: "#fff",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 17
    },
    CheckoutBtn:{
        padding: 15.5,
        width: "90%",
        height: 55,
        borderRadius: 10,
        backgroundColor: COLORS.primary
    },
});

export default styles;