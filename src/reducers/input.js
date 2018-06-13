export default function input(state = '', action) {
  switch (action.type) {
    case 'CHANGE':{
      return action.payload.text;
    }
    default:
      return state;
  }
}