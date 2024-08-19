//const abuelo = document.querySelector("ul.listas-curso > li.list");

//const elemento = document.getElementsByClassName("listas.curso");
//const elemento = document.getElementById("mensajes");

/*
elemento = document.head;
elemento = document.title;
elemento = document.body;

elemento = document.querySelector("h2");
elemento = document.links;
 */

//console.log(padre.childElementCount);
//console.log(padre.children[1]);
//console.log(padre.firstElementChild);
//console.log(padre.lastElementChild);
//console.log(abuelo.parentElement.parentElement);

/*Crear elemento
const nuevo = document.createElement("a");
nuevo.className = "claseUbi";
nuevo.id = "nuevo id";
nuevo.setAttribute("href", "#");
nuevo.textContent = "nuevo elemento";
$0.appendChild(nuevo);
*/

/*Eventos

const enviar = document.getElementById("mensaje");
function mensajeUno(){
    alert("mensaje enviado");
}

function mensajeDos(){
    alert("mensaje guardado");
} 
*/

/*Eventos 2
const enviar = $0
const evento = () => {console.log("NUMERO DE CLICKS")};
enviar.addEventListener("click", evento);
enviar.removeEventListener("click", evento);
*/

/*Keydown evento teclado
const entrada = document.getElementById("input");

entrada.addEventListener("keydown", function(e){
    console.log("Presionaste la tecla: " + e.key);
});
*/

/*Evento formulario
const formulario = document.getElementById("");

formulario.addEventListener("submit", function(e){
   
   e.preventDefault();
   let mail = document.getElementById("");
   console.log(mail); 
});
*/

/*Eventos especiales

terminos y condiciones
const checkbox = document.getElementById("");

checkbox.addEventListener("change", e => {
    console.log(e);
});

if(e.target.checked){
    console.log("Su solicitud es aceptada");
    console.log("Active la solicitud por favor");
}

eventos multimedias
const video_mp4 = document.getElementById(""),
       boton_play = document.getElementById(""),
       boton_pause = document.getElementById("");

boton_play.addEventListener("click", () => {
   video_mp4.play();
});

boton_pause.addEventListener("click", () => {
   video_mp4.pause();
});
*/

/*Operaciones múltiples
const nodos = [];

for(let i = 0; i < 80; i++){
    const nodo = document.createElement("input");
    nodos.push(nodo);
}

document.body.append(...nodos);
*/

/*DOM traversing
const padre = document.getElementById("padre");
console.log(padre.children);
console.log(padre.childNodes);
console.log(padre.firstElementChild);
console.log(padre.firstChild);
console.log(padre.lastElementChild);
console.log(padre.lastChild);

const nieto = document.getElementById("nieto_dos");
console.log(nieto.nextSibling);
console.log(nieto.nextElementSibling);
console.log(nieto.previousSibling);
console.log(nieto.previousElementSibling);
console.log(padre.parentElement);
*/