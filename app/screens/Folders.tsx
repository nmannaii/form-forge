import {FlatList} from 'react-native';
import {FolderItem} from '../components/FolderItem';
import {AddFolderModal} from '../components/AddFolderModal';
import {useGetFolders} from '../api/folders';
import {useNavigation} from '@react-navigation/native';

export const Folders = () => {
    const {data, refetch, isRefetching} = useGetFolders();
    const navigation = useNavigation<any>();
    console.log(navigation.getState());
    return (
        <>
            <FlatList data={data}
                      refreshing={isRefetching} onRefresh={refetch}
                      renderItem={({item: folder}) => (
                          <FolderItem folder={folder}
                                      onPress={() => navigation.navigate('Forms', {folder})}/>
                      )}
                      keyExtractor={(item) => item.id.toString()}/>
            <AddFolderModal/>
        </>
    );
};