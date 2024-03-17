import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {Folders} from "./app/screens/Folders";
import colors from "./app/config/colors";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Folders/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        paddingVertical: 20,
        backgroundColor: colors.white,
    },
});
