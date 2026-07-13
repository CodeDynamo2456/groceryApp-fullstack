import React from 'react'
import ProductCart from './ProductCart'

const BestSeller = () => {
  return (
    <div className='mt-16'>
        <p className='text-2xl md:text-3xl font-medium'>Best Seller</p>
        <div>
            <ProductCart></ProductCart>
        </div>
    </div>
  )
}

export default BestSeller