// =====================================
// BAKE WITH LOVE
// Final JavaScript
// Part 1
// =====================================

// ----------------------------
// Variables
// ----------------------------

const body = document.body;

let cart = 0;
let darkMode = false;

// ----------------------------
// Theme Button
// ----------------------------

const themeBtn = document.getElementById("themeBtn");

function toggleTheme() {

    darkMode = !darkMode;

    body.classList.toggle("dark-mode");

    if (darkMode) {

        themeBtn.innerHTML = "☀️";

    } else {

        themeBtn.innerHTML = "🌙";

    }

    localStorage.setItem("theme", darkMode);

}

themeBtn.addEventListener("click", toggleTheme);

// ----------------------------
// Saved Theme
// ----------------------------

if (localStorage.getItem("theme") === "true") {

    darkMode = true;

    body.classList.add("dark-mode");

    themeBtn.innerHTML = "☀️";

}

// ----------------------------
// Hero Background Changer
// ----------------------------

const heroCake = document.getElementById("heroCake");

const heroImages = [

    "images/hero-cake.jpg",
    "images/wedding-cake.jpg",
    "images/gallery-cake.jpg"

];

let heroIndex = 0;

function changeHeroImage() {

    heroIndex++;

    if (heroIndex >= heroImages.length) {

        heroIndex = 0;

    }

    if (heroCake) {

        heroCake.src = heroImages[heroIndex];

    }

}

setInterval(changeHeroImage, 6000);

// ----------------------------
// Explore Collection
// ----------------------------

const exploreBtn =
document.getElementById("exploreBtn");

if (exploreBtn) {

    exploreBtn.onclick = function () {

        document
        .getElementById("cakes")
        .scrollIntoView({

            behavior: "smooth"

        });

    };

}

// ----------------------------
// Discover Cakes
// ----------------------------

const discoverBtn =
document.getElementById("discoverBtn");

if (discoverBtn) {

    discoverBtn.onclick = function () {

        document
        .getElementById("cakes")
        .scrollIntoView({

            behavior: "smooth"

        });

    };

}

// ----------------------------
// Order Button
// ----------------------------

const orderBtn = document.getElementById("orderBtn");

function orderNow() {

    let confirmOrder = confirm(
        "🍰 Do you want to place your order?"
    );

    if (confirmOrder) {

        alert(
            "❤️ Thank You!\n\nYour order request has been received successfully!\n\nWe will contact you soon."
        );

    } else {

        alert(
            "😊 No problem!\n\nFeel free to explore more delicious cakes."
        );

    }

}

if (orderBtn) {

    orderBtn.addEventListener("click", orderNow);

}

// =====================================
// Part 2
// Cakes
// =====================================

// ----------------------------
// Special Cakes
// ----------------------------

const specialCakes = [

{
name:"Chocolate Dream",
price:"Rs. 2500",
image:"images/chocolate-cake.jpg"
},

{
name:"Strawberry Romance",
price:"Rs. 3000",
image:"images/strawberry-cake.jpg"
},

{
name:"Red Velvet Elegance",
price:"Rs. 3500",
image:"images/redvelvet-cake.jpg"
},

{
name:"Rose Bliss Cake",
price:"Rs. 4200",
image:"images/rose-bliss-cake.jpg"
},

{
name:"Luxury Wedding Cake",
price:"Rs. 6000",
image:"images/wedding-cake.jpg"
},

{
name:"Chef Recommended Cake",
price:"Rs. 4500",
image:"images/chef-recommended-cake.jpg"
}

];

// ----------------------------
// Random Cake
// ----------------------------

const randomCakeBtn =
document.getElementById("randomCakeBtn");

function randomCake(){

let random =
Math.floor(Math.random()*specialCakes.length);

document.getElementById("specialCake").src =
specialCakes[random].image;

document.getElementById("specialName").innerHTML =
specialCakes[random].name;

document.getElementById("specialPrice").innerHTML =
specialCakes[random].price;

}

if(randomCakeBtn){

randomCakeBtn.addEventListener("click",randomCake);

}

// ----------------------------
// Add To Cart
// ----------------------------

const cartBtns =
document.querySelectorAll(".cart-btn");

const cartCount =
document.getElementById("cartCount");

cartBtns.forEach(function(button){

button.addEventListener("click",function(){

cart++;

cartCount.innerHTML = cart;

let cakeName =
button.parentElement.parentElement
.querySelector("h3").innerHTML;

alert(

"🛒 " + cakeName +

"\n\nhas been added to your cart ❤️"

);

saveCart();

});

});

// ----------------------------
// Favourite Button
// ----------------------------

const favBtns =
document.querySelectorAll(".fav-btn");

favBtns.forEach(function(button){

button.addEventListener("click",function(){

if(button.innerHTML=="🤍"){

button.innerHTML="❤️";

}

else{

button.innerHTML="🤍";

}

});

});

