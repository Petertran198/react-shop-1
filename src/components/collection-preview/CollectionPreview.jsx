import React from 'react';

const CollectionPreview = (props) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'>Title</h1>
            <div className='preview'>
                {props.items
                    .filter((item, index) => index < 4)
                    .map((item) => {
                        return <div key={item.id}>{item.name}</div>;
                    })}
            </div>
        </div>
    );
};

export default CollectionPreview;
