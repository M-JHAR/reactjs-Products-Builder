import { ChangeEvent, FormEvent, useState } from "react";
import { categories, colors, formInputsList, productList } from "./data";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import { ICategory, IProduct } from "./interfaces";
import { productValidation } from "./validation";
import ErrorMessages from "./components/ErrorMessages";
import CircleColor from "./components/CircleColor";
import { v4 as uuid } from "uuid";
import Select from "./components/ui/Select";
import { TProductNames } from "./types";
import toast, { Toaster } from 'react-hot-toast';


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

  const defaultErrorsObj = 
  {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: ""
  }

  // **************************** States ****************************
  
  const [products, setProducts] = useState<IProduct[]>(productList);
  const [product, setProduct] = useState<IProduct>(defaultProductObj);
  const [productToEdit, setProductToEdit] = useState<IProduct>(defaultProductObj);
  const [productToEditIdx, setProductToEditIdx] = useState<number>(0);
  const [tempColors, setTempColors] = useState<string[]>([]);
  const [errors, setErrors] = useState(defaultErrorsObj);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<ICategory>(categories[0]);


  // **************************** Handlers ****************************

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const openEditModal = () => setIsOpenEditModal(true);
  const closeEditModal = () => setIsOpenEditModal(false);
  const openDeleteModal = () => setIsOpenDeleteModal(true);
  const closeDeleteModal = () => setIsOpenDeleteModal(false);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };
  const onEditChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setProductToEdit({
      ...productToEdit,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const showToaster = (msg: string) => {
      toast(`${msg}`,{
      icon: "✅",
      style: {backgroundColor: "black", color: "white"},
      duration: 2000,
      position: 'bottom-right',
    });
  }
  const onCancel = () => {
    setProduct(defaultProductObj);
    setTempColors([]);
    setErrors(defaultErrorsObj);
    closeModal();
  };

  const onEditCancel = () => {
    setProductToEdit(defaultProductObj);
    setErrors(defaultErrorsObj);
    setTempColors([]);
    closeEditModal();
  };

  const onDeleteCancel = () => {
    closeDeleteModal();
  }
  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { title, price, imageURL, description } = product;

    

    const errors = productValidation({ title, price, imageURL, description, colors: tempColors});

    const hasErrorMsg =
      Object.values(errors).some((value) => value !== "");

    console.log(hasErrorMsg);
    if (hasErrorMsg) {
      setErrors(errors);
      return;
    }

    // Send this product to our server.
    setProducts((prev) => [{...product, id: uuid(), colors: tempColors, category: selectedCategory}, ...prev] );
    setProduct(defaultProductObj);
    setTempColors([]);
    closeModal();

    showToaster("Product has been successfully added");

  };

  const submitEditHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { title, price, imageURL, description } = productToEdit;

   

    const errors = productValidation({ title, price, imageURL, description});

    const hasErrorMsg =
      Object.values(errors).some((value) => value !== "");

    console.log(hasErrorMsg);
    if (hasErrorMsg) {
      setErrors(errors);
      return;
    }
    const updatedProducts = [...products];
    updatedProducts[productToEditIdx] = {...productToEdit, colors: tempColors.concat(productToEdit.colors)};
    setProducts(updatedProducts);

    setProductToEdit(defaultProductObj);
    setTempColors([]);
    closeEditModal();

    showToaster("Product has been successfully edited.");

  };

  const submitDeleteHandler = (event: FormEvent<HTMLFormElement>) =>{
      event.preventDefault();
  };

  const deleteProductHandler = () => 
  {
    const filtered = products.filter((product) => product.id !== productToEdit.id);
    setProducts(filtered);
    closeDeleteModal();

   showToaster("Product has been successfully deleted.");
  }
    

  // **************************** Renders ****************************

  const renderProductList = products.map((product, idx) => (
    <ProductCard key={product.id} product={product} setProductToEdit={setProductToEdit} openEditModal={openEditModal} openDeleteModal={openDeleteModal} idx={idx} setProductToEditIdx={setProductToEditIdx} />
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
      <ErrorMessages msg={errors[input.name]} />
    </div>
  ));

  const renderProductColors = colors.map((color) => (
    <CircleColor
      key={color} color={color}
      onClick={() => {
        setErrors({...errors, ["colors"]: ""});

        if(tempColors.includes(color))
        {
          setTempColors((prev) => prev.filter((item) => item !== color));
          return;
        }
        if(productToEdit.colors.includes(color))
        {
          setTempColors((prev) => prev.filter((item) => item !== color));
          setProductToEdit((prev) => ({...prev, colors: (prev.colors.filter((item) => item !== color))}));
          return;
        }
        setTempColors((prev) => [...prev, color]);
      }}
    />
  ));

  const renderProductToEdit = (id: string, name: TProductNames , label: string) =>
  {
    return(
      <div className="flex flex-col">
      <label htmlFor={id}
        className="mb-[2px] text-md font-medium text-gray-700"
      >
        {label}
      </label>
      <Input
        type="text"
        id={id}
        name={name}
        value={productToEdit[name]}
        onChange={onEditChangeHandler}
      />
      <ErrorMessages msg={errors[name]} />
    </div>
    );
  }

  return (
    <main className="container mx-auto">
      <div className="flex justify-center mt-4">
        <Button className="bg-amber-700 hover:bg-amber-900" width="w-fit" onClick={openModal}>
          Build a Product
        </Button>
      </div>


      <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 rounded-md ">
        {renderProductList}
      </div>

      {/* ADD PRODUCT MODAL */}
      <Modal isOpen={isOpen} closeModal={closeModal} title={"ADD NEW PRODUCT"}>
        <form className="space-y-3" onSubmit={submitHandler}>
          {renderFormInputList}
          <Select selected={selectedCategory} setSelected={setSelectedCategory} />
          <div className="flex items-center space-x-1 flex-wrap">
            {renderProductColors}
          </div>
          <div className="flex items-center space-x-1 flex-wrap">
            {tempColors.map((color) => (
              <span
                key={color}
                className="mr-1 mb-1 p-1 text-xs rounded-md text-white"
                style={{ backgroundColor: color }}
              >
                {color}
              </span>
            ))}
            <ErrorMessages msg={errors.colors} />
          </div>
          <div className="flex items-center space-x-3">
            <Button type="submit" className="bg-indigo-700 hover:bg-indigo-800">
              Submit
            </Button>
            <Button type="reset"
              className="bg-gray-400 hover:bg-gray-500"
              onClick={onCancel}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Modal>

      {/* EDIT PRODUCT MODAL */}
      <Modal isOpen={isOpenEditModal} closeModal={closeEditModal} title={"EDIT THIS PRODUCT"}>
        <form className="space-y-3" onSubmit={submitEditHandler}>
            
          {renderProductToEdit('title', 'title', 'Product Title')}
          {renderProductToEdit('description', 'description', 'Product Description')}
          {renderProductToEdit('imageURL', 'imageURL', 'Product Image URL')}
          {renderProductToEdit('price', 'price', 'Product Price')}

          <Select selected={productToEdit.category} setSelected={(value) => (setProductToEdit({...productToEdit, category: value}))} />

          <div className="flex items-center space-x-1 flex-wrap">
            {renderProductColors}
          </div>
          <div className="flex items-center space-x-1 flex-wrap">
            {tempColors.concat(productToEdit.colors).map((color) => (
              <span
                key={color}
                className="mr-1 mb-1 p-1 text-xs rounded-md text-white"
                style={{ backgroundColor: color }}
              >
                {color}
              </span>
            ))}
            <ErrorMessages msg={errors.colors} />
          </div>

          <div className="flex items-center space-x-3">
            <Button type="submit" className="bg-indigo-700 hover:bg-indigo-800">Submit</Button>
            <Button type="reset" className="bg-gray-400 hover:bg-gray-500" onClick={onEditCancel}>Cancel</Button>
          </div>
        </form>
      </Modal>

      {/* DELETE PRODUCT MODAL */}
      <Modal isOpen={isOpenDeleteModal} closeModal={closeDeleteModal} title={"Are You Sure You Want to Delete This Product?"}>
        <form className="space-y-3" onSubmit={submitDeleteHandler}>
      
          <p className="text-md mb-6">
            This action <span className="text-red-500"><b>cannot be undone.</b></span>
            <br/>Deleting this product will permanently remove it from your inventory, and any associated data will be lost.
            <br/>Are you sure you want to proceed?
          </p>
          <div className="flex items-center space-x-3">
            <Button type="submit" className="bg-red-700 hover:bg-red-800" onClick={deleteProductHandler}>Confirm</Button>
            <Button type="reset" className="bg-amber-400 hover:bg-amber-500" onClick={onDeleteCancel}>Cancel</Button>
          </div>

        </form>
      </Modal>

      <Toaster></Toaster>
    </main>
  );
};

export default App;
