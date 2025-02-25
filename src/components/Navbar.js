'use client'
import { MdFilterListAlt } from "react-icons/md";
import Button from "./buttons.js";
import { GiShoppingCart } from "react-icons/gi";
import { useRouter } from "next/navigation.js";
import { Cart_Route } from "@/constants/routes.js";
import { useSelector } from "react-redux";

export default function NavBar () {
  const items = useSelector((state)=>state.cart.items)

  const router = useRouter()

  const itemNosInCrate = items.reduce((sum,item)=>sum+item.quantity,0)

  return (
        <nav className="font-sans text-center  sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-blue shadow sm:items-center w-full sm:flex flex-col dark:bg-[#181818]">
          <div className=" flex justify-between sm:mb-0 text-gray-700">
            <div>
              <a href ="/"className="no-underline font-bold text-3xl hover:text-slate-500 dark:text-white dark:hover:text-blue">LShop</a>              
            </div>
            <div className="flex sm:hidden items-center">
            <GiShoppingCart onClick={()=>router.push(`${Cart_Route}`)} className=" cursor-pointer hover:text-slate-700 text-4xl mr-3"/>
            <div className=" border  justify-center">
              <Button  className="shadow-inner "/>
            </div>
          </div>
          </div>
          <div className="w-full flex sm:w-1/2 lg:w-2/3"> 
            <input placeholder="Search the product" className="w-full border-none rounded-sm focus:ring-0 focus:outline-none  px-4 dark:bg-[#252525] dark:placeholder:[#BBBBBB]"></input>
            <a  href="" className="text-lg font-semibold no-underline hover:text-grey-darkest ml-1  px-5 shad">
              <MdFilterListAlt className=" items-center text-4xl  text-gray-700"/>
            </a>
          </div>
          <div className="hidden sm:flex items-center">
            <div onClick={()=>router.push(`${Cart_Route}`)}  className="relative">
              <GiShoppingCart className=" cursor-pointer hover:text-slate-700 text-4xl mr-3"/>            
              {itemNosInCrate>0 &&
              <span className="absolute top-0 right-1 cursor-pointer bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {itemNosInCrate}
              </span>}
            </div>
            <div className=" border  justify-center">
              <Button className="shadow-inner" />
            </div>
          </div>
          
      </nav> 
  )
}
