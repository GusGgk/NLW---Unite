# Basic Project FullStack | NLW-UNITE
Aqui está meu projeto completo, fullstack de uma pequena página web, onde simula uma confirmação de email e check-in, desenvolvido em um curso de 5 horas, utilizando algumas linguangs de programação front e back.
Projeto desenvolvido no curso básico fullstack pela [Rocketseat](https://www.rocketseat.com.br).

## 📖 Documentação
- [Documentação de guias da Rocketseat](https://react-native.rocketseat.dev).

## 💻 Linguagens Utilizadas
- HTML
- CSS
- JavaScript

## ✅ Site facilitador
Um site desenvolvido pela própria Rocketseat, que ao decorrer do projeto acaba sendo muito útil para entender seu andamento no projeto, além de conseguir utilizar em seu navegador e assim conseguir utilizar seus códigos e ao lado, o resultado deles em uma página web.
- [Front-End-Editor](https://www.fronteditor.dev/dlw-unite)

## 💎 HTML
Códigos HTML utilizados no projeto:
```
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">

<script src="https://cdn.jsdelivr.net/npm/dayjs@1/dayjs.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/dayjs@1/plugin/relativeTime.js"></script><link rel="preconnect" href="https://fonts.googleapis.com">

<script>dayjs.extend(window.dayjs_plugin_relativeTime)</script>
<script src="https://cdn.jsdelivr.net/npm/dayjs@1/locale/pt-br.js"></script>
<script>dayjs.locale('pt-br')</script>


<body>
  
    <div class="container">

  <header>
   <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/200/svg">
      <rect width="32" height="32" rx="7.11111" fill="#F48F56"/>
       <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0682 15.0583V12.7586L5.71897 15.12H5.69678V17.482H5.71097L12.0682 19.8462V17.5415L8.80823 16.2975L12.0682 15.0583Z" fill="#00292E"/>
       <path fill-rule="evenodd" clip-rule="evenodd" d="M19.6328 18.0617L22.89 16.8248L19.6328 15.5878V13.2881L25.9829 15.6522H25.9998V18.0164H25.9829L19.6328 20.3686V18.0617ZM16.9057 10.0309L13.1708 22.0165H15.387L19.1219 10.0309H16.9057Z" fill="#80292E"/>
    </svg>
  </header>


<form onsubmit="adicionarParticipante(event)">
   <fieldset>
    <legend>inscrição</legend>
    <div>

      <div class="input-wrapper">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/
        svg">
        <g clip-path="url(#clip0_4003_2796)">
         <path d="M12 13.3333C12 12.2724 11.5786 
      11.255 10.8284 10.5048C10.0783 9.75468 9.06087 9.33325 8 9.33325C6.93913 9.33325 5.92172 9.75468 5.17157 10.5048C4.42143 11.255 4 12.2724 4 13.3333" stroke="#9FF9CC" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8.00004 9.33333C9.4728 
9.33333 10.6667 8.13943 10.6667 6.66667C10.6667 5.19391 9.4728 4 8.00004 4C6.52728 4 5.33337 5.19391 5.33337 6.66667C5.33337 8.13943 6.52728 9.33333 8.00004 9.33333Z" stroke="#9FF9CC" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8.00004 14.6666C11.6819 
14.6666 14.6667 11.6818 14.6667 7.99992C14.6667 4.31802 11.6819 1.33325 8.00004 1.33325C4.31814 1.33325 1.33337 4.31802 1.33337 7.99992C1.33337 11.6818 4.31814 14.6666 8.00004 14.6666Z" stroke="#9FF9CC" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_4003_2796">
        <rect width="16" height="16" fill="white"/>
        </clipPath>
        </defs>
        </svg>

      <input 
        type="text"
        placeholder="Nome Completo"
        name="nome"
        required
      >
      </div>

      <div class="input-wrapper">
        
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_4003_2802)">
          <path d="M8.00004 10.6666C9.4728 10.6666 10.6667 9.47268 10.6667 7.99992C10.6667 6.52716 9.4728 5.33325 8.00004 5.33325C6.52728 5.33325 5.33337 6.52716 5.33337 7.99992C5.33337 9.47268 6.52728 10.6666 8.00004 10.6666Z" stroke="#9FF9CC" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10.6667 5.33326V8.66659C10.6667 9.19702 10.8774 9.70573 11.2525 10.0808C11.6276 10.4559 12.1363 10.6666 12.6667 10.6666C13.1971 10.6666 13.7059 10.4559 14.0809 10.0808C14.456 9.70573 14.6667 9.19702 14.6667 8.66659V7.99992C14.6667 6.49813 14.1596 5.04032 13.2277 3.8627C12.2957 2.68508 10.9934 1.85664 9.53173 1.5116C8.07011 1.16656 6.5348 1.32513 5.17456 1.96163C3.81431 2.59812 2.70882 3.67525 2.0372 5.0185C1.36558 6.36175 1.16717 7.89242 1.47412 9.36251C1.78107 10.8326 2.57539 12.156 3.7284 13.1183C4.88141 14.0805 6.32554 14.6253 7.82683 14.6643C9.32812 14.7034 10.7986 14.2343 12 13.3333" stroke="#9FF9CC" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          <defs>
          <clipPath id="clip0_4003_2802">
          <rect width="16" height="16" fill="white"/>
          </clipPath>
          </defs>
          </svg>
 
      <input 
      type="email"
      placeholder="Email"
      name="email"
      required
      >
      </div>

      <button>
        REALIZAR INSCRIÇÃO
      </button>
    </div> 
   </fieldset>
</form>

  <section class="lista-participantes">
    <h2>Participantes</h2>

      <div>
        <table width='100%'>
  <thead style="text-align: left"> 
    <tr>
      <th> Participantes</th>
      <th> Data da inscrição</th>
      <th> Data check-in</th>
   </tr>
  </thead>

  <tbody>
    
  </tbody>
        </table>  
      </div>
    </section>

  </div>


</body>
```
## 💎 CSS
Códigos CSS utilizados no projeto:
```
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
   --border: 1px solid #ffffff1a;
}


body, table, input, button {
  font: 350 16px/140% 'Roboto', sans-serif;
  }
  
  body {
  background-color: #121214;
  color: #ffffff
}

.container {
  max-width: 690px;
  margin: 0 auto;
  padding: 20px 32px;
}

header {
  padding: 20px 0;
}
  
  form {
     border: var(--border);
     border-inline: none;
     padding: 20px 0;
  }
 
  fieldset {
     border: none;
     padding: 20px 0;
  }

  fieldset > div {
    display: flex;
    gap: 12px;
  }

   .input-wrapper {
    flex: 1;

    display: flex;
    align-items: center;
    gap: 12px;

    border: var(--border);
    border-radius: 10px;

    padding: 8px 12px;

    font: 400 14px/150% 'Roboto', sans-serif;
    color: #c4c4cc;
   }

   input {
     all: unset;
   }

fieldset legend, section h2 {
  font: 700 16px/140% 'Roboto', sans-serif;
  color: #e1e1e6;
  padding-bottom: 16px;
}

 fieldset button {
  width: fit-content;
  border: 0;
  background: #f48f56;
  border-radius: 10px;
  padding: 7px 20px;

  font: 700 12px/24px 'Roboto', sans-serif;
  color: #00292E;
 }

 fieldset button:hover {
  background: #f37c37;
 }

.lista-participantes {
  padding: 20px 0;
}

.lista-participantes > div {
  border: var(--border);
  border-radius: 8px;
}

 table {
   border-collapse: collapse;
 }

table thead {
  font-size: 14px;
  line-height: 16px;
}

thread th,
tbody td {
   padding: 12px 16px;
}

tbody td {
   border-top: var(--border);
   font-size: 13px;
   line-height: 15px;
   color: #c4c4cc;
}

tbody td strong {
  color: white;
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
}

tbody td small {
   font-size: 12px;
   line-height: 16px;
}

tbody td button {
  all: unset;
  color:#9FF9CC;
}

tbody td button:hover {
  text-decoration: underline
}
```
## 💎 JavaScript
Códigos JavaScript utilizados no projeto:
```
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
```
## 🔍 Referências
- [RocketSeat](https://app.rocketseat.com.br)
