import {StyleSheet} from 'react-native';
import {Divider, List} from 'react-native-paper';
import {Folder} from '../dtos/folder.dto';
import {format} from 'date-fns';

interface Props {
    folder: Folder;
    onPress?: () => void;
}

export const FolderItem = ({folder, onPress}: Props) => {
    return (
        <>
            <List.Item title={folder.name}
                       style={{paddingHorizontal: 20}}
                       onPress={onPress}
                       description={format(folder.visited_at, `dd MMM yyyy 'at' HH:mm`)}
                       left={() => <List.Icon icon="folder"/>}/>
            <Divider leftInset={true} style={{left: 30}} bold={true}/>
        </>

    );
};

const styles = StyleSheet.create({});