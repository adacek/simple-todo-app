import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import "../index.css";

const Header: FC = () => {

    return <header className="flex items-center h-10 bg-violet-600 w-full text-white px-5">
        <NavLink to="/" className="grow flex items-center gap-3">
            <h1 className="text-2xl font-bold hidden sm:block">Simple ToDo App</h1>
        </NavLink>
        <nav className="flex items-center justify-end gap-5 text-lg">
            <NavLink to="/todo" className={({isActive}) => isActive ? 'text-white underline' : 'hover:text-white text-white/70'}>
                ToDos
            </NavLink>
        </nav>
    </header>
}

export default Header;