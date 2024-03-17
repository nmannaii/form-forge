import {StyleSheet, View} from "react-native";
import colors from "../config/colors";
import {MaterialCommunityIcons} from "@expo/vector-icons";

export const ImageIconPlaceholder = () => {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name="folder" size={50} color={colors.primary}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.accent
    }
})