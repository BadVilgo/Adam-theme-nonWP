///////////////////// Kręcenie się karuzeli w prawo
const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}
///////////////////// Kręcenie się karuzeli w prawo
///////////////////// Pokazanie nowej grafiki po kliknięciu w grafikę karuzeli. Otworzenie okna podglądu.

const images = document.querySelectorAll(
  ".img1, .img2, .img3, .img4, .img5, .img6"
);
const imgPreview = document.querySelector(".img-preview");
const closeImgBtn = document.querySelector(".close-preview");
const imgBig = document.querySelector(".img-big");

function updateImageSrc(event) {
  // Extract the class name that starts with 'img' from the clicked element
  const clickedImgClass = Array.from(event.target.classList).find((cls) =>
    cls.startsWith("img")
  );

  // Extract the number from the class name (e.g., '1' from 'img1')
  const imgNumber = clickedImgClass.replace("img", "");

  // Construct the new src path based on the image number
  imgBig.src = `./Adam-theme-nonWP/assets/images/projekt${imgNumber}BIG.jpg`;
  //let imgBig.src = `../../assets/images/projekt2BIG.jpg`;

  // Display the image preview
  imgPreview.style.display = "flex";
}

// Run on click & Loop through all selected images and add the event listener
images.forEach((img) => {
  img.addEventListener("click", updateImageSrc);
});

//Closing image
function closeBigImg() {
  imgPreview.style.display = "none";
}

closeImgBtn.addEventListener("click", closeBigImg);

///////////////////// Pokazanie nowej grafiki po kliknięciu w grafikę karuzeli. Otworzenie okna podglądu.
