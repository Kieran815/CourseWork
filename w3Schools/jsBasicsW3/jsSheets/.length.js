consoles = ["X-Box One", "Playstation 4", "Nintendo Switch"];

document.getElementById("demo32").innerHTML = consoles;

function myFunction9() {
  consoles[consoles.length] = "PC Gaming";
  document.getElementById("demo32").innerHTML = consoles;
}
