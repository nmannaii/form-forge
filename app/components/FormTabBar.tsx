import {Pressable, ScrollView, StyleSheet, View} from 'react-native';
import {NavigationState, Route, SceneRendererProps, TabBarIndicator} from 'react-native-tab-view';
import {Text} from 'react-native-paper';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {theme} from '../../theme';

interface Props {
    tabBarProps: SceneRendererProps & { navigationState: NavigationState<Route> };
    setIndex: (index: number) => void;
    onAddTab: () => void;
}

export const FormTabBar = ({tabBarProps, setIndex, onAddTab}: Props) => {
    const routesLength = tabBarProps.navigationState.routes.length;
    return (
        <View style={styles.tabBar}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.tabBarContent}>
                    {
                        tabBarProps.navigationState.routes.map((route, i) => {
                            return (
                                <Pressable style={styles.tabItem}
                                           key={i}
                                           onPress={() => setIndex(i)}>
                                    <Text
                                        style={{color: theme.colors.onPrimary}}>{route.title}</Text>
                                </Pressable>
                            )
                        })
                    }
                    <Pressable style={styles.tabItem} android_ripple={{color: theme.colors.primary}}
                               onPress={onAddTab}>
                        <MaterialCommunityIcons name="plus" color={theme.colors.onPrimary} size={20}/>
                    </Pressable>
                </View>
                {routesLength > 0 &&
                    <TabBarIndicator {...tabBarProps} width={70}
                                     getTabWidth={() => 70}/>}
            </ScrollView>

        </View>
    );
};

const styles = StyleSheet.create({
    tabBar: {
        flexDirection: 'row',
        backgroundColor: theme.colors.primary,
        overflow: 'scroll',
    },
    tabBarContent: {
        flexDirection: 'row'
    },
    tabItem: {
        width: 70,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
