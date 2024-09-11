function gerarGov() {
    const govType = document.getElementById('govType').value;
    let govMessage = '';

    switch(govType) {
        case 'recrutamento':
            govMessage = 'gov MEDICAL CENTER / SAMU » Edital de Recrutamento DISPONÍVEL no Discord';
            break;
        case 'vendas':
            govMessage = 'gov MEDICAL CENTER » Vendas de Bandagens DISPONÍVEL no Hospital';
            break;
        case 'avisochamados':
            govMessage = 'gov SAMU » Especifique o local da ocorrência para facilitar o atendimento. Use LS, LV ou SF na descrição do chamado';
            break;
        case 'exameAP':
            govMessage = 'gov Realização do Exame AP (Avaliação Psicológica) para o Porte de Arma de Fogo DISPONÍVEL no HOSPITAL';
            break;
        default:
            govMessage = 'Selecione um tipo de gov válido!';
            break;
    }

    const govGeradoElement = document.getElementById('govGerado');
    govGeradoElement.innerText = govMessage;

    // Exibição do gov gerado com efeito de fade-in simplificado
    govGeradoElement.style.opacity = 0;
    setTimeout(() => {
        govGeradoElement.style.transition = 'opacity 0.5s';
        govGeradoElement.style.opacity = 1;
    }, 100);

    // Exibir botão de copiar após gerar o gov
    document.getElementById('copyButton').style.display = 'block';
}

function copiarGov() {
    const govGeradoElement = document.getElementById('govGerado');
    const textArea = document.createElement('textarea');
    textArea.value = govGeradoElement.innerText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    // Exibir pop-up de confirmação de cópia
    const popup = document.getElementById('popup');
    popup.style.display = 'block';
    popup.style.opacity = 1;
    setTimeout(() => {
        popup.style.opacity = 0;
        setTimeout(() => {
            popup.style.display = 'none';
        }, 500);
    }, 2000);
}
