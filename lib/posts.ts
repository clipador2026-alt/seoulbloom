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
  },
  {
    "slug": "como-escrever-resenha-de-dorama",
    "title": "Como escrever uma resenha de dorama sem spoilers",
    "description": "Um guia para analisar personagens, roteiro, ritmo e emoções sem estragar a experiência de quem ainda vai assistir.",
    "category": "doramas",
    "date": "2026-10-25",
    "sections": [
      {
        "heading": "Uma resenha é mais do que dizer se você gostou",
        "paragraphs": [
          "Terminar um dorama costuma deixar uma mistura de emoções. Às vezes queremos indicar a história para todo mundo; em outras, ficamos pensando no que poderia ter sido melhor. Escrever uma resenha é uma maneira de organizar essas impressões e ajudar outra pessoa a decidir se aquela produção combina com seus interesses.",
          "Uma boa resenha não precisa fingir neutralidade. Ela pode ter opinião e personalidade, desde que deixe claro o que é impressão pessoal e o que é informação sobre a obra. O objetivo não é provar que uma série é boa ou ruim para todas as pessoas, mas explicar como ela funciona e por que causou determinada reação."
        ]
      },
      {
        "heading": "Comece com uma ficha básica e confiável",
        "paragraphs": [
          "Antes de avaliar a história, registre o título pelo qual ela é conhecida no Brasil, o título original quando disponível, o gênero, o ano de lançamento e a quantidade de episódios. Se citar elenco, direção ou roteiro, confira os créditos oficiais da produção ou a página da distribuidora.",
          "Não copie automaticamente fichas publicadas em redes sociais. Informações sobre plataformas, dublagem e disponibilidade mudam ao longo do tempo. Caso você indique onde assistir, informe que o catálogo deve ser consultado no momento da leitura.",
          "Essa ficha é especialmente útil para quem chega ao blog procurando uma recomendação rápida. Ela oferece contexto sem revelar nenhum acontecimento importante."
        ]
      },
      {
        "heading": "Explique a premissa, não a solução do conflito",
        "paragraphs": [
          "A sinopse da sua resenha deve responder a três perguntas: quem está no centro da história, qual é o conflito inicial e que tipo de experiência o público pode esperar. Você pode falar sobre uma amizade improvável, um desafio profissional ou um mistério sem revelar como tudo termina.",
          "Evite descrever reviravoltas, identidades secretas, mortes inesperadas ou decisões do último episódio. Mesmo acontecimentos do meio da temporada podem ser spoilers para quem ainda está escolhendo o que assistir.",
          "Uma técnica simples é imaginar que você está apresentando a série a alguém que nunca viu o trailer. Conte o suficiente para despertar interesse e pare antes de transformar a apresentação em um resumo completo."
        ]
      },
      {
        "heading": "Analise personagens e relações com exemplos gerais",
        "paragraphs": [
          "Pergunte se os protagonistas têm objetivos compreensíveis e se suas escolhas fazem sentido dentro da história. Personagens não precisam ser perfeitos para funcionar: contradições e falhas podem torná-los mais interessantes quando o roteiro trabalha essas características com cuidado.",
          "Observe também os personagens secundários. Eles têm motivações próprias ou aparecem apenas para resolver problemas dos protagonistas? As amizades, os conflitos familiares e as relações profissionais contribuem para o tema central?",
          "Em uma resenha sem spoilers, prefira comentários como 'a amizade ganha espaço ao longo dos episódios' em vez de narrar uma cena específica que muda a relação entre duas pessoas."
        ]
      },
      {
        "heading": "Avalie o ritmo e a construção do roteiro",
        "paragraphs": [
          "Algumas histórias começam de maneira acelerada e depois desaceleram para desenvolver os personagens. Outras reservam as maiores revelações para a reta final. O importante é analisar se esse ritmo combina com a proposta da série, e não exigir que todas sigam o mesmo padrão.",
          "Considere se os conflitos surgem de forma natural, se as decisões têm consequências e se as tramas paralelas recebem atenção suficiente. Uma história pode ser previsível e ainda assim emocionante; o problema aparece quando a previsibilidade impede qualquer envolvimento com os personagens.",
          "Se você sentiu que certos episódios repetiram situações, explique a sensação de maneira concreta, sem entregar eventos decisivos. Isso torna a crítica mais útil do que dizer apenas que a série ficou 'arrastada'."
        ]
      },
      {
        "heading": "Observe fotografia, trilha sonora e ambientação",
        "paragraphs": [
          "A experiência de assistir também é construída por elementos visuais e sonoros. Cores, enquadramentos, cenários, figurinos e música ajudam a definir o clima de uma cena. Uma história intimista pode usar espaços pequenos e silêncio; uma fantasia pode apostar em efeitos visuais e cenários grandiosos.",
          "Você não precisa conhecer termos técnicos de cinema para comentar esses aspectos. Descreva o que percebeu: a fotografia transmite aconchego? A trilha reforça emoções ou aparece em excesso? A ambientação ajuda a entender o universo dos personagens?",
          "Evite afirmar que uma locação é real ou que determinada música foi composta para a série sem confirmar a informação em fontes apropriadas."
        ]
      },
      {
        "heading": "Separe gosto pessoal de recomendação",
        "paragraphs": [
          "Talvez você não goste de romances lentos, mas reconheça que uma produção desenvolveu bem seus personagens. Ou adore uma série apesar de perceber problemas no roteiro. Essas duas avaliações podem coexistir.",
          "Uma conclusão útil explica para quem o dorama pode funcionar: pessoas que gostam de histórias leves, de mistérios complexos, de dramas familiares ou de narrativas com ritmo contemplativo. Também vale dizer quem talvez não aproveite tanto a experiência.",
          "Em vez de uma nota isolada, apresente dois pontos fortes, uma ressalva e uma recomendação de público. Esse pequeno equilíbrio deixa o texto mais honesto e informativo."
        ]
      },
      {
        "heading": "Modelo simples para organizar sua resenha",
        "paragraphs": [
          "Primeiro, apresente os dados essenciais e uma sinopse curta. Depois, escreva um parágrafo sobre os personagens, outro sobre o roteiro e o ritmo e um terceiro sobre os aspectos visuais ou a trilha. Termine explicando o que mais marcou você e para quem recomenda a obra.",
          "Se quiser usar uma escala de avaliação, explique os critérios. Uma nota pode refletir roteiro, atuações, ritmo e impacto emocional, mas não deve parecer uma medida universal de qualidade.",
          "Por fim, revise o texto procurando spoilers involuntários. Confira nomes e créditos e diferencie claramente suas opiniões das informações verificáveis."
        ]
      },
      {
        "heading": "Perguntas frequentes",
        "paragraphs": [
          "Posso fazer uma resenha negativa? Sim. Críticas respeitosas e fundamentadas ajudam leitores a fazer escolhas. Ataques pessoais a artistas ou fãs não acrescentam análise.",
          "Preciso contar o final para explicar minha opinião? Não. É possível avaliar desenvolvimento, tom e coerência sem revelar o desfecho. Se decidir publicar uma análise com spoilers, identifique-a claramente e mantenha-a separada da resenha introdutória.",
          "Preciso ser especialista em cinema? Não. Atenção, curiosidade e disposição para justificar suas impressões já são um ótimo começo."
        ]
      },
      {
        "heading": "Uma boa resenha abre uma conversa",
        "paragraphs": [
          "O melhor resultado de uma resenha não é fazer todo mundo concordar com você. É ajudar leitores a entender o que esperar de uma história e estimular conversas interessantes sobre personagens, escolhas narrativas e emoções.",
          "Com prática, suas análises ganham uma voz própria. E cada texto pode se tornar uma lembrança de como determinado dorama marcou uma fase da sua vida."
        ]
      }
    ]
  },
  {
    "slug": "etiqueta-e-cumprimentos-coreia-do-sul",
    "title": "Cumprimentos e etiqueta na Coreia do Sul: guia para curiosos",
    "description": "Entenda gestos de respeito, formas de tratamento e cuidados ao interpretar costumes vistos em doramas.",
    "category": "cultura",
    "date": "2026-10-25",
    "sections": [
      {
        "heading": "O que os doramas mostram — e o que não mostram",
        "paragraphs": [
          "Quem acompanha séries coreanas provavelmente já percebeu personagens fazendo pequenas reverências, usando diferentes formas de tratamento e prestando atenção à idade ou à posição social de alguém. Esses detalhes podem despertar curiosidade, mas uma cena de ficção não explica sozinha toda a vida cotidiana na Coreia do Sul.",
          "Os costumes variam conforme geração, ambiente, grau de intimidade e situação. Uma reunião de trabalho formal não funciona exatamente como um encontro entre amigos. Por isso, é melhor aprender princípios gerais e observar o contexto do que transformar uma cena de dorama em regra para todas as pessoas.",
          "Este guia apresenta noções introdutórias para quem quer compreender melhor interações sociais e viajar com mais sensibilidade cultural. Não é um manual rígido de comportamento nem substitui orientações de anfitriões e instituições locais."
        ]
      },
      {
        "heading": "Reverências: um gesto com diferentes significados",
        "paragraphs": [
          "Inclinar levemente a cabeça ou o tronco pode acompanhar cumprimentos, agradecimentos e pedidos de desculpas. A profundidade e a formalidade do gesto dependem da situação. Em encontros cotidianos, uma pequena inclinação pode ser suficiente; cerimônias e ocasiões solenes seguem outros padrões.",
          "Você não precisa calcular um ângulo exato para demonstrar respeito. Observar como as pessoas ao redor cumprimentam umas às outras e responder de maneira educada costuma ser mais importante do que tentar reproduzir gestos vistos na televisão.",
          "O aperto de mão também existe, especialmente em contextos profissionais ou internacionais. Em algumas situações, uma reverência discreta acompanha o cumprimento."
        ]
      },
      {
        "heading": "Linguagem formal e informal",
        "paragraphs": [
          "A língua coreana possui formas de fala que expressam diferentes níveis de formalidade e respeito. Isso ajuda a explicar por que personagens podem mudar a maneira de falar dependendo de quem está presente ou de como a relação evolui.",
          "Para iniciantes, é útil reconhecer que a escolha das terminações verbais e das palavras não depende apenas de traduzir 'você' ou 'senhor'. Idade, contexto, familiaridade e relações sociais podem influenciar a forma de expressão.",
          "Ao aprender coreano, comece por saudações educadas e materiais didáticos confiáveis. Não use automaticamente com desconhecidos uma expressão informal que ouviu entre amigos íntimos em uma série."
        ]
      },
      {
        "heading": "Idade e formas de tratamento",
        "paragraphs": [
          "Em muitos contextos, a idade e a senioridade podem influenciar a forma de se dirigir a outra pessoa. Termos familiares e de proximidade aparecem com frequência em doramas, mas seus usos dependem de quem fala, da relação e do contexto.",
          "Isso não significa que todas as interações sejam definidas apenas pela idade. Ambiente profissional, preferência individual e mudanças culturais também importam. A maneira mais segura de se dirigir a alguém é prestar atenção à apresentação da pessoa e seguir orientações quando houver dúvida.",
          "Para quem estuda o idioma, aprender vocabulário junto com exemplos de uso é mais útil do que decorar traduções isoladas."
        ]
      },
      {
        "heading": "Entregar e receber objetos com cuidado",
        "paragraphs": [
          "Em situações mais formais, oferecer ou receber algo usando as duas mãos, ou apoiando uma mão no braço da outra, pode transmitir consideração. O gesto pode aparecer ao trocar cartões, presentes e outros objetos.",
          "O significado não é mecânico: contexto e intenção importam. Um gesto cuidadoso não substitui uma conversa respeitosa, e as práticas podem variar entre famílias, empresas e gerações.",
          "Se estiver visitando o país, observe o comportamento do anfitrião e procure agir de forma atenciosa. Quando não souber o que fazer, perguntar educadamente é melhor do que presumir que existe uma única regra."
        ]
      },
      {
        "heading": "Sapatos e espaços internos",
        "paragraphs": [
          "Em muitas casas coreanas, é costume tirar os sapatos antes de entrar. Alguns restaurantes tradicionais e determinados espaços também podem pedir que visitantes deixem os calçados em uma área indicada.",
          "Nem todo estabelecimento exige isso. Observe a entrada, a presença de sapateiras e as instruções dos responsáveis. Em uma visita a uma residência, siga a orientação do anfitrião.",
          "Uma atitude simples é usar meias confortáveis e fáceis de manter limpas, especialmente se você sabe que vai visitar lugares onde se retiram os sapatos."
        ]
      },
      {
        "heading": "Comportamento à mesa",
        "paragraphs": [
          "Refeições são momentos importantes de convivência, mas não existe uma etiqueta única para todas as famílias e restaurantes. A formalidade de um jantar de negócios pode ser diferente da de um almoço descontraído.",
          "Em contextos tradicionais, a relação com pessoas mais velhas pode influenciar a ordem de certos gestos à mesa. Entretanto, visitantes não precisam adivinhar todas as convenções: observar o grupo e seguir o ritmo dos anfitriões ajuda bastante.",
          "Também vale lembrar que a comida retratada em doramas pode refletir escolhas de produção. Para conhecer melhor a culinária, procure fontes gastronômicas, livros e materiais culturais, além de experimentar receitas com atenção aos ingredientes."
        ]
      },
      {
        "heading": "Respeito em lugares públicos e turísticos",
        "paragraphs": [
          "Ao visitar templos, palácios, museus ou memoriais, confira as regras do local sobre fotografias, silêncio, vestuário e circulação. Um espaço histórico não é apenas cenário para fotos; ele pode ter significado religioso, cultural ou comunitário.",
          "No transporte público e em áreas movimentadas, respeite sinalizações e a organização do espaço. Regras de prioridade, filas e circulação podem ser diferentes daquelas com que você está acostumado.",
          "Se quiser fotografar uma pessoa, peça autorização. Isso vale especialmente em mercados, estabelecimentos pequenos e bairros residenciais que ficaram conhecidos por aparecer em produções audiovisuais."
        ]
      },
      {
        "heading": "Evite generalizações culturais",
        "paragraphs": [
          "Nenhuma série, celebridade ou influenciador representa a experiência de toda uma população. A Coreia do Sul reúne pessoas com hábitos, opiniões e trajetórias diferentes, assim como acontece em qualquer país.",
          "Ao aprender sobre um costume, procure entender em quais situações ele aparece, como mudou ao longo do tempo e quais são as exceções. A curiosidade cultural fica mais rica quando deixa espaço para diversidade e transformação.",
          "Fontes oficiais de turismo, materiais educacionais e relatos contextualizados podem complementar aquilo que você observa na ficção."
        ]
      },
      {
        "heading": "Perguntas frequentes",
        "paragraphs": [
          "Preciso fazer reverência a todas as pessoas? Não há uma resposta única para todos os contextos. Uma saudação educada e atenção ao comportamento local são bons pontos de partida.",
          "É falta de respeito usar linguagem informal em coreano? Pode soar inadequado em certas situações, especialmente com desconhecidos. Se estiver aprendendo, priorize formas educadas.",
          "Todos os lugares exigem tirar os sapatos? Não. Observe as instruções de cada residência ou estabelecimento."
        ]
      },
      {
        "heading": "Curiosidade com respeito é o melhor caminho",
        "paragraphs": [
          "Os detalhes culturais vistos em doramas podem ser o início de um aprendizado muito interessante. Em vez de decorar regras absolutas, tente compreender por que certos gestos são usados e como o contexto modifica seu significado.",
          "Essa postura ajuda tanto quem quer viajar quanto quem apenas deseja assistir a uma série com mais atenção aos pequenos elementos do cotidiano retratado na tela."
        ]
      }
    ]
  }
];
export const getCategory=(slug:string)=>categories.find(c=>c.slug===slug);
