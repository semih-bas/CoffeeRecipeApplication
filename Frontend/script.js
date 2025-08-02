// Menü açma ve kapama butonlarını seçiyorsun
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");


// Açma butonuna tıklanınca body'ye sınıf ekleniyor/çıkarılıyor
menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
});

// Kapatma butonuna tıklanınca açma butonunun click eventi tekrar tetikleniyor
menuCloseButton.addEventListener("click", () => menuOpenButton.click()); 


//Tarifleri gösteren modal penceresi için gerekli kodlar
const recipes = {
  1: {
    title: "Türk Kahvesi",
    content: "1 tatlı kaşığı kahve, 1 fincan su, isteğe göre şeker. Hepsini cezveye koy, karıştırmadan kısık ateşte pişir. Köpüklenince fincana al."
  },
  2: {
    title: "Latte",
    content: "1 shot espresso, sıcak süt, üstüne süt köpüğü..."
  }
  // Diğer tarifler...
};

document.querySelectorAll(".show-recipe").forEach(button => {
  button.addEventListener("click", () => {
    const id = button.getAttribute("data-recipe"); // Örn: "1"
    const recipe = recipes[id];  // recipes[1] objesi gelir
    if (recipe) {
      document.getElementById("recipeTitle").innerText = recipe.title;
      document.getElementById("recipeContent").innerText = recipe.content;
      document.getElementById("recipeModal").style.display = "block";
    }
  });
});

document.querySelector(".close").addEventListener("click", () => {
  document.getElementById("recipeModal").style.display = "none";
});
