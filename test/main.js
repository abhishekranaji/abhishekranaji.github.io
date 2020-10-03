var inventory = {"pencil":10,"eraser":5,"sharpner":8}

function increment(object, amount) {
    inventory[object] = inventory[object]+amount;
}

function decrement(object, amount) {
    inventory[object] = inventory[object]-amount;
}

function add_items_to_inventory(object, amount) {
    if (inventory[object] === undefined) {
        inventory[object] = amount;
    } else {
        inventory[object] = inventory[object] + amount;
    }
}

function butt_click() {
    var new_item = document.getElementsByClassName("new-item")[0].value;
    var amount = document.getElementsByClassName("amount")[0].value;
    amount = parseInt(amount)
    add_items_to_inventory(new_item, amount);
    document.getElementsByClassName("inventory")[0].innerHTML = JSON.stringify(inventory);
}

increment("pencil", 10);
decrement("eraser", 5)
add_items_to_inventory("ball pen", 6);
console.log(inventory)