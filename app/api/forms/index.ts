import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {supabase} from '../../config/supabase';
import {Form} from '../../dtos/forms.dto';
import {AddFormDto} from '../../dtos/add-form.dto';

export const useGetForms = (folderId: string) =>
    useQuery<Form[]>({
        queryKey: ['forms', folderId],
        queryFn: async () => {
            const {data, error} = await supabase
                .from('form')
                .select()
                .eq('folder_id', folderId)
                .order('visited_at', {ascending: false})
                .returns<Form[]>();
            if (error) {
                throw new Error(error.message)
            }
            return data || [];
        }
    })

export const useSaveForm = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (form: AddFormDto) => {
            const {data, error,} = await supabase
                .from('form')
                .upsert({...form})
                .select()
                .single();
            if (error) {
                throw new Error(`Error saving folder: ${error.code}#${error.message}`)
            }
        },
        onSuccess: (_, variables) => queryClient.invalidateQueries({
            queryKey: ['forms', variables.folder_id]
        })
    })
}
