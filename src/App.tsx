import { useState } from "react";
import { productList } from "./components/data";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import Button from "./components/ui/Button";


// ** SM -> MD -> LG -> XL -> 2xl
const App = ()=>
{
  // ** States
    const [isOpen, setIsOpen] = useState(false);
  
    // ** Handlers
    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal() {
      setIsOpen(false);
    }
  // ** Renders
  const renderProductList = productList.map( product => <ProductCard key={product.id} product={product}/>);
    return(
        <main className="container mx-auto">
          <Button className="bg-indigo-700 hover:bg-indigo-800" onClick={openModal}>Add</Button>
          <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 rounded-md ">
            {renderProductList}
          </div>
          <Modal isOpen={isOpen} closeModal={closeModal} title={"ADD NEW PRODUCT"}>
            <div className="flex items-center space-x-2">
              <Button className="bg-indigo-700 hover:bg-indigo-800">Submit</Button>
              <Button className="bg-gray-400 hover:bg-gray-500">Cancel</Button>
            </div>
          </Modal>
        </main>
        
    );
}

export default App;