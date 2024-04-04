let participantes = [
 {
    nome: "Gustavo Giacoia",
    email: "gustavo@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: null
 },
 {
    nome: "Diego Fernandes",
    email: "diego@gmail.com",
    dataInscricao: new Date(2023, 6, 22, 17, 20),
    dataCheckIn: new Date(2023, 6, 25, 25, 10),
 },
 {
    nome: "Maria Silva",
    email: "maria@gmail.com",
    dataInscricao: new Date(2024, 2, 10, 10, 30),
    dataCheckIn: new Date(2024, 2, 15, 12, 45),
 },
 {
    nome: "João Pereira",
    email: "joao@gmail.com",
    dataInscricao: new Date(2024, 2, 5, 15, 45),
    dataCheckIn: null
 },
 {
    nome: "Ana Santos",
    email: "ana@gmail.com",
    dataInscricao: new Date(2023, 5, 12, 11, 20),
    dataCheckIn: new Date(2023, 5, 17, 16, 30),
 },
 {
    nome: "Carlos Oliveira",
    email: "carlos@gmail.com",
    dataInscricao: new Date(2023, 7, 1, 14, 10),
    dataCheckIn: new Date(2023, 7, 6, 19, 45),
 },
 {
    nome: "Mariana Fernandes",
    email: "mariana@gmail.com",
    dataInscricao: new Date(2023, 8, 20, 9, 0),
    dataCheckIn: null
 },
 {
    nome: "Pedro Silva",
    email: "pedro@gmail.com",
    dataInscricao: new Date(2023, 9, 15, 12, 30),
    dataCheckIn: null
 },
 {
    nome: "Fernanda Oliveira",
    email: "fernanda@gmail.com",
    dataInscricao: new Date(2023, 10, 8, 16, 20),
    dataCheckIn: new Date(2023, 10, 13, 20, 40),
 },
 {
    nome: "Lucas Pereira",
    email: "lucas@gmail.com",
    dataInscricao: new Date(2023, 11, 5, 8, 50),
    dataCheckIn: new Date(2023, 11, 10, 13, 10),
 }
];

const criarNovoParticipante = (participante) => {
  
  const dataInscricao = dayjs(Date.now())
  .to(participante.dataInscricao)
 
  let dataCheckIn = dayjs(Date.now())
  .to(participante.dataCheckIn)

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
   // muitas vezes vai ter que substituir ou excluir    para dar certo...
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

const atualizarLista = (participantes) => {
  let output = ""
  //estrutura de repetição -- loop
  for(let participante of participantes) {
    output = output + criarNovoParticipante(participante)
  }

  //substituir informação html
 document
 .querySelector('tbody')
 .innerHTML = output
}

atualizarLista(participantes)

const adicionarParticipante = (event) => {
   event.preventDefault()

   const dadosDoFormulario = new FormData(event.target)
   
   const participante = {
      nome: dadosDoFormulario.get('nome'),
      email: dadosDoFormulario.get('email'),
      dataInscricao: new Date(),
      dataCheckIn: null
   }
    //verificar se o participante já existe
    const participanteExiste = participantes.find((p) => 
       p.email == participante.email 
    )
   
   if(participanteExiste) {
      alert('Email já cadastrado!')
      return
   }

   participantes = [participante, ...participantes]
   atualizarLista(participantes)

   // limpar o formulario
   event.target.querySelector('[name="nome"]').value = ""
   event.target.querySelector('[name="email"]').value = ""
}

const fazerCheckIn = (event) => {
   //cofirmar se realmente quer o check-in
     const mensagemConfirmacao = 'Tem certeza que deseja fazer o check-in?'
     
     if(confirm(mensagemConfirmacao) == false) {
       return
     }

   // encontrar o participante dentro da lista
    const participante = participantes.find((p) => {
       return p.email == event.target.dataset.email
    })
   // atualizar o check-in do participante
    participante.dataCheckIn = new Date()

   // atualizar a lista de participantes
   atualizarLista(participantes)
}