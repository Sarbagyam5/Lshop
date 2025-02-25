'use client'
import { addProduct } from "@/api/products";
import { useForm } from "react-hook-form"
import { toast, ToastContainer } from "react-toastify";

function AddForm() {
const {register, handleSubmit} =useForm();

function submitForm(data) {
  const formData = new FormData();
  formData.append("brand", data.brand);
  formData.append("category", data.category);
  formData.append("description", data.description);
  formData.append("name", data.name);
  formData.append("price", data.price);
  formData.append("stock", data.stock);

  try {
     addProduct(formData);

    toast.success( "Product added successfully.",
      {
        autoClose: 1500,
        onClose: () => window.location.reload(true) ,
      }
    );
  } catch (error) {
    toast.error(error.response.data, { autoClose: 1500 });
  }
};

  return (
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="flex gap-2 pb-4">
          <label htmlFor='name' className="w-28">Product Name:</label>
          <input 
          type='text' 
          className='flex-1 border  w-full shadow-sm focus:outline-none focus:bg-sky-50 px-2 rounded'
          {...register("name")}/> 
        </div>
        <div className="flex gap-2 pb-4">
          <label htmlFor='Category' className="w-28">Category:</label>
          <input 
          type='text' 
          className='flex-1 border  w-full shadow-sm focus:outline-none focus:bg-sky-50 px-2 rounded'
          {...register("category")}/>
        </div>
        <div className="flex gap-2 pb-4">
          <label htmlFor='brand' className="w-28">Brand:</label>
          <input 
          type='text' 
          className='flex-1 border  w-full shadow-sm focus:outline-none  focus:bg-sky-50 px-2 rounded'          
          {...register("brand")}/>
        </div>
        <div className="flex gap-2 pb-4">
          <label htmlFor='stock' className="w-28">Stocks:</label>
          <input 
          type='text' 
          className='flex-1 border  w-full shadow-sm focus:outline-none focus:bg-sky-50  px-2 rounded'
          {...register("stock")}/>
        </div>
        <div className="flex gap-2 pb-4">
          <label htmlFor='price' className="w-28">Price:</label>
          <input 
          type='text' 
          className='flex-1 border  w-full shadow-sm focus:outline-none  focus:bg-sky-50 px-2 rounded'
          {...register("price")}/>
        </div>
        <div className="flex gap-2 pb-4">
          <label htmlFor='description' className="w-28">Description:</label>
          <textarea 
          id="description" 
          className="border  focus:bg-sky-50  rounded shadow-sm focus:outline-none p-2 w-full resize-y" 
          {...register("description")}/>
        </div>
        <div className="flex justify-center">
          <input type='submit' className="bg-green-600 text-white px-5 rounded py-1 cursor-pointer"/>
        </div>
        <ToastContainer />
      </form>      
  )
}

export default AddForm