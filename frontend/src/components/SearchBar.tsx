import { FC } from 'react';
import { SubmitHandler, useForm } from "react-hook-form";
import { searchAtom } from '../state/atoms';
import { useSetRecoilState } from 'recoil';

const SearchBar: FC = () => {

    const setSearch = useSetRecoilState(searchAtom);

    const { register, handleSubmit } = useForm<{ needle: string }>();
  
    const onSubmit: SubmitHandler<{ needle: string }> = (data) => {
        setSearch(data.needle);
    }

    return <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2 w-full p-1">
        <input className="grow border rounded-lg px-5" placeholder="Quick search..."  {...register("needle")} />
        <button className="py-2.5 px-5 text-sm font-medium text-violet-700 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-200 shrink-0">Search</button>
    </form>
}

export default SearchBar;