let inputA = document.getElementById('input-a');
let inputB = document.getElementById('input-b');
let form = document.getElementById('form-numero');


function testeNumero(num1, num2) {
    return num2 > num1;
}

form.addEventListener('submit', function(e) {
    
    e.preventDefault();
    
    let formValido = testeNumero(inputA.value, inputB.value);
    let containerMensagem = document.querySelector('.mensagem');

    if (formValido) {
        
        containerMensagem.innerHTML = 'Sucesso!';
        containerMensagem.style.display = 'block';
        containerMensagem.style.backgroundColor = 'rgba(25, 105, 25, 0.815)';
        inputA.style.border = '';
        inputA.value = '';
        inputB.value = '';

    } else {

        containerMensagem.innerHTML = `Erro: O número ${inputA.value} é maior que ${inputB.value}.`;
        inputA.style.border = '1px solid red';
        containerMensagem.style.display = 'block';
        containerMensagem.style.backgroundColor = 'red';
        
    }

    
})

