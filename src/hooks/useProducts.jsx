import axios from "axios";
import http from '../service/httpService'
import { useMutation, useQuery, useQueryClient } from "react-query";

export const useProducts = () => {
  const url = "https://dummyjson.com";
  const products = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await http.get(`${url}/products`);
      return response.data.products;
    },
  });
  return products;
};
export const useProduct = (id) => {
  const url = "https://dummyjson.com";
  const product = useQuery({
    queryKey: ["products", id],
    queryFn: async () => {
      const response = await axios.get(`${url}/products/${id}`);
      console.log(response);
      return response.data.products;
    },
  });
  return product;
};
export const useCreateProduct = () => {
  const queryClient = useQueryClient();
  const url = "https://dummyjson.com";
  return useMutation({
    mutationKey: ["createProduct"],
    mutationFn: async (product) => {
      const response = await axios.post(`${url}/products/add`, {
        product,
      });
      console.log(response);
      return response;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["products"] }),
  });
};
export const useUpdateProduct = (id) => {
  const queryClient = useQueryClient();
  const url = "https://dummyjson.com";
  return useMutation({
    mutationKey: ["updateProduct"],
    mutationFn: async (product) => {
      const response = await axios.put(`${url}/products/${id}`, {
        product,
      });
      console.log(response);
      return response;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["products"] }),
  });
};
export const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  const url = "https://dummyjson.com";
  return useMutation({
    mutationKey: ["deleteProduct"],
    mutationFn: async (id) => {
      const response = await axios.delete(`${url}/products/${id}`);
      console.log(response);
      return response;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["products"] }),
  });
};
