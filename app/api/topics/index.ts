import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {supabase} from '../../config/supabase';
import {AddTopicDto} from '../../dtos/add-topic.dto';

export const useGetTopics = (formId: string) =>
    useQuery({
        queryKey: ['topics', formId],
        queryFn: async () => {
            const {data, error} = await supabase
                .from('topic')
                .select()
                .eq('form_id', formId);
            if (error) {
                throw new Error(error.message);
            }
            return data;
        }
    });

export const useSaveTopic = () => {
    const queryClient = useQueryClient();
    useMutation({
        mutationFn: async (topic: AddTopicDto) => {
            const {error} = await supabase
                .from('topic')
                .upsert({
                    ...topic
                });
            if (error) {
                throw new Error(error.message);
            }
        },
        onSuccess: (_, {form_id}) => queryClient.invalidateQueries({
            queryKey: ['topics', form_id]
        })
    });
}

