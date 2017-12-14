products = 
  [
    {"product" : { "name" : "pipe", "sn" : "burger" }},
    {"product" : { "name" : "pipe", "sn" : "chicken" }},
    {"product" : { "name" : "pipe", "sn" : "pizza" }}
  ];

function modify(val){
for(var i = 0, numproducts = products.length; i < numproducts; i++)
{
var qty = document.counter.product.value;
var new_qty = qty == val;
document.getElementById('product').value = new_qty;
  if(products[i].product.sn == userInput)
  {
    return products[i].product.sn;
  }
}
  
console.log(modify());



//DWA

var el = document.getElementById('product');

el.addEventListener('keyup', function(event) {
  makeSomething(event.currentTarget.value);
});

function makeSomething(val){
    console.log(val);
}
