const names = [
  "bzzt",
  "beep",
  "boop",
  "bup",
  "humano",
  "droide",
  "gladus",
  "uoli",
  "bot",
  "binario",
  "silva",
  "daftpunkson",
  "detroit",
  "markzucc"
]
const account = names[Math.floor(Math.random()*names.length)] + names[Math.floor(Math.random()*names.length)]

document.getElementById("username").textContent = "Continue como " + account
document.getElementById("not-user").textContent = "Não é " + account + "?"

const phone = document.querySelector(".instagram-phone").children[0]
const phone2 = document.querySelector(".instagram-phone").children[1]
const prints = [
  "img/print1.png",
  "img/print2.png",
  "img/print3.png",
  "img/print4.png",
]
let curr = 0

phone.src = prints[curr]
phone.style.animation = "none";
phone.style.opacity = "0%";
phone2.src = prints[curr >= prints.length - 1 ? 0 : curr + 1]

setInterval(function() {
  curr = curr >= prints.length - 1 ? 0 : curr + 1
  phone.src = prints[curr]
  phone.style.animation = "none";
  phone.style.opacity = "100%";
  phone2.src = prints[curr >= prints.length - 1 ? 0 : curr + 1]
  setTimeout(() => {
    phone.style.animation = "";
    phone.style.opacity = "";
  }, 10);
}, 4000)