const initialState = {
  products: []
}

function reducer (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case 'PRODUCTS/SETPRODUCTS':
      return { ...state, products: payload }
    default:
      return state
  }
}

export default reducer
