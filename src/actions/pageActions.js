export const add = (text) => ({ type: 'ADD', payload: {text} });
export const change = (text) => ({ type: 'CHANGE', payload: {text} });
export const save = (id,text) => ({ type: 'SAVE', payload: {id, text} });
export const remove = (id) => ({ type: 'REMOVE', payload: {id} });
