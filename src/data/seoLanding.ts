export type SeoCategory = 'servico' | 'segmento' | 'documentacao';

export interface SeoTopic {
  title: string;
  paragraphs: string[];
  bullets: string[];
}

export interface SeoFaqItem {
  q: string;
  a: string;
}

export interface SeoLandingData {
  category: SeoCategory;
  slug: string;
  path: string;
  navLabel: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  eyebrow: string;
  h1: string;
  heroParagraphs: string[];
  highlightsTitle: string;
  highlightsNote: string;
  highlights: string[];
  topics: SeoTopic[];
  faq: SeoFaqItem[];
}

export const seoLandingData: SeoLandingData[] = [
  // ── SERVIÇOS ──────────────────────────────────────────────
  {
    category: 'servico',
    slug: 'terraplenagem',
    path: '/engenharia-civil/servicos/terraplenagem',
    navLabel: 'Terraplenagem',
    metaTitle: 'Projeto de Terraplenagem: Volumetria, Corte e Aterro | PER5',
    metaDescription: 'Projeto de terraplenagem com estudo de volumetria, corte e aterro, seções transversais e cotas de implantação. Entrega com ART para loteamentos, indústrias e obras viárias em todo o Brasil.',
    keywords: 'projeto de terraplenagem, volumetria de corte e aterro, mancha de corte e aterro, seções transversais terraplenagem, cota de implantação, terraplenagem para loteamento, projeto de movimentação de terra',
    eyebrow: 'Serviço · Infraestrutura civil',
    h1: 'Projeto de Terraplenagem: Corte, Aterro e Volumetria',
    heroParagraphs: [
      'Antes de qualquer pavimento, rede ou edificação, o terreno precisa de um projeto de terraplenagem que defina como a terra vai se mover. É esse projeto que equilibra corte e aterro, define cotas de implantação e evita que uma obra pare no meio do caminho por causa de um talude mal calculado ou um volume de terra que não fecha a conta.',
      'A PER5 desenvolve o projeto completo, com estudo de volumetria, seções transversais, perfis longitudinais e diretrizes para taludes e plataformas, sempre com ART e pronto para protocolo.',
    ],
    highlightsTitle: 'Onde esse projeto entra',
    highlightsNote: 'Terraplenagem é normalmente a primeira etapa de projeto em qualquer obra que mexe com o terreno natural.',
    highlights: ['Loteamentos', 'Indústrias', 'Obras viárias', 'Grandes terrenos', 'Condomínios', 'Parques logísticos'],
    topics: [
      {
        title: 'O que entra no projeto de terraplenagem',
        paragraphs: [
          'O projeto sai com volumetria de corte e aterro, seções transversais e perfis longitudinais, mancha de corte/aterro e as cotas de implantação que orientam a execução. Tudo compatibilizado com os demais projetos do terreno, para não gerar retrabalho depois.',
          'Quando o relevo exige, entram também as diretrizes técnicas para taludes e plataformas, garantindo estabilidade e viabilidade executiva desde o desenho.',
        ],
        bullets: ['Volumetria de corte e aterro', 'Seções transversais e perfis longitudinais', 'Mancha de corte e aterro com cotas de projeto', 'Diretrizes para taludes e plataformas', 'Memorial de cálculo e ART'],
      },
      {
        title: 'Quando a terraplenagem é decisiva para o resultado da obra',
        paragraphs: [
          'Um projeto de terraplenagem malfeito aparece depois, quando o orçamento de movimentação de terra estoura ou quando a plataforma não fica na cota certa para receber a próxima etapa da obra. Calcular isso com rigor técnico, no início, evita que esse custo apareça mais tarde na forma de retrabalho.',
          'Isso vale tanto para um loteamento inteiro quanto para o pátio de uma indústria: o princípio é o mesmo, equilibrar corte e aterro com o menor volume de terra transportada possível, sem abrir mão da segurança do talude.',
        ],
        bullets: ['Reduz volume de terra a transportar', 'Evita retrabalho por cota errada', 'Base técnica para orçamento real de movimentação de terra', 'Compatível com drenagem e pavimentação desde o início'],
      },
    ],
    faq: [
      { q: 'O projeto de terraplenagem inclui o orçamento da movimentação de terra?', a: 'O projeto entrega a volumetria de corte e aterro, que é a base técnica para qualquer orçamento de movimentação de terra. O valor da execução em si depende da empreiteira ou construtora responsável pela obra.' },
      { q: 'Terraplenagem serve só para loteamentos grandes?', a: 'Não. Indústrias, condomínios, parques logísticos e até terrenos menores que precisam de nivelamento técnico usam esse projeto. O que muda é a escala, não a necessidade do cálculo.' },
      { q: 'É possível revisar um projeto de terraplenagem já pronto?', a: 'Sim. A PER5 também faz segunda opinião técnica e revisão de projetos de terraplenagem em desenvolvimento, quando o volume não fecha ou a proposta original precisa de ajuste.' },
      { q: 'O projeto vem com ART?', a: 'Sim, todo projeto de terraplenagem da PER5 é entregue com ART, o que garante a responsabilidade técnica do engenheiro responsável perante o CREA.' },
    ],
  },
  {
    category: 'servico',
    slug: 'drenagem-pluvial',
    path: '/engenharia-civil/servicos/drenagem-pluvial',
    navLabel: 'Drenagem Pluvial',
    metaTitle: 'Projeto de Drenagem Pluvial e Horizontal | PER5',
    metaDescription: 'Projeto de drenagem pluvial externa, galerias, dispositivos e obras de arte. Estudo hidrológico e memorial técnico para condomínios, loteamentos e parques industriais, com ART.',
    keywords: 'projeto de drenagem pluvial, drenagem horizontal, galerias de drenagem, estudo hidrológico, obras de arte drenagem, sistema de esgoto externo, drenagem para loteamento',
    eyebrow: 'Serviço · Infraestrutura civil',
    h1: 'Projeto de Drenagem Pluvial e Sistemas Horizontais',
    heroParagraphs: [
      'Água parada é o tipo de problema que só aparece depois que a obra já está pronta, e nessa hora já é caro de corrigir. O projeto de drenagem pluvial existe para resolver isso antes: definir para onde a água da chuva vai, com que capacidade e por qual caminho, sem comprometer vias, terrenos vizinhos ou a própria fundação da obra.',
      'A PER5 desenvolve projetos de drenagem horizontal completos, focados em áreas externas: galerias, dispositivos, obras de arte e lançamento, sempre com estudo hidrológico e memorial técnico compatível com os órgãos aprovadores.',
    ],
    highlightsTitle: 'Onde a drenagem pluvial é essencial',
    highlightsNote: 'Trabalhamos drenagem horizontal externa, não o hidrossanitário vertical de uma edificação.',
    highlights: ['Condomínios', 'Loteamentos', 'Parques industriais', 'Vias e acessos', 'Pátios de manobra', 'Áreas de estacionamento'],
    topics: [
      {
        title: 'O que entra no projeto de drenagem',
        paragraphs: [
          'O projeto define o sistema de captação e escoamento da água pluvial em áreas externas: galerias, bocas de lobo, dispositivos de dissipação e os pontos de lançamento, dimensionados a partir de um estudo hidrológico real, não de uma estimativa genérica.',
          'Quando a obra exige, o projeto também cobre obras de arte e emissários, com a documentação técnica necessária para aprovação junto aos órgãos competentes.',
        ],
        bullets: ['Estudo hidrológico e memorial de cálculo', 'Dimensionamento de galerias e dispositivos', 'Obras de arte e emissários', 'Pontos de lançamento e integração com o sistema público', 'ART em todos os projetos'],
      },
      {
        title: 'O custo de um projeto de drenagem malfeito',
        paragraphs: [
          'Drenagem subdimensionada não falha no primeiro dia, falha na primeira chuva forte. Nesse ponto o problema já é físico: erosão, alagamento, dano à pavimentação ou a terrenos vizinhos, e a correção custa muito mais do que o projeto teria custado no início.',
          'Um sistema bem dimensionado também facilita a aprovação do empreendimento junto à prefeitura e concessionárias, porque o memorial técnico já responde às exigências antes de qualquer pedido de complementação.',
        ],
        bullets: ['Evita alagamento e erosão em obra pronta', 'Reduz risco de retrabalho em pavimentação já executada', 'Acelera aprovação junto a órgãos públicos', 'Protege terrenos vizinhos de escoamento indevido'],
      },
    ],
    faq: [
      { q: 'Drenagem pluvial e drenagem hidrossanitária são a mesma coisa?', a: 'Não. A PER5 trabalha com drenagem pluvial horizontal, ou seja, água de chuva em áreas externas. O sistema hidrossanitário vertical de uma edificação é um projeto complementar, normalmente desenvolvido por outro especialista.' },
      { q: 'O projeto de drenagem depende de um estudo hidrológico?', a: 'Sim, esse estudo é a base do dimensionamento. Sem ele, qualquer projeto de drenagem é só uma estimativa, o que aumenta o risco de subdimensionamento.' },
      { q: 'O projeto de drenagem atende às exigências da prefeitura para aprovação?', a: 'O memorial técnico é desenvolvido para atender às exigências dos órgãos aprovadores da região do projeto, o que evita idas e vindas no processo de licenciamento.' },
      { q: 'A PER5 entrega o projeto de drenagem junto com o de terraplenagem?', a: 'Pode ser feito em conjunto ou separadamente. Como os dois projetos se relacionam diretamente com a cota do terreno, entregar em conjunto costuma reduzir o risco de incompatibilidade entre eles.' },
    ],
  },
  {
    category: 'servico',
    slug: 'pavimentacao',
    path: '/engenharia-civil/servicos/pavimentacao',
    navLabel: 'Pavimentação',
    metaTitle: 'Projeto de Pavimentação: Rígida, Flexível, Intertravada e Permeável | PER5',
    metaDescription: 'Projeto de pavimentação para vias internas, pátios industriais e estacionamentos. Piso de concreto, asfalto, intertravado e pavimento permeável, com dimensionamento técnico e ART.',
    keywords: 'projeto de pavimentação, piso de concreto industrial, pavimento asfáltico, pavimento intertravado, pavimento permeável, dimensionamento de pavimento, projeto de pátio industrial',
    eyebrow: 'Serviço · Infraestrutura civil',
    h1: 'Projeto de Pavimentação para Vias, Pátios e Acessos',
    heroParagraphs: [
      'Pavimento errado não é sobre estética, é sobre carga. Um piso dimensionado para carro de passeio não aguenta o tráfego de caminhão, e isso aparece em trinca, afundamento e manutenção recorrente em menos de dois anos. O projeto de pavimentação existe para calcular isso antes, de acordo com o tráfego real que a área vai receber.',
      'A PER5 trabalha com os quatro tipos principais: pavimento rígido em concreto, flexível em asfalto, semirrígido intertravado com paver e permeável, escolhendo a solução técnica certa para cada aplicação, não a mais genérica.',
    ],
    highlightsTitle: 'Aplicações típicas',
    highlightsNote: 'O tipo de pavimento certo depende do tráfego, do solo e do uso da área, não de preferência estética isolada.',
    highlights: ['Vias internas', 'Pátios industriais', 'Estacionamentos', 'Acessos de caminhão', 'Áreas comuns de condomínio', 'Calçadas técnicas'],
    topics: [
      {
        title: 'Os quatro tipos de pavimento e quando usar cada um',
        paragraphs: [
          'Pavimento rígido, em piso de concreto, é a escolha técnica para pátios industriais e áreas de tráfego pesado, onde a durabilidade compensa o investimento inicial maior. Pavimento flexível, em asfalto, atende bem vias internas e acessos com tráfego misto.',
          'O intertravado, com bloco de concreto tipo paver, entra em áreas que exigem manutenção facilitada, já que blocos danificados podem ser trocados individualmente. O permeável é a opção quando a drenagem do próprio pavimento é parte da solução, reduzindo o volume de água que precisa ser captado por galerias.',
        ],
        bullets: ['Pavimento rígido: piso de concreto para carga pesada', 'Pavimento flexível: asfalto para vias e acessos', 'Pavimento intertravado: paver com manutenção facilitada', 'Pavimento permeável: solução sustentável de drenagem própria'],
      },
      {
        title: 'Como o projeto de pavimentação é dimensionado',
        paragraphs: [
          'O dimensionamento parte do tráfego previsto, do tipo de solo de fundação e da vida útil esperada da via. É esse cálculo que define a espessura das camadas e o tipo de material, evitando tanto o superdimensionamento caro quanto o subdimensionamento que falha cedo.',
          'O projeto sai com memorial de cálculo, especificação técnica de camadas e materiais, e compatibilização com o projeto de drenagem da área, já que os dois trabalham juntos na vida útil do pavimento.',
        ],
        bullets: ['Dimensionamento por tráfego e tipo de solo', 'Especificação técnica de camadas e materiais', 'Compatibilização com drenagem pluvial', 'Memorial de cálculo e ART'],
      },
    ],
    faq: [
      { q: 'Como saber qual tipo de pavimento é o certo para minha obra?', a: 'Depende do tráfego esperado, do solo local e do uso da área. Um pátio industrial com tráfego de caminhão pesado pede uma solução diferente de um estacionamento residencial, e o projeto técnico é justamente o que define isso com segurança.' },
      { q: 'Pavimento permeável substitui o sistema de drenagem pluvial?', a: 'Reduz a carga sobre ele, mas normalmente trabalha em conjunto com um sistema de drenagem complementar, principalmente em eventos de chuva mais intensos.' },
      { q: 'O projeto de pavimentação serve para reforma de um pátio existente?', a: 'Sim. Também fazemos avaliação técnica de pavimentos existentes com problema recorrente, para diagnosticar a causa antes de propor a solução.' },
      { q: 'O projeto de pavimentação inclui a execução da obra?', a: 'Não. A PER5 entrega o projeto técnico com dimensionamento e especificação de materiais. A execução fica a cargo da construtora ou empreiteira contratada para a obra.' },
    ],
  },
  {
    category: 'servico',
    slug: 'projeto-urbanistico',
    path: '/engenharia-civil/servicos/projeto-urbanistico',
    navLabel: 'Projeto Urbanístico',
    metaTitle: 'Projeto Urbanístico para Loteamentos e Condomínios | PER5',
    metaDescription: 'Projeto urbanístico e geometria viária para loteamentos e condomínios, com implantação completa de infraestrutura urbana e compatibilização técnica. ART inclusa.',
    keywords: 'projeto urbanístico, projeto de loteamento, geometria viária, implantação de loteamento, projeto de condomínio, infraestrutura urbana, memorial de loteamento',
    eyebrow: 'Serviço · Infraestrutura civil',
    h1: 'Projeto Urbanístico para Loteamentos e Condomínios',
    heroParagraphs: [
      'Um loteamento ou condomínio nasce do projeto urbanístico: é ele que define o traçado viário, o parcelamento do solo, as áreas públicas e a forma como toda a infraestrutura vai se encaixar no terreno. Um projeto urbanístico mal resolvido gera retrabalho em cada projeto complementar que vem depois, de drenagem a pavimentação.',
      'A PER5 desenvolve o projeto urbanístico completo, com geometria viária, parcelamento e implantação de infraestrutura, compatibilizado desde o início com terraplenagem, drenagem e pavimentação para não gerar conflito entre disciplinas.',
    ],
    highlightsTitle: 'Onde o projeto urbanístico se aplica',
    highlightsNote: 'A base de qualquer parcelamento de solo, seja para venda de lotes ou para uso condominial.',
    highlights: ['Loteamentos residenciais', 'Loteamentos industriais', 'Condomínios horizontais', 'Parcelamento de grandes glebas', 'Empreendimentos mistos'],
    topics: [
      {
        title: 'O que compõe o projeto urbanístico',
        paragraphs: [
          'O projeto define a geometria viária, o parcelamento do solo em lotes e quadras, as áreas institucionais e verdes exigidas por lei, e a implantação geral da infraestrutura urbana. Tudo isso desenhado para atender à legislação municipal de parcelamento do solo, não só à viabilidade comercial do empreendimento.',
          'A compatibilização com terraplenagem, drenagem e pavimentação acontece desde a concepção, para que o traçado viário já nasça coerente com a cota do terreno e o sistema de escoamento de água.',
        ],
        bullets: ['Geometria viária e traçado de vias', 'Parcelamento do solo em lotes e quadras', 'Áreas institucionais, verdes e de preservação', 'Memorial descritivo e de cálculo de áreas', 'Compatibilização com terraplenagem e drenagem'],
      },
      {
        title: 'Por que a compatibilização entre projetos importa tanto aqui',
        paragraphs: [
          'Um projeto urbanístico aprovado sem diálogo com terraplenagem e drenagem costuma voltar para revisão assim que esses outros projetos são desenvolvidos, porque a cota do lote ou o traçado da via não fecham com a solução técnica necessária.',
          'Desenvolver esses projetos de forma integrada, com o mesmo responsável técnico acompanhando o conjunto, reduz esse risco de retrabalho e agiliza a aprovação do empreendimento como um todo.',
        ],
        bullets: ['Reduz risco de revisão em projetos aprovados', 'Acelera aprovação municipal integrada', 'Evita conflito entre traçado viário e cota de terraplenagem', 'Um único responsável técnico acompanhando o conjunto'],
      },
    ],
    faq: [
      { q: 'O projeto urbanístico já inclui terraplenagem e drenagem?', a: 'São projetos complementares, desenvolvidos de forma compatibilizada. A PER5 pode assumir o conjunto para garantir que um projeto não gere conflito com o outro.' },
      { q: 'O projeto atende às exigências de parcelamento do solo da prefeitura?', a: 'Sim, o projeto urbanístico é desenvolvido a partir da legislação municipal de parcelamento do solo aplicável ao terreno, o que é pré-requisito para aprovação.' },
      { q: 'Serve para condomínio fechado, ou só para loteamento aberto?', a: 'Serve para os dois casos. A lógica técnica de traçado viário, parcelamento e infraestrutura se aplica tanto a loteamentos quanto a condomínios horizontais.' },
      { q: 'Quanto tempo leva um projeto urbanístico?', a: 'Depende do tamanho da gleba e da complexidade do parcelamento. Esse prazo é definido em contrato logo na proposta, com cronograma real, não estimativa.' },
    ],
  },

  // ── SEGMENTOS ─────────────────────────────────────────────
  {
    category: 'segmento',
    slug: 'construtoras',
    path: '/engenharia-civil/para/construtoras',
    navLabel: 'Construtoras e Incorporadoras',
    metaTitle: 'Engenharia Civil para Construtoras e Incorporadoras | PER5',
    metaDescription: 'Consultoria e projetos de infraestrutura civil para construtoras e incorporadoras: terraplenagem, drenagem, pavimentação e urbanismo com ART e acesso direto ao engenheiro responsável.',
    keywords: 'engenharia civil para construtoras, consultoria para incorporadoras, projeto de infraestrutura para construtora, engenheiro civil para incorporadora, terceirização de projetos de engenharia',
    eyebrow: 'Para construtoras e incorporadoras',
    h1: 'Engenharia Civil para Construtoras e Incorporadoras',
    heroParagraphs: [
      'Construtoras e incorporadoras normalmente já têm uma equipe técnica própria, mas nem sempre faz sentido manter um especialista de infraestrutura civil interno para cada projeto. É aí que a PER5 entra: como um parceiro técnico que assume terraplenagem, drenagem, pavimentação e urbanismo com a mesma exigência de prazo e qualidade que a construtora já tem internamente.',
      'O contato é direto com o engenheiro responsável pelo projeto, sem camada de atendimento comercial entre a equipe da construtora e quem está desenvolvendo o trabalho técnico.',
    ],
    highlightsTitle: 'Onde a PER5 mais agrega para construtoras',
    highlightsNote: 'Projetos técnicos de infraestrutura que viabilizam o empreendimento antes mesmo da obra começar.',
    highlights: ['Viabilidade técnica de terrenos', 'Projetos de infraestrutura completos', 'Segunda opinião técnica', 'Apoio em prazos apertados', 'Compatibilização entre disciplinas'],
    topics: [
      {
        title: 'Como a PER5 trabalha com construtoras e incorporadoras',
        paragraphs: [
          'O processo começa com um briefing técnico direto: o que o empreendimento precisa, em que prazo e com que nível de detalhe. A partir daí, o projeto é desenvolvido com cronograma real, definido em contrato, e entregas parciais que permitem à equipe da construtora acompanhar o andamento.',
          'Para empreendimentos que exigem compatibilização entre várias disciplinas, isso significa menos retrabalho: terraplenagem, drenagem, pavimentação e urbanismo desenvolvidos com o mesmo padrão técnico e o mesmo responsável acompanhando o conjunto.',
        ],
        bullets: ['Briefing técnico direto com o engenheiro responsável', 'Cronograma real definido em contrato', 'Entregas parciais e documentadas', 'Compatibilização entre disciplinas de infraestrutura', 'ART em todos os projetos'],
      },
      {
        title: 'Quando faz sentido terceirizar o projeto de infraestrutura',
        paragraphs: [
          'Faz sentido quando a demanda de projetos de infraestrutura não justifica uma equipe interna dedicada o ano inteiro, ou quando um projeto específico exige um especialista que a equipe atual não tem disponível no momento.',
          'Também funciona bem como segunda opinião técnica: uma revisão externa de um projeto já em desenvolvimento, para validar premissas antes de seguir para a próxima etapa.',
        ],
        bullets: ['Sem necessidade de equipe interna dedicada', 'Especialista disponível por projeto, não por contrato fixo', 'Segunda opinião técnica sobre projetos em andamento', 'Previsibilidade de prazo e entrega'],
      },
    ],
    faq: [
      { q: 'A PER5 substitui a equipe de engenharia interna da construtora?', a: 'Não necessariamente. Muitas construtoras usam a PER5 como complemento técnico para projetos específicos de infraestrutura, mantendo a equipe interna focada em outras frentes.' },
      { q: 'É possível contratar só uma etapa do projeto?', a: 'Sim. É comum contratar apenas o projeto de infraestrutura de um empreendimento, mesmo quando outras etapas do projeto arquitetônico já estão com outro responsável.' },
      { q: 'Como funciona o prazo de entrega?', a: 'O cronograma é definido em contrato antes do início do trabalho, com base no escopo real do projeto, não em estimativa comercial genérica.' },
      { q: 'A PER5 atende construtoras de portes diferentes?', a: 'Sim. O critério para aceitar um projeto é a viabilidade técnica do escopo, não o porte da construtora ou incorporadora.' },
    ],
  },
  {
    category: 'segmento',
    slug: 'industrias',
    path: '/engenharia-civil/para/industrias',
    navLabel: 'Indústrias',
    metaTitle: 'Engenharia Civil para Indústrias e Empresas Privadas | PER5',
    metaDescription: 'Projetos de infraestrutura civil para indústrias: terraplenagem, drenagem, pavimentação de pátios industriais e projeto de offtracking, com ART e atendimento direto.',
    keywords: 'engenharia civil para indústria, projeto de pátio industrial, projeto de offtracking, pavimentação industrial, terraplenagem industrial, drenagem para parque industrial',
    eyebrow: 'Para indústrias e empresas privadas',
    h1: 'Engenharia Civil para Indústrias e Empresas Privadas',
    heroParagraphs: [
      'Área industrial tem uma exigência que outros tipos de empreendimento não têm da mesma forma: o pavimento e o pátio precisam aguentar o tráfego pesado do dia a dia operacional, e qualquer erro de dimensionamento vira custo de manutenção recorrente.',
      'A PER5 desenvolve projetos de terraplenagem, drenagem e pavimentação pensados para a realidade industrial, incluindo o projeto de offtracking, que calcula o raio de manobra necessário para veículos pesados dentro do pátio.',
    ],
    highlightsTitle: 'Frentes mais comuns em projetos industriais',
    highlightsNote: 'Cada projeto parte da operação real da planta, não de um padrão genérico de pátio.',
    highlights: ['Pátios de manobra e carga', 'Acessos para veículos pesados', 'Áreas de armazenagem', 'Ampliação de planta existente', 'Novos parques industriais'],
    topics: [
      {
        title: 'O que muda no projeto de infraestrutura para uma indústria',
        paragraphs: [
          'O tráfego de caminhões e veículos pesados exige um dimensionamento de pavimento diferente do padrão residencial ou comercial, normalmente em pavimento rígido de concreto. A geometria de manobra também entra no cálculo, com o projeto de offtracking definindo o raio necessário para carretas e veículos de grande porte circularem sem conflito.',
          'A drenagem de um pátio industrial também tem exigências específicas, já que a impermeabilização de grandes áreas concentra volume de água que precisa ser escoado com segurança.',
        ],
        bullets: ['Pavimento dimensionado para tráfego pesado', 'Projeto de offtracking para raio de manobra', 'Drenagem dimensionada para grandes áreas impermeabilizadas', 'Terraplenagem compatível com a operação da planta'],
      },
      {
        title: 'Ampliação de planta existente ou projeto novo',
        paragraphs: [
          'Para uma planta já em operação, o trabalho normalmente começa com um levantamento técnico da situação atual, para entender o que já existe antes de propor a ampliação ou correção de um problema recorrente, como acúmulo de água ou pavimento que degrada rápido demais.',
          'Para um parque industrial novo, o projeto parte do zero, com terraplenagem, drenagem, pavimentação e geometria de acesso desenvolvidos em conjunto desde a concepção.',
        ],
        bullets: ['Levantamento técnico de plantas existentes', 'Diagnóstico de problemas recorrentes de pavimento ou drenagem', 'Projeto completo para novos parques industriais', 'Compatibilização entre todas as disciplinas de infraestrutura'],
      },
    ],
    faq: [
      { q: 'O que é o projeto de offtracking e quando ele é necessário?', a: 'É o projeto que calcula o raio de manobra necessário para veículos pesados, como carretas, dentro de um pátio ou via de acesso. É essencial sempre que a operação envolve esse tipo de veículo.' },
      { q: 'A PER5 atende ampliação de planta industrial já em operação?', a: 'Sim. Fazemos o levantamento técnico da situação atual antes de propor o projeto de ampliação ou correção.' },
      { q: 'O pavimento industrial é sempre em concreto?', a: 'Na maioria dos casos de tráfego pesado, sim, mas a escolha depende do dimensionamento técnico, que considera tráfego, solo e uso real da área.' },
      { q: 'É possível corrigir um pátio industrial com problema recorrente de água parada?', a: 'Sim. Fazemos diagnóstico técnico da causa, seja drenagem subdimensionada ou cota de terraplenagem incorreta, antes de propor a solução.' },
    ],
  },
  {
    category: 'segmento',
    slug: 'loteadoras',
    path: '/engenharia-civil/para/loteadoras',
    navLabel: 'Loteadoras e Empreendedores',
    metaTitle: 'Engenharia Civil para Loteadoras e Empreendedores | PER5',
    metaDescription: 'Projeto urbanístico, terraplenagem, drenagem e pavimentação para loteadoras e empreendedores. Estudo de viabilidade técnica de terrenos com ART.',
    keywords: 'engenharia civil para loteadora, projeto de loteamento, estudo de viabilidade de terreno, projeto urbanístico para loteadora, infraestrutura de loteamento',
    eyebrow: 'Para loteadoras e empreendedores',
    h1: 'Engenharia Civil para Loteadoras e Empreendedores',
    heroParagraphs: [
      'Antes de comprar um terreno para lotear, ou de avançar num projeto de loteamento, é o estudo de viabilidade técnica que diz se a ideia se sustenta: se a topografia permite, se o volume de terraplenagem é viável e se a infraestrutura necessária cabe no orçamento do empreendimento.',
      'A PER5 acompanha loteadoras e empreendedores desde essa etapa inicial até a entrega do projeto completo de infraestrutura, com urbanismo, terraplenagem, drenagem e pavimentação desenvolvidos de forma integrada.',
    ],
    highlightsTitle: 'Etapas em que a PER5 entra',
    highlightsNote: 'De um terreno ainda em análise até a infraestrutura pronta para protocolo.',
    highlights: ['Estudo de viabilidade de terreno', 'Projeto urbanístico', 'Terraplenagem e drenagem', 'Pavimentação de vias internas', 'Regularização e habite-se'],
    topics: [
      {
        title: 'Do terreno em análise ao projeto pronto',
        paragraphs: [
          'O estudo de viabilidade técnica avalia se o terreno comporta o empreendimento pretendido, considerando topografia, volume de movimentação de terra e restrições ambientais ou legais que possam limitar o parcelamento.',
          'Com a viabilidade confirmada, o trabalho segue para o projeto urbanístico completo, com geometria viária e parcelamento, e para os projetos complementares de terraplenagem, drenagem e pavimentação das vias internas.',
        ],
        bullets: ['Estudo de viabilidade técnica do terreno', 'Projeto urbanístico e geometria viária', 'Terraplenagem e drenagem compatibilizadas', 'Pavimentação das vias internas do loteamento', 'Documentação para aprovação municipal'],
      },
      {
        title: 'Por que a viabilidade técnica evita prejuízo maior depois',
        paragraphs: [
          'Um terreno que parece viável no olho nu pode esconder um volume de terraplenagem inviável economicamente, ou uma restrição ambiental que limita boa parte da área loteável. Descobrir isso antes da compra, ou antes de avançar no investimento, é o que o estudo de viabilidade técnica resolve.',
          'Esse mesmo cuidado técnico segue para o projeto completo, reduzindo o risco de retrabalho ou de aprovação travada por falta de compatibilização entre urbanismo, terraplenagem e drenagem.',
        ],
        bullets: ['Evita compra de terreno tecnicamente inviável', 'Antecipa restrições ambientais e legais', 'Reduz risco de retrabalho no projeto completo', 'Base técnica sólida para negociação e investimento'],
      },
    ],
    faq: [
      { q: 'O estudo de viabilidade serve para avaliar um terreno antes da compra?', a: 'Sim, é justamente para isso que ele existe: dar uma base técnica de decisão antes do investimento, considerando topografia, volume de terraplenagem e restrições do terreno.' },
      { q: 'A PER5 acompanha o loteamento até a aprovação na prefeitura?', a: 'O projeto é desenvolvido para atender à legislação municipal de parcelamento do solo, o que é a base para o processo de aprovação conduzido junto ao órgão competente.' },
      { q: 'É possível contratar só o estudo de viabilidade, sem o projeto completo?', a: 'Sim, é uma contratação comum para quem ainda está decidindo sobre o terreno ou o investimento.' },
      { q: 'Quanto tempo leva um projeto completo de loteamento?', a: 'Depende do tamanho da gleba e da complexidade da infraestrutura necessária. O cronograma real é definido em contrato após o briefing técnico inicial.' },
    ],
  },
  {
    category: 'segmento',
    slug: 'escritorios-de-arquitetura',
    path: '/engenharia-civil/para/escritorios-de-arquitetura',
    navLabel: 'Escritórios de Arquitetura e Engenharia',
    metaTitle: 'Consultoria de Infraestrutura para Escritórios de Arquitetura | PER5',
    metaDescription: 'Parceria técnica em infraestrutura civil para escritórios de arquitetura e engenharia: terraplenagem, drenagem, pavimentação e urbanismo, com ART e prazo definido.',
    keywords: 'consultoria de engenharia para escritório de arquitetura, parceiro técnico de infraestrutura, terceirização de projeto de infraestrutura civil, engenharia civil parceria arquitetura',
    eyebrow: 'Para escritórios de arquitetura e engenharia',
    h1: 'Consultoria de Infraestrutura para Escritórios de Arquitetura',
    heroParagraphs: [
      'Nem todo escritório de arquitetura ou engenharia precisa ter um especialista em infraestrutura civil no quadro fixo. Quando o projeto exige terraplenagem, drenagem, pavimentação ou urbanismo, a PER5 entra como parceiro técnico pontual, entregando essa parte do trabalho com o mesmo padrão de quem tem a disciplina internamente.',
      'A relação é direta com o engenheiro responsável, o que facilita o alinhamento técnico entre as disciplinas e evita a perda de informação que costuma acontecer quando existem várias camadas de intermediação.',
    ],
    highlightsTitle: 'Como a parceria costuma funcionar',
    highlightsNote: 'Um parceiro técnico acionado por projeto, sem custo fixo de equipe interna.',
    highlights: ['Projetos pontuais de infraestrutura', 'Parceria recorrente por demanda', 'Compatibilização com o projeto arquitetônico', 'Suporte técnico em aprovação'],
    topics: [
      {
        title: 'Como funciona a parceria técnica com escritórios',
        paragraphs: [
          'O escritório mantém a relação com o cliente final e a responsabilidade pelo projeto arquitetônico ou urbanístico principal, enquanto a PER5 assume a parte de infraestrutura civil que o escopo exige, desde o briefing técnico até a entrega compatibilizada.',
          'Isso funciona tanto para uma parceria pontual, em um projeto específico, quanto para uma relação recorrente, em que o escritório aciona a PER5 sempre que um novo projeto exige essa frente técnica.',
        ],
        bullets: ['Compatibilização direta com o projeto arquitetônico', 'Comunicação técnica sem intermediários', 'Prazo definido em contrato por projeto', 'Possibilidade de parceria recorrente'],
      },
      {
        title: 'Vantagem de um parceiro técnico dedicado',
        paragraphs: [
          'Manter uma frente de infraestrutura civil interna só compensa quando o volume de projetos justifica. Para a maioria dos escritórios, contar com um parceiro técnico acionado por demanda é mais eficiente, sem abrir mão da qualidade técnica que o cliente final espera.',
          'Como a PER5 trabalha só com infraestrutura civil, sem disputar espaço com o projeto arquitetônico ou de outras disciplinas, o alinhamento tende a ser mais direto e menos sujeito a conflito de escopo.',
        ],
        bullets: ['Sem custo fixo de equipe interna de infraestrutura', 'Acionamento por demanda, projeto a projeto', 'Foco exclusivo em infraestrutura civil, sem sobreposição de escopo', 'Padrão técnico consistente entre projetos'],
      },
    ],
    faq: [
      { q: 'A PER5 atende diretamente o cliente final do escritório, ou só o escritório?', a: 'O modelo mais comum é o escritório manter a relação com o cliente final, com a PER5 atuando como parceiro técnico de infraestrutura por trás do projeto. Isso pode ser ajustado conforme o caso.' },
      { q: 'É possível ter uma parceria recorrente, não só um projeto isolado?', a: 'Sim, vários escritórios acionam a PER5 sempre que um novo projeto exige infraestrutura civil, sem precisar renegociar a relação a cada vez.' },
      { q: 'Como a PER5 garante compatibilidade com o projeto arquitetônico?', a: 'Através de alinhamento técnico direto durante o desenvolvimento do projeto, com revisão cruzada nos pontos que impactam ambas as disciplinas.' },
      { q: 'Isso funciona para escritórios de qualquer porte?', a: 'Sim. O critério é a viabilidade técnica do escopo do projeto, não o tamanho do escritório.' },
    ],
  },

  // ── DOCUMENTAÇÃO E ESTUDOS ───────────────────────────────
  {
    category: 'documentacao',
    slug: 'regularizacao-de-obras',
    path: '/engenharia-civil/documentacao/regularizacao-de-obras',
    navLabel: 'Regularização de Obras',
    metaTitle: 'Regularização de Obras: Habite-se e Alvará | PER5',
    metaDescription: 'Regularização de construções com habite-se, alvará de obra e alvará de demolição. Suporte técnico para regularização na Receita Federal e em cartório, com ART.',
    keywords: 'regularização de obras, habite-se, alvará de obra, alvará de demolição, regularização de imóvel, regularização na receita federal, regularização em cartório',
    eyebrow: 'Documentação técnica',
    h1: 'Regularização de Obras: Habite-se e Alvará',
    heroParagraphs: [
      'Uma obra sem a documentação regularizada vira problema na hora de vender, financiar, segurar ou até ampliar o imóvel. Habite-se, alvará de obra e alvará de demolição não são burocracia isolada, são o que garante que a construção existe oficialmente do jeito que foi feita.',
      'A PER5 conduz o processo de regularização de construções, incluindo o suporte técnico necessário para regularização na Receita Federal e em cartório, com toda a documentação assinada por engenheiro responsável.',
    ],
    highlightsTitle: 'Situações comuns de regularização',
    highlightsNote: 'Cada processo parte do estado atual real do imóvel, não de como ele deveria estar segundo a planta original.',
    highlights: ['Obra concluída sem habite-se', 'Reforma ou ampliação não averbada', 'Imóvel para financiamento ou venda', 'Demolição para novo projeto', 'Regularização fundiária'],
    topics: [
      {
        title: 'O que envolve o processo de regularização',
        paragraphs: [
          'O processo começa com o levantamento técnico do que existe de fato na construção, comparado com o que está aprovado ou registrado. A partir daí, definimos o caminho para regularizar: seja emitir o habite-se de uma obra concluída, seja ajustar a documentação de uma ampliação feita sem averbação.',
          'Quando a demolição é necessária, o alvará correspondente segue o mesmo rigor técnico, com toda a documentação preparada para protocolo junto à prefeitura.',
        ],
        bullets: ['Levantamento técnico do estado atual da construção', 'Habite-se de obras concluídas', 'Alvará de obra para novas construções e ampliações', 'Alvará de demolição', 'Suporte para regularização na Receita Federal e em cartório'],
      },
      {
        title: 'Por que a documentação regularizada importa',
        paragraphs: [
          'Sem habite-se, um imóvel não consegue financiamento bancário na maioria dos casos, e sua venda fica mais difícil ou mais barata do que deveria. Ampliações não averbadas também aparecem em qualquer due diligence, seja para venda, seja para negociação com investidor.',
          'Regularizar antes de precisar, em vez de correr atrás quando a documentação já está sendo cobrada, costuma ser mais rápido e mais barato.',
        ],
        bullets: ['Viabiliza financiamento bancário do imóvel', 'Facilita venda e negociação', 'Evita problema em due diligence', 'Reduz risco de multa ou embargo'],
      },
    ],
    faq: [
      { q: 'Toda reforma precisa de regularização?', a: 'Depende do tipo e do porte da intervenção. Ampliações de área construída normalmente precisam, reformas internas sem alteração de área geralmente não. A avaliação técnica do caso específico define isso.' },
      { q: 'Quanto tempo leva para regularizar uma obra?', a: 'Varia conforme o município e a complexidade da situação, mas o prazo real é estimado já na avaliação inicial, depois do levantamento técnico do imóvel.' },
      { q: 'É possível regularizar uma obra antiga, sem os projetos originais?', a: 'Sim. Nesses casos, o levantamento técnico é feito a partir do que existe fisicamente na construção, servindo de base para o projeto de regularização.' },
      { q: 'A PER5 cuida também da parte cartorária?', a: 'Damos o suporte técnico necessário para o processo de regularização em cartório e na Receita Federal, com a documentação de engenharia que esses processos exigem.' },
    ],
  },
  {
    category: 'documentacao',
    slug: 'estudos-e-planos',
    path: '/engenharia-civil/documentacao/estudos-e-planos',
    navLabel: 'Estudos e Planos',
    metaTitle: 'EIV, RIT e Estudo de Viabilidade Técnica | PER5',
    metaDescription: 'Elaboração de EIV, Estudo de Impacto de Vizinhança, RIT, Relatório de Impacto no Trânsito, e estudo de viabilidade técnica para aprovação de empreendimentos.',
    keywords: 'EIV estudo de impacto de vizinhança, RIT relatório de impacto no trânsito, estudo de viabilidade técnica, aprovação de empreendimento, estudo técnico para licenciamento',
    eyebrow: 'Documentação técnica',
    h1: 'EIV, RIT e Estudo de Viabilidade Técnica',
    heroParagraphs: [
      'Empreendimentos de determinado porte não avançam na prefeitura sem estudos técnicos específicos. EIV e RIT existem para medir o impacto real de um empreendimento na vizinhança e no trânsito da região, e sem eles o processo de aprovação simplesmente não segue adiante.',
      'A PER5 elabora esses estudos junto com o estudo de viabilidade técnica, que avalia se um terreno ou projeto se sustenta tecnicamente antes de qualquer investimento maior ser feito.',
    ],
    highlightsTitle: 'Quando esses estudos são exigidos',
    highlightsNote: 'A exigência varia por município e porte do empreendimento, e costuma aparecer cedo no processo de aprovação.',
    highlights: ['Empreendimentos de grande porte', 'Loteamentos e condomínios', 'Indústrias e polos comerciais', 'Alteração de uso do solo', 'Análise prévia de terreno'],
    topics: [
      {
        title: 'O que é EIV e o que é RIT, na prática',
        paragraphs: [
          'O EIV, Estudo de Impacto de Vizinhança, avalia como um empreendimento afeta a região onde vai se instalar: adensamento, infraestrutura urbana, ventilação, iluminação, entre outros fatores exigidos pela legislação municipal. É um estudo técnico, não uma formalidade genérica.',
          'O RIT, Relatório de Impacto no Trânsito, foca especificamente no efeito do empreendimento sobre o tráfego da região, incluindo acessos, geometria viária e capacidade das vias no entorno.',
        ],
        bullets: ['EIV: impacto do empreendimento na vizinhança', 'RIT: impacto específico no trânsito local', 'Elaborados conforme a legislação municipal aplicável', 'Base técnica para o processo de aprovação'],
      },
      {
        title: 'Estudo de viabilidade técnica antes de investir',
        paragraphs: [
          'Antes de qualquer estudo de impacto, muitas vezes a pergunta certa é outra: o terreno ou o projeto se sustenta tecnicamente? O estudo de viabilidade responde isso, avaliando topografia, restrições legais e ambientais, e a compatibilidade do projeto pretendido com a área disponível.',
          'Feito antes da decisão de investimento, esse estudo evita que um empreendimento avance para as etapas seguintes, como EIV e RIT, sem uma base técnica sólida por trás.',
        ],
        bullets: ['Avaliação técnica de topografia e restrições', 'Compatibilidade entre projeto pretendido e terreno disponível', 'Base de decisão antes do investimento maior', 'Reduz risco de retrabalho nas etapas seguintes'],
      },
    ],
    faq: [
      { q: 'Todo empreendimento precisa de EIV?', a: 'Não. A exigência depende do porte do empreendimento e da legislação do município onde ele será instalado. A avaliação inicial já indica se esse estudo é necessário.' },
      { q: 'EIV e RIT podem ser feitos juntos?', a: 'Sim, e na prática costumam ser desenvolvidos de forma integrada, já que parte da análise se sobrepõe, principalmente em empreendimentos de grande porte.' },
      { q: 'O estudo de viabilidade substitui o EIV?', a: 'Não, são estudos diferentes. A viabilidade técnica avalia se o projeto se sustenta tecnicamente no terreno; o EIV avalia o impacto do projeto já definido na vizinhança.' },
      { q: 'Quanto tempo leva para elaborar um EIV ou RIT?', a: 'Depende da complexidade do empreendimento e da exigência específica do município. O prazo real é definido após a avaliação inicial do escopo.' },
    ],
  },
];

export function getSeoLanding(category: SeoCategory, slug: string) {
  return seoLandingData.find((d) => d.category === category && d.slug === slug);
}
