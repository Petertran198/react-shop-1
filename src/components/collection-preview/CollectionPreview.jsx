import React from 'react';
import CollectionItem from '../collection-item/CollectionItem';
import './collectionPreview.scss';
const CollectionPreview = (props) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{props.title}</h1>
            <div className='preview'>
                {props.items
                    .filter((item, index) => index < 4)
                    .map((item) => {
                        return (
                            <CollectionItem
                                itemName={item.name}
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                imageUrl={item.imageUrl}
                                price={item.price}
                            />
                        );
                    })}
            </div>
        </div>
    );
};

export default CollectionPreview;
