const initialState = {
  cart: []
}

function reducer (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case 'CART/ADDITEM':
      return { ...state, cart: [...state.cart, payload] }
    case 'CART/REDUCEQTY':
      const reducedState = JSON.parse(JSON.stringify(state))
      for (let i = 0; i < reducedState.cart.length; i++) {
        if (reducedState.cart[i].id === payload) {
          reducedState.cart[i].quantity--
        }
      }
      return { ...state, cart: reducedState.cart }
    case 'CART/INCREASEQTY':
      const increasedState = JSON.parse(JSON.stringify(state))
      for (let i = 0; i < increasedState.cart.length; i++) {
        if (+increasedState.cart[i].id === +payload) {
          increasedState.cart[i].quantity++
        }
      }
      return { ...state, cart: increasedState.cart }
    case 'CART/EMPTYCART':
      return { ...state, cart: [] }
    default:
      return state
  }
}

export default reducer
