import { atom } from "recoil";
import { Todo } from "../models/todos";

export const todoListAtom = atom<Todo[]>({
    key: 'todoListAtom',
    default: [],
});

export const searchAtom = atom<string>({
    key: 'searchAtom',
    default: ''
});