import React, { useState } from 'react';
import CollectionPreview from '../../components/collection-preview/CollectionPreview';
import SHOP_DATA from './ShopData';

const ShopPage = () => {
    // holds the collection array to clean up code and make page smaller
    const [categoryItems, setCategoryItems] = useState(SHOP_DATA);
    return (
        <div className='shop-page'>
            {categoryItems.map((categoryItem) => {
                return (
                    <CollectionPreview
                        key={categoryItem.id}
                        title='random'
                        items={categoryItem.items}
                    />
                );
            })}
        </div>
    );
};

export default ShopPage;
