const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

// Looping through images and add to thumb bar div element
let newImages = [];
for (let i = 1; i < 6; i++) {
    newImages += `<img src='images/pic${i}.jpg'>`;
}
thumbBar.innerHTML = newImages;

// Adding mouse click behavior to each thumbnail image
const thumbImages = thumbBar.querySelectorAll('img');
thumbImages.forEach(image => {
    image.addEventListener('click', () => {
        const newImageSrc = image.getAttribute("src");
        displayedImage.setAttribute("src", newImageSrc);
    });
});

// Wiring up the darken and lighten button
btn.addEventListener('click', () => {
    if (btn.getAttribute('class') !== '') {
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 70%)';
    } else {
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
    btn.classList.toggle('dark');
});

