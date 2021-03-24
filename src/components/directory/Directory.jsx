import React from 'react';
import useSectionList from './useSectionList';
import MenuItem from '../menu-item/MenuItem';
import './directory.scss';
const Directory = () => {
    //use custom hook to shorten code and not display the array of section objects, aka hats, mens, women
    const [sections, setSections] = useSectionList();
    return (
        <div className='directory-menu'>
            {sections.map((section) => (
                <MenuItem
                    key={section.id}
                    title={section.title}
                    imageUrl={section.imageUrl}
                    size={section.size}
                    linkUrl={section.linkUrl}
                />
            ))}
        </div>
    );
};
export default Directory;
