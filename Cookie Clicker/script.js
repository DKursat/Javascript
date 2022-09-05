let cookie = 0;
function onClick() {
  console.log("geclickt");
  document.getElementById("Zahl").innerHTML = ++cookie;
  console.log(cookie);
}