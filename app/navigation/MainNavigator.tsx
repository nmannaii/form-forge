import {createStackNavigator} from '@react-navigation/stack';
import {AppTabNavigator} from './AppTabNavigator';
import {Forms} from '../screens/Forms';
import {Folder} from '../dtos/folder.dto';

export type RootStackParamList = {
    AppTabNavigator: undefined;
    Forms: { folder: Folder }
}

const Stack = createStackNavigator<RootStackParamList>();

export const MainNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="AppTabNavigator" options={{headerShown: false}} component={AppTabNavigator}/>
            <Stack.Screen name="Forms"
                          options={({route}) => ({
                              presentation: 'modal',
                              headerTitle: route.params.folder?.name
                          })}
                          component={Forms}/>
        </Stack.Navigator>
    );
};