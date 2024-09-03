function atualizarDataHora() {
    var agora = new Date();
    var fusoHorario = document.getElementById('fusoHorario').value;
    var opcoes = { timeZone: fusoHorario};
    var hora = agora.toLocaleTimeString('en-US',opcoes);
    var data = agora.toLocaleDateString('en-US', opcoes);
    document.getElementById('dataHora').textContent = data + ' ' + hora;

}
setInterval(atualizarDataHora, 1000);
// Atualiza a hora imediatamente quando o fuso horário é alterado
document.getElementById('fusoHorario').addEventListener('change', atualizarDataHora);


document.getElementById('baterPonto').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'block';
  });
  
  document.getElementById('close').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
  });
  
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      document.getElementById('modal').style.display = 'none';
    }
  });
  
  document.getElementById('entrada').addEventListener('click', function() {
    alert('Entrada registrada');
  });
  
  document.getElementById('saida').addEventListener('click', function() {
    alert('Saida registrada');
  });
  document.getElementById('intervalo').addEventListener('click', function() {
    alert('Intervalo registrado');
  });
  document.getElementById('voltaIntervalo').addEventListener('click', function() {
    alert('Volta do intervalo registrada');
  });
