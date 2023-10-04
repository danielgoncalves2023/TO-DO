const aFazer = document.getElementById("a_fazer");
const fazendo = document.getElementById("fazendo");
const feito = document.getElementById("feito");

const iconClose = "close-outline";
const iconForward = "chevron-forward-outline";
const iconBack = "chevron-back-outline";

// INPUT DE TAREFA
function novaTarefa() {
    var input = document.getElementById("nova_tarefa").value;

    if (input.length <= 3) {
        alert("Favor digitar um nome válido para a nova tarefa!")
    } else {
        var adicionarTr = document.createElement("tr");
        adicionarTr.innerHTML = `
        <td>${input}</td>
        <td><ion-icon onclick="excluirTarefa(this)" name=${iconClose}></ion-icon><ion-icon onclick="moverFazendo(this)" name=${iconForward}></ion-icon></td>
        `

        aFazer.appendChild(adicionarTr);
    }

    document.getElementById("nova_tarefa").value = "";
}

function excluirTarefa(e) {
    e.parentElement.parentElement.remove();
}

function moveraFazer(e) {
    e.parentElement.parentElement.remove();
    aFazer.appendChild(e.parentElement.parentElement);

    e.parentElement.innerHTML = `
    <ion-icon onclick="excluirTarefa(this)" name=${iconClose}></ion-icon><ion-icon onclick="moverFazendo(this)" name=${iconForward}></ion-icon>
    `
}

function moverFazendo(e) {
    e.parentElement.parentElement.remove();
    fazendo.appendChild(e.parentElement.parentElement);

    e.parentElement.innerHTML = `
    <ion-icon onclick="moveraFazer(this)" name=${iconBack}></ion-icon><ion-icon onclick="excluirTarefa(this)" name=${iconClose}></ion-icon><ion-icon onclick="moverFeito(this)" name=${iconForward}></ion-icon>
    `
}

function moverFeito(e) {
    e.parentElement.parentElement.remove();
    feito.appendChild(e.parentElement.parentElement);
    e.parentElement.innerHTML = `
    <ion-icon onclick="moverFazendo(this)" name=${iconBack}></ion-icon><ion-icon onclick="excluirTarefa(this)" name=${iconClose}></ion-icon>
    `
}