// Espera até que todo o conteúdo da página seja carregado antes de executar o código JavaScript
document.addEventListener("DOMContentLoaded", function() {

    // Seleciona o formulário na página de contato
    const form = document.querySelector('form'); // Seleciona o primeiro formulário encontrado na página

    // Adiciona um evento de 'submit' (quando o formulário for enviado) ao formulário
    form.addEventListener('submit', function(event) {
        
        // O 'event.preventDefault()' impede que o formulário seja realmente enviado (comportamento padrão)
        // Isso é útil para que possamos processar a ação de envio sem recarregar a página
        event.preventDefault();

        // Exibe um alerta simples para o usuário informando que o formulário foi enviado com sucesso
        alert('Formulário enviado com sucesso!');
        
        // Aqui, você poderia adicionar código para enviar os dados do formulário para um servidor ou realizar outras ações
        // Exemplo: enviar os dados usando AJAX, ou validar campos antes de enviar

        // Limpar os campos do formulário após o envio (opcional)
        form.reset(); // Esta linha limpa todos os campos do formulário (nome, email, mensagem, etc.)
    });
});