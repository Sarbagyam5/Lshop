import config from "@/config/config"
import api from "./api";
import authToken from "@/constants/authToken";
import axios from "axios"

async function getAllProducts(){
  const response = await axios.get(`${config.apiUrl}/api/products`);
  return response.data;
}

async function getProductById(id){
  const response = await axios.get(`${config.apiUrl}/api/products/${id}`);
  return response.data;
}

async function addProduct(data) {
  const response = await api.post(`/api/products`, data, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  return response.data;
}

async function editProduct(data) {
  const response = await api.post(`/api/products/${data.id}`, data, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  return response.data;
}
export{getAllProducts,getProductById,addProduct};