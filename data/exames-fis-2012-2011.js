// PreparaMZ — Lote 10: Física 10ª classe, 2012 (1ª e 2ª Épocas) e 2011
// (1ª Época), transcritos das folhas oficiais e resolvidos passo a passo
// pela equipa PreparaMZ. Junta-se a window.EXAMES sem alterar os
// ficheiros anteriores. (A 2ª Época de 2011 NÃO entra: o registo do
// mozexames para essa época serve um ficheiro byte a byte igual ao da
// 1ª Época — mesmo MD5, cabeçalho «1ª Época» — e nenhuma outra fonte
// consultada devolve uma folha distinta; ver PRODUCAO-RESOLUCOES.md.)
window.EXAMES = window.EXAMES.concat([  {
  "id": "fis-10-2012-1",
  "disciplina": "Física",
  "classe": "10ª Classe",
  "ano": 2012,
  "chamada": "1ª Época",
  "duracao": "90 Minutos",
  "totalPerguntas": 7,
  "fonteEnunciado": "Exame oficial 2012, Conselho Nacional de Exames, Certificação e Equivalências (Moçambique)",
  "originalPdf": "https://storage.mozexames.com/papers/bb59af73-05f1-4ccb-ad0b-31e6e2d45cf8/question.pdf",
  "perguntas": [
    {
      "numero": 1,
      "cotacao": "1,0",
      "enunciado": "Transcreva para a sua folha de exame apenas a alternativa que melhor completa a frase.\nQuando se escreve no quadro usando um pau de giz, liberta-se pó de giz devido à…\nA compressibilidade. B divisibilidade. C impenetrabilidade. D inércia.",
      "passos": [
        "Ao escrever, o giz vai-se desfazendo: pequenos pedaços soltam-se do pau e ficam no quadro como pó. A matéria pode, portanto, ser dividida em partes cada vez mais pequenas — essa propriedade chama-se divisibilidade.",
        "A compressibilidade é a diminuição de volume quando se aplica pressão; a impenetrabilidade é dois corpos não poderem ocupar o mesmo lugar ao mesmo tempo; a inércia é a resistência de um corpo à mudança do seu estado de movimento. Nenhuma destas três explica o pó que se solta.",
        "A opção correcta é a B."
      ],
      "resposta": "B — divisibilidade"
    },
    {
      "numero": 2,
      "cotacao": "3,5",
      "enunciado": "A tabela corresponde ao movimento de um ponto material de massa de 2 kg, sob efeito de uma força constante F.\nt (s): 0 | 1 | 2 | 3 | 4 | 5\nv (m/s): 0 | 40 | 80 | 120 | 160 | 200\na) Determine a aceleração do movimento.\nb) Determine a intensidade da força aplicada.\nc) Construa o gráfico da aceleração em função do tempo para o movimento.\nd) Classifique o movimento sabendo que a trajectória é uma recta.",
      "passos": [
        "a) A velocidade cresce sempre 40 m/s em cada segundo: a = Δv/Δt = (40 − 0)/(1 − 0) = 40 m/s². Confirmação com outro par: (200 − 160)/(5 − 4) = 40 m/s² — a aceleração é constante.",
        "b) Pela segunda lei de Newton, F = m × a = 2 × 40 = 80 N.",
        "Verificação de b): com F = 80 N e m = 2 kg, a = F/m = 80/2 = 40 m/s² — a aceleração lida na tabela.",
        "c) Como a aceleração não muda com o tempo, o gráfico a(t) é uma recta horizontal em a = 40 m/s², de t = 0 s a t = 5 s (ver figura da resolução).",
        "d) A aceleração é constante e positiva e a trajectória é uma recta: o movimento é rectilíneo uniformemente acelerado."
      ],
      "resposta": "a) a = 40 m/s²; b) F = 80 N; c) recta horizontal em a = 40 m/s²; d) movimento rectilíneo uniformemente acelerado"
    },
    {
      "numero": 3,
      "cotacao": "3,5",
      "enunciado": "Um objecto com massa de 8 kg e volume de 0,004 m³ é mergulhado totalmente dentro da água de massa específica ρágua = 10³ kg/m³. Qual é:\na) o valor do peso do objecto? (Use g = 10 m/s²)\nb) a intensidade da força de empuxo que a água exerce sobre o objecto?\nc) o valor do peso aparente do objecto?",
      "passos": [
        "a) O peso é P = m × g = 8 × 10 = 80 N.",
        "b) O empuxo (princípio de Arquimedes) é o peso do líquido deslocado: E = ρágua × V × g = 1000 × 0,004 × 10 = 40 N. O volume deslocado é o volume do objecto, porque ele está totalmente mergulhado.",
        "Verificação de b): a massa específica do objecto é 8 kg / 0,004 m³ = 2000 kg/m³, maior do que a da água — por isso ele fica totalmente mergulhado, como o enunciado diz.",
        "c) O peso aparente é o peso menos o empuxo: Pap = P − E = 80 − 40 = 40 N."
      ],
      "resposta": "a) P = 80 N; b) E = 40 N; c) Pap = 40 N"
    },
    {
      "numero": 4,
      "cotacao": "5,0",
      "enunciado": "Considere o circuito eléctrico dado cuja ddp entre os pontos A e B (VAB) é de 90 volts. Determine a:\na) resistência equivalente.\nb) intensidade da corrente no resistor R2 = 60 Ω.\nc) energia dissipada no resistor R3 = 30 Ω, durante 1 minuto, quando passa por ele uma corrente de 2 Ampéres.\nNo circuito, R1 = 10 Ω está em série com o paralelo de R2 = 60 Ω e R3 = 30 Ω (ver figura).",
      "passos": [
        "a) O paralelo de R2 e R3 vale Rp = (60 × 30)/(60 + 30) = 1800/90 = 20 Ω. Em série com R1: Req = 10 + 20 = 30 Ω.",
        "b) A corrente total é I = VAB/Req = 90/30 = 3 A. A tensão no paralelo é U = I × Rp = 3 × 20 = 60 V, logo a corrente em R2 é I2 = U/R2 = 60/60 = 1 A.",
        "Verificação de b): a corrente em R3 seria I3 = 60/30 = 2 A, e 1 + 2 = 3 A — a corrente total. O valor 2 A é exactamente o que a alínea c) dá para R3.",
        "c) A energia dissipada por efeito Joule é E = R × I² × t = 30 × 2² × 60 = 30 × 4 × 60 = 7200 J (1 minuto = 60 s)."
      ],
      "resposta": "a) Req = 30 Ω; b) I2 = 1 A; c) E = 7200 J"
    },
    {
      "numero": 5,
      "cotacao": "2,5",
      "enunciado": "Das afirmações que se seguem, assinale com «V» as que são verdadeiras e com «F» as falsas.\nA Todo corpo mergulhado num líquido sofre, por parte deste, uma força vertical para cima, cuja intensidade é igual ao peso do líquido deslocado pelo corpo.\nB Um corpo electrizado negativamente possui excesso de protões.\nC Um corpo permanece em equilíbrio em qualquer ponto do líquido se o seu peso for igual à força de impulsão (FP = FI).\nD A passagem de uma corrente eléctrica através de um resistor é sempre acompanhada pela libertação de energia térmica ou calorífica.\nE Um espelho plano fornece uma imagem virtual, invertida e simétrica.",
      "passos": [
        "A é verdadeira: é o princípio de Arquimedes — o empuxo é vertical, para cima, e igual ao peso do líquido deslocado.",
        "B é falsa: um corpo electrizado negativamente tem excesso de electrões, não de protões (os protões não se movem nestes processos).",
        "C é verdadeira: com peso igual ao empuxo a resultante é nula e o corpo fica em equilíbrio indiferente em qualquer ponto do líquido (nem sobe nem desce).",
        "D é verdadeira: é o efeito Joule — a corrente num resistor liberta sempre calor.",
        "E é falsa: a imagem do espelho plano é virtual, direita (não invertida) e simétrica em relação ao espelho."
      ],
      "resposta": "A V; B F; C V; D V; E F"
    },
    {
      "numero": 6,
      "cotacao": "3,5",
      "enunciado": "Um pêndulo simples de comprimento L = 0,10 m executa oscilações de pequena abertura angular de modo que a esfera pendular realize um M.H.S. Determine o período do pêndulo e a respectiva frequência (use: g = 10 m/s²).",
      "passos": [
        "Para pequenas oscilações, o período do pêndulo simples é T = 2π√(L/g).",
        "Substituindo: L/g = 0,10/10 = 0,01, e √0,01 = 0,1. Logo T = 2π × 0,1 = 0,2π ≈ 0,63 s (com π ≈ 3,14).",
        "A frequência é o inverso do período: f = 1/T = 1/0,63 ≈ 1,6 Hz.",
        "Verificação: f × T = 1,6 × 0,63 ≈ 1, como tem de ser. Nota: a folha não fixa o valor de π; com π = 3 obtém-se T = 0,6 s e f ≈ 1,67 Hz — o mesmo resultado dentro do arredondamento do currículo."
      ],
      "resposta": "T ≈ 0,63 s; f ≈ 1,6 Hz"
    },
    {
      "numero": 7,
      "cotacao": "1,0",
      "enunciado": "Qual das opções completa correctamente a seguinte frase?\nO período das oscilações de um pêndulo simples não depende do (da)…\nA comprimento do pêndulo.\nB massa da esfera pendular.\n(Nota: a folha só imprime estas duas opções.)",
      "passos": [
        "O período do pêndulo simples é T = 2π√(L/g): depende do comprimento L e da gravidade g, mas a massa da esfera não aparece na fórmula.",
        "Por isso, duas esferas de massas diferentes, com o mesmo comprimento, oscilam com o mesmo período — o período não depende da massa.",
        "A opção correcta é a B."
      ],
      "resposta": "B — massa da esfera pendular"
    }
  ]
},
  {
  "id": "fis-10-2012-2",
  "disciplina": "Física",
  "classe": "10ª Classe",
  "ano": 2012,
  "chamada": "2ª Época",
  "duracao": "90 Minutos",
  "totalPerguntas": 6,
  "fonteEnunciado": "Exame oficial 2012, Conselho Nacional de Exames, Certificação e Equivalências (Moçambique)",
  "originalPdf": "https://storage.mozexames.com/papers/95e54571-6d4a-44eb-a753-41a0627f7156/question.pdf",
  "perguntas": [
    {
      "numero": 1,
      "cotacao": "1,0",
      "enunciado": "Transcreva para a sua folha de exame a alternativa que melhor completa a frase.\nQuando introduzimos um bebé numa bacia cheia de água esta entorna-se. Isso explica-se pela propriedade geral da matéria chamada…\nA compressibilidade. B divisibilidade. C impenetrabilidade. D inércia.",
      "passos": [
        "A água entorna-se porque o corpo do bebé ocupa um lugar na bacia: dois corpos não podem ocupar o mesmo lugar ao mesmo tempo, por isso a água que lá estava tem de sair.",
        "Essa propriedade — dois corpos não ocuparem simultaneamente o mesmo espaço — chama-se impenetrabilidade.",
        "A opção correcta é a C."
      ],
      "resposta": "C — impenetrabilidade"
    },
    {
      "numero": 2,
      "cotacao": "3,5",
      "enunciado": "Um ponto material de massa m = 4 kg move-se com certa velocidade. Uma força constante F é aplicada sobre ele, produzindo a variação da sua velocidade de acordo com o gráfico.\nNo gráfico v(t): v = 5 m/s em t = 0 s, v = 10 m/s em t = 2 s e v = 15 m/s em t = 4 s (recta crescente; ver figura).\na) Determine a aceleração produzida pela força.\nb) Calcule a intensidade da força aplicada.\nc) Determine a velocidade da partícula no instante t = 10 s.\nd) Construa o gráfico da aceleração em função do tempo para este caso.",
      "passos": [
        "a) Lêem-se três pontos da recta: (0 s; 5 m/s), (2 s; 10 m/s) e (4 s; 15 m/s). A aceleração é o declive: a = Δv/Δt = (15 − 5)/(4 − 0) = 10/4 = 2,5 m/s². Confirmação: (10 − 5)/(2 − 0) = 2,5 m/s² — o mesmo valor, a recta é uma só.",
        "b) Pela segunda lei de Newton, F = m × a = 4 × 2,5 = 10 N.",
        "c) A velocidade segue v = v0 + a·t = 5 + 2,5·t. Para t = 10 s: v = 5 + 2,5 × 10 = 5 + 25 = 30 m/s.",
        "Verificação de c): prolongando a recta do gráfico com o mesmo declive, aos 10 s chega-se a 30 m/s — o dobro do valor aos 4 s mais a velocidade inicial, coerente com a lei v(t).",
        "d) Como a aceleração é constante, o gráfico a(t) é uma recta horizontal em a = 2,5 m/s² (ver figura da resolução)."
      ],
      "resposta": "a) a = 2,5 m/s²; b) F = 10 N; c) v = 30 m/s; d) recta horizontal em a = 2,5 m/s²"
    },
    {
      "numero": 3,
      "cotacao": "3,5",
      "enunciado": "Um adestrador quer saber o peso de um elefante. Utilizando uma prensa hidráulica, consegue equilibrar o elefante sobre um pistão S2 de 2000 cm² de área, exercendo uma força vertical F1 equivalente a 100 N, de cima para baixo, sobre o outro pistão da prensa, cuja área S1 é igual a 25 cm².\na) Calcule o peso do elefante.\nb) Determine a massa do elefante (g = 10 m/s²).",
      "passos": [
        "a) Numa prensa hidráulica a pressão transmite-se por igual: p1 = p2, ou seja, F1/S1 = F2/S2. O peso do elefante é a força F2 no pistão grande.",
        "Logo F2 = F1 × (S2/S1) = 100 × (2000/25) = 100 × 80 = 8000 N. As áreas podem ficar em cm² porque só entra a razão entre elas.",
        "b) O peso é P = m × g, logo m = P/g = 8000/10 = 800 kg.",
        "Verificação: 800 kg × 10 m/s² = 8000 N — o peso calculado; e a razão das áreas (80 vezes) explica a força 80 vezes maior no pistão do elefante."
      ],
      "resposta": "a) P = 8000 N; b) m = 800 kg"
    },
    {
      "numero": 4,
      "cotacao": "3,0",
      "enunciado": "Das afirmações que se seguem, assinale com «V» as que são verdadeiras e com «F» as falsas.\nA Pontos situados em um mesmo líquido e na mesma linha horizontal ficam sujeitos a pressões diferentes.\nB A força de impulsão é sempre dirigida de cima para baixo.\nC Na electrização por contacto, após o processo, os corpos ficam com cargas de mesmo sinal.\nD A corrente eléctrica é o movimento ordenado de electrões.\nE Um espelho esférico côncavo, fornece, para um objecto colocado entre o plano focal e o plano central, uma imagem real, invertida, maior que o objecto.\nF No sistema internacional, a unidade de massa é o grama.",
      "passos": [
        "A é falsa: pontos do mesmo líquido à mesma profundidade (mesma linha horizontal) estão sujeitos à mesma pressão — a pressão só depende da profundidade.",
        "B é falsa: a impulsão (empuxo) é sempre dirigida de baixo para cima, nunca de cima para baixo.",
        "C é verdadeira: no contacto, o corpo neutro fica com carga do mesmo sinal que o corpo electrizado que lhe tocou.",
        "D é verdadeira: nos condutores metálicos a corrente é o movimento ordenado dos electrões livres.",
        "E é verdadeira: objecto entre o foco e o centro de curvatura do espelho côncavo dá imagem real, invertida e maior do que o objecto (projectada para lá do centro).",
        "F é falsa: no Sistema Internacional a unidade de massa é o quilograma (kg); o grama é um submúltiplo."
      ],
      "resposta": "A F; B F; C V; D V; E V; F F"
    },
    {
      "numero": 5,
      "cotacao": "5,0",
      "enunciado": "A figura representa uma associação de resistências eléctricas. A diferença de potencial (ddp) entre os extremos da associação (pontos A e B) é de 24 V. Calcule a:\na) resistência equivalente da associação.\nb) intensidade total da corrente.\nc) energia dissipada na resistência de 3 Ω durante meio minuto sabendo que a corrente que a atravessa é de 2 A.\nNa figura: R1 = 6 Ω em paralelo com R2 = 3 Ω, e esse paralelo em série com R3 = 2 Ω e R4 = 4 Ω (ver figura).",
      "passos": [
        "a) O paralelo de R1 e R2 vale Rp = (6 × 3)/(6 + 3) = 18/9 = 2 Ω. Em série com R3 e R4: Req = 2 + 2 + 4 = 8 Ω.",
        "b) A intensidade total é I = U/Req = 24/8 = 3 A.",
        "Verificação de a) e b): a tensão no paralelo é U = I × Rp = 3 × 2 = 6 V, logo a corrente em R2 é 6/3 = 2 A — exactamente o valor que a alínea c) dá.",
        "c) Meio minuto são 30 s. A energia dissipada em R2 é E = R × I² × t = 3 × 2² × 30 = 3 × 4 × 30 = 360 J."
      ],
      "resposta": "a) Req = 8 Ω; b) I = 3 A; c) E = 360 J"
    },
    {
      "numero": 6,
      "cotacao": "4,0",
      "enunciado": "A figura representa uma onda mecânica que se propaga com uma velocidade de 0,08 m/s e cada quadradinho mede 0,01 m de lado. Determine a (o):\na) amplitude.\nb) comprimento de onda.\nc) frequência.\nd) período.\nNa grelha, a onda ocupa 6 quadradinhos em altura (crista no topo, vale na base) e as cristas repetem-se de 8 em 8 quadradinhos (ver figura).",
      "passos": [
        "a) A grelha tem 6 quadradinhos de altura, da crista ao vale, e a posição de equilíbrio fica a meio: a amplitude é metade da altura total, ou seja, 3 quadradinhos. Logo A = 3 × 0,01 = 0,03 m.",
        "b) A distância entre duas cristas consecutivas é de 8 quadradinhos: λ = 8 × 0,01 = 0,08 m. Confirmação: a distância entre dois vales consecutivos é também de 8 quadradinhos.",
        "c) Da relação v = λ × f vem f = v/λ = 0,08/0,08 = 1 Hz.",
        "d) O período é o inverso da frequência: T = 1/f = 1/1 = 1 s. Verificação: v = λ/T = 0,08/1 = 0,08 m/s — a velocidade dada."
      ],
      "resposta": "a) A = 0,03 m; b) λ = 0,08 m; c) f = 1 Hz; d) T = 1 s"
    }
  ]
},
  {
  "id": "fis-10-2011-1",
  "disciplina": "Física",
  "classe": "10ª Classe",
  "ano": 2011,
  "chamada": "1ª Época",
  "duracao": "90 Minutos",
  "totalPerguntas": 8,
  "fonteEnunciado": "Exame oficial 2011, Conselho Nacional de Exames, Certificação e Equivalências (Moçambique)",
  "originalPdf": "https://storage.mozexames.com/papers/3c3398d8-b204-4e05-9b37-c2488e67d89c/question.pdf",
  "perguntas": [
    {
      "numero": 1,
      "cotacao": "5,0",
      "enunciado": "A tabela corresponde ao movimento de um ponto material que se move em linha recta.\nV (m/s): 0 | 10 | 20 | 30 | 30 | 30 | 20 | 10 | 0\nt (s): 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8\na) Classifique o movimento nos intervalos (0-3) s e (3-5) s.\nb) Construa o gráfico v×t no intervalo (0-8) s.\nc) Qual é a distância percorrida pelo corpo no intervalo (0-3) s?",
      "passos": [
        "a) No intervalo (0-3) s a velocidade sobe uniformemente de 0 para 30 m/s (mais 10 m/s em cada segundo): é um movimento rectilíneo uniformemente acelerado. No intervalo (3-5) s a velocidade fica constante em 30 m/s: é um movimento rectilíneo uniforme.",
        "b) O gráfico v(t) sobe em recta de (0 s; 0 m/s) até (3 s; 30 m/s), fica horizontal em 30 m/s até aos 5 s e depois desce em recta até (8 s; 0 m/s) — ver figura da resolução.",
        "c) A distância no intervalo (0-3) s é a área do gráfico v(t) nesse intervalo: um triângulo de base 3 s e altura 30 m/s, ou seja, s = (3 × 30)/2 = 45 m.",
        "Verificação de c) pela lei do movimento: a aceleração é a = 30/3 = 10 m/s², logo s = ½·a·t² = ½ × 10 × 3² = 45 m — o mesmo valor."
      ],
      "resposta": "a) (0-3) s: rectilíneo uniformemente acelerado; (3-5) s: rectilíneo uniforme; b) subida, patamar e descida (ver figura); c) s = 45 m"
    },
    {
      "numero": 2,
      "cotacao": "1,0",
      "enunciado": "A figura representa três tipos de alavanca.\nDa esquerda para a direita temos respectivamente alavancas…\nA inter-potente, inter-resistente, inter-fixa.\nB inter-resistente, inter-potente, inter-fixa.\nC inter-fixa, inter-resistente, inter-potente.\nNa 1.ª figura o apoio está entre a resistência e a potência; na 2.ª a resistência está entre o apoio e a potência; na 3.ª a potência está entre o apoio e a resistência (ver figura).",
      "passos": [
        "O nome da alavanca vem do elemento que fica no meio: apoio no meio → inter-fixa; resistência no meio → inter-resistente; potência no meio → inter-potente.",
        "1.ª figura: o apoio (ponto de apoio) está entre a pedra (resistência) e a mão (potência) → inter-fixa. 2.ª figura: a pedra está entre o apoio e a mão → inter-resistente. 3.ª figura: a mão está entre o apoio e a pedra → inter-potente.",
        "A sequência da esquerda para a direita é, portanto, inter-fixa, inter-resistente, inter-potente — a opção C."
      ],
      "resposta": "C — inter-fixa, inter-resistente, inter-potente"
    },
    {
      "numero": 3,
      "cotacao": "1,0",
      "enunciado": "Na figura, para fazer girar a porca é necessário um momento de 240 N·m. Se a força aplicada é F = 480 N qual deve ser o valor do braço (d)?",
      "passos": [
        "O momento de uma força é M = F × d, com a força perpendicular ao braço — como mostra a figura (a força é vertical e o braço horizontal).",
        "Logo d = M/F = 240/480 = 0,5 m.",
        "Verificação: 480 N × 0,5 m = 240 N·m — o momento dado."
      ],
      "resposta": "d = 0,5 m"
    },
    {
      "numero": 4,
      "cotacao": "0,5",
      "enunciado": "Copie para a sua folha de exame, a opção que melhor completa a seguinte afirmação:\nUma panela possui cabos de madeira ou de plástico para evitar o aquecimento do cabo por…\nA condução. B irradiação. C convecção.",
      "passos": [
        "O calor da panela chega ao cabo por contacto directo, através do material: essa propagação de calor de partícula em partícula, sem deslocação de matéria, chama-se condução.",
        "A madeira e o plástico são maus condutores de calor: conduzem mal, por isso o cabo aquece pouco e pode pegar-se sem queimar a mão.",
        "A opção correcta é a A."
      ],
      "resposta": "A — condução"
    },
    {
      "numero": 5,
      "cotacao": "1,5",
      "enunciado": "Copie para a sua folha de exame, a opção que melhor completa a seguinte afirmação:\nNa cidade de Xai-Xai nas noites a temperatura por vezes baixa até 57,2 ºF. Na escala Celcius essa temperatura equivale a…\nA 12º C B 13º C C 14º C D 15º C",
      "passos": [
        "A conversão de Fahrenheit para Celsius é C = (F − 32)/1,8.",
        "Substituindo: C = (57,2 − 32)/1,8 = 25,2/1,8 = 14. Logo a temperatura é 14 ºC.",
        "Verificação inversa: 14 × 1,8 + 32 = 25,2 + 32 = 57,2 ºF — o valor dado. A opção correcta é a C."
      ],
      "resposta": "C — 14 ºC"
    },
    {
      "numero": 6,
      "cotacao": "4,0",
      "enunciado": "A figura representa um circuito eléctrico formado por cinco lâmpadas de uma árvore de natal. O amperímetro acusa uma corrente de 2 A.\na) Calcule a resistência total do circuito.\nb) Determine o valor lido pelo voltímetro.\nc) Suponha que se queime a lâmpada L3. Quais as lâmpadas que permanecerão acesas?\nNa figura: L1 = 2 Ω, L2 = 3 Ω, L3 = 2 Ω, L4 = 1 Ω e L5 = 4 Ω, todas em série num só circuito; o voltímetro está ligado aos dois extremos do circuito, em paralelo com a fonte (ver figura).",
      "passos": [
        "a) As cinco lâmpadas estão todas no mesmo caminho da corrente — é uma ligação em série. A resistência total é a soma: R = 2 + 3 + 2 + 1 + 4 = 12 Ω.",
        "b) O voltímetro está ligado aos dois extremos do circuito, isto é, em paralelo com a fonte: lê a tensão total do circuito. Pela lei de Ohm, U = R × I = 12 × 2 = 24 V.",
        "Verificação de b): as quedas de tensão somam a tensão total — 2×2 + 3×2 + 2×2 + 1×2 + 4×2 = 4 + 6 + 4 + 2 + 8 = 24 V.",
        "c) Numa ligação em série há um só caminho para a corrente: se L3 queimar, o circuito fica interrompido e a corrente deixa de passar em todo ele. Nenhuma lâmpada permanece acesa."
      ],
      "resposta": "a) R = 12 Ω; b) U = 24 V; c) nenhuma — o circuito em série fica interrompido"
    },
    {
      "numero": 7,
      "cotacao": "3,5",
      "enunciado": "O gráfico mostra como varia a corrente eléctrica através de um condutor metálico quando nas suas extremidades se aplica uma d.d.p variável.\nO gráfico U(I) é uma recta que passa pela origem: para I = 5 A lê-se U = 300 V e para I = 10 A lê-se U = 600 V (ver figura).\nAssinale com V as afirmações verdadeiras e com F as falsas.\nA O condutor a que este gráfico se refere, não obedece à lei de Ohm.\nB O condutor dissipa uma potência de 60 W quando a corrente é de 1 A.\nC A tensão eléctrica é directamente proporcional à resistência do condutor.\nD A resistência deste condutor é de 60 Ω.\nE A potência dissipada no condutor é a mesma, qualquer que seja a tensão aplicada.",
      "passos": [
        "Primeiro, a resistência: o gráfico é uma recta pela origem, e o declive é R = U/I = 300/5 = 60 Ω (confirmação: 600/10 = 60 Ω). Logo D é verdadeira.",
        "A é falsa: uma recta U(I) que passa pela origem, com U directamente proporcional a I, é exactamente a lei de Ohm — o condutor obedece-lhe, e a sua resistência é constante.",
        "B é verdadeira: para I = 1 A, a tensão é U = R × I = 60 × 1 = 60 V, logo a potência é P = U × I = 60 × 1 = 60 W.",
        "C é falsa: no gráfico, a tensão é directamente proporcional à corrente (U = R·I), não à resistência — a resistência é a constante de proporcionalidade, sempre 60 Ω.",
        "E é falsa: a potência é P = U × I e cresce com a tensão aplicada (por exemplo, a 60 V são 60 W, mas a 300 V são 300 × 5 = 1500 W)."
      ],
      "resposta": "A F; B V; C F; D V; E F"
    },
    {
      "numero": 8,
      "cotacao": "3,5",
      "enunciado": "A onda cujo perfil está representado na figura, propaga-se com uma frequência de 60 Hz. Calcule:\na) a amplitude.\nb) o comprimento de onda.\nc) a velocidade da onda e o período.\nNa figura: a distância vertical entre a linha de equilíbrio (tracejado superior) e o nível dos vales (tracejado inferior) está marcada como 12 cm; a seta horizontal entre a 1.ª e a 3.ª cristas mede 60 cm (ver figura).",
      "passos": [
        "a) A amplitude é a distância máxima à posição de equilíbrio. A linha de equilíbrio é o tracejado superior (passa a meio caminho entre cristas e vales) e o nível dos vales é o tracejado inferior: a distância marcada entre eles é 12 cm. Logo A = 12 cm = 0,12 m. Confirmação: a distância da crista à linha de equilíbrio é a mesma (a onda é simétrica).",
        "b) A seta de 60 cm vai da 1.ª à 3.ª crista, ou seja, abrange dois comprimentos de onda: 2λ = 60 cm, logo λ = 30 cm = 0,30 m.",
        "c) A velocidade é v = λ × f = 0,30 × 60 = 18 m/s. O período é T = 1/f = 1/60 ≈ 0,0167 s.",
        "Verificação: v = λ/T = 0,30/(1/60) = 0,30 × 60 = 18 m/s — o mesmo valor."
      ],
      "resposta": "a) A = 12 cm (0,12 m); b) λ = 30 cm (0,30 m); c) v = 18 m/s; T ≈ 0,0167 s"
    }
  ]
}]);
