

let formulario = document.querySelector('#formCadastro')

//previnir que o submit envie direto
formulario.onsubmit = function (evento) {
  evento.preventDefault() // previnir o comportamento padrão do formulário

  let temErro = false //FLAG

  console.log(document.forms['formCadastro']['nome'].value) // foi dentro de formCadastro, no campo nome e buscou o value

  //-------------   NOME   -------------
  //então posso usar IFs para validar os campos com essa lógica
  let inputNome = document.forms['formCadastro']['nome']

  if (!inputNome.value) {
    temErro = true
    inputNome.classList.add('inputError') //adiciona o erro

    let span = inputNome.nextSibling.nextSibling //seleciona o span irmão mais próximo
    span.innerText = 'Digite o nome corretamente' //adiciona a mensagem de erro
  } else {
    inputNome.classList.remove('inputError') //remove o erro

    let span = inputNome.nextSibling.nextSibling //seleciona o span irmão mais próximo
    span.innerText = '' //remove a mensagem de erro
  }

  //-------------   EMAIL   -------------
  let inputEmail = document.forms['formCadastro']['email']

  if (!inputEmail.value) {
    temErro = true
    inputEmail.classList.add('inputError') //adiciona o erro

    let span = inputEmail.nextSibling.nextSibling //seleciona o span irmão mais próximo
    span.innerText = 'Digite o e-mail corretamente' //adiciona a mensagem de erro
  } else {
    inputEmail.classList.remove('inputError') //remove o erro

    let span = inputEmail.nextSibling.nextSibling //seleciona o span irmão mais próximo
    span.innerText = '' //remove a mensagem de erro
  }

   //-------------   CIDADE   -------------
   let selectCidade = document.forms['formCadastro']['cidade']
   
   if (!selectCidade.value) {
     temErro = true
     selectCidade.classList.add('inputError') //adiciona o erro
 
     let span = selectCidade.nextSibling.nextSibling //seleciona o span irmão mais próximo
     span.innerText = 'Selecione uma cidade' //adiciona a mensagem de erro
   } else {
     selectCidade.classList.remove('inputError') //remove o erro
 
     let span = selectCidade.nextSibling.nextSibling //seleciona o span irmão mais próximo
     span.innerText = '' //remove a mensagem de erro
   }

   if (!temErro) {
     formulario.submit()
   }

}