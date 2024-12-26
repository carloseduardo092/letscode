/*eslint-disable */
const path = require('path')
const fs = require('node:fs')

const filepath = path.join(process.cwd(), 'aula-07', 'text.txt')

fs.readFile(filepath, {}, (erro, dados) => {
    if(erro) {
        console.log(`Erro na leitura do caminho ${filepath}`)
        return
    }
    const texto = dados.toString()
    const linhas = texto.split('\n')

    linhas.forEach((linha, index, arrayDelinhas) => 
        console.log(`${index + 1} - ${linha}`))

    // console.log(dados.toString())
}
)
