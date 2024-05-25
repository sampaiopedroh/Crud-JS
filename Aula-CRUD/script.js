const btnCriar = document.querySelector("#btnCriar");
const listaFilmes = document.querySelector('#listaFilmes');
const inputUsuario = document.querySelector('#inputUsuario');
const inputAno = document.querySelector('#inputAno');
const inputDiretor = document.querySelector('#inputDiretor');

const filmes = [
    {
        nome: "Tropa de Elite",
        ano: 2008,
        diretor: "José Padilha"
    },
    {
        nome:"Carros",
        ano:2006,
        diretor:"John Lasseter"
    },
    {
        nome: "Titanic",
        ano: 1997,
        diretor: "James Cameron"
    }
]

btnCriar.addEventListener('click', function (infosDoEvento){
    infosDoEvento.preventDefault();

    criarFilme();


})

//CREATE
function criarFilme(){
    const filmeNovo = {
        nome: inputUsuario.value,
        ano: inputAno.value,
        diretor: inputDiretor.value
    };

    filmes.unshift(filmeNovo);

    renderizarNaTela();
}

//READ
window.onload = renderizarNaTela()

function renderizarNaTela(){

    listaFilmes.innerHTML = "";

    filmes
    .forEach(
        filme => {
            let novoFilme = document.createElement('li');
            novoFilme.innerHTML = `
            <h1>${filme.nome}</h1>
            <p>${filme.ano}</p>
            <h3>${filme.diretor}</h3>
            <button onclick="editarFilme(${filmes.indexOf(filme)})"> Editar </button>
            <button onclick="apagarFilme(${filmes.indexOf(filme)})"> Apagar </button>`;


            listaFilmes.append(novoFilme);
        }
    )
}
//UPDATE
function editarFilme(idFilme){
    //2 - Pegar as novas informações
    const textoModificado = prompt('Digite o novo nome:', filmes[idFilme].nome);
    //3 - Substituir
    filmes[idFilme].nome = textoModificado;
    //4 - Renderizar a tela
    renderizarNaTela();
}

//DELETE
function apagarFilme(idFilme){
     //2 - Apagar o filme
     filmes.splice(idFilme, 1);
     //3 - Atualizar na tela
     renderizarNaTela();
}

const date = new Date();
