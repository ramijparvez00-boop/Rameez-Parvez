/* =====================================
RAMEEZ ❤️ NADRA
BIRTHDAY WEBSITE
===================================== */

/* =====================================
ELEMENTS
===================================== */

const surpriseBtn = document.getElementById("surpriseBtn");

const letterSection =
document.getElementById("letterSection");

const slideImage =
document.getElementById("slideImage");

const photoNumber =
document.getElementById("photoNumber");

const dots =
document.getElementById("dots");

const prevBtn =
document.getElementById("prevBtn");

const nextBtn =
document.getElementById("nextBtn");

const cakeBtn =
document.getElementById("cakeBtn");

const cakeArea =
document.getElementById("cakeArea");

const wishMessage =
document.getElementById("wishMessage");

const music =
document.getElementById("bgMusic");

const musicBtn =
document.getElementById("musicBtn");

const heartContainer =
document.getElementById("heartContainer");

/* =====================================
MUSIC
===================================== */

function playMusic() {

if (!music) return;

music.volume = 1;

music.play()
.then(() => {

```
  if (musicBtn) {
    musicBtn.textContent = "❚❚";
  }

})
.catch((error) => {

  console.log(
    "Music will start after user interaction.",
    error
  );

});
```

}

if (musicBtn) {

musicBtn.addEventListener("click", () => {

```
if (music.paused) {

  playMusic();

} else {

  music.pause();

  musicBtn.textContent = "♪";

}
```

});

}

/* =====================================
OPEN SURPRISE
===================================== */

if (surpriseBtn) {

surpriseBtn.addEventListener("click", () => {

```
/* Browser allows audio after button click */

playMusic();


/* Reveal letter */

if (letterSection) {

  letterSection.classList.remove("hidden");

  letterSection.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

}
```

});

}

/* =====================================
PHOTO SLIDESHOW
===================================== */

const photos = [
"photo1.jpg",
"photo2.jpg",
"photo3.jpg",
"photo4.jpg",
"photo5.jpg",
"photo6.jpg",
"photo7.jpg"
];

let currentPhoto = 0;

let slideshowTimer = null;

/* Create dots */

if (dots) {

photos.forEach((_, index) => {

```
const dot =
  document.createElement("button");

dot.className = "dot";

dot.type = "button";

dot.addEventListener("click", () => {

  showPhoto(index);

  restartSlideshow();

});

dots.appendChild(dot);
```

});

}

/* Show photo */

function showPhoto(index) {

if (!slideImage) return;

currentPhoto =
(index + photos.length) % photos.length;

slideImage.classList.remove("show");

setTimeout(() => {

```
slideImage.src =
  "assets/" + photos[currentPhoto];

slideImage.onload = () => {

  slideImage.classList.add("show");

};


if (photoNumber) {

  photoNumber.textContent =
    `${currentPhoto + 1} / ${photos.length}`;

}
```

}, 200);

if (dots) {

```
const allDots =
  dots.querySelectorAll(".dot");

allDots.forEach((dot, index) => {

  dot.classList.toggle(
    "active",
    index === currentPhoto
  );

});
```

}

}

/* Next */

function nextPhoto() {

showPhoto(currentPhoto + 1);

}

/* Previous */

function previousPhoto() {

showPhoto(currentPhoto - 1);

}

/* Buttons */

if (nextBtn) {

nextBtn.addEventListener("click", () => {

```
nextPhoto();

restartSlideshow();
```

});

}

if (prevBtn) {

prevBtn.addEventListener("click", () => {

```
previousPhoto();

restartSlideshow();
```

});

}

/* Automatic slideshow */

function startSlideshow() {

clearInterval(slideshowTimer);

slideshowTimer =
setInterval(() => {

```
  nextPhoto();

}, 4500);
```

}

function restartSlideshow() {

startSlideshow();

}

/* Start */

showPhoto(0);

startSlideshow();

/* =====================================
TOUCH SWIPE
===================================== */

let touchStartX = 0;

let touchEndX = 0;

if (slideImage) {

slideImage.addEventListener(
"touchstart",
(event) => {

```
  touchStartX =
    event.changedTouches[0].screenX;

},
{ passive: true }
```

);

slideImage.addEventListener(
"touchend",
(event) => {

```
  touchEndX =
    event.changedTouches[0].screenX;


  const difference =
    touchEndX - touchStartX;


  if (Math.abs(difference) > 50) {

    if (difference < 0) {

      nextPhoto();

    } else {

      previousPhoto();

    }

    restartSlideshow();

  }

},
{ passive: true }
```

);

}

/* =====================================
CAKE CUTTING
===================================== */

let cakeAlreadyCut = false;

if (cakeBtn && cakeArea) {

cakeBtn.addEventListener("click", () => {

```
if (cakeAlreadyCut) return;

cakeAlreadyCut = true;


/* Add animation */

cakeArea.classList.add("cut");


/* Change button */

cakeBtn.textContent =
  "Cake Cut! ❤️";


/* Wish message */

if (wishMessage) {

  wishMessage.textContent =
    "Make a beautiful wish, Nadra… ❤️";

}


/* Start music */

playMusic();


/* Celebration */

createConfetti();

setTimeout(() => {

  createHearts(25);

}, 700);
```

});

}

/* =====================================
CONFETTI
===================================== */

function createConfetti() {

const symbols = [
"❤️",
"💕",
"💖",
"✨",
"🎉",
"🎊",
"🌸"
];

for (let i = 0; i < 90; i++) {

```
const heart =
  document.createElement("div");

heart.className = "heart";


heart.textContent =
  symbols[
    Math.floor(
      Math.random() * symbols.length
    )
  ];


heart.style.left =
  Math.random() * 100 + "vw";


heart.style.fontSize =
  12 + Math.random() * 25 + "px";


heart.style.animationDuration =
  3 + Math.random() * 4 + "s";


heart.style.animationDelay =
  Math.random() * .8 + "s";


if (heartContainer) {

  heartContainer.appendChild(heart);

} else {

  document.body.appendChild(heart);

}


setTimeout(() => {

  heart.remove();

}, 8500);
```

}

}

/* =====================================
HEARTS
===================================== */

function createHearts(amount) {

for (let i = 0; i < amount; i++) {

```
const heart =
  document.createElement("div");

heart.className = "heart";

heart.textContent = "❤️";


heart.style.left =
  15 + Math.random() * 70 + "vw";


heart.style.fontSize =
  14 + Math.random() * 20 + "px";


heart.style.animationDuration =
  4 + Math.random() * 3 + "s";


if (heartContainer) {

  heartContainer.appendChild(heart);

} else {

  document.body.appendChild(heart);

}


setTimeout(() => {

  heart.remove();

}, 8000);
```

}

}

/* =====================================
SMALL BACKGROUND HEARTS
===================================== */

setInterval(() => {

const heart =
document.createElement("div");

heart.className = "heart";

heart.textContent =
["♥", "♡", "✦"][
Math.floor(
Math.random() * 3
)
];

heart.style.left =
Math.random() * 100 + "vw";

heart.style.fontSize =
10 + Math.random() * 12 + "px";

heart.style.animationDuration =
5 + Math.random() * 4 + "s";

if (heartContainer) {

```
heartContainer.appendChild(heart);
```

} else {

```
document.body.appendChild(heart);
```

}

setTimeout(() => {

```
heart.remove();
```

}, 9000);

}, 1200);

/* =====================================
PAGE LOAD
===================================== */

window.addEventListener("load", () => {

if (slideImage) {

```
slideImage.classList.add("show");
```

}

});
