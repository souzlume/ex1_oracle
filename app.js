let amigos = [];

function adicionarAmigo() {
    let nomesAmigos = document.getElementById("amigo");
    let nome = nomesAmigos.value.trim();

    if (!nome || !/^[A-Za-zÀ-ú ]+$/.test(nome)) { 
        exibirTexto("resultado", "Digite um nome válido!", false);
        return;
    }

    amigos.push(nome);
    nomesAmigos.value = "";
    atualizarLista();
}

function criarLi(texto) {
    let li = document.createElement("li");
    li.textContent = texto;
    return li;
}

function exibirTexto (listaId, texto, valido) {
    let lista = document.getElementById(listaId);
    let li = criarLi(texto);
    lista.innerHTML = "";
    lista.appendChild(li);
    li.classList.add(valido ? "verdadeiro" : "falso");
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = criarLi(amigos[i]);
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length < 3) {
        exibirTexto("resultado", "Adicione pelo menos três amigos ou mais!", false);
        return;
    }

    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    exibirTexto("resultado", `🎉 Amigo secreto: ${sorteado} 🎉`, true);
}