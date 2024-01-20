import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

export const styles = StyleSheet.create({
    input: (variant=null) => ({
        borderBottomWidth: 2,
        borderColor: variant === 'secondary' ? COLORS.primary : '#fff',
        color: variant === 'secondary' ? 'white' : '#fff',
        height: 35,
    }),
    error: {
        color: COLORS.error
    }
})

export default styles;