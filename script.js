const botao = document.getElementById('pause');
const caixa = document.querySelector('.cube');

botao.addEventListener('click', () => {

    caixa.classList.add('pausado');

    setTimeout(() =>  {
        caixa.classList.remove('pausado');
    }, 1000);
})