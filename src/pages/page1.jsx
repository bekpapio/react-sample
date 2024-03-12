import { useState } from "react";
import { Link } from "react-router-dom";
import SideBar from "../components/sideBar";

export default function Page1() {
  const [filter,setFilter]=useState('all')
  const [search,setSearch]=useState('')
  const [formData, setFormData] = useState({
    name: "",
    category: "",
  });
  let count = 1;
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "product 1",
      category: "clothes",
    },
    {
      id: 2,
      name: "product 2",
      category: "leathers",
    },
    {
      id: 3,
      name: "product 3",
      category: "Woods",
    },
    {
      id: 4,
      name: "product 4",
      category: "Hands",
    },
  ]);
  const handleDelete = (id) => {
    const newProducts = products.filter((product) => product.id !== id);
    setProducts(newProducts);
  };
  const handleUpdate = (id) => {
    const newProducts = products.map((product) =>
      product.id == id
        ? { ...product, name: `${product.name} updated` }
        : product
    );
    setProducts(newProducts);
  };
  const handleSubmit = (e) => {
    // const newProduct = {
    //   id: 6,
    //   name: "product 6",
    //   category: "category 6",
    // };
    e.preventDefault();
    const newProducts = [...products, { ...formData, id: products.length + 1 }];
    console.log(newProducts);
    setProducts(newProducts);
  };

  // onchange 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  setTimeout(() => {
    console.log("time");
  }, 4000);

  // filter data 
  const filteredData=products.filter(product =>{
    const filterMatch= filter === 'all'? product: product.name === filter
    const searchMatch=search === ''? product: product.name.toLowerCase().includes(search.toLocaleLowerCase());
    return filterMatch && searchMatch;
  })

  // const searchData=filteredData.filter(product =>{
  //   return search === ''? product: product.name.toLowerCase().includes(search.toLocaleLowerCase());
  // })

  return (
    <>
      <div className="" style={{ display: "flex", gap: "40px" }}>
        <div className="">
          <SideBar />
        </div>
        <div className="">
          <div className="">
            <Link to="/page2" className="font-bold ">
              page 2
            </Link>
          </div>
          {/* <button>Add</button> */}
          <ul>
            <div className="" style={{ fontWeight:"bold" }}>Products</div>
            {filteredData.map(({ name, id, category }, index) => (
              <div className="" key={index}>
                <div className="">
                  <li key={index} className="">
                    {name}
                  </li>
                  <div
                    onClick={() => handleUpdate(id)}
                    className=""
                    style={{
                      color: "green",
                      background: "blue",
                      display: "inline",
                      margin: "5px",
                      cursor: "pointer",
                    }}
                  >
                    edit
                  </div>
                  <div
                    onClick={() => handleDelete(id)}
                    className=""
                    style={{
                      color: "white",
                      background: "red",
                      display: "inline",
                      cursor: "pointer",
                    }}
                  >
                    delete
                  </div>
                </div>
                <ul>
                  <li>{category}</li>
                </ul>
              </div>
            ))}
          </ul>
          <div className="">form</div>
          <div className="">
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
          </div>
        </div>
      </div>
    </>
  );
}
