// app.js

let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#ffffff";
tg.MainButton.color = "#2cab37";

let name = document.getElementById("name");
let age = document.getElementById("age");
let gender = document.getElementById("gender");

let btn = document.getElementById("btn");

// Функция для получения IP-адреса пользователя
function getIpAddress() {
    console.log('test');
    fetch("https://api.ipify.org?format=json")
        .then(response => response.json())
        .then(data => {
            const ipAddress = data.ip;
            document.getElementById("ip-address").textContent = "Your IP address is: " + ipAddress;
        })
        .catch(error => {
            console.error("An error occurred:", error);
        });
}

btn.addEventListener('click', function() {
   //tg.MainButton.show();
    tg.sendData("Click");
    console.log('test2');
});

Telegram.WebApp.onEvent('mainButtonClicked', function(){
      tg.sendData("some string that we need to send"); 
      //при клике на основную кнопку отправляем данные в строковом виде
   });
