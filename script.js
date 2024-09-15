let BotaoAdd = document.getElementById('botao');
let Input = document.getElementById('input-tarefa');
let Tarefas = document.getElementById('tarefas');
let marcado = false;

BotaoAdd.addEventListener('click', function() {
    if (Input.value != '') {
        var tarefa = document.createElement('p');
        Tarefas.appendChild(tarefa);
        tarefa.innerText = '- ' + Input.value;
        Input.value = '';

        // Evento de clique para riscar/desriscar tarefa
        tarefa.addEventListener('click', function() {
            if (!marcado) {
                tarefa.style.textDecoration = 'line-through';
                marcado = true;
            } else {
                tarefa.style.textDecoration = 'none';
                marcado = false;
            }
        });

        // Evento de duplo clique para remover a tarefa
        tarefa.addEventListener('dblclick', function() {
            Tarefas.removeChild(tarefa);  // Correção aqui: usar parênteses ()
        });
    }
});
