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
showPage("flowers-page");

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


// Plants page// 
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

let amtofbirdsnest = 0
let amtofpeacelily = 0
let amtofsnakeplant =0
let amtofprayerplant =0 
let amtofspiderplant =0
let amtofzzplant = 0
let amtofmonstera =0
let amtoffiddleleaffig =0
let amtofphilo = 0

const addbirdsnest = () => {
  amtofbirdsnest +=1;
  shoppingcart.innerHTML += `<p> Birds Nest </p> x${amtofbirdsnest}`;
totalAmt.innerHTML = (parseFloat(totalAmt.innerHTML) + 25.00).toFixed(2);

};
birdsnest.addEventListener("click", addbirdsnest);

const addpeacelily = () => {
  amtofpeacelily +=1;
  shoppingcart.innerHTML += `<p> Peace Lily </p> x${amtofpeacelily}`;
totalAmt.innerHTML = (parseFloat(totalAmt.innerHTML) + 30.00).toFixed(2);

};
peaceLily.addEventListener("click", addpeacelily);

const addprayerPlant = () => {
  amtofprayerplant +=1;
  shoppingcart.innerHTML += `<p> Prayer Plant </p> x${amtofprayerplant}`;
totalAmt.innerHTML = (parseFloat(totalAmt.innerHTML) + 18.00).toFixed(2);

};
prayerPlant.addEventListener("click", addprayerPlant);

const addspiderPlant = () => {
amtofspiderplant +=1;
  shoppingcart.innerHTML += `<p> Spider Plant </p> x${amtofspiderplant}`;
totalAmt.innerHTML = (parseFloat(totalAmt.innerHTML) + 15.00).toFixed(2);

};
spiderPlant.addEventListener("click", addspiderPlant);

const addzzPlant = () => {
amtofzzplant +=1;
  shoppingcart.innerHTML += `<p> zz Plant </p> x${amtofzzplant}`;
totalAmt.innerHTML = (parseFloat(totalAmt.innerHTML) + 22.00).toFixed(2);

};
zzPlant.addEventListener("click", addzzPlant);

const addmonsteraPlant = () => {
  amtofmonstera +=1;
  shoppingcart.innerHTML += `<p> monstera Plant </p> x${amtofmonstera}`;
totalAmt.innerHTML = (parseFloat(totalAmt.innerHTML) + 28.00).toFixed(2);

};
monsteraPlant.addEventListener("click", addmonsteraPlant);

const addfiddleLeafFig = () => {
  amtoffiddleleaffig +=1;
  shoppingcart.innerHTML += `<p> fiddleLeaf Fig </p> x${amtoffiddleleaffig}`;
totalAmt.innerHTML = (parseFloat(totalAmt.innerHTML) + 35.00).toFixed(2);

};
fiddleLeafFig.addEventListener("click", addfiddleLeafFig);

const addsnakePlant = () => {
  amtofsnakeplant +=1;
  shoppingcart.innerHTML += `<p> Snake Plant </p> x${amtofsnakeplant}`;
totalAmt.innerHTML = (parseFloat(totalAmt.innerHTML) + 20.00).toFixed(2);

};
snakePlant.addEventListener("click", addsnakePlant);




const addphilodendronPlant = () => {
  
  amtofphilo += 1;
  shoppingcart.innerHTML += `<p> philodendron Plant </p> x${amtofphilo} ` ;
totalAmt.innerHTML = (parseFloat(totalAmt.innerHTML) + 25.00).toFixed(2);

};
philodendronPlant.addEventListener("click", addphilodendronPlant);


//flowers page//

const innocence= document.querySelector("#innocence");
const romantic= document.querySelector("#romantic");
const summerSunset= document.querySelector("#summer-sunset");
const lover= document.querySelector("#lover");
const lilian= document.querySelector("#lilian");
const solar= document.querySelector("#solar");
const peachSola= document.querySelector("#peach-sola");
const margret= document.querySelector("#margret");
const rosaline = document.querySelector("#rosaline");

const shoppingcart1= document.querySelector("#shopping-cart1");
const totalAmt1= document.querySelector("#total-span1");

let amtofinnocence = 0
let amtofromantic = 0
let amtofsummersunset =0
let amtoflover =0
let amtoflilian =0
let amtofsolar = 0
let amtofpeachsola =0
let amtofmargret =0
let amtofrosaline = 0

const addinnocence = () => {
  amtofinnocence +=1;
  shoppingcart1.innerHTML += `<p> Innocence </p> x${amtofinnocence}`;
totalAmt1.innerHTML = (parseFloat(totalAmt1.innerHTML) + 55.00).toFixed(2);
};
innocence.addEventListener("click", addinnocence);

const addromantic = () => {
  amtofromantic +=1;
  shoppingcart1.innerHTML += `<p> Romantic </p> x${amtofromantic}`;
totalAmt1.innerHTML = (parseFloat(totalAmt1.innerHTML) + 30.00).toFixed(2);
}
romantic.addEventListener("click", addromantic);

const addsummerSunset = () => {
  amtofsummersunset +=1;
  shoppingcart1.innerHTML += `<p> Summer Sunset </p> x${amtofsummersunset}`;
totalAmt1.innerHTML = (parseFloat(totalAmt1.innerHTML) + 60.00).toFixed(2);
} 
summerSunset.addEventListener("click", addsummerSunset);

const addlover = () => {
  amtoflover +=1;
  shoppingcart1.innerHTML += `<p> Lover </p> x${amtoflover}`;
totalAmt1.innerHTML = (parseFloat(totalAmt1.innerHTML) + 40.00).toFixed(2);
}
lover.addEventListener("click", addlover);

const addlilian = () => {
  amtoflilian +=1;
  shoppingcart1.innerHTML += `<p> Lilian </p> x${amtoflilian}`;
totalAmt1.innerHTML = (parseFloat(totalAmt1.innerHTML) + 52.00).toFixed(2);
}
lilian.addEventListener("click", addlilian);

const addsolar = () => {
  amtofsolar +=1;
  shoppingcart1.innerHTML += `<p> Solar </p> x${amtofsolar}`;
totalAmt1.innerHTML = (parseFloat(totalAmt1.innerHTML) + 35.00).toFixed(2);
}
solar.addEventListener("click", addsolar);

const addpeachSola = () => {
  amtofpeachsola +=1;
  shoppingcart1.innerHTML += `<p> Peach Sola </p> x${amtofpeachsola}`;
totalAmt1.innerHTML = (parseFloat(totalAmt1.innerHTML) + 45.00).toFixed(2);
}
peachSola.addEventListener("click", addpeachSola);

const addmargret = () => {
  amtofmargret +=1;
  shoppingcart1.innerHTML += `<p> Margret </p> x${amtofmargret}`;
totalAmt1.innerHTML = (parseFloat(totalAmt1.innerHTML) + 48.00).toFixed(2);
}
margret.addEventListener("click", addmargret);

const addrosaline = () => {
  amtofrosaline +=1;
  shoppingcart1.innerHTML += `<p> Rosaline </p> x${amtofrosaline}`;
totalAmt1.innerHTML = (parseFloat(totalAmt1.innerHTML) + 78.00).toFixed(2);
}
rosaline.addEventListener("click", addrosaline);

