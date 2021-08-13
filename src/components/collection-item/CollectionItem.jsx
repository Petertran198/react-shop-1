import React from 'react';
import './collectionItem.scss';
const CollectionItem = (props) => {
    return (
        <div className='collection-item my-2'>
            <div
                className='image'
                style={{ backgroundImage: `url(${props.imageUrl})` }}
            />
            <div className='collection-footer'>
                <span className='name'>{props.name}</span>
                <span className='price'>{props.price}</span>
            </div>
        </div>
    );
};

export default CollectionItem;
