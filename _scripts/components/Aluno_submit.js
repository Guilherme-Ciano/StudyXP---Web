// Envio de formulario
$('#form-aluno').submit(function(e){
    e.preventDefault();
});

async function sendForm_Aluno() {
    const aluno = {
        name: $('#name').val(),
        email: $('#email').val(),
        phone: $('#phone').val(),
        password: $('#password').val(),
        grade: $('#serie').val(),
    }

    await axios.post("http://localhost:3000/aluno", aluno);
}

async function sendForm_Prof(){
    const professor ={
        name: $('#name').val(),
        email: $('#email').val(),
        phone: $('#phone').val(),
        password: $('#password').val(),
        materia: $('#materia').val(),    
    }

    await axios.post("http://localhost:3000/professor", professor);
}