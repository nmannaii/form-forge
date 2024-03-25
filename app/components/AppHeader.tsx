import {StatusBar, StyleSheet} from "react-native";
import {Appbar} from "react-native-paper";
import {getHeaderTitle} from '@react-navigation/elements';
import {theme} from '../../theme';

interface Props {
    onMenuClick: () => void;
    route: any;
    options: any;
}
export const AppHeader = ({onMenuClick, route, options}: Props) => {
    const title = getHeaderTitle(options, route.name)
    return (
        // <View style={[styles.container, ]}>
        //     <IconButton icon="menu" size={24} onPress={onMenuClick}/>
        //     <Text variant="titleLarge">{title}</Text>
        // </View>
        <Appbar.Header statusBarHeight={StatusBar.currentHeight} elevated={true}>
            <Appbar.Action icon="menu" onPress={onMenuClick}/>
            <Appbar.Content title={title}/>
            <Appbar.Action icon="dots-vertical" onPress={() => {}}/>
        </Appbar.Header>
    );
};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 80,
        columnGap: 10,
        elevation: 1,
        backgroundColor: '#FFF'
    }
})