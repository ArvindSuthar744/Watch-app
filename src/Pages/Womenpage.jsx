import React, { useState } from 'react'
import { products } from '../Context-Api/products.js';
import ProductCard from '../Components/ProductCard.jsx'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Womenpage() {
    
    // const pro = useSelector(state => state.cart.products)
    // console.log(pro);
    const Womenproducts = products.filter((value) => value.gender === "Female")
    const [product] = useState(Womenproducts);


    return (
        <>
            <div className='pt-16'>
            <div className='flex flex-col items-center justify-center h-48 bg-[#EFF3EA] text-black max-md:h-36'>
                    <h1 className='text-lg max-md:text-sm'>Women Products</h1>
                    <p className='text-sm max-md:text-[10px]'>home &gt; women</p>
             </div>

                    <div className='py-16 px-14 flex justify-center items-center gap-5 flex-wrap max-md:px-5 '>
                        {product.map((pro, idx) => (
                            <ProductCard key={idx} name={pro.name} id={pro.id} img={pro.img} details={pro.details} old_price={pro.oldPrice} price={pro.price} />
                        ))}
                    </div>
            </div>
        </>
    )
}

export default Womenpage
