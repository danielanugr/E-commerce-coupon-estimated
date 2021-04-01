import axios from '../configs/axios'

export function setProducts (payload) {
  return dispatch => {
    dispatch({ type: 'PRODUCTS/SETPRODUCTS', payload })
  }
}

export function fetchProducts () {
  return async dispatch => {
    try {
      const res = await axios.get('/products')
      // console.log(res.data)
      dispatch(setProducts(res.data))
    } catch (err) {
      console.log(err)
    }
  }
}
