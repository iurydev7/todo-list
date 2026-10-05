// Realizar uma TO-DO List via terminal com JS
const readline = require('readline-sync');
let tarefas = [];

let executando = true;

while (executando) {

    console.log("\n==============================");
    console.log("      LISTA DE TAREFAS");
    console.log("==============================");
    console.log("1 - Cadastrar tarefa");
    console.log("2 - Listar tarefas");
    console.log("3 - Marcar tarefa como concluída");
    console.log("4 - Excluir tarefa");
    console.log("5 - Sair");
    console.log("==============================");

    let escolha = readline.question('Escolha uma opcao: ');

    switch (escolha) {
        case '1':
            console.log('Cadastrar tarefa');
            let descricao = readline.question('Digite a descricao da tarefa: ');
            let tarefa = {
                descricao: descricao,
                concluida: false
            };
            tarefas.push(tarefa);
            break;

        case '2':

            console.log('Listar tarefas');
            if (tarefas.length === 0) {
                console.log('Nenhuma tarefa cadastrada.');
            } else {
                for (let i = 0; i < tarefas.length; i++) {
                    console.log(`${i + 1} - ${tarefas[i].descricao} - ${tarefas[i].concluida ? 'Concluída' : 'Pendente'}`);
                }
            }
            break;

        case '3':

            console.log('Marcar tarefa como concluida');
            if (tarefas.length === 0) {
                console.log('Nenhuma tarefa cadastrada.');
            } else {
                let indice = readline.question('Digite o número da tarefa a ser marcada como concluida: ') - 1;
                if (indice >= 0 && indice < tarefas.length) {
                    tarefas[indice].concluida = true;
                    console.log('Tarefa marcada como concluida.');
                } else {
                    console.log('Índice invalido.');
                }
            }
            break;
        case '4':

            console.log('Excluir tarefa');
            if (tarefas.length === 0) {
                console.log('Nenhuma tarefa cadastrada.');
            } else {
                let indice = readline.question('Digite o número da tarefa a ser excluída: ') - 1;
                if (indice >= 0 && indice < tarefas.length) {
                    tarefas.splice(indice, 1);
                    console.log('Tarefa excluída.');
                } else {
                    console.log('Índice invalido.');
                }
            }
            break;
        case '5':

            console.log('Saindo...');
            process.exit(0);
        default:
            console.log('Opção invalida!');
    }
}
    let tarefa = {
        descricao: '',
        concluida: false
    }; 
    tarefas.push(tarefa);
