// Envio de Confirmação de login
$('#login').submit(function(e){
    e.preventDefault();

});

async function sendConfirm() {
    const user = {
        email: $('#email').val(),
        password: $('#password').val()
    }

    await axios.post("http://localhost:3000/login", user);
}