import React, {useState} from 'react'
import useSectionList from './useSectionList';
import MenuItem from '../menu-item/MenuItem';
import './directory.scss'
export const Directory = () => {
    //use custom hook to shorten code and not display the array of section objects, aka hats, mens, women
    const [sections, setSections] = useSectionList();
    
    return (
        <div className="directory-menu">
            {
                sections.map( section =><MenuItem title={section.title}/> )
            }
        </div>
    )
}
export default Directory;