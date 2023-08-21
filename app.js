let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "FFFFFF";
tg.MainButton.color = "#2cab37";

let name = document.getElementById("name");
let age = document.getElementById("age");
let gender = document.getElementById("gender");

let btn_register = document.getElementById("btn_register");

// Создание обработчика для кнопки регистрации
btn_register.addEventListener("click", function() {
    let nameValue = name.value;
    let ageValue = age.value;
    let genderValue = gender.value;

    // Отправка данных боту
    tg.sendData(nameValue);
    tg.sendData(ageValue);
    tg.sendData(genderValue);
});
