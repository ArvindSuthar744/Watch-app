import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

function Checkoutpage() {

  const Cart = useSelector(state => state.cart)
  const totalPrice = Cart.cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const navigate = useNavigate()

  const handleOrderClick = () => {
  
      toast.success('Order Successfully Placed!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
      navigate('/')
  }


  return (
    <div className=" bg-white text-black min-h-screen py-8 px-3 pt-24">
      <h1 className="text-3xl font-bold text-center mb-8 ">Checkout</h1>
      <div className="max-w-5xl mx-auto bg-[#EFF3EA] rounded-lg shadow-lg p-6">
        <div className="grid grid-cols-1 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="address" className="block text-sm font-medium">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  placeholder="Enter your address"
                  className="w-full mt-1 p-2  rounded-md border "
                />
              </div>
              <div>
                <label htmlFor="city" className="block text-sm font-medium">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  placeholder="Enter your city"
                  className="w-full mt-1 p-2  rounded-md border "
                />
              </div>
              <div>
                <label htmlFor="zipcode" className="block text-sm font-medium">
                  ZIP Code
                </label>
                <input
                  type="text"
                  id="zipcode"
                  placeholder="Enter your ZIP code"
                  className="w-full mt-1 p-2  rounded-md border "
                />
              </div>
            </form>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
          <form className="space-y-4">
            <div className="flex items-center">
              <input
                type="radio"
                id="credit-card"
                name="payment"
                className="mr-2 focus:ring-2 focus:ring-blue-500"
              />
              <label htmlFor="credit-card" className="text-sm">
                Credit/Debit Card
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="paypal"
                name="payment"
                className="mr-2 focus:ring-2 focus:ring-blue-500"
              />
              <label htmlFor="paypal" className="text-sm">
                PayPal
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="cod"
                name="payment"
                className="mr-2 focus:ring-2 focus:ring-blue-500"
              />
              <label htmlFor="cod" className="text-sm">
                Cash on Delivery
              </label>
            </div>
          </form>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className=" p-4 rounded-lg">
            <div className="flex justify-between mb-2">
              <p>Subtotal:</p>
              <p>${totalPrice}</p>
            </div>
            <div className="flex justify-between mb-2">
              <p>Shipping:</p>
              <p>$20.00</p>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <p>Total:</p>
              <p>${totalPrice + 20}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button className="px-6 py-3 bg-zinc-950 rounded-md text-white hover:bg-zinc-950 transition duration-200"
          onClick={handleOrderClick}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkoutpage;
