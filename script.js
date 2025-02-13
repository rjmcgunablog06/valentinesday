document.addEventListener("DOMContentLoaded", function () {
  const loveButton = document.querySelector(".love-button");
  const hiddenContent = document.querySelector(".hidden-content");
  const hiddenMessage = document.querySelector(".hidden-message");
  const photos = document.querySelectorAll(".photos img");
  const photoGalleryTitle = document.querySelector(".photo-gallery h2");
  const messageText = document.querySelector(".message");
  const heartContainer = document.querySelector(".heart-container");
  const loveSong = document.getElementById("loveSong");

  loveButton.addEventListener("click", function () {
    hiddenContent.style.display = "block";

    setTimeout(() => {
      hiddenContent.style.opacity = "1";
      hiddenContent.style.transform = "translateY(0)";
      messageText.style.transform = "scale(1)";
      photoGalleryTitle.style.opacity = "1";
      photoGalleryTitle.style.transform = "translateY(0)";

      photos.forEach((photo, index) => {
        setTimeout(() => {
          photo.style.opacity = "1";
          photo.style.transform = "translateY(0)";
        }, index * 300);
      });

      hiddenMessage.style.opacity = "1";
    }, 200);

    loveButton.style.transform = "scale(0)";
    setTimeout(() => {
      loveButton.style.display = "none";
    }, 500);

    // Auto-play music when clicked
    loveSong.play().catch((error) => {
      console.log("Music play failed:", error);
    });
  });

  // Floating Hearts Effect
  function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 1 + "s";
    heart.style.setProperty("--randomX", Math.random() * 20 - 10 + "vw");

    heartContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 3000);
  }

  setInterval(createHeart, 200);
});
