document.addEventListener('DOMContentLoaded', function (){
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade')
    const botaoDeAcessibilidade = document.getElementById('opcao-acessibilidade')

botaoDeAcessibilidade.addEventListener('click', function () {
botaoDeAcessibilidade.classList.toggle('rotacao-boto');
botaoDeAcessibilidade.classList.toggle('apresenta-lista')
    })