import "./styles.css";

//linea 15 por prompt
//let condition: any = prompt("Es culpable? Ingrese si o no");

//De la line 7 a la 13 ingreso por imput de html
let dato = document.getElementById("dato");
let btn = document.getElementById("btn");

//ESCUCHO EL BOTON Y ALMACENO LOS DATOS CAPTURADOS DEL INPUT PARA SER USADOS
btn.addEventListener("click", () => {
  let condition: string = String(dato.value);
  const resultado = document.getElementById("resultado");
  
if (condition == "no") {
  console.log("Iras a Casa");
  resultado.innerText =("Iras a Casa");
} else if (condition == "si") {
  console.log("Iras a la carcel");
  resultado.innerText =("Ira a la carcel");
}
else {
  condition == "";
  console.log("Por favor ingrese solamente si o no");
  resultado.innerText =("Por favor ingrese solamente si o no");
}
}
