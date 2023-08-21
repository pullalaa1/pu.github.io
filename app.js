let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "FFFFFF";
tg.MainButton.color = "#2cab37";

leg item = "";

let name = document.getElementById("name");
let age = document.getElementById("age");
let gender = document.getElementById("gender");

let btn_register = document.getElementById("btn_register");

btn_register.addEventListener("click", function(){
	alert("Hello");
	tg.MainButton.setText("Соощение отправлено");
	tg.MainButton.show()
	tg.sendData("Test");
	tg.sendData(name);
	tg.sendData(age);
	tg.sendData(gender);
});
