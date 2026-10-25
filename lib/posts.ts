export const categories=[{slug:"doramas",title:"Doramas & Resenhas",description:"Histórias, críticas e recomendações para sua próxima maratona.",emoji:"🎬"},{slug:"cultura",title:"Cultura Coreana",description:"Costumes, experiências e descobertas sobre a Coreia.",emoji:"🌸"},{slug:"locais",title:"Lugares de Doramas",description:"Viaje pelos cenários que aparecem nas telas.",emoji:"📍"},{slug:"guias",title:"Guias & Listas",description:"Dicas para escolher o próximo dorama.",emoji:"📖"}] as const;
export type Category=typeof categories[number]["slug"];
export type Post={slug:string,title:string,description:string,category:Category,date:string,sections:{heading:string,paragraphs:string[]}[]};
export const posts:Post[]=[
  {
    "slug": "primeiro-dorama",
    "title": "Como escolher seu primeiro dorama",
    "description": "Um guia sem spoilers para entrar no universo das séries coreanas.",
    "category": "guias",
    "date": "2026-10-25",
    "sections": [
      {
        "heading": "Por que começar por um dorama pode ser tão divertido?",
        "paragraphs": [
          "Entrar no universo dos doramas é descobrir uma forma diferente de acompanhar histórias. A expressão costuma ser usada no Brasil para falar de séries asiáticas, especialmente as sul-coreanas. Embora muitas pessoas associem o formato ao romance, há produções sobre amizade, família, investigação, fantasia, trabalho, vida escolar e acontecimentos históricos. Isso significa que você não precisa gostar de um único tipo de narrativa para encontrar algo interessante.",
          "Um bom primeiro dorama não é necessariamente o mais famoso da internet. É aquele que desperta sua curiosidade, cabe na sua rotina e oferece uma história que você realmente quer acompanhar. Neste guia, você vai aprender a filtrar opções sem depender de spoilers ou de listas intermináveis."
        ]
      },
      {
        "heading": "1. Escolha o gênero antes de escolher o título",
        "paragraphs": [
          "Pense nos filmes e nas séries que você já gosta. Quem prefere histórias leves pode começar por comédias românticas ou narrativas sobre amizades. Quem gosta de tensão talvez se interesse por suspense, investigação e dramas criminais. Para quem aprecia mundos imaginários, existem produções com elementos sobrenaturais, viagens no tempo e fantasia.",
          "Os dramas históricos, frequentemente chamados de sageuk, podem ser uma boa escolha para quem gosta de figurinos, disputas políticas e histórias ambientadas em outras épocas. Já os dramas cotidianos costumam explorar relações familiares, amadurecimento e desafios profissionais. Não existe gênero obrigatório para iniciantes.",
          "Uma dica útil é escrever três palavras que descrevem o que você procura: por exemplo, 'leve, engraçado e romântico' ou 'mistério, ação e reviravoltas'. Use essas palavras como filtro quando ler sinopses."
        ]
      },
      {
        "heading": "2. Entenda o ritmo e o formato das séries",
        "paragraphs": [
          "Alguns doramas desenvolvem os relacionamentos aos poucos, reservando tempo para apresentar a rotina e as motivações dos personagens. Isso pode parecer diferente do ritmo de certas séries ocidentais. Em vez de julgar a história apenas pelos primeiros minutos, observe se os conflitos e os personagens despertam sua curiosidade.",
          "Muitas produções têm uma temporada com uma quantidade definida de episódios, mas não há uma regra única. Há séries curtas, episódios longos, histórias com mais de uma temporada e produções lançadas semanalmente. Antes de começar, confira quantos episódios estão disponíveis e a duração aproximada de cada um.",
          "Se você tem pouco tempo, pode preferir uma história já concluída. Se gosta de conversar sobre teorias com outras pessoas, acompanhar uma série em lançamento pode ser parte da diversão."
        ]
      },
      {
        "heading": "3. Leia sinopses sem cair em spoilers",
        "paragraphs": [
          "Uma boa sinopse apresenta o conflito central e o tom da obra, mas não precisa revelar os acontecimentos decisivos. Dê preferência à descrição oficial da plataforma de exibição e evite procurar explicações do final antes de assistir.",
          "Comentários de fãs podem ajudar a identificar o clima de uma produção, mas opiniões são subjetivas. Um título considerado emocionante por uma pessoa pode parecer lento para outra. Procure avaliações que expliquem os motivos da opinião sem contar reviravoltas.",
          "Se você é sensível a determinados temas, confira também a classificação indicativa e eventuais avisos de conteúdo. Romance não significa necessariamente uma história sem temas difíceis."
        ]
      },
      {
        "heading": "4. Escolha onde assistir com segurança",
        "paragraphs": [
          "A disponibilidade de cada série depende do país, do período e dos acordos de distribuição. Por isso, uma recomendação feita há meses pode apontar para um catálogo que já mudou. Antes de assinar qualquer serviço por causa de um único título, confirme se ele aparece no catálogo brasileiro.",
          "Dê preferência a plataformas legais e verifique as opções de áudio e legenda. Algumas pessoas gostam de assistir com o áudio original em coreano e legendas em português, enquanto outras preferem dublagem quando disponível. A melhor opção é a que torna a experiência confortável para você.",
          "Também vale conferir se os episódios estão todos liberados ou se existe um calendário de lançamentos. Isso evita a frustração de descobrir, no meio da maratona, que o desfecho ainda não está disponível."
        ]
      },
      {
        "heading": "5. Monte uma lista pequena de possibilidades",
        "paragraphs": [
          "Em vez de salvar cinquenta títulos e não começar nenhum, selecione três opções de gêneros diferentes. Para cada uma, anote o título, a sinopse em uma frase, a plataforma em que você encontrou a série e o motivo do interesse.",
          "Experimente o primeiro episódio de uma opção. Se o tema não prender sua atenção, não há problema em tentar outra. Assistir a doramas deve ser lazer, não uma obrigação para acompanhar tendências.",
          "Uma lista pequena também ajuda a perceber seus gostos. Talvez você descubra que prefere histórias de amadurecimento a romances, ou que gosta de suspense desde que exista espaço para humor. Essas descobertas tornam as próximas escolhas mais fáceis."
        ]
      },
      {
        "heading": "6. Aproveite a cultura sem transformar ficção em regra",
        "paragraphs": [
          "Comida, expressões linguísticas, formas de tratamento e lugares reais podem despertar curiosidade enquanto você assiste. É uma ótima oportunidade para pesquisar mais sobre a Coreia do Sul. Mas lembre-se: uma série é uma obra de ficção, com escolhas de roteiro e personagens específicos.",
          "Nem todo costume mostrado na televisão representa todas as pessoas de um país. Quando algo chamar sua atenção, procure fontes culturais e materiais de turismo confiáveis para conhecer melhor o contexto. Essa curiosidade pode transformar uma simples maratona em uma experiência de aprendizado."
        ]
      },
      {
        "heading": "Perguntas frequentes de quem está começando",
        "paragraphs": [
          "Preciso aprender coreano para assistir? Não. Legendas e, em alguns casos, dublagens tornam muitas produções acessíveis. Aprender algumas palavras pode ser divertido, mas não é necessário.",
          "Todo dorama é romance? Não. O termo abrange uma grande variedade de gêneros e públicos. Você pode encontrar histórias policiais, médicas, familiares, fantásticas e históricas.",
          "É melhor começar pelo dorama mais popular? Não obrigatoriamente. A popularidade pode indicar que muita gente gostou, mas seu gênero preferido e seu tempo disponível são critérios mais úteis."
        ]
      },
      {
        "heading": "Seu próximo passo",
        "paragraphs": [
          "Escolha um gênero, leia duas ou três sinopses oficiais, confira a classificação e verifique onde assistir legalmente no Brasil. Depois, dê uma chance ao episódio inicial e veja se a história combina com o que você procura.",
          "O melhor primeiro dorama é aquele que faz você querer voltar para descobrir o que acontece com os personagens. E, quando terminar, você já terá referências para encontrar o próximo."
        ]
      }
    ]
  },
  {
    "slug": "explorar-cenarios-coreanos",
    "title": "Como explorar cenários de doramas sem sair de casa",
    "description": "Descubra como pesquisar locais de gravação e fazer visitas virtuais.",
    "category": "locais",
    "date": "2026-10-25",
    "sections": [
      {
        "heading": "Por que os cenários chamam tanta atenção?",
        "paragraphs": [
          "Uma rua iluminada à noite, uma praia silenciosa ou um palácio cercado por jardins pode se tornar tão memorável quanto os personagens de uma série. A direção de arte e a fotografia transformam lugares cotidianos em parte da narrativa, despertando a vontade de conhecer o cenário fora da tela.",
          "A boa notícia é que você não precisa comprar uma passagem para começar a explorar. Mapas digitais, imagens panorâmicas, páginas de turismo e vídeos de passeios ajudam a conhecer o ambiente e a planejar uma viagem futura com mais informação.",
          "Neste guia, vamos montar um método de pesquisa para descobrir lugares, conferir se a localização é verdadeira e organizar um roteiro virtual sem confundir ficção com informação turística."
        ]
      },
      {
        "heading": "1. Comece pela cena que ficou na memória",
        "paragraphs": [
          "Em vez de procurar todos os lugares de uma série ao mesmo tempo, escolha uma cena específica: uma caminhada por uma rua comercial, uma conversa diante do mar ou um encontro perto de um monumento. Anote o nome da produção e, se possível, o episódio.",
          "Observe detalhes que ajudam na identificação, como placas, arquitetura, paisagem, nomes de estabelecimentos e pontos de referência. Esses elementos podem ser mais úteis do que uma busca genérica por 'lugar bonito de dorama'.",
          "Evite publicar capturas de tela protegidas por direitos autorais no seu próprio blog sem avaliar as permissões de uso. Para pesquisa pessoal, você pode registrar apenas uma descrição escrita do cenário."
        ]
      },
      {
        "heading": "2. Pesquise com palavras-chave em dois idiomas",
        "paragraphs": [
          "Uma busca em português pode começar por 'locais de gravação' junto ao nome da série. Se os resultados forem poucos, experimente o título internacional acompanhado de 'filming locations' ou 'shooting location'.",
          "Ao encontrar um endereço, confira se o nome do lugar aparece em outras fontes. Páginas oficiais de turismo, sites de municípios, museus e instituições culturais podem ajudar a confirmar a existência e a localização de um ponto turístico.",
          "Tenha cuidado com postagens que repetem a mesma informação sem citar a origem. Um local pode aparecer em listas de fãs mesmo quando a associação com a série não está comprovada."
        ]
      },
      {
        "heading": "3. Conheça os mapas e as visitas virtuais",
        "paragraphs": [
          "Depois de identificar um lugar, abra um serviço de mapas e procure o endereço. A visualização por satélite ajuda a entender a região, enquanto fotografias e panoramas de rua, quando disponíveis, mostram como é o entorno.",
          "Nem todos os locais possuem imagens panorâmicas recentes. Uma rua pode ter mudado, um café pode ter fechado e uma fachada pode ter sido reformada desde a gravação. Por isso, trate a visita virtual como referência, não como garantia de que tudo permanece igual.",
          "Use o mapa para observar também a distância entre pontos de interesse. Mesmo sem viajar, comparar bairros e regiões ajuda a entender melhor a geografia que aparece na tela."
        ]
      },
      {
        "heading": "4. Três tipos de cenário para explorar",
        "paragraphs": [
          "Palácios e espaços históricos: esses locais oferecem uma oportunidade de conhecer arquitetura, jardins e elementos da história coreana. Um exemplo de ponto turístico real é o Palácio Gyeongbokgung, em Seul. A associação de um palácio específico com determinada série deve ser confirmada caso a caso.",
          "Ruas e bairros urbanos: áreas comerciais, mercados e passagens de pedestres ajudam a mostrar o ritmo da cidade. Ao explorar virtualmente, observe a diferença entre avenidas movimentadas e ruas residenciais, sem presumir que todos os bairros tenham a mesma aparência.",
          "Praias e paisagens naturais: o litoral e as montanhas criam atmosferas muito diferentes das cenas urbanas. Pesquise a estação do ano em que uma cena foi gravada, pois a paisagem pode mudar bastante entre o verão e o inverno."
        ]
      },
      {
        "heading": "5. Monte seu próprio roteiro virtual",
        "paragraphs": [
          "Crie uma lista com cinco colunas: nome do lugar, cidade, endereço ou link do mapa, fonte de confirmação e observações. Assim, você consegue voltar às descobertas sem depender de várias abas abertas.",
          "Organize os locais por região. Se dois pontos estão em cidades diferentes, não os coloque automaticamente no mesmo passeio de um dia. O mapa pode ajudar a perceber a distância, mas tempos de deslocamento devem ser consultados quando você realmente estiver planejando a viagem.",
          "Você também pode criar um roteiro temático: palácios, cafés, cenários românticos ou paisagens litorâneas. O objetivo é transformar a curiosidade em uma pesquisa organizada e agradável."
        ]
      },
      {
        "heading": "6. Verifique informações antes de planejar uma visita real",
        "paragraphs": [
          "Um lugar pode existir e ainda assim não receber visitantes. Alguns cenários são propriedades particulares, residências ou empresas com horários limitados. Nunca trate um endereço encontrado em uma publicação de fã como convite para entrar.",
          "Antes de viajar, consulte canais oficiais para verificar funcionamento, reservas, ingressos, regras para fotografias e acessibilidade. Também vale conferir feriados locais e possíveis obras ou eventos que alterem o acesso.",
          "Se o cenário for um comércio, respeite os clientes e funcionários. Se for uma rua residencial, evite barulho, filmagens invasivas e divulgação de informações privadas de moradores."
        ]
      },
      {
        "heading": "7. Use a curiosidade para aprender sobre a Coreia",
        "paragraphs": [
          "A pesquisa por cenários pode levar a assuntos que vão além das séries: transporte público, preservação histórica, culinária regional e diferenças entre cidades. É uma forma de aproximar entretenimento e conhecimento cultural.",
          "Procure distinguir o que você viu na ficção do que as fontes descrevem sobre a vida real. Uma cena romântica gravada em uma praça não conta toda a história daquele lugar, e um cenário de época pode ter sido filmado em uma reconstrução ou em um espaço moderno adaptado para a produção.",
          "Quando encontrar uma informação interessante, guarde a fonte. Isso facilita conferir detalhes depois e compartilhar descobertas com mais responsabilidade."
        ]
      },
      {
        "heading": "Perguntas frequentes",
        "paragraphs": [
          "Posso visitar todos os lugares que aparecem em um dorama? Não necessariamente. Alguns são sets de filmagem, propriedades privadas ou locais temporariamente fechados.",
          "O Street View mostra exatamente o que aparece na série? Nem sempre. As imagens podem ser de outra época, ter ângulos diferentes ou não estar disponíveis para aquele endereço.",
          "Como saber se um lugar realmente foi usado nas gravações? Procure confirmação em materiais oficiais, fontes turísticas confiáveis ou reportagens que identifiquem a produção e o local."
        ]
      },
      {
        "heading": "Comece sua viagem pela tela",
        "paragraphs": [
          "Escolha uma cena marcante, descubra o nome do lugar, confirme a localização e faça uma visita virtual. Depois, salve o endereço e anote o que você aprendeu sobre a região.",
          "Explorar cenários não é apenas encontrar uma paisagem bonita. É perceber como os lugares ajudam a construir histórias — e como a curiosidade por uma série pode abrir portas para conhecer melhor a cultura coreana."
        ]
      }
    ]
  }
];
export const getCategory=(slug:string)=>categories.find(c=>c.slug===slug);
