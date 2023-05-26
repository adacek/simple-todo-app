import { FC } from "react";
import "../index.css";

const WelcomePage: FC = () => {
    return (
        <div className="h-full flex items-center justify-center">
            <h1 className="text-violet-600 font-bold text-7xl">Welcome to the Simple ToDo App!</h1>
        </div>
    );
}
 
export default WelcomePage;