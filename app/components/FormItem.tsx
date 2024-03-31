import {Divider, List} from 'react-native-paper';
import {format} from 'date-fns';
import {Form} from '../dtos/forms.dto';

interface Props {
    form: Form;
    onPress: () => void;
}
export const FormItem = ({form, onPress}: Props) => {
    return (
        <>
            <List.Item title={form.name}
                       style={{paddingHorizontal: 20}}
                       onPress={onPress}
                       description={format(form.updatedAt, `dd MMM yyyy 'at' HH:mm`)}
                       left={() => <List.Icon icon="form-select"/>}/>
            <Divider leftInset={true} style={{left: 30}} bold={true}/>
        </>
    );
};
