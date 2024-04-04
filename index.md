Fronteditor.dev/nlw-unite

 # Html

 *Hypertext*
 *Markup*
 -tag
 - atributos // propriedades
 *Language*
 

 #CSS
  /* Cascading StyleSheet */
  ```css
  /* declarações */
  /* COMEÇAR SEMPRE ASSIM*/
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
  
  tbody {
  background-color: #121214;
  color: white
  /* seguir os caminhos usados anteriormente na parte de JS E HTML, o ultimo sempre sera o selecionado ao nao ser que outro seja mais especifico*/
}

```

 #JavaScript
 ```js 
 // variaveis
const mensagem = 'oi,tudo bem?'
//tipos de dados
  //number
  //string
// funcao
alert(mensagem)
//objeto Javascript
const participante = {
  nome: "Gustavo Giacoia",
  email: "gustavo@gmail.com",
  dataInscricao: new Date(2024, 2, 22, 19, 20),
  dataCheckIn: new Date(2024, 2, 25, 22, 00),
}
// array
let participante = [
 {
    nome: "Gustavo Giacoia",
    email: "gustavo@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: new Date(2024, 2, 25, 22, 00),
 },
]

 //estrutura de repetição -- loop
  for(let participante of participantes) {
    output = output + criarNovoParticipante(participante)
    // (isso é um exemplo)
    // faça alguma coisa aqui
    // enquanto tiver pessoas// participante// variavel nessa lista
  }


  const criarNovoParticipante = (participante) => {
  
  const dataInscricao = dayjs(Date.now())
  .to(participante.dataInscricao)
 
  const dataCheckIn = dayjs(Date.now())
  .to(participante.dataCheckIn)

 return `
  <tr>
      <td>
        <strong>
        ${participante.nome}
        </strong>
        <br>
        <small>
          ${participante.email}
        </small>
      </td>
      <td>${dataInscricao}</td>
      <td>${dataCheckIn}</td>
    </tr>
  `
}

 *Criando uma condicional*
 if(participante.dataCheckIn == null) {
      dataCheckIn =`
         <button
            data-email="${participante.email}"
            onclick="fazerCheckIn(event)"
         >
            Confirmar check-in
         </button>
      `
 }
 //https://day.js.org/docs/en/i18n/loading-into-browser
```
