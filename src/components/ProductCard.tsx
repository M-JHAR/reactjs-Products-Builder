import Image from "./Image";
import { IProduct } from "../interfaces";
import Button from "./ui/Button";
import { txtSlicer } from "../utils/functions";
import CircleColor from "./CircleColor";

interface IProbs {
  product: IProduct;
  setProductToEdit: (product: IProduct) => void;
  openEditModal: ()=> void;
}

const ProductCard = ({ product, setProductToEdit, openEditModal}: IProbs) => {
  const { title, imageURL, description, price, category, colors } = product;

  // ************* Renders ****************
  const renderProductColors = colors.map((color) => (
    <CircleColor key={color} color={color} />
  ));
  // ************* Handlers ****************
  const onEdit = () => {
    setProductToEdit(product);
    openEditModal();
  };

  return (
    <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2  flex flex-col">
      <Image
        ImageURL={imageURL}
        alt={category.name}
        className=" rounded-md mb-3"
      />

      <h3>{title}</h3>
      <p>{txtSlicer(description)}</p>

      <div className="flex items-center space-x-1 flex-wrap">
        {renderProductColors}
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
        <Button className="bg-indigo-700 hover:bg-indigo-800" onClick={onEdit}>
          EDIT
        </Button>
        <Button className="bg-red-700 hover:bg-red-800">DELETE</Button>
      </div>
    </div>
  );
};

export default ProductCard;
