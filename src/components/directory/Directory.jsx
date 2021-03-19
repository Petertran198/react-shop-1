import React, {useState} from 'react'
import MenuItem from '../menu-item/MenuItem';
import './directory.scss'
export const Directory = () => {
    const [sections, setSections] = useState(
        [
            {
              title: 'Hats',
              imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
              id: 1,
              linkUrl: 'hats'
            },
            {
              title: 'Jackets',
              imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
              id: 2,
              linkUrl: ''
            },
            {
              title: 'Sneakers',
              imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
              id: 3,
              linkUrl: ''
            },
            {
              title: 'Womens',
              imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
              size: 'large',
              id: 4,
              linkUrl: ''
            },
            {
              title: 'Mens',
              imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
              size: 'large',
              id: 5,
              linkUrl: ''
            }
          ]
    );
    return (
        <div className="directory-menu">
            {
                sections.map( section =><MenuItem title={section.title}/> )
            }
        </div>
    )
}
export default Directory;