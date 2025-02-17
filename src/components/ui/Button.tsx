import { ButtonHTMLAttributes, ReactNode } from "react";

interface IProbs extends ButtonHTMLAttributes<HTMLButtonElement> 
{
    children: ReactNode;
    className?: string;
    width?: "w-full" | "w-fit";
}

const Button = ({children, className, width = "w-full", ...rest}: IProbs)=>
{
    return(
        <button className={`${className} ${width} p-2 w-full rounded-md text-white cursor-pointer`} {...rest} >
            {children}
        </button>
    );
}

export default Button;