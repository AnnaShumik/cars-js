/* Простое предупреждающее модальное диалоговое окно при загрузке сайта - сначала будет модальное окно с цифрой 1
alert (1);
*/

/* Изменение цвета
document.getElementsByClassName("main-title")[0].style.color = "red";
*/

/* При нажатии кнопки "Посмотреть автомобили" будет выскакивать модальное окно с цифрой 1
document.getElementById("main-action").onclick = function () {
    alert (1);
};
*/

document.getElementById("main-action").onclick = function () {
    document.getElementById ("cars").scrollIntoView ({behavior:"smooth"});
};

let buttons = document.getElementsByClassName ("car-button");
for (let i = 0; i < buttons.length; i++) {
    buttons [i].onclick = function () {
        document.getElementById ("price").scrollIntoView ({behavior:"smooth"});
    }
};

document.getElementById("price-action").onclick = function () {
   if (document.getElementById("name").value === "") {
       alert ("Заполните поля имя!")
   }
   else if (document.getElementById("phone").value === "") {
    alert ("Заполните поля телефон!")
   }
   else if (document.getElementById("car").value === "") {
    alert ("Заполните поля автомобиль!")
   }
   else {
    alert ("Спасибо за заявку, мы свяжемся с Вами в ближайшее время!")
   }
};


document.addEventListener("DOMContentLoaded", function () {
    let layer = document.querySelector('.price-image');

document.addEventListener('mousemove', (event) => {
        layer.style.transform = 'translate3d(' + ((event.clientX * 0.3) / 8) + 'px,' + ((event.clientY * 0.2) / 8) + 'px,0px)';
});

    const elem = document.querySelector(".main");
document.addEventListener('scroll', () => {
        elem.style.backgroundPositionX = '0' + (0.5 * window.pageYOffset) + 'px';
})
});
