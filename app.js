//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = []
let campo = document.querySelector('input')

function adicionarAmigo() {

    if(campo.value == ''){ //impede que o campo fique vazio
        alert('porfavor insira um nome válido')
        
    }
amigos.push (campo.value)
campo.value = '' // limpa o campo a cada inserção de nome
//----------------------------------------------------------
let lista = document.querySelector('ul') //pega a ul do html
    lista.innerHTML ='' // limpa a ul 
    for(let i=0;i<amigos.length;i++){       //percorre o array
        let item = document.createElement('li') //cria um li
        item.innerText = amigos[i] // o li será substituido por cada nome de amigo
        lista.appendChild(item) // o li (amigo) aparecerá dentro de ul
    }
    
}
function sortearAmigo(){
    if(amigos.length == 0){
        alert('a lista está vazia')
        resultado.innerHTML = ''
    }
    let resultado = document.querySelector('p')
    let valor = parseInt(Math.random()*amigos.length)
    resultado.innerHTML = `o amigo sorteado foi ${amigos[valor]} `

    
    
}