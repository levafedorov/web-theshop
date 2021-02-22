
export function getSomeItems(category="", sort="?sort=asc", page=1){

    let url = `https://fakestoreapi.com/products${category}${sort}&limit=${6 * page}`;
    return dispatch => {
        fetch(url)
        .then(
            data => data.json()
            ).then(
             items => dispatch({
                type:"GET_BIT_OF_ITEMS",
                payload: items
             }))
             .catch(err => {
               console.error(err.message);
               throw err;
              });
    }
}


export const getItem = (id) => dispatch => {
  fetch(`https://fakestoreapi.com/products/${id}`)
  .then(
      data => data.json()
      ).then(
       item => dispatch({
          type:"ITEM_GET",
          payload: item
       }))
       .catch(err => {
        console.error(err.message);
        throw err;
       });
}


  export const unLogged = () => {
  return {
          type: "USER_LOGOUT",
      }
  }

 
  export const login = (data) => {
    return {
            type: "USER_LOGIN",
            payload: data
        }
    }


export const clearItem = () => {
  return {
    type: "ITEM_CLEAR",
  }
}



export const changeCategory = (category) => {
     return {
       type: "CHANGE_CATEGORY",
       payload: category
     }
}


export const changeSort = (sort) => {
  return {
    type: "CHANGE_SORT",
    payload: sort
  }
}


export const changePage = (page) => {
  return {
    type: "CHANGE_PAGE",
    payload: page
  }
}

export const clearAllItems = () => {
  return {
    type: "CLEAR_ALL_ITEMS",
  }
}



export const setLoading = () => {
  return {
    type: "SET_LOADING",
  }
}


export const regToggler = () => {
  return {
    type: "REG_OPEN_CLOSE"
   }
}


export const addItemToCart = (item) => {
   return {
     type: "ADD_ITEMS_TO_CART",
     payload: item 
   }
}


export const clearCart = () => {
  return {
    type: "CLEAR_CART",
  }
}