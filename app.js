let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "FFFFFF";
tg.MainButton.color = "#2cab37";

leg item = "";

let name = document.getElementById("name");
let age = document.getElementById("age");
let gender = document.getElementById("gender");

let btn = document.getElementById("btn_register");

btn.addEventListener('click', function(){ //вешаем событие на нажатие html-кнопки
      if (tg.MainButton.isVisible){ //если кнопка показана 
         tg.MainButton.hide() //скрываем кнопку 
      }
      else{ //иначе
         tg.MainButton.show() //показываем 
      }
   });

Telegram.WebApp.onEvent('mainButtonClicked', function(){
      tg.sendData("some string that we need to send"); 
      //при клике на основную кнопку отправляем данные в строковом виде
   });
