import Image from "./Image";
import { IProduct } from "../interfaces";
import Button from "./ui/Button";
import { txtSlicer } from "../utils/functions";

interface IProbs {
  product: IProduct;
}

const ProductCard = ({ product }: IProbs) => {
  const { title, imageURL, description, price, category } = product;
  return (
    <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2  flex flex-col">
      <Image
        ImageURL={imageURL}
        alt={category.name}
        className=" rounded-md mb-3"
      />

      <h3>{title}</h3>
      <p>{txtSlicer(description)}</p>

      <div className="flex items-center my-4 space-x-2">
        <span className="w-5 h-5 bg-indigo-600 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-yellow-600 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-red-600 rounded-full cursor-pointer" />
      </div>

      <div className="flex items-center justify-between">
        <span> ${price}</span>
        <Image
          ImageURL={category.imageURL}
          alt={category.name}
          className=" w-10 h-10 rounded-full object-center"
        />
      </div>

      <div className="flex items-center justify-between space-x-2 mt-3">
        <Button className="bg-indigo-700 hover:bg-indigo-800" width="w-fit">
          EDIT
        </Button>
        <Button className="bg-red-700 hover:bg-red-800">DELETE</Button>
      </div>
    </div>
  );
};

export default ProductCard;
