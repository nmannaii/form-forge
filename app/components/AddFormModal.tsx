import {Button, HelperText, Portal, TextInput} from 'react-native-paper';
import {useState} from 'react';
import {object, string} from 'yup';
import {BottomFab} from './BottomFAB';
import {Formik} from 'formik';
import {FormModal} from './FormModal';
import {useSaveForm} from '../api/forms';

export const AddFormModal = ({folderId}: {folderId: string}) => {
    const [isVisible, setVisibility] = useState(false)
    const addFormSchema = object().shape({
        name: string().required('Form name is required'),
        description: string(),
    });
    const saveForm = useSaveForm();
    return (
        <>
            <Portal>
                <FormModal isVisible={isVisible}
                           setVisibility={setVisibility}>
                    <Formik initialValues={{name: 'untitled', description: ''}}
                            validationSchema={addFormSchema}
                            onSubmit={(values) => {
                                saveForm.mutate({...values, folder_id: folderId})
                            }}>
                        {({
                              handleChange,
                              isValid,
                              errors,
                              handleSubmit,
                              values
                          }) => (
                            <>
                                <FormModal.Content>
                                    <TextInput label="Name *"
                                               mode="outlined"
                                               error={!!errors.name}
                                               selectTextOnFocus={true}
                                               onChangeText={handleChange('name')}
                                               value={values.name}/>
                                    {errors.name && <HelperText type="error">{errors.name}</HelperText>}
                                    <TextInput label="Description"
                                               multiline={true}
                                               mode="outlined"
                                               onChangeText={handleChange('description')}
                                               value={values.description}/>
                                </FormModal.Content>

                                <FormModal.Action>
                                    <Button uppercase={true} icon="close"
                                            onPress={() => setVisibility(false)}>Cancel</Button>
                                    <Button uppercase={true} icon="plus" onPress={() => handleSubmit()}
                                            disabled={!isValid}>Create</Button>
                                </FormModal.Action>
                            </>

                        )}
                    </Formik>
                </FormModal>
            </Portal>
            <BottomFab onPress={() => setVisibility(true)}/>
        </>
    );
};
