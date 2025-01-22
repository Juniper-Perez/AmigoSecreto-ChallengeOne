amigos = [];


function adicionarAmigo() {
    let nomeAmigo = document.querySelector('input').value;  
    let listaDeAmigos = document.getElementById("listaAmigos");  
    let li = document.createElement("li");  

    if (nomeAmigo) {  
        let existe = false;  

        for (let i = 0; i < amigos.length; i++) {
            if (amigos[i] === nomeAmigo) {
                existe = true;  
                break; 
            }
        }

        if (!existe) {
            amigos.push(nomeAmigo);  

            li.textContent = nomeAmigo;  
            listaDeAmigos.appendChild(li);  
              
        } else {
            alert('Este amigo já está na lista');
        }
    } else {
        console.log('Nome vazio');
        alert('Por favor, insira um nome');
    }

    limparNome();  
    console.log(amigos);  
}


function limparNome() {
    let nomeAmigo = document.querySelector('input')
    nomeAmigo.value = '';

} 

function sortearAmigo() {
    limparLista();

}

function limparLista() {
    let listaDeAmigos = document.getElementById("listaAmigos");
    listaDeAmigos.innerHTML = "";
    amigos.length = 0;
}

