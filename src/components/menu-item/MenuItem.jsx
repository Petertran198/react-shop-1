import React from 'react';
import './menu-item.scss';
import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
    return (
        <div
            className={`${size} menu-item`}
            onClick={() => history.push(`${match.url}${linkUrl}`)}
        >
            <div
                style={{ backgroundImage: `url(${imageUrl})` }}
                className='background-image'
            />
            <div className='content'>
                <h1 className='title'>{title}</h1>
                <span className='title'>Shop Now</span>
            </div>
        </div>
    );
};

export default withRouter(MenuItem);
