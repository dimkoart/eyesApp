import { QueryClient } from "@tanstack/react-query";

export type ErrorResponseDto = {
  error: ResponseError;
  status: number;
};

export type ResponseError = {
  message: string;
  code?: string;
  details?: unknown;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      retry: 1,
      gcTime: 24 * 60 * 60 * 1000,
      staleTime: 5000,
    },
    mutations: {
      retry: 1,
      onError: (error) => {
        throw error as unknown as ErrorResponseDto;
      },
    },
  },
});

export default queryClient;
