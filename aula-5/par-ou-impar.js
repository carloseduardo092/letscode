const listaDeNumeros = [25, 38, 31, 192, 333, 222, 10, 11, 62]
const listaDePares = []
const listaDeImpares = []

let indiceDoNumero = 0

while (indiceDoNumero < listaDeNumeros.length) {
    if (listaDeNumeros[indiceDoNumero] % 2 === 0) {
    listaDePares.push(listaDeNumeros[indiceDoNumero])
    }
    else {
        listaDeImpares.push(listaDeNumeros[indiceDoNumero])
    }
    indiceDoNumero += 1
}

console.log(listaDePares, 'Esses são os números pares.')
console.log(listaDeImpares, 'Esses são os números ímpares.')