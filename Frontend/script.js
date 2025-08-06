// Menü açma ve kapama butonlarını seçiyorsun
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");



// Açma butonuna tıklanınca body'ye sınıf ekleniyor/çıkarılıyor
menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
});


// Kapatma butonuna tıklanınca açma butonunun click eventi tekrar tetikleniyor
menuCloseButton.addEventListener("click", () => menuOpenButton.click()); 



// Yorum Gönderme Formu
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const toast = document.getElementById("toast");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    form.reset();

    // Toast mesajı göster
    toast.classList.add("show");

    // 3 saniye sonra gizle
    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  });
});



//Tarifleri gösteren modal penceresi için gerekli kodlar
const recipes = {

  1: {
    title: "Espresso",
    content: "Espresso makinesine taze öğütülmüş koyu kavrulmuş kahve çekirdeklerini koyun. 25-30 ml suyla yaklaşık 25 saniyede demleyin. Yoğun ve küçük hacimli bir kahvedir."
  },
  2: {
    title: "Cappuccino",
    content: "1 shot espresso üzerine eşit miktarda buharda ısıtılmış süt ve süt köpüğü eklenir. Genellikle üstü tarçın ya da kakao ile süslenir."
  },
  3: {
    title: "Mocha",
    content: "1 shot espresso, 2 yemek kaşığı çikolata şurubu ve 150 ml sıcak süt karıştırılır. Üzerine krem şanti eklenebilir. Tatlı ve yoğun bir lezzete sahiptir."
  },
  4: {
    title: "Americano",
    content: "1 shot espresso üzerine 100-150 ml sıcak su eklenerek hazırlanır. Filtre kahveye benzer, ancak daha yumuşak içimlidir."
  },
  5: {
    title: "Macchiato",
    content: "1 shot espresso üzerine sadece birkaç çay kaşığı süt köpüğü eklenir. Kıvamı espressoya çok yakındır, ama daha yumuşaktır."
  },
  6: {
    title: "Cold Brew",
    content: "Orta kalınlıkta öğütülmüş kahve, soğuk su ile 12-24 saat buzdolabında demlenir. Ardından süzülerek servis edilir. Buz ve sütle birlikte sunulabilir."
  },
  7: {
    title: "Frappe",
    content: "Anında çözünebilir kahve, şeker ve az miktar suyu çalkalayarak köpürtün. Ardından buz ve süt ekleyerek servis edin. Soğuk ve ferahlatıcıdır."
  },
  8: {
    title: "Affogato",
    content: "1 top vanilyalı dondurmayı fincana koyun. Üzerine 1 shot sıcak espresso dökün. Hemen servis edin. Hem sıcak hem soğuk lezzeti bir arada sunar."
  },
  9: {
    title: "Bulletproof Coffee",
    content: "1 fincan sıcak filtre kahveye 1 yemek kaşığı tereyağı ve 1 yemek kaşığı hindistan cevizi yağı ekleyip blenderdan geçirin. Keto diyetinde sıkça kullanılır."
  },
  10: {
    title: "Dalgona Kahve",
    content: "2 yemek kaşığı instant kahve, 2 yemek kaşığı şeker ve 2 yemek kaşığı sıcak suyu çırpın. Köpük haline gelince soğuk sütün üzerine ekleyin. Karıştırarak içilir."
  },
  11: {
    title: "Irish Coffee",
    content: "Sıcak kahveye 1 shot İrlanda viskisi ekleyin. Üzerine çırpılmış krema koyun. Şekerle tatlandırılabilir. Geleneksel olarak sıcak içilir."
  },
  12: {
    title: "Iced Latte",
    content: "Bir bardağa buz doldurun. Üzerine soğuk süt ekleyin. Son olarak 1 shot espresso dökerek üç katmanlı görünüm elde edin. Karıştırarak servis edin."
  },
  13: {
    title: "Espresso Tonic",
    content: "Bardağa buz ve tonik ekleyin. Yavaşça 1 shot espresso dökün. Farklı yoğunluklar sayesinde iki katman oluşur. Limon kabuğu ile süsleyebilirsiniz."
  },
  14: {
    title: "Iced Mocha",
    content: "1 shot espresso, 1 yemek kaşığı çikolata şurubu, buz ve süt birleştirilir. Üzerine krema eklenerek servis edilebilir. Hem kahve hem tatlı ihtiyacını karşılar."
  },
  15: {
    title: "Espresso Macchiato",
    content: "1 shot espresso üzerine 1-2 tatlı kaşığı süt köpüğü eklenir. 'Macchiato' kelimesi İtalyanca’da 'lekeli' demektir; kahvenin üzerinde süt lekesi olur."
  },
  16: {
    title: "Café con Miel",
    content: "Espresso, sıcak süt, bal ve tarçınla yapılan İspanyol kökenli bu kahve hem tatlı hem sıcak bir alternatif sunar. Hafif baharatlı tadıyla farklıdır."
  },
  17: {
    title: "Freddo Espresso",
    content: "Çift shot espresso sıcak hazırlanır, buzla birlikte shaker’a koyulup çalkalanır. Köpüklü ve buz gibi servis edilir. Yunanistan’da çok yaygındır."
  },
  18: {
    title: "Karamelli Buzlu Kahve",
    content: "Bardağa buz, süt ve karamel şurubu eklenir. Üzerine espresso dökülür ve karıştırılır. İsteğe bağlı krema veya karamel sos ile süslenebilir."
  },
  19: {
    title: "Mazagran",
    content: "Cezayir kökenli bu kahve için, 1 fincan sert filtre kahveyi demleyin ve soğutun. İçine 1 tatlı kaşığı limon suyu ve birkaç buz küpü ekleyin. İsteğe göre az miktarda bal veya şekerle tatlandırabilirsiniz. Ferah ve sıra dışı bir içecek."
  },
  20: {
    title: "Hindistan Cevizli Cold Brew",
    content: "Cold brew kahveyi bir gece önceden demleyin. Servis esnasında bardağa buz koyun, üzerine kahveyi ve 1/3 oranında hindistan cevizi sütü ekleyin. Hafif ve tropik aromalı bir içecek elde edersiniz."
  },
  21: {
    title: "Tuzlu Karamelli Buzlu Kahve",
    content: "Bardağa karamel şurubu dökün. Üzerine buz ve soğuk süt ekleyin. Son olarak espresso dökülür. En üstüne az miktarda deniz tuzu serpilen krema eklenir."
  },
  22: {
    title: "Portakallı Espresso",
    content: "Espresso bardağınıza taze rendelenmiş portakal kabuğu ekleyin. Üzerine sıcak espresso dökün. İsteğe göre ince bir dilim portakal kenarına eklenebilir."
  },
  23: {
    title: "Matcha Mocha",
    content: "Bir fincanda yarım tatlı kaşığı matcha tozunu sıcak suyla açın. Ayrı kapta 1 shot espresso ve 1 çay kaşığı kakao karıştırılır. Tüm malzemeler sütle birleştirilir ve çırpılır."
  },
  24: {
    title: "Bal Aromalı Latte",
    content: "Bir fincana espresso dökün. Üzerine sıcak süt ve 1 tatlı kaşığı bal ekleyin. Tatlandırıcı eklemeye gerek yoktur; doğal ve yumuşak bir içim sunar."
  },
25:{
  title: "Fıstık Ezmeli Soğuk Kahve",
  content: "Blender’a 1 tatlı kaşığı fıstık ezmesi, 1 shot espresso, 1 bardak soğuk süt, birkaç buz ve isteğe göre 1 tatlı kaşığı bal ekleyin. Karışımı iyice çırpın ve büyük bir bardağa dökün. Üzerine fıstık parçacıkları veya çikolata sosu ile süsleme yapılabilir."
},
26: {
  title: "Biscoff Latte",
  content: "Espresso bardağınıza 1 tatlı kaşığı Biscoff kreması ekleyin ve üzerine sıcak espressoyu dökün. Ayrı kapta sütü ısıtıp köpürtün. Espresso üzerine dökün ve Biscoff bisküvi kırıntılarıyla süsleyin. Tatlı ve baharatlı karamelimsi bir latte alternatifi."
},
27: {
  title: "Fındıklı Mocha",
  content: "1 shot espresso, 1 yemek kaşığı çikolata sosu ve 1 yemek kaşığı fındık şurubunu karıştırın. Üzerine ısıtılmış ve köpürtülmüş süt ekleyin. İsteğe bağlı olarak krema ve fındık parçalarıyla süsleyin."
},
28:{
  title: "White Chocolate Mocha",
  content: "1 shot espresso ve 2 yemek kaşığı beyaz çikolata sosunu karıştırın. Üzerine sıcak süt ekleyin ve köpürtün. Üzeri krema ile süslenebilir. Tatlı ve yumuşak içimli bir tercih."
},
29:{
  title: "Iced Caramel Macchiato",
  content: "Bardağa buzları ekleyin. Üzerine vanilya şurubu ve soğuk süt dökün. Son olarak espressoyu ekleyin ve üstünü karamel sosla süsleyin. Katmanlı sunum için karıştırmadan servis edin."
},
  30:{
  title: "Toffee Nut Latte",
  content: "1 shot espresso, 1 yemek kaşığı toffee nut şurubu ve sıcak sütü karıştırın. Üstünü kremayla kaplayın ve karamel parçaları veya fındık kırığı ile süsleyin."
},
}

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
