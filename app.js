let amigos = [];


function adicionarAmigo() {
    let nomeAmigo = document.querySelector('input').value;
    let listaDeAmigos
    if (nomeAmigo) {  // Verifica se o valor não está vazio
        amigos.push(nomeAmigo);  
        console.log (amigos)
        listaDeAmigos = document.getElementById("listaAmigos").textContent = amigos.join(', ');
    } else {
        console.log ('Nome vazio');
         alert ('Por Favor insira um nome');
    }
    limparNome()
}

function limparNome() {
    let nomeAmigo = document.querySelector('input')
    nomeAmigo.value = '';
} 


