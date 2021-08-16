import React, { useState } from 'react';
import './collectionItem.scss';
const CollectionItem = (props) => {
    const [isShown, setIsShown] = useState(false);

    return (
        <div
            className={`collection-item my-2 ${
                isShown && 'selectedItem img-thumbnail p-2'
            }`}
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
        >
            <div className='h-100 w-100 img-container'>
                <div
                    className='image background-image'
                    style={{ backgroundImage: `url(${props.imageUrl})` }}
                />
            </div>

            <div className='collection-footer'>
                <span className='name'>{props.name}</span>
                <span className='price'>{props.price}</span>
            </div>
        </div>
    );
};

export default CollectionItem;
