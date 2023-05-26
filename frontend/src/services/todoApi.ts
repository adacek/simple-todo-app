import { ResponseMulti, ResponseSingle } from "../models/response";
import { Todo } from "../models/todos";
import axiosInstance from "./base";

export interface CreateTodoData {
    title: string;
    description: string;
}

export const getAll = async (): Promise<ResponseMulti<Todo>> => {
    const response = await axiosInstance.get("/todo");
    return response.data;
}

export const create = async (data: CreateTodoData): Promise<ResponseSingle<Todo>> => {
    const response = await axiosInstance.post("/todo", data);
    return response.data;
}

export const deleteTodo = async (id: string): Promise<ResponseSingle<Todo>> => {
    const response = await axiosInstance.delete(`/todo/${id}`);
    return response.data;
}