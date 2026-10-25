// PreparaMZ — Lote 9: Física 10ª classe, 2018 (2ª Época), 2014 (1ª e 2ª
// Épocas) e 2013 (1ª e 2ª Épocas), transcritos das folhas oficiais
// INEC/MINEDH e resolvidos passo a passo pela equipa PreparaMZ. Junta-se a
// window.EXAMES sem alterar os ficheiros anteriores. (Não há exame de Física
// de 2017, 2016 nem 2015 no arquivo mozexames — o registo salta de 2018 para
// 2014; e a 2ª Chamada de 2023 continua bloqueada na fonte: PDF só com a
// 1.ª página; ver PRODUCAO-RESOLUCOES.md.)
window.EXAMES = window.EXAMES.concat([  {
  "id": "fis-10-2018-2",
  "disciplina": "Física",
  "classe": "10ª Classe",
  "ano": 2018,
  "chamada": "2ª Época",
  "duracao": "90 Minutos",
  "totalPerguntas": 7,
  "fonteEnunciado": "Exame oficial ESG/2018, Instituto Nacional de Exames, Certificação e Equivalências (Moçambique)",
  "originalPdf": "https://storage.mozexames.com/papers/3621ed97-b7e2-41d6-9ca2-392bad9ff16b/question.pdf",
  "perguntas": [
    {
      "numero": 1,
      "cotacao": "3,5",
      "enunciado": "A tabela ilustra o movimento de um ponto material que realiza MRU.\nEspaço (km): 180 | 360 | 630 | 900\nTempo (horas): 2 | 4 | Y | 10\nDetermine:\na) a sua velocidade em m/s.\nb) a grandeza representada pela letra Y.",
      "passos": [
        "No movimento rectilíneo uniforme (MRU) a velocidade é constante: v = Δx/Δt. Com o primeiro par da tabela: v = 180 km / 2 h = 90 km/h.",
        "Confirmação com outro par: 360 km / 4 h = 90 km/h e 900 km / 10 h = 90 km/h — a velocidade é a mesma em todos os pares, como exige o MRU.",
        "Conversão para m/s: 90 km/h = 90 × 1000 m / 3600 s = 25 m/s.",
        "A letra Y está na linha do tempo, na coluna do espaço 630 km: é um valor de tempo. Y = 630 km / 90 km/h = 7 h. A grandeza representada por Y é o tempo (7 horas)."
      ],
      "resposta": "a) v = 25 m/s; b) Y é o tempo: Y = 7 h"
    },
    {
      "numero": 2,
      "cotacao": "2,5",
      "enunciado": "A densidade de uma certa substância é de 7,8 g/cm³. Qual é, em cm³, o volume ocupado por 156 gramas dessa substância?",
      "passos": [
        "A densidade absoluta é ρ = m/V, logo V = m/ρ.",
        "Substituindo: V = 156 g / 7,8 g/cm³ = 20 cm³.",
        "Verificação: 20 cm³ × 7,8 g/cm³ = 156 g, a massa dada. ✓"
      ],
      "resposta": "V = 20 cm³"
    },
    {
      "numero": 3,
      "cotacao": "2,0",
      "enunciado": "A secção transversal de um fio metálico é atravessada por uma carga eléctrica de 600 Coulombs em 0,5 minutos. Qual é a intensidade de corrente que o percorre?",
      "passos": [
        "A intensidade de corrente é I = Q/t. O tempo tem de estar em segundos: 0,5 min = 0,5 × 60 s = 30 s.",
        "Substituindo: I = 600 C / 30 s = 20 A.",
        "Verificação: 20 A × 30 s = 600 C. ✓"
      ],
      "resposta": "I = 20 A"
    },
    {
      "numero": 4,
      "cotacao": "4,0",
      "enunciado": "No circuito representado na figura, calcule:\na) a resistência total da associação.\nb) a corrente que atravessa o resistor R3.\nc) a diferença de potencial nas extremidades do resistor R1.\nCircuito: fonte de 30 V em paralelo com três resistores R1 = R2 = R3 = 3 Ω.",
      "passos": [
        "Os três resistores estão em paralelo (mesma d.d.p. nos extremos de cada um). Para o paralelo: 1/Req = 1/R1 + 1/R2 + 1/R3 = 1/3 + 1/3 + 1/3 = 1 Ω⁻¹, logo Req = 1 Ω.",
        "Numa associação em paralelo a tensão é a mesma em todos os ramos: U = 30 V em cada resistor. A corrente em R3 é I3 = U/R3 = 30 V / 3 Ω = 10 A.",
        "Pela mesma razão, a d.d.p. nas extremidades de R1 é a tensão da fonte: U1 = 30 V.",
        "Verificação global: I1 = I2 = I3 = 10 A, logo a corrente total é I = 30 A e U/Req = 30 V / 1 Ω = 30 A. ✓"
      ],
      "resposta": "a) Req = 1 Ω; b) I3 = 10 A; c) U1 = 30 V"
    },
    {
      "numero": 5,
      "cotacao": "4,5",
      "enunciado": "Uma lâmpada de baixo consumo dissipa uma potência de 22 W quando ligada a uma rede de 220 V. Determine:\na) a energia consumida pela lâmpada durante 2 horas de funcionamento.\nb) a intensidade da corrente que a atravessa.\nc) a resistência da lâmpada.",
      "passos": [
        "Energia: E = P × t. Em 2 horas: E = 22 W × 2 h = 44 Wh. Em joules: 2 h = 7200 s, logo E = 22 × 7200 = 158 400 J.",
        "Corrente: P = U × I, logo I = P/U = 22 W / 220 V = 0,1 A.",
        "Resistência: R = U/I = 220 V / 0,1 A = 2200 Ω.",
        "Verificação por outro caminho: R = U²/P = 220²/22 = 48 400/22 = 2200 Ω. ✓ E ainda: P = R×I² = 2200 × 0,01 = 22 W. ✓"
      ],
      "resposta": "a) E = 44 Wh (158 400 J); b) I = 0,1 A; c) R = 2200 Ω"
    },
    {
      "numero": 6,
      "cotacao": "1,0",
      "enunciado": "Transcreva a alternativa que melhor completa a afirmação:\nO fenómeno da indução electrostática consiste na ...\nA passagem de cargas do indutor para o induzido.\nB passagem de cargas do induzido para o indutor.\nC separação de cargas no induzido, devido à presença do indutor electrizado.\nD separação de cargas no induzido, devido à aproximação do indutor neutro.",
      "passos": [
        "Na indução electrostática não há transferência de cargas entre os corpos: o indutor electrizado, aproximado do induzido (neutro), afasta as cargas do mesmo sinal e atrai as de sinal contrário, separando-as no induzido.",
        "As opções A e B descrevem passagem de cargas — isso seria electrização por contacto, não indução. A opção D erra no indutor: ele tem de estar electrizado para induzir a separação.",
        "A opção correcta é a C."
      ],
      "resposta": "C — separação de cargas no induzido, devido à presença do indutor electrizado"
    },
    {
      "numero": 7,
      "cotacao": "2,5",
      "enunciado": "A figura representa uma onda mecânica que se propaga num dado meio. Determine:\na) a amplitude.\nb) o período.\nc) a frequência.\nGráfico y (cm) em função de t (s): a curva parte de 0, desce ao mínimo de −4 cm, regressa a 0 aos 4 s, sobe ao máximo de +4 cm e regressa a 0 aos 8 s.",
      "passos": [
        "A amplitude é o afastamento máximo da posição de equilíbrio: o gráfico atinge +4 cm e −4 cm, logo A = 4 cm.",
        "O período é o tempo de uma oscilação completa: a curva completa meio ciclo descendente até 0 aos 4 s e o ciclo completo aos 8 s, logo T = 8 s.",
        "A frequência é f = 1/T = 1/8 s = 0,125 Hz.",
        "Verificação: em 8 s há exactamente uma oscilação completa (dois meios ciclos simétricos de 4 s cada). ✓"
      ],
      "resposta": "a) A = 4 cm; b) T = 8 s; c) f = 0,125 Hz"
    }
  ]
},
  {
  "id": "fis-10-2014-1",
  "disciplina": "Física",
  "classe": "10ª Classe",
  "ano": 2014,
  "chamada": "1ª Época",
  "duracao": "90 Minutos",
  "totalPerguntas": 7,
  "fonteEnunciado": "Exame oficial ESG/2014, Conselho Nacional de Exames, Certificação e Equivalências (Moçambique)",
  "originalPdf": "https://storage.mozexames.com/papers/08e13f66-7578-4447-b387-97f665620554/question.pdf",
  "perguntas": [
    {
      "numero": 1,
      "cotacao": "1,0",
      "enunciado": "Qual é a alternativa que melhor preenche a lacuna na afirmação seguinte?\n_____________ é uma propriedade geral que os corpos possuem de reduzir o seu volume, quando submetidos a uma força (pressão).\nA Compressibilidade\nB Divisibilidade\nC Inércia\nD Impenetrabilidade",
      "passos": [
        "A afirmação descreve um corpo que reduz o seu volume quando é comprimido por uma força (pressão). A propriedade geral da matéria que consiste exactamente nisso — poder ser comprimida, reduzindo o volume — chama-se compressibilidade.",
        "As outras alternativas descrevem outras propriedades: a divisibilidade é a possibilidade de dividir um corpo em partes menores; a inércia é a tendência de um corpo manter o seu estado de repouso ou de movimento; a impenetrabilidade é o facto de dois corpos não poderem ocupar o mesmo lugar ao mesmo tempo. Nenhuma delas fala de redução de volume sob pressão.",
        "Verificação: um exemplo típico é o ar dentro de uma seringa tapada — ao empurrar o êmbolo, o volume do ar diminui, o que só é possível pela compressibilidade. A opção correcta é a A."
      ],
      "resposta": "A — Compressibilidade"
    },
    {
      "numero": 2,
      "cotacao": "3,5",
      "enunciado": "A tabela representa o movimento de um ponto material ao longo de uma trajectória rectilínea.\ns(km): 54; 108; 162; 216; 270\nt(h): 1; 2; 3; 4; 5\na) Calcule a velocidade deste movimento em km/h e em m/s.\nb) Enuncie a lei das velocidades para este movimento.\nc) Construa o gráfico do espaço em função do tempo para este caso.",
      "passos": [
        "a) A velocidade é o espaço percorrido por unidade de tempo: v = Δs/Δt. Usando o primeiro par da tabela: v = 54 km / 1 h = 54 km/h.",
        "Verificação com os outros pares da tabela: 108/2 = 54; 162/3 = 54; 216/4 = 54; 270/5 = 54. Todos dão o mesmo valor, logo a velocidade é constante e igual a 54 km/h — o movimento é rectilíneo uniforme.",
        "Conversão para m/s: 54 km/h = 54 × 1000 m / 3600 s = 54/3,6 = 15 m/s. Verificação: 15 m/s × 3,6 = 54 km/h ✓.",
        "b) Como a velocidade não varia com o tempo, a lei das velocidades é v = 54 km/h (constante), ou, em unidades SI, v = 15 m/s. Em notação de lei horária das velocidades, v(t) = 54 km/h para todo o t.",
        "c) Construção do gráfico s(t): marca-se no eixo horizontal o tempo t (em h) e no vertical o espaço s (em km) e assinalam-se os pontos da tabela — (1; 54), (2; 108), (3; 162), (4; 216) e (5; 270). Como a velocidade é constante, os pontos alinham-se numa recta que passa pela origem (em t = 0, s = 0): é essa recta, prolongada pela origem, o gráfico do espaço em função do tempo. Verificação: o declive da recta é Δs/Δt = 270/5 = 54 km/h, a velocidade calculada na alínea a) ✓."
      ],
      "resposta": "a) v = 54 km/h = 15 m/s · b) v = 54 km/h (constante) · c) Recta que passa pela origem e pelos pontos (1 h; 54 km), (2 h; 108 km), (3 h; 162 km), (4 h; 216 km) e (5 h; 270 km)"
    },
    {
      "numero": 3,
      "cotacao": "2,0",
      "enunciado": "A densidade absoluta da gasolina é de 0,7 g/cm³. Qual é, em cm³, o volume ocupado por 420 g de gasolina?",
      "passos": [
        "Da definição de densidade, ρ = m/V, tira-se o volume: V = m/ρ.",
        "Substitui os dados, já em unidades compatíveis (gramas com g/cm³): V = 420/0,7 = 600 cm³.",
        "Verificação: com V = 600 cm³ e ρ = 0,7 g/cm³, a massa seria m = ρ × V = 0,7 × 600 = 420 g — exactamente a massa dada ✓."
      ],
      "resposta": "V = 600 cm³"
    },
    {
      "numero": 4,
      "cotacao": "4,0",
      "enunciado": "Observe o circuito eléctrico representado na figura 1. Determine a:\na) resistência total.\nb) intensidade total.\nc) intensidade da corrente que flui através do resistor R3.\nFigura 1: fonte de 30 V que alimenta, em paralelo, três resistores: R1 = 12 Ω, R2 = 6 Ω e R3 = 4 Ω.",
      "passos": [
        "Lê a figura 1: os três resistores R1 = 12 Ω, R2 = 6 Ω e R3 = 4 Ω estão ligados em paralelo entre os mesmos dois pontos, alimentados pela fonte de 30 V. Em paralelo, todos ficam sob a mesma tensão: U = 30 V em cada resistor.",
        "a) Em paralelo, somam-se os inversos das resistências: 1/Req = 1/12 + 1/6 + 1/4 = 1/12 + 2/12 + 3/12 = 6/12 = 1/2, logo Req = 2 Ω.",
        "b) A intensidade total é a corrente que a fonte entrega ao conjunto: I = U/Req = 30/2 = 15 A.",
        "c) A corrente em R3 calcula-se com a tensão comum de 30 V: I3 = U/R3 = 30/4 = 7,5 A.",
        "Verificação pelos ramos: I1 = 30/12 = 2,5 A e I2 = 30/6 = 5 A; somando os três ramos, I1 + I2 + I3 = 2,5 + 5 + 7,5 = 15 A — a intensidade total calculada na alínea b) ✓. (Confirmação da resistência equivalente: Req = U/I = 30/15 = 2 Ω ✓.)"
      ],
      "resposta": "a) Req = 2 Ω · b) I = 15 A · c) I3 = 7,5 A"
    },
    {
      "numero": 5,
      "cotacao": "4,5",
      "enunciado": "Uma lâmpada de incandescência dissipa 60 W de potência quando ligada à rede de 120 V. Determine a:\na) corrente que atravessa o filamento.\nb) resistência do respectivo filamento.\nc) energia, em Joules, consumida pela lâmpada durante 20 minutos de funcionamento.",
      "passos": [
        "a) A potência eléctrica é P = U × I, donde I = P/U = 60/120 = 0,5 A.",
        "b) Pela lei de Ohm, R = U/I = 120/0,5 = 240 Ω.",
        "Verificação de b) por outra via: R = U²/P = 120²/60 = 14 400/60 = 240 Ω ✓. E com R = 240 Ω e I = 0,5 A, a potência é P = R × I² = 240 × 0,25 = 60 W — a potência dada ✓.",
        "c) Converte o tempo para segundos: Δt = 20 min = 20 × 60 = 1200 s. A energia consumida é E = P × Δt = 60 × 1200 = 72 000 J.",
        "Verificação: E = U × I × Δt = 120 × 0,5 × 1200 = 72 000 J ✓."
      ],
      "resposta": "a) I = 0,5 A · b) R = 240 Ω · c) E = 72 000 J"
    },
    {
      "numero": 6,
      "cotacao": "1,0",
      "enunciado": "Quais são as palavras que preenchem correctamente as lacunas, na frase seguinte?\nPolos do mesmo nome se _______________ e polos de nomes contrários se _______________.",
      "passos": [
        "É a lei qualitativa das interacções magnéticas: dois pólos magnéticos interagem de modo que os de nomes iguais se afastam um do outro e os de nomes diferentes se aproximam.",
        "Ou seja, pólos do mesmo nome repelem-se (por exemplo, norte repele norte e sul repele sul) e pólos de nomes contrários atraem-se (norte atrai sul).",
        "Verificação: é a mesma regra que vale para as cargas eléctricas (mesmo sinal repele, sinais diferentes atraem), aplicada aqui aos pólos de um íman — e é coerente com a orientação da bússola, cujo pólo norte aponta para o pólo sul magnético da Terra."
      ],
      "resposta": "Polos do mesmo nome se repelem e polos de nomes contrários se atraem"
    },
    {
      "numero": 7,
      "cotacao": "4,0",
      "enunciado": "Um pêndulo simples, de comprimento L = 1,6 m, é posto a oscilar num lugar onde g = 10 m/s². Considere π = 3 e determine:\na) o período das oscilações.\nb) a frequência das oscilações.",
      "passos": [
        "a) O período de um pêndulo simples é T = 2π√(L/g).",
        "Substitui L = 1,6 m, g = 10 m/s² e π = 3: T = 2 × 3 × √(1,6/10) = 6 × √0,16 = 6 × 0,4 = 2,4 s.",
        "Verificação da raiz: 0,4² = 0,16 ✓, e um pêndulo de 1,6 m tem de facto um período da ordem de 2 segundos — plausível para um pêndulo comprido.",
        "b) A frequência é o inverso do período: f = 1/T = 1/2,4 ≈ 0,417 Hz (cerca de 0,42 Hz).",
        "Verificação: f × T = 0,417 × 2,4 ≈ 1 ✓, e em 2,4 s cabe uma oscilação completa, logo em 1 s cabem menos de meia oscilação — uma frequência abaixo de 0,5 Hz é coerente."
      ],
      "resposta": "a) T = 2,4 s · b) f ≈ 0,417 Hz"
    }
  ]
},
  {
  "id": "fis-10-2014-2",
  "disciplina": "Física",
  "classe": "10ª Classe",
  "ano": 2014,
  "chamada": "2ª Época",
  "duracao": "90 Minutos",
  "totalPerguntas": 7,
  "fonteEnunciado": "Exame oficial ESG/2014, Conselho Nacional de Exames, Certificação e Equivalências (Moçambique)",
  "originalPdf": "https://storage.mozexames.com/papers/4c77b33d-e42f-4e73-831b-05cf79a0001d/question.pdf",
  "perguntas": [
    {
      "numero": 1,
      "cotacao": "1,0",
      "enunciado": "Qual é a alternativa que melhor preenche a lacuna na afirmação seguinte?\n_____________ é uma propriedade geral da matéria segundo a qual dois corpos não podem ocupar, simultaneamente, o mesmo lugar no espaço.\nA Compressibilidade\nB Divisibilidade\nC Inércia\nD Impenetrabilidade",
      "passos": [
        "A definição dada é a de uma propriedade geral da matéria: dois corpos não podem ocupar ao mesmo tempo o mesmo lugar no espaço. É exactamente o significado da palavra «impenetrabilidade».",
        "As outras opções não correspondem à definição: a compressibilidade é a diminuição de volume sob pressão, a divisibilidade é a possibilidade de dividir a matéria em partes cada vez menores, e a inércia é a tendência de um corpo para manter o seu estado de repouso ou de movimento.",
        "A opção correcta é a D."
      ],
      "resposta": "D — Impenetrabilidade"
    },
    {
      "numero": 2,
      "cotacao": "3,5",
      "enunciado": "O espaço percorrido por um móvel em movimento rectilíneo varia em função do tempo de acordo com o gráfico representado na figura 1 (gráfico s–t: recta que passa pela origem e pelos pontos (2 h; 72 km), (4 h; 144 km) e (8 h; 288 km)).\na) Calcule a velocidade do móvel em km/h e em m/s.\nb) Enuncie a lei dos espaços do MRU.\nc) Construa o gráfico da velocidade em função do tempo para este caso.",
      "passos": [
        "a) No gráfico espaço–tempo, a velocidade é o declive da recta: v = Δs/Δt. Usando o ponto mais afastado, v = 288/8 = 36 km/h.",
        "Verificação da constância: 72/2 = 36 km/h e 144/4 = 36 km/h — os três pontos dão o mesmo valor, logo o movimento é uniforme e a recta passa pela origem, como exige um MRU com s₀ = 0.",
        "Conversão para m/s: 36 km/h = 36 × 1000 m / 3600 s = 36/3,6 = 10 m/s. Verificação inversa: 10 m/s × 3,6 = 36 km/h ✓.",
        "b) A lei dos espaços do movimento rectilíneo uniforme é s = s₀ + v·t, onde s é o espaço no instante t, s₀ o espaço inicial e v a velocidade (constante). Neste caso, s₀ = 0, logo s = 36·t (com s em km e t em h) ou s = 10·t (com s em m e t em s).",
        "c) Como a velocidade é constante (36 km/h = 10 m/s), o gráfico v–t é uma recta horizontal: no referencial em km/h, uma linha horizontal à altura de 36, desde t = 0 até t = 8 h; no referencial em m/s, a mesma linha horizontal à altura de 10. A área sob esta recta entre 0 e 8 h é 36 × 8 = 288 km, o espaço total do gráfico da figura 1 ✓."
      ],
      "resposta": "a) v = 36 km/h = 10 m/s · b) s = s₀ + v·t (aqui s = 36·t, com s em km e t em h) · c) recta horizontal em v = 36 km/h (10 m/s) de t = 0 a t = 8 h"
    },
    {
      "numero": 3,
      "cotacao": "2,0",
      "enunciado": "A densidade absoluta do ferro é 7,8 g/cm³. Qual é, em gramas, a massa de uma chapa de ferro de volume 500 cm³?",
      "passos": [
        "A densidade absoluta relaciona massa e volume: ρ = m/V, logo m = ρ × V.",
        "Substitui os dados: m = 7,8 × 500 = 3900 g.",
        "Verificação pelo caminho inverso: 3900/500 = 7,8 g/cm³ — exactamente a densidade dada ✓. (Em quilogramas, 3900 g = 3,9 kg.)"
      ],
      "resposta": "m = 3900 g"
    },
    {
      "numero": 4,
      "cotacao": "4,0",
      "enunciado": "Observe o circuito eléctrico representado na figura 2. Determine a:\na) resistência total;\nb) intensidade total;\nc) intensidade da corrente que flui através do resistor R3.\n(Figura 2: três resistores em paralelo ligados a uma fonte de 36 V — R₁ = 18 Ω, R₂ = 9 Ω, R₃ = 3 Ω.)",
      "passos": [
        "Lê a figura: os três resistores estão ligados em paralelo entre os mesmos dois pontos, por isso todos estão submetidos à mesma tensão da fonte, U = 36 V.",
        "a) Em paralelo, somam-se os inversos: 1/R = 1/18 + 1/9 + 1/3 = 1/18 + 2/18 + 6/18 = 9/18 = 1/2, logo R = 2 Ω. (Confirmação: a resistência equivalente de um paralelo é sempre menor que a menor das resistências — 2 Ω < 3 Ω ✓.)",
        "b) Pela lei de Ohm aplicada ao conjunto: I = U/R = 36/2 = 18 A.",
        "c) A corrente em cada ramo é U/R do ramo: I₃ = 36/3 = 12 A.",
        "Verificação pela soma dos ramos: I₁ = 36/18 = 2 A e I₂ = 36/9 = 4 A; 2 + 4 + 12 = 18 A, a intensidade total ✓."
      ],
      "resposta": "a) R = 2 Ω · b) I = 18 A · c) I₃ = 12 A"
    },
    {
      "numero": 5,
      "cotacao": "4,5",
      "enunciado": "Um electrodoméstico dissipa uma potência de 1100 W quando ligado a uma rede de 220 V. Determine a:\na) intensidade de corrente que o atravessa.\nb) resistência desse electrodoméstico.\nc) energia que gasta durante 10 minutos de funcionamento.",
      "passos": [
        "a) A potência eléctrica é P = U × I, logo I = P/U = 1100/220 = 5 A.",
        "b) Pela lei de Ohm, R = U/I = 220/5 = 44 Ω.",
        "Verificação cruzada: P = R × I² = 44 × 5² = 44 × 25 = 1100 W — a potência dada ✓.",
        "c) Converte o tempo: Δt = 10 min = 10 × 60 = 600 s. A energia é E = P × Δt = 1100 × 600 = 660 000 J.",
        "Verificação por outra via: E = U × I × Δt = 220 × 5 × 600 = 660 000 J ✓ (660 kJ)."
      ],
      "resposta": "a) I = 5 A · b) R = 44 Ω · c) E = 660 000 J (660 kJ)"
    },
    {
      "numero": 6,
      "cotacao": "1,0",
      "enunciado": "Preenche correctamente as lacunas:\nAs linhas de força do campo magnético originado por um íman em forma de barra, saem do _________ e entram pelo polo _________.",
      "passos": [
        "Fora de um íman, as linhas de força do campo magnético orientam-se do pólo norte para o pólo sul: saem do pólo norte e entram pelo pólo sul (dentro do íman, o sentido é o inverso, fechando as linhas).",
        "Verificação: é a mesma convenção que faz o pólo norte de uma agulha magnética apontar para o pólo norte geográfico — as linhas «saem» do norte e «entram» no sul.",
        "Preenchimento: saem do pólo norte e entram pelo pólo sul."
      ],
      "resposta": "Saem do pólo norte e entram pelo pólo sul"
    },
    {
      "numero": 7,
      "cotacao": "4,0",
      "enunciado": "Um pêndulo simples, de comprimento L = 0,40 m é posto a oscilar num lugar onde g = 10 m/s². Considere π = 3 e determine:\na) o período das oscilações.\nb) a frequência das oscilações.",
      "passos": [
        "a) O período do pêndulo simples é T = 2π√(L/g). Substitui os dados: T = 2 × 3 × √(0,40/10) = 6 × √0,04 = 6 × 0,2 = 1,2 s.",
        "Verificação da raiz: 0,2² = 0,04 ✓, e 0,40/10 = 0,04 ✓. O resultado usa π = 3, como a folha indica — com π = 3,14 daria 1,26 s, mas o valor pedido é com π = 3.",
        "b) A frequência é o inverso do período: f = 1/T = 1/1,2 ≈ 0,833 Hz.",
        "Verificação: f × T = 0,833 × 1,2 ≈ 1,0 ✓ (uma oscilação completa em cada 1,2 s corresponde a cerca de 0,83 oscilações por segundo)."
      ],
      "resposta": "a) T = 1,2 s · b) f ≈ 0,833 Hz"
    }
  ]
},
  {
  "id": "fis-10-2013-1",
  "disciplina": "Física",
  "classe": "10ª Classe",
  "ano": 2013,
  "chamada": "1ª Época",
  "duracao": "90 Minutos",
  "totalPerguntas": 7,
  "fonteEnunciado": "Exame oficial ESG/2013, Conselho Nacional de Exames, Certificação e Equivalências (Moçambique)",
  "originalPdf": "https://storage.mozexames.com/papers/5ab3dba5-4860-4a42-84d5-edaf1ed1c716/question.pdf",
  "perguntas": [
    {
      "numero": 1,
      "cotacao": "1,0",
      "enunciado": "Qual dos gráficos representados corresponde ao movimento rectilíneo uniformemente retardado?\nA — gráfico v(t) em curva crescente, cada vez mais inclinada, a partir da origem.\nB — gráfico v(t) em recta horizontal (velocidade constante).\nC — gráfico v(t) em recta decrescente, desde uma velocidade inicial até zero.\nD — gráfico v(t) em recta crescente a partir da origem.",
      "passos": [
        "No movimento rectilíneo uniformemente retardado a velocidade diminui sempre ao mesmo ritmo: a aceleração é constante e contrária ao movimento, por isso o gráfico v(t) tem de ser uma recta com declive negativo constante.",
        "A é uma curva (a inclinação, logo a aceleração, muda ao longo do tempo) e a velocidade aumenta — não é uniforme nem retardado. B é uma recta horizontal: a velocidade não muda, é um movimento rectilíneo uniforme. D é uma recta crescente: a velocidade aumenta ao mesmo ritmo, é um movimento rectilíneo uniformemente acelerado.",
        "Só C é uma recta decrescente: a velocidade diminui uniformemente até zero. Verificação: o declive de C é negativo e constante, ou seja, a = Δv/Δt é constante e negativa — exactamente a definição do movimento rectilíneo uniformemente retardado.",
        "A opção correcta é a C."
      ],
      "resposta": "C"
    },
    {
      "numero": 2,
      "cotacao": "3,0",
      "enunciado": "O gráfico representa a variação da posição de um corpo de massa 15 kg, em função da força aplicada sobre ele. No gráfico, a força é constante e igual a 60 N e o eixo das posições está marcado em 5, 10, 15, 20 e 25 m. Calcule:\na) o trabalho realizado pela força entre 5 e 25 m.\nb) a aceleração adquirida pelo corpo.",
      "passos": [
        "Lê o gráfico: a força não varia com a posição — é uma recta horizontal em F = 60 N, com as posições 5, 10, 15, 20 e 25 m assinaladas a tracejado no eixo s.",
        "a) O deslocamento entre 5 e 25 m é Δs = 25 − 5 = 20 m. Como a força é constante e tem o sentido do deslocamento, o trabalho é W = F × Δs = 60 × 20 = 1200 J.",
        "Verificação de a) pela área: no gráfico F(s), o trabalho é a área do rectângulo entre s = 5 m e s = 25 m — base 20 m por altura 60 N = 1200 J, o mesmo valor.",
        "b) Pela segunda lei de Newton, F = m × a, logo a = F/m = 60/15 = 4 m/s².",
        "Verificação de b): com a = 4 m/s² e m = 15 kg, F = 15 × 4 = 60 N — a força lida no gráfico."
      ],
      "resposta": "a) W = 1200 J · b) a = 4 m/s²"
    },
    {
      "numero": 3,
      "cotacao": "2,0",
      "enunciado": "Assinale com (V) as afirmações verdadeiras e com (F), as falsas.\nA A associação de roldanas em cadernal tem um grupo de roldanas fixas e outro de roldanas móveis, com eixo comum.\nB Considere dois pontos X e Y, situados no lago Niassa, nas profundidades hA = 10 m e hB = 20 m respectivamente. Neste caso, a pressão hidrostática nos pontos X e Y é tal que: PX = PY.\nC A densidade de uma dada substância é igual a 1000 kg/m³. Isto equivale dizer que a massa de 1000 kg dessa substância, ocupa o volume de 1 metro cúbico.\nD Analiticamente, a força resultante de um sistema de forças de sentidos contrários é determinada fazendo a soma dos módulos das forças componentes.",
      "passos": [
        "A — Verdadeira: o cadernal (talha de roldanas) é formado por dois blocos — um fixo e outro móvel — cada um com várias roldanas montadas sobre um eixo comum.",
        "B — Falsa: a pressão hidrostática é p = ρ × g × h, directamente proporcional à profundidade. O ponto mais profundo (20 m) está sob o dobro da pressão do ponto a 10 m, logo PX ≠ PY (PX < PY). A igualdade só valeria se as profundidades fossem iguais.",
        "C — Verdadeira: da definição de densidade, ρ = m/V, tira-se m = ρ × V = 1000 × 1 = 1000 kg. Ou seja, 1 m³ dessa substância tem massa de 1000 kg — exactamente o que a afirmação diz.",
        "D — Falsa: para forças de sentidos contrários, a resultante é a DIFERENÇA dos módulos (a maior menos a menor), no sentido da maior. A soma dos módulos só se aplica a forças do mesmo sentido. Exemplo: 10 N contra 6 N dão uma resultante de 4 N, e não de 16 N.",
        "Verificação global: V, F, V, F — cada afirmação foi testada pela sua definição, e não pela intuição."
      ],
      "resposta": "V – F – V – F (A — V; B — F; C — V; D — F)"
    },
    {
      "numero": 4,
      "cotacao": "4,5",
      "enunciado": "No circuito eléctrico representado na figura, X, Y e Z são instrumentos de medida de grandezas eléctricas. R₁ = 3 Ω, R₂ = 5 Ω, R₃ = 1 Ω, R₄ = 3 Ω e R₅ = 6 Ω. X está em série no ramo principal e regista uma corrente de 3 A; Z está em paralelo com a fonte; Y está em série com o ramo de R₄. Calcule:\na) a resistência total do circuito.\nb) o valor indicado pelo instrumento Z.\nc) o valor indicado pelo instrumento Y.",
      "passos": [
        "Identifica os instrumentos pela ligação: X está em série no circuito, logo é um amperímetro e a sua leitura (3 A) é a corrente total; Z está em paralelo com a fonte, logo é um voltímetro e indica a tensão da fonte; Y está em série só com R₄, logo é um amperímetro e indica a corrente do ramo de R₄.",
        "a) Primeiro reduz o paralelo de R₄ com R₅: R₄₅ = (3 × 6)/(3 + 6) = 18/9 = 2 Ω. Depois soma tudo o que está em série no circuito principal: R_total = R₁ + R₂ + R₃ + R₄₅ = 3 + 5 + 1 + 2 = 11 Ω.",
        "b) A tensão da fonte é U = R_total × I_total = 11 × 3 = 33 V. Como Z está em paralelo com a fonte, indica essa mesma tensão: Z = 33 V.",
        "c) A tensão no bloco em paralelo é U₄₅ = I_total × R₄₅ = 3 × 2 = 6 V — a mesma nos dois ramos. A corrente no ramo de R₄ é I₄ = U₄₅/R₄ = 6/3 = 2 A, logo Y = 2 A.",
        "Verificação completa: no outro ramo, I₅ = 6/6 = 1 A, e 2 + 1 = 3 A — a corrente total. E as quedas de tensão somam: em R₁, 3 × 3 = 9 V; em R₂, 3 × 5 = 15 V; em R₃, 3 × 1 = 3 V; no paralelo, 6 V. Total: 9 + 15 + 3 + 6 = 33 V — a tensão indicada por Z."
      ],
      "resposta": "a) R_total = 11 Ω · b) Z = 33 V · c) Y = 2 A"
    },
    {
      "numero": 5,
      "cotacao": "4,5",
      "enunciado": "Numa experiência realizada com um resistor encontram-se os seguintes dados:\nU(V): 3; 4,5; 7,5; 9,0; 10,5; 12\nI(A): 0,5; 0,75; 1,25; 1,5; 1,75; 2,0\na) Qual é o valor da resistência do resistor?\nb) Qual é a potência dissipada no resistor quando a tensão nos extremos é de 12 V?\nc) Que energia se dissipa em 20 s quando o condutor é percorrido pela corrente de 1,5 A?",
      "passos": [
        "a) Pela lei de Ohm, R = U/I. Calcula a razão para todos os pares da tabela: 3/0,5 = 6; 4,5/0,75 = 6; 7,5/1,25 = 6; 9/1,5 = 6; 10,5/1,75 = 6; 12/2,0 = 6. A razão é sempre a mesma, logo o resistor é óhmico e R = 6 Ω.",
        "b) Para U = 12 V, a tabela dá I = 2,0 A. A potência é P = U × I = 12 × 2,0 = 24 W.",
        "Verificação de b) por outra fórmula: P = U²/R = 12²/6 = 144/6 = 24 W.",
        "c) Para I = 1,5 A, a tabela dá U = 9,0 V (o mesmo que U = R × I = 6 × 1,5 = 9 V). A potência é P = U × I = 9,0 × 1,5 = 13,5 W, e em 20 s a energia dissipada é E = P × Δt = 13,5 × 20 = 270 J.",
        "Verificação de c) por outra fórmula: E = R × I² × Δt = 6 × 1,5² × 20 = 6 × 2,25 × 20 = 270 J."
      ],
      "resposta": "a) R = 6 Ω · b) P = 24 W · c) E = 270 J"
    },
    {
      "numero": 6,
      "cotacao": "1,5",
      "enunciado": "Assinale com (V) as afirmações verdadeiras e com (F), as falsas.\nA Um condutor de secção transversal constante e comprimento L, tem uma resistência eléctrica R. Cortando o fio em 4 partes de comprimentos iguais, a resistência de cada uma será de R/4.\nB Quando um condutor é percorrido por uma corrente de 2 A em 2 s, a carga que atravessa a sua secção transversal é de 4 C.\nC Os condutores metálicos são geralmente maus condutores de electricidade e calor.",
      "passos": [
        "A — Verdadeira: a resistência de um fio é directamente proporcional ao seu comprimento (R = ρ × L/A, com a secção A constante). Cada parte fica com comprimento L/4, logo com resistência R/4. As quatro partes juntas voltam a dar 4 × (R/4) = R, como deve ser.",
        "B — Verdadeira: a carga é Q = I × Δt = 2 × 2 = 4 C.",
        "C — Falsa: os condutores metálicos são geralmente BONS condutores de electricidade e de calor — é por isso que os fios eléctricos e as panelas são de metal. Maus condutores (isolantes) são, por exemplo, a madeira, o plástico e a borracha.",
        "Verificação: V, V, F — A segue da proporcionalidade R ∝ L, B do cálculo directo Q = I × Δt e C da propriedade conhecida dos metais."
      ],
      "resposta": "V – V – F (A — V; B — V; C — F)"
    },
    {
      "numero": 7,
      "cotacao": "3,5",
      "enunciado": "O gráfico refere-se à propagação de uma onda de frequência 10 Hz, produzida em uma corda. No gráfico, a seta vertical de 9 m vai de uma crista a um vale, e a seta horizontal de 30 m vai da primeira crista ao segundo vale.\na) Classifique-a quanto à natureza.\nb) Determine a amplitude e o comprimento de onda.\nc) Determine o período.",
      "passos": [
        "a) A onda propaga-se numa corda, um meio material: precisa desse meio para existir e transporta energia através da vibração das partículas da corda. Quanto à natureza, é uma onda mecânica (e não electromagnética, que se propaga também no vazio).",
        "b) A amplitude é o afastamento máximo em relação à posição de equilíbrio — metade da distância crista–vale. A seta de 9 m é a distância total entre crista e vale, logo A = 9/2 = 4,5 m. Atenção: 9 m não é a amplitude, é o dobro dela.",
        "b) Conta os comprimentos de onda na seta de 30 m: da primeira crista ao primeiro vale vai meio comprimento de onda (0,5λ), do vale à crista seguinte mais meio (1λ), e da crista ao segundo vale mais meio (1,5λ). Logo 1,5λ = 30 m, donde λ = 30/1,5 = 20 m.",
        "c) O período é o inverso da frequência: T = 1/f = 1/10 = 0,1 s.",
        "Verificação: a velocidade da onda é v = λ × f = 20 × 10 = 200 m/s, e também v = λ/T = 20/0,1 = 200 m/s — os dois caminhos dão o mesmo valor."
      ],
      "resposta": "a) Onda mecânica · b) A = 4,5 m; λ = 20 m · c) T = 0,1 s"
    }
  ]
},
  {
  "id": "fis-10-2013-2",
  "disciplina": "Física",
  "classe": "10ª Classe",
  "ano": 2013,
  "chamada": "2ª Época",
  "duracao": "90 Minutos",
  "totalPerguntas": 7,
  "fonteEnunciado": "Exame oficial ESG/2013, Conselho Nacional de Exames, Certificação e Equivalências (Moçambique)",
  "originalPdf": "https://storage.mozexames.com/papers/482dbb74-8f7d-4cbb-bb75-768797abc882/question.pdf",
  "perguntas": [
    {
      "numero": 1,
      "cotacao": "1,0",
      "enunciado": "Transcreva para a folha de exame a alternativa que melhor completa a frase:\nNo movimento rectilíneo uniformemente variado, ______________________________.\nA o espaço percorrido pelo ponto material é directamente proporcional ao tempo.\nB o espaço percorrido pelo ponto material é inversamente proporcional ao tempo.\nC a velocidade é directamente proporcional ao tempo.\nD a velocidade é inversamente proporcional ao tempo.",
      "passos": [
        "No movimento rectilíneo uniformemente variado (MRUV) a aceleração é constante, logo a velocidade varia linearmente com o tempo: v = v0 + a·t.",
        "Se a velocidade inicial for nula (v0 = 0), fica v = a·t, ou seja, a velocidade é directamente proporcional ao tempo — é a alternativa C.",
        "Verificação das outras opções: o espaço percorrido é s = v0·t + (1/2)·a·t², isto é, depende do quadrado do tempo e não é proporcional ao tempo (A e B falsas); e a velocidade cresce com o tempo, não diminui com ele (D falsa)."
      ],
      "resposta": "C — a velocidade é directamente proporcional ao tempo"
    },
    {
      "numero": 2,
      "cotacao": "3,0",
      "enunciado": "Uma grua levanta um fardo de 1500 kg a uma altura de 45 m.\na) Calcule o peso do fardo. (use g = 10 m/s²)\nb) Calcule o trabalho realizado pela grua.",
      "passos": [
        "a) Peso do fardo: P = m·g = 1500 kg × 10 m/s² = 15 000 N.",
        "b) A grua levanta o fardo (a velocidade constante, a força exercida é igual ao peso), logo o trabalho é W = F·d = P·h = 15 000 N × 45 m = 675 000 J.",
        "Verificação por outro caminho: W = m·g·h = 1500 × 10 × 45 = 675 000 J, o mesmo valor. Em quilojoules: 675 kJ."
      ],
      "resposta": "a) 15 000 N; b) 675 000 J (675 kJ)"
    },
    {
      "numero": 3,
      "cotacao": "2,0",
      "enunciado": "Das afirmações que se seguem, indique com (V) as verdadeiras e com (F) as falsas:\nA Uma roldana móvel está em equilíbrio quando a potência é igual à resistência.\nB A pressão hidrostática é a pressão devida ao peso de um fluído em repouso sobre o fundo do recipiente que o contém.\nC A densidade ou massa específica de uma substância é a massa por unidade de superfície.\nD Analiticamente, a resultante de um sistema de duas forças F1 e F2 com a mesma direcção e sentido, obtém-se somando os módulos das forças componentes.",
      "passos": [
        "A — FALSA. Numa roldana móvel a potência (força aplicada) é metade da resistência (P = R/2) no equilíbrio, porque a roldana móvel divide a carga por dois cabos; a igualdade P = R vale para a roldana fixa.",
        "B — VERDADEIRA. É a definição de pressão hidrostática: a pressão que um fluido em repouso exerce, devido ao seu peso, sobre o fundo (e as paredes) do recipiente.",
        "C — FALSA. A densidade (massa específica) é a massa por unidade de VOLUME (ρ = m/V, em kg/m³), não por unidade de superfície.",
        "D — VERDADEIRA. Duas forças com a mesma direcção e o mesmo sentido somam-se: a resultante tem módulo R = F1 + F2 e o mesmo sentido das componentes.",
        "Verificação da sequência: A falsa, B verdadeira, C falsa, D verdadeira."
      ],
      "resposta": "A — F; B — V; C — F; D — V"
    },
    {
      "numero": 4,
      "cotacao": "4,5",
      "enunciado": "Observe o circuito eléctrico. Na figura: uma fonte de 20 V em série com R1 = 4 Ω e um amperímetro (A) no ramo principal, e R2 = 15 Ω em paralelo com R3 = 10 Ω.\na) Calcule a resistência equivalente do circuito.\nb) Calcule o valor indicado pelo amperímetro.\nc) Calcule a corrente no resistor R3 = 10 Ω.",
      "passos": [
        "a) Primeiro o paralelo de R2 e R3: 1/Rp = 1/15 + 1/10 = (2 + 3)/30 = 5/30, logo Rp = 30/5 = 6 Ω. Como R1 está em série com este paralelo, a resistência equivalente é Req = R1 + Rp = 4 + 6 = 10 Ω.",
        "b) O amperímetro está no ramo principal, logo mede a corrente total do circuito: I = U/Req = 20 V / 10 Ω = 2 A.",
        "c) A tensão nos extremos do paralelo é Up = I·Rp = 2 A × 6 Ω = 12 V (a mesma para R2 e R3, pois estão em paralelo). A corrente em R3 é I3 = Up/R3 = 12 V / 10 Ω = 1,2 A.",
        "Verificação: a corrente em R2 é I2 = 12/15 = 0,8 A; I2 + I3 = 0,8 + 1,2 = 2,0 A, igual à corrente total. Também se confirma a tensão: U(R1) = 2 × 4 = 8 V e 8 + 12 = 20 V, a tensão da fonte."
      ],
      "resposta": "a) 10 Ω; b) 2 A; c) 1,2 A"
    },
    {
      "numero": 5,
      "cotacao": "4,5",
      "enunciado": "O gráfico representa a tensão eléctrica (U, em volt) em função da intensidade de corrente (I, em ampere) num resistor. A recta passa pela origem e pelos pontos (6 A; 60 V) e (12 A; 120 V).\na) Qual é o valor da resistência do resistor?\nb) Se o resistor for submetido a uma d.d.p. de 40 V, qual será, em watt, a potência eléctrica dissipada?\nc) Que energia se dissipa no resistor em meia hora, quando a tensão nos seus extremos é de 60 V?",
      "passos": [
        "a) Pela lei de Ohm, R = U/I. Usando um ponto do gráfico: R = 60 V / 6 A = 10 Ω.",
        "Verificação com o segundo ponto: R = 120 V / 12 A = 10 Ω — o mesmo valor, o que confirma que a recta é uma proporcionalidade directa (resistor óhmico).",
        "b) Potência dissipada a 40 V: P = U²/R = (40 V)² / 10 Ω = 1600/10 = 160 W.",
        "Verificação: a corrente seria I = U/R = 40/10 = 4 A e P = U·I = 40 × 4 = 160 W.",
        "c) A 60 V, a potência é P = U²/R = 3600/10 = 360 W. Meia hora são t = 30 × 60 = 1800 s, logo a energia dissipada é E = P·t = 360 W × 1800 s = 648 000 J.",
        "Verificação: também se pode escrever E = 648 kJ, ou 0,18 kWh (360 W × 0,5 h)."
      ],
      "resposta": "a) 10 Ω; b) 160 W; c) 648 000 J (648 kJ)"
    },
    {
      "numero": 6,
      "cotacao": "1,5",
      "enunciado": "Assinale com (V) as afirmações verdadeiras e com (F), as falsas.\nA Na electrização por fricção, os corpos envolvidos electrizam-se com cargas de mesmo sinal.\nB Um condutor metálico homogéneo de secção transversal constante, tem uma resistência R e comprimento L. Se duplicarmos o comprimento do condutor, mantendo constante a sua secção transversal, o valor da resistência quadruplica.\nC O gerador é um aparelho eléctrico que transforma uma modalidade qualquer de energia em energia eléctrica.",
      "passos": [
        "A — FALSA. Na electrização por fricção (atrito), um corpo cede electrões ao outro: os dois corpos ficam electrizados com cargas de sinais OPOSTOS (um positivo, outro negativo), e não do mesmo sinal.",
        "B — FALSA. A resistência é R = ρ·L/S: é directamente proporcional ao comprimento. Duplicando L (com S constante), a resistência duplica (passa a 2R) e não quadruplica.",
        "C — VERDADEIRA. É a definição de gerador: um aparelho que converte outra forma de energia (química, mecânica, luminosa, etc.) em energia eléctrica.",
        "Verificação da sequência: A falsa, B falsa, C verdadeira."
      ],
      "resposta": "A — F; B — F; C — V"
    },
    {
      "numero": 7,
      "cotacao": "3,5",
      "enunciado": "A figura representa uma onda mecânica cuja frequência é de 4 Hz. Na figura, a seta vertical de 7 m vai do nível das cristas ao nível dos vales, e a seta horizontal de 10 m vai do vale assinalado a tracejado até à terceira crista seguinte.\na) Determine a amplitude da onda.\nb) Calcule o comprimento de onda.\nc) Calcule a velocidade de propagação da onda.",
      "passos": [
        "a) A amplitude é o afastamento máximo em relação à posição de equilíbrio, ou seja, metade da distância entre uma crista e um vale. A seta de 7 m mede crista a vale, logo A = 7 m / 2 = 3,5 m.",
        "b) O comprimento de onda é a distância entre duas cristas consecutivas (ou entre dois vales consecutivos). A seta de 10 m parte de um vale e termina na terceira crista a seguir: vale→crista (λ/2) + crista→vale (λ) + vale→crista (3λ/2) + crista→vale (2λ) + vale→crista (5λ/2). São 2,5 comprimentos de onda: 2,5λ = 10 m, logo λ = 4 m.",
        "c) Velocidade de propagação: v = λ·f = 4 m × 4 Hz = 16 m/s.",
        "Verificação por outro caminho: o período é T = 1/f = 1/4 = 0,25 s e v = λ/T = 4 / 0,25 = 16 m/s — o mesmo valor. E ainda: em 10 m cabem 2,5 ondas de 4 m (2,5 × 4 = 10 ✓)."
      ],
      "resposta": "a) 3,5 m; b) 4 m; c) 16 m/s"
    }
  ]
}]);
