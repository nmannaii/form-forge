import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {apiClient} from '../../config/apiClient';
import {Folder} from '../../dtos/folder.dto';
import {AddFolderDto} from '../../dtos/add-folder.dto';

export const useGetFolders = () =>
    useQuery<Folder[]>({
        queryKey: ['folders'],
        queryFn: () => apiClient.get<Folder[]>('/folders')
            .then(u => u.data)
    });

export const useSaveFolder = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (folder: AddFolderDto) =>
            apiClient.post('/folders', folder)
        ,
        onSuccess: () => queryClient.invalidateQueries({
            queryKey: ['folders']
        })
    })
}

export const useUpdateFolderVisitedAt = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (folderId: string) =>
            apiClient.patch(`/folders/${folderId}/visited-at`)
        ,
        onSuccess: () => queryClient.invalidateQueries({
            queryKey: ['folders']
        })
    })
}
