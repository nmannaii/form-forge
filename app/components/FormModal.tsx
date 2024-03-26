import {Modal} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import {ReactNode} from 'react';
import {theme} from '../../theme';

interface Props {
    children: ReactNode;
    isVisible: boolean;
    setVisibility: (b: boolean) => void;
}

export const FormModal = ({children, setVisibility, isVisible}: Props) => {
    return (
        <Modal visible={isVisible}
               dismissable={false}
               contentContainerStyle={styles.modal}
               onDismiss={() => setVisibility(false)}>
            {children}
        </Modal>
    );
};


const ModalContent = ({children}: { children: ReactNode }) => {
    return (
        <View style={styles.modalContent}>
            {children}
        </View>
    )
}

const ModalAction = ({children}: { children: ReactNode }) => {
    return (
        <View style={styles.modalAction}>
            {children}
        </View>
    )
}

FormModal.Content = ModalContent;
FormModal.Action = ModalAction;

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
