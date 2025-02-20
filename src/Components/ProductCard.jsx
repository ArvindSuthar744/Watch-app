import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addtoCart } from '../Context-Api/cartSlice'

function ProductCard({ name, img, details, old_price, price, id ,pro}) {
 
    const dispatch = useDispatch()


const handleAddToCart = (pro) => {
    dispatch(addtoCart({ ...pro, quantity: 1 }));
  };

    return (
        <>

                <div className='w-48 text-center max-lg:w-44 max-md:w-36 bg-[#EFF3EA] p-2 rounded-xl hover:scale-105 transition-all'>
                <Link to={`/singleproductviewpage/${id}`}>
                    <div className=''>
                        <img src={img} className='w-[100%] max-md:w-[85%] m-auto' alt="" />
                    </div>
                </Link>
                <div className='flex flex-col justify-center items-center gap-1'>
                    <h4 className='max-md:text-[12px] text-black'>{name}</h4>
                    <small className='max-md:text-[8px] text-gray-500'>{details}</small>
                    <div className='flex justify-center items-center gap-3'>
                        <small className='max-md:text-[9px] text-gray-500'><s>${old_price}</s></small>
                        <p className='text-yellow-500 max-md:text-[10px] '>${price}</p>
                    </div>
                    <button className='py-1 px-10 text-sm rounded-md bg-black text-white max-md:px-5 max-md:text-[12px]'
                        onClick={() => {handleAddToCart(pro)}}
                    >Add to cart</button>
                </div>
            </div>

        </>
    )
}

export default ProductCard
