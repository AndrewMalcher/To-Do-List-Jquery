$(document).ready(function() {

$('button').click(function(){
    const novaAtividade = $('#atividade').val();
    const novoItem = $('<li></li>');
    $('ul').append('<li>' + novaAtividade + '<i class="fas fa-check"></i> <i class="fas fa-trash"></i></li>')
    $('#atividade').val('');

    $('ul').on('click','.fa-trash', function(){
        $(this).parent('li').fadeOut(400);
    })
    $('ul').on('click','.fa-check', function(){
        $(this).parent('li').toggleClass('checked') ;
    })
})
})