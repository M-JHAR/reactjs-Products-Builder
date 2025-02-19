import { ChangeEvent, FormEvent, useState } from "react";
import { formInputsList, productList } from "./data";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import { IProduct } from "./interfaces";
import { productValidation } from "./validation";
import ErrorMessages from "./components/ErrorMessages";

// ** SM -> MD -> LG -> XL -> 2xl
const App = () => {
  const defaultProductObj: IProduct = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    category: { name: "", imageURL: "" },
    colors: [],
  };

  // **************************** States ****************************

  const [product, setProduct] = useState<IProduct>(defaultProductObj);
  const [errors, setErrors] = useState({title: "", description: "", imageURL: "", price: ""});
  const [isOpen, setIsOpen] = useState(false);

  // **************************** Handlers ****************************

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });

    setErrors(
      {
        ...errors,
        [name]: "",
      }
    )
  };

  const onCancel = () => {
    setProduct(defaultProductObj);
    closeModal();
  };
  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { title, price, imageURL, description } = product;

    const errors = productValidation({ title, price, imageURL, description });

    const hasErrorMsg =
      Object.values(errors).some((value) => value !== "") && Object.values(errors).every((value) => value !== "");
      

    if(hasErrorMsg)
    {
      setErrors(errors);
      return;
    }

    console.log("Send this product to our server.");

  };

  // **************************** Renders ****************************

  const renderProductList = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
  const renderFormInputList = formInputsList.map((input) => (
    <div className="flex flex-col" key={input.id}>
      <label
        htmlFor={input.id}
        className="mb-[2px] text-md font-medium text-gray-700"
      >
        {input.label}
      </label>
      <Input
        type={input.type}
        id={input.id}
        name={input.name}
        value={product[input.name]}
        onChange={onChangeHandler}
      />
      <ErrorMessages msg={errors[input.name]}/>
    </div>
  ));

  return (
    <main className="container mx-auto">
      <Button className="bg-indigo-700 hover:bg-indigo-800" onClick={openModal}>
        Add
      </Button>

      <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 rounded-md ">
        {renderProductList}
      </div>

      <Modal isOpen={isOpen} closeModal={closeModal} title={"ADD NEW PRODUCT"}>
        <form className="space-y-3" onSubmit={submitHandler}>
          {renderFormInputList}
          <div className="flex items-center space-x-3">
            <Button className="bg-indigo-700 hover:bg-indigo-800">
              Submit
            </Button>
            <Button
              className="bg-gray-400 hover:bg-gray-500"
              onClick={onCancel}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
    </main>
  );
};

export default App;
