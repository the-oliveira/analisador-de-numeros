let listaf = document.querySelector('select#listanumeros')
let numerof = document.querySelector('input#numerotxt')
let respostaf = document.querySelector('div#resposta')
let lista = []


function inlista(numero, lista){
    if(lista.indexOf(Number(numero)) != -1){
        return true
    } else{
        return false
    }
}

function isNumero(numero){
    if (Number(numero) >= 1 && Number(numero) <= 100){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if (isNumero(numerof.value) && !inlista(numerof.value, lista)){
        lista.push(Number(numerof.value))
        let item = document.createElement('option') //criando opções para o select no html
        item.text = `Valor ${numerof.value} adicionado!` //adicionando o text na opção criada
        item.value = `num${numerof.value}` //value para a opção
        listaf.appendChild(item) //dando append (adicionando) a opção ao select
        respostaf.innerHTML = ''
    } else{
        alert('Digite um valor diferente ou dentro dos limites!')
    }
    numerof.value = '' //apagar o que foi digitado no formulario de numero
    numerof.focus() //focus() faz com que foque de novo na caixa para digitar
}


function calcular() {
    if (lista.length == 0){
        alert('Deve adicionar algum elemento!')
        respostaf.innerHTML = 'Adicione pelo menos um número para continuar...'
    } else{
        let totalElementos = lista.length
        let maior = lista[0]
        let menor = lista[0]
        let soma = 0

        for (let pos in lista){ //laço para acessar valores da lista
            soma += lista[pos]
            if (lista[pos] > maior){
                maior = lista[pos]
            }
            if (lista[pos] < menor){
                menor = lista[pos]
            }
        }
        let media = soma / totalElementos

        respostaf.innerHTML = ''
        respostaf.innerHTML = `<p>${totalElementos} Elementos foram adicionados!</p>`
        respostaf.innerHTML += `<p>${media / Number(lista.length)} é a Média dos valores adicionados!</p>`
        respostaf.innerHTML += `<p> ${maior} é o maior número! </p>`
        respostaf.innerHTML += `<p> ${menor} é o menor número! </p>`
        respostaf.innerHTML += `<p> ${soma} é a soma dos valores! </p>`
        respostaf.innerHTML += `<p> ${media} é a média dos valores!</p>`
    }
}