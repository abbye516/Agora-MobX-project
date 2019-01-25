import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import Item from './Item';

@inject("inventory")
@observer
class Market extends Component {
  addItem = (e) => {
    // let itemName = this.target.value
    if (e.which === 13 && e.target.value !== "") {

      this.props.inventory.addItem(e.target.value)
      e.target.value = ""
    }
  
  }
  render() {
    console.log(this.props.inventory.numItems)
    return (
      <div className="App">
      <div>Total number of items: {this.props.inventory.numItems}</div>
        <input placeholder="enter item" type="text" onKeyDown={this.addItem} />
        {this.props.inventory.items.map(m => {
        return(  <Item store={this.props.inventory} item={m} key={m.name}/>)
        })}
      </div>
    );
  }
}

export default Market;
