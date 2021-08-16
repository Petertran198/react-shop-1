import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CollectionItem from '../../components/collection-item/CollectionItem';
import SHOP_DATA from '../shop/ShopData';
import './specificCategory.scss';
export default function SpecificCategory(props) {
    const { categoryURL } = useParams();
    useEffect(() => {
        setCategoryItems(
            SHOP_DATA.filter((category) => category.routeName == categoryURL)[0]
                ?.items || null
        );
    }, [categoryURL]);

    const [categoryItems, setCategoryItems] = useState(
        SHOP_DATA.filter((category) => category.routeName == categoryURL)[0]
            ?.items || null
    );

    if (!categoryItems) {
        return;
    }

    return (
        <>
            {
                <div className='flex-container'>
                    {categoryItems.map((item) => {
                        return (
                            <CollectionItem
                                key={item.id}
                                name={item.name}
                                imageUrl={item.imageUrl}
                                price={item.price}
                            />
                        );
                    })}
                </div>
            }
        </>
    );
}
