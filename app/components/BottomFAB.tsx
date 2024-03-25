import {FAB} from 'react-native-paper';
import {StyleSheet} from 'react-native';

interface Props {
    onPress?: () => void;
}

export const BottomFab = ({onPress}: Props) => {
    return (
        <FAB icon="plus" onPress={onPress} style={styles.fab} mode="flat"/>
    );
};

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        bottom: 16,
        right: 16,
    },
});