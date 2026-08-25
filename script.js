/* =========================
PHOTOS / SLIDESHOW
========================= */

const photoFiles = [
"photo1.jpg",
"photo2.jpg",
"photo3.jpg",
"photo4.jpg",
"photo5.jpg",
"photo6.jpg",
"photo7.jpg"
];

const slideImage = document.getElementById("slideImage");
const slideCounter = document.getElementById("slideCounter");
const dots = document.getElementById("dots");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const slideFrame = document.getElementById("slideFrame");

let currentSlide = 0;
let slideshowTimer;

/* Create slideshow dots */

if (dots) {
photoFiles.forEach((_, index) => {

```
const dot = document.createElement("div");

dot.className = "dot";

dot.addEventListener("click", () => {
  showSlide(index);
  restartSlideshow();
});

dots.appendChild(dot);
```

});
}

/* Show slide */

function showSlide(index) {

if (!slideImage) return;

currentSlide =
(index + photoFiles.length) % photoFiles.length;

slideImage.classList.remove("show");

setTimeout(() => {

```
slideImage.src =
  `assets/${photoFiles[currentSlide]}`;

slideImage.onload = () => {
  slideImage.classList.add("show");
};

if (slideCounter) {
  slideCounter.textContent =
    `${currentSlide + 1} / ${photoFiles.length}`;
}
```

}, 250);

if (dots) {

```
document.querySelectorAll(".dot").forEach(
  (dot, i) => {

    dot.classList.toggle(
      "active",
      i === currentSlide
    );

  }
);
```

}

}

/* Next slide */

function nextSlide() {
showSlide(currentSlide + 1);
}

/* Previous slide */

function previousSlide() {
showSlide(currentSlide - 1);
}

/* Arrow buttons */

if (nextBtn) {

nextBtn.addEventListener("click", () => {

```
nextSlide();
restartSlideshow();
```

});

}

if (prevBtn) {

prevBtn.addEventListener("click", () => {

```
previousSlide();
restartSlideshow();
```

});

}

/* Automatic slideshow */

function startSlideshow() {

clearInterval(slideshowTimer);

slideshowTimer = setInterval(() => {

```
nextSlide();
```

}, 4500);

}

function restartSlideshow() {

clearInterval(slideshowTimer);

startSlideshow();

}

/* Start slideshow */

showSlide(0);
startSlideshow();

/* =========================
MUSIC
========================= */

const music =
document.getElementById("music");

const musicBtn =
document.getElementById("musicBtn");

async function startMusic() {

if (!music) {
console.error("Music element not found.");
return;
}

try {

```
music.volume = 1;

await music.play();

if (musicBtn) {
  musicBtn.textContent = "❚❚";
}
```

} catch (error) {

```
console.log(
  "Music needs user interaction:",
  error
);
```

}

}

/* Music button */

if (musicBtn) {

musicBtn.addEventListener("click", () => {

```
if (music.paused) {

  startMusic();

} else {

  music.pause();

  musicBtn.textContent = "♪";

}
```

});

}

/* =========================
OPEN YOUR SURPRISE
========================= */

const surpriseBtn =
document.getElementById("surpriseBtn");

if (surpriseBtn) {

surpriseBtn.addEventListener("click", () => {

```
/* Start music after user interaction */
startMusic();


/* Show letter if it exists */

const letter =
  document.getElementById("surpriseLetter");


if (letter) {

  letter.classList.add("show");

  setTimeout(() => {

    letter.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  }, 300);

} else {

  /* If letter doesn't exist,
     go to story section */

  const story =
    document.getElementById("story");

  if (story) {

    story.scrollIntoView({
      behavior: "smooth"
    });

  }

}
```

});

}

/* =========================
CAKE
========================= */

const cakeBtn =
document.getElementById("cakeBtn");

const cakeWrap =
document.getElementById("cakeWrap");

const wish =
document.getElementById("wish");

let cakeCut = false;

if (cakeBtn && cakeWrap) {

cakeBtn.addEventListener("click", () => {

```
if (cakeCut) return;

cakeCut = true;


/* Cake animation */

cakeWrap.classList.add("cut");


/* Button text */

cakeBtn.textContent =
  "Cake Cut! ❤️";


/* Wish */

if (wish) {

  wish.textContent =
    "Make a beautiful wish, Nadra… ❤️";

}


/* Music */

startMusic();


/* Confetti */

confetti();


/* Extra hearts */

setTimeout(() => {

  moreHearts();

}, 800);
```

});

}

/* =========================
CONFETTI
========================= */

function confetti() {

const symbols = [
"💖",
"✨",
"🎉",
"💕",
"🌸",
"💗",
"🎊",
"❤️"
];

for (let i = 0; i < 90; i++) {

```
const el =
  document.createElement("div");


el.className = "heart";


el.textContent =
  symbols[
    Math.floor(
      Math.random() * symbols.length
    )
  ];


el.style.left =
  Math.random() * 100 + "vw";


el.style.fontSize =
  12 + Math.random() * 25 + "px";


el.style.animationDuration =
  3 + Math.random() * 5 + "s";


el.style.animationDelay =
  Math.random() * 0.8 + "s";


document.body.appendChild(el);


setTimeout(() => {

  el.remove();

}, 9000);
```

}

}

/* =========================
EXTRA HEARTS
========================= */

function moreHearts() {

for (let i = 0; i < 25; i++) {

```
const el =
  document.createElement("div");


el.className = "heart";


el.textContent = "❤️";


el.style.left =
  20 + Math.random() * 60 + "vw";


el.style.fontSize =
  15 + Math.random() * 20 + "px";


el.style.animationDuration =
  4 + Math.random() * 3 + "s";


document.body.appendChild(el);


setTimeout(() => {

  el.remove();

}, 8000);
```

}

}

/* =========================
FLOATING HEARTS
========================= */

setInterval(() => {

const el =
document.createElement("div");

el.className = "heart";

el.textContent =
["♥", "♡", "✦"][
Math.floor(
Math.random() * 3
)
];

el.style.left =
Math.random() * 100 + "vw";

el.style.color =
"#ff8fbe";

el.style.fontSize =
12 + Math.random() * 15 + "px";

el.style.animationDuration =
5 + Math.random() * 4 + "s";

document.body.appendChild(el);

setTimeout(() => {

```
el.remove();
```

}, 9000);

}, 900);

/* =========================
TOUCH SWIPE
========================= */

let touchStartX = 0;
let touchEndX = 0;

if (slideFrame) {

slideFrame.addEventListener(
"touchstart",
(e) => {

```
  touchStartX =
    e.changedTouches[0].screenX;

},
{ passive: true }
```

);

slideFrame.addEventListener(
"touchend",
(e) => {

```
  touchEndX =
    e.changedTouches[0].screenX;


  const distance =
    touchEndX - touchStartX;


  if (Math.abs(distance) > 50) {

    if (distance < 0) {

      nextSlide();

    } else {

      previousSlide();

    }

    restartSlideshow();

  }

},
{ passive: true }
```

);

}

/* =========================
MOBILE / FIRST INTERACTION
MUSIC BACKUP
========================= */

document.addEventListener(
"click",
() => {

```
if (
  music &&
  music.paused
) {

  /* Don't force autoplay.
     Browser will allow it after
     user interaction. */

}
```

},
{ once: true }
);
