import { HTMLAttributes } from "react";

interface IProbs extends HTMLAttributes<HTMLSpanElement> {
  color: string;
}

const CircleColor = ({ color, ...rest }: IProbs) => {
  return (
    <span
      className="block w-5 h-5 rounded-full mb-1 cursor-pointer"
      style={{ backgroundColor: color }}
      {...rest}
    />
  );
};

export default CircleColor;
