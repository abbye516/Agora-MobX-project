import React, { Component } from 'react';
import { observer } from 'mobx-react'

@observer
class Item extends Component {
  buyItem = (e) => {
    console.log(e.target.value)
    this.props.store.buyItem(e.target.value)
  }
  updatePrice = (e) => {
    let name = e.target.getAttribute("name")
    let price = prompt('Please enter updated price')
    this.props.store.changePrice(name, price)
    console.log(name)

  }
  render() {
    let item = this.props.item
    return (
      <div className="items">
        <li onDoubleClick={this.updatePrice} name={item.name}>
          "{item.quantity} {item.name} available at ${item.price} per item"
               <button onClick={this.buyItem} value={item.name}>Buy me!</button>
        </li>
      </div>
    );
  }
}

export default Item;
