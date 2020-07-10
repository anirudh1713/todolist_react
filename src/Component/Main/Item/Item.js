import React from "react";
import classes from './Item.module.css';

const item = (props) => {
    return (
        <div className={classes.Item}>
            <h4 className={classes.itemName}>{props.itemName}</h4>
            <button onClick={props.removed} className={classes.Button}>Delete</button>
        </div>
    );
};

export default item;