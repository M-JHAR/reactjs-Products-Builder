interface IProbs
{
    msg: string;
}

const ErrorMessages = ({msg}: IProbs)=>
{
    return(
        msg ? <span className="block text-red-700 font-semibold text-sm">{msg}</span> : null
    );
}

export default ErrorMessages;