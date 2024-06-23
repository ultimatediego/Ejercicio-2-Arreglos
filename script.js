const arreglo = []
//Con Math.random() generamos numeros al azar del 0 al 1 pero punto flotante
//Si multipicamos por 100 generamos numeros al azar punto flotante del 0 al 100
//Con la funcion Math.floor() obtenemos la funcion matematica piso

//ejercicio 1
for (let i = 0; i < 10; i++){
    let x = Math.floor(Math.random() * 100)  // con esto generamos numeros al azar del 0 al 99
    arreglo[i]=x
}
console.log(arreglo)

//ejercicio 2
let ingreso = prompt("Escriba numeros")
const arreglo1 = ingreso.split(",")
let x = []
for (let i = 0; i < arreglo1.length; i++){
    let element = parseInt(arreglo1[i])
    x[i]= element
}
console.log(x)

//ejercicio 3
let arreglo2 = [10,40,30,20,15,5]
arreglo2.sort(function(a, b){return a - b});
/**  el metodo sort() ordena los elementos de un arreglo de manera alfabetica 
 * por lo que para que funcione con numeros debemos agregar esta funcion: function(a, b){return a - b}*/
console.log(arreglo2)

let arreglo3 = arreglo2
a=arreglo3.pop() // el metodo .pop() retorna el ultimo elemnto del arreglo y como ya esta ordenada de menor a mayor, este sera el numero mayor del arreglo
b=arreglo3.shift()// el metodo.shift() retorna el primer elemento del arreglo y como ya esta ordenada de menor a mayor, este sera el numero menor del arreglo

console.log("El numero menor en el arreglo es: " + b)
console.log("El numero mayor en el arreglo es: " + a)
