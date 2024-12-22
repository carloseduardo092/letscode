const user = {
  name: "JoSÉ mARIa SOUSA santos",
  email: "JOSE.M1@gmail.com",
  age: 23,
  address: " x Street",
}
// quando devo usar for...in? Quanod for utilizar arrays
// Quando devo usar for...of? Quando for manipular objetos

const numeros = [11, 352, 14125]
numeros[200] = 321


// má prática, evitem ao máximo de utilizar for...in com arrays
for (const key in numeros){
    console.log(numeros[key])
}



for ( const key in user) {
    if (key === 'name') {
        const names = user[key].split(' ')
        user[key] = ''

        for (const name of names) {
            const normalizedName = name.toLowerCase()
            const [primeiraLetra, ...restoDonome] = normalizedName

            user[key] = user[key] + ' ' + primeiraLetra.toUpperCase() + restoDonome.join('')
            user[key] = user[key].trim()
        }
    }
    if (key === 'email') {
        user[key] = user[key].toLocaleLowerCase()
    }
}

console.log(user)