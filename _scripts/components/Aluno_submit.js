// Envio de formulario

$('#form-aluno').submit(function(e){
    e.preventDefault();
});

async function sendForm() {
    const aluno = {
        type: $('#UserType').val(),
        name: $('#name').val(),
        email: $('#email').val(),
        phone: $('#phone').val(),
        password: $('#password').val(),
        grade: $('#serie').val(),
    }

    await axios.post("http://localhost:3000/aluno", aluno);
}