let quantity = 0
let qty = 0
let subTotal = 0
let shippingFee = 0
let total = 0
let checkQty = 0
let checkTotal = 0

function add(){
  quantity = quantity + 1
  qty = qty + 1
  subTotal = subTotal + 52000
  total = shippingFee + subTotal

  document.getElementById('quantity').innerHTML = quantity
  document.getElementById('qty').innerHTML = qty
  document.getElementById('subTotal').innerHTML = subTotal
  document.getElementById('total').innerHTML = total

  if(quantity == 11){
    window.alert("Can't add more higher than 10 stocks.")
    quantity = 10
    qty = 10
    subTotal = 520000
    total = 520050

    document.getElementById('quantity').innerHTML = quantity
    document.getElementById('qty').innerHTML = qty
    document.getElementById('subTotal').innerHTML = subTotal
    document.getElementById('total').innerHTML = total
  }
}

function sub() {   
  quantity = quantity - 1;
  qty = qty - 1;
  subTotal = subTotal - 52000;
  total = total - 52000;
  
  document.getElementById('quantity').innerHTML = quantity;
  document.getElementById('qty').innerHTML = qty;
  document.getElementById('subTotal').innerHTML = subTotal;
  document.getElementById('total').innerHTML = total;

  if (quantity <= 0) {
      alert('Negative, please proceed to add quantity!');
      quantity = 1;
      qty = 1;
      subTotal = 52000;
      total = 52050;

      document.getElementById('quantity').innerHTML = quantity;
      document.getElementById('qty').innerHTML = qty;
      document.getElementById('subTotal').innerHTML = subTotal;
      document.getElementById('total').innerHTML = total;
  }
}

function pDetails(){
  window.location.href ="/product-details.html"
}