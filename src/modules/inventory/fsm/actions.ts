export const simpleAction = () => (dispatch: any) => {
  dispatch({
    type: 'SIMPLE_ACTION',
    payload: 'result_of_simple_action'
  })
}

export const anotherSimpleAction = (dispatch: any) => {
  dispatch({
    type: 'ANOTHER_SIMPLE_ACTION',
    payload: 'thing'
  });
}