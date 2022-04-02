// VALIDAÇÃO DE LOGIN

function clickLogin() {
  const loginEmail = document.getElementById('loginEmail');
  const loginSenha = document.getElementById('loginSenha');

  if (
    loginEmail.value === 'tryber@teste.com' &&
    loginSenha.value === '123456'
  ) {
    alert('Olá, Tryber!');
    return;
  }
  alert('Email ou senha inválidos.');
}

document.getElementById('loginButton').addEventListener('click', clickLogin);

// VALIDAÇÃO PARA ENVIAR O FORMULÁRIO

const checkboxId = document.getElementById('agreement');
const buttonId = document.getElementById('submit-btn');

function sendForm() {
  if (this.checked) {
    buttonId.disabled = false;
    return;
  }
  buttonId.disabled = true;
}

checkboxId.addEventListener('change', sendForm);

// LÓGICA DO CONTADOR DE CARACTERES

function atualizaContador() {
  document.getElementById('counter').innerText = 500 - this.value.length;
}

document.getElementById('textarea').addEventListener('input', atualizaContador);

// BOTÃO DE ENVIAR

// Armazena o formulário em uma variável
const formulario = document.getElementById('evaluation-form');

function requisito21() {
  // Objeto criado para armazenar os dados do formulário a serem exibidos no final.
  let dadosCadastrais = {
    nome: `Nome: ${document.getElementById('input-name').value} ${
      document.getElementById('input-lastname').value
    }`,
    email: `Email: ${document.getElementById('input-email').value}`,
    casa: `Casa: ${document.getElementById('house').value}`,
    familia: `Família: ????`,
    materias: `Matérias: ????`,
    avaliacao: `Avaliação: ????`,
    obs: `Observações: ${document.getElementById('textarea').value}`,
  };

  // Apaga todo o conteúdo do formulário.
  formulario.innerHTML = '';

  // O loop abaixo cria elementos <p>, insere neles o texto e os coloca como filhos do formulário que está vazio.
  for (let i = 0; i < Object.keys(dadosCadastrais).length; i += 1) {
    const novoCampo = document.createElement('p');
    novoCampo.innerText = Object.values(dadosCadastrais)[i];
    formulario.appendChild(novoCampo);
  }
}

// Adiciona o escutador ao botão que irá disparar a função requisito21
buttonId.addEventListener('click', requisito21);
