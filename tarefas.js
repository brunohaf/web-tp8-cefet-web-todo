let listaDeTarefas = document.querySelector("ul#lista-tarefas");

const construirTarefa = (nome, categoria, realizada) =>{
    return {
        nome: nome,
        categoria: categoria,
        realizada: realizada
    }
}

const adicionarClasses = (tarefaLi, tarefaClassList) => {
    tarefaClassList.forEach(classs => tarefaLi.classList.add(classs));
}

const constroiTarefaLi = (tarefa) => {
    let tarefaLi = document.createElement("li");
    tarefaLi.innerHTML = tarefa.nome;
    let tarefaClassList = ["item-tarefa",`categoria-${tarefa.categoria}`];
    if(!!tarefa.realizada){
        tarefaClassList.push("marcado");
    }
    adicionarClasses(tarefaLi, tarefaClassList);

    return tarefaLi;
}

const insereTarefaNaPagina = (tarefa) => {
    let tarefaLi = constroiTarefaLi(tarefa);
    listaDeTarefas.appendChild(tarefaLi);
}

let tasks = [construirTarefa("Ler a maldição de strahd", "lazer", false), construirTarefa("Estudar DDD", "estudos", true)]
tasks.forEach(task => insereTarefaNaPagina(task))