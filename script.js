// script.js

fetch("https://api.ipify.org?format=json")
  .then(response => response.json())
  .then(data => {
    const ipAddress = data.ip;
    document.getElementById("ip-address").textContent = "Your IP address is: " + ipAddress;
  })
  .catch(error => {
    console.error("An error occurred:", error);
  });
