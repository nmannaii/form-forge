import {Portal, TextInput} from 'react-native-paper';
import {FormModal} from './FormModal';
import {useState} from 'react';
import {Formik} from 'formik';
interface Props {
    topicOrder: number;
    formId: string;

}
export const AddTopicModal = ({topicOrder}: { topicOrder: number }) => {
    const [isVisible, setVisibility] = useState(false)
    return (
        <Portal>
            <FormModal isVisible={isVisible}
                       setVisibility={setVisibility}>
                <FormModal.Content>
                    <Formik initialValues={{name: `Topic ${topicOrder}`}}
                            onSubmit={() => {
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
                                      <TextInput label="Name *"/>
                                  </FormModal.Content>
                              </>
                            )
                    </Formik>
                </FormModal.Content>
            </FormModal>
        </Portal>
    );
};
