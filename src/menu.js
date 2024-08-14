// pegar quando rolar a tela
window.addEventListener('scroll', () => {
    // pegadno o cabeçario 
    let top_header = document.querySelector('.top-header');
    // adicionando a classe dinamicamente 
    // classe 0 add assim que o eixo tiver scrollY maior q 0
    top_header.classList.toggle('rolagem', window.scrollY > 50)
})