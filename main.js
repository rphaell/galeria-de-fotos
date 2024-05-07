$(document).ready(function(){
    $('header button').click(function(){
    $('form').slideDown(); //mostrar o form ao click no botao do header
    })

    $('#bt-cancelar').click(function () {
    $('form').slideUp(); //recolher form

    })

    $('form').on('submit', function(e) {
        e.preventDefault();      
        const enderecoDaNovaImagem = $('#endereco-img-nova').val();
        const novoItem = $('<li style="display:none"></li>');
        
        $(`<img src="${enderecoDaNovaImagem}"/>`).appendTo(novoItem) // criando elemento no jquery, append to pega primeiro elemento e insere entre a abertura do li e fechamento no novoItem
        $(`
            <div class="overlay-img-link">
            <a href="${enderecoDaNovaImagem}" target="_blank" title ="Verimagem em tamanho real">
                Ver imagem em tamanho real
            </a>
            
            </div>

        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#endereco-img-nova').val('')
    })
})