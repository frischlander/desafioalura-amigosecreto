let amigos =[];

function adicionarAmigo(){
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();

    if(nomeAmigo == ""){
        alert("Por favor, insira um nome.");
        return;
    }
    if(amigos.includes(nomeAmigo)){
        alert(`O nome ${nomeAmigo} já está na lista.`);
        return;
    }
    amigos.push(nomeAmigo);
    
    inputAmigo.value  = "";

    atualizarLista();
}

function atualizarLista(){
    const listaAmigos = document.getElementById('listaAmigos');

    listaAmigos.innerHTML = "";

    for(let i = 0; i <amigos.length; i++){
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo(){
    if(amigos.length == 0){
        alert("Insira ao menos um nome para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos[indiceAleatorio];

    const resultado = document.getElementById('resultado');
    
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}