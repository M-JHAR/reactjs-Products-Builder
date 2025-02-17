import { InputHTMLAttributes } from "react";

interface IProbs extends InputHTMLAttributes<HTMLInputElement>
{

}

const Input = ({...rest}: IProbs)=>
{
    return(
        <input className="border-2 border-gray-300" {...rest}/>
    );
}

export default Input;