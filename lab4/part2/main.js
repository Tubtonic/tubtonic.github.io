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
    'Description for pic1',
    'Description for pic2',
    'Description for pic3',
    'Description for pic4',
    'Description for pic5',
  ];
/* Looping through images */

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
