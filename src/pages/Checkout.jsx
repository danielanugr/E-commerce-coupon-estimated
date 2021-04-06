import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProvinces, emptyCart } from '../store/actions'
import { useHistory } from 'react-router-dom'

function Checkout (props) {
  const provinces = useSelector(state => state.locationData.provinces)
  const dispatch = useDispatch()
  const [formValue, setFormValue] = useState({
    name: '',
    address: '',
    province: 0
  })

  const history = useHistory()

  function handleChange (e) {
    const newValue = {
      ...formValue,
      [e.target.id]: e.target.value
    }
    setFormValue(newValue)
    console.log(formValue)
  }

  const { total } = props.location.state

  function checkout (e) {
    e.preventDefault()
    dispatch(emptyCart())
    history.push('/')
  }

  useEffect(() => {
    dispatch(fetchProvinces())
  }, [dispatch])

  return (
    <>
      <header className='bg-white shadow'>
        <div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
          <h1 className='text-3xl font-bold text-gray-900'>Checkout</h1>
        </div>
      </header>
      <main>
        <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
          <form
            className='space-y-8 divide-y divide-gray-200'
            onSubmit={checkout}
          >
            <div className='space-y-8 divide-y divide-gray-200 sm:space-y-5'>
              <div>
                <div className='mt-6 sm:mt-5 space-y-6 sm:space-y-5'>
                  <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5'>
                    <label
                      for='name'
                      className='block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2'
                    >
                      Name
                    </label>
                    <div className='mt-1 sm:mt-0 sm:col-span-2'>
                      <div className='max-w-lg flex rounded-md shadow-sm'>
                        <input
                          type='text'
                          name='name'
                          id='name'
                          autocomplete='name'
                          className='flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300'
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5'>
                  <label
                    for='address'
                    className='block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2'
                  >
                    Address
                  </label>
                  <div className='mt-1 sm:mt-0 sm:col-span-2'>
                    <textarea
                      id='address'
                      name='address'
                      rows='3'
                      className='max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md'
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
                <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5'>
                  <label
                    for='province'
                    className='block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2'
                  >
                    Province
                  </label>
                  <div className='mt-1 sm:mt-0 sm:col-span-2'>
                    <select
                      id='province'
                      name='province'
                      autocomplete='province'
                      className='max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md'
                      onChange={handleChange}
                    >
                      {provinces?.map(province => (
                        <option value={province.id}>{province.nama}</option>
                      ))}
                    </select>
                    <p className='mt-2 text-sm text-gray-500'>
                      Estimated arrival:{' '}
                      {+formValue.province === 31
                        ? '1 - 2 days'
                        : +formValue.province === 32 ||
                          +formValue.province === 33 ||
                          +formValue.province === 34 ||
                          +formValue.province === 35 ||
                          +formValue.province === 36
                        ? '3 - 4 days'
                        : !formValue.province
                        ? '-'
                        : '5-7 days'}
                    </p>
                  </div>
                </div>
                <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5'>
                  <label
                    for='total'
                    className='block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2'
                  >
                    Total
                  </label>
                  <div className='block'>
                    <h3 className='text-lg leading-6 font-medium text-gray-900'>
                      {new Intl.NumberFormat('id-ID', {
                        style: 'currency',
                        currency: 'IDR'
                      }).format(total)}
                    </h3>
                  </div>
                </div>
                <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5'>
                  <label
                    for='total'
                    className='block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2'
                  ></label>
                  <div className='flex flex-row justify-center'>
                    <button className='bg-blue-700 hover:bg-blue-500 justify-center py-4 px-10 text-sm text-white font-medium border border-transparent rounded-lg hover:text-white text'>
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  )
}

export default Checkout
