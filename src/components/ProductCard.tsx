import Image from "./Image";
import { IProduct } from "../interfaces";
import Button from "./ui/Button";
import { txtSlicer, numberWithCommas } from "../utils/functions";
import CircleColor from "./CircleColor";

interface IProbs {
  product: IProduct;
  setProductToEdit: (product: IProduct) => void;
  openEditModal: ()=> void;
  openDeleteModal: ()=> void;
  idx: number;
  setProductToEditIdx: (value: number) => void;
}

const ProductCard = ({ product, setProductToEdit, openEditModal, openDeleteModal, idx, setProductToEditIdx}: IProbs) => {
  const { title, imageURL, description, price, category, colors } = product;

  // ************* Renders ****************
  const renderProductColors = colors.map((color) => (
    <CircleColor key={color} color={color} />
  ));
  // ************* Handlers ****************
  const onEdit = () => {
    setProductToEdit(product);
    openEditModal();
    setProductToEditIdx(idx);
  };
  
  const onDelete = ()=>
  {
    setProductToEdit(product);
    openDeleteModal();
  };

  return (
    <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 bg-gray-200 flex flex-col">
      <Image
        ImageURL={imageURL}
        alt={category.name}
        className=" rounded-md mb-3"
      />

      <h3>{title}</h3>
      <p>{txtSlicer(description)}</p>

      <div className="flex items-center space-x-1 mt-2 flex-wrap">
        {renderProductColors}
      </div>

      <div className="flex items-center justify-between">
      <span> ${numberWithCommas(price)}</span>
        <div className="flex items-center space-x-2">
          <p className="text-md">{category.name}</p>
          <Image
          ImageURL={category.imageURL}
          alt={category.name}
          className=" w-10 h-10 rounded-full object-center"
          />
        </div>
      </div>

      <div className="flex items-center justify-between space-x-2 mt-3">
        <Button className="bg-indigo-700 hover:bg-indigo-800" onClick={onEdit}>
          EDIT
        </Button>
        <Button className="bg-red-700 hover:bg-red-800" onClick={onDelete}>DELETE</Button>
      </div>
    </div>
  );
};

export default ProductCard;
