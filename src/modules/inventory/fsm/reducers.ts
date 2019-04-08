export default (state = {}, action: any) => {
  console.log('reducing');
  
  switch (action.type) {
   case 'SIMPLE_ACTION':
    return {
     result: action.payload
    }
   default:
    return state
  }
 }