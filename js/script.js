// ===== PORTFÓLIO KAUÊ COSTA SOUZA =====
// Script principal com todas as funcionalidades

// ===== TRADUÇÕES =====
const translations = {
    pt: {
        home: "Início",
        about: "Sobre",
        skills: "Habilidades",
        projects: "Projetos",
        certifications: "Certificações",
        contact: "Contato",
        hero_subtitle: "Desenvolvedor | Python | Analista | Implantação",
        hero_description: "Amo aprender coisas novas e lidar com projetos.",
        contact_button: "Entre em contato",
        about_title: "Sobre Mim",
        about_paragraph_1: "Sou um profissional em início de carreira com forte interesse nas áreas de desenvolvimento de software e análise de dados. Minha trajetória começou com a programação em Python, o que despertou meu interesse por soluções tecnológicas e pela interpretação de dados para tomada de decisão.",
        about_paragraph_2: "Tenho experiência em linguagens como Python e SQL, além de habilidades em bibliotecas e frameworks voltados para análise de dados e desenvolvimento web, como Pandas, Django e PHP. Também possuo familiaridade com metodologias ágeis, versionamento de código com Git e práticas de Clean Code.",
        about_paragraph_3: "Meu foco atual é aprimorar minha capacidade analítica e ampliar meu domínio técnico, com o objetivo de desenvolver soluções eficientes e baseadas em dados para resolver problemas de negócio. Estou sempre em busca de novos desafios que me permitam evoluir profissionalmente e contribuir de forma estratégica em projetos de tecnologia.",
        about_paragraph_4: "Além do aspecto técnico, valorizo a comunicação clara, o trabalho em equipe e a aprendizagem contínua como pilares essenciais para meu desenvolvimento na área de tecnologia.",
        teamwork_label: "Trabalho em Equipe",
        analysis_label: "Análise",
        projects_label: "Projetos",
        skills_title: "Minhas Habilidades",
        programming_languages_title: "Linguagens de Programação",
        tools_technologies_title: "Ferramentas & Tecnologias",
        professional_skills_title: "Habilidades Profissionais",
        data_analysis_skill: "Análise de Dados",
        data_science_skill: "Ciência de Dados",
        problem_solving_skill: "Problem Solving",
        teamwork_skill: "Trabalho em Equipe",
        adaptability_skill: "Adaptabilidade",
        critical_thinking_skill: "Pensamento Crítico",
        time_management_skill: "Gestão de Tempo",
        proactivity_skill: "Proatividade",
        organization_skill: "Organização",
        teamwork_skill: "Trabalho em Equipe",


        communication_skill: "Comunicação",
        projects_title: "Meus Projetos",
        project_api_title: "API Soap Prefeitura",
        project_api_description: "Esse projeto tem o intuito de fazer conexão com a API da prefeitura de São Paulo afim de automatizar o processo de emissão de nota fiscais.",

        project_remote_office_title: "Trabalho Remoto vs. Escritório",
        project_remote_office_description: "Análise da relação entre o tipo de emprego (remoto ou no escritório) e suas implicações na produtividade e no bem-estar dos funcionários.",
        project_datascience_um_title: "DataScience - Universidade de Michigan",
        project_datascience_um_description: "Aprendizados obtidos através do curso de DataScience pela Universidade de Michigan, incluindo exercícios e práticas.",
        project_python_studies_title: "Estudos em Python",
        project_python_studies_description: "Repositório com estudos e exercícios em Python, incluindo conceitos fundamentais e práticas avançadas.",
        data_analysis_tech: "Análise de Dados",
        statistics_tech: "Estatística",
        data_science_tech: "Ciência de Dados",
        programming_tech: "Programação",
        learning_tech: "Aprendizado",
        certifications_title: "Certificações",
        cert_python_title: "Python para Análise de Dados",
        cert_python_institution: "Coursera - Universidade de Michigan",
        cert_data_science_title: "Introdução à Ciência de Dados",
        cert_data_science_institution: "Coursera - IBM",
        cert_web_dev_title: "Desenvolvimento Web",
        cert_web_dev_institution: "FreeCodeCamp",
        contact_title: "Entre em Contato",
        contact_subtitle: "Vamos conversar!",
        contact_description: "Estou sempre aberto a novas oportunidades e projetos interessantes. Entre em contato comigo!",
        form_name_label: "Nome",
        form_email_label: "Email",
        form_message_label: "Mensagem",
        form_submit_button: "Enviar Mensagem",
        footer_text: "© 2024 Kauê Costa Souza. Todos os direitos reservados."
    },
    en: {
        home: "Home",
        about: "About",
        skills: "Skills",
        projects: "Projects",
        certifications: "Certifications",
        contact: "Contact",
        hero_subtitle: "Developer | Python | Analyst | Implementation",
        hero_description: "I love learning new things and working on projects.",
        contact_button: "Get in touch",
        about_title: "About Me",
        about_paragraph_1: "I am an early-career professional with a strong interest in software development and data analysis. My journey began with Python programming, which sparked my interest in technological solutions and data interpretation for decision-making.",
        about_paragraph_2: "I have experience in languages like Python and SQL, as well as skills in libraries and frameworks focused on data analysis and web development, such as Pandas, Django, and PHP. I also have familiarity with agile methodologies, code versioning with Git, and Clean Code practices.",
        about_paragraph_3: "My current focus is to improve my analytical capacity and expand my technical domain, with the goal of developing efficient and data-driven solutions to solve business problems. I am always looking for new challenges that allow me to evolve professionally and contribute strategically to technology projects.",
        about_paragraph_4: "Beyond the technical aspect, I value clear communication, teamwork, and continuous learning as essential pillars for my development in the technology field.",
        teamwork_label: "Teamwork",
        analysis_label: "Analysis",
        projects_label: "Projects",
        skills_title: "My Skills",
        programming_languages_title: "Programming Languages",
        tools_technologies_title: "Tools & Technologies",
        professional_skills_title: "Professional Skills",
        data_analysis_skill: "Data Analysis",
        data_science_skill: "Data Science",
        problem_solving_skill: "Problem Solving",
        teamwork_skill: "Teamwork",
        adaptability_skill: "Adaptability",
        critical_thinking_skill: "Critical Thinking",
        time_management_skill: "Time Management",
        proactivity_skill: "Proactivity",
        organization_skill: "Organization",

        communication_skill: "Communication",
        projects_title: "My Projects",
        project_api_title: "SOAP API - City Hall",
        project_api_description: "This project aims to connect to the São Paulo City Hall API in order to automate the invoicing process.",

        project_remote_office_title: "Remote Work vs. Office",
        project_remote_office_description: "Analysis of the relationship between employment type (remote or office) and its implications on productivity and employee well-being.",
        project_datascience_um_title: "DataScience - University of Michigan",
        project_datascience_um_description: "Learning obtained through the DataScience course by the University of Michigan, including exercises and practices.",
        project_python_studies_title: "Python Studies",
        project_python_studies_description: "Repository with Python studies and exercises, including fundamental concepts and advanced practices.",
        data_analysis_tech: "Data Analysis",
        statistics_tech: "Statistics",
        data_science_tech: "Data Science",
        programming_tech: "Programming",
        learning_tech: "Learning",
        certifications_title: "Certifications",
        cert_python_title: "Python for Data Analysis",
        cert_python_institution: "Coursera - University of Michigan",
        cert_data_science_title: "Introduction to Data Science",
        cert_data_science_institution: "Coursera - IBM",
        cert_web_dev_title: "Web Development",
        cert_web_dev_institution: "FreeCodeCamp",
        contact_title: "Get in Touch",
        contact_subtitle: "Let's talk!",
        contact_description: "I'm always open to new opportunities and interesting projects. Get in touch with me!",
        form_name_label: "Name",
        form_email_label: "Email",
        form_message_label: "Message",
        form_submit_button: "Send Message",
        footer_text: "© 2024 Kauê Costa Souza. All rights reserved."
    }
};

