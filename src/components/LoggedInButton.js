'use client'
import { logoutUser } from '@/redux/auth/authSlice';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { GiShoppingCart } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { FaRegHeart } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";

function LoggedInButton({user}) {

  const [prflClicked,setPrflClicked] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
      if (!prflClicked) {
        document.body.style.overflow = "auto";
      }
      else{
        document.body.style.overflow = "hidden";
      }
    }, [prflClicked]);

  return (  
    <div>
      <Image alt='ProfilePicture' onClick={()=>setPrflClicked(prev => !prev)} className={`${prflClicked&& "border-2 border-white"}`} src={user.profileImageUrl} width={35} height={35}/>
      {prflClicked&&
      <div 
      onClick={()=>setPrflClicked(prev => !prev)} 
      className="fixed top-16 mt-2 left-0 w-full h-full bg-opacity-50 flex items-end sm:items-start sm:justify-end z-50"
      >
        <div className='border rounded-lg sm:rounded-sm h-fit w-full mb-16 sm:w-72 sm:mr-6 bg-zinc-100 p-5 dark:text-black'>           
          <div className='flex mb-4 justify-center'>
            <Image alt='ProfilePicture' className='rounded-sm' src={user.profileImageUrl} width={80} height={80} />
          </div>
          <h1 className='font-semibold flex justify-center'>Welcome! {user.name}</h1>
          <div className='bg-white mt-4 p-2 px-4 rounded-md shadow-sm'>
            <div className='flex cursor-pointer items-center hover:text-sky-600 '>
              <GiShoppingCart />
              <h1 className='mx-3'>Orders</h1>
            </div>
            <div className='flex mt-2 cursor-pointer items-center hover:text-sky-600'>
              <FaRegHeart />
              <h1 className='mx-3'>WishList</h1>
            </div>
            <div className='flex items-center cursor-pointer mt-2 hover:text-sky-600'>
              <FaRegEdit />
              <h1 className='mx-3'>Edit Profile</h1>
            </div>
          </div>
          <div className="flex mt-4 justify-center shadow-sm">
              <button className=" bg-red-600 hover:bg-red-500 text-white w-full shadow-lg rounded-sm px-3 py-1 ml-2" onClick={()=>dispatch(logoutUser())} >LogOut</button>
          </div>
        </div>
      </div>}
    </div>
  )}

export default LoggedInButton