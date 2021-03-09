
const Selector = $('#UserType option:selected').text();
$( function(){
    if (Selector === 'Aluno'){
        console.log('Cadastrando Aluno')
    }
    else {
        $(".variavel").removeClass("variavel").addClass("hidden-aluno");
        $(".professor").removeClass("professor");
        console.log('Cadastrando Professor')
    }
});