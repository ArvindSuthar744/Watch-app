import React from 'react'
import { Link } from 'react-router'

function Footer() {
  return (
    <>

      <div className='bg-neutral-950'>
      <div className='pt-10  mx-16  '>
          <div className='flex items-center justify-around max-md:flex-col max-md:items-start gap-5 '>

            <div >
              <h3 className='mb-3 text-xl'>About ASk Watch</h3>
              <div className='text-sm flex flex-col gap-2 text-gray-400'>
                <p>Address : 123,Ghatlodiya, Ahmedabad, Gujarat.</p>
                <p>Phone : +91 1234567890</p>
                <p>Fax : 123 452 124 556 </p>
                <p>Email : askwatches.gamil.com</p>
                <p>Website : askwatches.com</p>
              </div>
            </div>

            <div>
              <h3 className='mb-3 text-xl'>Information</h3>
              <div className='text-sm flex flex-col gap-2 text-gray-400'>
              <Link to='/'>Home</Link>
              <Link to='/menpage'>Men</Link>
              <Link to='/womenpage'>Women</Link>
              <Link to='/unisexpage'>Unisex</Link>
              <Link to='/cartpage'>Cart</Link>
              </div>
            </div>

            <div>
              <h3 className='mb-3 text-xl'>My Account</h3>
              <div className='text-sm flex flex-col gap-2 text-gray-400'>
                <p>My Account</p>
                <p>Contact</p>
                <p>Wishlist</p>
                <p>Cart</p>
                <p>Checkout</p>
              </div>
            </div>

          </div>
        </div>

        <div className='pt-10 pb-5 text-center text-md font-thin'>
              <small >Copyright &#169; 2024 <span className='text-yellow-600'>ArvindK</span>.All Right Reserved.</small>
            </div>
      </div>

    </>
  )
}

export default Footer
