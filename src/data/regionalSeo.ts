export interface RegionalFaqItem {
  q: string;
  a: string;
}

export interface RegionalTopic {
  title: string;
  paragraphs: string[];
  bullets: string[];
}

export interface RegionalSeoData {
  slug: 'regiao-19' | 'sao-paulo' | 'brasil';
  path: string;
  navLabel: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  eyebrow: string;
  h1: string;
  heroParagraphs: string[];
  coverageTitle: string;
  coverageNote: string;
  coverageAreas: string[];
  engenharia: RegionalTopic;
  patologia: RegionalTopic;
  consultoria: RegionalTopic;
  faq: RegionalFaqItem[];
  areaServed: { type: 'City' | 'State' | 'Country'; name: string };
}

export const regionalSeoData: RegionalSeoData[] = [
  {
    slug: 'regiao-19',
    path: '/engenharia-civil/regiao-19',
    navLabel: 'Região de Campinas (DDD 19)',
    metaTitle: 'Engenharia Civil e Patologia das Obras em Campinas | PER5',
    metaDescription: 'Projetos de engenharia civil, laudos de patologia das obras e consultoria técnica em Campinas e região (DDD 19). Atendimento presencial, ART inclusa, engenheiro CREA-SP.',
    keywords: 'engenharia civil Campinas, patologia das obras Campinas, patologia de obras DDD 19, consultoria de engenharia Campinas, laudo técnico de patologia Campinas, engenheiro civil Campinas, projeto de terraplenagem Campinas, topografia Campinas',
    eyebrow: 'Atendimento presencial · Região 19',
    h1: 'Engenharia Civil e Patologia das Obras na Região de Campinas',
    heroParagraphs: [
      'A PER5 é uma empresa de engenharia civil sediada em Campinas, com atendimento presencial em toda a região do DDD 19. Trabalhamos com projetos de infraestrutura, diagnóstico de patologias construtivas e consultoria técnica para quem precisa resolver um problema real de engenharia, não só receber um documento.',
      'Aqui você fala direto com o engenheiro responsável pelo seu caso. Sem despachante, sem intermediário, sem fila de atendimento genérico. A proposta é simples: entender o problema, visitar o local quando for preciso e entregar um projeto ou laudo que realmente sustente a próxima decisão, seja ela técnica, jurídica ou comercial.',
    ],
    coverageTitle: 'Cidades atendidas presencialmente',
    coverageNote: 'Visita técnica com deslocamento próprio da PER5 nos municípios abaixo. Fora dessa área, o atendimento segue remoto com a mesma equipe e o mesmo padrão técnico.',
    coverageAreas: ['Campinas', 'Valinhos', 'Vinhedo', 'Indaiatuba', 'Hortolândia', 'Sumaré', 'Paulínia', 'Americana', 'Jundiaí', 'Itatiba', 'Louveira', 'Monte Mor', 'Nova Odessa', 'Holambra'],
    engenharia: {
      title: 'Projetos de engenharia civil para a região de Campinas',
      paragraphs: [
        'Atendemos loteamentos, condomínios, indústrias e obras viárias com projetos de terraplenagem, drenagem pluvial, pavimentação e urbanismo. Cada projeto sai com memorial de cálculo, plantas compatibilizadas e ART, pronto para protocolo e para execução.',
        'A topografia é um diferencial regional: fazemos levantamento planialtimétrico, locação de obra e retificação de área com equipamento próprio e apoio de drone quando o terreno pede uma leitura mais precisa da volumetria.',
      ],
      bullets: [
        'Projeto de terraplenagem: volumetria, corte e aterro, seções transversais',
        'Projeto de drenagem pluvial e obras de arte',
        'Projeto de pavimentação rígida, flexível, intertravada e permeável',
        'Projeto urbanístico para loteamentos e condomínios',
        'Topografia com drone: levantamento planialtimétrico e locação de obra',
        'Regularização: habite-se, alvará de obra e alvará de demolição',
      ],
    },
    patologia: {
      title: 'Patologia das obras: diagnóstico com visita técnica local',
      paragraphs: [
        'Trinca, infiltração, recalque de fundação, desplacamento de revestimento, umidade ascendente. Problemas construtivos raramente têm uma causa única, e um laudo mal feito custa mais caro do que a própria obra. Por isso a visita técnica presencial faz parte do diagnóstico, não é um item opcional.',
        'O relatório de patologia sai com registro fotográfico, hipótese técnica para a causa da manifestação, indicação de ensaios complementares quando necessário e recomendação de intervenção. Serve tanto para resolver o problema quanto para embasar uma negociação, uma vistoria de garantia ou um processo.',
      ],
      bullets: [
        'Vistoria e diagnóstico técnico com visita ao imóvel ou à obra',
        'Relatório de patologia construtiva assinado, com ART',
        'Identificação de causa: fissuras, infiltrações, recalques, umidade',
        'Laudo para negociação com construtora, seguradora ou processo judicial',
        'Recomendação técnica de intervenção e acompanhamento',
      ],
    },
    consultoria: {
      title: 'Consultoria técnica para construtoras, indústrias e escritórios',
      paragraphs: [
        'Para quem já tem uma equipe própria, a PER5 entra como consultoria técnica pontual: segunda opinião sobre um projeto em andamento, apoio em estudo de viabilidade, elaboração de EIV e RIT, ou suporte em uma etapa específica que exige um especialista dedicado.',
        'Também acompanhamos escritórios de arquitetura e engenharia que precisam de um parceiro técnico para infraestrutura, sem contratar uma equipe interna só para isso.',
      ],
      bullets: [
        'Estudo de viabilidade técnica de terrenos e empreendimentos',
        'EIV — Estudo de Impacto de Vizinhança',
        'RIT — Relatório de Impacto no Trânsito',
        'Segunda opinião técnica sobre projetos existentes',
        'Apoio técnico a escritórios de arquitetura e engenharia',
      ],
    },
    faq: [
      {
        q: 'A PER5 atende presencialmente em toda a região de Campinas?',
        a: 'Sim. Fazemos visita técnica em Campinas e nos municípios vizinhos do DDD 19, como Valinhos, Vinhedo, Indaiatuba, Hortolândia, Sumaré, Paulínia, Americana e Jundiaí. Para localidades fora dessa área, seguimos com atendimento remoto sem perda de qualidade técnica.',
      },
      {
        q: 'O que entra em um laudo de patologia das obras?',
        a: 'O laudo reúne vistoria com registro fotográfico, análise técnica da manifestação patológica, hipótese sobre a causa e recomendação de intervenção. Quando necessário, indicamos ensaios complementares antes de fechar o diagnóstico.',
      },
      {
        q: 'Preciso de um projeto pronto ou só de uma consultoria pontual?',
        a: 'Depende do estágio em que você está. Se já existe um projeto ou uma obra em andamento e a dúvida é específica, a consultoria técnica resolve. Se o trabalho ainda precisa ser desenvolvido do zero, entramos com o projeto completo, com ART.',
      },
      {
        q: 'A PER5 assume a execução da obra?',
        a: 'Não. A PER5 é uma facilitadora de engenharia civil, entrega projeto técnico e diagnóstico, não construção. Isso mantém o trabalho focado na qualidade do projeto e na independência do laudo, sem conflito de interesse com quem executa a obra.',
      },
    ],
    areaServed: { type: 'City', name: 'Campinas' },
  },
  {
    slug: 'sao-paulo',
    path: '/engenharia-civil/sao-paulo',
    navLabel: 'São Paulo',
    metaTitle: 'Consultoria em Engenharia Civil e Patologia das Obras em São Paulo | PER5',
    metaDescription: 'Engenharia civil, patologia das obras e consultoria técnica para São Paulo capital, Grande São Paulo e interior. Projetos com ART, atendimento remoto direto com o engenheiro responsável.',
    keywords: 'engenharia civil São Paulo, patologia das obras São Paulo, consultoria de engenharia São Paulo, laudo técnico de patologia SP, projeto de infraestrutura São Paulo, engenheiro civil São Paulo, consultoria técnica construtora SP',
    eyebrow: 'Atendimento remoto estruturado · Estado de São Paulo',
    h1: 'Consultoria em Engenharia Civil e Patologia das Obras em São Paulo',
    heroParagraphs: [
      'A PER5 atende construtoras, incorporadoras, indústrias e escritórios de todo o estado de São Paulo, da capital ao interior, com o mesmo padrão técnico do atendimento presencial em Campinas. O trabalho acontece de forma remota e estruturada: reunião técnica, briefing detalhado, entrega documentada e contato direto com o engenheiro responsável em cada etapa.',
      'Não é um atendimento genérico à distância. É um processo pensado para funcionar sem visita presencial quando o escopo permite, com a mesma exigência técnica que colocamos em qualquer outro projeto.',
    ],
    coverageTitle: 'Regiões de São Paulo atendidas',
    coverageNote: 'Cobertura remota estruturada em todo o estado. Para demandas que exigem visita técnica presencial na Grande São Paulo, avaliamos caso a caso.',
    coverageAreas: ['São Paulo (capital)', 'Grande São Paulo', 'ABC Paulista', 'Osasco', 'Guarulhos', 'Barueri e Alphaville', 'Sorocaba', 'Ribeirão Preto', 'São José dos Campos', 'Litoral Paulista', 'Interior do estado'],
    engenharia: {
      title: 'Projetos de engenharia civil para empreendimentos em São Paulo',
      paragraphs: [
        'Desenvolvemos projetos de terraplenagem, drenagem pluvial, pavimentação e urbanismo para loteamentos, condomínios, indústrias e obras viárias em qualquer ponto do estado. O fluxo de trabalho é 100% documentado: briefing técnico, entregáveis compatibilizados e ART em todos os projetos.',
        'Para empreendimentos maiores, também entregamos em padrão OpenBIM/IFC quando o projeto exige compatibilização entre disciplinas ou aprovação em processos que já pedem esse formato.',
      ],
      bullets: [
        'Projeto de terraplenagem e movimentação de terra',
        'Projeto de drenagem pluvial e sistemas horizontais',
        'Projeto de pavimentação: rígida, flexível, intertravada e permeável',
        'Projeto urbanístico para loteamentos e condomínios',
        'Estudos e memoriais técnicos compatíveis com órgãos aprovadores de SP',
        'Capacidade OpenBIM / IFC quando o projeto exige',
      ],
    },
    patologia: {
      title: 'Patologia das obras à distância, com critério técnico',
      paragraphs: [
        'Analisamos registros fotográficos, plantas, histórico de manutenção e relatos técnicos para montar o diagnóstico preliminar de manifestações patológicas em edificações e obras de infraestrutura. Quando o caso exige inspeção local, orientamos um responsável técnico em campo ou avaliamos a viabilidade de uma visita pontual.',
        'O relatório final segue o mesmo rigor de qualquer laudo da PER5: causa provável da patologia, evidências que sustentam a conclusão e recomendação de intervenção, com ART.',
      ],
      bullets: [
        'Análise técnica preliminar de manifestações patológicas',
        'Relatório de patologia construtiva com ART',
        'Apoio técnico remoto para inspeção conduzida em campo',
        'Laudo para negociação, garantia de obra ou uso jurídico',
      ],
    },
    consultoria: {
      title: 'Consultoria técnica para construtoras e indústrias em SP',
      paragraphs: [
        'Construtoras e incorporadoras que operam em São Paulo usam a PER5 como consultoria de infraestrutura para etapas específicas: viabilidade de terreno, EIV, RIT ou revisão técnica de um projeto que já está em desenvolvimento internamente.',
        'Funciona bem também para escritórios de arquitetura que precisam de um parceiro técnico de infraestrutura civil sem montar uma equipe interna para isso.',
      ],
      bullets: [
        'Estudo de viabilidade técnica de terrenos',
        'EIV — Estudo de Impacto de Vizinhança',
        'RIT — Relatório de Impacto no Trânsito',
        'Revisão técnica de projetos em desenvolvimento',
        'Suporte contínuo a escritórios parceiros',
      ],
    },
    faq: [
      {
        q: 'É possível contratar um projeto de engenharia civil em São Paulo sem visita presencial?',
        a: 'Sim, para a maior parte dos escopos. O trabalho remoto da PER5 é estruturado com briefing técnico detalhado, reuniões por vídeo e entregas documentadas, o que cobre a maioria dos projetos de terraplenagem, drenagem, pavimentação e urbanismo sem necessidade de visita.',
      },
      {
        q: 'Como funciona um diagnóstico de patologia sem visita presencial em São Paulo?',
        a: 'Trabalhamos com registro fotográfico detalhado, plantas e histórico do imóvel para montar uma análise técnica preliminar. Quando o caso exige, orientamos a inspeção em campo ou avaliamos com o cliente a viabilidade de uma visita pontual.',
      },
      {
        q: 'A PER5 atende só grandes construtoras?',
        a: 'Não. Atendemos construtoras, incorporadoras, indústrias, loteadoras e escritórios de arquitetura de portes diferentes. O critério para aceitar um projeto é a viabilidade técnica do escopo, não o tamanho do cliente.',
      },
      {
        q: 'O projeto entregue tem validade técnica e jurídica em São Paulo?',
        a: 'Sim. Todo projeto e laudo da PER5 é entregue com ART, o que garante a responsabilidade técnica do engenheiro responsável e a validade do documento perante os órgãos competentes.',
      },
    ],
    areaServed: { type: 'State', name: 'São Paulo' },
  },
  {
    slug: 'brasil',
    path: '/engenharia-civil/brasil',
    navLabel: 'Todo o Brasil',
    metaTitle: 'Engenharia Civil, Patologia das Obras e Consultoria Técnica em Todo o Brasil | PER5',
    metaDescription: 'Projetos de engenharia civil, diagnóstico de patologia das obras e consultoria técnica remota para todo o Brasil. Acesso direto ao engenheiro responsável, ART inclusa em todos os projetos.',
    keywords: 'engenharia civil remota Brasil, patologia das obras Brasil, consultoria de engenharia civil remota, projeto de infraestrutura remoto, engenheiro civil online, consultoria técnica construtora Brasil, laudo técnico remoto engenharia',
    eyebrow: 'Atendimento 100% remoto · Todo o Brasil',
    h1: 'Projetos de Engenharia Civil e Consultoria Técnica para Todo o Brasil',
    heroParagraphs: [
      'A PER5 entrega projetos de infraestrutura civil, diagnóstico de patologia das obras e consultoria técnica para clientes em qualquer estado do Brasil, com o mesmo padrão de quem tem uma equipe de engenharia dentro de casa. A distância não muda a forma como o trabalho é conduzido: briefing técnico, contato direto com o engenheiro responsável e entrega documentada em cada etapa.',
      'Trabalhamos com metodologia digital desde o primeiro contato: reuniões por vídeo, compartilhamento de arquivos técnicos e revisão colaborativa do projeto, sem depender de deslocamento para manter o rigor técnico.',
    ],
    coverageTitle: 'Atendimento remoto em todas as regiões do país',
    coverageNote: 'Atuação estruturada em todas as regiões do Brasil. A PER5 também mantém atendimento presencial na região de Campinas, SP.',
    coverageAreas: ['Sudeste', 'Sul', 'Centro-Oeste', 'Nordeste', 'Norte', 'Capitais e regiões metropolitanas', 'Cidades do interior'],
    engenharia: {
      title: 'Projetos de engenharia civil com entrega 100% remota',
      paragraphs: [
        'Terraplenagem, drenagem pluvial, pavimentação e urbanismo, desenvolvidos remotamente com a mesma estrutura de entregáveis de qualquer projeto da PER5: memorial de cálculo, plantas compatibilizadas, ART e cronograma real, definido em contrato.',
        'Loteadoras, indústrias e construtoras que operam em mais de um estado usam esse modelo justamente para manter um único padrão técnico em projetos espalhados pelo país, em vez de contratar equipes diferentes por região.',
      ],
      bullets: [
        'Projeto de terraplenagem com volumetria e seções técnicas',
        'Projeto de drenagem pluvial horizontal',
        'Projeto de pavimentação rígida, flexível, intertravada e permeável',
        'Projeto urbanístico e geometria viária',
        'Estudos de viabilidade técnica remota',
        'Padrão OpenBIM / IFC quando o projeto exige',
      ],
    },
    patologia: {
      title: 'Diagnóstico de patologia das obras à distância',
      paragraphs: [
        'Para clientes fora da região de Campinas, o diagnóstico de patologia parte de um levantamento remoto detalhado: fotos organizadas por ponto de interesse, plantas, histórico da edificação e relato técnico do problema. A partir disso, montamos a análise preliminar e orientamos o próximo passo, seja um ensaio complementar ou uma inspeção conduzida por um profissional local.',
        'O objetivo é sempre o mesmo, em qualquer estado: identificar a causa real da manifestação patológica, não só descrever o sintoma.',
      ],
      bullets: [
        'Levantamento remoto estruturado para diagnóstico preliminar',
        'Relatório técnico de patologia construtiva com ART',
        'Orientação para inspeção em campo quando necessário',
        'Laudo aplicável a negociação, garantia ou processo técnico',
      ],
    },
    consultoria: {
      title: 'Consultoria técnica remota para construtoras e indústrias',
      paragraphs: [
        'Empresas com operação nacional contratam a PER5 como consultoria técnica de infraestrutura para revisar projetos, apoiar estudos de viabilidade ou assumir demandas pontuais em obras espalhadas por diferentes estados, sem precisar montar uma equipe de engenharia própria em cada praça.',
        'Esse modelo também atende escritórios de arquitetura e engenharia que buscam um parceiro técnico de infraestrutura para projetos específicos, com previsibilidade de prazo e acesso direto ao engenheiro responsável.',
      ],
      bullets: [
        'Estudo de viabilidade técnica remoto',
        'Revisão técnica de projetos de infraestrutura',
        'Apoio pontual a equipes internas de engenharia',
        'Parceria técnica com escritórios de arquitetura e engenharia',
      ],
    },
    faq: [
      {
        q: 'A PER5 realmente entrega projetos completos sem visita presencial?',
        a: 'Sim, para a grande maioria dos escopos de terraplenagem, drenagem, pavimentação e urbanismo. O processo remoto inclui briefing técnico detalhado, reuniões por vídeo e revisão documentada, o suficiente para conduzir o projeto do início ao fim.',
      },
      {
        q: 'Como a PER5 garante a qualidade técnica de um projeto remoto?',
        a: 'O processo segue a mesma estrutura de qualquer projeto da empresa: levantamento de requisitos, desenvolvimento técnico, revisão e entrega com ART. A diferença é só o canal de comunicação, não o rigor do trabalho.',
      },
      {
        q: 'É possível contratar consultoria pontual em vez de um projeto completo?',
        a: 'Sim. Muitos clientes com operação em mais de um estado usam a PER5 para revisar um projeto existente, apoiar um estudo de viabilidade ou resolver uma etapa específica, sem contratar o desenvolvimento completo.',
      },
      {
        q: 'A ART do projeto vale em qualquer estado do Brasil?',
        a: 'A ART é emitida conforme as exigências do CREA competente para cada projeto. Isso é avaliado caso a caso já na proposta, para que a documentação técnica esteja correta desde o início.',
      },
    ],
    areaServed: { type: 'Country', name: 'Brasil' },
  },
];

export function getRegionalSeoBySlug(slug: string) {
  return regionalSeoData.find((r) => r.slug === slug);
}
