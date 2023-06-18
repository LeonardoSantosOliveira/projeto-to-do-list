var arrayTarefas = []
$(document).ready(function(){
    //ao clicar no botao 'cadastrar'
    $('#cad-button').click(function(e){
        e.preventDefault()
        var tarefa = $('#nome-tarefa').val()
        if(tarefa.length == 0){ //verifica se o input foi preenchido
            alert('O campo precisa ser preenchido')
        } else if(arrayTarefas.includes(tarefa)){ //verifica se a tarefa ja foi adicionada
            alert(`A tarefa ${tarefa} já foi adicionada`)
        } else { //adiciona a tarefa
            arrayTarefas.push(tarefa)
            var item = $(`<li style="display:none">${tarefa}</li>`)
            $('ul').append(item)
            $(item).fadeIn(300)
            $('#nome-tarefa').focus()
        }
        $('#nome-tarefa').val('') //limpa o input de tarefa
        $(item).click(function(){
            if (item.hasClass('complete-tarefa')){
                $(item).removeClass('complete-tarefa')
            } else {
                $(item).addClass('complete-tarefa')
            }
        })
    })

    //ao clicar no botao 'reset'
    $('#cancel-button').click(function(e){
        var listaul = $('#to-do-list')
        listaul.empty() //comando que zera todos os child <li> da <ul>
        $('#nome-tarefa').val('')
        $('#nome-tarefa').focus()
    })
})