// import { reject, resolve } from 'core-js/fn/promise';
import { createStore } from 'vuex'
/* Notas:
  Estou assumindo que cada lista de objetos é um array sequencial, 
  de forma que objeto.id é sempre igual ao seu índice no array.
*/
export default createStore({
    state: {
        participant: {
            name: "",
            // documento CPF
            // login: "012.456.789-10",
            // chave única ou código de licença
            accessCode: "abacaxi"
        },
        evaluator: {
            name: "Takagi Massao"
        },
        jobs: [
          {
            id: 0,
            jobTitle: "ENG. AERONÁUTICO",
            jobDescription: "Eu desenvolvo projetos de aviões, helicópteros, satélites, foguetes e naves espaciais. Também faço a manutenção das aeronaves, garantindo eficácia e segurança. Enfim, tudo que envolve a aviação, eu estou dentro!"
          },
          {
            id: 1,
            jobTitle: "ENG. AGRÍCOLA",
            jobDescription: "Sou responsável por aplicar novas técnicas de plantio e colheita nas lavouras, principalmente quando se trata de equipamentos que tenham por objetivo melhorar o processo da agricultura de forma geral."
          },
          {
            id: 2,
            jobTitle: "ENG. AMBIENTAL",
            jobDescription: "Eu estudei muito sobre a preservação dos nossos recursos naturais, como: a água, o ar e o solo. Meu trabalho é garantir que as empresas impactem cada vez menos o meio ambiente de forma prejudicial. Para isso, desenvolvo projetos buscando melhores soluções neste sentido."
          },
          {
            id: 3,
            jobTitle: "ENG. BIOMÉDICA",
            jobDescription: "Eu gosto muito de Engenharia, mas também tenho fascínio pela Medicina. Meu trabalho consiste em desenvolver equipamentos para o uso na medicina, como: respiradores artificiais, aparelhos de hemodiálise, eletrocardiógrafos, etc..."
          },
          {
            id: 4,
            jobTitle: "ENG. CARTOGRÁFICA",
            jobDescription: "Eu capto e analiso dados geográficos para a elaboração de mapas que representem a superfície terrestre. O mapa é fundamental para a estruturação de políticas urbanas e ambientais."
          },
          {
            id: 5,
            jobTitle: "ENG. CIVIL",
            jobDescription: "Eu gosto de projetar, gerenciar e executar obras como casas, edifícios, pontes, viadutos, estradas, barragens, canais e portos. Além disso, eu entendo tudo que se refere a materiais, resistência e processos de construção."
          },
          {
            id: 6,
            jobTitle: "ENG. DA COMPUTAÇÃO",
            jobDescription: "Sou em quem projeta e constrói computadores, periféricos (mouse, teclado, monitor, etc) e sistemas que integram hardware e software (desenvolvimento de programas e aplicativos)."
          },
          {
            id: 7,
            jobTitle: "ENG. DE ALIMENTOS",
            jobDescription: "Eu trabalho em indústria de alimentos. Estudo sobre a fabricação, conservação, estocagem e transporte da indústria até os pontos-de-venda. Gosto de projetar equipamentos, métodos e embalagens mais adequadas."
          },
          {
            id: 8,
            jobTitle: "ENG. ACÚSTICA",
            jobDescription: "Eu desenvolvo técnicas e equipamentos para controlar o ruído ambiental visando ao bem-estar das pessoas. Eu cuido, por exemplo, do isolamento e controle do som em ambientes como indústrias, aeronaves, automóveis e residências."
          },
          {
            id: 9,
            jobTitle: "ENG. DE CONTROLE E AUTOMAÇÃO/MECATRÔNICA",
            jobDescription: "Eu entendo tudo sobre automação. No meu curso aprendi sobre a parte mecânica, elétrica e também computação. Tudo que envolve tornar um equipamento automatizado é comigo. Eu desenvolvo máquinas com o objetivo de industrializar produtos de modo cada vez mais rápido, mais eficiente e com menor custo."
          },
          {
            id: 10,
            jobTitle: "ENG. DE MATERIAIS",
            jobDescription: "Eu pesquiso e crio produtos como: resinas, plásticos, ligas metálicas, cerâmicas, visando a melhor opção para a fabricação e desenvolvimento de produtos. Meu foco é pesquisar novos materiais ou novos usos industriais para os materiais existentes."
          },
          {
            id: 11,
            jobTitle: "ENG. DE MINAS",
            jobDescription: "Eu estudo sobre as minas, se é viável a exploração do depósito mineral, e também sobre as melhores técnicas de extração e aproveitamento de recursos minerais."
          },
          {
            id: 12,
            jobTitle: "ENG. DE PESCA",
            jobDescription: "Eu me interesso pelo cultivo, captura e industrialização de organismos aquáticos. No que se refere à pesca, eu estudo e aplico métodos para localizar, capturar e conservar peixes."
          },
          {
            id: 13,
            jobTitle: "ENG. DE TELECOMUNICAÇÕES",
            jobDescription: "Telecomunicações é o nome do sistema que permite a troca de informações por distâncias significativas. Meu trabalho consiste em garantir a comunicação por meio de sistemas de telefonia, rádio, tv e redes de computadores."
          },
          {
            id: 14,
            jobTitle: "ENGENHARIA DE PRODUÇÃO",
            jobDescription: "Eu trabalho na melhoria contínua dos processos de fabricação de um produto. Meu objetivo, dentro de uma empresa, é sempre melhorar a relação custo-benefício do processo de produção."
          },
          {
            id: 15,
            jobTitle: "ENG. DE SOFTWARE",
            jobDescription: "Eu estudo técnicas e metodologia para construção de sistemas informatizados (programas e aplicativos), utilizando qualquer tipo de dispositivo programável. Meu foco está nas linguagens para criar sistemas de controle, desde domésticos/jogos até controle de satélites."
          },
          {
            id: 16,
            jobTitle: "ENG. ELÉTRICA",
            jobDescription: "O curso que eu fiz é muito amplo! Posso atuar na área de energia (geração, captação e distribuição), na área eletrônica, na automação de processos, e até na área de computação e robótica! Estou em todo lugar praticamente."
          },
          {
            id: 17,
            jobTitle: "ENG. ELETRÔNICA",
            jobDescription: "Eu estudo a metodologia, técnica e conceitos para aplicação de dispositivos eletrônicos (circuito integrados, transistores, diodos, etc...) para construir aparelhos e circuitos que executam funções  das mais variadas. Por exemplo: computador, televisão, radar, aparelhos celulares, jogos eletrônicos, dentre outros."
          },
          {
            id: 18,
            jobTitle: "ENG. FÍSICA",
            jobDescription: "Meu trabalho é aplicar a física em diversas áreas, principalmente no âmbito industrial. Baseada numa ciência natural, a engenharia física procura levar à prática todos os seus conceitos teóricos e experimentais."
          },
          {
            id: 19,
            jobTitle: "ENG. QUÍMICA",
            jobDescription: "Eu trabalho na produção, em grande escala, de produtos que tenham processos químicos na sua fabricação, como: tinta, shampoo, materiais de limpeza, fertilizantes, etc."
          },
          {
            id: 20,
            jobTitle: "ENG. TEXTIL",
            jobDescription: "Eu me ocupo da fabricação de fibras, fios e tecidos, atendendo aos mais variados segmentos da indústria têxtil e de confecção."
          },
          {
            id: 21,
            jobTitle: "ENG. FLORESTAL",
            jobDescription: "Meu trabalho é estudar e analisar a dinâmica das florestas e seus ecossistemas. Fico realizado quando consigo encontrar meios para explorar os recursos florestais, de maneira a não comprometer o ambiente."
          },
          {
            id: 22,
            jobTitle: "ENG. MECÂNICA",
            jobDescription: "Eu gosto de projetar máquinas, equipamentos, veículos, dentre outros equipamentos. Tenho emprego praticamente em todo tipo de indústria."
          },
          {
            id: 23,
            jobTitle: "ESTÉTICA E COSMÉTICA",
            jobDescription: "Aplica produtos cosméticos e emprega técnicas de manipulação e aparelhos em atividades como limpeza da pele, depilação, hidratação, etc. Pode atuar em consultórios de dermatologia e cirurgia plástica."
          },
          {
            id: 24,
            jobTitle: "ENG. BIOQUÍMICA, DE BIOPROCESSOS E DE BIOTECNOLOGIA",
            jobDescription: "Eu tenho afinidade com a área de Exatas e Biológicas. Meu foco está no desenvolvimento e controle de processos biotecnológicos. Posso atuar em diversas áreas, como: farmacêutica, em órgãos de controle ambiental, com biossegurança, em laboratórios de genética, etc."
          },
          {
            id: 25,
            jobTitle: "ENG. METALÚRGICA",
            jobDescription: "Eu desenvolvo, planejo e administro a transformação de metais ferrosos, não ferrosos, com alumínio e cobre em produtos finais, como automóveis, eletrodomésticos, latas de cerveja."
          },
          {
            id: 26,
            jobTitle: "ENG. NAVAL",
            jobDescription: "Eu trabalho com o projeto e construção de barcos e navios do todos os tamanhos e finalidades. Conheço cada componente da embarcação, dos motores aos radares."
          },
          {
            id: 27,
            jobTitle: "MEDICINA VETERINÁRIA",
            jobDescription: "Eu cuido da saúde de qualquer tipo de animais: domésticos, como cães e gatos, ou de criação, como vacas e bois. Também posso atuar na área de inspeção de alimentos de origem animal, em frigoríficos e indústrias alimentícias, por exemplo."
          },
          {
            id: 28,
            jobTitle: "FONOAUDIOLOGIA",
            jobDescription: "Profissional da área da saúde que estuda a comunicação e linguagem. Ele é capaz de diagnosticar e tratar problemas como surdez, gagueira, dicção incorreta, e outras alterações que dificultam a correta comunicação."
          },
          {
            id: 29,
            jobTitle: "EDUCAÇÃO FÍSICA",
            jobDescription: "Este profissional organiza, executa e supervisiona programas de atividades físicas para pessoas ou grupos. Prepara crianças e adultos para as inúmeras modalidades de esporte."
          },
          {
            id: 30,
            jobTitle: "ENG. DE PETRÓLEO E GÁS",
            jobDescription: "Eu estudo as técnicas usadas para a descoberta de poços e jazidas e para a exploração, produção e comercialização de petróleo e gás natural. Meu trabalho costuma ser em petroleiros, refinarias, plataformas marítimas e em petroquímicas."
          },
          {
            id: 31,
            jobTitle: "NUTRIÇÃO",
            jobDescription: "Cuida da saúde através da alimentação. Além de identificar os problemas alimentares, ainda ajuda a corrigir e manter o paciente com hábitos adequados."
          },
          {
            id: 32,
            jobTitle: "ENFERMAGEM",
            jobDescription: "Nos hospitais, verifica o estado de saúde e garante o bem-estar dos pacientes, providenciando, no dia-a-dia, a administração de medicamentos, a troca de curativos, a higiene e a alimentação. Pode trabalhar em empresas, escolas ou, ainda, atendimento domiciliar.É a área responsável por promover a saúde e bem-estar das pessoas com problemas físicos, sensoriais, sociais e motores.  O terapeuta trabalha em clínicas, asilos, hospitais, instituições geriátricas, entre outras. No curso, estuda anatomia, biologia e psicologia."
          },
          {
            id: 33,
            jobTitle: "TERAPIA OCUPACIONAL",
            jobDescription: "Profissional que estuda a composição e os processos produtivos de medicamentos, cosméticos e produtos de higiene, entre outros"
          },
          {
            id: 34,
            jobTitle: "FARMÁCIA",
            jobDescription: "Profissional que investiga a natureza e as causas das doenças humanas. A partir de um levantamento de dados sobre o paciente, define um diagnóstico e determina um tratamento adequado."
          },
          {
            id: 35,
            jobTitle: "MEDICINA",
            jobDescription: "Eu gerencio os recursos e as atividades de uma organização, em busca de maior eficiência e produtividade. Meu objetivo é ajudar a empresa a crescer, ter mais lucro e se destacar no mercado."
          },
          {
            id: 36,
            jobTitle: "ADMINISTRAÇÃO",
            jobDescription: "Estuda e analisa a situação econômico-financeira das diversas nações. Elaboro estudos sobre o perfil econômico, político e cultural dos países, descobrindo quais oferecem as melhores oportunidades de investimentos."
          },
          {
            id: 37,
            jobTitle: "RELAÇÕES INTERNACIONAIS",
            jobDescription: "Estuda, planeja, avalia e executa estratégias em transações comerciais (importações e exportações) entre países ou empresas estrangeiras. Acompanha o seguro, transporte e chegada do produto ao seu destino."
          },
          {
            id: 38,
            jobTitle: "COMÉRCIO EXTERIOR",
            jobDescription: "Atua no combate às desigualdades da sociedade,  analisando, acompanhando e propondo soluções para melhorar as condições de vida tanto de crianças e adolescentes quanto de adultos."
          },
          {
            id: 39,
            jobTitle: "SERVIÇO SOCIAL",
            jobDescription: "Cuida da saúde da boca. Quem abraça esta profissão faz restaurações, extrações e limpeza de dentes, projeta e instala próteses. Pode, também, realizar cirurgias."
          },
          {
            id: 40,
            jobTitle: "ODONTOLOGIA",
            jobDescription: "Cuido da recuperação de pacientes no que diz respeito aos seus movimentos. Atuo tanto na prevenção como na recuperação de lesões musculares."
          },
          {
            id: 41,
            jobTitle: "FISIOTERAPIA",
            jobDescription: "Estudo o comportamento humano, focando na saúde emocional. Posso trabalhar em consultórios, empresas, escolas e hospitais."
          },
          {
            id: 42,
            jobTitle: "PSICOLOGIA RELAÇÕES PÚBLICAS",
            jobDescription: "A sua função é transmitir uma mensagem e imagem positiva da empresa e gerar uma resposta também positiva dos públicos atendidos por ela, o que inclui clientes, fornecedores, colaboradores, sócios, etc."
          },
          {
            id: 43,
            jobTitle: "ECONOMIA DOMÉSTICA",
            jobDescription: "Planeja e gerencia programas e ações sociais nas áreas de alimentação, habitação, saúde, construção, vestuário, direitos do consumidor ou economia familiar. Administra cooperativas, condomínios ou refeitórios."
          },
          {
            id: 44,
            jobTitle: "GEOGRAFIA",
            jobDescription: "Esta profissão lida com o estudo do planeta, do ponto de vista físico e de sua ocupação pelo homem. Ele estuda a superfície, o clima e a vegetação da Terra."
          },
          {
            id: 45,
            jobTitle: "HISTÓRIA",
            jobDescription: "Ciência que estuda, organiza e narra os fatos importantes, o cotidiano e a vida dos povos e da humanidade."
          },
          {
            id: 46,
            jobTitle: "QUÍMICA",
            jobDescription: "O profissional formado em Química estuda a composição e as propriedades da matéria. Na indústria, atua no desenvolvimento de novos materiais e aplica testes de qualidade em produtos."
          },
          {
            id: 47,
            jobTitle: "SECRETARIADO EXECUTIVO",
            jobDescription: "Profissional preparado para assessorar diretamente a executivos, no sentido de assegurar continuidade dos negócios empresariais, participando diretamente na organização e manutenção de suas agendas."
          },
          {
            id: 48,
            jobTitle: "CIÊNCIAS ECONÔMICAS",
            jobDescription: "Profissional que desenvolve planos para resolver problemas financeiros, econômicos e administrativos nos mais diversos setores de produção – comércio, serviços, indústria ou finanças."
          },
          {
            id: 49,
            jobTitle: "ESTATÍSTICA",
            jobDescription: "Ele organiza e analisa as informações obtidas com o objetivo de explicar certos fenômenos econômicos, naturais ou sociais. Ele constrói modelos matemáticos capazes de processar esses dados, realizar análises complexas e cruzar informações."
          },
          {
            id: 50,
            jobTitle: "AGRONOMIA",
            jobDescription: "Atuar na produção agrícola e pecuária, no manejo de recursos naturais e na gestão de agroindústrias. Quem procura esta formação deve gostar de trabalhar no campo e ter contato com rebanhos, lavouras e produtos agrícolas."
          },
          {
            id: 51,
            jobTitle: "ZOOTECNIA",
            jobDescription: "Este profissional cuida de tudo que envolva a criação de animais como bois, vacas, galinhas, etc. Cuida de todos os processos necessários para garantir a produtividade de uma propriedade rural."
          },
          {
            id: 52,
            jobTitle: "OCEANOGRAFIA",
            jobDescription: "Estuda, planeja, projeta pesquisa que visam o aprimoramento racional do meio marinho. Trabalha em projetos de conservação de espécies, estuda as correntes marinhas e os fenômenos climáticos."
          },
          {
            id: 53,
            jobTitle: "ARTES PLÁSTICAS",
            jobDescription: "É a criação de obras, como pinturas ou esculturas. Manuseia vários tipos de materiais, como papel, tinta, gesso, argila, madeira e metais ou programas de computador para representar de forma artística pensamentos e imagens."
          },
          {
            id: 54,
            jobTitle: "ARQUITETURA E URBANISMO",
            jobDescription: "É a arte de projetar e organizar espaços internos e externos, segundo critérios de estética, conforto e funcionalidade. Faz projetos e coordena a construção ou a reforma de casas e edifícios residenciais ou comerciais."
          },
          {
            id: 55,
            jobTitle: "MODA",
            jobDescription: "Lida com a arte de criar e comercializar peças de vestuário e acessórios, de acordo com estilos e tendências. Além de roupas, este profissional pode desenhar, modelar ou fabricar bolsas, calçados, jóias e bijuterias."
          },
          {
            id: 56,
            jobTitle: "FÍSICA",
            jobDescription: "Estudo a relação entre matéria e energia, as leis que regem esta interação e suas propriedades. Por meio dos seus conhecimentos na área de mecânica, física, eletricidade, estatística e matemática, ele busca soluções práticas e precisas."
          },
          {
            id: 57,
            jobTitle: "MATEMÁTICA",
            jobDescription: "Eu uso a lógica para elaborar teorias, testar hipóteses, desenvolver aplicações de cálculos na pesquisa e nas ciências. Além de dar aulas, posso atuar no mercado financeiro e na indústria."
          },
          {
            id: 58,
            jobTitle: "BIOLOGIA",
            jobDescription: "Estudo todos os tipos de vida: flora, fauna, seres humanos e animais. Posso trabalhar como um técnico em instituições ligadas ao meio ambiente, dar aulas e atuar em reservas ecológicas."
          },
          {
            id: 59,
            jobTitle: "FILOSOFIA",
            jobDescription: "É a prática de análise, reflexão e crítica na busca do conhecimento do mundo e do homem. Pode trabalhar em instituições de difusão científica, ou implantar projetos educacionais em escolas."
          },
          {
            id: 60,
            jobTitle: "LETRAS",
            jobDescription: "Estudo, pesquiso e ensino língua portuguesa e estrangeira, assim como a literatura e a cultura de diferentes países. Posso trabalhar como tradutor, intérprete, professor, revisor, etc."
          },
          {
            id: 61,
            jobTitle: "TURISMO",
            jobDescription: "Meu trabalho envolve o planejamento, a organização, a promoção e a divulgação de viagens, eventos e atividades de lazer. Além disso, organizo feiras, congressos e exposições de cunho técnico, cultural ou recreativo."
          },
          {
            id: 62,
            jobTitle: "CIÊNCIAS SOCIAIS",
            jobDescription: "Estudo as sociedades humanas, e posso me habilitar como antropólogo, cientista político ou ainda sociólogo.  Posso trabalhar com campanhas políticas, ações governamentais, planos de desenvolvimento e projetos sociais"
          },
          {
            id: 63,
            jobTitle: "DIREITO",
            jobDescription: "Estudo as sociedades humanas, e posso me habilitar como antropólogo, cientista político ou ainda sociólogo.  Posso trabalhar com campanhas políticas, ações governamentais, planos de desenvolvimento e projetos sociais"
          },
          {
            id: 64,
            jobTitle: "ARTES CÊNICAS / TEATRO",
            jobDescription: "Meu trabalho envolve usar gestos, movimentos e recursos cênicos para transmitir idéias e emoções ao público, divulgando a cultura e fazendo crítica social. Pode atuar em espetáculos e casas noturnas ou em telenovelas e comerciais para a TV"
          },
          {
            id: 65,
            jobTitle: "BIOMEDICINA",
            jobDescription: "O biomédico identifica, classifica e estuda os microrganismos causadores de enfermidades e procura medicamentos e vacinas para combatê-las."
          },
          {
            id: 66,
            jobTitle: "CI*ÊNCIA DA COMPUTAÇÃO",
            jobDescription: "Poderá desenvolver softwares, aplicativos básicos para atuar no desenvolvimento de sistemas. Presta consultoria e suporte, elabora sistemas operacionais, e desenvolve projetos"
          },
          {
            id: 67,
            jobTitle: "EXÉRCITO (CARREIRA MILITAR)",
            jobDescription: "O profissional pode atuar em nível secundário ou superior em artilharia, cavalaria, infantaria, comunicação, engenharia e intendência."
          },
          {
            id: 68,
            jobTitle: "DANÇA",
            jobDescription: "Este profissional cria ou dirige espetáculos de balé para teatro, cinema ou TV. Pode também atuar nas apresentações, só ou com um grupo. Ou, ainda, ministrar aulas em academias de dança e oferecer seu trabalho em Ongs e centros comunitários."
          },
          {
            id: 69,
            jobTitle: "PUBLICIDADE E PROPAGANDA",
            jobDescription: "Meu trabalho envolve planejar e desenvolver campanhas publicitárias, determinando a melhor forma de apresentar o produto, o serviço ou a pessoa ao público, com a finalidade de aumentar as vendas ou transmitir uma boa imagem."
          },
          {
            id: 70,
            jobTitle: "BIBLIOTECONOMIA",
            jobDescription: "Sou responsável pela assificação, organização, conservação e divulgação do acervo de bibliotecas e centros de documentação."
          },
          {
            id: 71,
            jobTitle: "ARQUEOLOGIA",
            jobDescription: "Profissional que lida com o passado, revoluciona teorias e conhecimentos científicos. Busca conhecer a vida e os costumes de civilizações desaparecidas, analisando vestígios deixados por elas."
          },
          {
            id: 72,
            jobTitle: "PEDAGOGIA",
            jobDescription: "Estudo tudo que envolve a educação, o processo de ensino-aprendizagem. Posso atuar como professor do ensino fundamental I ou trabalhar na administração escolar, como orientador educacional, coordenador pedagógico e até diretor."
          },
          {
            id: 73,
            jobTitle: "MÚSICA",
            jobDescription: "Este profissional compõe, interpreta, adapta e rege obras musicais. Pode lecionar, dirigir bandas, reger orquestras ou grupos instrumentais e vocais. Pode se dedicar, ainda, a trabalhar com jingles comerciais."
          },
          {
            id: 74,
            jobTitle: "METEOROLOGIA",
            jobDescription: "Estudo dados relativos à umidade do ar, ao vento, à chuva, e às demais condições que interferem nos fenômenos climáticos. Trabalho com previsões sobre o tempo e o clima, auxiliando na agricultura e aviação, por exemplo."
          },
          {
            id: 75,
            jobTitle: "ASTRONOMIA",
            jobDescription: "Estudo o universo, pesquisa sua composição, as mudanças que ocorrem nos movimentos e acontecimentos que envolvem os astros: lua, sol e planetas. Trabalho em institutos de pesquisa ou em planetários."
          },
          {
            id: 76,
            jobTitle: "BIOTECNOLOGIA E BIOQUÍMICA",
            jobDescription: "Posso desenvolver novas vacinas e medicamentos, assim como criar plantas mais resistentes a pragas ou, ainda, produzir aminoácidos e outros componentes para deixar um alimento mais saboroso."
          },
          {
            id: 77,
            jobTitle: "CINEMA E AUDIOVISUAL",
            jobDescription: "Meu foco é a produção de trabalhos audiovisuais, de caráter artístico, institucional, jornalístico ou de entretenimento."
          },
          {
            id: 78,
            jobTitle: "JORNALISMO",
            jobDescription: "Meu trabalho envolve o levantamento e a divulgação de informações. Produzo reportagens, artigos, sites, informativos ou noticiários de rádio e TV."
          },
          {
            id: 79,
            jobTitle: "CIÊNCIAS CONTÁBEIS",
            jobDescription: "O contador é o profissional responsável pela organização financeira de uma empresa. Ele controla receitas, despesas e lucros da organização."
          },
          {
            id: 80,
            jobTitle: "DESIGN DE INTERIORES (B/T)",
            jobDescription: "É a arte de planejar e arranjar ambientes de acordo com padrões de estética e funcionalidade. Administra o projeto de decoração."
          },
          {
            id: 81,
            jobTitle: "ADMINISTRAÇÃO PÚBLICA",
            jobDescription: "Gerencio organizações do setor público em nível governamental, em agências federais, estaduais ou municipais."
          },
          {
            id: 82,
            jobTitle: "CIÊNCIAS AERONÁUTICAS",
            jobDescription: "No meu curso aprendi tudo sobre aviação, incluindo a pilotagem de aeronaves. Posso trabalhar em vôos comerciais, privados, e também como piloto na área agrícola."
          },
          {
            id: 83,
            jobTitle: "CIÊNCIAS ATUARIAIS",
            jobDescription: "Analisa e quantifica o risco presente nas operações de seguros, previdência complementar, planos de saúde e títulos de capitalização."
          },
          {
            id: 84,
            jobTitle: "ARQUIVOLOGIA",
            jobDescription: "Responde pela identificação, seleção, gerenciamento e restauração de documentos apresentados em formas variadas. Também trabalha com dados administrativos, jurídicos ou históricos/culturais."
          },
          {
            id: 85,
            jobTitle: "ANIMAÇÃO",
            jobDescription: "Dá movimento total ou parcial a produções visuais, sejam elas desenhos, fotografias, massa de modelar ou computação gráfica, para filmes, desenhos animados, curtas-metragens, publicidade, games e aplicativos de celular."
          },
          {
            id: 86,
            jobTitle: "DESIGN",
            jobDescription: "Possuo as técnicas usadas na criação e no desenvolvimento de projetos gráficos e de comunicação visual e na concepção artística de peças e objetos. Pode trabalhar em editoras, agências de design e de publicidade e produtoras de mídia digital."
          },
          {
            id: 87,
            jobTitle: "ECOLOGIA",
            jobDescription: "Estuda as relações entre os seres vivos e o ambiente por eles habitado, visando à preservação dos recursos naturais ou proporcionando meios para sua exploração sustentável."
          },
          {
            id: 88,
            jobTitle: "FOTOGRAFIA",
            jobDescription: "Registra cenas, pessoas ou situações por meio de imagens que contém valor estético ou jornalístico. Pode atuar em campos como: a publicidade, o jornalismo e a arte."
          },
          {
            id: 89,
            jobTitle: "ESPORTE",
            jobDescription: "São profissionais capacitados para treinar e preparar indivíduos e equipes, profissionais e amadores, para competições esportivas. Encontra campo de trabalho em escolas, faculdades e clubes."
          },
          {
            id: 90,
            jobTitle: "MUSICOTERAPIA",
            jobDescription: "Ocupa-se do uso da música e dos sons em tratamentos de reabilitação física, mental e social de indivíduos ou grupos."
          },
          {
            id: 91,
            jobTitle: "NATUROLOGIA APLICADA",
            jobDescription: "É o estudo dos recursos naturais e de seu uso na prevenção e no tratamento da saúde. Suas ferramentas de trabalho são cores, luzes, essências, ervas e massagem. Pode atuar em clínicas, hospitais ou spas."
          },
          {
            id: 92,
            jobTitle: "RÁDIO E TV",
            jobDescription: "É o conjunto de técnicas e atividades ligadas à criação, à produção e à direção de programas de rádio e televisão. Encontra trabalho em emissoras de rádio e de TV, produtoras de vídeo, portais da internet."
          },
          {
            id: 93,
            jobTitle: "GEOLOGIA",
            jobDescription: "Eu estudo os oceanos, relevos, continentes, natureza, plantas, animais e a interação que ocorre entre todos eles. Pode atuar em empresas públicas e privadas do setor mineral, companhias de petróleo, empresas de engenharia e meio ambiente."
          },
          {
            id: 94,
            jobTitle: "GEOFÍSICA",
            jobDescription: "Quem se dedica a esta carreira investiga fenômenos que envolvem eletricidade, gravidade, temperatura ou magnetismo e mede as diversas forças que afetam o solo, a água e a atmosfera em grandes áreas da Terra."
          },
          {
            id: 95,
            jobTitle: "LINGUÍSTICA",
            jobDescription: "Me dedico ao estudo da linguagem verbal, da gramática e da evolução de diferentes idiomas. Pesquiso sobre as línguas faladas nas diversas sociedades atuais e passadas, visando compreender sua estrutura e suas relações com outros idiomas."
          },
          {
            id: 96,
            jobTitle: "OBSTETRÍCIA",
            jobDescription: "Quem abraça esta profissão cuida do atendimento à gestante durante todo o período de pré-natal e parto. Presta assistência no pós-parto às mães e a recém-nascidos durante o período neonatal."
          },
          {
            id: 97,
            jobTitle: "MUSEOLOGIA",
            jobDescription: "São as atividades relativas à organização, à apresentação e à conservação de peças de acervos e coleções. Este profissional pode trabalhar em museus, institutos de pesquisa e universidades."
          },
          {
            id: 98,
            jobTitle: "ARTES VISUAIS",
            jobDescription: "Este profissional tem sua formação centrada nos estudos das mídias audiovisuais: a fotografia, o cinema, o rádio e o áudio, a televisão, o vídeo e as novas mídias."
          },
          {
            id: 99,
            jobTitle: "DESIGN DE GAMES",
            jobDescription: "É a criação e o desenvolvimento de jogos eletrônicos para diferentes mídias, como computador, videogame, celular ou internet."
          },
          {
            id: 100,
            jobTitle: "GASTRONOMIA",
            jobDescription: "Eu estudo as técnicas utilizadas para a preparação de alimentos e bebidas e na gestão de restaurantes."
          },
          {
            id: 101,
            jobTitle: "HISTÓRIA DA ARTE",
            jobDescription: "Especialista na área de cultura e artes. Pode atuar como crítico, gestor, consultor e curador de exposições e eventos culturais e artísticos."
          },
          {
            id: 102,
            jobTitle: "HOTELARIA",
            jobDescription: "Sou responsável pela direção e pelo funcionamento de hotéis, coordenando todos os serviços oferecidos ao hóspede, como acomodação, alimentação, recreação e lazer."
          },
          {
            id: 103,
            jobTitle: "MARKETING",
            jobDescription: "Faz pesquisas de mercado para entender o perfil do consumidor e poder traçar estratégias de comunicação e venda."
          },
          {
            id: 104,
            jobTitle: "PRODUÇÃO CULTURAL",
            jobDescription: "Cria e organiza projetos artísticos e culturais como espetáculos de teatro, dança , festivais e eventos. Ele cuida de todas as etapas, da captação de recursos à realização final."
          },
          {
            id: 105,
            jobTitle: "TRADUÇÃO E INTERPRETAÇÃO",
            jobDescription: "O tradutor faz a versão escrita de livros, documentos e textos em geral de uma língua para outra. O interprete traduz oralmente palestras, discursos, reuniões e videoconferências."
          }
        ],
        // jobs: [{
        //         id: 0,
        //         jobTitle: "Job 1",
        //         jobDescription: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.",
        //     },
        //     {
        //         id: 1,
        //         jobTitle: "Job 2",
        //         jobDescription: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.",
        //     },
        //     {
        //         id: 2,
        //         jobTitle: "Job 3",
        //         jobDescription: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.",
        //     },
        //     {
        //         id: 3,
        //         jobTitle: "Job 4",
        //         jobDescription: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.",
        //     },
        //     {
        //         //jobs[4]
        //         id: 4,
        //         jobTitle: "Job 5",
        //         jobDescription: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.",
        //     }
        // ],
        // ---- invitedJobs[] example ----
        // invitedJobs: [
        //   {
        //       id: 2,
        //       jobTitle: "Job 3"
        //   }
        // ],
        
        invitedJobs: [],
        groups: [],
        // ---- groups[] example ----
        // groups: [
        //   {
        //       id: 0,
        //       groupTitle: "Red",
        //       selectedJobs: [{
        //           jobTitle: 'Job 1',
        //           id: 0
        //         },
        //         {
        //           jobTitle: 'Job 2',
        //           id: 1
        //         }
        //       ],
        //       // -1 for 'disliked', 0 for 'neutral' and 1 for 'favorited'
        //       preference: -1,
        //       justification: "Porque é vermelho é violento"
        //   },
        //   {
        //       id: 1,
        //       groupTitle: "Green",
        //       selectedJobs: [{
        //         jobTitle: 'Job 4',
        //         id: 3
        //       }],
        //       preference: 1,
        //       justification: ""
        //   },          
        //   {
        //     id: 3,
        //     groupTitle: "Blue",
        //     selectedJobs: [
        //       {
        //         jobTitle: 'Job 3',
        //         id: 2
        //       },
        //       {
        //         jobTitle: 'Job 5',
        //         id: 4
        //       }
        //     ],
        //     preference: 1,
        //     justification: "Porque azul é a cor da inovação e tecnologia"
        //   },
        // ],
        // Sugestão de JSON para enviar à API da plataforma de Gestão de Licenças
        // ---- report[] example ----
        // report: {
        //   groups: [
        //     {
        //       id: 0,
        //       groupTitle: "Red",
        //       selectedJobs: [{
        //           jobTitle: 'Job 1',
        //           id: 0
        //         },
        //         {
        //           jobTitle: 'Job 2',
        //           id: 1
        //         }
        //       ],
        //       preference: -1,
        //       justification: "Porque é vermelho é violento"
        //     }
        //   ],
        //   favorites: [
        //     {
        //       id: 1,
        //       groupTitle: "Green",
        //       selectedJobs: [{
        //         jobTitle: 'Job 4',
        //         id: 3
        //       }],
        //       preference: 0,
        //       justification: ""
        //     }
        //   ],
        //   expeled: {
        //     id: 3,
        //     groupTitle: "Blue",
        //     selectedJobs: [
        //       {
        //         jobTitle: 'Job 3',
        //         id: 2
        //       },
        //       {
        //         jobTitle: 'Job 5',
        //         id: 4
        //       }
        //     ],
        //     preference: -1,
        //     justification: "Porque azul é a cor da inovação e tecnologia"
        //   }
        // },
        maxGroupID: 1,
        report: {}
    },
    mutations: {
      nameParticipant(state, name) {
        state.participant.name = name;
      },
      inviteJob(state, payload) {
        if (state.invitedJobs.every( j => j.id !== payload.id)) {
          state.invitedJobs.push(payload);
        }
      },
      uninviteJob(state, jobID) {
        state.invitedJobs = state.invitedJobs.filter( l => l.id != jobID);
      },
      updateInvitedJobs(state, array) {
        state.invitedJobs = array;
      },
      addGroup(state) {
        try {
            var newGroup = {
                id: state.maxGroupID++,
                groupTitle: "",
                selectedJobs: [],
                preference: 0,
                justification: ""
            }
            state.groups.push(newGroup);
        } catch(e) {console.log(e);}
      },
      removeGroup(state, groupID) {
        try {
          state.groups = state.groups.filter(e => e !== groupID);
        } catch(e) {console.log(e);}
      },
      nameGroup(state, payload) {
        state.groups[payload.groupID].groupTitle = payload.groupTitle;
      },
      updateGroups (state, payload) {
        state.groups = payload;
      },
      favoriteGroup (state, groupID) {
        state.groups.find(g => g.id === groupID).preference = 1;
      },
      dislikeGroup (state, groupID) {
        state.groups.find(g => g.id === groupID).preference = -1;
      },
      // I mean, a neutral preference is just... 'meh'
      mehGroup (state, groupID) {
        state.groups.find(g => g.id === groupID).preference = 0;
      },
      updateReport (state, payload) {
        state.report = payload;
      }
    },
    actions: {
      buildReport({commit, getters}) {
        let reportMehs = getters.getMehGroups;
        let reportFavorites = getters.getFavoritedGroups;
        let reportDisliked = getters.getDislikedGroup;
        let report = {
          groups: reportMehs,
          favorites: reportFavorites,
          expeled: reportDisliked
        }
        commit('updateReport', report);
      },
      setParticipantName({commit}, participantName){
        console.log(participantName);
        if(typeof participantName == "string" && participantName.length > 0) {
          commit('nameParticipant', participantName);
          return true;
        }
        else {
          window.alert("Digite seu nome completo");
          return false;
        }
      }
    },
    getters: {
        getState: state => {
          return state;
        },
        getParticipantName: state => {
          return state.participant.name;
        },
        getAcessCode: state => {
          return state.participant.accessCode;
        },
        getAllJobs: state => {
          return state.jobs;
        },
        // Property-style getters (cached)
        getInvited: state => {
            return state.jobs.filter(j => j.isSelected == true);
        },
        getInvitedList: state => {
          return state.invitedJobs;
        },
        getJobsInGroup: state => groupIndex => {
          var temp = state.jobs.filter(j => state.groups[groupIndex].selectedJobs.includes(j.id));
          return temp;
        },
        getJobsInGroupList: state => {
          var jobList = [];
          var groupList = [];
          for (groupIndex=0; groupIndex < state.groups.length; groupIndex++) {
            temp.push(state.jobs.filter(j => state.groups[groupIndex].selectedJobs.includes(j.id)));
            return temp;
          }
        },
        //Method-style getters (not cached)
        getJob: state => jobID => {
            return state.jobs[jobID];
        },
        getJobTitle: state => jobID => {
            return state.jobs[jobID].jobTitle;
        },
        getJobDescription: state => jobID => {
            return state.jobs[jobID].jobDescription;
        },
        getGroups: state => {
          return state.groups;
        },
        getGroup: state => groupID => {
            return state.groups[groupID];
        },
        getGroupTitle: state => groupID => {
            return state.groups[groupID].groupTitle;
        },
        getGroupJobList: state => groupID => {
            return state.groups[groupID].selectedJobs;
        },
        getFavoritesLength: state => {
          return state.groups.filter(g => g.preference === 1).length;
        },
        getDislikedLength: state => {
          return state.groups.filter(g => g.preference === -1).length;
        },
        getNotFavoritedGroups: state => {
          return state.groups.filter(g => g.preference !== 1);
        },
        getFavoritedGroups: state => {
          return state.groups.filter(g => g.preference === 1);
        },
        getDislikedGroup: state => {
          return state.groups.find(g => g.preference === -1);
        },
        getMehGroups: state => {
          return state.groups.filter(g => g.preference === 0);
        },
        checkAccessCode: state => userCode => {
          return state.participant.accessCode === userCode;
        }
    },
    modules: {

    }
})