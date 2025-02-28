import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removetoCart, setQuantity } from "../Context-Api/cartSlice";

function Cartpage() {

  const Cart = useSelector(state => state.cart)
  // console.log(Cart.cart);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleIncQuantity = (id) => {
    dispatch(setQuantity({ type: "increment", id }));
  }
  const handleDecQuantity = (id) => {
    dispatch(setQuantity({ type: "decrement", id }));
  }
  const handleRemovetoCart = (id) => {
    dispatch(removetoCart(id));
  }
  const handleCheckoutpage = () => {
    navigate('/checkoutpage')
  }

  const totalPrice = Cart.cart.reduce((total, item) => total + item.price * item.quantity, 0);


  return (
    <>
      <div className="bg-white text-black min-h-screen p-6 pt-24">
        <h1 className="text-2xl  text-center pb-5  max-md:text-lg">Shopping Cart</h1>
        {/* <div className="my-2">
          <Link to='/' className="py-1 px-2 max-lg:text-sm bg-black text-white rounded-lg">Go Back</Link>
        </div> */}

        <div className="max-w-4xl mx-auto bg-[#EFF3EA] rounded-lg shadow-lg p-6">
          {Cart.cart.length > 0 ? (
            <div className="space-y-4">
              {Cart.cart.map((item, idx) => (

                <div key={idx} className="flex flex-wrap gap-5 items-center justify-between bg-white p-4 rounded-lg">
                  <div className="flex items-start gap-4 ">
                    <img src={item.img} alt={item.name} className="w-16 h-16 rounded-md" />
                    <div>
                      <h3 className="text-lg font-medium">{item.name}</h3>
                      <p className="text-sm ">${item.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 pl-4 flex-wrap">
                    <button
                      onClick={() => { handleDecQuantity(item.id) }}
                      className="px-2 py-1 text-sm bg-[#D9DFC6] rounded-md ">
                      -
                    </button>
                    <span className="px-3">{item.quantity}</span>
                    <button
                      onClick={() => { handleIncQuantity(item.id) }}
                      className="px-2 py-1 text-sm bg-[#D9DFC6] rounded-md ">
                      +
                    </button>
                    <button
                      onClick={() => { handleRemovetoCart(item.id) }}
                      className="px-3 py-1 bg-red-600 text-sm max-md:text-[12px] text-white rounded-md hover:bg-red-500">
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              <div className="text-right mt-4">
                <h2 className="text-xl max-lg:text-[17px]">Total: $ {totalPrice}</h2>
                <button
                  className="mt-4 px-6 py-2 max-lg:text-sm bg-zinc-950 rounded-md text-white hover:bg-black	"
                onClick={handleCheckoutpage} 
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          ) : (
            <p className="text-center text-gray-400">Your cart is empty.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Cartpage;