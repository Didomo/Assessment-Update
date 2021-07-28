let products = [
    {name:"flower1", image:"a.jpg", price:2000},
    {name:"flower2", image:"b.jpg", price:1500}
    
];

let cart = []
let total = 0

//display to html (looping)//
function load() {
const cartData = localStorage.getItem('cart');
cart = JSON.parse(cartData)

    cart.forEach((i)=> {
        let item = document.createElement('div');
            item.innerHTML = `
            <div class="product">
            <img src="images/${products[i].image}">
            <p class="name">${products[i].name}</p>
            <p class="price">${products[i].price}</p>
            <button class="remove"> remove from cart</button>
            </div>
            `
            const items = document.getElementById('items');

            item.getElementsByClassName('remove')[0].addEventListener('click', function(e){
                remove(i, e)
            });

            items.append(item)
        
    });
}


load();


function remove(i, e){
    for (let j = 0; j < cart.length; j++){
        if(cart[j] === i){
            cart.splice(j, 1)
        }
    }
    
    localStorage.setItem('cart', JSON.stringify(cart))

    alert(`${products[i].name} removed from cart`)


    
}