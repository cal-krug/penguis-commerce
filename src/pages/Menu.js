import React from 'react';
// importing variable with brackets
import { MenuList } from "../helpers/MenuList";

function Menu() {
    return (
        <div className="menu">
            <h1 className="menuTitle">Our Menu</h1>
            <div className="menuList">
                {MenuList.map((menuItem, key) => {
                return <div> {menuItem.name} </div>;
            })}
            </div>
        </div>
    )
}

export default Menu;
