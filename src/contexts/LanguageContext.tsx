import { createContext, useContext, useState, ReactNode } from 'react';

export type Lang = 'pt' | 'en';

export const translations = {
  pt: {
    header: {
      nav: [
        { label: 'Serviços',   id: 'servicos' },
        { label: 'Para Quem',  id: 'audiencia' },
        { label: 'Portfólio',  id: 'portfolio' },
        { label: 'Contato',    id: 'contato' },
      ],
      cta: 'Fale com um engenheiro',
      langBtn: 'EN',
    },
    hero: {
      tag: 'Campinas, SP · Todo o Brasil',
      h1: ['Projetos de', 'Infraestrutura Civil', 'com Alto', 'Desempenho Técnico.'],
      sub: 'A PER5 entrega projetos de terraplenagem, drenagem, pavimentação e urbanismo com rigor técnico e agilidade. Você fala diretamente com o engenheiro responsável — sem intermediários.',
      cta1: 'Fale com um engenheiro',
      cta2: 'Conheça nossos serviços',
      badges: [
        'Alto desempenho técnico',
        'Softwares modernos em padrão OpenBIM',
        'ART inclusa em todos os projetos',
        'Atendimento direto ao engenheiro',
        'Cronograma real — sem estimativas',
      ],
    },
    stats: {
      items: [
        { value: 100, suffix: '+', label: 'Projetos entregues' },
        { value: 7,   suffix: '+', label: 'Anos de especialização' },
        { value: 24,  suffix: 'h', label: 'Retorno ao contato' },
        { value: 100, suffix: '%', label: 'ART inclusa nos projetos' },
      ],
    },
    services: {
      eyebrow: 'O que entregamos',
      title: 'Projetos de Terraplenagem, Drenagem, Pavimentação e Urbanismo',
      subtitle: 'Projetos técnicos de infraestrutura civil para transformar terrenos, acessos e áreas externas em soluções viáveis, documentadas e prontas para execução.',
      priorityLabel: 'Serviços prioritários',
      deliverablesLabel: 'Entregáveis',
      applicationsLabel: 'Aplicações',
      priority: [
        {
          title: 'Projeto de Terraplenagem',
          badge: 'Destaque:',
          desc: 'Estudo e definição técnica da movimentação de terra, equilibrando cortes, aterros, cotas de implantação e viabilidade executiva.',
          deliverables: ['Volumetria de corte e aterro', 'Seções transversais e perfis longitudinais', 'Mancha de corte/aterro e cotas de projeto', 'Diretrizes para taludes e plataformas'],
          applications: ['Loteamentos', 'Indústrias', 'Obras viárias', 'Grandes terrenos'],
        },
        {
          title: 'Projeto de Drenagem Horizontal',
          badge: 'Infraestrutura externa',
          desc: 'Soluções para drenagem pluvial externa e sistemas horizontais, com foco em segurança hidráulica, compatibilidade e aprovação técnica.',
          deliverables: ['Drenagem pluvial externa', 'Galerias, dispositivos e obras de arte', 'Emissários e lançamento de esgoto', 'Estudo hidrológico e memorial técnico'],
          applications: ['Condomínios', 'Loteamentos', 'Parques industriais', 'Áreas externas'],
        },
        {
          title: 'Projeto Urbanístico',
          badge: 'Implantação urbana',
          desc: 'Desenvolvimento de implantação urbana e geometria viária para empreendimentos que precisam organizar ocupação, circulação e infraestrutura.',
          deliverables: ['Loteamentos e condomínios', 'Projeto geométrico rodoviário', 'Traçado de vias e acessos', 'Integração com infraestrutura urbana'],
          applications: ['Empreendedores', 'Loteadoras', 'Condomínios', 'Expansões urbanas'],
        },
        {
          title: 'Projeto de Pavimentação',
          badge: 'Rígida, flexível e permeável',
          desc: 'Dimensionamento e especificação de pavimentos para vias, pátios, estacionamentos e acessos, escolhendo o sistema adequado ao uso.',
          deliverables: ['Piso de concreto e pavimento rígido', 'Asfalto e pavimento flexível', 'Paver, intertravado e semirrígido', 'Pavimento permeável sustentável'],
          applications: ['Vias internas', 'Estacionamentos', 'Pátios industriais', 'Acessos'],
        },
      ],
      infraExtrasTitle: 'SERVIÇOS ADICIONAIS DE INFRAESTRUTURA:',
      infraExtras: [
        { title: 'Gabião e Contenção', desc: 'Soluções para estabilização, contenção e muro de arrimo quando o terreno exige reforço técnico.' },
        { title: 'Offtracking', desc: 'Estudo de raio de manobra para veículos pesados em acessos, pátios, docas e vias internas.' },
      ],
      complementaryLabel: 'Serviços complementares',
      complementaryTitle: 'Topografia, Regularização e Estudos para completar o ciclo do projeto',
      complementarySubtitle: 'Serviços apresentados de forma objetiva, sem venda de pacotes genéricos e sem exposição pública de valores.',
      complementary: [
        {
          title: 'Topografia',
          note: 'Campinas e região',
          desc: 'Levantamento planialtimétrico, locação de obra, retificação de área, desmembramento e apoio com drone quando o escopo pede leitura territorial precisa.',
          items: ['Levantamento planialtimétrico', 'Locação de obra', 'Retificação e desmembramento', 'Drone como diferencial técnico'],
        },
        {
          title: 'Estudos e Planos',
          note: 'Viabilidade técnica',
          desc: 'Estudos preliminares para entender impacto, tráfego, implantação e restrições antes de avançar para projeto ou aprovação.',
          items: ['Estudo de viabilidade', 'EIV — Estudo de Impacto de Vizinhança', 'RIT — Relatório de Impacto no Trânsito', 'Análises de implantação'],
        },
        {
          title: 'Regularização de Construções',
          note: 'Documentação',
          desc: 'Apoio técnico para processos de regularização junto a prefeitura, Receita Federal e cartório, com responsabilidade clara sobre o escopo.',
          items: ['Habite-se', 'Alvará de obra', 'Alvará de demolição', 'Receita Federal e cartório'],
        },
        {
          title: 'Patologias',
          note: 'Diagnóstico técnico',
          desc: 'Avaliação técnica de manifestações construtivas, com relatório objetivo para tomada de decisão e encaminhamento de soluções.',
          items: ['Vistoria técnica', 'Diagnóstico de patologias', 'Relatório técnico', 'Orientação de correção'],
        },
      ],
      ctaMain: 'Falar com um engenheiro',
      ctaCard: 'Solicitar Orçamento',
    },
    porque: {
      eyebrow: 'Por que a PER5?',
      title: 'A engenharia civil que o seu projeto precisa — modular, técnica e direta.',
      body1: 'A PER5 não é construtora nem empreiteira, e não executa obras. Somos uma facilitadora de engenharia civil: transformamos complexidade técnica em projetos claros, viáveis e prontos para execução.',
      body2: 'Atuamos remotamente em todo o Brasil e presencialmente na região de Campinas. Acesso direto ao engenheiro responsável, cronograma definido e documentação técnica sem camadas desnecessárias.',
      stats: [
        { val: '100+', label: 'Projetos entregues' },
        { val: '24h',  label: 'Retorno garantido', amber: true },
        { val: '7+',   label: 'Anos de especialização' },
      ],
      diferenciaisTitle: 'Diferenciais técnicos',
      diferenciais: [
        'Softwares modernos em padrão OpenBIM (IFC nativo)',
        'ART inclusa — responsabilidade técnica em todos os projetos',
        'Atendimento direto ao engenheiro responsável — sem intermediários',
        'Projeto executável e compatibilizado com as demais disciplinas',
        'Cronograma real — definido em contrato, não em estimativas comerciais',
        'Modular e flexível — adaptado ao escopo e ao prazo do seu projeto',
        'Confidencialidade garantida para parceiros B2B e B2C',
        'Todo o Brasil — remoto ou presencial em Campinas e interior de SP',
      ],
    },
    paraquem: {
      eyebrow: 'Para quem',
      title: 'Para Quem Trabalhamos',
      segments: [
        {
          tab: 'Construtoras',
          title: 'Construtoras e Incorporadoras',
          pitch: 'Você tem a obra. Nós temos o projeto técnico.',
          body: 'Construtoras e incorporadoras enfrentam o gargalo entre a decisão de construir e a contratação de projetos de infraestrutura confiáveis. A PER5 elimina essa fricção — entregamos o projeto técnico completo, com ART, dentro do seu cronograma e compatível com as demais disciplinas da obra.',
          cta: 'Solicitar Orçamento de Projeto',
        },
        {
          tab: 'Indústrias',
          title: 'Indústrias e Empresas Privadas',
          pitch: 'Infraestrutura para qualquer porte de empreendimento.',
          body: 'Expansão de plantas industriais, infraestrutura viária interna, drenagem de pátios e acessos — a PER5 entrega projetos técnicos completos para empreendimentos industriais e empresariais, com responsabilidade técnica e tecnologia de ponta.',
          cta: 'Solicitar Orçamento de Projeto',
        },
        {
          tab: 'Loteadoras',
          title: 'Loteadoras e Empreendedores Imobiliários',
          pitch: 'Da viabilidade à aprovação, sem burocracia.',
          body: 'Loteamentos e empreendimentos imobiliários precisam de projetos de infraestrutura aprovados e regularizados. A PER5 entrega projetos técnicos e a regularização documental completa — do estudo de viabilidade ao registro de imóveis.',
          cta: 'Solicitar Orçamento de Projeto',
        },
        {
          tab: 'Escritórios',
          title: 'Escritórios de Arquitetura e Engenharia',
          pitch: 'O backoffice técnico que completa o seu atendimento.',
          body: 'Você tem o cliente. Tem o relacionamento. Mas o projeto pede terraplenagem, drenagem ou infraestrutura viária — e você não quer estruturar uma equipe interna para isso. A PER5 atua como seu backoffice técnico: confidencialidade garantida, entrega compatibilizada, sua assinatura no projeto.',
          cta: 'Falar sobre parceria →',
        },
      ],
      segLabel: 'Segmento',
    },
    portfolio: {
      eyebrow: 'Portfólio técnico',
      title: 'Amostras de Projetos',
      message: 'Amostras visuais de pranchas, estudos e documentação técnica produzidas para projetos de infraestrutura civil.',
      filters: [
        { label: 'Todos',          value: 'todos' },
        { label: 'Terraplenagem',  value: 'terraplenagem' },
        { label: 'Drenagem',       value: 'drenagem' },
        { label: 'Pavimentação',   value: 'pavimentacao' },
        { label: 'Urbanístico',    value: 'urbanistico' },
        { label: 'Topografia',     value: 'topografia' },
        { label: 'Regularização',  value: 'regularizacao' },
      ],
      projects: [
        { category: 'terraplenagem', tag: 'Terraplenagem', name: 'Cortes e seções de terraplenagem', large: false, image: '/portfolio/terraplenagem (cortes e seções).png', alt: 'Projeto de terraplenagem com cortes e seções técnicas' },
        { category: 'terraplenagem', tag: 'Terraplenagem', name: 'Mancha de corte e aterro', large: true, image: '/portfolio/terraplenagem (mancha corteaterro).png', alt: 'Projeto de terraplenagem com mancha de corte e aterro' },
        { category: 'drenagem', tag: 'Drenagem', name: 'Implantação de drenagem', large: false, image: '/portfolio/drenagem (implantação).png', alt: 'Projeto de drenagem com implantação do sistema pluvial' },
        { category: 'drenagem', tag: 'Drenagem', name: 'Detalhamentos de drenagem', large: false, image: '/portfolio/drenagem (detalhamentos).png', alt: 'Detalhamentos técnicos de projeto de drenagem' },
        { category: 'drenagem', tag: 'Drenagem', name: 'Bacia de retenção', large: true, image: '/portfolio/drenagem (bacia de retenção).png', alt: 'Projeto de drenagem com bacia de retenção' },
        { category: 'pavimentacao', tag: 'Pavimentação', name: 'Pavimentação em concreto', large: false, image: '/portfolio/pavimentação (concreto).png', alt: 'Projeto de pavimentação em concreto' },
        { category: 'urbanistico', tag: 'Urbanístico', name: 'Projeto urbanístico de loteamento', large: true, image: '/portfolio/projeto urbanistico loteamento.png', alt: 'Projeto urbanístico de loteamento' },
        { category: 'topografia', tag: 'Topografia', name: 'Levantamento topográfico', large: true, image: '/portfolio/TOPOGRAFIA.png', alt: 'Levantamento topográfico para projeto de infraestrutura' },
        { category: 'topografia', tag: 'Topografia', name: 'As built e locação', large: true, image: '/portfolio/TOPOGRAFIA ASBUILT E LOCAÇÃO.png', alt: 'Topografia as built e locação de obra' },
        { category: 'regularizacao', tag: 'Regularização', name: 'Alvará de construção e Habite-se', large: false, image: '/portfolio/projeto regularização de construção (alvara de construção e habite-se).png', alt: 'Projeto de regularização de construção para alvará e Habite-se' },
      ],
      photoPlaceholder: 'Exemplo real em breve',
    },
    processo: {
      eyebrow: 'Como trabalhamos',
      title: 'Nosso Processo',
      subtitle: 'Um fluxo claro para transformar o primeiro contato em escopo validado, orçamento estruturado e projeto técnico com responsabilidade formal.',
      steps: [
        {
          num: '01',
          title: 'Primeiro contato',
          desc: 'Recebemos a demanda pelo formulário ou WhatsApp e fazemos uma triagem inicial para entender se a PER5 é a solução adequada.',
          details: ['Tipo de empreendimento', 'Localização e área aproximada', 'Urgência e canal preferencial'],
        },
        {
          num: '02',
          title: 'Conversa técnica',
          desc: 'Falamos diretamente com o responsável para entender objetivos, restrições do terreno, materiais disponíveis e expectativa de entrega.',
          details: ['Contexto da obra ou aprovação', 'Arquivos existentes e topografia', 'Pontos críticos do terreno'],
        },
        {
          num: '03',
          title: 'Requisitos e negócio',
          desc: 'Organizamos requisitos técnicos, premissas de aprovação e contexto do empreendimento para propor um escopo coerente com a operação.',
          details: ['Disciplinas envolvidas', 'Premissas normativas', 'Interfaces com arquitetura e obra'],
        },
        {
          num: '04',
          title: 'Estrutura de orçamento',
          desc: 'Definimos escopo, entregáveis, prazos, ART, responsabilidades e critérios de revisão em uma proposta objetiva.',
          details: ['Entregáveis por etapa', 'Cronograma e revisões', 'Responsabilidade técnica formal'],
        },
        {
          num: '05',
          title: 'Projeto e acompanhamento',
          desc: 'Com a proposta aprovada, iniciamos o desenvolvimento, mantemos comunicação direta e entregamos documentação pronta para execução ou aprovação.',
          details: ['Pranchas e memoriais', 'Compatibilização técnica', 'Suporte após entrega'],
        },
      ],
      banner: '<strong>Orçamento estruturado antes do início</strong> — O cliente sabe o que será entregue, quais informações são necessárias e qual cronograma será seguido.',
    },
    cta: {
      eyebrow: 'Orçamento sem compromisso',
      title: 'Solicite seu projeto de infraestrutura',
      subtitle: 'Retornamos em até <strong>24 horas úteis</strong> com análise inicial e próximas etapas. Atendemos <strong>todo o Brasil</strong>.',
      whatsappTitle: 'Prefere conversar direto?',
      whatsappBody: 'Chame no WhatsApp para enviar plantas, localização, fotos do terreno ou explicar a demanda com mais agilidade.',
      whatsappCta: 'Falar pelo WhatsApp',
      formHint: 'Ou preencha o formulário técnico de orçamento abaixo.',
      successTitle: 'Recebemos seu contato!',
      successBody: 'Nossa equipe vai analisar as informações e retornar em até 24 horas úteis com um diagnóstico inicial.',
      sections: {
        id: 'Identificação',
        voce: 'Você é',
        projeto: 'Sobre o Projeto',
      },
      labels: {
        nome: 'Nome completo', email: 'E-mail', telefone: 'WhatsApp / Telefone', empresa: 'Empresa / Razão Social',
        tipoProjeto: 'Tipo de projeto', localizacao: 'Localização', area: 'Área aproximada', prazo: 'Prazo desejado', desc: 'Descrição do projeto',
      },
      placeholders: {
        nome: 'Seu nome', email: 'seu@email.com.br', telefone: 'DDD + número, ex.: 19991508664',
        empresa: 'Opcional', localizacao: 'Cidade, Estado — Atendemos todo o Brasil',
        desc: 'Descreva brevemente o empreendimento, o tipo de obra e qualquer informação técnica relevante.',
      },
      tipoSolicitante: ['Construtora / Incorporadora','Loteadora / Empreendedor imobiliário','Escritório de Arquitetura ou Engenharia','Indústria / Empresa privada','Outros'],
      tipoProjeto: ['Projeto de Terraplenagem','Projeto de Drenagem Pluvial','Terraplenagem + Drenagem (integrado)','Projeto Urbanístico','Pavimentação','Regularização de Imóveis / Loteamento','Consultoria em Patologias','Topografia','Consultoria / Outros'],
      area: ['Até 5.000 m²','5.000 a 20.000 m²','20.000 a 100.000 m²','Acima de 100.000 m²'],
      prazo: ['Urgente — até 15 dias','Até 30 dias','Até 60 dias','Flexível'],
      submit: 'Enviar Solicitação de Orçamento',
      sending: 'Enviando...',
      errMsg: 'Erro ao enviar. Tente novamente ou entre em contato pelo WhatsApp.',
      privacy: 'Ao enviar, você concorda em receber retorno da PER5. Não compartilhamos seus dados.',
      requiredField: 'Campo obrigatório.',
      emailHelp: 'Informe um e-mail válido.',
      phoneRequired: 'Informe DDD + número (mínimo 10 dígitos)',
      phoneTitle: 'Somente dígitos — DDD + número',
      phoneHint: (n: number) => `${n} dígito${n !== 1 ? 's' : ''} restante${n !== 1 ? 's' : ''}`,
      phoneOk: '✓ Número válido',
    },
    contact: {
      eyebrow: 'Fale com a gente',
      title: 'Contato Direto',
      subtitle: 'Resposta direta com o engenheiro responsável. Sem burocracia, sem intermediário.',
      channels: {
        wa: { label: 'WhatsApp — contato principal', value: '(19) 99150-8664' },
        email: { label: 'E-mail', value: 'guilherme@per5.com.br' },
        ig: '@per5eng',
        li: 'LinkedIn',
      },
      atuacao: {
        title: 'Área de Atuação',
        rows: [{ label: 'Presencial', val: 'Campinas e interior de SP' }, { label: 'Remoto', val: 'Todo o Brasil' }],
      },
      horario: {
        title: 'Horário de Atendimento',
        rows: [{ label: 'Seg – Sex', val: '8h às 18h' }, { label: 'Sábado', val: '8h às 12h' }, { label: 'WhatsApp', val: '24/7' }],
      },
      crea: 'Registro profissional: <strong>CREA-SP</strong> — todos os projetos entregues com ART inclusa.',
    },
    footer: {
      tagline: 'Engenharia que facilita.',
      about: 'Escritório independente especializado em projetos de infraestrutura civil — terraplenagem, drenagem e pavimentação. Sede em Campinas, SP. Atendemos todo o Brasil.',
      services: 'Serviços',
      forWhom: 'Para quem',
      contact: 'Contato',
      credentials: 'Credenciais',
      serviceLinks: ['Terraplenagem','Drenagem Pluvial','Pavimentação','Urbanístico','Topografia','Consultoria Técnica'],
      segmentLinks: ['Construtoras','Indústrias','Loteadoras','Escritórios'],
      copyright: '© 2026 PER5 Projetos e Consultoria. Todos os direitos reservados.',
      location: 'Campinas, SP — Atendemos todo o Brasil',
      developedBy: 'Desenvolvido por',
    },
  },

  en: {
    header: {
      nav: [
        { label: 'Services',  id: 'servicos' },
        { label: 'For Whom',  id: 'audiencia' },
        { label: 'Portfolio', id: 'portfolio' },
        { label: 'Contact',   id: 'contato' },
      ],
      cta: 'Talk to an engineer',
      langBtn: 'PT',
    },
    hero: {
      tag: 'Campinas, SP · Nationwide service in Brazil',
      h1: ['High-Performance', 'Civil Infrastructure', 'Design.'],
      sub: 'PER5 delivers earthmoving, drainage, paving and urban planning designs with technical rigor and agility. You speak directly with the responsible engineer — no intermediaries.',
      cta1: 'Talk to an engineer',
      cta2: 'Explore our services',
      badges: [
        'High technical performance',
        'Modern software in OpenBIM standard',
        'ART included in all projects',
        'Direct contact with the engineer',
        'Real schedule — no empty estimates',
      ],
    },
    stats: {
      items: [
        { value: 100, suffix: '+', label: 'Projects delivered' },
        { value: 7,   suffix: '+', label: 'Years of expertise' },
        { value: 24,  suffix: 'h', label: 'Response time' },
        { value: 100, suffix: '%', label: 'ART included' },
      ],
    },
    services: {
      eyebrow: 'What we deliver',
      title: 'Earthmoving, Drainage, Paving and Urban Design',
      subtitle: 'Technical civil infrastructure designs that turn sites, accesses and external areas into viable, documented and execution-ready solutions.',
      priorityLabel: 'Priority services',
      deliverablesLabel: 'Deliverables',
      applicationsLabel: 'Applications',
      priority: [
        {
          title: 'Earthmoving Design',
          badge: 'Featured:',
          desc: 'Technical definition of earth movement, balancing cuts, fills, grading levels and buildability.',
          deliverables: ['Cut and fill volumes', 'Cross sections and longitudinal profiles', 'Cut/fill maps and design grades', 'Guidelines for slopes and platforms'],
          applications: ['Subdivisions', 'Industries', 'Road works', 'Large sites'],
        },
        {
          title: 'Horizontal Drainage Design',
          badge: 'External infrastructure',
          desc: 'Solutions for external stormwater drainage and horizontal systems, focused on hydraulic safety, compatibility and technical approval.',
          deliverables: ['External stormwater drainage', 'Galleries, devices and drainage structures', 'Outfalls and sewage discharge', 'Hydrological study and technical report'],
          applications: ['Condominiums', 'Subdivisions', 'Industrial parks', 'External areas'],
        },
        {
          title: 'Urban Design',
          badge: 'Urban implementation',
          desc: 'Urban layout and road geometry for developments that need to organize occupation, circulation and infrastructure.',
          deliverables: ['Subdivisions and condominiums', 'Road geometric design', 'Road and access layout', 'Integration with urban infrastructure'],
          applications: ['Developers', 'Land developers', 'Condominiums', 'Urban expansions'],
        },
        {
          title: 'Paving Design',
          badge: 'Rigid, flexible and permeable',
          desc: 'Pavement sizing and specification for roads, yards, parking areas and accesses, selecting the right system for each use.',
          deliverables: ['Concrete floor and rigid pavement', 'Asphalt and flexible pavement', 'Paver, interlocking and semi-rigid pavement', 'Sustainable permeable pavement'],
          applications: ['Internal roads', 'Parking areas', 'Industrial yards', 'Accesses'],
        },
      ],
      infraExtrasTitle: 'ADDITIONAL INFRASTRUCTURE SERVICES:',
      infraExtras: [
        { title: 'Gabion and Retaining Structures', desc: 'Solutions for stabilization, retaining systems and retaining walls when the terrain requires technical reinforcement.' },
        { title: 'Offtracking', desc: 'Turning-radius analysis for heavy vehicles in accesses, yards, docks and internal roads.' },
      ],
      complementaryLabel: 'Complementary services',
      complementaryTitle: 'Surveying, Regularization and Studies to complete the project cycle',
      complementarySubtitle: 'Presented objectively, without generic package selling and without publishing public prices.',
      complementary: [
        {
          title: 'Surveying',
          note: 'Campinas region',
          desc: 'Topographic surveys, construction layout, area rectification, subdivision support and drone assistance when the scope requires precise site reading.',
          items: ['Topographic survey', 'Construction layout', 'Area rectification and subdivision', 'Drone as a technical differential'],
        },
        {
          title: 'Studies and Plans',
          note: 'Technical feasibility',
          desc: 'Preliminary studies to understand impact, traffic, implementation and constraints before moving into design or approval.',
          items: ['Feasibility study', 'Neighborhood impact study', 'Traffic impact report', 'Implementation analysis'],
        },
        {
          title: 'Construction Regularization',
          note: 'Documentation',
          desc: 'Technical support for regularization processes with city hall, the Federal Revenue Service and registry offices, with a clear scope of responsibility.',
          items: ['Occupancy permit', 'Construction permit', 'Demolition permit', 'Federal Revenue and registry office'],
        },
        {
          title: 'Pathologies',
          note: 'Technical diagnosis',
          desc: 'Technical assessment of construction manifestations, with an objective report for decision-making and solution planning.',
          items: ['Technical inspection', 'Pathology diagnosis', 'Technical report', 'Correction guidance'],
        },
      ],
      ctaMain: 'Talk to an engineer',
      ctaCard: 'Request Quote',
    },
    porque: {
      eyebrow: 'Why PER5?',
      title: 'The civil engineering your project needs — modular, technical and direct.',
      body1: 'PER5 is not a contractor and does not execute construction work. We are a civil engineering facilitator: we turn technical complexity into clear, viable and execution-ready designs.',
      body2: 'We work remotely across Brazil and on-site in the Campinas region. Direct access to the responsible engineer, defined schedules and technical documentation without unnecessary layers.',
      stats: [
        { val: '100+', label: 'Projects delivered' },
        { val: '24h',  label: 'Guaranteed response', amber: true },
        { val: '7+',   label: 'Years of expertise' },
      ],
      diferenciaisTitle: 'Technical differentials',
      diferenciais: [
        'Modern software in OpenBIM standard (native IFC)',
        'ART included — technical responsibility on all projects',
        'Direct contact with the responsible engineer — no intermediaries',
        'Buildable project, compatible with all other disciplines',
        'Real schedule — defined in contract, not in commercial estimates',
        'Modular and flexible — adapted to your scope and timeline',
        'Guaranteed confidentiality for B2B and B2C partners',
        'Nationwide service in Brazil — remote or on-site in the Campinas region',
      ],
    },
    paraquem: {
      eyebrow: 'For whom',
      title: 'Who We Work With',
      segments: [
        {
          tab: 'Builders',
          title: 'Builders & Developers',
          pitch: 'You have the project. We have the technical design.',
          body: 'Builders and developers face the bottleneck between the decision to build and hiring reliable infrastructure designs. PER5 eliminates that friction — we deliver the complete technical project, with ART, within your schedule and compatible with all other project disciplines.',
          cta: 'Request Project Quote',
        },
        {
          tab: 'Industries',
          title: 'Industries & Private Companies',
          pitch: 'Infrastructure for any scale of development.',
          body: 'Industrial plant expansions, internal road infrastructure, yard and access drainage — PER5 delivers complete technical projects for industrial and business developments, with technical responsibility and state-of-the-art technology.',
          cta: 'Request Project Quote',
        },
        {
          tab: 'Developers',
          title: 'Land Developers & Real Estate',
          pitch: 'From feasibility to approval, without bureaucracy.',
          body: 'Subdivisions and real estate projects need approved and regularized infrastructure designs. PER5 delivers technical projects and complete document regularization — from feasibility study to property registration.',
          cta: 'Request Project Quote',
        },
        {
          tab: 'Offices',
          title: 'Architecture & Engineering Firms',
          pitch: 'The technical back-office that completes your service.',
          body: "You have the client. You have the relationship. But the project calls for earthmoving, drainage or road infrastructure — and you don't want to build an internal team for that. PER5 acts as your technical back-office: guaranteed confidentiality, compatible delivery, your signature on the project.",
          cta: 'Talk about partnership →',
        },
      ],
      segLabel: 'Segment',
    },
    portfolio: {
      eyebrow: 'Technical portfolio',
      title: 'Project Samples',
      message: 'Visual samples of drawings, studies and technical documentation produced for civil infrastructure projects.',
      filters: [
        { label: 'All',          value: 'todos' },
        { label: 'Earthmoving',  value: 'terraplenagem' },
        { label: 'Drainage',     value: 'drenagem' },
        { label: 'Paving',       value: 'pavimentacao' },
        { label: 'Urban',        value: 'urbanistico' },
        { label: 'Surveying',    value: 'topografia' },
        { label: 'Regularization', value: 'regularizacao' },
      ],
      projects: [
        { category: 'terraplenagem', tag: 'Earthmoving', name: 'Earthmoving cuts and sections', large: false, image: '/portfolio/terraplenagem (cortes e seções).png', alt: 'Earthmoving design with technical cuts and sections' },
        { category: 'terraplenagem', tag: 'Earthmoving', name: 'Cut and fill map', large: true, image: '/portfolio/terraplenagem (mancha corteaterro).png', alt: 'Earthmoving design with cut and fill map' },
        { category: 'drenagem', tag: 'Drainage', name: 'Drainage layout', large: false, image: '/portfolio/drenagem (implantação).png', alt: 'Drainage design with stormwater system layout' },
        { category: 'drenagem', tag: 'Drainage', name: 'Drainage details', large: false, image: '/portfolio/drenagem (detalhamentos).png', alt: 'Technical details for drainage design' },
        { category: 'drenagem', tag: 'Drainage', name: 'Retention basin', large: true, image: '/portfolio/drenagem (bacia de retenção).png', alt: 'Drainage design with retention basin' },
        { category: 'pavimentacao', tag: 'Paving', name: 'Concrete paving', large: false, image: '/portfolio/pavimentação (concreto).png', alt: 'Concrete paving design' },
        { category: 'urbanistico', tag: 'Urban', name: 'Subdivision urban layout', large: true, image: '/portfolio/projeto urbanistico loteamento.png', alt: 'Urban design for subdivision layout' },
        { category: 'topografia', tag: 'Surveying', name: 'Topographic survey', large: true, image: '/portfolio/TOPOGRAFIA.png', alt: 'Topographic survey for infrastructure design' },
        { category: 'topografia', tag: 'Surveying', name: 'As built and layout staking', large: true, image: '/portfolio/TOPOGRAFIA ASBUILT E LOCAÇÃO.png', alt: 'As built surveying and construction layout staking' },
        { category: 'regularizacao', tag: 'Regularization', name: 'Construction permit and occupancy permit', large: false, image: '/portfolio/projeto regularização de construção (alvara de construção e habite-se).png', alt: 'Construction regularization project for permit and occupancy certificate' },
      ],
      photoPlaceholder: 'Real example coming soon',
    },
    processo: {
      eyebrow: 'How we work',
      title: 'Our Process',
      subtitle: 'A clear workflow that turns the first contact into a validated scope, a structured quote and a formally responsible technical design.',
      steps: [
        {
          num: '01',
          title: 'First contact',
          desc: 'We receive the request through the form or WhatsApp and run an initial screening to confirm whether PER5 is the right technical fit.',
          details: ['Project type', 'Location and approximate area', 'Urgency and preferred channel'],
        },
        {
          num: '02',
          title: 'Technical conversation',
          desc: 'We speak directly with the decision-maker to understand goals, site constraints, available inputs and delivery expectations.',
          details: ['Construction or approval context', 'Existing files and survey data', 'Critical site constraints'],
        },
        {
          num: '03',
          title: 'Requirements and context',
          desc: 'We organize technical requirements, approval assumptions and the business context so the proposed scope fits the operation.',
          details: ['Disciplines involved', 'Applicable assumptions', 'Interfaces with architecture and site work'],
        },
        {
          num: '04',
          title: 'Quote structure',
          desc: 'We define scope, deliverables, timeline, ART, responsibilities and revision criteria in a clear proposal.',
          details: ['Deliverables by stage', 'Timeline and revisions', 'Formal technical responsibility'],
        },
        {
          num: '05',
          title: 'Design and follow-up',
          desc: 'After approval, we start the design work, keep communication direct and deliver documentation ready for execution or approval.',
          details: ['Drawings and reports', 'Technical coordination', 'Post-delivery support'],
        },
      ],
      banner: '<strong>Structured quote before kickoff</strong> — The client knows what will be delivered, which inputs are needed and which schedule will guide the work.',
    },
    cta: {
      eyebrow: 'No-commitment quote',
      title: 'Request your infrastructure project',
      subtitle: 'We respond within <strong>24 business hours</strong> with an initial analysis and next steps. We provide <strong>nationwide service in Brazil</strong>.',
      whatsappTitle: 'Prefer to talk directly?',
      whatsappBody: 'Use WhatsApp to send drawings, the site location, field photos or a quick summary of the request.',
      whatsappCta: 'Talk on WhatsApp',
      formHint: 'Or fill out the technical quote form below.',
      successTitle: 'We received your request!',
      successBody: 'Our team will analyze the information and get back to you within 24 business hours with an initial assessment.',
      sections: {
        id: 'Identification',
        voce: 'You are',
        projeto: 'About the Project',
      },
      labels: {
        nome: 'Full name', email: 'Email', telefone: 'WhatsApp / Phone', empresa: 'Company / Business name',
        tipoProjeto: 'Project type', localizacao: 'Location', area: 'Approximate area', prazo: 'Desired timeline', desc: 'Project description',
      },
      placeholders: {
        nome: 'Your name', email: 'your@email.com', telefone: 'Country code + number',
        empresa: 'Optional', localizacao: 'City, State — Nationwide service in Brazil',
        desc: 'Briefly describe the development, the type of work and any relevant technical information.',
      },
      tipoSolicitante: ['Builder / Developer','Land Developer / Real Estate','Architecture or Engineering Firm','Industry / Private Company','Other'],
      tipoProjeto: ['Earthmoving Design','Stormwater Drainage Design','Earthmoving + Drainage (integrated)','Urban Design','Paving','Property / Subdivision Regularization','Pathology Consulting','Surveying','Consulting / Other'],
      area: ['Up to 5,000 m²','5,000 to 20,000 m²','20,000 to 100,000 m²','Over 100,000 m²'],
      prazo: ['Urgent — up to 15 days','Up to 30 days','Up to 60 days','Flexible'],
      submit: 'Send Quote Request',
      sending: 'Sending...',
      errMsg: 'Error sending. Please try again or contact us via WhatsApp.',
      privacy: 'By submitting, you agree to receive a response from PER5. We do not share your data.',
      requiredField: 'Required field.',
      emailHelp: 'Enter a valid email address.',
      phoneRequired: 'Enter country/area code + number (at least 10 digits)',
      phoneTitle: 'Digits only — area code + number',
      phoneHint: (n: number) => `${n} digit${n !== 1 ? 's' : ''} remaining`,
      phoneOk: '✓ Valid number',
    },
    contact: {
      eyebrow: 'Get in touch',
      title: 'Direct Contact',
      subtitle: 'Direct response from the responsible engineer. No bureaucracy, no intermediary.',
      channels: {
        wa: { label: 'WhatsApp — main contact', value: '+55 (19) 99150-8664' },
        email: { label: 'Email', value: 'guilherme@per5.com.br' },
        ig: '@per5eng',
        li: 'LinkedIn',
      },
      atuacao: {
        title: 'Service Area',
        rows: [{ label: 'In-person', val: 'Campinas region, SP' }, { label: 'Remote', val: 'Nationwide in Brazil' }],
      },
      horario: {
        title: 'Business Hours',
        rows: [{ label: 'Mon – Fri', val: '8am – 6pm BRT' }, { label: 'Saturday', val: '8am – 12pm BRT' }, { label: 'WhatsApp', val: '24/7' }],
      },
      crea: 'Professional registration: <strong>CREA-SP</strong> — all projects delivered with ART included.',
    },
    footer: {
      tagline: 'Engineering that makes it easier.',
      about: 'Independent firm specialized in civil infrastructure projects — earthmoving, drainage and paving. Headquartered in Campinas, SP, with nationwide service in Brazil.',
      services: 'Services',
      forWhom: 'For whom',
      contact: 'Contact',
      credentials: 'Credentials',
      serviceLinks: ['Earthmoving','Stormwater Drainage','Paving','Urban Design','Surveying','Technical Consulting'],
      segmentLinks: ['Builders','Industries','Developers','Offices'],
      copyright: '© 2026 PER5 Projetos e Consultoria. All rights reserved.',
      location: 'Campinas, SP — Nationwide service in Brazil',
      developedBy: 'Developed by',
    },
  },
} as const;

export type Translations = typeof translations;

interface LanguageContextType {
  lang: Lang;
  t: typeof translations['pt'];
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('pt');
  const toggle = () => setLang((l) => (l === 'pt' ? 'en' : 'pt'));
  const t = translations[lang];
  return (
    <LanguageContext.Provider value={{ lang, t, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider');
  return ctx;
}
