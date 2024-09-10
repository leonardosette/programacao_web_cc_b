function atualizarDataHora() {
    var agora = new Date();
    var fusoHorario = document.getElementById('fusoHorario').value;
    var opcoes = { timeZone: fusoHorario };
    var hora = agora.toLocaleTimeString('en-US', opcoes);
    var data = agora.toLocaleDateString('en-US', opcoes);
    document.getElementById('dataHora').textContent = data + ' ' + hora;
}

function atualizarModalDataHora() {
    var dataHora = document.getElementById('dataHora').textContent;
    document.getElementById('modalDataHora').textContent = dataHora;
}

function exibirNoConsole(dataHora, tipoPonto, latitude, longitude) {
    console.log(`Data e Hora: ${dataHora}`);
    console.log(`Tipo de Ponto: ${tipoPonto}`);
    console.log(`Localização: Latitude ${latitude}, Longitude ${longitude}`);
}

// Função para exibir uma notificação
function exibirNotificacao(mensagem) {
    // Verifica se as notificações são suportadas pelo navegador
    if (!("Notification" in window)) {
        console.error("Este navegador não suporta notificações.");
    } else if (Notification.permission === "granted") {
        // Se a permissão foi concedida, exibe a notificação
        new Notification(mensagem);
    } else if (Notification.permission !== "denied") {
        // Caso a permissão ainda não tenha sido solicitada, pede permissão ao usuário
        Notification.requestPermission().then(function(permission) {
            if (permission === "granted") {
                new Notification(mensagem);
            }
        });
    }
}

setInterval(atualizarDataHora, 1000);
setInterval(atualizarModalDataHora, 1000);

// Atualiza a hora imediatamente quando o fuso horário é alterado
document.getElementById('fusoHorario').addEventListener('change', atualizarDataHora);

document.getElementById('baterPonto').addEventListener('click', function() {
    atualizarModalDataHora(); // Atualiza o modal com a data e hora atuais
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

document.getElementById('punch-in-button').addEventListener('click', function() {
    var dataHora = document.getElementById('modalDataHora').textContent;
    var tipoPonto = document.getElementById('punch-in-select').value;

    // Obter a localização do usuário
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;

            // Exibir as informações no console
            exibirNoConsole(dataHora, tipoPonto, latitude, longitude);

            // Exibir uma notificação informando que o ponto foi registrado
            exibirNotificacao(`Ponto de ${tipoPonto} registrado com sucesso às ${dataHora}.`);
        }, function(error) {
            console.error('Erro ao obter localização:', error);
        });
    } else {
        console.error('Geolocalização não é suportada pelo navegador.');
    }

    // Fechar o modal
    document.getElementById('modal').style.display = 'none';
});
