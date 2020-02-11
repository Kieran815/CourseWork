consoles = ["Nintendo Switch", "Sony Playstation 4",
 "Microsoft XBox One"];
conLen = consoles.length;
txt = "<ul>";
for (i = 0; i < conLen; i++) {
  txt += "<li>" + consoles[i] + "</li>";
}
txt += "/<ul>";
document.getElementById("demo29").innerHTML = txt;
