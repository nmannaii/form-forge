import {Image, StyleSheet, useWindowDimensions, View} from 'react-native';
import {TabView} from 'react-native-tab-view';
import {useState} from 'react';
import {Button, Text} from 'react-native-paper';
import {FormTabBar} from '../components/FormTabBar';
import {useGetTopics} from '../api/topics';
import {NativeStackScreenProps} from 'react-native-screens/native-stack';
import {RootStackParamList} from '../navigation/MainNavigator';
interface Props extends NativeStackScreenProps<RootStackParamList, 'Form'> {

}
const renderScene = ({route}: any) => {
    return <Topic id={route.key} title={route.title}/>
}
export const Form = ({route}: Props) => {
    const layout = useWindowDimensions();
    const [index, setIndex] = useState(0);
    const [routes, setRoutes] = useState<any>([])
    // const = useGetTopics(route.params.);

    if (routes.length === 0) {
        return (
            <View style={styles.emptyPage}>
                <Image style={{width: 250, height: 250}} source={require('../assets/empty-page.png')}/>
                <Button uppercase={true} mode="contained" onPress={() => setRoutes([...routes, {key: Date.now(), title: 'Title ' + (routes.length + 1)}])}>Add new topic</Button>
            </View>
        )
    }

    return (
        <TabView navigationState={{index, routes}}
                 initialLayout={{width: layout.width}}
                 renderScene={renderScene}
                 renderTabBar={(props) => (
                     <FormTabBar tabBarProps={props}
                                 setIndex={setIndex}
                                 onAddTab={() => setRoutes([...routes, {key: Date.now(), title: 'Title ' + (routes.length + 1)}])}/>
                 )}
                 onIndexChange={setIndex}
        />
    );
};

const Topic = ({id, title}: { id: string, title: string }) => (
    <View style={{flex: 1, backgroundColor: 'tomato'}}>
        <Text>{id} {title}</Text>
    </View>
)

const styles = StyleSheet.create({
    emptyPage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
