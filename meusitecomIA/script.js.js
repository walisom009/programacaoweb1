// Adiciona interatividade aos botões "Mostrar Detalhes"
document.querySelectorAll('.detalhes-btn').forEach(button => {
    button.addEventListener('click', function() {
        const detalhes = this.nextElementSibling; // Encontra o elemento de detalhes associado ao botão
        if (detalhes.classList.contains('oculto')) {
            detalhes.classList.remove('oculto');
            this.textContent = 'Ocultar Detalhes';
        } else {
            detalhes.classList.add('oculto');
            this.textContent = 'Mostrar Detalhes';
        }
    });
});