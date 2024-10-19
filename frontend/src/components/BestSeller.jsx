/* eslint-disable no-unused-vars */
import React, {
  useContext,
  useEffect,
  useState,
} from 'react';
import Title from "./Title";

import { ShopContext } from '../context/ShopContext';

const BestSeller = () => {

  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    // Fetching best selling products
    const bestProduct = products.filter((item) => (item.bestSeller));
    setBestSeller(bestProduct.slice(0,5));
  }, [products])


  return (
    <div className="my-10 ">
      <div className="py-8 text-3xl text-center ">
        <Title text1={'BEST'} text2={'SELLERS'} />
        <p className="w-3/4 m-auto text-xs text-gray-600 sm:text-sm md:text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </div>

      

    </div>
  )
}

export default BestSeller