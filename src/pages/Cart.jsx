import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { reduceQty, increaseQty } from '../store/actions'
import { useHistory } from 'react-router-dom'

function Cart () {
  const cart = useSelector(state => state.userData.cart)
  const dispatch = useDispatch()
  const [total, setTotal] = useState(0)
  const [voucher, setVoucher] = useState('')
  const history = useHistory()

  const voucherCode = [
    { name: 'khilafu20', value: 0.2 },
    { name: 'khilafu15', value: 0.15 },
    { name: 'khilafu25', value: 0.25 }
  ]

  function applyVoucher (e) {
    const input = e.target.value
    setVoucher(input)
  }

  function handleSubmit (e) {
    e.preventDefault()
    let totalPrice = 0
    cart.forEach(item => {
      totalPrice += +item.price * +item.quantity
    })
    setTotal(totalPrice)
    for (let i = 0; i < voucherCode.length; i++) {
      if (voucherCode[i].name === voucher) {
        setTotal(total * (1 - voucherCode[i].value))
        break
      } else {
        let totalPrice = 0
        cart.forEach(item => {
          totalPrice += +item.price * +item.quantity
        })
        setTotal(totalPrice)
      }
    }
  }
  function reduce (id) {
    dispatch(reduceQty(id))
  }

  function increase (id) {
    dispatch(increaseQty(id))
  }

  function checkout () {
    return history.push({ pathname: '/checkout', state: { total } })
  }

  function removeItem (id) {}

  useEffect(() => {
    let totalPrice = 0
    cart.forEach(item => {
      totalPrice += +item.price * +item.quantity
    })
    setTotal(totalPrice)
  }, [cart])

  return (
    <>
      <header className='bg-white shadow'>
        <div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
          <h1 className='text-3xl font-bold text-gray-900'>Cart</h1>
        </div>
      </header>
      <main>
        <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
          {/* <!-- Replace with your content --> */}
          <div className='flex flex-col'>
            <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
              <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
                <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
                  <table className='min-w-full divide-y divide-gray-200'>
                    <thead className='bg-gray-50'>
                      <tr>
                        <th
                          scope='col'
                          className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-center'
                        >
                          Item Name
                        </th>
                        <th
                          scope='col'
                          className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-center'
                        >
                          Price
                        </th>
                        <th
                          scope='col'
                          className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-center'
                        >
                          Quantity
                        </th>
                        <th scope='col' className='relative px-6 py-3'>
                          <span className='sr-only'>Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className='bg-white divide-y divide-gray-200'>
                      {cart?.map(item => (
                        <>
                          <tr>
                            <td className='px-6 py-4 whitespace-nowrap'>
                              <div className='flex items-center'>
                                <div className='flex-shrink-0 z-10 w-20'>
                                  <img
                                    className='h-20 w-20 rounded-md'
                                    src={item?.image_url}
                                    alt={item?.name}
                                  />
                                </div>
                                <div className='ml-4'>
                                  <div className='text-sm font-medium text-gray-900'>
                                    {item?.name}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className='px-6 py-4 whitespace-nowrap'>
                              <div className='text-sm text-gray-900 text-center'>
                                {new Intl.NumberFormat('id-ID', {
                                  style: 'currency',
                                  currency: 'IDR'
                                }).format(item?.price)}
                              </div>
                            </td>
                            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center'>
                              <button onClick={() => reduce(item?.id)}>
                                -
                              </button>
                              {item?.quantity}
                              <button onClick={() => increase(item?.id)}>
                                +
                              </button>
                            </td>
                            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                              <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                                <a
                                  href={`/remove/${item?.id}`}
                                  className='text-indigo-600 hover:text-indigo-900'
                                  onClick={() => removeItem(item?.id)}
                                >
                                  remove item
                                </a>
                              </td>
                            </td>
                          </tr>
                        </>
                      ))}
                      <tr>
                        <td className='px-6 py-4 whitespace-nowrap'>
                          <div className='flex items-center'>
                            <div className='flex-shrink-0 z-10 w-20'></div>
                          </div>
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap'>
                          <div className='text-sm text-gray-900 text-center'></div>
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center'></td>
                        <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                          <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                            <div className='text-sm font-medium text-gray-900 text-center'>
                              {new Intl.NumberFormat('id-ID', {
                                style: 'currency',
                                currency: 'IDR'
                              }).format(total)}
                            </div>
                          </td>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className='flex flex-row-reverse mt-2'>
                  <button
                    className='bg-blue-700 hover:bg-blue-500 justify-center py-4 px-10 text-sm text-white font-medium border border-transparent rounded-lg hover:text-white text'
                    onClick={checkout}
                  >
                    Checkout
                  </button>
                  <form action='' onSubmit={handleSubmit}>
                    <div className='mt-2 mr-4'>
                      <input
                        type='text'
                        name='voucher'
                        id='voucher'
                        className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
                        placeholder='Input Voucher Code'
                        onChange={e => applyVoucher(e)}
                      />
                      <button className='sr-only'></button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- /End replace --> */}
        </div>
      </main>
    </>
  )
}

export default Cart
