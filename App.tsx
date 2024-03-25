import 'react-native-gesture-handler';
import {SafeAreaView, StyleSheet} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {DefaultTheme, NavigationContainer} from "@react-navigation/native";
import {theme} from './theme';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {MainNavigator} from './app/navigation/MainNavigator';

export default function App() {
    const myTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            primary: theme.colors.primary,
            background: theme.colors.onPrimary,
        }
    };
    const queryClient = new QueryClient();

    return (
        <PaperProvider theme={theme}>
            <SafeAreaView style={styles.container}>
                <QueryClientProvider client={queryClient}>
                    <NavigationContainer theme={myTheme}>
                        <MainNavigator/>
                    </NavigationContainer>
                </QueryClientProvider>
            </SafeAreaView>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
