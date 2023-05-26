import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { TodoApi } from '../services';
import { CreateTodoData } from '../services/todoApi';
import "../index.css";

const TodoForm: FC = () => {

    const queryClient = useQueryClient();
    
    const { mutate: create } = useMutation(TodoApi.create, { 
        onSuccess: () => {
            queryClient.invalidateQueries(['todos']);
        }
    });

    const { register, handleSubmit, reset } = useForm<CreateTodoData>({});

    const onSubmit: SubmitHandler<CreateTodoData> = (data) => {
        create(data);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex justify-center p-1 pt-5 items-stretch">
            <div className="flex items-center p-0 mr-8">
                <label htmlFor="title" className='text-violet-600 font-semibold'>Title:</label>
                <input id="title" className='ml-2 px-2 border rounded-lg py-1' placeholder='title...' {...register("title")} />
            </div>

            <div className="flex items-center grow p-0 ml-8">
                <label htmlFor="description" className='text-violet-600 font-semibold'>Description:</label>
                <input id="description" className='ml-2 px-2 border rounded-lg w-10/12 py-1' placeholder='description...' {...register("description")} />
            </div>

            <button className="shrink-0 border rounded-lg px-2 py-1 text-violet-600 hover:text-white hover:bg-violet-600">Add new</button>
        </form>
    )
}

export default TodoForm;
