const actionType = {
  // UI Actions
  OPEN_ASIDE: "OPEN_ASIDE",
  CLOSE_ASIDE: "CLOSE_ASIDE",

  // Product Actions
  SET_PRODUCTS_DATA: "SET_PRODUCTS_DATA",
  SET_PRODUCT_DATA: "SET_PRODUCT_DATA",
  PRODUCT_DETAILS_FAIL: "PRODUCT_DETAILS_FAIL",
  PRODUCT_DETAILS_REQUEST: "PRODUCT_DETAILS_REQUEST",
  PRODUCT_DETAILS_SUCCESS: "PRODUCT_DETAILS_SUCCESS",
  PRODUCT_LIST_FAIL: "PRODUCT_LIST_FAIL",
  PRODUCT_LIST_REQUEST: "PRODUCT_LIST_REQUEST",
  PRODUCT_LIST_SUCCESS: "PRODUCT_LIST_SUCCESS",

  //Cart Actions
  CART_ADD_ITEM: "CART_ADD_ITEM",
  CART_REMOVE_ITEM: "CART_REMOVE_ITEM",
  CART_INIT_ITEMS: "CART_INIT_ITEMS",

  //SignIn Actions
  USER_SIGNIN_REQUEST: 'USER_SIGNIN_REQUEST',
  USER_SIGNIN_SUCCESS: 'USER_SIGNIN_SUCCESS',
  USER_SIGNIN_FAIL: 'USER_SIGNIN_FAIL',

  //SignUp Actions
  USER_REGISTER_REQUEST: 'USER_REGISTER_REQUEST',
  USER_REGISTER_SUCCESS: 'USER_REGISTER_SUCCESS',
  USER_REGISTER_FAIL: 'USER_REGISTER_FAIL',
};
export default actionType;