// ----------------------------
// Search Cake
// ----------------------------

const searchInput =
document.getElementById("searchInput");

if(searchInput){

searchInput.addEventListener("keyup",function(){

let value =
searchInput.value.toLowerCase();

let found = false;

const cards =
document.querySelectorAll(".cake-card");

cards.forEach(function(card){

let title =
card.querySelector("h3")
.innerHTML.toLowerCase();

if(title.includes(value)){

card.style.display = "block";

found = true;

}

else{

card.style.display = "none";

}

});

const noCake =
document.getElementById("noCake");

if(noCake){

if(found){

noCake.style.display = "none";

}

else{

noCake.style.display = "block";

}

}

});

}



// =====================================
// Part 3
// Contact + Clock + Quotes
// =====================================

// ----------------------------
// Contact Form
// ----------------------------

const contactForm =
document.getElementById("contactForm");

if(contactForm){

contactForm.addEventListener("submit",function(e){

e.preventDefault();

let name =
document.getElementById("name").value.trim();

let email =
document.getElementById("email").value.trim();

let message =
document.getElementById("message").value.trim();

if(name==="" || email==="" || message===""){

alert("⚠ Please fill all the fields.");

return;

}

alert("💖 Thank You!\n\nYour request has been sent successfully.");

contactForm.reset();

});

}

// ----------------------------
// Live Clock
// ----------------------------

function updateClock(){

let now = new Date();

let time = now.toLocaleTimeString();

let clock =
document.getElementById("liveClock");

if(clock){

clock.innerHTML = "🕒 " + time;

}

}

updateClock();

setInterval(updateClock,1000);

// ----------------------------
// Random Bakery Quotes
// ----------------------------

const bakeryQuotes=[

"🍰 Every Bite Feels Like Heaven",

"❤️ Freshly Baked Every Morning",

"✨ Happiness Starts With Cake",

"🎂 Sweet Moments Deserve Sweet Cakes",

"🧁 Handmade With Love"

];

function randomQuote(){

let random =
Math.floor(Math.random()*bakeryQuotes.length);

let quote =
document.getElementById("quote");

if(quote){

quote.innerHTML =
bakeryQuotes[random];

}

}

randomQuote();

setInterval(randomQuote,5000);

// ----------------------------
// Mobile Menu
// ----------------------------

const menuBtn =
document.querySelector(".menu-btn");

const navMenu =
document.querySelector("nav ul");

if(menuBtn){

menuBtn.addEventListener("click",function(){

navMenu.classList.toggle("showMenu");

});

}

// ----------------------------
// Current Year
// ----------------------------

let year =
document.getElementById("year");

if(year){

year.innerHTML =
new Date().getFullYear();

}

// ----------------------------
// Scroll To Top
// ----------------------------

const topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll",function(){

if(topBtn){

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

}

});

function scrollTopPage(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}
// =====================================
// Part 4
// Final Features
// =====================================

// ----------------------------
// Cake Hover Animation
// ----------------------------

const cakeCards = document.querySelectorAll(".cake-card");

cakeCards.forEach(function(card){

card.addEventListener("mouseenter",function(){

card.style.transform="translateY(-10px) scale(1.03)";
card.style.transition="0.4s";

});

card.addEventListener("mouseleave",function(){

card.style.transform="translateY(0) scale(1)";

});

});

// ----------------------------
// Scroll Animation
// ----------------------------

const observer = new IntersectionObserver(function(entries){

entries.forEach(function(entry){

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0px)";

}

});

});

cakeCards.forEach(function(card){

card.style.opacity="0";
card.style.transform="translateY(40px)";
card.style.transition="0.7s";

observer.observe(card);

});

// ----------------------------
// Navbar Active Link
// ----------------------------

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(function(link){

link.addEventListener("click",function(){

navLinks.forEach(function(item){

item.classList.remove("active");

});

link.classList.add("active");

});

});

// ----------------------------
// Save Cart
// ----------------------------

function saveCart(){

localStorage.setItem("cart",cart);

}

function loadCart(){

let savedCart = localStorage.getItem("cart");

if(savedCart){

cart = Number(savedCart);

document.getElementById("cartCount").innerHTML = cart;

}

}

loadCart();

// Update Cart Saving

document.querySelectorAll(".cart-btn").forEach(function(btn){

btn.addEventListener("click",function(){

saveCart();

});

});

// ----------------------------
// Welcome Console
// ----------------------------

console.log("🍰 Bake With Love Loaded Successfully");

console.log("Owner : Jannat");

console.log("Total Cakes :",document.querySelectorAll(".cake-card").length);

// ----------------------------
// Finished
// ----------------------------

alert("✨ Bake With Love is Ready!");