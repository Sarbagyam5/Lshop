'use client'
import Addform from '@/components/products/form'
import { useEffect, useState } from "react"
import { MdCancel } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { useSelector } from 'react-redux';

function AddForm(isEditing=false) {
  const[Add,setAdd]=useState(false);
  const {user} = useSelector((state=>state.auth))

  useEffect(()=>{if(Add)document.body.style.overflow = "hidden"})
  
  if (!user) return null;
  return (
  <div>
      {!isEditing&&<button className="bg-green-600 text-white flex px-2 sm:px-5 rounded-md shadow-lg py-2 hover:bg-green-500" onClick={()=>setAdd(true)}><span className='hidden sm:block'>Add Product</span><span  className='sm:hidden'><IoMdAdd/></span> </button>}
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

export default AddForm