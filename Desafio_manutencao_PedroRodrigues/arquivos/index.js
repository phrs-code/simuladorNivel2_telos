function avisar() {
            alert("Você clicou no botão!");
        }

document.addEventListener('load', () =>{
    document.getElementById('meuBotao').addEventListener('click', avisar)
})