/**
 * Páginas de cidade para obras fora da região de Campinas.
 *
 * Posicionamento: a PER5 é sediada em Campinas e atende obras em todo o
 * Brasil. O projeto é desenvolvido pela equipe própria, com reuniões técnicas
 * por videoconferência e visita ao terreno quando o trabalho exige. Não
 * enquadrar o atendimento como limitado a uma região.
 *
 * Regra de publicação: uma cidade só entra quando `localContext` e
 * `demandProfile` puderem ser escritos com conhecimento real do município.
 * Quatro cidades bem diferenciadas valem mais do que oito genéricas. Texto
 * intercambiável entre cidades é passivo de ranqueamento, não ativo.
 */

export interface CityLocalContext {
  /** O que de fato move a demanda de obra no município. */
  economy: string;
  /** Relevo, solo e bacia: o que muda no projeto por causa do terreno. */
  terrain: string;
  /** Eixos rodoviários e logísticos reais. */
  corridors: string[];
  /** Instrumentos e instâncias que pesam na aprovação. */
  regulatory: string[];
}

export interface CityDemandItem {
  demand: string;
  /** Por que essa demanda é comum NESTA cidade. Não pode servir para outra. */
  whyHere: string;
}

export interface CityRemoteDelivery {
  steps: { title: string; desc: string }[];
  needsLocalPresence: string[];
  howWeHandleThat: string;
}

export interface CityComparison {
  caption: string;
  columns: string[];
  rows: string[][];
}

export interface CityFaq {
  q: string;
  a: string;
}

export interface CityLandingData {
  slug: string;
  city: string;
  uf: 'SP';
  ddd: string;
  region: string;
  path: string;
  updated: string;
  geo: { lat: number; lng: number };
  distanceFromCampinasKm: number;
  serviceMode: 'remoto' | 'remoto-com-visita-pontual';

  metaTitle: string;
  metaDescription: string;
  keywords: string;
  eyebrow: string;
  h1: string;
  heroParagraphs: string[];

  localContext: CityLocalContext;
  demandProfile: CityDemandItem[];
  remoteDelivery: CityRemoteDelivery;
  comparison: CityComparison;
  faq: CityFaq[];
  nearbySlugs: string[];
}

const sharedComparison = (city: string): CityComparison => ({
  caption: `Comparação entre contratar a PER5 e contratar um escritório de engenharia local em ${city}.`,
  columns: ['Critério', 'PER5', 'Escritório local'],
  rows: [
    [
      'Visita ao terreno',
      'Agendada quando o projeto exige leitura presencial do terreno.',
      'Deslocamento curto, visita mais fácil de repetir.',
    ],
    [
      'Conhecimento das exigências municipais',
      'Levantado projeto a projeto junto à prefeitura, antes do dimensionamento.',
      'Acumulado pela rotina de protocolos na cidade.',
    ],
    [
      'Disponibilidade de disciplinas',
      'Terraplenagem, drenagem, pavimentação e urbanismo na mesma equipe.',
      'Varia. Muitas vezes exige contratar mais de um profissional.',
    ],
    [
      'Prazo de início',
      'Imediato, sem depender de agenda de deslocamento.',
      'Depende da carga de trabalho do escritório local.',
    ],
    [
      'Responsabilidade técnica',
      'ART do engenheiro responsável da PER5, válida em todo o território nacional.',
      'ART do profissional contratado.',
    ],
    [
      'Acompanhamento durante a execução',
      'Suporte técnico para dúvidas de execução e para exigências do órgão aprovador.',
      'Presencial, se estiver previsto em contrato.',
    ],
  ],
});

