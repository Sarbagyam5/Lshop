'use client'
import { clearCart, decreaseItem, increaseItem, removeItem } from "@/redux/cart/cartSlice";
import Image from "next/image"
import { useDispatch, useSelector } from "react-redux"
import { RxCross1 } from "react-icons/rx";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import LoginForm from "../auth/LoginForm";
import FormModal from "../auth/FormModal";
import RegisterForm from "../auth/RegisterForm";
import { Product_Route } from "@/constants/routes";


function Cart() {
  const items = useSelector((state)=>state.cart.items)
  const {user} = useSelector((state)=>state.auth)
  
  const [loginModal,setloginModal] = useState(false);
 
  const dispatch = useDispatch();
  const router = useRouter();

  const totalPrice = items.reduce((sum,item)=>sum+item.price*item.quantity,0)


  return (
    //main page
    <div className='px-10 lg:px-32 py-16 md:flex'>
      <div className='md:mr-4 md:w-2/3'>
        {items.map((item)=>(
        <div key={item.id} onClick={()=>router.push(`${Product_Route}/${item.id}`)} className='py-6 flex hover:rounded-md hover:bg-slate-200 cursor-pointer border-b-2'>
          <div className="w-1/3">
            <div className="flex h-auto w-auto justify-center py-2">
              {item.imgUrl? (
                <Image className="h-auto block " width={150} height={150} alt="productImage" src={item.imgUrl} />
              ) : (
                <div className="bg-gray-200 rounded-md h-full w-full justify-center items-center flex">
                  <h1>No photo available</h1>
                </div>
              )}
            </div>           
            <div onClick={(e) => e.stopPropagation()} className="flex justify-between md:px-4 xl:px-14 py-2">
              <button onClick={()=>dispatch(decreaseItem(item.id))} className="bg-gray-200 hover:bg-gray-300 px-2">-</button>
              <span>{item.quantity}</span>
              <button onClick={()=>dispatch(increaseItem(item.id))} className="bg-gray-200 hover:bg-gray-300 px-2">+</button>
            </div>          
          </div>
          <div className="w-2/3 px-4">
            <div className="mb-4">
              <p>{item.brand}</p>
              <h1 className="font-semibold text-lg">{item.name}</h1>
            </div>
            <div className="flex  mb-4 items-end">
              <h1 className="font-semibold mr-5 text-lg line-through">Rs.{item.price*item.quantity}</h1>
              <h1 className="font-semibold text-2xl text-red-800">Rs. {Math.floor(0.9*item.price*item.quantity)}</h1>
            </div>
          </div>
          <div onClick={(e) => e.stopPropagation()}  className="flex justify-center py-2 underline items-center mr-5 font-bold rounded text-xl cursor-pointer text-white">
            <RxCross1 onClick={()=>{dispatch(removeItem(item.id))}} className="bg-red-600 hover:bg-red-700 rounded-full p-1 "/>
          </div>
        </div> 
        ))} 
        <div className="flex justify-end">
          <button className="text-sky-800 mb-5 underline" onClick={()=>dispatch(clearCart())}>Clear Cart</button>     
        </div>  
      </div>
      <div className='md:w-1/3'>
        <div className="bg-white px-6 pt-8 pb-12">
          <h1 className="font-semibold text-xl pb-10">Summary</h1>
          <div className="flex justify-between pb-2"> 
            <span>Sub-total</span>
            <span>Rs.{totalPrice}</span>
          </div>
          <div className="flex justify-between border-b pb-2"> 
            <span>Discount</span>
            <span>Rs.{Math.floor(0.1*totalPrice)}</span>
          </div>
          <div className="flex justify-between border-b py-2"> 
            <span>Est. total</span>
            <span className="text-xl font-semibold mb-6">Rs. {Math.floor(0.9*totalPrice)}</span>
          </div>
          <button onClick={()=>{user?router.push("cart/payment"):setloginModal(prevState => !prevState)}} className="bg-blue w-full py-3 text-xl font-semibold text-white rounded-sm hover:bg-sky-100">Check Out</button>
        </div>
      </div>
      {loginModal && <FormModal Form={true}/>}
    </div>
  )
}

export default Cart