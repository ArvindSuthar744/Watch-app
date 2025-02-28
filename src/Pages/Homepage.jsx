import React, { useRef, useState } from 'react'
import { products } from '../Context-Api/products.js';
import ProductCard from '../Components/ProductCard.jsx'
import { Link } from 'react-router-dom';
import Slider from '../Components/Slider.jsx';
import { useDispatch } from 'react-redux';
import { addtoCart } from '../Context-Api/cartSlice.js';

function Homepage() {

  const defaultproducts = products.filter((value) => value.featured === true)
  const [product, setProduct] = useState(defaultproducts);
  const latest_products = products.filter((value) => value.latest === true);

  const handlerfeatured = () => {
    let pro = products.filter((value) => value.featured === true);
    setProduct(pro)
  }
  const handlerbestselling = () => {
    let pro = products.filter((value) => value.bestselling === true);
    setProduct(pro)
  }
  const handleronsale = () => {
    let pro = products.filter((value) => value.sale === true);
    setProduct(pro)
  }

  const scrollContainerRef = useRef(null);
  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 191;
      if (direction === 'left') {
        scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else if (direction === 'right') {
        scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };
  const dispatch = useDispatch()



  return (
    <>
      <div className='text-black'>

        <Slider />

        <div className='my-14 mx-2 flex justify-center items-center flex-wrap gap-7 '>

          <div className="w-2/5 flex  justify-center items-center flex-row gap-4 max-md:w-[90%]  bg-[#EFF3EA] rounded-2xl">
            <div className='ml-3'>
              <small className='max-lg:text-[11px]'>Design Creative</small>
              <h4 className='text-yellow-600 text-xl  max-lg:text-[17px]'>Modern and Clean</h4>
              <small className='max-lg:text-[10px]'>From $50.99 - Sale 20%</small>
            </div>
            <img src="assets/show-1.png" className='h-32 max-sm:w-32 max-md:h-28' alt="" />
          </div>

          <div className="w-2/5 flex justify-center items-center flex-row gap-4 max-md:w-[90%] bg-[#EFF3EA] rounded-2xl">
            <div className='ml-3'>
              <small className='max-lg:text-[11px]'>Bestselling Products</small>
              <h4 className='text-yellow-600 text-xl max-lg:text-[17px]'>Top Sale Diamonds</h4>
              <small className='max-lg:text-[10px]'>From $89.99 - Sale 10%</small>
            </div>
            <img src="assets/show-2.png" className='h-32 max-sm:w-32 max-md:h-28' alt="" />
          </div>
        </div>


        <div className='px-20 max-sm:px-5 max-md:px-9'>
          <div className='flex items-center justify-between'>
            <h3 className='text-xl font-semibold'>Latest Products</h3>
            <div className="flex gap-1">
              <button
                onClick={() => handleScroll('left')}
                className="px-2 py-2"
              >
                <i className="fa-solid fa-angle-left text-xl"></i>
              </button>
              <button
                onClick={() => handleScroll('right')}
                className="px-2 py-2"
              >
                <i className="fa-solid fa-chevron-right text-xl"></i>
              </button>
            </div>
          </div>
          <div ref={scrollContainerRef} className='py-10 w-full  flex justify-start overflow-x-scroll snap-x no-scrollbar items-center gap-7 '>
            {latest_products.map((pro, idx) => (
              <div className='min-w-48  text-center max-lg:min-w-44 max-md:min-w-36 p-2 rounded-xl bg-[#EFF3EA]  hover:scale-105 transition-all' key={idx}>
                <Link to={`/singleproductviewpage/${pro.id}`}>
                  <div className=''>
                    <img src={pro.img} className='w-[100%] max-md:w-[85%] m-auto' alt="" />
                  </div>
                </Link>

                <div className='flex flex-col justify-center items-center gap-1'>
                  <h4 className='max-md:text-[12px]'>{pro.name}</h4>
                  <small className='max-md:text-[8px] text-gray-500'>{pro.details}</small>
                  <div className='flex justify-center items-center gap-3'>
                    <small className='max-md:text-[9px] text-gray-500'><s>${pro.oldPrice}</s></small>
                    <p className='text-yellow-500 max-md:text-[10px] '>${pro.price}</p>
                  </div>
                  <button className='py-1 px-10 text-sm rounded-md bg-black text-white max-md:px-5 max-md:text-[12px]'
                    onClick={() => { dispatch(addtoCart(pro)) }}
                  >Add to cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>



        <div className='py-28 px-5 flex flex-wrap justify-center items-center gap-7 max-md:flex-col'>
          <div className='py-5 w-2/5 text-center bg-[#EFF3EA] max-md:w-[100%]'>
            <h2 className='text-lg'>Money Return Gurantee</h2>
            <small>Back gurantee under 30 days</small>
          </div>
          <div className=' py-5 w-2/5 text-center bg-[#EFF3EA] max-md:w-[100%]'>
            <h2 className='text-lg'>Free Shipping On Order $120</h2>
            <small>From shipping on all order</small>
          </div>

        </div>


        <div className='px-20 max-sm:px-5 pt-14 bg-[#D9DFC6]'>
          <div className='flex justify-center '>
            <div className='w-fit flex justify-center items-center border  border-[#EFF3EA] max-md:text-sm'>
              <button className=' focus:bg-[#EFF3EA]  py-2 px-4 '
                onClick={handlerfeatured}
              >Featured</button>
              <button className=' focus:bg-[#EFF3EA]  py-2 px-4'
                onClick={handlerbestselling}
              >Bestselling</button>
              <button className=' focus:bg-[#EFF3EA] py-2 px-4'
                onClick={handleronsale}
              >Onsale</button>
            </div>
          </div>
          <div className='py-14  flex justify-center items-center gap-7 flex-wrap'>
            {product.map((pro, idx) => (
              <ProductCard key={idx} name={pro.name} id={pro.id} img={pro.img} details={pro.details} old_price={pro.oldPrice} price={pro.price} pro={pro} />
            ))}
          </div>
        </div>


        <div className='px-20 py-20 max-md:px-7 max-sm:py-7'>
          <div>
            <h2 className='text-2xl font-medium'>Watch News</h2>
          </div>
          <div className='my-10 flex justify-center items-center gap-7 flex-wrap max-md:flex-col'>
            <div className="w-[28%] max-lg:w-[30%] max-md:w-[60%] max-sm:w-[90%] bg-[#EFF3EA] hover:scale-105  transition-all flex flex-col justify-start items-start  p-4">
              <div>
                <img src="assets/news-1.jpeg" className="w-full h-auto object-cover" alt="" />
              </div>
              <div className="mt-4 ">
                <h4 className="text-xl py-1 max-lg:text-[16px]">Timex Image Post</h4>
                <small className=' text-[11px]  max-lg:text-[10px] max-md:text-[10px]'>
                  By <span className="text-yellow-600">admin</span>/ 10 January 2024
                </small>
                <div className="mt-2">
                  <p className="text-sm max-lg:text-[12px] max-md:text-[10px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, unde.</p>
                  <small className='max-lg:text-[10px]'>Continue reading</small>
                </div>
              </div>
            </div>
            <div className="w-[28%] max-lg:w-[30%] max-md:w-[60%] max-sm:w-[90%] bg-[#EFF3EA] hover:scale-105   transition-all flex flex-col justify-start items-start   p-4">
              <div>
                <img src="assets/news-2.jpeg" className="w-full h-auto object-cover" alt="" />
              </div>
              <div className="mt-4 ">
                <h4 className="text-xl py-1 max-lg:text-[16px]">Guess Image Post</h4>
                <small className=' text-[11px]  max-lg:text-[10px] max-md:text-[10px]'>
                  By <span className="text-yellow-600">admin</span> / 05 February 2024
                </small>
                <div className="mt-2">
                  <p className="text-sm max-lg:text-[12px] max-md:text-[10px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, unde.</p>
                  <small className='max-lg:text-[10px]'>Continue reading</small>
                </div>
              </div>
            </div>
            <div className="w-[28%] max-lg:w-[30%] max-md:w-[60%] max-sm:w-[90%] bg-[#EFF3EA] hover:scale-105  transition-all flex flex-col justify-start items-start  p-4">
              <div>
                <img src="assets/news-3.jpeg" className="w-full h-auto object-cover " alt="" />
              </div>
              <div className="mt-4 ">
                <h4 className="text-xl py-1 max-lg:text-[16px]">Gc Image Post</h4>
                <small className=' text-[11px]  max-lg:text-[10px] max-md:text-[10px]'>
                  By <span className="text-yellow-600">admin</span> / 15 March 2024
                </small>
                <div className="mt-2">
                  <p className="text-sm max-lg:text-[12px] max-md:text-[10px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, unde.</p>
                  <small className='max-lg:text-[10px]'>Continue reading</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='flex items-center justify-center'>
          <img src="assets/bottom-poster-1.jpg" className='w-[75%] max-sm:w-fit' alt="" />
        </div>


        <div className='py-32 px-10 flex flex-col items-center justify-center gap-8 max-sm:px-5 '>
          <div className='text-center'>
            <h2 className='text-3xl pb-1 max-md:text-xl' >Subscribe for Newsletter</h2>
            <p className='text-gray-400 max-md:text-xs'>Get E-mail updates about our latest shop and special offers.</p>
          </div>
          <div className='flex flex-wrap items-center justify-center max-sm:gap-3 max-sm:flex-col '>
            <input className='w-96 py-2 px-5 bg-[#EFF3EA] border outline-none max-md:w-80 max-sm:text-sm'
              type="text" placeholder='Enter Email Address...' />
            <button type='submit' className='py-[7px] px-8 text-lg max-sm:text-sm bg-[#D9DFC6]  transition'>Subscribe</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Homepage
