// 'use client'

import {getProductById } from "@/api/products";
import ProductPage from "@/components/products/productPage";


async function ProductById({params}) {
  const {ProductId} = await params;
  const product = await getProductById(ProductId);
  // const dispatch = useDispatch();
  
  return (
    <ProductPage product = {product}/>
  )
}

export default ProductById