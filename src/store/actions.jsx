import axios from '../configs/axios'

export function setProducts (payload) {
  return dispatch => {
    dispatch({ type: 'PRODUCTS/SETPRODUCTS', payload })
  }
}

export function addCart (payload) {
  return dispatch => {
    dispatch({ type: 'CART/ADDITEM', payload })
  }
}

export function reduceQty (payload) {
  return dispatch => {
    dispatch({ type: 'CART/REDUCEQTY', payload })
  }
}

export function increaseQty (payload) {
  return dispatch => {
    dispatch({ type: 'CART/INCREASEQTY', payload })
  }
}

export function emptyCart () {
  return dispatch => {
    dispatch({ type: 'CART/EMPTYCART' })
  }
}

export function setProvince (payload) {
  return dispatch => {
    dispatch({ type: 'PROVINCE/SETPROVINCE', payload })
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

export function fetchProvinces () {
  return async dispatch => {
    try {
      const res = await fetch(
        'https://dev.farizdotid.com/api/daerahindonesia/provinsi'
      )
      const data = await res.json()
      dispatch(setProvince(data.provinsi))
    } catch (err) {
      console.log(err)
    }
  }
}
