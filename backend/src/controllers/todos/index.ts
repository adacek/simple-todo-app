import { todoCreate } from "./create";
import { deleteTodo } from "./delete";
import { getAll } from "./read";

export default {
    create: todoCreate,
    getAll,
    delete: deleteTodo
};