'use client'
import LoginForm from "@/app/auth/LoginForm";
import RegisterForm from "@/app/auth/RegisterForm";
import getAuthUser, { getUserFromToken } from "@/helpers/authUser";
import { logoutUser } from "@/redux/auth/authSlice";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";

function Button() {
  const [ClickLogin,setClickLogin] = useState(false);
  const [ClickRegister,setClickRegister] = useState(false);
  const [ButtonClick,setButtonClick] = useState(false);
  const {user} = useSelector((state)=>state.auth);

  useEffect (()=>{
    if(user){
      setButtonClick(false)
    }
  })

  useEffect(() => {
    if (!ButtonClick) {
      setClickLogin(false);
      setClickRegister(false);
      document.body.style.overflow = "auto";
    }
    else{
      document.body.style.overflow = "hidden";
    }
  }, [ButtonClick]);

  const dispatch = useDispatch();

  return (
    <div>
      {!user?<div className="flex gap-2 p-2">
        <button className=" bg-green-600 text-white shadow-lg  rounded-sm px-3 py-1 ml-2" onClick={()=>{setClickLogin(true); setButtonClick(true);}} >Login</button>
        <button className=" bg-white text-black shadow-lg rounded-sm px-3 py-1 mr-2"  onClick={()=>{setClickRegister(true); setButtonClick(true);}} >Register</button>
      </div>:<div>Hello {user.name}
        <div className="flex justify-center">
        <button className=" bg-red-600 hover:bg-red-500 text-white shadow-lg rounded-sm px-3 py-1 ml-2" onClick={()=>dispatch(logoutUser())} >LogOut</button>
        </div>
      </div>}
      {ButtonClick&&(
        <div onClick={()=>setButtonClick(false)} className="fixed top-0 left-0 w-full backdrop-blur-sm h-full bg-blue-dark bg-opacity-50 flex items-center justify-center z-50">
        <div onClick={(e) => e.stopPropagation()} className="bg-white  justify-center p-10 shadow-xl w-[400px]">
          <h1 className="flex justify-center mb-2 text-xl font-bold">{ClickLogin?"Login":"Sign Up"}</h1>
          {ClickRegister&&
          <div>  
            <RegisterForm isLoginVisible ={ClickRegister} />
            <div className="justify-center flex">
              <button onClick={()=>{setClickRegister(false),setClickLogin(true)}} className="underline">Already have an account?</button>
            </div>
            </div>
            }
          {ClickLogin&&
          <div>
          <LoginForm isLoginVisible ={ClickLogin}/>
          <p className="justify-center font-semibold flex pb-2">Dont have an account?</p>
          <div className="justify-center flex">
          <button onClick={()=>{setClickRegister(true),setClickLogin(false)}} className="underline">Create an acount in less than a minute</button>
          </div>
          </div>
          }
        </div>
      </div>
      )}
    </div>
  )
}
export default Button;
export {userLoggedIn}
