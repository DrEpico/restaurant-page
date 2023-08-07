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

    var contentDiv = document.querySelector("#content");

    contentDiv.innerHTML = contentInitial;

    // Add the click event listener to the parent element (delegating the event)
    contentDiv.addEventListener("click", function(event) {
        // Check if the clicked element has the ID "home"
        if (event.target.id === "home") {
            contentDiv.innerHTML = contentInitial;
        }
    });

    contentDiv.addEventListener("click", function(event) {
        if (event.target.id === "recipe") {
            contentDiv.innerHTML = contentRecipe;
        }
    })

    contentDiv.addEventListener("click", function(event) {
        if (event.target.id === "about") {
            contentDiv.innerHTML = contentAbout;
        }
    })
});
