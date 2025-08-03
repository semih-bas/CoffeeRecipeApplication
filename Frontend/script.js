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
    content: "Cezveye kişi başı 1 tatlı kaşığı kahve ve 1 fincan su koy. Şeker tercihe bağlıdır. Karıştırmadan kısık ateşte pişir. Köpüklenince fincana al ve kalan kahveyi tekrar kaynatıp üzerine dök."
  },
  2: {
    title: "Latte",
    content: "1 shot espresso hazırlayın. Üzerine 200 ml ısıtılmış süt dökün. Üstüne süt köpüğü ekleyin. Dilerseniz tarçın veya vanilya ile tatlandırabilirsiniz."
  },
  3: {
    title: "Espresso",
    content: "Espresso makinesine taze öğütülmüş koyu kavrulmuş kahve çekirdeklerini koyun. 25-30 ml suyla yaklaşık 25 saniyede demleyin. Yoğun ve küçük hacimli bir kahvedir."
  },
  4: {
    title: "Cappuccino",
    content: "1 shot espresso üzerine eşit miktarda buharda ısıtılmış süt ve süt köpüğü eklenir. Genellikle üstü tarçın ya da kakao ile süslenir."
  },
  5: {
    title: "Mocha",
    content: "1 shot espresso, 2 yemek kaşığı çikolata şurubu ve 150 ml sıcak süt karıştırılır. Üzerine krem şanti eklenebilir. Tatlı ve yoğun bir lezzete sahiptir."
  },
  6: {
    title: "Americano",
    content: "1 shot espresso üzerine 100-150 ml sıcak su eklenerek hazırlanır. Filtre kahveye benzer, ancak daha yumuşak içimlidir."
  },
  7: {
    title: "Macchiato",
    content: "1 shot espresso üzerine sadece birkaç çay kaşığı süt köpüğü eklenir. Kıvamı espressoya çok yakındır, ama daha yumuşaktır."
  },
  8: {
    title: "Cold Brew",
    content: "Orta kalınlıkta öğütülmüş kahve, soğuk su ile 12-24 saat buzdolabında demlenir. Ardından süzülerek servis edilir. Buz ve sütle birlikte sunulabilir."
  },
  9: {
    title: "Frappe",
    content: "Anında çözünebilir kahve, şeker ve az miktar suyu çalkalayarak köpürtün. Ardından buz ve süt ekleyerek servis edin. Soğuk ve ferahlatıcıdır."
  },
  10: {
    title: "Flat White",
    content: "1 shot espresso üzerine, çok ince ve ipeksi süt köpüğü eklenerek yapılır. Latte’ye benzer ama daha yoğun kahve aromasına sahiptir."
  },
  11: {
    title: "Affogato",
    content: "1 top vanilyalı dondurmayı fincana koyun. Üzerine 1 shot sıcak espresso dökün. Hemen servis edin. Hem sıcak hem soğuk lezzeti bir arada sunar."
  },
  12: {
    title: "Ristretto",
    content: "Espresso makinesinde daha az su (yaklaşık 15–20 ml) ile daha kısa sürede demlenir. Daha az acı, ama daha yoğun ve tatlı bir aromaya sahiptir."
  },
  13: {
    title: "Bulletproof Coffee",
    content: "1 fincan sıcak filtre kahveye 1 yemek kaşığı tereyağı ve 1 yemek kaşığı hindistan cevizi yağı ekleyip blenderdan geçirin. Keto diyetinde sıkça kullanılır."
  },
  14: {
    title: "Dalgona Kahve",
    content: "2 yemek kaşığı instant kahve, 2 yemek kaşığı şeker ve 2 yemek kaşığı sıcak suyu çırpın. Köpük haline gelince soğuk sütün üzerine ekleyin. Karıştırarak içilir."
  },
  15: {
    title: "Irish Coffee",
    content: "Sıcak kahveye 1 shot İrlanda viskisi ekleyin. Üzerine çırpılmış krema koyun. Şekerle tatlandırılabilir. Geleneksel olarak sıcak içilir."
  },
  16: {
    title: "Iced Latte",
    content: "Bir bardağa buz doldurun. Üzerine soğuk süt ekleyin. Son olarak 1 shot espresso dökerek üç katmanlı görünüm elde edin. Karıştırarak servis edin."
  },
  17: {
    title: "Vietnam Kahvesi",
    content: "Kondanse sütü bardağın altına koyun. Üzerine Vietnam filtresiyle koyu kavrulmuş kahve demleyin. Buz eklenerek soğuk da içilebilir."
  },
  18: {
    title: "Espresso Tonic",
    content: "Bardağa buz ve tonik ekleyin. Yavaşça 1 shot espresso dökün. Farklı yoğunluklar sayesinde iki katman oluşur. Limon kabuğu ile süsleyebilirsiniz."
  },
  19: {
    title: "Cortado",
    content: "1 shot espresso ve eşit miktarda buharda ısıtılmış süt karıştırılır. Köpük miktarı azdır. Latte’den daha yoğun, espressodan daha yumuşaktır. İdeal oran: 1:1."
  },
  20: {
    title: "Café Miel",
    content: "Bir shot espresso, 1 tatlı kaşığı bal, ısıtılmış süt ve üzerine bir tutam tarçın eklenerek hazırlanır. Doğal tatlılık isteyenler için harika bir alternatiftir."
  },
  21: {
    title: "Iced Mocha",
    content: "1 shot espresso, 1 yemek kaşığı çikolata şurubu, buz ve süt birleştirilir. Üzerine krema eklenerek servis edilebilir. Hem kahve hem tatlı ihtiyacını karşılar."
  },
  22: {
    title: "Espresso Macchiato",
    content: "1 shot espresso üzerine 1-2 tatlı kaşığı süt köpüğü eklenir. 'Macchiato' kelimesi İtalyanca’da 'lekeli' demektir; kahvenin üzerinde süt lekesi olur."
  },
  23: {
    title: "Café con Miel",
    content: "Espresso, sıcak süt, bal ve tarçınla yapılan İspanyol kökenli bu kahve hem tatlı hem sıcak bir alternatif sunar. Hafif baharatlı tadıyla farklıdır."
  },
  24: {
    title: "Freddo Espresso",
    content: "Çift shot espresso sıcak hazırlanır, buzla birlikte shaker’a koyulup çalkalanır. Köpüklü ve buz gibi servis edilir. Yunanistan’da çok yaygındır."
  },
  25: {
    title: "Fındıklı Latte",
    content: "1 shot espresso ve ısıtılmış sütün içine 1 tatlı kaşığı fındık aroması (şurubu) eklenir. Son derece aromatik ve yumuşak içimli bir kahvedir."
  },
  26: {
    title: "Karamelli Buzlu Kahve",
    content: "Bardağa buz, süt ve karamel şurubu eklenir. Üzerine espresso dökülür ve karıştırılır. İsteğe bağlı krema veya karamel sos ile süslenebilir."
  },
  27: {
    title: "Mazagran",
    content: "Cezayir kökenli bu kahve için, 1 fincan sert filtre kahveyi demleyin ve soğutun. İçine 1 tatlı kaşığı limon suyu ve birkaç buz küpü ekleyin. İsteğe göre az miktarda bal veya şekerle tatlandırabilirsiniz. Ferah ve sıra dışı bir içecek."
  },
  28: {
    title: "Damla Sakızlı Türk Kahvesi",
    content: "Klasik Türk kahvesi yapımına başlamadan önce cezveye 1 küçük parça damla sakızı atılır. Üzerine 1 tatlı kaşığı kahve, 1 fincan su ve isteğe göre şeker eklenir. Sakız eriyene kadar kısık ateşte karıştırmadan pişirilir."
  },
  29: {
    title: "Yumurtalı Vietnam Kahvesi",
    content: "2 yumurta sarısı, 2 yemek kaşığı yoğunlaştırılmış sütle çırpılır. Ayrı bir bardakta sıcak espresso hazırlanır. Üzerine çırpılmış yumurtalı karışım yavaşça dökülür. Tatlı ve kremsi bir kahve deneyimi sunar."
  },
  30: {
    title: "Hindistan Cevizli Cold Brew",
    content: "Cold brew kahveyi bir gece önceden demleyin. Servis esnasında bardağa buz koyun, üzerine kahveyi ve 1/3 oranında hindistan cevizi sütü ekleyin. Hafif ve tropik aromalı bir içecek elde edersiniz."
  },
  31: {
    title: "Tuzlu Karamelli Buzlu Kahve",
    content: "Bardağa karamel şurubu dökün. Üzerine buz ve soğuk süt ekleyin. Son olarak espresso dökülür. En üstüne az miktarda deniz tuzu serpilen krema eklenir."
  },
  32: {
    title: "Fas Baharatlı Kahve",
    content: "Cezveye 1 tatlı kaşığı kahve, 1 fincan su, çeyrek çay kaşığı tarçın, kakule ve zencefil eklenir. Kısık ateşte pişirilir. Baharatlı, sıcak ve karakteristik bir içim sunar."
  },
  33: {
    title: "Portakallı Espresso",
    content: "Espresso bardağınıza taze rendelenmiş portakal kabuğu ekleyin. Üzerine sıcak espresso dökün. İsteğe göre ince bir dilim portakal kenarına eklenebilir."
  },
  34: {
    title: "Matcha Mocha",
    content: "Bir fincanda yarım tatlı kaşığı matcha tozunu sıcak suyla açın. Ayrı kapta 1 shot espresso ve 1 çay kaşığı kakao karıştırılır. Tüm malzemeler sütle birleştirilir ve çırpılır."
  },
  35: {
    title: "Bal Aromalı Latte",
    content: "Bir fincana espresso dökün. Üzerine sıcak süt ve 1 tatlı kaşığı bal ekleyin. Tatlandırıcı eklemeye gerek yoktur; doğal ve yumuşak bir içim sunar."
  },
  36: {
    title: "Gül Aromalı Cappuccino",
    content: "Espresso hazırlanır. Sıcak süte birkaç damla gül şurubu eklenerek köpürtülür. Gül aromalı süt, espresso üzerine dökülür. İsteğe göre kurutulmuş gül yapraklarıyla süslenebilir."
  },
  37:{
  title: "Kakuleli Latte",
  content: "Bir shot espresso hazırlayın. Sütü ısıtıp köpürtün, içerisine yarım çay kaşığı öğütülmüş kakule ekleyin. Espressoyu bardağa alın, üstüne kakuleli sütü ekleyin. Üzerine tarçın serpiştirerek servis edebilirsiniz. Egzotik ve yumuşak aromalı bir latte deneyimi."
},
38:{
  title: "Fıstık Ezmeli Soğuk Kahve",
  content: "Blender’a 1 tatlı kaşığı fıstık ezmesi, 1 shot espresso, 1 bardak soğuk süt, birkaç buz ve isteğe göre 1 tatlı kaşığı bal ekleyin. Karışımı iyice çırpın ve büyük bir bardağa dökün. Üzerine fıstık parçacıkları veya çikolata sosu ile süsleme yapılabilir."
},

39: {
  title: "Biscoff Latte",
  content: "Espresso bardağınıza 1 tatlı kaşığı Biscoff kreması ekleyin ve üzerine sıcak espressoyu dökün. Ayrı kapta sütü ısıtıp köpürtün. Espresso üzerine dökün ve Biscoff bisküvi kırıntılarıyla süsleyin. Tatlı ve baharatlı karamelimsi bir latte alternatifi."
},
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
