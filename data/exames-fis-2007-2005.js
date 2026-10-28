// PreparaMZ — Lote 12: Física 10ª classe, 2007 (1ª Época), 2006 (1ª Época) e 2005 (1ª Época), transcritos das folhas oficiais e resolvidos passo a passo pela equipa PreparaMZ. Junta-se a window.EXAMES sem alterar os ficheiros anteriores.
window.EXAMES = window.EXAMES.concat([
  {
    "ano": 2007,
    "chamada": "1ª Época",
    "classe": "10ª Classe",
    "disciplina": "Física",
    "duracao": "90 Minutos",
    "fonteEnunciado": "Exame oficial 2007, Conselho Nacional de Exames, Certificação e Equivalências (Moçambique)",
    "id": "fis-10-2007-1",
    "originalPdf": "https://storage.mozexames.com/papers/494e0a46-a593-4ac7-bc05-d992462002b1/question.pdf",
    "perguntas": [
      {
        "cotacao": "3,0",
        "enunciado": "O gráfico representa a velocidade em função do tempo de um carro.\na) Classifique o movimento do carro.\nb) Calcule a aceleração.\nc) Calcule o espaço percorrido após 6 segundos.\nNo gráfico v(t): a velocidade cresce em linha recta desde a origem — 10 m/s aos 2 s, 20 m/s aos 4 s e 30 m/s aos 6 s (ver figura).",
        "numero": 1,
        "passos": [
          "a) No gráfico v(t) a velocidade cresce em linha recta a partir da origem: a velocidade é proporcional ao tempo, logo a aceleração é constante e o movimento é rectilíneo uniformemente acelerado (MRUA).",
          "b) A aceleração é o declive da recta: a = Δv/Δt = 30/6 = 5 m/s².",
          "Verificação de b): entre 2 s e 4 s, a = (20 − 10)/(4 − 2) = 10/2 = 5 m/s² — o mesmo valor, como exige uma recta.",
          "c) O espaço é a área do gráfico v(t) até aos 6 s: um triângulo de base 6 s e altura 30 m/s, logo s = ½ × 6 × 30 = 90 m.",
          "Verificação de c): com aceleração constante e partida do repouso, s = ½·a·t² = ½ × 5 × 6² = ½ × 5 × 36 = 90 m — o mesmo valor."
        ],
        "resposta": "a) MRUA (rectilíneo uniformemente acelerado); b) a = 5 m/s²; c) s = 90 m"
      },
      {
        "cotacao": "3,0",
        "enunciado": "A figura mostra a Rita a equilibrar uma pedra grande através de uma alavanca.\na) Que tipo de alavanca está representada na figura?\nb) Calcule o valor do comprimento X.\nNa figura: a pedra exerce 2000 N a 0,5 m à esquerda do apoio; a Rita, de 40 kg, está na extremidade direita, a uma distância X do apoio (ver figura).",
        "numero": 2,
        "passos": [
          "a) O apoio (fulcro) está entre a pedra (resistência) e a Rita (força): é uma alavanca interfixa, do 1.º género.",
          "b) Em equilíbrio, os momentos em relação ao apoio são iguais: momento da pedra = momento da Rita, ou seja, 2000 × 0,5 = F(Rita) × X.",
          "A força da Rita é o seu peso: F(Rita) = 40 × 10 = 400 N (com g = 10 m/s², valor usado no currículo).",
          "Logo X = (2000 × 0,5)/400 = 1000/400 = 2,5 m.",
          "Verificação: 400 × 2,5 = 1000 N·m e 2000 × 0,5 = 1000 N·m — os dois momentos são iguais, logo a alavanca está equilibrada."
        ],
        "resposta": "a) alavanca interfixa (1.º género); b) X = 2,5 m"
      },
      {
        "cotacao": "4,0",
        "enunciado": "A figura representa uma carga eléctrica de 4 µC.\na) O valor do potencial eléctrico é maior em A ou B?\nb) Calcule o valor do potencial eléctrico no ponto A. (Use: K = 9.10⁹ N.m².C⁻²)\nNa figura: o ponto A está a 2 cm à esquerda da carga Q1 = 4 µC e o ponto B a 4 cm à direita (ver figura).",
        "numero": 3,
        "passos": [
          "a) O potencial criado por uma carga pontual é V = K·Q/r: quanto menor a distância r, maior o potencial. A está a 2 cm e B a 4 cm da carga, logo o potencial é maior em A.",
          "b) Converte-se a distância para metros: r(A) = 2 cm = 0,02 m. Então V(A) = K·Q/r = 9×10⁹ × 4×10⁻⁶ / 0,02 = 36000/0,02 = 1,8×10⁶ V.",
          "Verificação de b): em B, V(B) = 36000/0,04 = 9,0×10⁵ V, exactamente metade de V(A) — coerente, porque a distância duplicou e V é inversamente proporcional a r."
        ],
        "resposta": "a) em A; b) V(A) = 1,8×10⁶ V"
      },
      {
        "cotacao": "5,0",
        "enunciado": "As cafeteiras eléctricas têm em geral, uma potência de 2200 W. A tensão da corrente é de 220 V.\na) Defina potência eléctrica.\nb) Calcule a intensidade da corrente que atravessa a resistência de uma cafeteira ao aquecer a água.\nc) Calcule o valor da resistência eléctrica da cafeteira.",
        "numero": 4,
        "passos": [
          "a) A potência eléctrica é a energia eléctrica transformada (ou consumida) por unidade de tempo: P = E/t. É também o produto da tensão pela intensidade, P = U·I.",
          "b) De P = U·I tira-se I = P/U = 2200/220 = 10 A.",
          "c) Da lei de Ohm, U = R·I, tira-se R = U/I = 220/10 = 22 Ω.",
          "Verificação: P = U²/R = 220²/22 = 48400/22 = 2200 W — a potência dada no enunciado."
        ],
        "resposta": "a) P = E/t — energia eléctrica transformada por segundo; b) I = 10 A; c) R = 22 Ω"
      },
      {
        "cotacao": "5,0",
        "enunciado": "A figura mostra um oscilador de mola, que oscila entre os pontos A e B. O ponto “O” é a posição de equilíbrio.\na) Qual é o valor da amplitude?\nb) Calcule o período das oscilações.\nc) Calcule a frequência das oscilações.\nNa figura: a mola tem constante k = 200 N/m e o bloco tem massa 0,5 kg; a distância de A a O e de O a B é de 4 cm cada (ver figura).",
        "numero": 5,
        "passos": [
          "a) A amplitude é a distância máxima à posição de equilíbrio: de O a A (ou de O a B) são 4 cm, logo A = 4 cm.",
          "b) O período do oscilador de mola é T = 2π√(m/k) = 2π√(0,5/200) = 2π√0,0025 = 2π × 0,05 = 0,1π ≈ 0,31 s (com π ≈ 3,14).",
          "Nota de b): com π = 3, valor muitas vezes usado nas folhas, obtém-se T = 0,3 s.",
          "c) A frequência é o inverso do período: f = 1/T = 1/(0,1π) = 10/π ≈ 3,2 Hz (com π = 3, f ≈ 3,3 Hz).",
          "Verificação de b) e c): a pulsação é ω = √(k/m) = √(200/0,5) = √400 = 20 rad/s, e T = 2π/ω = 2π/20 = 0,1π s — o mesmo período."
        ],
        "resposta": "a) A = 4 cm; b) T ≈ 0,31 s (0,3 s com π = 3); c) f ≈ 3,2 Hz (3,3 Hz com π = 3)"
      }
    ],
    "totalPerguntas": 5
  },
  {
    "ano": 2006,
    "chamada": "1ª Época",
    "classe": "10ª Classe",
    "disciplina": "Física",
    "duracao": "90 Minutos",
    "fonteEnunciado": "Exame oficial 2006, Conselho Nacional de Exames, Certificação e Equivalências (Moçambique)",
    "id": "fis-10-2006-1",
    "originalPdf": "https://storage.mozexames.com/papers/744a060c-94a6-4d48-9720-1b5be54a43fa/question.pdf",
    "perguntas": [
      {
        "cotacao": "4,0",
        "enunciado": "A tabela corresponde ao movimento de um carro de corridas, do piloto Alemão Michael Shummacher, durante a partida de mais uma prova de Fórmula 1.\nt (s): 0 | 2 | 4 | X\nV (m/s): 0 | 20 | Y | 60\na (m/s²): 10 | Z | 10 | 10\na) Calcule os valores representados pelas letras X, Y e Z.\nb) Construa o gráfico da aceleração em função do tempo.",
        "numero": 1,
        "passos": [
          "A aceleração é constante e igual a 10 m/s² nas três colunas conhecidas: o movimento é uniformemente acelerado e v = a·t (partida do repouso).",
          "a) Y é a velocidade aos 4 s: Y = 10 × 4 = 40 m/s.",
          "a) X é o instante em que a velocidade é 60 m/s: 60 = 10 × X, logo X = 6 s.",
          "a) Z é a aceleração aos 2 s: como a aceleração é constante, Z = 10 m/s².",
          "Verificação de a): v(2 s) = 10 × 2 = 20 m/s — o valor da tabela.",
          "b) O gráfico a(t) é uma recta horizontal em a = 10 m/s², de t = 0 s a t = 6 s (ver figura na resolução)."
        ],
        "resposta": "a) X = 6 s; Y = 40 m/s; Z = 10 m/s²; b) recta horizontal em a = 10 m/s² entre 0 e 6 s"
      },
      {
        "cotacao": "3,5",
        "enunciado": "A figura representa um espelho esférico por si estudado e um objecto AB colocado entre o centro de curvatura “C” e o foco “F”. Sabe-se que a distância focal do espelho é de 3 cm e que o objecto AB está a 6 cm do vértice “V”.\na) Identifique o tipo de espelho.\nb) Determine geometricamente, na sua folha de respostas, a imagem dada pelo espelho do objecto AB.\nc) Caracterize a imagem dada pelo espelho.\nNa figura: o espelho tem o vértice V à direita, com C e F marcados no eixo principal; o objecto AB está entre C e F (ver figura).",
        "numero": 2,
        "passos": [
          "a) A superfície reflectora está voltada para o objecto e o centro de curvatura C está à frente do espelho: é um espelho côncavo.",
          "b) Construção (ver figura na resolução): o raio que parte de A paralelamente ao eixo reflecte-se passando pelo foco F; o raio que parte de A e passa pelo centro C reflecte-se sobre si próprio. Os dois raios reflectidos cruzam-se além de C, abaixo do eixo: aí está a imagem A'B'.",
          "c) A imagem é real (forma-se pelo cruzamento dos raios reflectidos e pode projectar-se num écran), invertida e maior do que o objecto, situada além do centro de curvatura C.",
          "Nota: os 6 cm impressos colocariam o objecto exactamente sobre C (2f = 6 cm), caso em que a imagem ficaria em C, do mesmo tamanho; a construção segue o texto e a figura da folha, que colocam o objecto entre C e F — é esse o caso que a pergunta pede para caracterizar."
        ],
        "resposta": "a) espelho côncavo; b) imagem A'B' além de C, invertida (ver figura); c) real, invertida e maior, além de C"
      },
      {
        "cotacao": "4,0",
        "enunciado": "Todos os condutores oferecem sempre uma oposição à passagem da corrente eléctrica.\na) Defina resistência eléctrica de um condutor.\nb) Mencione apenas dois factores de que depende a resistência eléctrica de um condutor.\nc) Calcule a resistência de um condutor de alumínio de um cabo de alta tensão, de 1000 m de comprimento e uma secção transversal de 8,0.10⁻⁵ m², sabendo que a resistividade do alumínio é de 2,8.10⁻⁸ Ω.m.",
        "numero": 3,
        "passos": [
          "a) A resistência eléctrica de um condutor é a oposição que ele oferece à passagem da corrente eléctrica: R = U/I, em ohm (Ω).",
          "b) Dois factores: o comprimento do condutor (quanto maior o comprimento, maior a resistência) e a área da secção transversal (quanto maior a secção, menor a resistência). A natureza do material (resistividade) e a temperatura são outros dois factores.",
          "c) R = ρ·L/A = 2,8×10⁻⁸ × 1000 / (8,0×10⁻⁵) = 2,8×10⁻⁵ / 8,0×10⁻⁵ = 0,35 Ω.",
          "Verificação de c): 0,35 × 8,0×10⁻⁵ = 2,8×10⁻⁵ = ρ·L — o produto fecha com os dados."
        ],
        "resposta": "a) oposição à passagem da corrente, R = U/I; b) comprimento e secção transversal (ou material e temperatura); c) R = 0,35 Ω"
      },
      {
        "cotacao": "5,0",
        "enunciado": "A figura representa uma carga eléctrica de 16 µC. Assinale com “V” as afirmações verdadeiras e com “F” as falsas. (use K = 9.10⁹ N.m².C⁻²)\na) O potencial eléctrico no ponto A é de 7,2.10⁶ V.\nb) O potencial eléctrico no ponto B é de 3,6.10⁶ V.\nc) O potencial eléctrico no ponto B é 2 vezes maior do que em A, porque a distância em relação à carga aumentou duas vezes.\nd) O potencial eléctrico no ponto B é 2 vezes menor do que em A, porque a distância em relação à carga aumentou duas vezes.\nNa figura: a carga Q = 16 µC é positiva; o ponto A está a 2 cm e o ponto B a 4 cm da carga (ver figura).",
        "numero": 4,
        "passos": [
          "Calcula-se primeiro o produto K·Q = 9×10⁹ × 16×10⁻⁶ = 144000 V·m.",
          "a) V(A) = 144000/0,02 = 7,2×10⁶ V — a afirmação é verdadeira.",
          "b) V(B) = 144000/0,04 = 3,6×10⁶ V — a afirmação é verdadeira.",
          "c) O potencial é inversamente proporcional à distância (V = KQ/r): ao duplicar a distância, o potencial passa a metade, não ao dobro — a afirmação é falsa.",
          "d) V(B) = 3,6×10⁶ V é exactamente metade de V(A) = 7,2×10⁶ V — a afirmação é verdadeira."
        ],
        "resposta": "a) V; b) V; c) F; d) V"
      },
      {
        "cotacao": "3,5",
        "enunciado": "A figura representa uma carga eléctrica positiva “q” de 2.10⁻⁶ C em movimento, com uma velocidade “V” de 10⁶ m/s, dentro de um campo magnético uniforme “B” de 0,14 T.\na) Determine o sentido e a direcção da força magnética que actua sobre a carga.\nb) Calcule o valor da força magnética.\nNa figura: o campo B sai do plano da página (pontos ⊙) e a carga positiva desloca-se para a direita com velocidade V (ver figura).",
        "numero": 5,
        "passos": [
          "a) A força magnética é perpendicular à velocidade e ao campo (F = q·v×B). Pela regra da mão direita, com v para a direita e B a sair da página, a força tem direcção perpendicular ao plano da página — vertical no desenho — e sentido para baixo.",
          "b) Como v é perpendicular a B, F = q·v·B·sen 90° = 2×10⁻⁶ × 10⁶ × 0,14 × 1 = 0,28 N.",
          "Verificação de b): 2×10⁻⁶ × 10⁶ = 2 e 2 × 0,14 = 0,28 N."
        ],
        "resposta": "a) direcção perpendicular ao plano (vertical), sentido para baixo; b) F = 0,28 N"
      }
    ],
    "totalPerguntas": 5
  },
  {
    "ano": 2005,
    "chamada": "1ª Época",
    "classe": "10ª Classe",
    "disciplina": "Física",
    "duracao": "90 Minutos",
    "fonteEnunciado": "Exame oficial 2005, Conselho Nacional de Exames, Certificação e Equivalências (Moçambique)",
    "id": "fis-10-2005-1",
    "originalPdf": "https://storage.mozexames.com/papers/86fed64f-8eaf-42d0-93c9-d7fc837f0701/question.pdf",
    "perguntas": [
      {
        "cotacao": "4,0",
        "enunciado": "O gráfico corresponde ao movimento rectilíneo de um avião das LAM a levantar voo no Aeroporto Internacional da Beira.\na) Quanto tempo gastou o avião a levantar voo?\nb) Calcule a aceleração do movimento.\nc) Calcule o espaço percorrido pelo avião até levantar voo.\nNo gráfico v(t): a velocidade cresce em linha recta desde a origem — 25 m/s aos 10 s, 50 m/s aos 20 s e 75 m/s aos 30 s (ver figura).",
        "numero": 1,
        "passos": [
          "a) O avião levanta voo quando a recta do gráfico termina: aos 30 s, com 75 m/s.",
          "b) A aceleração é o declive da recta: a = Δv/Δt = 75/30 = 2,5 m/s².",
          "Verificação de b): entre 10 s e 20 s, a = (50 − 25)/(20 − 10) = 25/10 = 2,5 m/s² — o mesmo valor.",
          "c) O espaço é a área do gráfico v(t) até aos 30 s: um triângulo de base 30 s e altura 75 m/s, logo s = ½ × 30 × 75 = 1125 m.",
          "Verificação de c): s = ½·a·t² = ½ × 2,5 × 30² = ½ × 2,5 × 900 = 1125 m — o mesmo valor."
        ],
        "resposta": "a) 30 s; b) a = 2,5 m/s²; c) s = 1125 m"
      },
      {
        "cotacao": "3,5",
        "enunciado": "O gráfico representa a transformação sofrida por um gás.\na) Identifique a transformação que o gás sofre de A para B.\nb) Qual é a pressão do gás quando o volume é de 4.10⁻³ m³?\nc) Calcule a temperatura do gás em B, sabendo que a sua temperatura em A é de 400 K.\nNo gráfico p(V): de A (V = 2×10⁻³ m³) a B (V = 6×10⁻³ m³) a pressão mantém-se em 2×10⁵ Pa (ver figura).",
        "numero": 2,
        "passos": [
          "a) De A para B o segmento é horizontal: a pressão não muda enquanto o volume aumenta — é uma transformação isobárica (a pressão constante).",
          "b) Como a pressão é constante em todo o segmento AB, quando o volume é 4×10⁻³ m³ (entre A e B) a pressão continua a ser 2×10⁵ Pa.",
          "c) A pressão constante, V/T é constante: V(A)/T(A) = V(B)/T(B), logo T(B) = T(A) × V(B)/V(A) = 400 × 6/2 = 1200 K.",
          "Verificação de c): V(A)/T(A) = 2/400 = 0,005 e V(B)/T(B) = 6/1200 = 0,005 — a razão é a mesma."
        ],
        "resposta": "a) isobárica; b) p = 2×10⁵ Pa; c) T(B) = 1200 K"
      },
      {
        "cotacao": "4,0",
        "enunciado": "A figura representa uma carga eléctrica de 16 µC. Assinale com “V” as afirmações verdadeiras e com “F” as falsas. (use K = 9.10⁹ N.m².C⁻²)\na) A intensidade do campo eléctrico no ponto A é de 3,6.10⁸ N/C.\nb) A intensidade do campo eléctrico no ponto B é de 3,6.10⁸ N/C.\nc) A intensidade do campo eléctrico no ponto B é 4 vezes menor do que em A, porque a distância em relação à carga aumentou duas vezes.\nd) A intensidade do campo eléctrico no ponto B é 4 vezes maior do que em A, porque a distância em relação à carga aumentou duas vezes.\nNa figura: a carga Q = 16 µC é positiva; o ponto A está a 2 cm e o ponto B a 4 cm da carga (ver figura).",
        "numero": 3,
        "passos": [
          "O campo criado por uma carga pontual é E = K·Q/r², com K·Q = 9×10⁹ × 16×10⁻⁶ = 144000 N·m²/C.",
          "a) E(A) = 144000/(0,02²) = 144000/0,0004 = 3,6×10⁸ N/C — a afirmação é verdadeira.",
          "b) E(B) = 144000/(0,04²) = 144000/0,0016 = 9,0×10⁷ N/C, e não 3,6×10⁸ N/C — a afirmação é falsa.",
          "c) O campo é inversamente proporcional ao quadrado da distância: ao duplicar a distância, o campo passa a um quarto (4 vezes menor) — a afirmação é verdadeira.",
          "d) Pela mesma razão, o campo em B não pode ser 4 vezes maior — a afirmação é falsa."
        ],
        "resposta": "a) V; b) F; c) V; d) F"
      },
      {
        "cotacao": "4,5",
        "enunciado": "Observe o circuito eléctrico dado.\na) Calcule a resistência equivalente do circuito.\nb) Calcule o valor indicado pelo amperímetro.\nc) Calcule a tensão da fonte para que a intensidade da corrente no circuito seja de 9 A.\nNo circuito: fonte de 24 V em série com R1 = 2 Ω e com o paralelo R2 = 6 Ω // R3 = 3 Ω; o amperímetro está no ramo principal (ver figura).",
        "numero": 4,
        "passos": [
          "a) O paralelo de R2 e R3 vale Rp = (6 × 3)/(6 + 3) = 18/9 = 2 Ω. Em série com R1: Req = 2 + 2 = 4 Ω.",
          "b) O amperímetro está no ramo principal e mede a corrente total: I = U/Req = 24/4 = 6 A.",
          "c) Para uma corrente de 9 A no mesmo circuito, a tensão tem de ser U = Req × I = 4 × 9 = 36 V.",
          "Verificação de c): com 9 A, a queda em R1 é 2 × 9 = 18 V e a queda no paralelo é 2 × 9 = 18 V; 18 + 18 = 36 V — a tensão da fonte."
        ],
        "resposta": "a) Req = 4 Ω; b) I = 6 A; c) U = 36 V"
      },
      {
        "cotacao": "4,0",
        "enunciado": "A figura representa a elongação das oscilações do pêndulo de um relógio.\na) Qual é a amplitude das oscilações?\nb) Determine o período das oscilações.\nc) Calcule o comprimento do pêndulo. (use g = 9,8 m/s²)\nNo gráfico y(t): a elongação oscila entre +3 m e −3 m; a curva passa por zero a subir em t = 0, 2 e 4 s (ver figura).",
        "numero": 5,
        "passos": [
          "a) A amplitude é o valor máximo da elongação: a curva chega a +3 m e a −3 m, logo A = 3 m.",
          "b) Entre dois zeros consecutivos a subir (t = 0 s e t = 2 s) passa uma oscilação completa, logo T = 2 s.",
          "Verificação de b): as cristas sucedem-se a cerca de 0,5 s e 2,5 s — também separadas por 2 s.",
          "c) O período do pêndulo simples é T = 2π√(L/g). Isolando L: L = g·T²/(4π²) = 9,8 × 2²/(4π²) = 9,8/π² ≈ 9,8/9,87 ≈ 0,99 m, ou seja, cerca de 1,0 m.",
          "Verificação de c): com L = 1,0 m, T = 2π√(1,0/9,8) ≈ 2 × 3,14 × 0,319 ≈ 2,0 s — o período da alínea b)."
        ],
        "resposta": "a) A = 3 m; b) T = 2 s; c) L ≈ 1,0 m"
      }
    ],
    "totalPerguntas": 5
  }
]);
