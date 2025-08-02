// Menü açma ve kapama butonlarını seçiyorsun
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");


// Açma butonuna tıklanınca body'ye sınıf ekleniyor/çıkarılıyor
menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
});

// Kapatma butonuna tıklanınca açma butonunun click eventi tekrar tetikleniyor
menuCloseButton.addEventListener("click", () => menuOpenButton.click()); 
