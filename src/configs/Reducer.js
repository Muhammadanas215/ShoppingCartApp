const intialState = {
  cartItem: [],
};

const reducer = (state = intialState, action) => {
  let cart = state.cartItem;
  switch (action.type) {
    case 'ADD_TO_CART': {
      cart.push(action.payload);
      console.warn(action.payload);
      alert('Item Added');
      const {payload} = action;
      const item = cart.find(cart => cart.id === payload.id).id;
      if (item) {
        return {
          ...state,
          cartItem: state.cartItem.map(item =>
            item.id === payload.id ? 
            {
              ...item,
              Quantity: (item.Quantity + 1),
            }
            : item,
            ),
          };
        }
        return {...state};
      }
      case 'REMOVE_FROM_CART':
        return state.filter(cartItem => cartItem !== action.payload);
      }
  return state;
};

export default reducer;
