import {AntDesign} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigation} from 'react-native-paper';
import {CommonActions} from '@react-navigation/native';
import {Text} from 'react-native';
import {Drawer} from 'react-native-drawer-layout';
import {useState} from 'react';
import {Folders} from '../screens/Folders';
import {Documents} from '../screens/Documents';
import {AppHeader} from '../components/AppHeader';

const Tab = createBottomTabNavigator();

export const AppTabNavigator = () => {
    const [open, setOpen] = useState(false);

    return (
        <Drawer
            open={open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            renderDrawerContent={() => {
                return <Text>Drawer content</Text>;
            }}
        >
            <Tab.Navigator
                tabBar={({navigation, state, insets, descriptors}) => (
                    <BottomNavigation.Bar navigationState={state}
                                          safeAreaInsets={insets}
                                          onTabPress={({route, preventDefault}) => {
                                              const event = navigation.emit({
                                                  type: 'tabPress',
                                                  target: route.key,
                                                  canPreventDefault: true
                                              });

                                              if (event.defaultPrevented) {
                                                  preventDefault();
                                              } else {
                                                  navigation.dispatch({
                                                      ...CommonActions.navigate(route.name, route.params),
                                                      target: state.key
                                                  })
                                              }
                                          }}
                                          renderIcon={({route, focused, color}) => {
                                              const {options} = descriptors[route.key];
                                              if (options.tabBarIcon) {
                                                  return options.tabBarIcon({focused, color, size: 24});
                                              }

                                              return null;
                                          }}
                                          getLabelText={({route}) => {
                                              const {options} = descriptors[route.key];
                                              return options.title !== undefined
                                                  ? options.title
                                                  : (route.name ?? '');
                                          }}

                    />
                )}
                screenOptions={{
                    header: ({route, options}) =>
                        <AppHeader route={route} options={options} onMenuClick={() => setOpen(true)}/>,
                }}>
                <Tab.Screen name="Folders" component={Folders} options={{
                    tabBarIcon: ({color}) => <AntDesign name="form" size={24} color={color}/>,
                }}/>
                <Tab.Screen name="Documents" component={Documents} options={{
                    tabBarIcon: ({color}) => <AntDesign name="pdffile1" size={24} color={color}/>
                }}/>
            </Tab.Navigator>
        </Drawer>
    );
};