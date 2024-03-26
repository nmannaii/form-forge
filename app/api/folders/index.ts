import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {Folder} from '../../dtos/folder.dto';
import {supabase} from '../../config/supabase';
import {AddFolderDto} from '../../dtos/add-folder.dto';

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
            return data || [];
        }
    });

export const useSaveFolder = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (folder: AddFolderDto) => {
            const {data, error,} = await supabase
                .from('folder')
                .upsert(folder)
                .select()
                .single<Folder>();
            if (error) {
                throw new Error(`Error saving folder: ${error.code}#${error.message}`)
            }
        },
        onSuccess: () => queryClient.invalidateQueries({
            queryKey: ['folders']
        })
    })
}

export const useUpdateFolderVisitedAt = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (folderId: string) => {
            const {error} = await supabase
                .from('folder')
                .update({
                    visited_at: 'now()'
                })
                .eq('id', folderId);
            if (error) {
                throw new Error(error.message);
            }
        },
        onSuccess: () => queryClient.invalidateQueries({
            queryKey: ['folders']
        })
    })
}
