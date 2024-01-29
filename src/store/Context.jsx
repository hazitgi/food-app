import { createContext, useReducer } from "react";

const cart = localStorage.getItem("cart");
const cartData = cart ? JSON.parse(cart) : [];
const user = localStorage.getItem("user") || "";
const isLoggedIn = user ? true : false;

const initialState = {
  user: user,
  loggedIn: isLoggedIn,
  cart: cartData,
  cartCount: cartData?.length || 0,
  title: "",
};

const appReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOGIN":
      return {
        ...state,
        user: action.payload,
        loggedIn: true,
      };
    case "SET_CART":
      return {
        ...state,
        cart: action.payload,
      };
    case "SET_CART_COUNT":
      return {
        ...state,
        cartCount: action.payload,
      };
    case "LOG_OUT": {
      return { ...state, loggedIn: false, user: "" };
    }
    case "SET_TITLE": {
      return {
        ...state,
        title: action.payload,
      };
    }
    default:
      return state;
  }
};
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch, }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
