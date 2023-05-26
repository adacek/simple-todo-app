import { selector } from "recoil";
import { searchAtom, todoListAtom } from "./atoms";
import { Todo } from "../models/todos";

export const filteredTodosSelector = selector<Todo[]>({
    key: 'filteredTodosSelector',
    get: ({ get }) => {
        const todos = get(todoListAtom);
        const search = get(searchAtom);

        return todos.filter(todo => todo.title.toLowerCase().includes(search.toLowerCase()) || todo.description.toLowerCase().includes(search.toLowerCase()));
    }
})