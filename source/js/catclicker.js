// logic for Cat clicker, with persistent counter across all pages

document.addEventListener("DOMContentLoaded", () => {
  // get the html elements for the cat and the counter into a variable
  const cat = document.getElementById("cat");
  const clickCounter = document.getElementById("clickCounter");

  // get the saved clicks from the other pages
  let clicks = Number(localStorage.getItem("cat_clicks"));
  if (Number.isNaN(clicks)) clicks = 0;
  updateCounter();

  // count clicks anywhere on the page
  document.addEventListener("click", (event) => {
    clicks += 1;
    localStorage.setItem("cat_clicks", String(clicks));
    updateCounter();
    spawnHeart();
  });

  function updateCounter() {
    clickCounter.textContent = `Clicks: ${clicks}`;
  }

  function spawnHeart() {
    cat.style.position = "relative";

    const heart = document.createElement("img");
    heart.src = "../assets/heart.png";
    heart.style.width = "25px";
    heart.style.height = "25px";
    heart.style.position = "absolute";

    const cat_pos = cat.getBoundingClientRect();
    const heartSpawn_x = Math.random() * Math.max(1, cat_pos.width);
    const heartSpawn_y = Math.random() * Math.max(1, cat_pos.height);

    heart.style.left = `${heartSpawn_x}px`;
    heart.style.top = `${heartSpawn_y}px`;

    cat.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 1300);

  }

});