'use client'
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { BiSolidEdit } from "react-icons/bi";
import AddForm from "./form";
import { useState } from "react";
import { addItem } from "@/redux/cart/cartSlice";
import { useRouter } from "next/navigation";
import { Product_Route } from "@/constants/routes";

export default function ProductCard({ product }) {
  const { user } = useSelector((state) => state.auth);
  const [editItem,setEditItem] = useState();
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <>
      {editItem&&<AddForm isEditing={true}/>}
      <div className="relative h-full group"  key={product.id}>
        {user && (
          <div className="absolute inset-0 bg-white bg-opacity-10 group-hover:bg-opacity-80 transition-opacity duration-300 rounded-md flex items-center justify-center group">
            <BiSolidEdit
              className="text-2xl text-gray-600 hidden group-hover:block pointer-events-auto hover:text-sky-800 cursor-pointer"
              onClick={() => setEditItem(true)}
            />
          </div>
        )}
        <div
          className="p-4 bg-blue  h-full cursor-pointer rounded-md group hover:shadow-lg shadow-blue-800/80 transition-shadow duration-300 hover:bg-white dark:bg-white dark:hover:bg-gray-"
          onClick={()=>router.push(`${Product_Route}/${product.id}`)} 
        >
          <div className="shadow-2xl rounded-md bg-transparent">
            <div className="w-auto h-[135px] rounded-t-md sm:h-[200px] flex bg-white items-center justify-center overflow-hidden ">
              {product.imageUrls[0] ? (
                <Image className="h-auto block " width={150} height={150} alt="productImage" src={product.imageUrls[0]} />
              ) : (
                <div className="bg-gray-200 rounded-md h-full w-full justify-center items-center flex">
                  <h1>No photo available</h1>
                </div>
              )}
            </div>
            <h1 className="text-sm font-bold text-slate-800 sm:px-2 md:text-base rounded-b-md bg-blue-dark text-center">
              {product.name}
            </h1>
          </div>
          <p className="text-[#333] line-clamp-2 pt-3 text-xs text-justify sm:line-clamp-3 sm:px-2 mb-2 dark:text-[A0A0A0]">
            {product.description}
          </p>
          <p className="mt-2 mb-12 sm:px-2 text-red-700 text-l">Rs.{product.price}</p>
          <div onClick={(e) => e.stopPropagation()} className={`absolute bottom-4 left-1/2 hidden group-hover:flex transition-all duration-300 -translate-x-1/2`}>
            <button onClick={()=>dispatch(addItem(product))} className="bg-sky-600 text-xs sm:text-sm text-white py-2 px-2 sm:px-4 rounded-md dark:bg-blue-dark">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
