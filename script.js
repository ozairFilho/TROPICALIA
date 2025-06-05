document.addEventListener('DOMContentLoaded', function (){
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade')
    const botaoDeAcessibilidade = document.getElementById('opcoes-acessibilidade')

botaoDeAcessibilidade.addEventListener('click', function () {
botaoDeAcessibilidade.classList.toggle('rotacao-boto');
botaoDeAcessibilidade.classList.toggle('apresenta-lista')
    })

    const aumentaFontaBotao = document.getElementById ('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById ('diminuir-fonte');

    const alternaContraste = document.getElementById ('alterna-contraste');

    let tamanhoAtualFonte = 1;

    aumentaFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte +=0.1;
        document.body.style.fontsize = `${tamanhoAtualFonte}rem`
    })

     diminuiFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`
    })

    alternaContraste.addEventListener('click', function () {
        document.body.classList.toggle('alto-contraste')
    })
})