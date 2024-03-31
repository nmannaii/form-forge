import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {Form} from '../../dtos/forms.dto';
import {apiClient} from '../../config/apiClient';
import {AddFormDto} from '../../dtos/add-form.dto';

export const useGetForms = (folderId: string) =>
    useQuery<Form[]>({
        queryKey: ['folder', folderId, 'forms'],
        queryFn: async () =>
            apiClient.get<Form[]>(`/folders/${folderId}/forms`)
                .then(u => u.data)

    })

export const useGetForm = (formId: string, includeTopics: boolean) =>
    useQuery<Form>({
        queryKey: ['forms', formId],
        queryFn: () =>
            apiClient.get<Form>(`/forms/${formId}`, {
                params: {
                    includeTopics
                }
            })
                .then(u => u.data)
    });

export const useSaveForm = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (form: AddFormDto) =>
            apiClient.post(`/folders/${form.folderId}/forms`, form),
        onSuccess: (_, {folderId}) => queryClient.invalidateQueries({
            queryKey: ['folder', folderId, 'forms']
        })
    })
}
