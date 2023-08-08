import _ from 'lodash';
import './style.css';

document.addEventListener("DOMContentLoaded", function() {
    var contentInitial = `
        <div class="header">
            <div><p class="header-text active-header" id="home">Home</p></div>
            <div><p class="header-text" id="recipe">Recipe</p></div>
            <div><p class="header-text" id="about">About Us</p></div>      
        </div>
        <div  id="main">
            <h1 class="page-title" id="bred">Baguette.</h1>
        </div>
    `;

    var contentRecipe = `
        <div class="header">
            <div><p class="header-text" id="home">Home</p></div>
            <div><p class="header-text active-header" id="recipe">Recipe</p></div>
            <div><p class="header-text" id="about">About Us</p></div>      
        </div>
        <div id="main">
            <h1 class="page-title" id="recipe-title">Recipe</h1>
            <div class="text-content" id="recipe-content">
                <h2>Step 1:</h2>
                <p>In a large bowl mix the yeast with the water and sugar. Sift the flour and salt together in a separate bowl, add half to the yeast mixture, stir and cover. Leave until the dough has doubled in size.</p>
                <h2>Step 2:</h2>
                <p>Add the remaining flour and mix to a light dough. Knead for 10 minutes by hand or for 5 minutes if using a food mixer fitted with a dough hook.</p>
                <h2>Step 3:</h2>
                <p>Divide the dough into 3 pieces and shape into an oblong. Fold the 2 ends into the middle and seal, repeat this process 3 or 4 more times.</p>
                <h2>Step 4:</h2>
                <p>Roll each piece of dough into a 33-34 cm (13-14”) long loaf.</p>
                <h2>Step 5:</h2>
                <p>Place onto a greased baking tray and leave until double in size, then slash the tops. Meanwhile preheat the oven to 200°C (fan 180°C, gas mark 7).</p>
                <h2>Step 6</h2>
                <p>Bake for 20 minutes carefully spraying the inside of the oven with water during the first 5 minutes of baking.Bake for 20 minutes carefully spraying the inside of the oven with water during the first 5 minutes of baking.</p>
                <p id="last-line"><a href="https://bakingmad.com/recipes/french-baguettes">(bakingmad.com)<a></p>
            </div>
        </div>
    `;

    var contentAbout = `
        <div class="header">
            <div><p class="header-text" id="home">Home</p></div>
            <div><p class="header-text" id="recipe">Recipe</p></div>
            <div><p class="header-text active-header" id="about">About Us</p></div>      
        </div>
        <div id="main">
            <h1 class="page-title" id="about-title">About us</h1>
            <div class="text-content" id="about-content">
                <h2>Baking baguette since 1930B.C.</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113011.9955879413!2d-82.66950505!3d40.36339845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8836e97ab54d8ec1%3A0xe5cd64399c9fd916!2sOhio%2C%20USA!5e0!3m2!1sen!2suk!4v1691493077180!5m2!1sen!2suk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
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
