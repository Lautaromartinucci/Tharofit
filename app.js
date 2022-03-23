const Nombre = prompt("Ingrese su nombre");
switch(Nombre){
    case "Lautaro":
        alert("Hola Lautaro")
        break;
    case "lautaro":
        alert("Hola Lautaro")
        break;
    default:
        alert(Nombre + " Bienvenido a Tharo")
        break;
}
console.log("El nombre del usuario es " + Nombre);

function suma1() {
    let num1 = 1500;
    let num2 = Number(document.getElementById('r1').value);
    let Respuesta = num1*num2;
    document.getElementById('r2').value = Respuesta;
    return Respuesta;

}

function suma2() {
    let num1 = 2500;
    let num2 = Number(document.getElementById('y1').value);
    const Respuesta2 = num1*num2;
    document.getElementById('y2').value = Respuesta2;
    return Respuesta2;

}

function suma3() {
    let num1 = 1800;
    let num2 = Number(document.getElementById('t1').value);
    const Respuesta3 = num1*num2;
    document.getElementById('t2').value = Respuesta3;
    return Respuesta3;

}

for(let contador=1; contador <= 5; contador++){
    let precio1 = 1500*contador;  
console.log(`1500 x ${contador} = ${precio1}`);
}

for(let contador=1; contador <= 5; contador++){
    let precio2 = 2500*contador;  
console.log(`2500 x ${contador} = ${precio2}`);
if(contador == 2){
    break;
}
}


for(let contador=1; contador <= 5; contador++){
    let precio3 = 1800*contador;  
console.log(`1800 x ${contador} = ${precio3}`);
if(contador == 4){
    break;
}
}