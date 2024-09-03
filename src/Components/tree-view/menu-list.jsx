
import React from 'react'
import MenuItem from './menu-item'

const MenuList = ({list = []}) => {
  return (
    <div >
      <ul className='menu-list-container' >
        {
            list && list.length ? 
            list.map((listItem) => <MenuItem item={listItem} /> )
            :null
        }
      </ul>
    </div>
  )
}

export default MenuList