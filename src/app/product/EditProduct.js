'use client'
import Addform from '@/components/products/form'
import { useEffect, useState } from "react"
import { MdCancel } from "react-icons/md";
import { useSelector } from 'react-redux';
import { BiSolidEdit } from "react-icons/bi";



function EditProduct() {
  const[Add,setAdd]=useState(false);
  const { user } = useSelector((state) => state.auth);

  useEffect(()=>{if(Add)document.body.style.overflow = "hidden"})

  if (!user) return null;
  return (
  <div className='h-full relative'>
      <div className={`opacity-0 h-full left-0 top-0 rounded-md absolute w-full bg-white hover:opacity-80 pointer-events-none`}>
        <BiSolidEdit
          onClick={() => setAdd(true)}
          className="absolute top-1/2 text-2xl right-1/2 hover:text-sky-800 group-hover:block hidden pointer-events-auto"
        />
      </div>
      {Add &&(
        <div className="fixed top-0 left-0 w-full h-full backdrop-blur-sm bg-blue-dark bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-xl w-[500px]">
          <div className='flex mb-5 justify-between'>
            <h1 className="block font-semibold  text-2xl">Add Product</h1>
            <button
                className="text-red-500 text-xl"
                onClick={() => setAdd(false)}
              >
                <MdCancel />
              </button>
          </div>
          <Addform />
        </div>
      </div>
      )}
  </div>)
}

export default EditProduct
