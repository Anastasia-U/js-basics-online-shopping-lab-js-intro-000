var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var item = generateCartItem(item)
  getCart().push(item)
  return `${item.itemName} has been added to your cart.`
}

function viewCart() {
  return getCart().length === 0 ? "Your shopping cart is empty." : generateCartDescription()
}

function total() {
  var tot = 0;
  for (var i = 0; i < cart.length; i++) {
    tot += cart[i].itemPrice;
  }
  return tot;
}
