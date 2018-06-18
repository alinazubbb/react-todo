export const getJson = () => dispatch => {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(jsonList => dispatch({type: 'GETJSON', payload: {jsonList}}));
};