// ===== VARIÁVEIS GLOBAIS =====
let currentLanguage = 'pt';
let isDarkMode = false;

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupMobileMenu();
    setupNavbarScroll();
    setupSkillsAnimation();
    setupContactForm();
    setupSmoothScrolling();
    setupCounterAnimation();
    loadUserPreferences();
}

// ===== MENU MOBILE =====
function setupMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animação das barras do menu
            const bars = document.querySelectorAll('.bar');
            bars.forEach((bar, index) => {
                bar.classList.toggle(`bar-${index + 1}-active`);
            });
        });
        
        // Fechar menu ao clicar em um link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                const bars = document.querySelectorAll('.bar');
                bars.forEach((bar, index) => {
                    bar.classList.remove(`bar-${index + 1}-active`);
                });
            });
        });
        
        // Fechar menu ao clicar fora
        document.addEventListener('click', function(e) {
            if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                const bars = document.querySelectorAll('.bar');
                bars.forEach((bar, index) => {
                    bar.classList.remove(`bar-${index + 1}-active`);
                });
            }
        });
    }
}

// ===== EFEITO SCROLL NAVBAR =====
function setupNavbarScroll() {
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.style.padding = '10px 0';
                navbar.style.backdropFilter = 'blur(15px)';
            } else {
                navbar.style.padding = '15px 0';
                navbar.style.backdropFilter = 'blur(10px)';
            }
        }
    });
}

// ===== ANIMAÇÃO DAS HABILIDADES =====
function setupSkillsAnimation() {
    const skillBars = document.querySelectorAll('.skill-level');
    
    const animateSkillBars = () => {
        skillBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 300);
        });
    };
    
    // Observador de interseção para animar as barras quando visíveis
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    const skillsSection = document.querySelector('.skills');
    if (skillsSection) {
        observer.observe(skillsSection);
    }
}

