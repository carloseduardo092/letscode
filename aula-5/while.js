const nomesDeUsuarios = ['Joana', 'Renata', 'Cleber', 'Zeca', 'Carla']

// console.log('Ola',  nomesDeUsuarios)

let indiceDoUsuario = 0
// let indiceAtual = nomesDeUsuarios.length
// console.log({indiceAtual})

// while (indiceDoUsuario < indiceAtual) {
//     console.log('Olá', nomesDeUsuarios[indiceDoUsuario])
//     indiceDoUsuario = indiceDoUsuario + 1
// }

while (indiceDoUsuario < nomesDeUsuarios.length) {
    console.log('Olá', nomesDeUsuarios[indiceDoUsuario])
    // indiceDoUsuario = indiceDoUsuario + 1
    indiceDoUsuario += 1
}