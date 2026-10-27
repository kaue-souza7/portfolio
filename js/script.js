/* ==========================================================================
   KAUÊ SOUZA — PORTFÓLIO
   Movimento, narrativa e detalhes.
   ========================================================================== */

(() => {
    'use strict';

    const $ = (selector, context = document) => context.querySelector(selector);
    const $$ = (selector, context = document) => Array.from(context.querySelectorAll(selector));
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    const hasMotion = Boolean(gsap && !reduceMotion);

    if (gsap && ScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger);
    }

    const state = {
        lang: 'pt',
        menuOpen: false,
        lenis: null,
        toastTimer: null
    };

    /* ======================================================================
       CONTEÚDO / TRADUÇÕES
       ====================================================================== */
    const translations = {
        pt: {
            meta_title: 'Kauê Souza — Sistemas que contam histórias',
            meta_description: 'Portfólio de Kauê Souza, desenvolvedor de sistemas, IA e automação em São Paulo. Do primeiro script à IA agêntica: produtos que resolvem problemas reais.',
            skip_link: 'Pular para o conteúdo',
            preloader_tag: 'carregando o portfólio',
            preloader_word: 'Histórias',
            nav_story: 'História',
            nav_journey: 'Trajetória',
            nav_work: 'Sistemas',
            nav_arsenal: 'Arsenal',
            nav_contact: 'Contato',
            lang_aria: 'Switch to English',
            menu_open: 'Abrir menu',
            menu_close: 'Fechar menu',
            cursor_open: 'abrir',
            cursor_view: 'ver projeto',
            hero_line_1: 'Sistemas',
            hero_line_2: 'que contam',
            hero_line_3: 'histórias.',
            hero_role: 'Desenvolvedor de sistemas · IA & automação',
            hero_lede: 'Sou Kauê Souza. Transformo processos complexos em produtos que as pessoas entendem, usam e lembram — do suporte ao código, do ERP à IA agêntica.',
            hero_cta: 'Começar a história',
            hero_cta_alt: 'Ver os sistemas',
            hero_scroll: 'role para começar',
            scroll_aria: 'Rolar para baixo',
            fact_now_label: 'Atualmente',
            fact_now_value: 'TI & Implantação · Podemos Consultoria',
            fact_edu_label: 'Formação',
            fact_edu_value: 'Fatec · Análise e Desenvolvimento de Sistemas',
            fact_focus_label: 'Foco',
            fact_focus_value: 'IA agêntica, automação e produtos digitais',

            chapter_spark: 'A faísca',
            spark_title_1: 'Tudo começou',
            spark_title_2: 'com uma pergunta.',
            spark_lede: 'Antes do primeiro emprego, do primeiro sistema e da primeira IA, existia só a vontade de entender como as coisas funcionam — e a teimosia de tentar fazer melhor.',
            manifesto_quote: 'E se eu pudesse fazer o computador trabalhar por mim?',
            manifesto_caption: 'O início de tudo',
            manifesto_p1: 'Meu primeiro contato com tecnologia não foi em uma grande empresa, nem em um laboratório. Foi dentro da rotina: planilhas que se repetiam, processos que travavam e perguntas que ninguém tinha tempo de responder.',
            manifesto_p2: 'Python veio como ferramenta. Os dados, como linguagem. E o que começou como estudo virou um jeito de resolver problemas: observar o processo, encontrar o atrito e construir algo que deixe a vida de alguém mais simples.',
            manifesto_highlight: 'Do primeiro script à IA agêntica, a pergunta continua a mesma: como fazer melhor?',
            thread_label: 'O fio condutor',
            thread_1_title: 'Curiosidade',
            thread_1_text: 'Entender o porquê antes de sair codando.',
            thread_2_title: 'Código',
            thread_2_text: 'Transformar entendimento em algo que funciona.',
            thread_3_title: 'Impacto',
            thread_3_text: 'Deixar o processo — e as pessoas — em melhor estado.',
            ticker_word_1: 'Curiosidade',
            ticker_word_2: 'Código',
            ticker_word_3: 'Impacto',

            chapter_journey: 'A construção',
            journey_title_1: 'Aprendi construindo.',
            journey_title_2: 'No mundo real.',
            journey_lede: 'Não foi um bootcamp. Foi resolver problema de verdade, com prazo, pessoas e sistema legado no meio do caminho.',
            journey_1_meta: 'DEZ 2024 — HOJE · ASSISTENTE DE TI & IMPLANTAÇÃO · PODEMOS',
            journey_1_title: 'Suporte que virou visão de sistema.',
            journey_1_text: 'Assumi o departamento de TI da Podemos Consultoria Empresarial. Suporte, implantação, treinamento e a rotina de fazer a tecnologia funcionar para pessoas reais.',
            journey_1_b1: 'Gestão do departamento de TI',
            journey_1_b2: 'Implantação de sistemas e soluções',
            journey_1_b3: 'Suporte e melhoria contínua',
            journey_2_meta: 'AUTOMAÇÃO · PYTHON & FASTAPI',
            journey_2_title: 'Se repete duas vezes, pode virar código.',
            journey_2_text: 'Comecei a transformar rotinas manuais em scripts e sistemas internos com Python e FastAPI. Menos cliques, menos planilhas, mais tempo para o que importa.',
            journey_2_b1: 'Scripts Python para rotinas diárias',
            journey_2_b2: 'APIs internas com FastAPI',
            journey_2_b3: 'Pandas e openpyxl no fluxo de dados',
            journey_3_meta: 'INTEGRAÇÃO · ERP & PDV',
            journey_3_title: 'Sistemas que finalmente conversam.',
            journey_3_text: 'Integrei ERP, PDV e outros sistemas via APIs REST. JSON, XML e dados que antes ficavam presos em ilhas passaram a circular sem atrito.',
            journey_3_b1: 'Integração de ERP e PDV',
            journey_3_b2: 'APIs REST com JSON e XML',
            journey_3_b3: 'Dados para decisões operacionais',
            journey_4_meta: 'IA AGÊNTICA · IBM AI LAB 2026',
            journey_4_title: 'O futuro se escreve com agentes.',
            journey_4_text: 'No IBM AI Experiential Learning Lab for Brazil, construí uma solução de IA agêntica para um desafio real da indústria usando IBM Cloud, watsonx Orchestrate, watsonx e IBM Bob.',
            journey_4_b1: 'Agentic AI aplicada a um desafio de negócio',
            journey_4_b2: 'IBM Cloud + watsonx Orchestrate',
            journey_4_b3: 'Ciclo iterativo: problema → desenho → solução',
            journey_hint: 'role para avançar',
            journey_outro: 'O que não muda: tecnologia é meio. O problema é o começo.',

            stage_1_live: 'ao vivo',
            stage_1_eyebrow: 'IMPLANTAÇÃO',
            stage_1_title: 'Operação em dia',
            stage_1_pill: 'em andamento',
            stage_1_item_1: 'ERP conectado',
            stage_1_item_2: 'PDV em operação',
            stage_1_item_3: 'Equipe treinada',
            stage_1_item_4: 'Próxima implantação',
            stage_1_today: 'hoje',
            stage_1_foot: '“Sistema bom é sistema que as pessoas usam.”',
            stage_2_line_1: 'lendo planilhas...',
            stage_2_line_2: 'validando dados...',
            stage_2_line_3: 'gerando relatório...',
            stage_2_line_4: 'rotina concluída sem trabalho manual',
            stage_2_result: 'o que voltou para o time',
            stage_2_result_value: 'tempo',
            stage_3_label: 'MAPA DE INTEGRAÇÃO',
            stage_3_status: 'sincronizado',
            stage_3_erp: 'gestão',
            stage_3_pdv: 'vendas',
            stage_4_eyebrow: 'WATSONX ORCHESTRATE',
            stage_4_title: 'Orquestração de agentes',
            stage_4_agent_1: 'Triagem',
            stage_4_agent_1_text: 'entende o problema',
            stage_4_agent_2: 'Análise',
            stage_4_agent_2_text: 'conecta os dados',
            stage_4_agent_3: 'Ação',
            stage_4_agent_3_text: 'executa o próximo passo',

            chapter_work: 'Os sistemas',
            work_title_1: 'Do problema',
            work_title_2: 'ao produto.',
            work_lede: 'Dois projetos autorais que nasceram de perguntas incômodas — e viraram plataformas de ponta a ponta.',
            case_1_live: 'PRODUTO',
            case_1_caption: 'Prisma.AI · telas do produto com dados de exemplo',
            case_1_category: 'IA · EDUCAÇÃO FINANCEIRA',
            case_1_tagline: 'Aprender finanças é praticar o próximo passo.',
            case_1_desc: 'Plataforma gamificada de educação financeira para jovens adultos. Doze trilhas, 45 missões e agentes de IA que acompanham o raciocínio — sem pedir acesso a dados bancários.',
            case_1_stat_1: 'trilhas',
            case_1_stat_2: 'missões',
            case_1_stat_3: 'agentes de IA',
            case_1_open_aria: 'Abrir o repositório do Prisma.AI no GitHub',
            case_2_live: 'PRODUTO',
            case_2_open_aria: 'Abrir o repositório do ePass no GitHub',
            case_2_caption: 'ePass · telas reais do produto em execução',
            case_2_category: 'GESTÃO ESCOLAR · IA LOCAL',
            case_2_tagline: 'A escola inteira, em um só lugar.',
            case_2_desc: 'Plataforma de gestão escolar de ponta a ponta: do diário de classe ao lanche na cantina. Web para a gestão, mobile para famílias e professores — e Atena, uma IA que roda dentro da escola.',
            case_2_stat_1: 'perfis de acesso',
            case_2_stat_2: 'intenções na Atena',
            case_2_stat_3: 'IA local',
            case_open: 'Explorar o repositório',
            archive_title: 'Outros projetos',
            archive_all: 'Ver todos os repositórios',
            archive_1_desc: 'Automação da emissão de notas fiscais via API SOAP da Prefeitura de São Paulo.',
            archive_2_title: 'Trabalho remoto vs. escritório',
            archive_2_desc: 'Análise de produtividade e bem-estar em diferentes modelos de trabalho.',
            archive_3_desc: 'Trilha prática de ciência de dados pela Universidade de Michigan.',
            tech_stats: 'Estatística',

            chapter_arsenal: 'O arsenal',
            arsenal_title_1: 'Ferramentas mudam.',
            arsenal_title_2: 'O jeito de pensar, não.',
            arsenal_lede: 'Um stack que cresce conforme o problema pede — com base em código limpo, dados confiáveis e entrega que funciona.',
            skills_1_title: 'Backend & linguagens',
            skills_1_desc: 'A base para construir sistemas que aguentam a rotina.',
            skills_2_title: 'Dados & automação',
            skills_2_desc: 'Do arquivo solto ao insight que apoia a decisão.',
            skills_3_title: 'Integrações',
            skills_3_desc: 'Sistemas diferentes falando a mesma língua.',
            skills_4_title: 'Cloud & IA',
            skills_4_desc: 'Onde a próxima ideia vira sistema.',
            skills_5_title: 'Bases & práticas',
            skills_5_desc: 'O que sustenta qualquer entrega de verdade.',
            skills_6_title: 'Ainda aprendendo',
            skills_6_desc: 'Inglês intermediário, espanhol básico e a curiosidade que não desliga.',
            skills_6_note: 'São Paulo · CNH e CDI',
            credentials_title: 'Credenciais',
            credentials_sub: 'Formação, cursos e certificações',
            cred_1_title: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
            cred_interfatec_sub: 'Python · trabalho em equipe',
            cred_3_title: 'Python',
            cred_4_title: 'Banco de Dados e SQL',
            cred_6_sub: 'Melhoria contínua',
            cred_ethics_title: 'Ética no Desenvolvimento de Sistemas',
            cred_leadership_title: 'Inteligência Emocional e Liderança',

            contact_kicker: 'Contato',
            contact_title_1: 'Vamos construir',
            contact_title_2: 'algo que faça',
            contact_title_3: 'sentido?',
            contact_lede: 'Trabalho com desenvolvimento, automação e IA. Se você tem um problema interessante — ou um time que gosta de resolver — vamos conversar.',
            contact_info_label: 'Informações',
            contact_email_label: 'Escreva para mim',
            contact_copy_hint: 'clique para copiar',
            contact_linkedin: 'LinkedIn',
            contact_cv: 'Baixar currículo',
            contact_local_time: 'Hora local',
            contact_location: 'Localização',
            contact_languages: 'Idiomas',
            contact_languages_value: 'Português · Inglês · Espanhol',
            contact_signature: 'Feito à mão, sem template. Código, café e curiosidade.',
            footer_rights: 'Todos os direitos reservados',
            footer_top: 'Voltar ao topo',
            copied_toast: 'E-mail copiado. Até a próxima conversa.',
            copy_error_toast: 'Não foi possível copiar. O e-mail está no botão.'
        },
        en: {
            meta_title: 'Kauê Souza — Systems that tell stories',
            meta_description: 'Portfolio of Kauê Souza, systems developer, AI and automation engineer based in São Paulo. From the first script to agentic AI: products that solve real problems.',
            skip_link: 'Skip to content',
            preloader_tag: 'loading the portfolio',
            preloader_word: 'Stories',
            nav_story: 'Story',
            nav_journey: 'Journey',
            nav_work: 'Systems',
            nav_arsenal: 'Arsenal',
            nav_contact: 'Contact',
            lang_aria: 'Mudar para português',
            menu_open: 'Open menu',
            menu_close: 'Close menu',
            cursor_open: 'open',
            cursor_view: 'view project',
            hero_line_1: 'Systems',
            hero_line_2: 'that tell',
            hero_line_3: 'stories.',
            hero_role: 'Systems developer · AI & automation',
            hero_lede: 'I am Kauê Souza. I turn complex processes into products people understand, use and remember — from support to code, from ERP to agentic AI.',
            hero_cta: 'Start the story',
            hero_cta_alt: 'See the systems',
            hero_scroll: 'scroll to begin',
            scroll_aria: 'Scroll down',
            fact_now_label: 'Currently',
            fact_now_value: 'IT & Implementation · Podemos Consultoria',
            fact_edu_label: 'Education',
            fact_edu_value: 'Fatec · Systems Analysis and Development',
            fact_focus_label: 'Focus',
            fact_focus_value: 'Agentic AI, automation and digital products',

            chapter_spark: 'The spark',
            spark_title_1: 'It all started',
            spark_title_2: 'with a question.',
            spark_lede: 'Before the first job, the first system and the first AI, there was only the urge to understand how things work — and the stubbornness to try to make them better.',
            manifesto_quote: 'What if I could make the computer work for me?',
            manifesto_caption: 'Where it all began',
            manifesto_p1: 'My first contact with technology was not at a big company or in a lab. It was inside everyday work: spreadsheets that repeated themselves, processes that got stuck and questions nobody had time to answer.',
            manifesto_p2: 'Python came as a tool. Data became a language. What started as study turned into a way of solving problems: observe the process, find the friction and build something that makes someone’s life simpler.',
            manifesto_highlight: 'From the first script to agentic AI, the question remains the same: how can we make it better?',
            thread_label: 'The common thread',
            thread_1_title: 'Curiosity',
            thread_1_text: 'Understand the why before writing a line of code.',
            thread_2_title: 'Code',
            thread_2_text: 'Turn understanding into something that works.',
            thread_3_title: 'Impact',
            thread_3_text: 'Leave the process — and the people — better off.',
            ticker_word_1: 'Curiosity',
            ticker_word_2: 'Code',
            ticker_word_3: 'Impact',

            chapter_journey: 'The build',
            journey_title_1: 'I learned by building.',
            journey_title_2: 'In the real world.',
            journey_lede: 'It was not a bootcamp. It was solving real problems, with deadlines, people and legacy systems in the way.',
            journey_1_meta: 'DEC 2024 — PRESENT · IT & IMPLEMENTATION ASSISTANT · PODEMOS',
            journey_1_title: 'Support that became a systems view.',
            journey_1_text: 'I took over the IT department at Podemos Consultoria Empresarial. Support, implementation, training and the daily work of making technology work for real people.',
            journey_1_b1: 'IT department management',
            journey_1_b2: 'Systems and solutions implementation',
            journey_1_b3: 'Support and continuous improvement',
            journey_2_meta: 'AUTOMATION · PYTHON & FASTAPI',
            journey_2_title: 'If it repeats twice, it can become code.',
            journey_2_text: 'I started turning manual routines into scripts and internal systems with Python and FastAPI. Fewer clicks, fewer spreadsheets, more time for what matters.',
            journey_2_b1: 'Python scripts for daily routines',
            journey_2_b2: 'Internal APIs with FastAPI',
            journey_2_b3: 'Pandas and openpyxl in the data flow',
            journey_3_meta: 'INTEGRATION · ERP & POS',
            journey_3_title: 'Systems that finally talk.',
            journey_3_text: 'I integrated ERP, POS and other systems through REST APIs. JSON, XML and data that used to be trapped in silos started flowing without friction.',
            journey_3_b1: 'ERP and POS integration',
            journey_3_b2: 'REST APIs with JSON and XML',
            journey_3_b3: 'Data for operational decisions',
            journey_4_meta: 'AGENTIC AI · IBM AI LAB 2026',
            journey_4_title: 'The future is written with agents.',
            journey_4_text: 'At the IBM AI Experiential Learning Lab for Brazil, I built an agentic AI solution for a real industry challenge using IBM Cloud, watsonx Orchestrate, watsonx and IBM Bob.',
            journey_4_b1: 'Agentic AI applied to a business challenge',
            journey_4_b2: 'IBM Cloud + watsonx Orchestrate',
            journey_4_b3: 'Iterative cycle: problem → design → solution',
            journey_hint: 'scroll to move forward',
            journey_outro: 'What does not change: technology is a means. The problem is the beginning.',

            stage_1_live: 'live',
            stage_1_eyebrow: 'IMPLEMENTATION',
            stage_1_title: 'Operations on track',
            stage_1_pill: 'in progress',
            stage_1_item_1: 'ERP connected',
            stage_1_item_2: 'POS up and running',
            stage_1_item_3: 'Team trained',
            stage_1_item_4: 'Next rollout',
            stage_1_today: 'today',
            stage_1_foot: '“A good system is a system people actually use.”',
            stage_2_line_1: 'reading spreadsheets...',
            stage_2_line_2: 'validating data...',
            stage_2_line_3: 'generating report...',
            stage_2_line_4: 'routine completed without manual work',
            stage_2_result: 'what the team got back',
            stage_2_result_value: 'time',
            stage_3_label: 'INTEGRATION MAP',
            stage_3_status: 'in sync',
            stage_3_erp: 'management',
            stage_3_pdv: 'sales',
            stage_4_eyebrow: 'WATSONX ORCHESTRATE',
            stage_4_title: 'Agent orchestration',
            stage_4_agent_1: 'Triage',
            stage_4_agent_1_text: 'understands the problem',
            stage_4_agent_2: 'Analysis',
            stage_4_agent_2_text: 'connects the data',
            stage_4_agent_3: 'Action',
            stage_4_agent_3_text: 'executes the next step',

            chapter_work: 'The systems',
            work_title_1: 'From problem',
            work_title_2: 'to product.',
            work_lede: 'Two original projects born from uncomfortable questions — and built into end-to-end platforms.',
            case_1_live: 'PRODUCT',
            case_1_caption: 'Prisma.AI · product screens with sample data',
            case_1_category: 'AI · FINANCIAL EDUCATION',
            case_1_tagline: 'Learning finance is practicing the next step.',
            case_1_desc: 'A gamified financial education platform for young adults. Twelve learning tracks, 45 missions and AI agents that follow the user’s reasoning — with no bank data required.',
            case_1_stat_1: 'tracks',
            case_1_stat_2: 'missions',
            case_1_stat_3: 'AI agents',
            case_1_open_aria: 'Open the Prisma.AI repository on GitHub',
            case_2_live: 'PRODUCT',
            case_2_open_aria: 'Open the ePass repository on GitHub',
            case_2_caption: 'ePass · real product screens in action',
            case_2_category: 'SCHOOL MANAGEMENT · LOCAL AI',
            case_2_tagline: 'The whole school, in one place.',
            case_2_desc: 'An end-to-end school management platform: from the class diary to the cafeteria lunch. Web for administration, mobile for families and teachers — plus Atena, an AI that runs inside the school.',
            case_2_stat_1: 'access profiles',
            case_2_stat_2: 'Atena intents',
            case_2_stat_3: 'local AI',
            case_open: 'Explore the repository',
            archive_title: 'Other projects',
            archive_all: 'See all repositories',
            archive_1_desc: 'Automation of invoice issuance through the São Paulo City Hall SOAP API.',
            archive_2_title: 'Remote work vs. office',
            archive_2_desc: 'Analysis of productivity and well-being across different work models.',
            archive_3_desc: 'Hands-on data science track from the University of Michigan.',
            tech_stats: 'Statistics',

            chapter_arsenal: 'The arsenal',
            arsenal_title_1: 'Tools change.',
            arsenal_title_2: 'Thinking doesn’t.',
            arsenal_lede: 'A stack that grows with the problem — grounded in clean code, reliable data and delivery that works.',
            skills_1_title: 'Backend & languages',
            skills_1_desc: 'The foundation for systems that hold up in daily use.',
            skills_2_title: 'Data & automation',
            skills_2_desc: 'From scattered files to insights that support decisions.',
            skills_3_title: 'Integrations',
            skills_3_desc: 'Different systems speaking the same language.',
            skills_4_title: 'Cloud & AI',
            skills_4_desc: 'Where the next idea becomes a system.',
            skills_5_title: 'Foundations & practice',
            skills_5_desc: 'What sustains any real delivery.',
            skills_6_title: 'Still learning',
            skills_6_desc: 'Intermediate English, basic Spanish and curiosity that never switches off.',
            skills_6_note: 'São Paulo · driver’s license and digital ID',
            credentials_title: 'Credentials',
            credentials_sub: 'Education, courses and certifications',
            cred_1_title: 'Associate degree in Systems Analysis and Development',
            cred_interfatec_sub: 'Python · teamwork',
            cred_3_title: 'Python',
            cred_4_title: 'Databases and SQL',
            cred_6_sub: 'Continuous improvement',
            cred_ethics_title: 'Ethics in Systems Development',
            cred_leadership_title: 'Emotional Intelligence and Leadership',

            contact_kicker: 'Contact',
            contact_title_1: 'Shall we build',
            contact_title_2: 'something that',
            contact_title_3: 'matters?',
            contact_lede: 'I work with development, automation and AI. If you have an interesting problem — or a team that enjoys solving them — let’s talk.',
            contact_info_label: 'Details',
            contact_email_label: 'Write to me',
            contact_copy_hint: 'click to copy',
            contact_linkedin: 'LinkedIn',
            contact_cv: 'Download résumé',
            contact_local_time: 'Local time',
            contact_location: 'Location',
            contact_languages: 'Languages',
            contact_languages_value: 'Portuguese · English · Spanish',
            contact_signature: 'Handmade, no template. Code, coffee and curiosity.',
            footer_rights: 'All rights reserved',
            footer_top: 'Back to top',
            copied_toast: 'Email copied. Talk soon.',
            copy_error_toast: 'Could not copy. The email is on the button.'
        }
    };

    /* ======================================================================
       INICIALIZAÇÃO
       ====================================================================== */
    function init() {
        applyLanguage(loadLanguage(), false);
        setupYear();
        setupClock();
        setupCopyEmail();
        setupMenu();
        setupHeader();
        setupAnchorScrolling();
        setupCursor();
        setupMagnetic();
        setupHeroCanvas();
        setupHeroParallax();
        setupSmoothScroll();
        setupScrollUI();
        setupMotion();
        setupLocalTimeRefresh();

        const intro = hasMotion ? buildHeroIntro() : null;
        runPreloader(intro);

        window.addEventListener('load', () => {
            if (ScrollTrigger) ScrollTrigger.refresh();
        });
    }

    function loadLanguage() {
        try {
            const saved = localStorage.getItem('kaue-lang');
            if (saved === 'en' || saved === 'pt') return saved;
        } catch (error) {
            // Armazenamento bloqueado: segue no idioma padrão.
        }
        return 'pt';
    }

    function saveLanguage(lang) {
        try {
            localStorage.setItem('kaue-lang', lang);
        } catch (error) {
            // Sem persistência de idioma; a troca continua funcionando na sessão.
        }
    }

    /* ======================================================================
       PRELOADER
       ====================================================================== */
    function runPreloader(intro) {
        const preloader = $('#preloader');
        const counter = $('#preloaderCount');
        const bar = $('#preloaderBar');
        const body = document.body;

        if (!preloader) {
            body.classList.remove('is-loading');
            if (intro) intro.play();
            return;
        }

        body.classList.add('is-loading');

        if (!hasMotion) {
            preloader.style.display = 'none';
            body.classList.remove('is-loading');
            if (state.lenis) state.lenis.start();
            return;
        }

        const progress = { value: 0 };

        const startExit = () => {
            body.classList.remove('is-loading');
            if (state.lenis) state.lenis.start();

            if (intro) intro.play();

            gsap.timeline({
                onComplete: () => {
                    preloader.style.display = 'none';
                    if (ScrollTrigger) ScrollTrigger.refresh();
                }
            })
                .to('.preloader__center', { y: -30, autoAlpha: 0, duration: 0.4, ease: 'power2.in' }, 0)
                .to('.preloader__top, .preloader__bottom', { autoAlpha: 0, duration: 0.3, ease: 'power2.in' }, 0)
                .to(preloader, { yPercent: -100, duration: 0.85, ease: 'power4.inOut' }, 0.22);
        };

        gsap.to(progress, {
            value: 100,
            duration: 0.95,
            ease: 'power2.inOut',
            onUpdate: () => {
                const value = Math.round(progress.value);
                if (counter) counter.textContent = String(value).padStart(2, '0');
                if (bar) bar.style.transform = `scaleX(${progress.value / 100})`;
            },
            onComplete: startExit
        });
    }

    /* ======================================================================
       IDIOMA
       ====================================================================== */
    function applyLanguage(lang, persist = true) {
        state.lang = lang;
        const dictionary = translations[lang];

        document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
        document.body.classList.toggle('lang-pt', lang === 'pt');
        document.body.classList.toggle('lang-en', lang === 'en');

        $$('[data-i18n]').forEach((element) => {
            const key = element.getAttribute('data-i18n');
            const value = dictionary[key];
            if (typeof value === 'string') element.textContent = value;
        });

        $$('[data-i18n-aria]').forEach((element) => {
            const key = element.getAttribute('data-i18n-aria');
            const value = dictionary[key];
            if (typeof value === 'string') element.setAttribute('aria-label', value);
        });

        const navTitle = $('.scroll-cue');
        if (navTitle) navTitle.setAttribute('aria-label', dictionary.scroll_aria);

        const pageTitle = dictionary.meta_title;
        if (pageTitle) document.title = pageTitle;

        const description = $('meta[name="description"]');
        if (description) description.setAttribute('content', dictionary.meta_description);

        const ptLabel = $('.lang__pt');
        const enLabel = $('.lang__en');
        if (ptLabel) ptLabel.classList.toggle('is-active', lang === 'pt');
        if (enLabel) enLabel.classList.toggle('is-active', lang === 'en');

        const langToggle = $('#langToggle');
        if (langToggle) {
            langToggle.setAttribute('aria-label', lang === 'pt' ? 'Switch to English' : 'Mudar para português');
        }

        const cursorLabel = $('.cursor__label');
        if (cursorLabel && document.body.classList.contains('cursor-view')) {
            cursorLabel.textContent = dictionary.cursor_view;
        }

        const menuButton = $('#menuButton');
        if (menuButton) {
            menuButton.setAttribute('aria-label', state.menuOpen ? dictionary.menu_close : dictionary.menu_open);
        }

        if (persist) saveLanguage(lang);

        rebuildWordReveal();
        setupClock();

        if (persist && ScrollTrigger) {
            window.setTimeout(() => {
                ScrollTrigger.refresh();
                window.dispatchEvent(new Event('scroll'));
            }, 120);
        }
    }

    function setupYear() {
        const year = $('#year');
        if (year) year.textContent = new Date().getFullYear();
    }

    function setupClock() {
        const clock = $('#localTime');
        if (!clock) return;
        const locale = state.lang === 'pt' ? 'pt-BR' : 'en-US';
        const formatter = new Intl.DateTimeFormat(locale, {
            timeZone: 'America/Sao_Paulo',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        });
        clock.textContent = formatter.format(new Date());
    }

    function setupLocalTimeRefresh() {
        const update = () => setupClock();
        update();
        window.setInterval(update, 60000);
    }

    /* ======================================================================
       MENU
       ====================================================================== */
    function setupMenu() {
        const button = $('#menuButton');
        const menu = $('#menuOverlay');
        const main = $('#main');
        if (!button || !menu) return;

        menu.inert = true;

        const open = () => {
            state.menuOpen = true;
            document.body.classList.add('menu-open');
            menu.classList.add('is-open');
            menu.setAttribute('aria-hidden', 'false');
            menu.inert = false;
            if (main) main.inert = true;
            button.setAttribute('aria-expanded', 'true');
            button.setAttribute('aria-label', translations[state.lang].menu_close);
            if (state.lenis) state.lenis.stop();
            window.setTimeout(() => {
                const firstLink = $('.menu__link', menu);
                if (firstLink) firstLink.focus({ preventScroll: true });
            }, 420);
        };

        const close = () => {
            if (!state.menuOpen) return;
            state.menuOpen = false;
            document.body.classList.remove('menu-open');
            menu.classList.remove('is-open');
            menu.setAttribute('aria-hidden', 'true');
            menu.inert = true;
            if (main) main.inert = false;
            button.setAttribute('aria-expanded', 'false');
            button.setAttribute('aria-label', translations[state.lang].menu_open);
            if (state.lenis) state.lenis.start();
            button.focus({ preventScroll: true });
        };

        button.addEventListener('click', () => {
            if (state.menuOpen) close();
            else open();
        });

        $$('[data-menu-link]', menu).forEach((link) => {
            link.addEventListener('click', () => close());
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && state.menuOpen) close();
        });

        document.addEventListener('click', (event) => {
            if (!state.menuOpen) return;
            if (!menu.contains(event.target) && !button.contains(event.target)) close();
        });

        // Se a tela crescer, fecha o menu para liberar o scroll.
        window.addEventListener('resize', () => {
            if (state.menuOpen && window.innerWidth > 1100) close();
        });
    }

    /* ======================================================================
       HEADER / SCROLL UI
       ====================================================================== */
    function setupHeader() {
        const header = $('#siteHeader');
        if (!header) return;

        const onScroll = () => {
            header.classList.toggle('is-scrolled', window.scrollY > 30);
        };

        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        if (state.lenis) state.lenis.on('scroll', onScroll);
    }

    function setupScrollUI() {
        const progress = $('#scrollProgress');
        const sections = $$('[data-chapter]');
        const navLinks = $$('.nav__link[data-nav]');
        const railLinks = $$('.chapter-rail__dots a[data-rail]');
        const chapterRail = $('.chapter-rail');

        const update = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const ratio = docHeight > 0 ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0;
            if (progress) progress.style.transform = `scaleX(${ratio})`;

            const marker = scrollTop + window.innerHeight * 0.36;
            let current = 'inicio';

            sections.forEach((section) => {
                if (section.offsetTop <= marker) current = section.id;
            });

            navLinks.forEach((link) => {
                const isCurrent = link.getAttribute('data-nav') === current;
                link.classList.toggle('is-current', isCurrent);
                if (isCurrent) link.setAttribute('aria-current', 'true');
                else link.removeAttribute('aria-current');
            });

            railLinks.forEach((link) => {
                link.classList.toggle('is-active', link.getAttribute('data-rail') === current);
            });

            if (chapterRail) {
                chapterRail.classList.toggle('is-hidden', current === 'contato');
            }
        };

        update();
        window.addEventListener('scroll', update, { passive: true });
        window.addEventListener('resize', update);
        if (state.lenis) state.lenis.on('scroll', update);

        // Garante o estado final mesmo quando o último frame de um scroll suave
        // não emite um novo evento de scroll.
        let lastScroll = window.scrollY;
        const watchScroll = () => {
            const currentScroll = window.scrollY;
            if (currentScroll !== lastScroll) {
                lastScroll = currentScroll;
                update();
            }
            requestAnimationFrame(watchScroll);
        };
        requestAnimationFrame(watchScroll);
    }

    /* ======================================================================
       NAVEGAÇÃO SUAVE
       ====================================================================== */
    function setupAnchorScrolling() {
        document.addEventListener('click', (event) => {
            const link = event.target.closest('a[href^="#"]');
            if (!link || link.classList.contains('skip-link')) return;

            const id = link.getAttribute('href');
            if (!id || id === '#') return;

            const target = document.querySelector(id);
            if (!target) return;

            event.preventDefault();

            const scroll = () => {
                const offset = id === '#inicio' ? 0 : -60;
                const top = target.getBoundingClientRect().top + window.scrollY + offset;

                if (state.lenis) {
                    state.lenis.scrollTo(top, { duration: 1.35, force: true });
                } else {
                    window.scrollTo({ top, behavior: reduceMotion ? 'auto' : 'smooth' });
                }

                try {
                    if (window.history && window.history.replaceState) {
                        window.history.replaceState(null, '', id === '#inicio' ? window.location.pathname : id);
                    }
                } catch (error) {
                    // Ambientes sem History API continuam navegando normalmente.
                }
            };

            if (state.menuOpen) {
                window.setTimeout(scroll, 320);
            } else {
                scroll();
            }
        });
    }

    /* ======================================================================
       SCROLL SUAVE
       ====================================================================== */
    function setupSmoothScroll() {
        if (!window.Lenis || reduceMotion) return;

        const lenis = new Lenis({
            duration: 1.15,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 1.4
        });

        state.lenis = lenis;

        if (gsap) {
            gsap.ticker.add((time) => lenis.raf(time * 1000));
            gsap.ticker.lagSmoothing(0);
        } else {
            const raf = (time) => {
                lenis.raf(time);
                requestAnimationFrame(raf);
            };
            requestAnimationFrame(raf);
        }

        if (ScrollTrigger) {
            lenis.on('scroll', ScrollTrigger.update);
        }

        if (document.body.classList.contains('is-loading')) {
            lenis.stop();
        }
    }

    /* ======================================================================
       MOVIMENTO / REVELAÇÕES
       ====================================================================== */
    function setupMotion() {
        if (!hasMotion) {
            // Sem animação: garante que nada fique escondido.
            $$('.line__inner, [data-reveal]').forEach((el) => {
                el.style.opacity = '1';
                el.style.transform = 'none';
                el.style.visibility = 'visible';
            });
            return;
        }

        gsap.set('[data-reveal]', { autoAlpha: 0, y: 34 });

        // Linhas de títulos grandes
        $$('.display').forEach((display) => {
            const lines = $$('.line__inner', display);
            gsap.from(lines, {
                yPercent: 115,
                duration: 1.1,
                ease: 'power4.out',
                stagger: 0.09,
                scrollTrigger: {
                    trigger: display,
                    start: 'top 88%',
                    once: true
                }
            });
        });

        // Blocos com fade
        $$('[data-reveal]').forEach((element) => {
            gsap.to(element, {
                autoAlpha: 1,
                y: 0,
                duration: 0.9,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: element,
                    start: 'top 88%',
                    once: true
                }
            });
        });

        // Seções com entrada em cortina
        $$('.chapter-head__lede').forEach((element) => {
            if (!element.hasAttribute('data-reveal')) {
                gsap.from(element, {
                    autoAlpha: 0,
                    y: 24,
                    duration: 0.9,
                    scrollTrigger: { trigger: element, start: 'top 90%', once: true }
                });
            }
        });

        // Projetos: imagem e texto entram de lados opostos
        $$('[data-case]').forEach((project) => {
            const media = $('.case__media', project);
            const body = $('.case__body', project);

            if (media) {
                gsap.from(media, {
                    autoAlpha: 0,
                    duration: 1.2,
                    ease: 'power3.out',
                    scrollTrigger: { trigger: project, start: 'top 78%', once: true }
                });
            }

            if (body) {
                gsap.from(body, {
                    autoAlpha: 0,
                    y: 46,
                    duration: 1,
                    ease: 'power3.out',
                    delay: 0.1,
                    scrollTrigger: { trigger: project, start: 'top 78%', once: true }
                });
            }
        });

        // Parallax sutil nas imagens de projeto
        gsap.matchMedia().add('(min-width: 901px)', () => {
            $$('[data-parallax]').forEach((element) => {
                gsap.fromTo(element, { y: 34 }, {
                    y: -34,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: element,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 0.8
                    }
                });
            });
        });

        // Jornada em cena fixa
        setupJourney();

        // Contadores? Não há números animados que representem métricas inventadas.
        // O movimento conta a história; os números reais ficam nas credenciais.
    }

    function buildHeroIntro() {
        const timeline = gsap.timeline({ paused: true, defaults: { ease: 'power4.out' } });

        timeline
            .from('.hero__title .line__inner', { yPercent: 115, duration: 1.2, stagger: 0.11 }, 0)
            .from('.hero__eyebrow > *', { autoAlpha: 0, y: 14, duration: 0.8, stagger: 0.07 }, 0.25)
            .from('.hero__role', { autoAlpha: 0, y: 14, duration: 0.8 }, 0.45)
            .from('.hero__lede', { autoAlpha: 0, y: 20, duration: 0.9 }, 0.55)
            .from('.hero__actions .btn', { autoAlpha: 0, y: 18, duration: 0.8, stagger: 0.08 }, 0.7)
            .from('.hero__portrait', { autoAlpha: 0, y: 26, duration: 1.1 }, 0.35)
            .from('.hero__facts', { autoAlpha: 0, y: 18, duration: 0.8 }, 0.95)
            .from('.scroll-cue', { autoAlpha: 0, duration: 0.7 }, 1.05);

        return timeline;
    }

    /* ======================================================================
       JORNADA — PIN + TROCA DE CENA
       ====================================================================== */
    function setupJourney() {
        if (!hasMotion || !ScrollTrigger) return;

        const journey = $('#journey');
        if (!journey) return;

        const steps = $$('.journey__step', journey);
        const stages = $$('.stage', journey);
        const ticks = $$('.journey__ticks span', journey);
        const current = $('#journeyCurrent');

        let lastStep = -1;

        const setStep = (index) => {
            const safeIndex = Math.max(0, Math.min(steps.length - 1, index));
            if (safeIndex === lastStep) return;
            lastStep = safeIndex;

            steps.forEach((step, i) => step.classList.toggle('is-active', i === safeIndex));
            stages.forEach((stage, i) => stage.classList.toggle('is-active', i === safeIndex));
            ticks.forEach((tick, i) => tick.classList.toggle('is-active', i === safeIndex));
            if (current) current.textContent = String(safeIndex + 1).padStart(2, '0');
        };

        const mm = gsap.matchMedia();

        mm.add('(min-width: 901px)', () => {
            setStep(0);

            const trigger = ScrollTrigger.create({
                trigger: journey,
                start: 'top top',
                end: 'bottom bottom',
                scrub: true,
                onUpdate: (self) => {
                    const index = Math.min(3, Math.floor(self.progress * 4));
                    setStep(index);
                }
            });

            return () => {
                trigger.kill();
                setStep(0);
            };
        });

        mm.add('(max-width: 900px)', () => {
            stages.forEach((stage) => stage.classList.remove('is-active'));
            if (current) current.textContent = '01';

            return () => {
                steps.forEach((step) => step.classList.remove('is-active'));
            };
        });
    }

    /* ======================================================================
       PALAVRA POR PALAVRA
       ====================================================================== */
    function rebuildWordReveal() {
        const elements = $$('[data-word-reveal]');
        if (!elements.length) return;

        elements.forEach((element) => {
            if (element._wordTween) {
                if (element._wordTween.scrollTrigger) element._wordTween.scrollTrigger.kill();
                element._wordTween.kill();
                element._wordTween = null;
            }

            const text = element.textContent.trim();
            if (!text) return;

            element.textContent = '';
            const words = text.split(/\s+/);

            words.forEach((word, index) => {
                const span = document.createElement('span');
                span.className = 'word';
                span.textContent = word;
                element.appendChild(span);
                if (index < words.length - 1) element.appendChild(document.createTextNode(' '));
            });

            if (!hasMotion) {
                $$('.word', element).forEach((word) => { word.style.opacity = '1'; });
                return;
            }

            const wordNodes = $$('.word', element);
            element._wordTween = gsap.fromTo(
                wordNodes,
                { opacity: 0.16 },
                {
                    opacity: 1,
                    stagger: 0.13,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 82%',
                        end: 'bottom 55%',
                        scrub: 0.7
                    }
                }
            );
        });
    }

    /* ======================================================================
       CURSOR
       ====================================================================== */
    function setupCursor() {
        if (!finePointer || reduceMotion) return;

        const cursor = $('.cursor');
        const dot = $('.cursor__dot');
        const ring = $('.cursor__ring');
        const label = $('.cursor__label');
        if (!cursor || !dot || !ring || !label) return;

        let targetX = window.innerWidth / 2;
        let targetY = window.innerHeight / 2;
        let currentX = targetX;
        let currentY = targetY;
        let visible = false;

        const setMode = (mode) => {
            const isView = mode === 'view' || mode === 'open';
            document.body.classList.toggle('cursor-view', isView);
            document.body.classList.toggle('cursor-hover', mode === 'hover');

            if (mode === 'view') {
                label.textContent = translations[state.lang].cursor_view;
            } else if (mode === 'open') {
                label.textContent = translations[state.lang].cursor_open;
            } else {
                label.textContent = '';
            }
        };

        const hideCursor = () => {
            visible = false;
            document.body.classList.remove('has-cursor', 'cursor-hover', 'cursor-view', 'cursor-press');
        };

        const setModeFromElement = (element) => {
            if (!element || !element.closest) {
                setMode(null);
                return;
            }

            const viewTarget = element.closest('[data-cursor="view"]');
            const openTarget = element.closest('[data-cursor="open"]');
            const interactive = element.closest('a, button');

            if (viewTarget) setMode('view');
            else if (openTarget) setMode('open');
            else if (interactive) setMode('hover');
            else setMode(null);
        };

        document.addEventListener('pointermove', (event) => {
            targetX = event.clientX;
            targetY = event.clientY;

            dot.style.left = `${targetX}px`;
            dot.style.top = `${targetY}px`;

            if (!visible) {
                visible = true;
                currentX = targetX;
                currentY = targetY;
                document.body.classList.add('has-cursor', 'custom-cursor');
            }

            setModeFromElement(event.target);
        }, { passive: true });

        let cursorScrollTimer;
        const refreshModeFromPoint = () => {
            if (!visible) return;
            setModeFromElement(document.elementFromPoint(targetX, targetY));
        };

        window.addEventListener('scroll', () => {
            window.clearTimeout(cursorScrollTimer);
            cursorScrollTimer = window.setTimeout(refreshModeFromPoint, 80);
        }, { passive: true });

        window.addEventListener('resize', refreshModeFromPoint);

        document.addEventListener('pointerdown', () => {
            if (visible) document.body.classList.add('cursor-press');
        });

        document.addEventListener('pointerup', () => {
            document.body.classList.remove('cursor-press');
        });

        document.documentElement.addEventListener('mouseleave', hideCursor);
        window.addEventListener('blur', hideCursor);

        document.addEventListener('pointerenter', () => {
            if (!visible && document.body.classList.contains('custom-cursor')) {
                document.body.classList.add('has-cursor');
                visible = true;
            }
        });

        const render = () => {
            currentX += (targetX - currentX) * 0.2;
            currentY += (targetY - currentY) * 0.2;
            ring.style.left = `${currentX}px`;
            ring.style.top = `${currentY}px`;
            requestAnimationFrame(render);
        };

        requestAnimationFrame(render);
    }

    /* ======================================================================
       MAGNETISMO
       ====================================================================== */
    function setupMagnetic() {
        if (!hasMotion || !finePointer) return;

        $$('[data-magnetic]').forEach((element) => {
            const xTo = gsap.quickTo(element, 'x', { duration: 0.5, ease: 'power3.out' });
            const yTo = gsap.quickTo(element, 'y', { duration: 0.5, ease: 'power3.out' });

            element.addEventListener('pointermove', (event) => {
                const rect = element.getBoundingClientRect();
                const x = event.clientX - rect.left - rect.width / 2;
                const y = event.clientY - rect.top - rect.height / 2;
                xTo(x * 0.18);
                yTo(y * 0.28);
            });

            element.addEventListener('pointerleave', () => {
                xTo(0);
                yTo(0);
            });
        });
    }

    /* ======================================================================
       PARALLAX DO HERÓI
       ====================================================================== */
    function setupHeroParallax() {
        if (!hasMotion || !finePointer) return;

        const hero = $('.hero');
        const portrait = $('#heroPortrait');
        if (!hero || !portrait) return;

        const frame = $('.portrait__frame', portrait);
        const xTo = gsap.quickTo(portrait, 'x', { duration: 1.1, ease: 'power2.out' });
        const yTo = gsap.quickTo(portrait, 'y', { duration: 1.1, ease: 'power2.out' });

        let rotateXTo;
        let rotateYTo;

        if (frame) {
            gsap.set(frame, { transformPerspective: 900 });
            rotateXTo = gsap.quickTo(frame, 'rotationX', { duration: 0.9, ease: 'power2.out' });
            rotateYTo = gsap.quickTo(frame, 'rotationY', { duration: 0.9, ease: 'power2.out' });
        }

        hero.addEventListener('pointermove', (event) => {
            const rect = hero.getBoundingClientRect();
            const x = (event.clientX - rect.left) / rect.width - 0.5;
            const y = (event.clientY - rect.top) / rect.height - 0.5;
            xTo(x * 16);
            yTo(y * 14);
            if (rotateXTo) rotateXTo(-y * 4.5);
            if (rotateYTo) rotateYTo(x * 6);
        }, { passive: true });

        hero.addEventListener('pointerleave', () => {
            xTo(0);
            yTo(0);
            if (rotateXTo) rotateXTo(0);
            if (rotateYTo) rotateYTo(0);
        });
    }

    /* ======================================================================
       CANVAS — CONSTELAÇÃO
       ====================================================================== */
    function setupHeroCanvas() {
        const canvas = $('#heroCanvas');
        if (!canvas || reduceMotion) return;

        const context = canvas.getContext('2d');
        if (!context) return;

        const hero = canvas.closest('.hero');
        let width = 0;
        let height = 0;
        let dpr = 1;
        let points = [];
        let frame = null;
        let active = true;
        const mouse = { x: -1000, y: -1000 };

        const resize = () => {
            const rect = hero.getBoundingClientRect();
            dpr = Math.min(window.devicePixelRatio || 1, 2);
            width = rect.width;
            height = rect.height;
            canvas.width = Math.floor(width * dpr);
            canvas.height = Math.floor(height * dpr);
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            context.setTransform(dpr, 0, 0, dpr, 0, 0);

            const density = width < 700 ? 26 : 62;
            points = Array.from({ length: density }, () => ({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.22,
                vy: (Math.random() - 0.5) * 0.22,
                r: Math.random() * 1.3 + 0.4,
                alpha: Math.random() * 0.4 + 0.15
            }));
        };

        const draw = () => {
            context.clearRect(0, 0, width, height);

            const connectionDistance = width < 700 ? 100 : 135;

            points.forEach((point) => {
                point.x += point.vx;
                point.y += point.vy;

                if (point.x < 0 || point.x > width) point.vx *= -1;
                if (point.y < 0 || point.y > height) point.vy *= -1;

                context.beginPath();
                context.arc(point.x, point.y, point.r, 0, Math.PI * 2);
                context.fillStyle = `rgba(196, 181, 253, ${point.alpha})`;
                context.fill();
            });

            for (let i = 0; i < points.length; i += 1) {
                for (let j = i + 1; j < points.length; j += 1) {
                    const a = points[i];
                    const b = points[j];
                    const dx = a.x - b.x;
                    const dy = a.y - b.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < connectionDistance) {
                        context.beginPath();
                        context.moveTo(a.x, a.y);
                        context.lineTo(b.x, b.y);
                        context.strokeStyle = `rgba(167, 139, 250, ${(1 - dist / connectionDistance) * 0.1})`;
                        context.lineWidth = 0.6;
                        context.stroke();
                    }
                }

                const a = points[i];
                const mdx = a.x - mouse.x;
                const mdy = a.y - mouse.y;
                const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

                if (mdist < 180) {
                    context.beginPath();
                    context.moveTo(a.x, a.y);
                    context.lineTo(mouse.x, mouse.y);
                    context.strokeStyle = `rgba(111, 157, 255, ${(1 - mdist / 180) * 0.2})`;
                    context.lineWidth = 0.7;
                    context.stroke();
                }
            }

            if (active) frame = requestAnimationFrame(draw);
        };

        resize();
        draw();

        hero.addEventListener('pointermove', (event) => {
            const rect = hero.getBoundingClientRect();
            mouse.x = event.clientX - rect.left;
            mouse.y = event.clientY - rect.top;
        }, { passive: true });

        hero.addEventListener('pointerleave', () => {
            mouse.x = -1000;
            mouse.y = -1000;
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !active) {
                    active = true;
                    frame = requestAnimationFrame(draw);
                } else if (!entry.isIntersecting && active) {
                    active = false;
                    if (frame) cancelAnimationFrame(frame);
                }
            });
        }, { threshold: 0.02 });

        observer.observe(hero);

        let resizeTimer;
        window.addEventListener('resize', () => {
            window.clearTimeout(resizeTimer);
            resizeTimer = window.setTimeout(resize, 180);
        });
    }

    /* ======================================================================
       E-MAIL / TOAST
       ====================================================================== */
    function setupCopyEmail() {
        const button = $('#emailCopy');
        if (!button) return;

        button.addEventListener('click', async () => {
            const email = button.getAttribute('data-email');
            if (!email) return;

            const success = await copyToClipboard(email);
            showToast(success ? translations[state.lang].copied_toast : translations[state.lang].copy_error_toast);
        });
    }

    async function copyToClipboard(text) {
        try {
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(text);
                return true;
            }
        } catch (error) {
            // Continua para o fallback.
        }

        try {
            const textarea = document.createElement('textarea');
            textarea.value = text;
            textarea.setAttribute('readonly', '');
            textarea.style.position = 'fixed';
            textarea.style.top = '-9999px';
            document.body.appendChild(textarea);
            textarea.select();
            const success = document.execCommand('copy');
            textarea.remove();
            return success;
        } catch (error) {
            return false;
        }
    }

    function showToast(message) {
        const toast = $('#toast');
        if (!toast) return;

        toast.textContent = message;
        toast.classList.add('is-visible');

        if (state.toastTimer) window.clearTimeout(state.toastTimer);
        state.toastTimer = window.setTimeout(() => {
            toast.classList.remove('is-visible');
        }, 3200);
    }

    /* ======================================================================
       EVENTOS GLOBAIS
       ====================================================================== */
    const langToggle = $('#langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            applyLanguage(state.lang === 'pt' ? 'en' : 'pt');
        });
    }

    const backToTop = $('#backToTop');
    if (backToTop) {
        backToTop.addEventListener('click', () => {
            if (state.lenis) {
                state.lenis.scrollTo(0, { duration: 1.4 });
            } else {
                window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
            }
        });
    }

    // Recalcula os triggers quando as imagens terminam de carregar.
    window.addEventListener('load', () => {
        if (!ScrollTrigger) return;
        $$('img').forEach((image) => {
            if (image.complete) return;
            image.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
        });
    });

    // Inicializa quando o DOM estiver pronto.
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init, { once: true });
    } else {
        init();
    }

    // Assinatura no console — um detalhe para quem abre o inspetor.
    console.log(
        '%c KS %c Sistemas que contam histórias. ',
        'background:#8b5cf6;color:#fff;font-weight:700;padding:3px 5px;border-radius:3px;',
        'color:#a78bfa;font-family:monospace;'
    );
})();
