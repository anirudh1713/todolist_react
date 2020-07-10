import React from "react";
import Item from './Item/Item';

const main = (props) => {
    const items = props.items.map(item => {
        return <Item key={item.key} itemName={item.itemName} removed={() => props.removed(item.key)} />
    });

    return (
        <div>
            {items}
        </div>
    );
};

export default main;
