const initialState = {

    data: [],
    isloading: false,
    error: null
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case 'UserSUC':
    return { ...state, isloading: false, data:payload }

    case 'UserFail':
        return { ...state, isloading: false, er:payload }

        case 'UserRequest':
    return { ...state, isloading: true }

  default:
    return state
  }
}
