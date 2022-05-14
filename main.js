


var texto='';  
var resultado='';  
function myFunction() {  
var aleatorio=Math.floor(Math.random()* 6)+1  
texto+=aleatorio+" ";  
resultado='<h3>'+aleatorio+'</h3>'+'<br><br>'+texto;  
document.getElementById("salida").innerHTML = resultado;  

} 

