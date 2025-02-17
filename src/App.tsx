import { productList } from "./components/data";
import ProductCard from "./components/ProductCard";


// ** SM -> MD -> LG -> XL -> 2xl
const App = ()=>
{

  // ** Renders
  const renderProductList = productList.map( product => <ProductCard key={product.id} product={product}/>);
    return(
        <main className="container mx-auto">
          <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 rounded-md ">
            {renderProductList}
          </div>
        </main>
    );
}

export default App;