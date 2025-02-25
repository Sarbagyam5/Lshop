'use client'
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "@/redux/auth/authAction";

function LoginForm({ isLoginVisible}) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [visibility, setVisibility] = useState(false);
  
  const dispatch = useDispatch();

  const{loading,user, error} = useSelector((state)=>state.auth);

  async function submitForm(data) {
      dispatch(loginUser(data))
  }

  useEffect(() => {
    if (error) {
      toast.error(error, { autoClose: 1500 });
    }
    if (user) {
      toast.success(`Hello ${user.name}`, { 
        autoClose: 1500, 
        // onClose: window.location.reload(),
      });
    }
  }, [error, user]); 

  if (!isLoginVisible) return null; 

  return (
    <>
      <form onSubmit={handleSubmit(submitForm)} className={`${user? "disabled:opacity-50 pointer-events-none" : ""}`}>
        <div className="pb-2">
          <label htmlFor="email" className="w-28">Email:</label>
          <input 
            id="email"
            type="email" 
            className={`flex-1 border w-full shadow-sm focus:outline-none focus:bg-sky-50 p-2 rounded ${errors.email && "border-red-500 animate-[buzz_0.3s_ease-in-out_3]"}`}
            {...register("email", { required: "Email is required" })}
          />
          <p className="text-sm text-red-500">{errors.email?.message}</p>
        </div>

        <div className="pb-2">
          <label htmlFor="password" className="w-28">Password:</label>
          <div className="flex">
            <input 
              id="password"
              type={visibility ? "text" : "password"} 
              className={`border-l border-y w-full shadow-sm focus:outline-none focus:bg-sky-50 p-2 rounded-l ${errors.password && "border-red-500 animate-[buzz_0.3s_ease-in-out_3]"}`}
              {...register("password", { required: "Password is required" })}
            />
            <div 
              onClick={() => setVisibility(!visibility)} 
              className="border-r border-y shadow-sm focus:outline-none focus:bg-sky-50 flex items-center py-2 px-4 rounded-r cursor-pointer"
            >
              {!visibility?<FaRegEye />:<FaEyeSlash />}
            </div>
          </div>
          <p className="text-sm text-red-500">{errors.password?.message}</p>
          <div className="flex justify-end mb-2">
            <p className="underline cursor-pointer">Forgot password?</p>
          </div>
        </div>
        <div className="flex justify-center pb-2">

          <button
          type="submit" 
          className={`bg-green-600 text-white flex justify-center text-lg py-2 w-full rounded-sm ${loading ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
          disabled={loading} 
          >
            {!loading ? "Log In" : <div className="flex items-center">Logging In...  <div className="animate-spin w-4 ml-4 h-4 border-2 border-white border-t-transparent rounded-full"></div></div>} 
          </button>
        </div>
      </form>
      <ToastContainer />
    </>
  );
}

export default LoginForm;
