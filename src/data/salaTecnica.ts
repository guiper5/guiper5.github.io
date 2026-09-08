export interface SalaTecnicaRole {
  title: string;
  summary: string;
  bullets: string[];
  trigger: string;
}

export interface SalaTecnicaStep {
  num: string;
  title: string;
  desc: string;
}

export interface ComparisonTable {
  caption: string;
  columns: string[];
  rows: string[][];
}

export interface SalaTecnicaFaq {
  q: string;
  a: string;
}

export interface SalaTecnicaSegment {
  title: string;
  desc: string;
  to: string;
}

/** Conteúdo da página /engenharia-civil/sala-tecnica. */
export const salaTecnicaData = {
  path: '/engenharia-civil/sala-tecnica',
  navLabel: 'Sala Técnica',
  updated: '2026-09-08',

  metaTitle: 'Sala Técnica: Backoffice de Engenharia Civil sob Demanda | PER5',
  metaDescription:
    'Sala Técnica é o backoffice de engenharia civil da PER5: consultor, revisor e especialista sob demanda, sem custo fixo. Terraplenagem, drenagem, pavimentação e urbanismo com ART, em regime white label.',
  keywords:
    'backoffice de engenharia, sala técnica, consultoria técnica de engenharia civil, terceirizar projeto de engenharia, revisão de projeto de infraestrutura, engenharia white label, equipe técnica sob demanda, segunda opinião técnica engenharia',

  eyebrow: 'Modelo de trabalho · Todo o Brasil',
  h1: 'Sala Técnica: o Time de Engenharia Civil que Sua Empresa Não Precisa Contratar',
  heroParagraphs: [
    'Sala Técnica é o backoffice de engenharia civil da PER5. Você aciona quando o projeto exige, e a gente entra como consultor, revisor ou especialista, sem custo fixo mensal e sem que você monte uma equipe interna para isso. O custo acompanha o escopo contratado e a entrega sai compatibilizada, com ART.',
    'Atendemos construtoras, indústrias, loteadoras e escritórios de arquitetura e engenharia em todo o Brasil. A PER5 não executa obra. O que entregamos é a peça técnica que sustenta a próxima decisão: o projeto, o parecer ou a revisão.',
  ],

  definition: {
    title: 'O que é a Sala Técnica da PER5',
    paragraphs: [
      'É acesso a engenharia civil de infraestrutura sem folha de pagamento. Contratar um engenheiro para uma demanda que aparece três ou quatro vezes por ano significa pagar custo fixo por capacidade parada boa parte do tempo. Aqui você paga o escopo, quando ele existe.',
      'A equipe é a mesma que desenvolve os projetos de terraplenagem, drenagem, pavimentação e urbanismo da PER5. O que muda de um contrato para outro é o estágio em que a gente entra no seu projeto.',
    ],
    bullets: [
      'Acesso direto ao engenheiro responsável, sem camada comercial no meio',
      'Escopo, prazo e entregáveis definidos em contrato antes de começar',
      'ART emitida em todas as entregas que exigem responsabilidade técnica',
      'Confidencialidade garantida: o cliente final continua sendo seu',
    ],
  },

  rolesTitle: 'Os três papéis: consultor, revisor e especialista',
  rolesIntro:
    'A diferença entre os três está no momento em que a PER5 entra. A equipe e o padrão técnico são os mesmos nos três casos.',
  roles: [
    {
      title: 'Consultor',
      summary:
        'A gente entra antes do projeto existir, quando a decisão técnica ainda está aberta. Escolha errada nessa fase costuma se pagar em retrabalho lá na frente.',
      bullets: [
        'Estudo de viabilidade técnica antes de comprometer orçamento',
        'Alternativas de solução comparadas por custo e risco de execução',
        'Ordem de grandeza de volume de corte e aterro para orçamento inicial',
        'Leitura do caminho de aprovação na prefeitura e nas concessionárias',
      ],
      trigger: 'Quando a decisão técnica ainda está em aberto.',
    },
    {
      title: 'Revisor',
      summary:
        'A gente entra sobre um projeto que já existe, seu ou de um fornecedor, para conferir antes que o erro vire obra.',
      bullets: [
        'Compatibilização entre terraplenagem, drenagem e pavimentação',
        'Conferência de memorial de cálculo e dimensionamento',
        'Checagem de conformidade antes do protocolo no órgão aprovador',
        'Segunda opinião técnica quando o volume ou a solução não fecham',
      ],
      trigger: 'Quando o projeto já existe e precisa de conferência.',
    },
    {
      title: 'Especialista',
      summary:
        'A gente assume a disciplina que falta no seu time e devolve o projeto pronto, compatibilizado com as demais disciplinas da obra.',
      bullets: [
        'Projeto de terraplenagem com volumetria, seções e cotas de implantação',
        'Projeto de drenagem pluvial com estudo hidrológico e memorial',
        'Projeto de pavimentação rígida, flexível, intertravada ou permeável',
        'Projeto urbanístico para loteamentos e condomínios',
      ],
      trigger: 'Quando falta uma disciplina específica no seu time.',
    },
  ] as SalaTecnicaRole[],

  comparison: {
    caption:
      'Comparação entre manter um engenheiro de infraestrutura na equipe, contratar freelancer por demanda e usar a Sala Técnica.',
    columns: ['Critério', 'Equipe interna', 'Freelancer avulso', 'Sala Técnica PER5'],
    rows: [
      [
        'Custo quando não há demanda',
        'Fixo, independe do volume de projeto',
        'Zero',
        'Zero. O custo acompanha o escopo contratado',
      ],
      [
        'Tempo até começar a produzir',
        'Semanas de seleção mais o período de adaptação',
        'Imediato, se houver alguém disponível',
        'Imediato, a equipe já está formada',
      ],
      [
        'Responsabilidade técnica (ART)',
        'Do engenheiro contratado',
        'Varia conforme o profissional e o registro dele',
        'ART emitida pela PER5 em toda entrega que exige',
      ],
      [
        'Cobertura de disciplinas',
        'Limitada à especialidade de quem foi contratado',
        'Uma disciplina por profissional',
        'Terraplenagem, drenagem, pavimentação e urbanismo na mesma equipe',
      ],
      [
        'Compatibilização entre disciplinas',
        'Depende do tamanho da equipe interna',
        'Fica por sua conta coordenar',
        'Entregue já compatibilizada',
      ],
      [
        'Continuidade se a pessoa sai',
        'O projeto para e o conhecimento vai junto',
        'Recomeça a busca a cada demanda',
        'O contrato é com a empresa, não com uma pessoa',
      ],
      [
        'Confidencialidade com o cliente final',
        'Interna',
        'Depende do acordo individual',
        'Contratual, com regime white label disponível',
      ],
    ],
  } as ComparisonTable,

  howItWorksTitle: 'Como funciona',
  howItWorksIntro:
    'O fluxo é o mesmo nos três papéis. Nenhuma etapa começa antes de o escopo estar escrito e aceito.',
  steps: [
    {
      num: '01',
      title: 'Briefing técnico',
      desc: 'Conversa direta com o engenheiro responsável para entender o terreno, o estágio do projeto e a decisão que precisa ser sustentada.',
    },
    {
      num: '02',
      title: 'Escopo e proposta',
      desc: 'Documento com entregáveis, prazo e formato de contratação. Sem escopo aberto e sem estimativa que muda no meio do caminho.',
    },
    {
      num: '03',
      title: 'Desenvolvimento',
      desc: 'Execução técnica com pontos de checagem combinados, para que o ajuste de rumo aconteça durante o trabalho e não na entrega final.',
    },
    {
      num: '04',
      title: 'Revisão e compatibilização',
      desc: 'Conferência interna e cruzamento com as demais disciplinas do projeto antes de qualquer arquivo sair daqui.',
    },
    {
      num: '05',
      title: 'Entrega e suporte',
      desc: 'Plantas, memorial e ART no formato acordado, com suporte para dúvidas de execução e para exigências do órgão aprovador.',
    },
  ] as SalaTecnicaStep[],

  models: {
    caption: 'Formatos de contratação da Sala Técnica conforme a previsibilidade da sua demanda.',
    columns: ['Formato', 'O que inclui', 'Quando faz sentido'],
    rows: [
      [
        'Demanda avulsa',
        'Um projeto, parecer ou revisão com escopo fechado.',
        'A necessidade apareceu agora e não se repete com regularidade.',
      ],
      [
        'Pacote de horas',
        'Volume de horas técnicas consumido ao longo do período, em consultas, revisões e pareceres.',
        'Surgem dúvidas técnicas com frequência, mas nem sempre viram projeto completo.',
      ],
      [
        'Projeto fechado',
        'Disciplina inteira desenvolvida do briefing à entrega, com ART.',
        'A obra exige a disciplina completa e seu time não cobre ela.',
      ],
    ],
  } as ComparisonTable,

  whiteLabel: {
    title: 'White label: seu cliente, sua assinatura',
    paragraphs: [
      'Em regime white label a PER5 não aparece para o seu cliente. O contato comercial continua sendo seu, a entrega sai no seu padrão de apresentação e o relacionamento fica onde sempre esteve. Confidencialidade aqui é cláusula de contrato, não promessa verbal.',
      'Existe um limite que precisa ficar claro desde o começo. A ART é pessoal e intransferível, então quem calcula e assina o projeto é o engenheiro responsável da PER5. É isso que dá validade legal à peça técnica perante o CREA, e nenhum arranjo comercial muda essa regra. O seu cliente vê a sua entrega. O órgão aprovador vê uma ART regular, emitida por quem fez o cálculo.',
    ],
    bullets: [
      'Acordo de confidencialidade assinado antes do início',
      'Entrega no template e no padrão de apresentação do parceiro',
      'Sem contato da PER5 com o cliente final, salvo autorização expressa',
      'ART emitida pelo engenheiro responsável pelo cálculo, como exige o CREA',
    ],
  },

  notDoingTitle: 'O que a Sala Técnica não faz',
  notDoingIntro:
    'Deixar o limite claro evita proposta mal calibrada e expectativa errada. A PER5 é facilitadora de engenharia, não construtora.',
  notDoing: [
    'Não executa obra, não fornece mão de obra e não atua como empreiteira',
    'Não faz projeto hidrossanitário vertical de edificação, apenas drenagem horizontal externa',
    'Não substitui o responsável técnico pela execução da obra',
    'Não assume gestão de canteiro nem medição de empreiteiro',
    'Não divulga valores publicamente, porque o orçamento é montado por escopo',
  ],

  segmentsTitle: 'Para quem a Sala Técnica funciona',
  segments: [
    {
      title: 'Construtoras e incorporadoras',
      desc: 'Disciplina de infraestrutura entregue dentro do cronograma da obra, compatibilizada com as demais.',
      to: '/engenharia-civil/para/construtoras',
    },
    {
      title: 'Indústrias e empresas privadas',
      desc: 'Expansão de planta, pátio, acesso e drenagem sem estruturar engenharia própria para um projeto pontual.',
      to: '/engenharia-civil/para/industrias',
    },
    {
      title: 'Loteadoras e empreendedores',
      desc: 'Da viabilidade à aprovação, com a documentação técnica que o registro do empreendimento exige.',
      to: '/engenharia-civil/para/loteadoras',
    },
    {
      title: 'Escritórios de arquitetura e engenharia',
      desc: 'Backoffice em regime white label: você mantém o cliente e a PER5 entrega a engenharia de infraestrutura.',
      to: '/engenharia-civil/para/escritorios-de-arquitetura',
    },
  ] as SalaTecnicaSegment[],

  faq: [
    {
      q: 'O que é backoffice de engenharia?',
      a: 'É quando uma empresa terceiriza a produção técnica de engenharia para outra e mantém o relacionamento com o cliente final. A contratante segue responsável pelo atendimento e pela entrega comercial, enquanto a contratada desenvolve o projeto, o cálculo ou o parecer. Na PER5 esse modelo se chama Sala Técnica e cobre engenharia civil de infraestrutura: terraplenagem, drenagem, pavimentação e urbanismo.',
    },
    {
      q: 'Vale a pena terceirizar consultoria técnica de engenharia civil?',
      a: 'Depende da frequência da demanda. Se projetos de infraestrutura aparecem algumas vezes por ano, manter um engenheiro na folha significa pagar custo fixo por capacidade ociosa. Se a demanda é constante e previsível, equipe interna tende a compensar. A Sala Técnica existe para o primeiro caso e para o intervalo entre os dois, quando o volume ainda não justifica uma contratação.',
    },
    {
      q: 'A PER5 revisa projeto feito por outro profissional?',
      a: 'Sim. Revisão e segunda opinião técnica são um dos três papéis da Sala Técnica. Conferimos dimensionamento, memorial de cálculo e compatibilização entre disciplinas, e apontamos o que precisa de ajuste antes do protocolo ou da execução. A revisão não transfere para a PER5 a responsabilidade técnica do projeto original.',
    },
    {
      q: 'Quem assina a ART do projeto?',
      a: 'O engenheiro responsável da PER5 que desenvolveu o cálculo. A ART é pessoal e intransferível, e assinar peça técnica que não se calculou é irregular perante o CREA. Isso vale inclusive no regime white label: o cliente final vê a entrega no padrão do parceiro, e o órgão aprovador vê uma ART regular emitida por quem calculou.',
    },
    {
      q: 'Como funciona o white label?',
      a: 'Com acordo de confidencialidade assinado antes do início, entrega no template de apresentação do parceiro e nenhum contato da PER5 com o cliente final, salvo autorização expressa. O parceiro mantém o relacionamento comercial integralmente. A única exceção é a ART, pela restrição legal descrita acima.',
    },
    {
      q: 'A Sala Técnica atende empresas fora de Campinas?',
      a: 'Sim, em todo o Brasil. A PER5 é sediada em Campinas, e o trabalho acontece com reuniões técnicas por videoconferência e visita ao terreno quando o projeto exige. A equipe, o padrão de entrega e a ART são os mesmos em qualquer região do país.',
    },
    {
      q: 'Existe contrato mínimo ou permanência?',
      a: 'Não há permanência obrigatória. A contratação pode ser por demanda avulsa, por pacote de horas técnicas ou por projeto fechado, conforme a previsibilidade da sua necessidade. Escopo, prazo e entregáveis ficam definidos em contrato antes de qualquer trabalho começar.',
    },
    {
      q: 'A PER5 executa a obra depois de entregar o projeto?',
      a: 'Não. A PER5 é facilitadora de engenharia e não atua como construtora ou empreiteira. A entrega é a peça técnica, seja projeto, memorial, parecer ou revisão, com suporte para dúvidas durante a execução feita pela empresa que você contratar para a obra.',
    },
  ] as SalaTecnicaFaq[],
};
