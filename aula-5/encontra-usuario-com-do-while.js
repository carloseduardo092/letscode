// const listaDeContatos = ['Paulo', 'Selina', 'Roger', 'Rubens', 'Zeca', 'Josué', 'Natália', 'Bianca']

const listaDeContatos = [];

let encontrouUsuarioOuPercorreuLista = false;
let indiceDoUsuario = 0;

do {
  const usuarioAtual = listaDeContatos[indiceDoUsuario];
  if (usuarioAtual && usuarioAtual.startsWith("Z")) {
    encontrouUsuarioOuPercorreuLista = true
    console.log(`Usuário encontrado: ${usuarioAtual}`);
  }
  indiceDoUsuario += 1;

  if (indiceDoUsuario >= listaDeContatos.length) {
    encontrouUsuarioOuPercorreuLista = true;
    console.log("Usuário não foi encontrado");
  }
} while (false);
