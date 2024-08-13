document.getElementById("meuFormulario").addEventListener("submit", function(event){
    var isValid = true;
    
    // Expressão regular para validar o email
    var emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    
    // Expressão regular para validar a senha
    var senhaRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    
    // Para cada input no formulário
    for (var i = 0; i < this.elements.length; i++) {
      var elemento = this.elements[i];
      
      // Se o elemento é o campo de email
      if (elemento.name === "email") {
        if (!emailRegex.test(elemento.value)) {
          isValid = false;
          alert("Por favor, insira um email válido.");
        }
      }
      
      // Se o elemento é o campo de senha
      if (elemento.name === "password") {
        if (!senhaRegex.test(elemento.value)) {
          isValid = false;
          alert("A senha deve ter pelo menos 8 caracteres, incluindo pelo menos uma letra maiúscula e um número.");
        }
      }
      
      // Se o elemento não passar na validação
      if (!elemento.checkValidity()) {
        isValid = false;
        alert("Por favor, preencha o campo: " + elemento.name);
      }
    }
    
    // Se o formulário não for válido, previna a submissão
    if (!isValid) {
      event.preventDefault();
    }
  });