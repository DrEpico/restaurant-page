import _ from 'lodash';
import './style.css';

document.addEventListener("DOMContentLoaded", function() {
    var contentApnd = `
        <div class="header">
            <div><p class="header-text" id="home">Home</p></div>
            <div><p class="header-text" id="recipe">Recipe</p></div>
            <div><p class="header-text" id="about">About Us</p></div>      
        </div>
        <div id="main">
            <h1 id="bred">Baguette.</h1>
        </div>
    `;

    // Get the 'div#content' element
    var contentDiv = document.querySelector("#content");

    // Append the content to the 'div#content' element
    contentDiv.innerHTML = contentApnd
})
