import {Button, HelperText, Modal, Portal, TextInput} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import {useState} from 'react';
import {theme} from '../../theme';
import {useSaveFolder} from '../api/folders';
import {Folder} from '../dtos/folder.dto';
import {BottomFab} from './BottomFAB';

export const AddFolderModal = () => {
    const untitled = 'Untitled'
    const [isVisible, setVisibility] = useState(false);
    const [folderName, setFolderName] = useState(untitled);
    const {mutateAsync} = useSaveFolder();
    const onSubmit = async () => {
        await mutateAsync({
            name: folderName,
        } as Folder);
        setVisibility(false);
        setFolderName(untitled);
    }

    return (
        <>
            <Portal>
                <Modal visible={isVisible}
                       dismissable={false}
                       contentContainerStyle={styles.modal}
                       onDismiss={() => setVisibility(false)}>
                    <View style={styles.modalContent}>
                        <TextInput value={folderName}
                                   selectTextOnFocus={true}
                                   error={!folderName}
                                   onChangeText={name => setFolderName(name)}
                                   label="Name" mode="outlined"/>
                        {!folderName && <HelperText type="error">
                            Required.
                        </HelperText>}
                    </View>
                    <View style={styles.modalAction}>
                        <Button uppercase={true} icon="close" onPress={() => setVisibility(false)}>Cancel</Button>
                        <Button uppercase={true} icon="plus" onPress={onSubmit} disabled={!folderName}>Create</Button>
                    </View>
                </Modal>
            </Portal>
            <BottomFab onPress={() => setVisibility(true)}/>
        </>

    );
};

const styles = StyleSheet.create({
    modal: {
        backgroundColor: theme.colors.surface,
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 10,
        rowGap: 10,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    modalContent: {},
    modalAction: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }
})