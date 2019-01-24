import { observable, action } from 'mobx'

class Item {
    @observable name
    @observable price = 0
    @observable quantity = 1
    constructor(name) {
        this.name = name
    }
}



class Inventory {
    @observable items = []
    @action
    addItem(name, price, quantity) {
        // increasing quant if item exists   
        let item = this.items.find(i => i.name === name)
        if (item) {
            item.quantity++
        }
        else{
            this.items.push(new Item(name, price, quantity))

        }

    }
    @action
    buyItem(name) {
        let item = this.items.find(i => i.name === name)
        item.quantity--
        if (item.quantity < 1) {
            let index = this.items.findIndex(i => i.name === name)
            this.items.splice(index, 1)
            // alert(`Sorry ${name} is out of stock`)
        }
    }
    @action
    changePrice(name, price) {
        console.log(price)
        let itemToUpdate = this.items.find(i => i.name === name)
        itemToUpdate.price = price
    }


}

let inventory = new Inventory()

// inventory.addItem("abby")
// inventory.addItem("abby")
// inventory.addItem("abby")
// inventory.addItem("abby")
// inventory.addItem("ethan")
// inventory.changePrice("abby", 10)
// inventory.buyItem("ethan")
// inventory.buyItem("ethan")
// inventory.addItem("abby")


export default inventory