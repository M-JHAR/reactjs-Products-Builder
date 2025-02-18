import { ChangeEvent, useState } from "react";
import { formInputsList, productList } from "./components/data";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import { IProduct } from "./components/interfaces";

// ** SM -> MD -> LG -> XL -> 2xl
const App = ()=>
{
  // ** States
  const [product, setProduct] = useState<IProduct>({
    title: '',
    description: '',
    colors: [],
    category: {name: '', imageURL: ''},
    imageURL: '',
    price: '',
  });
  const [isOpen, setIsOpen] = useState(false);
  
  // ** Handlers
  const openModal = ()=> setIsOpen(true);
  const closeModal = ()=> setIsOpen(false);

  const onChangeHandler = (event:ChangeEvent<HTMLInputElement>)=>
  {
    const {value, name} = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
  }

  // ** Renders
  const renderProductList = productList.map( product => <ProductCard key={product.id} product={product}/>);
  const renderFormInputList = formInputsList.map( input =>
  (
    <div className="flex flex-col">
      <label htmlFor={input.id} className="mb-[2px] text-md font-medium text-gray-700">
        {input.label}
      </label>
      {/*  ** FIX THE BELOW ERROR **   */}
      {/*<Input type={input.type} id={input.id} name={input.name} value="" onChange={onChangeHandler}/>*/}
      <Input type={input.type} id={input.id} name={input.name} value="" onChange={onChangeHandler}/>
    </div>
  ));

    return(
        <main className="container mx-auto">
          <Button className="bg-indigo-700 hover:bg-indigo-800" onClick={openModal}>Add</Button>

          <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 rounded-md ">
            {renderProductList}
          </div>

          <Modal isOpen={isOpen} closeModal={closeModal} title={"ADD NEW PRODUCT"}>
            <form className="space-y-3">
              {renderFormInputList}
              <div className="flex items-center space-x-3">
              <Button className="bg-indigo-700 hover:bg-indigo-800">Submit</Button>
              <Button className="bg-gray-400 hover:bg-gray-500">Cancel</Button>
            </div>
            </form>
            
          </Modal>
        </main>
        
    );
}

export default App;