'use client'
import { useEffect, useState } from "react";
import LoginForm from "../auth/LoginForm";
import RegisterForm from "../auth/RegisterForm";

function FormModal({Form}) {
  
  const [loginModal,setloginModal] = useState(Form);
  const [ClickLogin,setClickLogin] = useState(Form);
  const [ClickRegister,setClickRegister] = useState(false);

   useEffect(() => {
      if (!loginModal) {
        setClickLogin(false);
        setClickRegister(false);
        document.body.style.overflow = "auto";
      }
      else{
        document.body.style.overflow = "hidden";
      }
    }, [loginModal]);
    
  return (<div>
          {loginModal&&(
        <div onClick={()=>setloginModal(false)} className="fixed top-0 left-0 w-full backdrop-blur-sm h-full bg-blue-dark bg-opacity-50 flex items-center justify-center z-50">
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

export default FormModal