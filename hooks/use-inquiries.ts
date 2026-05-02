import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  inquiryApi,
  type CreateInquiryData,
  type UpdateInquiryStatusData,
} from "@/lib/api";

const INQUIRY_QUERY_KEY = ["inquiries"] as const;

/** Fetch all inquiries */
export function useInquiries() {
  return useQuery({
    queryKey: INQUIRY_QUERY_KEY,
    queryFn: async () => {
      const res = await inquiryApi.getAll();
      return res.data!;
    },
  });
}

/** Create a new inquiry */
export function useCreateInquiry() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateInquiryData) => inquiryApi.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: INQUIRY_QUERY_KEY });
    },
  });
}

/** Update an inquiry's status */
export function useUpdateInquiryStatus() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, ...data }: UpdateInquiryStatusData & { id: string }) =>
      inquiryApi.updateStatus(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: INQUIRY_QUERY_KEY });
    },
  });
}
