const frutas = ["laranja", "limão", "uva"];
// Faça com que os itens do array do arquivo script.js sejam adicionados à página HTML, dentro dos itens `li` que estão na página. Repare que um dos itens "li" ficará vago. Vamos preenchê-lo no exercício 3.
let insereLaranja = document.getElementById("fruta-1")
insereLaranja.innerHTML += frutas[0]

let insereLimao = document.getElementById("fruta-2")
insereLimao.innerHTML += frutas[1]

let insereUva = document.getElementById("fruta-3")
insereUva.innerHTML += frutas[2]


// Crie um campo label e um campo input na página HTML, e preencha o campo com o nome de mais uma fruta.
// Depois disso, escreva **No DevTools** o código necessário para que seja possível imprimir o valor do input escrito no console.
const salvarNomeDaFruta = () => {
    let nomeDaFruta = document.getElementById("fruta")
    console.log(nomeDaFruta.value)
}


// Crie uma função que faça com que o valor do input seja adicionado à lista de frutas do exercício 1. Crie um botão, e utilize um evento de `onclick` no botão criado, para que ao clicar no botão, o valor do input do exercício 2 seja adicionado à lista.
const inserirNaLista = () => {
    let nomeDaFruta = document.getElementById("fruta")

    let insereFruta = document.getElementById("fruta-4")
    insereFruta.innerHTML += `<li>${nomeDaFruta.value}` 
    nomeDaFruta.value = ""
}