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
showPage("home-page");

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