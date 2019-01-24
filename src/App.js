import React, { Component } from 'react';
import './App.css';
import { observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools'; 
import Market from './Components/Market';

@observer
class App extends Component {
  render() {
    // console.log(this.props.store.items[0].price)
    return (
      <div className="App">
        <DevTools />
        {/* {this.props.store.items.map(item=>{
          return(
            <div>{item.name} Price:{item.price} Quantity:{item.quantity}</div>
          )
        })} */}
        <Market store={this.props.store} />
      </div>
    );
  }
}

export default App;
