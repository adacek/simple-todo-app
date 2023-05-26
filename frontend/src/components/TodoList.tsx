import { FC, useEffect } from "react";
import { Todo } from "../models/todos";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { filteredTodosSelector } from "../state/selectors";
import SearchBar from "./SearchBar";
import TodoItem from "./TodoItem";
import { todoListAtom } from "../state/atoms";

interface TodoListProps {
    todos: Todo[]
}
 
const TodoList: FC<TodoListProps> = (props) => {
    const setTodos = useSetRecoilState(todoListAtom);

    useEffect(() => {
        setTodos(props.todos);
    }, [props.todos]);

    const todosFiltered = useRecoilValue(filteredTodosSelector);

    return (
        <>
            <h3 className='text-violet-600 font-bold text-2xl p-1'>Todo list items</h3>
            <SearchBar />
            <div className="w-full flex flex-wrap h-full max-h-full overflow-y-scroll">
                { todosFiltered.length ? todosFiltered.map((todo) => <TodoItem key={todo.id} todo={todo} />) : <p className="text-gray-500 mt-7 px-2">No todos found...</p> } 
            </div>
        </>
    )
}
 
export default TodoList;