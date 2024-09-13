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
const imgPreview2 = document.querySelector(".img-preview2");

function updateImageSrc(event) {
  // Extract the class name that starts with 'img' from the clicked element
  const clickedImgClass = Array.from(event.target.classList).find((cls) =>
    cls.startsWith("img")
  );

  // Extract the number from the class name (e.g., '1' from 'img1')
  const imgNumber = clickedImgClass.replace("img", "");

  // Construct the new src path based on the image number
  imgBig.src = `assets/images/projekt${imgNumber}BIG.jpg`;
  //let imgBig.src = `../../assets/images/projekt2BIG.jpg`;

  // Display the image preview
  imgPreview.style.display = "flex";
  imgPreview2.style.display = "flex";
}

// Run on click & Loop through all selected images and add the event listener
images.forEach((img) => {
  img.addEventListener("click", updateImageSrc);
});

//Closing image
function closeBigImg() {
  imgPreview.style.display = "none";
  imgPreview2.style.display = "none";
}

closeImgBtn.addEventListener("click", closeBigImg);

///////////////////// guzik w prawo i lewo

// Pobranie referencji do przycisków
const leftArrow = document.querySelector(".left-preview");
const rightArrow = document.querySelector(".right-preview");

// Liczba obrazów (można zmieniać, jeśli dodasz więcej)
let totalImages = 7;

// Zmienna przechowująca aktualny numer obrazu
let currentImageNumber = 1; // Domyślnie zaczynamy od obrazu 1

// Funkcja aktualizująca obraz na podstawie numeru
function updateBigImage(number) {
  imgBig.src = `assets/images/projekt${number}BIG.jpg`;

  // Ukrywanie strzałek w zależności od aktualnego numeru obrazu
  if (number <= 1) {
    leftArrow.style.display = "none"; // Ukryj strzałkę w lewo, jeśli to pierwszy obraz
  } else {
    leftArrow.style.display = "flex"; // Pokaż strzałkę, jeśli nie jest to pierwszy obraz
  }

  if (number >= totalImages) {
    rightArrow.style.display = "none"; // Ukryj strzałkę w prawo, jeśli to ostatni obraz
  } else {
    rightArrow.style.display = "flex"; // Pokaż strzałkę, jeśli nie jest to ostatni obraz
  }
}

// EventListener dla kliknięcia w obrazy
function updateImageSrc(event) {
  // Pobieranie numeru z klikniętego elementu
  const clickedImgClass = Array.from(event.target.classList).find((cls) =>
    cls.startsWith("img")
  );
  const imgNumber = parseInt(clickedImgClass.replace("img", ""));

  // Zaktualizowanie aktualnego numeru obrazu
  currentImageNumber = imgNumber;

  // Aktualizacja obrazu
  updateBigImage(currentImageNumber);

  // Wyświetlenie podglądu obrazu
  imgPreview.style.display = "flex";
  imgPreview2.style.display = "flex";
}

// EventListener dla guzika w lewo
leftArrow.addEventListener("click", function () {
  if (currentImageNumber > 1) {
    currentImageNumber--; // Zmniejsz numer obrazu
    updateBigImage(currentImageNumber); // Zaktualizuj obraz
  }
});

// EventListener dla guzika w prawo
rightArrow.addEventListener("click", function () {
  if (currentImageNumber < totalImages) {
    currentImageNumber++; // Zwiększ numer obrazu
    updateBigImage(currentImageNumber); // Zaktualizuj obraz
  }
});

// Inicjalizacja (pokaż ukryj strzałki w zależności od startowego obrazu)
updateBigImage(currentImageNumber);
