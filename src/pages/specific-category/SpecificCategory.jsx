import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
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
        return (
            <div class='container'>
                <div
                    class='row d-flex align-items-center'
                    style={{ height: '400px' }}
                >
                    <div class='col-md-12'>
                        <div class='error-template'>
                            <h1 className='text-danger'>Oops!</h1>
                            <h2>404 Not Found :(</h2>
                            <div class='error-details'>
                                Sorry, an error has occured, Requested page not
                                found!
                            </div>
                            <div class='error-actions'>
                                <Link to='./' className='link-primary'>
                                    <span class='glyphicon glyphicon-home'></span>
                                    Take Me Home{' '}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
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
