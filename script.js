const homepage = document.querySelector("#home-page");
const aboutpage = document.querySelector("#about-page");
const flowerspage = document.querySelector("#flowers-page");
const bouquetpage = document.querySelector("#bouquet-page");
const contactuspage = document.querySelector("#contactus-page");

const home = document.querySelector("#home");
const about = document.querySelector("#about");
const flowers = document.querySelector("#Flowers");
const bouquet = document.querySelector("#Bouquet");
const contactus = document.querySelector("#ContactUs");


function showPage(pageId) {
    // Hide all pages
    var pages = document.getElementsByClassName('page');
    for (var i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }

    // Show the selected page
    document.getElementById(pageId).style.display = 'block';
}
function navigateTo(pageName, url) {
    // Dynamically update content here (e.g., using innerHTML or DOM manipulation)
    document.getElementById('content-area').innerHTML = `<h1>Welcome to ${pageName}</h1>`;
    
    // Change the URL in the browser's address bar
    history.pushState({page: pageName}, pageName, url);
}
function goToNewPage() {
    window.location.href = "newpage.html";
}
function openPageInNewTab() {
    window.open("newpage.html", "_blank");
}
function createPageInNewWindow() {
    var newWindow = window.open("", "NewPageTitle", "width=400,height=300");
    newWindow.document.write("<!DOCTYPE html><html><head><title>Dynamically Created Page</title></head><body><h1>Hello, World!</h1><p>This page was created dynamically with JavaScript.</p></body></html>");
    newWindow.document.close(); // Important to tell the browser the page is done loading
}

home.addEventListener("click", function() {
    showPage("home-page");
});

about.addEventListener("click", function() {
    showPage("about-page");
});

flowers.addEventListener("click", function() {
    showPage("flowers-page");
});

bouquet.addEventListener("click", function() {
    showPage("bouquet-page");
});
contactus.addEventListener("click", function() {
    showPage("contactus-page");
});

// Show the home page by default
showPage("about-page");

const more= document.querySelector("#more");
const moreContent= document.querySelector("#more-content");

const openmsg = () => {
    moreContent.classList.remove("Hidden");
   more.classList.toggle("Hidden");
   less.classList.toggle("Hidden");
}
more.addEventListener("click", openmsg);

const less= document.querySelector("#less");

const closemsg = () => {
    moreContent.classList.add("Hidden");
   more.classList.remove("Hidden");
    less.classList.toggle("Hidden");
}
less.addEventListener("click", closemsg);

const birdsnest= document.querySelector("#birds-nest");
const peaceLily= document.querySelector("#peace-lily");
const snakePlant= document.querySelector("#snake-plant");
const prayerPlant= document.querySelector("#prayer-plant");
const spiderPlant= document.querySelector("#spider-plant");
const zzPlant= document.querySelector("#zz-plant");
const monsteraPlant= document.querySelector("#monstera-plant");
const fiddleLeafFig= document.querySelector("#fiddle-leaf-fig");
const philodendronPlant= document.querySelector("#philodendron-plant");

const shoppingcart= document.querySelector("#shopping-cart");
const totalAmt= document.querySelector("#total-span");

const addbirdsnest = () => {
  shoppingcart.innerHTML += `<p> Birds Nest </p>`;
totalAmt.innerHTML = (parseFloat(totalAmt.innerHTML) + 25.00).toFixed(2);

};
birdsnest.addEventListener("click", addbirdsnest);

const addpeacelily = () => {
  shoppingcart.innerHTML += `<p> Peace Lily </p>`;
totalAmt.innerHTML = (parseFloat(totalAmt.innerHTML) + 30.00).toFixed(2);

};
peaceLily.addEventListener("click", addpeacelily);

const addprayerPlant = () => {
  shoppingcart.innerHTML += `<p> Prayer Plant </p>`;
totalAmt.innerHTML = (parseFloat(totalAmt.innerHTML) + 18.00).toFixed(2);

};
prayerPlant.addEventListener("click", addprayerPlant);

const addspiderPlant = () => {
  shoppingcart.innerHTML += `<p> Spider Plant </p>`;
totalAmt.innerHTML = (parseFloat(totalAmt.innerHTML) + 15.00).toFixed(2);

};
spiderPlant.addEventListener("click", addspiderPlant);

const addzzPlant = () => {
  shoppingcart.innerHTML += `<p> zz Plant </p>`;
totalAmt.innerHTML = (parseFloat(totalAmt.innerHTML) + 22.00).toFixed(2);

};
zzPlant.addEventListener("click", addzzPlant);

const addmonsteraPlant = () => {
  shoppingcart.innerHTML += `<p> monstera Plant </p>`;
totalAmt.innerHTML = (parseFloat(totalAmt.innerHTML) + 28.00).toFixed(2);

};
monsteraPlant.addEventListener("click", addmonsteraPlant);

const addfiddleLeafFig = () => {
  shoppingcart.innerHTML += `<p> fiddleLeaf Fig </p>`;
totalAmt.innerHTML = (parseFloat(totalAmt.innerHTML) + 35.00).toFixed(2);

};
fiddleLeafFig.addEventListener("click", addfiddleLeafFig);

const addsnakePlant = () => {
  shoppingcart.innerHTML += `<p> Snake Plant </p>`;
totalAmt.innerHTML = (parseFloat(totalAmt.innerHTML) + 20.00).toFixed(2);

};
snakePlant.addEventListener("click", addsnakePlant);

const addphilodendronPlant = () => {
  shoppingcart.innerHTML += `<p> philodendron Plant </p>`;
totalAmt.innerHTML = (parseFloat(totalAmt.innerHTML) + 25.00).toFixed(2);

};
philodendronPlant.addEventListener("click", addphilodendronPlant);