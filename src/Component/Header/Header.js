import React from "react";
import classes from './Header.module.css';

const header = (props) => {

    return (
        <div className={classes.Header}>
            <h1>To-Do App</h1>
            <form onSubmit={props.addTask} className={classes.Elements}>
                <input value={props.crrItem.itemName} onChange={props.changed} className={classes.Input} type="text" placeholder={"Enter Task"}/>
                <button className={classes.Button}>ADD</button>
            </form>
        </div>
    );
};

export default header;