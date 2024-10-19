/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext } from 'react';

import { products } from '../assets/assets';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

  const currency = '$';
  const delivery_fee = 10;

  const value = {
    // Shop related state and methods
    products, currency, delivery_fee

  }

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  )
}


export default ShopContextProvider;