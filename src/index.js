import _ from 'lodash';
import './style.css';

document.addEventListener("DOMContentLoaded", function() {
    var contentInitial = `
        <div class="header">
            <div><p class="header-text active-header" id="home">Home</p></div>
            <div><p class="header-text" id="recipe">Recipe</p></div>
            <div><p class="header-text" id="about">About Us</p></div>      
        </div>
        <div id="main">
            <h1 id="bred">Baguette.</h1>
        </div>
    `;

    var contentRecipe = `
        <div class="header">
            <div><p class="header-text" id="home">Home</p></div>
            <div><p class="header-text active-header" id="recipe">Recipe</p></div>
            <div><p class="header-text" id="about">About Us</p></div>      
        </div>
        <div id="main">
            <h1 id="bred">recipe</h1>
        </div>
    `;

    var contentAbout = `
        <div class="header">
            <div><p class="header-text" id="home">Home</p></div>
            <div><p class="header-text" id="recipe">Recipe</p></div>
            <div><p class="header-text active-header" id="about">About Us</p></div>      
        </div>
        <div id="main">
            <h1 id="bred">about</h1>
        </div>
    `;

    // Get the 'div#content' element
    var contentDiv = document.querySelector("#content");

    // Append the content to the 'div#content' element
    contentDiv.innerHTML = contentInitial;

    // var home = document.getElementById("home");
    // var recipe = document.getElementById("recipe");
    // var about = document.getElementById("about");

    // Add the click event listener to the parent element (delegating the event)
    contentDiv.addEventListener("click", function(event) {
        // Check if the clicked element has the ID "home"
        if (event.target.id === "home") {
            // recipe.classList.remove("active-header");
            // about.classList.remove("active-header");
            // home.classList.add("active-header");
            contentDiv.innerHTML = contentInitial;
        }
    });

    contentDiv.addEventListener("click", function(event) {
        if (event.target.id === "recipe") {
            // home.classList.remove("active-header");
            // about.classList.remove("active-header");
            // recipe.classList.add("active-header");
            contentDiv.innerHTML = contentRecipe;
        }
    })

    contentDiv.addEventListener("click", function(event) {
        if (event.target.id === "about") {
            // home.classList.remove("active-header");
            // recipe.classList.remove("active-header");
            // about.classList.add("active-header");
            contentDiv.innerHTML = contentAbout;
        }
    })
});
