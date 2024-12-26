/*eslint-disable */
const path = require("path")
const fs = require("node:fs")
const dotenv = require("dotenv")
dotenv.config()
console.log(process.env.NODE_ENV)

const filepath = path.join(process.cwd(), "aula-07", "text.txt")
const fileOutpath = path.join(process.cwd(), "aula-07","texto-com-linhas.txt")
console.log(filepath)

console.time("leitura do arquivo")
console.time("manipular arquivos")

fs.readFile(filepath, {}, (erro, dados) => {
  if (erro) {
    console.error(`Erro na leitura do caminho ${filepath}`)
    return
  }

  console.timeEnd("leitura do arquivo")


  const texto = dados.toString();
  const linhas = texto.split("\n")

  const linhasAjustadas = linhas.map(
    (linha, index, arrayDelinhas) => `${index + 1} - ${linha}`
  )
  
  fs.writeFile(fileOutpath, linhasAjustadas.join("\n"), {}, (erro) => {
    if (erro) {
        console.log(`Erro na escrita do caminho ${fileOutpath}`)
        return
      }
      console.log(`Arquivo salvo no bucket ${process.env.S3_BUCKET}`)
      console.timeEnd("manipular arquivos")
  })
})
