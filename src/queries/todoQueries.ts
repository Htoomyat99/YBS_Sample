import { todoService } from "@common/api";
import { useQuery } from "@tanstack/react-query";

// Query keys
export const todoKeys = {
  all: ["todos"] as const,
  lists: () => [...todoKeys.all, "list"] as const,
  list: (filters: string) => [...todoKeys.lists(), { filters }] as const,
  details: () => [...todoKeys.all, "detail"] as const,
  detail: (id: number) => [...todoKeys.details(), id] as const,
};

// Custom hooks
export const useTodos = () => {
  return useQuery({
    queryKey: todoKeys.lists(),
    queryFn: todoService.getTodos,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};
