import { FC } from "react";
import { Todo } from "../models/todos";
import { TodoApi } from "../services";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type TodoItemProps = {
    todo: Todo;
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {

    const queryClient = useQueryClient();

    const { mutate: deleteTodo } = useMutation(TodoApi.deleteTodo, { 
        onSuccess: () => {
            queryClient.invalidateQueries(['todos']);
        }
    });

    return (
        <div className="block w-1/3 p-1 h-full max-h-full">
            <div className="text-center grid grid-rows-todo h-full h-max-full p-4 bg-white max-w-full w-full border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                <h5 className="font-bold text-violet-700 truncate max-w-full text-xl ">{ todo.title }</h5>
                <p className="h-full max-h-full my-2 border border-x-0 border-gray-300 font-normal text-gray-700 italic py-2 overflow-y-scroll break-words">{ todo.description }</p>
                <button className="self-center bg-transparent text-red-600 py-1 px-4 rounded-lg border border-red-600 hover:bg-red-600 hover:text-white" 
                    onClick={() => deleteTodo(todo.id)} id="del" type="button">Delete</button>
            </div>
        </div>
    );
}



export default TodoItem;