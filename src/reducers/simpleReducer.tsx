const simpleReducer = (state = {}, action: any) => {
  switch (action.type) {
    case 'SIMPLE_ACTION':
      return {
        result: action.payload
      }
    default:
      return state
  }
}

export default simpleReducer;