const initialState = [];

export default function jsonList(state = initialState, action) {
  switch (action.type) {
    case 'GETJSON': {
      return state.concat(action.payload.jsonList);
    }
    default: {
      return state;
    }
  }
}
