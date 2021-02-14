export const getAllItems = () => dispatch => {
    fetch('https://fakestoreapi.com/products')
    .then(
        data => data.json()
        ).then(
         items => dispatch({
            type:"GET_ALL_ITEMS",
            payload: items
         }));
}