// ===== ANIMAÇÃO DOS CONTADORES =====
function setupCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number');
    
    const animateCounters = () => {
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'));
            const duration = 2000; // 2 segundos
            const increment = target / (duration / 16); // 60 FPS
            let current = 0;
            
            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    counter.textContent = Math.ceil(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };
            
            updateCounter();
        });
    };
    
    // Observador para animar quando a seção estiver visível
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    const aboutSection = document.querySelector('.about');
    if (aboutSection) {
        observer.observe(aboutSection);
    }
}

// ===== FORMULÁRIO DE CONTATO =====
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            // Validação básica
            const name = contactForm.querySelector('#name').value.trim();
            const email = contactForm.querySelector('#email').value.trim();
            const message = contactForm.querySelector('#message').value.trim();
            
            if (!name || !email || !message) {
                showNotification('Por favor, preencha todos os campos.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Por favor, insira um email válido.', 'error');
                return;
            }
            
            // Simular envio
            submitBtn.disabled = true;
            submitBtn.textContent = currentLanguage === 'pt' ? 'Enviando...' : 'Sending...';
            
            setTimeout(() => {
                contactForm.reset();
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
                
                const successMessage = currentLanguage === 'pt' 
                    ? 'Mensagem enviada com sucesso! Obrigado pelo contato.'
                    : 'Message sent successfully! Thank you for contacting me.';
                    
                showNotification(successMessage, 'success');
            }, 1500);
        });
    }
}

// ===== VALIDAÇÃO DE EMAIL =====
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ===== NOTIFICAÇÕES =====
function showNotification(message, type = 'info') {
    // Remover notificação existente
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Criar nova notificação
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Estilos da notificação
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 5px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        word-wrap: break-word;
    `;
    
    // Cores baseadas no tipo
    const colors = {
        success: '#4CAF50',
        error: '#f44336',
        info: '#2196F3'
    };
    
    notification.style.backgroundColor = colors[type] || colors.info;
    
    document.body.appendChild(notification);
    
    // Animar entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remover após 5 segundos
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 5000);
}

// ===== SCROLL SUAVE =====
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 70; // Compensar navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== MODO ESCURO =====
function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);
    
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        darkModeToggle.textContent = isDarkMode 
            ? (currentLanguage === 'pt' ? '☀️ Claro' : '☀️ Light')
            : (currentLanguage === 'pt' ? '🌙 Escuro' : '🌙 Dark');
    }
    
    // Salvar preferência
    localStorage.setItem('darkMode', isDarkMode);
}

// ===== TRADUÇÃO =====
function changeLanguage(lang) {
    currentLanguage = lang;
    
    // Atualizar todos os elementos com data-translate
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Atualizar botão do modo escuro
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        darkModeToggle.textContent = isDarkMode 
            ? (lang === 'pt' ? '☀️ Claro' : '☀️ Light')
            : (lang === 'pt' ? '🌙 Escuro' : '🌙 Dark');
    }
    
    // Atualizar atributo lang do HTML
    document.documentElement.lang = lang;
    
    // Salvar preferência
    localStorage.setItem('language', lang);
}

// ===== CARREGAR PREFERÊNCIAS =====
function loadUserPreferences() {
    // Carregar modo escuro
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'true') {
        toggleDarkMode();
    }
    
    // Carregar idioma
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && translations[savedLanguage]) {
        const languageSelect = document.getElementById('language-select');
        if (languageSelect) {
            languageSelect.value = savedLanguage;
            changeLanguage(savedLanguage);
        }
    }
}

// ===== EFEITOS VISUAIS ADICIONAIS =====

// Parallax suave no hero
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const blob = document.querySelector('.blob');
    
    if (hero && blob) {
        const rate = scrolled * -0.5;
        blob.style.transform = `translateY(${rate}px)`;
    }
});

// Animação de entrada para cards
function setupCardAnimations() {
    const cards = document.querySelectorAll('.project-card, .cert-card, .skill-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Inicializar animações de cards quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(setupCardAnimations, 500);
});

// ===== UTILITÁRIOS =====

// Debounce para otimizar eventos de scroll
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Aplicar debounce ao scroll
const debouncedScroll = debounce(() => {
    // Código de scroll otimizado aqui se necessário
}, 10);

window.addEventListener('scroll', debouncedScroll);

// ===== EASTER EGG =====
let konamiCode = [];
const konamiSequence = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
];

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.code);
    
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        showNotification('🎉 Código Konami ativado! Você encontrou o easter egg!', 'success');
        // Adicionar efeito especial
        document.body.style.animation = 'rainbow 2s infinite';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
    }
});

// CSS para o efeito rainbow
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);

console.log('🚀 Portfólio de Kauê Costa Souza carregado com sucesso!');
console.log('💡 Dica: Tente o código Konami para um easter egg!');

