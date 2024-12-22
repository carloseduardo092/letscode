const listaDeNumeros = [33, 131, 155, 555, 222, -21, -56];
const users = ["José", "Antonio"];
// código imperativo
// for (let contador = 0; contador < listaDeNumeros.length;  contador+= 1){
//     console.log(listaDeNumeros[contador])
// }

// console.log('Print via while \n')
// let indiceDoNumero = 0
// while(indiceDoNumero < listaDeNumeros.length){
//     console.log(listaDeNumeros[indiceDoNumero])
//     indiceDoNumero +=1
// }

// código declarativo

console.log('Print via for \n')
for (let numero of listaDeNumeros) {
  console.log(numero);
}

for (const user of users) {
  console.log(user);
}
