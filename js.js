let products = [
    {name:"flower1", image:"f4.jpeg", price:2000},
    {name:"flower2", image:"f2.jpeg", price:1500}
];

let cart = []

//display to html (looping)//
function load() {
    products.forEach((i, index)=> {
        let item = document.createElement('div');
            item.innerHTML = `
            <div class="product">
            <img src="images/${i.image}">
            <p class="name">${i.name}</p>
            <p class="price">${i.price}</p>
            <button class="add"> Add to cart</button>
            </div>
            `
            const items = document.getElementById('items');

            item.getElementsByClassName('add')[0].addEventListener('click', function(){
                addTocart(index)
            });

            items.append(item)
        
    });
}

var slideIndex = 1;

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
//  carousel
var slideIndex = 0;
showSlides();
 
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

load();

function addTocart(index){
    cart.push(index)
    localStorage.setItem('cart', JSON.stringify(cart))
    alert(`${products[index].name} added to cart`)
}