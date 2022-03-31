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

