import React from 'react'
import svgCart from '../assets/cart-512.png'

function ProductCard ({ product }) {
  return (
    <li className='col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200'>
      <div className='flex-1 flex flex-col p-8'>
        <img
          className='w-64 h-64'
          src={product?.image_url}
          alt={product?.name}
        />
        <h3 className='mt-6 text-gray-900 text-sm font-medium'>
          {product?.name}
        </h3>
        <dl className='mt-1 flex-grow flex flex-col justify-between'>
          <dd className='text-gray-500 text-sm'>
            {new Intl.NumberFormat('id-ID', {
              style: 'currency',
              currency: 'IDR'
            }).format(product?.price)}
          </dd>
          <dd className='mt-3'>
            <span className='px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full'>
              Stock: {product?.stock}
            </span>
          </dd>
        </dl>
      </div>
      <div>
        <div className='-mt-px flex divide-x divide-gray-200'>
          <div className='w-0 flex-1 flex'>
            <button class='relative -mr-px w-0 flex-1 inline-flex items-center bg-blue-700 hover:bg-blue-500 justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500'>
              <img className='5 h-5' src={svgCart} alt='carticon' />
              <span class='ml-3 text-white'>Add To Cart</span>
            </button>
          </div>
        </div>
      </div>
    </li>
  )
}

export default ProductCard
