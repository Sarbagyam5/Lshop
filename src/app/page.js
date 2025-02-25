import { getAllProducts } from "@/api/products";
import Ad from "@/components/Ad";
import ProductCard from "@/components/products/Card";
import { Product_Route } from "@/constants/routes";
import Link from "next/link";

export default async function Home() {
  const products = await getAllProducts();
  const categories = Array.from(new Set(products.map((product) => product.category)));
  const limitedCategories = categories.slice(0, 5);

  return (
      <div className="lg:mx-10">
        <Ad />
        <div className="text-right mt-4">
          <Link href={Product_Route}>
            <button  className="underline text-green-700 hover:text-green-500">Explore all product</button>
          </Link>
        </div>
          {limitedCategories.map((category) => (
            <div key={category} className=" bg-white mb-5 mt-2 rounded-md dark:bg-[#1E1E1E]">
              <h1 className="px-5 pt-2 text-xl font-semibold">{category}</h1>
              <div className="grid grid-cols-2 dark:bg-[#1E1E1E] p-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {products
                  .filter((product) => product.category === category)
                  .map((product) => (
                   <ProductCard key={product.id} product={product}/>
                  ))}
              </div>
            </div>
          ))}
       <div className="text-right">
          <Link href={Product_Route}>
            <button  className="underline text-green-700 hover:text-green-500">Explore all product <span dangerouslySetInnerHTML={{ __html: "&rarr;" }}/> </button>
          </Link>
        </div>
      </div>
  );
}
