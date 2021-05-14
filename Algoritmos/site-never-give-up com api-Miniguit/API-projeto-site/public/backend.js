
                                    // VERIFICACAO DE CADASTRO

function botao_cadastrar() {
    let nome = idNome.value;
    let email = idEmail.value;
    let dataNascimento = idDataNascimento.value;
    let senha = idSenha.value;
    let senha2 = idConfirmarSenha.value;

    if (nome == "") {
        alert("Digite um nome de usuário!");
    }

    else if (nome.length < 4) {
        alert("Digite pelo menos 4 caracteres no nome de usuario");
    }

    else if (email.length < 10) {
        alert("E-mail muito curto");
    }
    
    else if (email.indexOf("@") < 0) {
        alert("E-mail não possui '@' ");
    }

    else if (dataNascimento == "") {
        alert("Insira a data de nascimento");
    }

    else if (senha.length < 6) {
        alert("Senha muito curta!");
    }

    else if (senha2 != senha) {
        alert("A confirmação de senha deve ser igual a primeira");
    }

    else {
        alert("Cadastro realizado com sucesso!");
        window.location.href = "login.html";
    }
}

