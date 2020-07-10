import React, {Component} from 'react';
import classes from './App.module.css';
import Header from './Component/Header/Header';
import Main from './Component/Main/Main';

class App extends Component{
    state = {
        items: [],
        currentItem: {
            itemName: '',
            key: null
        }
    };

    onChangeHandler = (e) => {
        const newItem = {
            ...this.state.currentItem,
            itemName: e.target.value,
            key:new Date()
        };
        this.setState({
            currentItem: newItem
        });
    };

    onAddHandler = (e) => {
        e.preventDefault();
        const newItems = [...this.state.items, this.state.currentItem];
        this.setState({
            items: newItems,
            currentItem: {
                itemName: '',
                key: null
            }
        });
    }

    onRemoveHandler = (key) => {
        const newState = this.state.items.filter(item => {
            return item.key!==key;
        })
        this.setState({items: newState});
    };

    render() {
        return (
            <div className={classes.App}>
                <Header crrItem={this.state.currentItem} addTask={this.onAddHandler} changed={this.onChangeHandler} />
                <Main items={this.state.items} removed={(key) => this.onRemoveHandler(key)} />
            </div>
        );
    }
}

export default App;
