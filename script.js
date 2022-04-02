//////////////////////////////////////// VALIDAÇÃO DE LOGIN
document.getElementById('loginButton').addEventListener('click', clickLogin);

function clickLogin() {
    let loginEmail = document.getElementById('loginEmail');
    let loginSenha = document.getElementById('loginSenha');
    
    if(loginEmail.value === 'tryber@teste.com' && loginSenha.value === '123456') {
    alert('Olá, Tryber!');
    return;
    }
alert('Email ou senha inválidos.');
}

//////////////////////////////////////// VALIDAÇÃO PARA ENVIAR O FORMULÁRIO

const checkboxId = document.getElementById('agreement');
const buttonId = document.getElementById('submit-btn');
checkboxId.addEventListener('change', sendForm);


function sendForm() {
    if(this.checked) {
        buttonId.disabled = false;
        return;
    }
    buttonId.disabled = true;
}

//////////////////////////////////////// LÓGICA DO CONTADOR DE CARACTERES

document.getElementById('textarea').addEventListener('input', atualizaContador);

function atualizaContador () {
    document.getElementById('counter').innerText = 500 - this.value.length;
}

//////////////////////////////////////// BOTÃO DE ENVIAR

// Armazena o formulário em uma variável
const formulario = document.getElementById('evaluation-form');

// Adiciona o escutador ao botão que irá disparar a função requisito21
buttonId.addEventListener('click', requisito21);

function requisito21 (){
    let dadosCadastrais = {
        nome: `Nome: ${document.getElementById('input-name').value} ${document.getElementById('input-lastname').value}`,
        email: `Email: ${document.getElementById('input-email').value}`,
        casa: `Casa: ${document.getElementById('house').value}`,
        familia: `Família: ????`,
        materias: `Matérias: ????`,
        avaliacao: `Avaliação: ????`,
        obs: `Observações: ${document.getElementById('textarea').value}`
    }

    console.log(dadosCadastrais[0])

    formulario.innerHTML = "";

    for (let i = 0; i < 7; i += 1) {
        const novoCampo = document.createElement('p');
        novoCampo.innerText = Object.values(dadosCadastrais)[i];
        formulario.appendChild(novoCampo);
    }
}


// let dadosCadastrais = {
//     nome: 1,
//     email: 1,
//     casa: 1,
//     familia: `Família: ????`,
//     materias: `Matérias: ????`,
//     avaliacao: `Avaliação: ????`,
//     obs: 1
// }

// console.log(Object.keys(dadosCadastrais)[1])