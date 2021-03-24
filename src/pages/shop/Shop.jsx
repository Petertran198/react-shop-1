import React, { useState } from 'react';
import SHOP_DATA from './ShopData';

const Shop = () => {
    // holds the collection array to clean up code and make page smaller
    const [collection, setCollection] = useState(SHOP_DATA);
    return <div></div>;
};

export default Shop;
