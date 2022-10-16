const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    case "CHANGE_CART_QTY":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      };
    default:
      return state;
  }
};
const productReducer = (productState, productAction) => {
  switch (productAction.type) {
    case "SORT_BY_PRICE":
      return { ...productState, sort: productAction.payload };
    case "FILTER_BY_STOCK":
      return { ...productState, byStock: !productState.byStock };
    case "FILTER_BY_DELIVERY":
      return { ...productState, byFastDelivery: !productState.byFastDelivery };
    case "FILTER_BY_RATING":
      return { ...productState, byRating: productAction.payload };
    case "FILTER_BY_SEARCH":
      return { ...productState, searchQuery: productAction.payload };
    case "CLEAR_FILTER":
      return {
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        searchQuery: "",
      };
    default:
      return productState;
  }
};
export { cartReducer };
export { productReducer };
