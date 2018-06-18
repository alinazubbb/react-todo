function act(type, props, dispatch, getState){
  dispatch({ type: type, payload: props })
  localStorage.setItem('todos', JSON.stringify(getState()))
}

export const remove = (id) => (dispatch, getState) => act('REMOVE', {id:id}, dispatch, getState);
export const change = (text) => (dispatch, getState) => act('CHANGE', {text:text}, dispatch, getState);
export const add = (id,text) => (dispatch, getState) => act('ADD', {id:id, text:text}, dispatch, getState);
export const save = (id,text) => (dispatch, getState) => act('SAVE', {id:id, text:text}, dispatch, getState);

