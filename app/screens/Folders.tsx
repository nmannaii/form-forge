import {FlatList} from 'react-native';
import {FolderItem} from '../components/FolderItem';
import {useGetFolders, useUpdateFolderVisitedAt} from '../api/folders';
import {useNavigation} from '@react-navigation/native';
import {AddFolderModal} from '../components/AddFolderModal';

export const Folders = () => {
    const {data, refetch, isRefetching, error} = useGetFolders();
    const {mutate} = useUpdateFolderVisitedAt();
    const navigation = useNavigation<any>();
    return (
        <>
            <FlatList data={data}
                      refreshing={isRefetching} onRefresh={refetch}
                      renderItem={({item: folder}) => (
                          <FolderItem folder={folder}
                                      onPress={() => {
                                          mutate(folder.id);
                                          navigation.navigate('Forms', {folder});
                                      }}/>
                      )}
                      keyExtractor={(item) => item.id.toString()}/>
            <AddFolderModal/>
        </>
    );
};
