import React, { Component } from 'react';
import { observer } from 'mobx-react'
import Item from './Item';

@observer
class Market extends Component {
  addItem = (e) => {
    // let itemName = this.target.value
    if (e.which === 13) {
      this.props.store.addItem(e.target.value)
      e.target.value = ""
    }
  
  }
  render() {
    return (
      <div className="App">
        <input placeholder="enter item" type="text" onKeyDown={this.addItem} />
        {this.props.store.items.map(m => {
        return(  <Item store={this.props.store} item={m} key={m.name}/>)
        })}
      </div>
    );
  }
}

export default Market;
