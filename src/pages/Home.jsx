import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, fetchProvinces } from '../store/actions'
import ProductCard from '../components/ProductCard'

function Home () {
  const dispatch = useDispatch()
  const products = useSelector(state => state.productsData.products)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  useEffect(() => {
    dispatch(fetchProvinces())
  }, [dispatch])
  // console.log(products)
  return (
    <>
      <header className='bg-white shadow'>
        <div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
          <h1 className='text-3xl font-bold text-gray-900'>Home</h1>
        </div>
      </header>
      <main>
        <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
          {/* <!-- Replace with your content --> */}
          <ul className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {products?.map(product => (
              <ProductCard product={product} />
            ))}
          </ul>
          {/* <!-- /End replace --> */}
        </div>
      </main>
    </>
  )
}

export default Home
