import todos from '../todos'

const initialState = todos;

export default function list(state = initialState, action) {
  switch (action.type) {
    case 'ADD':
      return [ ...state, { id: new Date().getTime(), text: action.payload.text } ];
    case 'REMOVE':
      return state.filter(function(el){ return el.id !== action.payload.id; });
    case 'SAVE':
      return state.map(function(curr){
        if(curr.id === action.payload.id){
          curr.text = action.payload.text;
        }
        return curr;
      });
    default:
      return state;
  }
}