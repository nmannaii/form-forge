import {createStackNavigator} from '@react-navigation/stack';
import {AppTabNavigator} from './AppTabNavigator';
import {Forms} from '../screens/Forms';
import {Folder} from '../dtos/folder.dto';
import {Form} from '../screens/Form';
import {useGetForm} from '../api/forms';
import {Text} from 'react-native-paper';

export type RootStackParamList = {
    AppTabNavigator: undefined;
    Forms: { folder: Folder };
    Form: { form_id: string };
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
            <Stack.Screen name="Form"
                          options={({route}) => ({
                              presentation: 'modal',
                              headerTitle: ({}) => {
                                  const {data} = useGetForm(route.params.form_id);
                                  return <Text variant="headlineSmall">{data?.name}</Text>
                              }
                          })}
                          component={Form}/>
        </Stack.Navigator>
    );
};
