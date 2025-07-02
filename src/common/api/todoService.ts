import { apiClient } from "./client";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

export const todoService = {
  async getTodos(): Promise<Todo[]> {
    // Simulate loading delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const todos = await apiClient.get<Todo[]>("/todos");
    return todos.slice(0, 10); // Limit to 10 items
  },
};
