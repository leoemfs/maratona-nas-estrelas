/* 
 Conhecimentos para usar na plaicação com Prof Bertolo

 Variaveis 
 VAR escopo global de acesso total a aplicação, baixa segurança
 LET escopo em bloco, só existe naquele bloco de comando
 CONST vem de constante, significa uma variavel que não pode ser alterada
 EX:
 let nome = 'Leonardo'
 const idade = 25

 Funcões
 EX:
 function mostraNome(){
    let doce = churros; //variavel let churros que so existe dentro do espaço da funcao
    return doce; // para retornar valor da variavel
 }

 let doceVindoDaFuncao = mostraNome() //assim eu trago o return da funcao

 Loop e repetições
 Utilizando para renderizar objetos na tela que precisam ser exibidos varias e varias vezes
 usando for
 EX:
 for(let idice = 0; indice < 10; indice++){ //indice++ é igual a indice + 1 progressivamente até a condição do for ser true
    console.log(indice) //exibindo...
 }
*/

//começando a trabalhar na aplicação---------------------------------------------------------------------------------------
//descomentar a tag script no HTML index
//assincrono fora do tempo "async"
//"await" literalmete "espere"
//buscar dados atraves da funcao "fetch()" na API de Stars Wars de uso livre 
async function renderizaCards() {
    const lista = document.querySelector('#cardList')
  
    lista.innerHTML = ""
  
    const listaDeDados = await fetch('https://swapi.dev/api/people', {
      method: "GET"
    })
    .then(function(resposta) {
      return resposta.json()
    })
  
    for(let indice = 0; indice < listaDeDados.results.length; indice++) {
      const elemento = listaDeDados.results[indice]
  
      const li = document.createElement("li")
      const divFrente = document.createElement('div')
      const divVerso = document.createElement('div')
      const divNomeFrente = document.createElement('div')
      const divNomeVerso = document.createElement('div')
      const listaDados = document.createElement('ul')
      const anoNasc = document.createElement('li')
      const planeta = document.createElement('li')
      const imagem = document.createElement('img')
  
      li.classList.add('card', 'listCard')
      divFrente.classList.add("face");
      divFrente.classList.add("front");
  
      divNomeFrente.classList.add("titleCard")
      divNomeFrente.innerText = elemento.name
  
      divNomeVerso.classList.add("titleCard")
      divNomeVerso.innerText = elemento.name
  
      listaDados.classList.add("cardData")
  
      anoNasc.innerText = 'Ano de Nascimento: ' + elemento.birth_year
  
      const nomePlaneta = await fetch(elemento.homeworld, {
        method: "GET"
      })
      .then(function(resposta) {
        return resposta.json()
      })
  
      planeta.innerText = 'Planeta: ' + nomePlaneta.name
  
      divVerso.classList.add('face', 'back')
  
      imagem.src = "./assets/starduck.png"
      imagem.alt = "starduck"
  
      listaDados.append(anoNasc, planeta)
      divFrente.append(divNomeFrente, listaDados)
      divVerso.append(divNomeVerso, imagem)
      li.append(divFrente, divVerso)
      lista.append(li)
    }
    viraCard()
  }
  
  function viraCard() {
    const cards = document.querySelectorAll('.listCard')
  
    for(let indice = 0; indice < cards.length; indice++) {
      const card = cards[indice]
  
      card.addEventListener('click', function() {
        card.classList.toggle('flip')
      })
    }
  }
  
  renderizaCards()

