
const nota1 = document.querySelector('#nota1')
const nota2 = document.querySelector('#nota2')
const nota3 = document.querySelector('#nota3')
const calcular = document.querySelector('#calcular')
const resultado = document.querySelector('#resultado')
const notas = document.querySelector('.nota')
const name = document.querySelector('#nome')

//eventos

calcular.addEventListener('click', calcularMedia)

//funções



function calcularMedia(){

    event.preventDefault()
    //desativar a origem do formulario back-ende tranformar-lo em recusto neutro

    let n1 = Number(nota1.value)
    let n2 = Number(nota2.value)
    let n3 = Number(nota3.value)
    let nomeAluno = (name.value)

    //"blabla".value pra pegar somente o valor

    //calculo da nota

    let mediaFinal = ((n1 + n2 + n3)/3).toFixed(1)

    let nota = (notas.value)
    
    if(isNaN(n1.value) || isNaN(n2.value) || isNaN(n3.value)){
        resultado.innerHTML = `Por favor, digite uma nota valida entre 0 e 10`
    }
    else if(n1 >= 0 && n1 <= 10 && n2 >= 0 && n2 <= 10 && n3 >=0 && n3 <= 10){   
    if (mediaFinal >= 7) {
        resultado.innerHTML = `<h3>Parabéns ${nomeAluno} você foi aprovado com média de ${mediaFinal}</h3>`   
    }if(mediaFinal < 7 && mediaFinal >= 4 ) {
        resultado.innerHTML = `<h3>Calmae ${nomeAluno}, você vai pra final com média de ${mediaFinal}</h3>`       
    }if(mediaFinal > 0 && mediaFinal < 4) {
        resultado.innerHTML = `<h3>${nomeAluno} Você foi reprovado com média final de ${mediaFinal}</h3>`       
    }
}
    else{
        resultado.innerHTML = `Por favor, digite uma nota valida entre 0 e 10`
    }



    let horas = new Date()
    let horario = horas.getHours

    if (horario >= 0 && horario <12 ) {
        saudacao.innerHTML = `<h3> Bom dia ${nomeAluno}</h3>`
    } else if (horario >= 12 && horario < 18){
        saudacao.innerHTML = `<h3> Boa tarde ${nomeAluno}</h3>`
    } else{
        saudacao.innerHTML = `<h3> Boa noite ${nomeAluno}</h3>`
    }
}