export const cityLandings: CityLandingData[] = [
  // ── SOROCABA ────────────────────────────────────────────────
  {
    slug: 'sorocaba',
    city: 'Sorocaba',
    uf: 'SP',
    ddd: '15',
    region: 'Região Metropolitana de Sorocaba',
    path: '/engenharia-civil/cidades/sorocaba',
    updated: '2026-09-08',
    geo: { lat: -23.5015, lng: -47.4526 },
    distanceFromCampinasKm: 100,
    serviceMode: 'remoto-com-visita-pontual',

    metaTitle: 'Projetos de Engenharia Civil em Sorocaba | PER5',
    metaDescription:
      'Projetos de terraplenagem, drenagem, pavimentação e urbanismo para obras em Sorocaba, com memorial de cálculo e ART. Equipe própria de engenharia e visita técnica quando o projeto exige.',
    keywords:
      'engenharia civil Sorocaba, projeto de terraplenagem Sorocaba, projeto de drenagem Sorocaba, pavimentação Sorocaba, projeto urbanístico Sorocaba, engenheiro civil Sorocaba, condomínio logístico Sorocaba',
    eyebrow: 'Sorocaba, SP · DDD 15',
    h1: 'Projetos de Engenharia Civil em Sorocaba',
    heroParagraphs: [
      'A PER5 desenvolve projetos de infraestrutura civil para obras em Sorocaba: terraplenagem, drenagem pluvial, pavimentação e projeto urbanístico, com memorial de cálculo e ART, prontos para protocolo.',
      'A empresa é sediada em Campinas e atende obras em todo o Brasil. O projeto é conduzido pela nossa equipe, com reuniões técnicas por videoconferência e visita ao terreno quando o trabalho exige. Sorocaba fica a cerca de 100 km da sede, distância curta o suficiente para agendar visita sem complicação.',
    ],

    localContext: {
      economy:
        'Sorocaba reúne um parque industrial diversificado, com metalmecânica, autopeças e eletroeletrônicos, e uma das maiores concentrações de condomínios logísticos do interior paulista, puxada pela posição entre a capital e o oeste do estado. Isso gera demanda constante por plataformas industriais amplas e por loteamentos residenciais nas franjas urbanas.',
      terrain:
        'O município fica na transição entre a Depressão Periférica e o Planalto Atlântico, com relevo ondulado e desníveis relevantes dentro de uma mesma gleba. É terreno que raramente aceita plataforma única: o projeto de terraplenagem trabalha com patamares e taludes, e o equilíbrio entre corte e aterro pesa mais no orçamento do que pesaria numa cidade de relevo plano. A drenagem corre para a bacia do Rio Sorocaba, afluente do Tietê.',
      corridors: [
        'Rodovia Castello Branco (SP-280), eixo logístico principal',
        'Rodovia Raposo Tavares (SP-270)',
        'Rodovia Senador José Ermírio de Moraes (SP-075), ligação com Itu e Campinas',
        'Rodovia João Leme dos Santos (SP-264)',
      ],
      regulatory: [
        'Plano Diretor e lei municipal de parcelamento do solo, que definem as exigências de infraestrutura para loteamento',
        'Diretrizes municipais de drenagem e ponto de lançamento, verificadas antes do dimensionamento',
        'Comitê de Bacia Hidrográfica do Sorocaba e Médio Tietê (CBH-SMT) como referência de bacia',
        'Outorga do DAEE quando há intervenção em curso d’água, e licenciamento CETESB conforme o porte',
      ],
    },

    demandProfile: [
      {
        demand: 'Terraplenagem de plataformas para condomínio logístico',
        whyHere:
          'A concentração de galpões ao longo da Castello Branco exige plataformas amplas e niveladas em um relevo naturalmente ondulado. Conciliar a cota de piso do galpão com o volume de corte e aterro disponível dentro da própria gleba costuma decidir a viabilidade do empreendimento em Sorocaba.',
      },
      {
        demand: 'Drenagem em gleba com desnível acentuado',
        whyHere:
          'Com declividade natural e escoamento para a bacia do Sorocaba, o risco principal não é água parada e sim velocidade de escoamento. Sem dissipação adequada, a água concentrada abre erosão no próprio terreno e no vizinho a jusante.',
      },
      {
        demand: 'Projeto urbanístico e infraestrutura de loteamento',
        whyHere:
          'A expansão residencial nas franjas do município acontece sobre terreno acidentado. Isso transforma a geometria viária e a definição de greide em problema de projeto, e não de desenho: rampa mal resolvida inviabiliza o lote.',
      },
      {
        demand: 'Pavimentação de pátio de manobra e acesso pesado',
        whyHere:
          'O perfil logístico da cidade coloca carreta em pátio e acesso o tempo todo. O dimensionamento precisa considerar tráfego pesado repetitivo e raio de manobra, não só a área a pavimentar.',
      },
    ],

    remoteDelivery: {
      steps: [
        {
          title: 'Base de projeto',
          desc: 'Partimos do levantamento planialtimétrico do terreno. Se ele não existir, indicamos o escopo exato a contratar com um topógrafo em Sorocaba e conferimos o material recebido antes de começar.',
        },
        {
          title: 'Leitura das exigências municipais',
          desc: 'Antes de dimensionar, levantamos com a prefeitura as diretrizes de drenagem, lançamento e parcelamento aplicáveis ao seu caso, para o memorial já nascer aderente ao que vai ser cobrado.',
        },
        {
          title: 'Desenvolvimento e checagens',
          desc: 'Projeto desenvolvido com pontos de validação combinados por videoconferência, com o material aberto na tela. É o que aconteceria numa reunião presencial.',
        },
        {
          title: 'Entrega e protocolo',
          desc: 'Plantas, memorial de cálculo e ART entregues em formato pronto para protocolo, com suporte para eventuais exigências do órgão aprovador.',
        },
      ],
      needsLocalPresence: [
        'Levantamento topográfico do terreno',
        'Sondagem e ensaios geotécnicos de campo',
        'Vistoria de patologia construtiva, que depende de inspeção presencial',
        'Acompanhamento diário de execução da obra',
      ],
      howWeHandleThat:
        'São serviços de campo, executados em visita técnica ou contratados de parceiro local, sempre com escopo especificado pela PER5 para que o dado chegue no formato certo. Sorocaba está a cerca de 100 km da sede, então a visita é simples de agendar quando o terreno exige leitura presencial.',
    },

    comparison: sharedComparison('Sorocaba'),

    faq: [
      {
        q: 'A PER5 faz visita técnica em Sorocaba?',
        a: 'Sim, sempre que o projeto exige leitura presencial do terreno. A sede fica em Campinas, a cerca de 100 km, o que torna o deslocamento simples de agendar. No dia a dia o projeto avança com reuniões técnicas por videoconferência, o que costuma encurtar o cronograma.',
      },
      {
        q: 'Preciso ter levantamento topográfico antes de contratar o projeto?',
        a: 'Sim. O projeto de terraplenagem e o de drenagem partem do levantamento planialtimétrico. Se você ainda não tem, especificamos o escopo a contratar com um topógrafo em Sorocaba e conferimos o material antes de iniciar, para evitar retrabalho por base incompleta.',
      },
      {
        q: 'O projeto atende às exigências da prefeitura de Sorocaba?',
        a: 'O memorial é desenvolvido a partir das diretrizes levantadas junto ao município para o seu caso específico, incluindo drenagem e ponto de lançamento. Esse levantamento acontece antes do dimensionamento, para reduzir pedido de complementação no protocolo.',
      },
      {
        q: 'Vocês fazem projeto para condomínio logístico em Sorocaba?',
        a: 'Sim, é uma das demandas mais frequentes na região por conta do eixo da Castello Branco. O projeto cobre terraplenagem das plataformas, drenagem pluvial, pavimentação de pátio e acessos para tráfego pesado, entregues compatibilizados entre si.',
      },
      {
        q: 'Como funciona o acompanhamento durante a obra?',
        a: 'O suporte cobre dúvidas de execução, ajustes de detalhamento e resposta a exigências do órgão aprovador. A PER5 não executa obra e não assume gestão de canteiro. A execução fica com a construtora ou empreiteira que você contratar.',
      },
    ],

    nearbySlugs: ['sao-jose-dos-campos', 'bauru'],
  },

  // ── SÃO JOSÉ DOS CAMPOS ─────────────────────────────────────
  {
    slug: 'sao-jose-dos-campos',
    city: 'São José dos Campos',
    uf: 'SP',
    ddd: '12',
    region: 'Vale do Paraíba',
    path: '/engenharia-civil/cidades/sao-jose-dos-campos',
    updated: '2026-09-08',
    geo: { lat: -23.1896, lng: -45.8841 },
    distanceFromCampinasKm: 180,
    serviceMode: 'remoto',

    metaTitle: 'Projetos de Engenharia Civil em São José dos Campos | PER5',
    metaDescription:
      'Projetos de terraplenagem, drenagem, pavimentação e urbanismo para obras em São José dos Campos e no Vale do Paraíba, com memorial de cálculo e ART. Equipe própria de engenharia.',
    keywords:
      'engenharia civil São José dos Campos, projeto de terraplenagem São José dos Campos, drenagem Vale do Paraíba, pavimentação São José dos Campos, projeto urbanístico SJC, engenheiro civil Vale do Paraíba',
    eyebrow: 'São José dos Campos, SP · DDD 12',
    h1: 'Projetos de Engenharia Civil em São José dos Campos',
    heroParagraphs: [
      'A PER5 desenvolve projetos de infraestrutura civil para obras em São José dos Campos: terraplenagem, drenagem pluvial, pavimentação e projeto urbanístico, com memorial de cálculo e ART.',
      'A empresa é sediada em Campinas e atende obras em todo o Brasil, com a mesma equipe e o mesmo padrão de entrega no Vale do Paraíba. O que muda de uma obra para outra é como o dado de campo chega ao projeto, e isso está descrito abaixo etapa por etapa.',
    ],

    localContext: {
      economy:
        'São José dos Campos concentra indústria aeroespacial, de defesa e petroquímica, além de um ecossistema de tecnologia consolidado. O efeito sobre a construção vem por dois caminhos: expansão e adequação de plantas industriais de alto padrão técnico, e um mercado imobiliário de médio e alto padrão que ocupa as encostas das zonas sul e leste.',
      terrain:
        'O município está sobre o relevo de colinas do Vale do Paraíba, com desníveis expressivos entre a área central e os bairros de expansão, e terraços fluviais junto ao Rio Paraíba do Sul. Isso cria dois problemas de projeto bem distintos. Nas encostas, terraplenagem com contenção e controle de talude. Nas cotas baixas próximas ao rio, restrição severa de ocupação e drenagem condicionada ao nível de cheia.',
      corridors: [
        'Rodovia Presidente Dutra (BR-116), eixo Rio–São Paulo',
        'Rodovia Carvalho Pinto (SP-070)',
        'Rodovia dos Tamoios (SP-099), ligação com o litoral norte',
        'Aeroporto de São José dos Campos, cujas faixas de aproximação impõem restrição de altura no entorno',
      ],
      regulatory: [
        'Plano Diretor e legislação municipal de uso e ocupação do solo, com zoneamento restritivo em área de várzea',
        'Restrições de ocupação e de cota nas áreas de influência do Rio Paraíba do Sul',
        'Comitê de Bacia Hidrográfica do Rio Paraíba do Sul (CBH-PS) como referência de bacia',
        'Outorga do DAEE para intervenção em recursos hídricos e licenciamento CETESB conforme o porte',
      ],
    },

    demandProfile: [
      {
        demand: 'Terraplenagem com contenção em terreno de encosta',
        whyHere:
          'A expansão residencial de São José dos Campos avançou sobre as colinas das zonas sul e leste. Nessas glebas o corte não é só volume: ele define a necessidade de muro de arrimo ou gabião, e um talude subdimensionado vira problema estrutural depois da primeira estação chuvosa.',
      },
      {
        demand: 'Drenagem condicionada à cota de várzea',
        whyHere:
          'Nas áreas baixas próximas ao Paraíba do Sul, o ponto de lançamento e a cota de projeto dependem do comportamento do rio em cheia. Dimensionar drenagem ali sem considerar esse condicionante é o erro mais caro que se pode cometer no Vale do Paraíba.',
      },
      {
        demand: 'Infraestrutura para expansão de planta industrial',
        whyHere:
          'O perfil aeroespacial e petroquímico da cidade gera demanda de adequação de plantas existentes: pátio, acesso pesado, drenagem de área industrial e readequação de cota, quase sempre com a operação rodando ao lado da obra.',
      },
      {
        demand: 'Projeto viário e geometria em relevo acidentado',
        whyHere:
          'Vias em bairro de encosta esbarram em limite de rampa. A geometria precisa ser resolvida junto com a terraplenagem, senão o traçado só fecha no papel.',
      },
    ],

    remoteDelivery: {
      steps: [
        {
          title: 'Base de projeto',
          desc: 'Trabalhamos sobre o levantamento planialtimétrico existente. Onde não houver, especificamos o escopo a contratar com topógrafo local e validamos o material antes de iniciar o dimensionamento.',
        },
        {
          title: 'Condicionantes locais',
          desc: 'Em São José dos Campos dois condicionantes entram antes do projeto: restrição de cota nas áreas de influência do Paraíba do Sul e, no entorno do aeroporto, limitação de altura. Os dois são verificados no início, não na entrega.',
        },
        {
          title: 'Desenvolvimento e checagens',
          desc: 'Validações por videoconferência com o projeto aberto na tela, em pontos de checagem combinados no contrato.',
        },
        {
          title: 'Entrega e protocolo',
          desc: 'Plantas, memorial e ART em formato pronto para protocolo, com suporte para exigências do órgão aprovador.',
        },
      ],
      needsLocalPresence: [
        'Levantamento topográfico e cadastro do terreno',
        'Sondagem e ensaios geotécnicos, especialmente em encosta',
        'Vistoria de patologia construtiva',
        'Fiscalização de execução',
      ],
      howWeHandleThat:
        'São serviços de campo, executados em visita técnica ou contratados de parceiro local, com escopo especificado pela PER5 para que o dado chegue no formato que o projeto exige. Em terreno de encosta a sondagem costuma ser o item que mais influencia a solução de contenção, então ela entra antes do dimensionamento e não depois.',
    },

    comparison: sharedComparison('São José dos Campos'),

    faq: [
      {
        q: 'A PER5 atende obras em São José dos Campos?',
        a: 'Sim. A empresa é sediada em Campinas e atende obras em todo o Brasil, incluindo São José dos Campos e o restante do Vale do Paraíba. O projeto é desenvolvido pela nossa equipe, com reuniões técnicas por videoconferência e visita ao terreno quando o trabalho exige.',
      },
      {
        q: 'Vocês projetam terraplenagem para terreno em encosta?',
        a: 'Sim, é uma das demandas mais comuns na cidade. O projeto define plataformas, taludes e a necessidade de contenção, seja muro de arrimo ou gabião, a partir da topografia e da sondagem do terreno. Em encosta o ensaio geotécnico deixa de ser opcional, porque é ele que sustenta a solução adotada.',
      },
      {
        q: 'Como a proximidade do Rio Paraíba do Sul afeta o projeto?',
        a: 'Nas cotas baixas, o nível de cheia condiciona a cota de implantação e o ponto de lançamento da drenagem, e ainda há restrição de ocupação nas áreas de várzea. Esse condicionante é levantado no início do trabalho, porque pode mudar por completo a viabilidade do que se pretende construir.',
      },
      {
        q: 'O projeto sai com ART mesmo sendo feito à distância?',
        a: 'Sim. A ART é emitida pelo engenheiro responsável da PER5, registrado no CREA-SP, e tem validade em todo o território nacional. O regime de atendimento não altera a responsabilidade técnica sobre o que foi calculado.',
      },
      {
        q: 'Dá para fazer reunião técnica sem visita presencial?',
        a: 'Sim, e é assim que o trabalho avança no dia a dia: videoconferência com o projeto aberto na tela, em pontos de checagem definidos em contrato. Levantamento de campo, sondagem e vistoria seguem sendo serviços presenciais, executados em visita técnica ou por parceiro local com escopo especificado pela PER5.',
      },
    ],

    nearbySlugs: ['sorocaba', 'ribeirao-preto'],
  },

  // ── RIBEIRÃO PRETO ──────────────────────────────────────────
  {
    slug: 'ribeirao-preto',
    city: 'Ribeirão Preto',
    uf: 'SP',
    ddd: '16',
    region: 'Nordeste paulista',
    path: '/engenharia-civil/cidades/ribeirao-preto',
    updated: '2026-09-08',
    geo: { lat: -21.1775, lng: -47.8103 },
    distanceFromCampinasKm: 220,
    serviceMode: 'remoto',

    metaTitle: 'Projetos de Engenharia Civil em Ribeirão Preto | PER5',
    metaDescription:
      'Projetos de terraplenagem, drenagem, pavimentação e urbanismo para obras em Ribeirão Preto, com memorial de cálculo e ART. Atenção à reservação de águas pluviais e ao subleito arenoso da região.',
    keywords:
      'engenharia civil Ribeirão Preto, projeto de drenagem Ribeirão Preto, reservatório de retenção Ribeirão Preto, terraplenagem Ribeirão Preto, pavimentação em solo arenoso, projeto urbanístico Ribeirão Preto, loteamento Ribeirão Preto',
    eyebrow: 'Ribeirão Preto, SP · DDD 16',
    h1: 'Projetos de Engenharia Civil em Ribeirão Preto',
    heroParagraphs: [
      'A PER5 desenvolve projetos de infraestrutura civil para obras em Ribeirão Preto: terraplenagem, drenagem pluvial, pavimentação e projeto urbanístico, com memorial de cálculo e ART.',
      'A empresa é sediada em Campinas e atende obras em todo o Brasil, com a mesma equipe técnica em qualquer região. Em Ribeirão Preto a drenagem pesa mais do que a média: solo arenoso, chuvas concentradas e a exigência de reservação de águas pluviais mudam tanto o dimensionamento quanto a estratégia de aprovação.',
    ],

    localContext: {
      economy:
        'Ribeirão Preto é o centro do complexo sucroenergético e do agronegócio paulista, com forte setor de saúde, educação e serviços. O reflexo na construção aparece num mercado imobiliário aquecido, com loteamentos horizontais de grande porte na zona sul e demanda constante de infraestrutura para condomínios fechados e áreas comerciais.',
      terrain:
        'O relevo é suave, com terreno plano a levemente ondulado, o oposto do que se encontra em Sorocaba ou no Vale do Paraíba. O ponto crítico aqui está no solo, predominantemente arenoso, de alta permeabilidade e baixa coesão, sobre a área de recarga do Aquífero Guarani. Isso afeta duas frentes ao mesmo tempo: o subleito da pavimentação, que exige tratamento cuidadoso, e a drenagem, que precisa lidar com chuvas concentradas em solo que erode com facilidade.',
      corridors: [
        'Rodovia Anhanguera (SP-330)',
        'Rodovia Antônio Machado Sant’Anna (SP-255)',
        'Rodovia Cândido Portinari (SP-334)',
        'Rodovia Attílio Balbo (SP-322)',
      ],
      regulatory: [
        'Plano Diretor e lei de parcelamento do solo, com exigências de infraestrutura para loteamento',
        'Exigência municipal de reservação e retenção de águas pluviais, tema recorrente na aprovação de empreendimentos',
        'Área de recarga do Aquífero Guarani, que torna a infiltração e a proteção do lençol um condicionante de projeto',
        'Comitê de Bacia Hidrográfica do Pardo (CBH-Pardo), outorga do DAEE e licenciamento CETESB conforme o porte',
      ],
    },

    demandProfile: [
      {
        demand: 'Drenagem com reservatório de retenção',
        whyHere:
          'Chuva concentrada, solo permeável e exigência municipal de reservação colocam o dispositivo de retenção no centro do projeto em Ribeirão Preto. O dimensionamento do volume de reservação ocupa área e muitas vezes acaba definindo o arranjo do empreendimento inteiro.',
      },
      {
        demand: 'Pavimentação sobre subleito arenoso',
        whyHere:
          'O solo arenoso da região tem baixa coesão e responde mal a dimensionamento genérico. O pacote estrutural precisa ser calculado para essa condição de subleito, sob risco de deformação precoce mesmo em pavimento novo.',
      },
      {
        demand: 'Terraplenagem de gleba extensa para loteamento',
        whyHere:
          'Os loteamentos horizontais da região ocupam áreas grandes em relevo suave. O desafio não está em vencer desnível e sim em distribuir volume: em terreno plano, pequenas variações de cota multiplicam o volume de terra movimentada por causa da área envolvida.',
      },
      {
        demand: 'Controle de erosão em área de expansão urbana',
        whyHere:
          'Solo arenoso somado a escoamento concentrado produz erosão com facilidade. Em glebas recém-abertas, a proteção do terreno precisa estar no projeto de drenagem desde o início, e não aparecer depois como correção.',
      },
    ],

    remoteDelivery: {
      steps: [
        {
          title: 'Base de projeto',
          desc: 'Levantamento planialtimétrico como ponto de partida. Não havendo, especificamos o escopo para contratação de topógrafo em Ribeirão Preto e conferimos o material recebido.',
        },
        {
          title: 'Estudo hidrológico e exigência de reservação',
          desc: 'Em Ribeirão Preto essa etapa vem cedo. Levantamos a exigência municipal de retenção aplicável ao empreendimento e dimensionamos o volume de reservação antes de fechar o arranjo, porque ele ocupa área e afeta o projeto inteiro.',
        },
        {
          title: 'Desenvolvimento e checagens',
          desc: 'Pontos de validação por videoconferência, com o material aberto na tela.',
        },
        {
          title: 'Entrega e protocolo',
          desc: 'Plantas, memorial de cálculo e ART prontos para protocolo, com suporte para exigências do órgão aprovador.',
        },
      ],
      needsLocalPresence: [
        'Levantamento topográfico da gleba',
        'Sondagem e caracterização do subleito, decisiva em solo arenoso',
        'Vistoria de patologia construtiva',
        'Acompanhamento de execução',
      ],
      howWeHandleThat:
        'Executados em visita técnica ou contratados de parceiro local, com escopo especificado pela PER5. Em Ribeirão Preto damos atenção especial à caracterização do subleito, que é o ensaio capaz de evitar um pacote de pavimentação mal dimensionado para solo de baixa coesão.',
    },

    comparison: sharedComparison('Ribeirão Preto'),

    faq: [
      {
        q: 'A PER5 atende obras em Ribeirão Preto?',
        a: 'Sim. A sede fica em Campinas e o atendimento cobre todo o Brasil. Em Ribeirão Preto o projeto é conduzido pela nossa equipe, com reuniões técnicas por videoconferência e visita ao terreno quando o projeto exige leitura presencial.',
      },
      {
        q: 'O projeto de drenagem contempla o reservatório de retenção exigido pelo município?',
        a: 'Sim. A reservação de águas pluviais é tratada como parte central do projeto em Ribeirão Preto, com dimensionamento a partir de estudo hidrológico. Levantamos a exigência aplicável ao seu empreendimento logo no início, porque o volume de reservação ocupa área e influencia o arranjo do projeto como um todo.',
      },
      {
        q: 'O solo arenoso da região muda o projeto de pavimentação?',
        a: 'Muda o dimensionamento do pacote estrutural. Subleito arenoso tem baixa coesão, então o projeto precisa partir da caracterização real do solo, obtida por ensaio, e não de valores genéricos. É o que separa um pavimento que dura de um que deforma nos primeiros anos.',
      },
      {
        q: 'Vocês fazem projeto de infraestrutura para loteamento em Ribeirão Preto?',
        a: 'Sim: terraplenagem, drenagem pluvial, pavimentação e projeto urbanístico, entregues compatibilizados entre si e com ART. É a combinação mais pedida na região por conta do volume de loteamentos horizontais.',
      },
      {
        q: 'Como funciona a comunicação durante o projeto?',
        a: 'Contato direto com o engenheiro responsável, com pontos de checagem por videoconferência definidos em contrato. Sem intermediário comercial no meio e sem depender de agenda de deslocamento.',
      },
    ],

    nearbySlugs: ['bauru', 'sao-jose-dos-campos'],
  },

  // ── BAURU ───────────────────────────────────────────────────
  {
    slug: 'bauru',
    city: 'Bauru',
    uf: 'SP',
    ddd: '14',
    region: 'Centro-oeste paulista',
    path: '/engenharia-civil/cidades/bauru',
    updated: '2026-09-08',
    geo: { lat: -22.3145, lng: -49.0606 },
    distanceFromCampinasKm: 230,
    serviceMode: 'remoto',

    metaTitle: 'Projetos de Engenharia Civil em Bauru | PER5',
    metaDescription:
      'Projetos de terraplenagem, drenagem, pavimentação e urbanismo para obras em Bauru e no centro-oeste paulista, com memorial de cálculo e ART. Atenção ao controle de erosão em solo arenoso.',
    keywords:
      'engenharia civil Bauru, projeto de drenagem Bauru, controle de erosão Bauru, terraplenagem Bauru, pavimentação Bauru, projeto urbanístico Bauru, engenheiro civil centro-oeste paulista',
    eyebrow: 'Bauru, SP · DDD 14',
    h1: 'Projetos de Engenharia Civil em Bauru',
    heroParagraphs: [
      'A PER5 desenvolve projetos de infraestrutura civil para obras em Bauru: terraplenagem, drenagem pluvial, pavimentação e projeto urbanístico, com entrega técnica completa e ART.',
      'A empresa é sediada em Campinas e atende obras em todo o Brasil, com a mesma equipe técnica em qualquer região. Em Bauru o solo arenoso do Grupo Bauru coloca o controle de erosão no centro do projeto de drenagem, e é esse o condicionante que mais distingue a engenharia local.',
    ],

    localContext: {
      economy:
        'Bauru é um entroncamento rodoferroviário histórico e polo regional de serviços do centro-oeste paulista, com presença de distribuição, logística e agroindústria. A demanda de infraestrutura vem tanto de área logística junto aos eixos quanto da expansão urbana do município e das cidades da região que gravitam em torno dele.',
      terrain:
        'O município está no Planalto Ocidental Paulista, com relevo de colinas amplas e solos arenosos originados das formações do Grupo Bauru. Essa característica geológica comanda o projeto local: areia fina pouco coesa erode com facilidade sob escoamento concentrado, e a cidade tem histórico conhecido de processos erosivos urbanos. Drenagem em Bauru se projeta pensando em controle de velocidade e dissipação, e não só em vazão.',
      corridors: [
        'Rodovia Marechal Rondon (SP-300)',
        'Rodovia Comandante João Ribeiro de Barros (SP-225)',
        'Rodovia Cesário José de Castilho (SP-321)',
        'Entroncamento ferroviário da Malha Paulista, historicamente estruturante da cidade',
      ],
      regulatory: [
        'Plano Diretor e legislação municipal de parcelamento do solo',
        'Diretrizes municipais de drenagem urbana, com atenção a áreas de risco de erosão',
        'Comitê de Bacia Hidrográfica do Tietê-Batalha (CBH-TB) como referência de bacia',
        'Outorga do DAEE para intervenção em recursos hídricos e licenciamento CETESB conforme o porte',
      ],
    },

    demandProfile: [
      {
        demand: 'Drenagem com dissipação de energia e controle de erosão',
        whyHere:
          'No solo arenoso do Grupo Bauru, água concentrada abre sulco rapidamente e sulco vira voçoroca. O projeto precisa dissipar energia ao longo do percurso e proteger o ponto de lançamento. Em outras regiões isso é refinamento; em Bauru é requisito.',
      },
      {
        demand: 'Terraplenagem com proteção de talude',
        whyHere:
          'Talude de corte em areia fina não se sustenta com a mesma inclinação adotada em solo argiloso. A definição de inclinação e de proteção superficial precisa considerar a erodibilidade real do material local.',
      },
      {
        demand: 'Pavimentação de pátio e acesso logístico',
        whyHere:
          'A vocação de entroncamento coloca carga pesada em pátios e acessos. Sobre subleito arenoso, o pacote estrutural precisa ser dimensionado para essa combinação específica de tráfego e solo.',
      },
      {
        demand: 'Infraestrutura de loteamento em área de expansão',
        whyHere:
          'A expansão urbana de Bauru avança sobre glebas de solo suscetível. Terraplenagem, drenagem e pavimentação precisam ser resolvidas juntas, porque solução isolada em um desses projetos costuma transferir o problema de erosão para o outro.',
      },
    ],

    remoteDelivery: {
      steps: [
        {
          title: 'Base de projeto',
          desc: 'Levantamento planialtimétrico como ponto de partida. Quando não existe, especificamos o escopo para contratação local e conferimos o material antes de iniciar.',
        },
        {
          title: 'Leitura do solo e do risco de erosão',
          desc: 'Em Bauru essa leitura vem antes do traçado. A erodibilidade do solo condiciona inclinação de talude, velocidade admissível na rede e a solução no ponto de lançamento.',
        },
        {
          title: 'Desenvolvimento e checagens',
          desc: 'Validações por videoconferência em pontos combinados, com o projeto aberto na tela.',
        },
        {
          title: 'Entrega e protocolo',
          desc: 'Plantas, memorial e ART em formato pronto para protocolo, com suporte para exigências do órgão aprovador.',
        },
      ],
      needsLocalPresence: [
        'Levantamento topográfico da gleba',
        'Sondagem e caracterização do solo, essencial pela erodibilidade local',
        'Vistoria de processo erosivo ou de patologia já instalada',
        'Acompanhamento de execução',
      ],
      howWeHandleThat:
        'Executados em visita técnica ou contratados de parceiro local, com escopo definido pela PER5. Onde já existe processo erosivo instalado, a inspeção presencial é indispensável e precede qualquer proposta de solução. Diagnóstico de erosão não se faz por foto.',
    },

    comparison: sharedComparison('Bauru'),

    faq: [
      {
        q: 'A PER5 atende obras em Bauru?',
        a: 'Sim. A sede fica em Campinas e o atendimento cobre todo o Brasil. Em Bauru o projeto é conduzido pela nossa equipe, com visita técnica agendada quando o terreno exige leitura presencial, o que é comum onde já existe processo erosivo instalado.',
      },
      {
        q: 'Por que a erosão é um tema tão presente nos projetos em Bauru?',
        a: 'Pela geologia local. Os solos arenosos do Grupo Bauru têm baixa coesão e alta erodibilidade, e a cidade tem histórico de processos erosivos urbanos. Por isso o projeto de drenagem local trabalha com controle de velocidade, dissipação de energia e proteção do ponto de lançamento, além do dimensionamento de vazão.',
      },
      {
        q: 'Vocês fazem projeto de contenção e proteção de talude?',
        a: 'Sim, incluindo gabião e muro de arrimo quando a solução exige. Em solo arenoso a definição de inclinação de talude e de proteção superficial parte da caracterização do material, obtida por sondagem, e não de valores adotados por analogia.',
      },
      {
        q: 'Dá para diagnosticar um processo erosivo já existente à distância?',
        a: 'Não com a confiabilidade necessária. Diagnóstico de erosão instalada exige inspeção presencial, e nesse caso a visita técnica é condição para propor solução. O projeto que vem depois segue normalmente, mas o diagnóstico inicial precisa de alguém no local.',
      },
      {
        q: 'O projeto vem compatibilizado entre as disciplinas?',
        a: 'Sim. Terraplenagem, drenagem e pavimentação são desenvolvidas em conjunto, o que em Bauru importa mais do que a média: resolver uma delas isoladamente costuma empurrar o problema de erosão para a seguinte.',
      },
    ],

    nearbySlugs: ['ribeirao-preto', 'sorocaba'],
  },
];

export function getCityLanding(slug: string): CityLandingData | undefined {
  return cityLandings.find((c) => c.slug === slug);
}

export const SERVICE_MODE_LABEL: Record<CityLandingData['serviceMode'], string> = {
  remoto: 'Projeto + visita sob demanda',
  'remoto-com-visita-pontual': 'Projeto + visita sob demanda',
};
