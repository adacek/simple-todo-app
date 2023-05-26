import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';
import { TodoApi } from '../services';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

const TodosPage: FC = () => {

    const { data: todos } = useQuery({
        queryKey: ['todos'],
        queryFn: () => TodoApi.getAll()
    });
    
    if (!todos) {
        return <div><p>Loading...</p></div>
    }

    return (
        <>
            <TodoForm />
            <TodoList todos={todos.data} />
        </>
    )
}

export default TodosPage;