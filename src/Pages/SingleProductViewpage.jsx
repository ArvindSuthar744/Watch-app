import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { products } from "../Context-Api/products";
import { useDispatch } from "react-redux";
import { addtoCart, setQuantity } from "../Context-Api/cartSlice";
import { toast } from "react-toastify";


function SingleProductViewpage() {

  const { viewId } = useParams()
  const showProduct = products.find((v) => v.id == viewId)
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch()
  const naviagte = useNavigate()


  const handleIncQuantity = () => {
    setQuantity((qun) => qun + 1)
  }
  const handleDecQuantity = (price) => {
    setQuantity((qun) => (qun > 1 ? qun - 1 : 1))
  }

  const handleAddtoCart = (product) => {
    dispatch(addtoCart({ ...product, quantity }));
  }
  const handerlerBuynow = (product) => {
    dispatch(addtoCart({ ...product, quantity }));
    naviagte('/cartpage')
    toast.success('Successfully Product Add to cart', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  }

  return (
    <div className="bg-white text-black min-h-screen py-10 px-10">
      <Link to='/' className='py-1 px-5 border rounded text-yellow-400'>Go Back</Link>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-16">
        <div className="flex justify-center ">
          <img src={showProduct.img} alt={showProduct.name} className="rounded-lg shadow-lg w-96" />
        </div>
        <div >
          <h1 className="text-3xl font-bold mb-4 max-lg:text-2xl max-md:text-xl">
            {showProduct.name}
          </h1>
          <p className="text-gray-400 text-sm mb-4">{showProduct.details}</p>
          <div className="flex items-center gap-4 ">
            <p className="text-yellow-400 text-2xl font-bold max-md:text-xl">${showProduct.price}</p>
            <p className="text-gray-500 line-through">${showProduct.oldPrice}</p>
          </div>

          <div className="flex justify-start items-center gap-10">
            <div className="flex items-center gap-4 py-5 flex-wrap ">
              <button className="px-2 py-1 bg-[#D9DFC6] rounded-md hover:bg-gray-500 max-md:py-0"
                onClick={handleDecQuantity}
              >
                -
              </button>
              <span className="px-3">{quantity}</span>
              <button className="px-2 py-1 bg-[#D9DFC6] rounded-md hover:bg-gray-500 max-md:py-0"
                onClick={handleIncQuantity}
              >
                +
              </button>
            </div>
            <div>
              <button className="bg-zinc-900 text-white py-2 px-6 rounded-lg max-lg:text-sm hover:bg-zinc-950 transition duration-200"
                onClick={() => { handleAddtoCart(showProduct) }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <button className="bg-zinc-900 text-white py-2 px-6 rounded-lg max-lg:text-sm hover:bg-zinc-950 transition duration-200"
          onClick={() => handerlerBuynow(showProduct)}>
          Buy Now
        </button>
      </div>
    </div >
  );
};

export default SingleProductViewpage;
