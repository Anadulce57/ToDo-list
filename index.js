
const respostaAPI = [
    { "id": 1, "descricao": "Varrer a sala" }, // Variável que contém um array de objetos em formato JSON 
    { "id": 2, "descricao": "Revisar a aula de BD" }, // Cada objeto representa uma tarefa específica com  2 atributos 
    { "id": 3, "descricao": "Lavar a louça" },
    { "id": 4, "descricao": "Lavar a roupa" },
    { "id": 5, "descricao": "Arrumar a cama" },
]; //dúvida em relação ao uso da API 

const taskList = document.getElementsByClassName("lista"); // dúvida se está correto a seleção

function init(){ 
    carregarLista(); // A função init é utilizada para inicializar o carregamento das tarefas - chama a função ao lado
}

function carregarLista(){
    let contador = -1;
    const listContainer = document.getElementsByClassName("lista");
    listContainer.innerHTML = '<form action="">';

    while( respostaAPI.length > 0 && ++contador < respostaAPI.length){ //seguir a posição dos arrays - numeração
        listContainer.innerHTML += `
                <fieldset>
                    <input id="primeiro" type="checkbox">
                    <label for="primeiro">Exemplo 1</label>
                    <span class="text">${respostaAPI[contador].descricao}</span>
                    <button class="material-symbols-outlined">edit</button>
                    <button class="material-symbols-outlined">delete</button> 
                </fieldset>`;
    }
    listContainer.innerHTML == '</form>';
}