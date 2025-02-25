'use client'
import { IoIosCheckmarkCircle } from "react-icons/io";
import { RxCrossCircled } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { addItem } from "@/redux/cart/cartSlice";
import FormModal from "@/app/auth/FormModal";
import { useRouter } from "next/navigation";
import { useState } from "react";


function ProductPage({product}) {
  const {user} = useSelector((state)=>state.auth)

  const [loginModal,setloginModal] = useState(false);
 
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <div className="sm:flex p-5 mt-10">
      <div className=" sm:w-2/3 flex items-center justify-center">
      <Image alt="productImage" src={product.imageUrls[0]} width={650} height={650}/>
      </div>
      <div className=" sm:w-1/2 mt-10 ml-5">
      <div className="flex pb-3">
      <h1 className="font-semibold pr-10">{product.brand.toUpperCase()}</h1>
        {product.stock>0 ? (
          <p className="flex items-center justify-center"> <IoIosCheckmarkCircle className="text-green-500 mr-1" /> In stock</p>
        ) : (
          <p className="flex items-center justify-center"><RxCrossCircled className="text-red-600 mr-1"/> Out of stock</p>
        )}
      </div>
      <h1 className="font-bold pb-5 text-5xl">{product.name}</h1>
      <p className="underline pb-5 cursor-pointer">Review this product</p>
      <p className="font-bold text-3xl text-red-700 pb-5"><span className="text-base">Rs. </span> {product.price}</p>
      <button  
      onClick={()=>dispatch(addItem(product))}
      className="bg-sky-400 mr-4 text-base sm:text-base font-semibold text-sky-950  py-3 px-2 w-3/5 rounded-md hover:bg-sky-300 dark:bg-blue-dark">
      Add to cart
      </button> 
      <button
      onClick={()=>{user?router.push("cart/payment"):setloginModal(prevState => !prevState)}}  
      className="bg-sky-950  text-base sm:text-base font-semibold text-white py-3 px-3 rounded-md hover:bg-sky-800 dark:bg-sky-950">
      Buy now
      </button> 
      <h1 className="pt-10 font-semibold">Product details</h1>
        <p>{product.description}</p>
      </div>
      {loginModal && <FormModal Form={true}/>}
    </div>
  )
}

export default ProductPage