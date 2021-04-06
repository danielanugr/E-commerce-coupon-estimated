const initialState = {
  provinces: []
}

function reducer (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case 'PROVINCE/SETPROVINCE':
      return { ...state, provinces: payload }
    default:
      return state
  }
}

export default reducer
