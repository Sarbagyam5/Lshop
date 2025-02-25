import { getAllProducts } from "@/api/products";
import ProductCard from "@/components/products/Card";
import AddForm from "./AddForm";


async function product() {
  const products = await getAllProducts();
  console.log(products)
  return (
    
    <div className="pt-8 mb-10">
      <div className="flex px-8  justify-between">
      <h1 className="font-semibold text-3xl">Featured Products</h1>
      <AddForm />
      </div>
      <div className="grid grid-cols-2  dark:bg-[#1E1E1E] px-8 pt-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"> 
        {products.map((product) => (
          <div key={product.id}>  
            <ProductCard product={product}/>
          </div>
        ))}
     </div>
    </div>

  );
}

export default product;
