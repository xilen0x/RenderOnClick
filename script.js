/*Using the createElement function, create a DIV container with yellow background
 and "Hello World" as innerHTML, append that DIV into the body of the website when
  the users clicks on the #superDuperButton*/


let div = document.createElement('div');
div.style.backgroundColor = "yellow";
document.getElementById("superDuperButton").onclick = function(){
document.body.appendChild(div).innerHTML = "Hello World";
}
