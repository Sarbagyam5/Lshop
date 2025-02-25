'use client'
import { registerUser } from "@/redux/auth/authAction";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer,toast } from "react-toastify";

function RegisterForm(isLoginVisible) {
  const {register, handleSubmit,watch, formState:{errors},} =useForm();
  const [visibility, setVisibility] = useState(false);
  
  const dispatch = useDispatch();
  const{loading,user, error} = useSelector((state)=>state.auth);


  function submitForm(data){
    dispatch(registerUser(data))
  }
  
    useEffect(() => {
      if (error) {
        toast.error(error, { autoClose: 1500 });
      }
      if (user) {
        toast.success(`Hello ${user.name}`, { 
          autoClose: 1500, 
          onClose: () => window.location.reload(true) // Ensures function execution
        });
      }
    }, [error, user]); 

  if(isLoginVisible) 
  return (
    <form onSubmit={handleSubmit(submitForm)}>
    <div className="pb-2">
      <label htmlFor='name' className="w-28">Name:</label>
      <input 
      type='name' 
      className={`flex-1 border w-full shadow-sm focus:outline-none focus:bg-sky-50 p-2 rounded ${errors.name&&"border-red-500 animate-[buzz_0.3s_ease-in-out_3]"}`}
      {...register("name",{
        required: "Name is required",
      })}/> 
      <p className="text-sm text-red-500">{errors.name?.message}</p>
    </div>
    <div className="pb-2">
      <label htmlFor='email' className="w-28">Email:</label>
      <input 
      type='email' 
      className={`flex-1 border w-full shadow-sm focus:outline-none focus:bg-sky-50 p-2 rounded ${errors.email&&"border-red-500 animate-[buzz_0.3s_ease-in-out_3]"}`}
      {...register("email",{
         required: "Email adress is required",
      })}/> 
      <p className="text-sm text-red-500">{errors.email?.message}</p>
    </div>
    <div className="pb-2">
      <label htmlFor='password' className="w-28">Password:</label>
      <div className="flex">
        <input 
        type={visibility ? "text" : "password"} 
        className={`border-l border-y w-full shadow-sm focus:outline-none focus:bg-sky-50 p-2 rounded-l ${errors.password && "border-red-500 animate-[buzz_0.3s_ease-in-out_3]"}`}
        {...register("password",{
          required: "Password is required",
          pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
            message: "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character"
          }
        })}/>
          <div 
            onClick={() => setVisibility(!visibility)} 
            className="border-r border-y shadow-sm focus:outline-none focus:bg-sky-50 flex items-center py-2 px-4 rounded-r cursor-pointer"
          >
            {!visibility?<FaRegEye />:<FaEyeSlash />}
          </div>
        </div>  
      <p className="text-sm text-red-500 ">{errors.password?.message}</p>
    </div>
    <div className="pb-2">
      <label htmlFor='confirmPassword' className="w-28">Confirm Password:</label>
      <div className="flex">
        <input 
        type={visibility ? "text" : "password"} 
        className={`border-l border-y w-full shadow-sm focus:outline-none focus:bg-sky-50 p-2 rounded-l ${errors.password && "border-red-500 animate-[buzz_0.3s_ease-in-out_3]"}`}
        {...register("confirmPassword",{
          required: "Confirm password is required",
          validate: (value) => value === watch("password") || "Passwords do not match",
        })}/>
        <div 
          onClick={() => setVisibility(!visibility)} 
          className="border-r border-y shadow-sm focus:outline-none focus:bg-sky-50 flex items-center py-2 px-4 rounded-r cursor-pointer"
        >
          {!visibility?<FaRegEye />:<FaEyeSlash />}
        </div>
      </div>   
      <p className="text-sm text-red-500">{errors.confirmPassword?.message}</p>
    </div>
    <div className="flex justify-center pb-2">
      <input type='submit' value={!loading?'Sign Up':'Signing Up'} className="bg-green-600 text-white text-lg py-2 w-full rounded-sm cursor-pointer"/>
    </div>
    <ToastContainer />
  </form> 
  );
  return null;
}
export default RegisterForm