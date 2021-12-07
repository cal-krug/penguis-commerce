import React from 'react';
// importing variable with brackets
import { MenuList } from "../helpers/MenuList";
import MenuItem from '../components/MenuItem';
import '../styles/Menu.css'

import { Link } from 'react-router-dom';
import ProductPage from './ProductPage';

function Menu() {
    return (
        <div className="menu">
            <h1 className="menuTitle">The Drip</h1>
            <div className="menuList">
                {MenuList.map((menuItem, key) => {
                return (
                    /*  PROB | this is a link to the product page, with generated link and info
                    https://www.better.dev/route-parameters-with-react-router */
                    <Link to="/shop/itemName" element={ProductPage}>
                        <MenuItem
                        key={key}
                        image={menuItem.image}
                        name={menuItem.name}
                        price={menuItem.price}
                        />
                    </Link>
                    );
                })}
            </div>
        </div>
    )
}

export default Menu;
