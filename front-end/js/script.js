document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------------------------
    // 1. SISTEMA DE TEMA (DARK MODE)
    // ----------------------------------------------------------------------
    const themeButton = document.getElementById('theme-toggle');

    function applyTheme(theme) {
        if (theme === 'dark') {
            document.body.classList.add('dark-mode');
            if (themeButton) {
                themeButton.innerHTML = '<i class="fas fa-sun"></i>'; 
            }
        } else {
            document.body.classList.remove('dark-mode');
            if (themeButton) {
                themeButton.innerHTML = '<i class="fas fa-moon"></i>'; 
            }
        }
    }

    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    if (themeButton) {
        themeButton.addEventListener('click', () => {
            let currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
            let newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            applyTheme(newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    // ----------------------------------------------------------------------
    // 2. SISTEMA DE LOGIN SIMULADO (REDIRECIONAMENTO CORRIGIDO)
    // ----------------------------------------------------------------------
    const loginForm = document.getElementById('login-form');

    if (loginForm) {
        // Credenciais Padrão
        const DEFAULT_USER = 'usuario@exemplo.com';
        const DEFAULT_PASS = 'senha123';
        
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault(); 
            
            const emailInput = document.getElementById('login-email');
            const passwordInput = document.getElementById('login-password');
            const errorMessage = document.getElementById('login-error-message');

            const email = emailInput.value;
            const password = passwordInput.value;

            if (email === DEFAULT_USER && password === DEFAULT_PASS) {
                // CORREÇÃO FINAL: Redireciona para o arquivo na mesma pasta.
                // O navegador precisa ser forçado a carregar este script novo.
                // Use Ctrl+Shift+R para recarregar a página de login sem cache.
                window.location.href = 'dashboard.html'; 
            } else {
                errorMessage.textContent = 'Email ou senha inválidos. Use: usuario@exemplo.com / senha123';
                errorMessage.style.display = 'block';
                passwordInput.value = ''; 
            }
        });
    }
    
    // ----------------------------------------------------------------------
    // 3. SISTEMA DE CADASTRO SIMULADO (REDIRECIONAMENTO CORRIGIDO)
    // ----------------------------------------------------------------------
    const cadastroForm = document.getElementById('cadastro-form');

    if (cadastroForm) {
        cadastroForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert("Cadastro realizado com sucesso! Você será redirecionado para o painel.");
            window.location.href = 'dashboard.html'; 
        });
    }
});