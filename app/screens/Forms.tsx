import {AddFormModal} from '../components/AddFormModal';
import {Text} from 'react-native-paper';
import {NativeStackScreenProps} from 'react-native-screens/native-stack';
import {RootStackParamList} from '../navigation/MainNavigator';

interface Props extends NativeStackScreenProps<RootStackParamList, 'Forms'> {

}

export const Forms = ({route}: Props) => {
    console.log(route.params.folder)
    return (
        <>
            <Text>{JSON.stringify(route.params)}</Text>
            <AddFormModal/>
        </>
    );
};