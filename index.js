function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Verificação de usuário e senha (exemplo simples)
    if (username === 'usuario' && password === 'senha') {
        errorMessage.innerText = ''; // Limpa mensagens de erro
        alert('Login bem-sucedido!'); // Exemplo de ação após login
    } else {
        errorMessage.innerText = 'Usuário ou senha inválidos.';
    }
}
