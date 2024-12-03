//Name: Toby Pike
//File: main.js
//Date: November 23, 2024
//main.js for assignment 4 part 2

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declares the array of image file names */
const imageFilenames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
/* Declares the alternative text for each image file */
const altText = [
    'Closeup of a blue human eye',
    'Photo of a tropical beach during sunset',
    'A beautiful mountain range with snow peaks',
    'A cat sitting on a windowsill',
    'A bouquet of colorful flowers',
  ];
/* Loop through the images */
for (let image = 0; image < imageFilenames.length; image++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${imageFilenames[image]}`);
    newImage.setAttribute('alt', altText[image]);
/* Adds event listener to change image when it is clicked */
    newImage.addEventListener('click', () => {
    displayedImage.setAttribute('src', `images/${imageFilenames[image]}`);
    displayedImage.setAttribute('alt', altText[image]);
  });
thumbBar.appendChild(newImage);
}
/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    if (btn.textContent === 'Darken') {
      overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
      btn.textContent = 'Lighten';
    } else {
      overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
      btn.textContent = 'Darken';
    }
  });