import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {Folder} from '../../dtos/folder.dto';
import {supabase} from '../../config/supabase';

export const useGetFolders = () =>
    useQuery<Folder[]>({
        queryKey: ['folders'],
        queryFn: async () => {
            const {data, error} = await supabase
                .from('folder')
                .select()
                .order('visited_at', {ascending: false})
                .returns<Folder[]>();
            if (error) {
                throw new Error(`Error loading folders: ${error.code}#${error.message}`)
            }
            return data ?? [];
        }
    });

export const useSaveFolder = () => {
    const queryClient = useQueryClient();

    return useMutation<Folder, Error, Folder>({
        mutationFn: async (folder: Folder): Promise<Folder> => {
            const {data, error, } = await supabase
                .from('folder')
                .upsert(folder)
                .select()
                .single<Folder>();
            if (error) {
                throw new Error(`Error saving folder: ${error.code}#${error.message}`)
            }

            return data;
        },
        onSuccess: () => queryClient.invalidateQueries({
            queryKey: ['folders']
        })
    })
}
