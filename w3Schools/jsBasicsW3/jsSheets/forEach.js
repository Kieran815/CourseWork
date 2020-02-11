consoles = ["Nintendo Switch", "Sony Playstation 4",
 "Microsoft XBox One"];

 text= "<ul>";
 consoles.forEach(myFunction7);
 text += "</ul>";
 document.getElementById("demo30").innerHTML = text;

 function myFunction7(value) {
   text += "<li>" + value + "</li>";
 }
