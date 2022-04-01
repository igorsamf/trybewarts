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




// SE A CHECKBOX ESTIVER SELECIONADA
//     >>> BOTÃO ATIVO

// SE A CHECKBOX NÃO ESTIVER SELECIONADA
//     >>> BOTÃO INATIVO

//     o id do checkbox é 'agreement'
//     o id do botão é 'submit-btn'