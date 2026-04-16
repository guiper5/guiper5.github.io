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
      cta: 'Solicitar Orçamento →',
      langBtn: 'EN',
    },
    hero: {
      tag: 'Campinas, SP · Todo o Brasil',
      h1: ['Projetos de', 'Infraestrutura Civil', 'com Alto', 'Desempenho Técnico'],
      sub: 'A PER5 é um escritório independente especializado em projetos de infraestrutura civil — terraplenagem, drenagem e pavimentação — com nível técnico de referência, softwares modernos com padrão OpenBIM e a agilidade de quem te atende diretamente.',
      cta1: 'Solicitar Orçamento de Projeto',
      cta2: 'Ver nossos serviços',
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
      title: 'Nossos Serviços',
      subtitle: 'Facilitadora de engenharia civil — do projeto de infraestrutura à regularização documental, com softwares modernos e responsabilidade técnica direta.',
      mainBadge: 'Serviço Principal',
      mainTitle: 'Projeto de Terraplenagem e Drenagem',
      mainDesc: 'O carro-chefe da PER5. Projeto técnico completo com responsabilidade técnica (ART/CREA) inclusa — desenvolvido com softwares modernos em padrão OpenBIM, compatível com as demais disciplinas da obra.',
      mainItems: [
        'Projeto Básico de Terraplenagem (PBT) e Projeto Executivo (PET)',
        'Movimentação de volumes — ABNT NBR 7180 / NBR 5681',
        'Cortes, aterros, taludes e dimensionamentos',
        'Drenagem superficial e galerias pluviais',
        'Estudo hidrológico (micro e macrodrenagem)',
        'Perfis longitudinais e transversais',
        'Pranchas executivas em padrão OpenBIM (IFC nativo)',
        'ART (CREA-SP) — responsabilidade técnica inclusa',
      ],
      ctaMain: 'Solicitar Orçamento de Projeto',
      ctaCard: 'Solicitar Orçamento',
      secondary: [
        { title: 'Pavimentação',                         desc: 'Asfalto, Concreto, Intertravado e Permeável. Acessos rodoviários, dimensionamento de estrutura e foco em executabilidade.' },
        { title: 'Regularização de Imóveis e Loteamentos', desc: 'Habite-se, alvarás, registro de imóveis, desmembramentos e projetos urbanísticos — da viabilidade à aprovação.' },
        { title: 'Consultoria em Patologias',            desc: 'Engenharia diagnóstica. Visitas técnicas, diagnóstico, laudos e soluções para prevenção e correção de patologias.' },
        { title: 'OpenBIM',                              desc: 'Projetos em padrão IFC nativo. Coordenação de modelos, Scan-to-BIM e gestão da informação conforme ISO 19650.' },
      ],
    },
    clientes: {
      label: 'Empresas que confiam na PER5',
    },
    porque: {
      eyebrow: 'Por que a PER5?',
      title: 'A engenharia civil que o seu projeto precisa — modular, técnica e direta.',
      body1: 'Construtoras e empreendedores precisam de projetos de infraestrutura com rigor técnico — dentro do prazo, sem depender de estruturas pesadas e sem perder o controle do processo.',
      body2: 'A PER5 é o parceiro que une alto desempenho técnico com agilidade operacional. Modular para se adaptar ao seu escopo, direto porque você fala com o engenheiro responsável — não com um intermediário.',
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
        'Confidencialidade garantida para parceiros B2B',
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
      eyebrow: 'Casos realizados',
      title: 'Portfólio de Projetos',
      badge: '◎ Imagens reais em breve',
      filters: [
        { label: 'Todos',          value: 'todos' },
        { label: 'Terraplenagem',  value: 'terraplenagem' },
        { label: 'Drenagem',       value: 'drenagem' },
        { label: 'Pavimentação',   value: 'pavimentacao' },
        { label: 'Regularização',  value: 'regularizacao' },
        { label: 'OpenBIM',        value: 'openbim' },
      ],
      projects: [
        { category: 'terraplenagem drenagem', tag: 'Terraplenagem + Drenagem', name: 'Loteamento Residencial — Campinas, SP',     area: '50.000 m²', year: '2024', large: true },
        { category: 'pavimentacao',           tag: 'Pavimentação',             name: 'Acesso Rodoviário Industrial — Sumaré, SP', area: '8.000 m²',  year: '2024', large: false },
        { category: 'regularizacao',          tag: 'Regularização',            name: 'Desmembramento Urbano — Campinas, SP',      area: '15.000 m²', year: '2023', large: false },
        { category: 'drenagem',               tag: 'Drenagem Pluvial',         name: 'Microdrenagem Comercial — Vinhedo, SP',     area: '12.000 m²', year: '2024', large: false },
        { category: 'openbim',                tag: 'OpenBIM',                  name: 'Coordenação BIM — Escritório Parceiro',     area: '—',         year: '2023', large: false },
        { category: 'terraplenagem',          tag: 'Terraplenagem',            name: 'Terraplanagem Industrial — Indaiatuba, SP', area: '80.000 m²', year: '2023', large: false },
      ],
      photoPlaceholder: 'Adicione a foto do projeto',
      delivered: 'Entregue',
      area: 'Área',
    },
    processo: {
      eyebrow: 'Como trabalhamos',
      title: 'Nosso Processo',
      steps: [
        { num: '01', title: 'Briefing e Análise',  desc: 'Entendemos o escopo, o prazo e as condicionantes do projeto. Diagnóstico técnico inicial sem compromisso.' },
        { num: '02', title: 'Desenvolvimento',     desc: 'Projeto técnico desenvolvido com softwares modernos em padrão OpenBIM, seguindo normas ABNT aplicáveis.' },
        { num: '03', title: 'Entrega e ART',       desc: 'Entrega das pranchas executivas, memorial descritivo e ART — responsabilidade técnica formal pelo CREA-SP.' },
        { num: '04', title: 'Suporte Técnico',     desc: 'Suporte técnico pós-entrega para esclarecimentos, revisões e compatibilização com outras disciplinas.' },
      ],
      banner: '<strong>Prazo definido em contrato</strong> — Cronograma real, não estimativa comercial. Projetos menores em 15–30 dias. Projetos de maior porte em 45–90 dias.',
    },
    cta: {
      eyebrow: 'Orçamento sem compromisso',
      title: 'Solicite seu projeto de infraestrutura',
      subtitle: 'Retornamos em até <strong>24 horas úteis</strong> com análise inicial e próximas etapas. Atendemos <strong>todo o Brasil</strong>.',
      successTitle: 'Recebemos seu contato!',
      successBody: 'Nossa equipe vai analisar as informações e retornar em até 24 horas úteis com um diagnóstico inicial.',
      sections: {
        id: 'Identificação',
        voce: 'Você é',
        projeto: 'Sobre o Projeto',
      },
      labels: {
        nome: 'Nome completo', email: 'Email', telefone: 'WhatsApp / Telefone', empresa: 'Empresa / Razão Social',
        tipoProjeto: 'Tipo de projeto', localizacao: 'Localização', area: 'Área aproximada', prazo: 'Prazo desejado', desc: 'Descrição do projeto',
      },
      placeholders: {
        nome: 'Seu nome', email: 'seu@email.com.br', telefone: 'DDD + número  ex: 19991508664',
        empresa: 'Opcional', localizacao: 'Cidade, Estado — Atendemos todo o Brasil',
        desc: 'Descreva brevemente o empreendimento, o tipo de obra e qualquer informação técnica relevante.',
      },
      tipoSolicitante: ['Construtora / Incorporadora','Loteadora / Empreendedor imobiliário','Escritório de Arquitetura ou Engenharia','Indústria / Empresa privada','Outros'],
      tipoProjeto: ['Projeto de Terraplenagem','Projeto de Drenagem Pluvial','Terraplenagem + Drenagem (integrado)','Pavimentação','Regularização de Imóveis / Loteamento','Consultoria em Patologias','OpenBIM','Consultoria / Outros'],
      area: ['Até 5.000 m²','5.000 a 20.000 m²','20.000 a 100.000 m²','Acima de 100.000 m²'],
      prazo: ['Urgente — até 15 dias','Até 30 dias','Até 60 dias','Flexível'],
      submit: 'Enviar Solicitação de Orçamento',
      sending: 'Enviando...',
      errMsg: 'Erro ao enviar. Tente novamente ou entre em contato pelo WhatsApp.',
      privacy: 'Ao enviar, você concorda em receber retorno da PER5. Não compartilhamos seus dados.',
      phoneHint: (n: number) => `${n} dígito${n !== 1 ? 's' : ''} restante${n !== 1 ? 's' : ''}`,
      phoneOk: '✓ Número válido',
    },
    faq: {
      eyebrow: 'Dúvidas frequentes',
      title: 'FAQ',
      items: [
        { q: 'A PER5 emite ART?', a: 'Sim. Todos os projetos entregues pela PER5 são acompanhados de ART (Anotação de Responsabilidade Técnica) emitida pelo engenheiro responsável registrado no CREA-SP. A ART já está inclusa no escopo — não é cobrada à parte.' },
        { q: 'Vocês atendem fora de Campinas?', a: 'Sim, atendemos todo o Brasil. Nossa sede é em Campinas, SP, onde realizamos atendimento presencial. Para projetos em outras regiões, atuamos de forma remota com a mesma qualidade técnica — a maioria dos projetos de infraestrutura pode ser desenvolvida sem necessidade de visita técnica frequente.' },
        { q: 'O que está incluso num projeto de terraplenagem?', a: 'Um projeto executivo completo inclui: levantamento e análise topográfica, movimentação de volumes (cortes e aterros), dimensionamento de taludes, drenagem superficial, estudo hidrológico, perfis longitudinais e transversais, pranchas executivas em padrão OpenBIM (IFC nativo), memorial descritivo e ART. Entregamos do nível básico ao executivo.' },
        { q: 'Qual o prazo médio para um projeto?', a: 'Projetos menores (lotes individuais, pequenos loteamentos): 15 a 30 dias. Projetos de maior porte: 45 a 90 dias. Trabalhamos sempre com cronograma definido na proposta — sem prazo aberto. O prazo é acordado antes do início e faz parte do contrato.' },
        { q: 'Atendem escritórios que precisam subcontratar projetos de infra?', a: 'Sim — esse é um dos nossos principais modelos de atuação. Atuamos como backoffice técnico para escritórios de arquitetura e engenharia que não têm equipe especializada em infraestrutura civil. A confidencialidade com o cliente final é garantida contratualmente. Você mantém o relacionamento com seu cliente; nós entregamos o projeto técnico.' },
      ],
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
      serviceLinks: ['Terraplenagem','Drenagem Pluvial','Pavimentação','Regularização','OpenBIM','Consultoria Técnica'],
      segmentLinks: ['Construtoras','Indústrias','Loteadoras','Escritórios'],
      copyright: '© 2026 PER5 Projetos e Consultoria. Todos os direitos reservados.',
      location: 'Campinas, SP — Atendemos todo o Brasil',
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
      cta: 'Request Quote →',
      langBtn: 'PT',
    },
    hero: {
      tag: 'Campinas, SP · All of Brazil',
      h1: ['Civil', 'Infrastructure', 'Projects with', 'High Performance'],
      sub: 'PER5 is an independent firm specialized in civil infrastructure projects — earthmoving, drainage and paving — with reference-level technical expertise, modern software in OpenBIM standard, and the agility of working directly with the engineer.',
      cta1: 'Request Project Quote',
      cta2: 'View our services',
      badges: [
        'High technical performance',
        'Modern software in OpenBIM standard',
        'ART* included in all projects',
        'Direct contact with the engineer',
        'Real schedule — no empty estimates',
      ],
    },
    stats: {
      items: [
        { value: 100, suffix: '+', label: 'Projects delivered' },
        { value: 7,   suffix: '+', label: 'Years of expertise' },
        { value: 24,  suffix: 'h', label: 'Response time' },
        { value: 100, suffix: '%', label: 'ART* included' },
      ],
    },
    services: {
      eyebrow: 'What we deliver',
      title: 'Our Services',
      subtitle: 'Civil engineering facilitator — from infrastructure design to document regularization, with modern software and direct technical responsibility.',
      mainBadge: 'Core Service',
      mainTitle: 'Earthmoving & Drainage Design',
      mainDesc: "PER5's flagship service. Complete technical project with technical responsibility (ART/CREA) included — developed with modern software in OpenBIM standard, compatible with all other project disciplines.",
      mainItems: [
        'Basic Earthmoving Design (PBT) and Executive Design (PET)',
        'Volume movement — ABNT NBR 7180 / NBR 5681',
        'Cuts, fills, slopes and dimensioning',
        'Surface drainage and stormwater galleries',
        'Hydrological study (micro and macro drainage)',
        'Longitudinal and cross-sectional profiles',
        'Executive drawings in OpenBIM standard (native IFC)',
        'ART (CREA-SP) — technical responsibility included',
      ],
      ctaMain: 'Request Project Quote',
      ctaCard: 'Request Quote',
      secondary: [
        { title: 'Paving',                           desc: 'Asphalt, Concrete, Interlocking and Permeable. Road accesses, structural dimensioning and focus on buildability.' },
        { title: 'Property & Subdivision Reg.',      desc: 'Occupancy permits, licenses, property registration, subdivisions and urban projects — from feasibility to approval.' },
        { title: 'Pathology Consulting',             desc: 'Diagnostic engineering. Technical visits, diagnosis, reports and solutions for pathology prevention and correction.' },
        { title: 'OpenBIM',                          desc: 'Projects in native IFC standard. Model coordination, Scan-to-BIM and information management per ISO 19650.' },
      ],
    },
    clientes: {
      label: 'Companies that trust PER5',
    },
    porque: {
      eyebrow: 'Why PER5?',
      title: 'The civil engineering your project needs — modular, technical and direct.',
      body1: 'Builders and developers need infrastructure projects with technical rigor — on time, without depending on heavy structures and without losing control of the process.',
      body2: 'PER5 is the partner that combines high technical performance with operational agility. Modular to adapt to your scope, direct because you talk to the responsible engineer — not an intermediary.',
      stats: [
        { val: '100+', label: 'Projects delivered' },
        { val: '24h',  label: 'Guaranteed response', amber: true },
        { val: '7+',   label: 'Years of expertise' },
      ],
      diferenciaisTitle: 'Technical differentials',
      diferenciais: [
        'Modern software in OpenBIM standard (native IFC)',
        'ART* included — technical responsibility on all projects',
        'Direct contact with the responsible engineer — no intermediaries',
        'Buildable project, compatible with all other disciplines',
        'Real schedule — defined in contract, not in commercial estimates',
        'Modular and flexible — adapted to your scope and timeline',
        'Guaranteed confidentiality for B2B partners',
        'All of Brazil — remote or on-site in Campinas region',
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
      eyebrow: 'Completed cases',
      title: 'Project Portfolio',
      badge: '◎ Real images coming soon',
      filters: [
        { label: 'All',          value: 'todos' },
        { label: 'Earthmoving',  value: 'terraplenagem' },
        { label: 'Drainage',     value: 'drenagem' },
        { label: 'Paving',       value: 'pavimentacao' },
        { label: 'Regularization', value: 'regularizacao' },
        { label: 'OpenBIM',      value: 'openbim' },
      ],
      projects: [
        { category: 'terraplenagem drenagem', tag: 'Earthmoving + Drainage', name: 'Residential Subdivision — Campinas, SP',     area: '50,000 m²', year: '2024', large: true },
        { category: 'pavimentacao',           tag: 'Paving',                 name: 'Industrial Road Access — Sumaré, SP',        area: '8,000 m²',  year: '2024', large: false },
        { category: 'regularizacao',          tag: 'Regularization',         name: 'Urban Subdivision — Campinas, SP',           area: '15,000 m²', year: '2023', large: false },
        { category: 'drenagem',               tag: 'Stormwater Drainage',    name: 'Commercial Micro-drainage — Vinhedo, SP',    area: '12,000 m²', year: '2024', large: false },
        { category: 'openbim',                tag: 'OpenBIM',                name: 'BIM Coordination — Partner Firm',            area: '—',         year: '2023', large: false },
        { category: 'terraplenagem',          tag: 'Earthmoving',            name: 'Industrial Earthmoving — Indaiatuba, SP',    area: '80,000 m²', year: '2023', large: false },
      ],
      photoPlaceholder: 'Add project photo',
      delivered: 'Delivered',
      area: 'Area',
    },
    processo: {
      eyebrow: 'How we work',
      title: 'Our Process',
      steps: [
        { num: '01', title: 'Briefing & Analysis', desc: 'We understand the scope, timeline and project constraints. Initial technical diagnosis at no commitment.' },
        { num: '02', title: 'Development',         desc: 'Technical project developed with modern software in OpenBIM standard, following applicable ABNT standards.' },
        { num: '03', title: 'Delivery & ART*',     desc: 'Delivery of executive drawings, technical report and ART* — formal technical responsibility through CREA-SP.' },
        { num: '04', title: 'Technical Support',   desc: 'Post-delivery technical support for clarifications, revisions and compatibility with other disciplines.' },
      ],
      banner: '<strong>Schedule defined in contract</strong> — Real timeline, not a commercial estimate. Smaller projects in 15–30 days. Larger projects in 45–90 days.',
    },
    cta: {
      eyebrow: 'No-commitment quote',
      title: 'Request your infrastructure project',
      subtitle: 'We respond within <strong>24 business hours</strong> with an initial analysis and next steps. We serve <strong>all of Brazil</strong>.',
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
        empresa: 'Optional', localizacao: 'City, State — We serve all of Brazil',
        desc: 'Briefly describe the development, the type of work and any relevant technical information.',
      },
      tipoSolicitante: ['Builder / Developer','Land Developer / Real Estate','Architecture or Engineering Office','Industry / Private Company','Other'],
      tipoProjeto: ['Earthmoving Design','Stormwater Drainage Design','Earthmoving + Drainage (integrated)','Paving','Property / Subdivision Regularization','Pathology Consulting','OpenBIM','Consulting / Other'],
      area: ['Up to 5,000 m²','5,000 to 20,000 m²','20,000 to 100,000 m²','Over 100,000 m²'],
      prazo: ['Urgent — up to 15 days','Up to 30 days','Up to 60 days','Flexible'],
      submit: 'Send Quote Request',
      sending: 'Sending...',
      errMsg: 'Error sending. Please try again or contact us via WhatsApp.',
      privacy: 'By submitting, you agree to receive a response from PER5. We do not share your data.',
      phoneHint: (n: number) => `${n} digit${n !== 1 ? 's' : ''} remaining`,
      phoneOk: '✓ Valid number',
    },
    faq: {
      eyebrow: 'Frequently asked questions',
      title: 'FAQ',
      items: [
        { q: 'Does PER5 issue ART*?', a: 'Yes. All projects delivered by PER5 are accompanied by an ART (Technical Responsibility Annotation) issued by the responsible engineer registered with CREA-SP. The ART is already included in the scope — it is not charged separately. (*ART is the Brazilian official technical responsibility document required for engineering projects.)' },
        { q: 'Do you serve clients outside Campinas?', a: 'Yes, we serve all of Brazil. Our headquarters is in Campinas, SP, where we provide in-person service. For projects in other regions, we work remotely with the same technical quality — most infrastructure projects can be developed without frequent site visits.' },
        { q: "What's included in an earthmoving project?", a: 'A complete executive project includes: topographic survey and analysis, volume movement (cuts and fills), slope dimensioning, surface drainage, hydrological study, longitudinal and cross-sectional profiles, executive drawings in OpenBIM standard (native IFC), technical report and ART. We deliver from basic to executive level.' },
        { q: 'What is the average project timeline?', a: 'Smaller projects (individual lots, small subdivisions): 15 to 30 days. Larger projects: 45 to 90 days. We always work with a schedule defined in the proposal — no open-ended timelines. The schedule is agreed upon before the start and is part of the contract.' },
        { q: 'Do you work with firms that need to subcontract infra projects?', a: "Yes — this is one of our main operating models. We act as a technical back-office for architecture and engineering firms that don't have an in-house team specialized in civil infrastructure. Confidentiality with the end client is contractually guaranteed. You keep the client relationship; we deliver the technical project." },
      ],
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
        rows: [{ label: 'In-person', val: 'Campinas region, SP' }, { label: 'Remote', val: 'All of Brazil' }],
      },
      horario: {
        title: 'Business Hours',
        rows: [{ label: 'Mon – Fri', val: '8am – 6pm BRT' }, { label: 'Saturday', val: '8am – 12pm BRT' }, { label: 'WhatsApp', val: '24/7' }],
      },
      crea: 'Professional registration: <strong>CREA-SP</strong> — all projects delivered with ART* included.',
    },
    footer: {
      tagline: 'Engineering that makes it easier.',
      about: 'Independent firm specialized in civil infrastructure projects — earthmoving, drainage and paving. Headquartered in Campinas, SP. Serving all of Brazil.',
      services: 'Services',
      forWhom: 'For whom',
      contact: 'Contact',
      serviceLinks: ['Earthmoving','Stormwater Drainage','Paving','Regularization','OpenBIM','Technical Consulting'],
      segmentLinks: ['Builders','Industries','Developers','Offices'],
      copyright: '© 2026 PER5 Projetos e Consultoria. All rights reserved.',
      location: 'Campinas, SP — Serving all of Brazil',
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
