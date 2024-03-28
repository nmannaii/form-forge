import {Button, HelperText, Portal, TextInput} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import {useState} from 'react';
import {theme} from '../../theme';
import {useSaveFolder} from '../api/folders';
import {BottomFab} from './BottomFAB';
import {AddFolderDto} from '../dtos/add-folder.dto';
import {FormModal} from './FormModal';

export const AddFolderModal = () => {
    const untitled = 'Untitled'
    const [isVisible, setVisibility] = useState(false);
    const [folderName, setFolderName] = useState(untitled);
    const {mutateAsync, isPending} = useSaveFolder();
    const onSubmit = async () => {
        await mutateAsync({
            name: folderName,
        } as AddFolderDto);
        setVisibility(false);
        setFolderName(untitled);
    }

    return (
        <>
            <Portal>
                <FormModal isVisible={isVisible}
                           setVisibility={setVisibility}>
                    <FormModal.Content>
                        <TextInput value={folderName}
                                   selectTextOnFocus={true}
                                   error={!folderName}
                                   onChangeText={name => setFolderName(name)}
                                   label="Name" mode="outlined"/>
                        {!folderName && <HelperText type="error">
                            Required.
                        </HelperText>}
                    </FormModal.Content>
                    <FormModal.Action>
                        <Button uppercase={true} icon="close" onPress={() => setVisibility(false)}>Cancel</Button>
                        <Button uppercase={true} icon="plus" onPress={onSubmit} loading={isPending}
                                disabled={!folderName}>Create</Button>
                    </FormModal.Action>
                </FormModal>
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
