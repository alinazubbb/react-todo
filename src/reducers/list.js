const initialState = [];
export default function list(state = initialState, action) {
  switch (action.type) {
    case 'ADD':
      return state.concat({ id: action.payload.id, text: action.payload.text });
    case 'REMOVE':
      return state.filter(({ id }) => id !== action.payload.id);
    case 'SAVE':
      return state.map( curr => curr.id === action.payload.id ?
        { ...curr, text: action.payload.text } : curr );
    case 'INIT':
      return state.concat(action.payload);
    default:
      return state;
  }
}
