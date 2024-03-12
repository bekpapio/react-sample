import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import { useProduct, useProducts } from "../hooks/useProducts";
import useWIndowSize from "../hooks/useWIndowSize";
import useScroll from "../hooks/useScroll";

export default function Page2() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const url = "https://dummyjson.com";
  const { data, isLoading, isError } = useProducts();
  const {windowSize}=useWIndowSize()
  const scrolled=useScroll(100)
  console.log(scrolled)
  // const {data,isLoading,isError}=useProduct("1")

  // const { data, isLoading, isError } = useQuery({
  //   queryKey: ["products"],
  //   queryFn:  async () => {
  //     const response = await axios.get(`${url}/products`);
  //     return response.data.products;
  //   },
  // });

  // const fetchProducts = async () => {
  //   setLoading(true);
  //   const allProducts = await axios.get(`${url}/products`);
  //   setProducts(allProducts.data.products);
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   fetchProducts();
  //   console.log(products)
  // },[]);
  if (isLoading) {
    return <div className="">Loading.....</div>;
  }
  return (
    <div>
      <div className="">
        <a href="/">home</a>
      </div>

      <div className="">
        {data.map((product, index) => (
          <div className="" key={index} style={{ display: "flex", gap: "3px" }}>
            <div className="" style={{ color: "" }}>
              {product.title}
            </div>
            {/* <div className="">{product.brand}</div> */}
          </div>
        ))}
      </div>
      {/* form  */}
      {/* <div className="">
        <form onSubmit={handleSubmit}>
          <div className="">
            <label htmlFor="name">Name</label>
            <input
              onChange={handleChange}
              type="text"
              name="name"
              id="name"
              value={formData.name}
            />
          </div>
          <div className="">
            <label htmlFor="category">category</label>
            <input
              onChange={handleChange}
              type="text"
              name="category"
              id="category"
              value={formData.category}
            />
          </div>
          <button type="submit">submit</button>
        </form>
      </div> */}
    </div>
  );
}
