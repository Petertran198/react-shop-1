import React, { useState } from 'react';
import MenuItem from '../menu-item/MenuItem';
import './directory.scss';
import SECTION_LIST from './SectionData';
const Directory = () => {
    //SECTION_LIST is used to shorten code and not display the array of section objects, aka hats, mens, women
    const [sections, setSections] = useState(SECTION_LIST);
    return (
        <div className='directory-menu' onClick={console.log('hi')}>
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
