import {AddFormModal} from '../components/AddFormModal';
import {NativeStackScreenProps} from 'react-native-screens/native-stack';
import {RootStackParamList} from '../navigation/MainNavigator';
import {useGetForms} from '../api/forms';
import {FlatList} from 'react-native';
import {FormItem} from '../components/FormItem';

interface Props extends NativeStackScreenProps<RootStackParamList, 'Forms'> {

}

export const Forms = ({route}: Props) => {
    const folder = route.params.folder;
    const {data, refetch, isRefetching} = useGetForms(folder.id);
    console.log(data);
    return (
        <>
            <FlatList data={data}
                      refreshing={isRefetching} onRefresh={refetch}
                      renderItem={({item: form}) => (
                          <FormItem form={form}
                                    onPress={() => {}}/>
                      )}
                      keyExtractor={(item) => item.id.toString()}/>
            <AddFormModal folderId={folder.id}/>
        </>
    );
};
