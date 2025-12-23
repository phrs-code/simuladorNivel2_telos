document.addEventListener('DOMContentLoaded', () => {
    const botao = document.getElementById('meuBotao');
    
    if (botao) {
        botao.addEventListener('click', () => {
            alert("Você clicou no botão!");
        });
    }
});