let listaDeTarefas = document.querySelector("ul#lista-tarefas");
let filterEl = document.querySelector("#filtro-de-categoria");

const construirTarefa = (nome, categoria, realizada) =>{
    return {
        nome: nome,
        categoria: categoria,
        realizada: realizada
    }
}

const cadastrarTarefa = () => {
    let nomeTarefaEl = document.querySelector("#nova-tarefa-nome");
    let nomeTarefa = nomeTarefaEl.value;
    let categoriaTarefa = document.querySelector("#nova-tarefa-categoria").value;
    insereTarefaNaPagina(construirTarefa(nomeTarefa,categoriaTarefa, false))
    nomeTarefaEl.value = "";
    nomeTarefaEl.focus()
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

const filtrarTarefas = () => {
    let categoriaDoFiltro = filterEl.value.toLowerCase();
    let classesDeTarefas = [".categoria-lazer", ".categoria-compras",".categoria-estudos"]
    let tarefasFiltradas = document.querySelectorAll(".item-tarefa");;
    tarefasFiltradas.forEach(tarefa => tarefa.classList.remove("retido-no-filtro"))
    let classesFiltradas = classesDeTarefas.filter(classe => !(classe.includes(categoriaDoFiltro)));
    if(categoriaDoFiltro !== ""){
        tarefasFiltradas = document.querySelectorAll(classesFiltradas.join(", "));
        tarefasFiltradas.forEach(tarefa => tarefa.classList.add("retido-no-filtro"))
    }
}

const toggleCheckTarefa = (event) => {
    let targetEl = event.target;
    if(targetEl && targetEl.classList.contains('item-tarefa')){
        targetEl.classList.toggle("marcado")
     }
}

let tasks = [construirTarefa("Ler a maldição de strahd", "lazer", false), construirTarefa("Estudar DDD", "estudos", true)];
tasks.forEach(task => insereTarefaNaPagina(task));
let addButtonEl = document.querySelector("#incluir-nova-tarefa");
addButtonEl.addEventListener('click', cadastrarTarefa);
filterEl.addEventListener('change', filtrarTarefas);
document.addEventListener ('keyup', (event) => {
    if(event.key === 'Enter'){
        cadastrarTarefa();
    }
  });

  document.addEventListener('click', toggleCheckTarefa);