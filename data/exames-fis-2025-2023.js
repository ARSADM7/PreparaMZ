// PreparaMZ — Lote 7: Física 10ª classe, 2025, 2024 e 2023 (1ª Chamada de cada ano),
// transcritos das folhas oficiais INEC/MINEDH e resolvidos passo a passo
// pela equipa PreparaMZ. Junta-se a window.EXAMES sem alterar os ficheiros
// anteriores. (A 2ª Chamada de 2023 ficou de fora: o PDF do arquivo só tem
// a 1.ª página — faltam as perguntas 8 a 10 na fonte; ver PRODUCAO-RESOLUCOES.md.)
window.EXAMES = window.EXAMES.concat([
  {
    "id": "fis-10-2025-1",
    "disciplina": "Física",
    "classe": "10ª Classe",
    "ano": 2025,
    "chamada": "1ª Chamada",
    "duracao": "90 Minutos",
    "totalPerguntas": 10,
    "fonteEnunciado": "Exame Final oficial ES1/2025, Instituto Nacional de Exames, Certificação e Equivalências (Moçambique)",
    "originalPdf": "https://storage.mozexames.com/papers/65ec46c2-814c-4423-a363-ed0c424d364d/question.pdf",
    "perguntas": [
      {
        "numero": 1,
        "cotacao": "1,0",
        "enunciado": "Em qual das figuras está representado o sentido real da corrente eléctrica?",
        "passos": [
          "O sentido real da corrente eléctrica é o sentido do movimento das cargas que realmente se deslocam num condutor metálico: os electrões livres.",
          "Os electrões têm carga negativa, por isso deslocam-se em sentido contrário ao do campo eléctrico E (o sentido convencional é o contrário: é o sentido em que se moveriam cargas positivas).",
          "Na figura A, os portadores são electrões (⊖) e as setas mostram-nos a mover-se para a esquerda, em sentido contrário a E, que aponta para a direita — é o sentido real.",
          "Na figura B, os portadores positivos movem-se a favor de E: seria o sentido convencional, não o real. Na figura C, os portadores positivos movem-se contra E, o que fisicamente não acontece."
        ],
        "resposta": "Figura A"
      },
      {
        "numero": 2,
        "cotacao": "1,0",
        "enunciado": "Qual dos seguintes gráficos representa corrente eléctrica alternada?",
        "passos": [
          "A corrente alternada muda periodicamente de intensidade e de sentido: o gráfico I(t) é uma onda (sinusóide) que cruza o eixo dos tempos, com valores positivos e negativos.",
          "O gráfico A é uma sinusóide desse tipo. O gráfico B mostra uma corrente que cresce sempre no mesmo sentido, o C uma corrente constante (corrente contínua) e o D uma corrente que diminui até zero sem mudar de sinal — nenhum deles é alternada."
        ],
        "resposta": "Gráfico A"
      },
      {
        "numero": 3,
        "cotacao": "2,0",
        "enunciado": "Por um condutor metálico, passam 4x10¹⁸ electrões em 4 segundos. Determine, em Amperes, o valor da intensidade de corrente eléctrica que passa pelo condutor. (e=1,6x10⁻¹⁹C)",
        "passos": [
          "Primeiro, a carga total que atravessa o condutor: Q = n × e = 4×10¹⁸ × 1,6×10⁻¹⁹ C = 0,64 C.",
          "A intensidade de corrente é a carga que passa por unidade de tempo: I = Q/Δt = 0,64/4 = 0,16 A.",
          "Verificação pelo caminho inverso: com I = 0,16 A, em 4 s passariam Q = I × Δt = 0,16 × 4 = 0,64 C, ou seja, 0,64/(1,6×10⁻¹⁹) = 4×10¹⁸ electrões — exactamente o número dado ✓."
        ],
        "resposta": "I = 0,16 A"
      },
      {
        "numero": 4,
        "cotacao": "2,0",
        "enunciado": "Qual deve ser, em Ohm, a resistência de um condutor de Cobre de 30m de comprimento e 3mm² de área de secção transversal? (ρ=1,7x10⁻⁸ Ωmm²/m)",
        "passos": [
          "A resistência de um condutor calcula-se por R = ρ × L/A, em que ρ é a resistividade do material.",
          "Converte a área para metros quadrados: A = 3 mm² = 3×10⁻⁶ m². Com ρ(cobre) = 1,7×10⁻⁸ Ω·m e L = 30 m:",
          "R = (1,7×10⁻⁸ × 30)/(3×10⁻⁶) = (5,1×10⁻⁷)/(3×10⁻⁶) = 0,17 Ω.",
          "Nota de leitura: a folha imprime a unidade de ρ como «Ωmm²/m»; o valor numérico é o da resistividade do cobre no SI (Ω·m), e é com ele, e com a área em m², que o cálculo fecha. Verificação de ordem de grandeza: um fio de cobre comprido mas com 3 mm² de secção tem resistência pequena, inferior a 1 Ω ✓."
        ],
        "resposta": "R = 0,17 Ω"
      },
      {
        "numero": 5,
        "cotacao": "3,5",
        "enunciado": "A figura a seguir representa um circuito eléctrico onde a ddp entre os pontos A e B é igual 20V. Determine:\na) a resistência equivalente.\nb) a intensidade total da corrente eléctrica.",
        "passos": [
          "Lê a figura: R₁ = 2,5 Ω e R₂ = 10 Ω estão em paralelo, e esse conjunto está em série com R₃ = 2 Ω, entre A e B.",
          "a) Paralelo: 1/R₁₂ = 1/2,5 + 1/10 = 0,4 + 0,1 = 0,5 → R₁₂ = 1/0,5 = 2 Ω. (Confirmação pelo produto sobre a soma: (2,5 × 10)/(2,5 + 10) = 25/12,5 = 2 Ω ✓.)",
          "a) Série com R₃: Req = R₁₂ + R₃ = 2 + 2 = 4 Ω.",
          "b) Pela lei de Ohm para o circuito completo: I = UAB/Req = 20/4 = 5 A.",
          "Verificação pelas quedas de tensão: no bloco em paralelo caem I × R₁₂ = 5 × 2 = 10 V e em R₃ caem 5 × 2 = 10 V; 10 + 10 = 20 V, a ddp dada ✓. Nos ramos do paralelo: I₁ = 10/2,5 = 4 A e I₂ = 10/10 = 1 A, e 4 + 1 = 5 A, a corrente total ✓."
        ],
        "resposta": "a) Req = 4 Ω · b) I = 5 A"
      },
      {
        "numero": 6,
        "cotacao": "2,0",
        "enunciado": "Um aquecedor tem a potência de 400W e foi ligado por 20 segundos a uma fonte doméstica. Qual é, em Joules, a quantidade de energia libertada pelo aquecedor?",
        "passos": [
          "A energia libertada por um aparelho é E = P × Δt, com a potência em watts (J/s) e o tempo em segundos.",
          "E = 400 × 20 = 8000 J.",
          "Verificação: 400 W significa 400 joules por segundo; em 20 segundos são 20 × 400 = 8000 J ✓."
        ],
        "resposta": "E = 8000 J"
      },
      {
        "numero": 7,
        "cotacao": "1,0",
        "enunciado": "A figura representa um sistema composto por 3 pêndulos de comprimentos diferentes, que oscilam próximo da terra. Qual dos pêndulos oscila com menor frequência? Justifique. (L₂> L₁> L₃)",
        "passos": [
          "Para um pêndulo simples, a frequência é f = (1/2π) × √(g/L): quanto maior for o comprimento L, menor é a frequência (e maior é o período T = 2π√(L/g)).",
          "Como L₂ é o maior dos três comprimentos (L₂ > L₁ > L₃), o pêndulo 2 é o que oscila mais devagar, ou seja, com menor frequência."
        ],
        "resposta": "O pêndulo de comprimento L₂ — é o maior, e a frequência diminui quando o comprimento aumenta (f ∝ 1/√L)"
      },
      {
        "numero": 8,
        "cotacao": "2,5",
        "enunciado": "O gráfico representa a propagação de uma onda mecânica de comprimento igual a 8 metros. Determine:\na) o período das oscilações.\nb) a velocidade de propagação.",
        "passos": [
          "Conta as oscilações completas no gráfico: da crista inicial (t = 0) até à crista assinalada a tracejado em t = 24 s contam-se 3 oscilações completas.",
          "a) 3T = 24 s → T = 24/3 = 8 s.",
          "b) A velocidade da onda é v = λ/T = 8/8 = 1 m/s.",
          "Verificação pela frequência: f = 1/T = 1/8 = 0,125 Hz; v = λ × f = 8 × 0,125 = 1 m/s ✓."
        ],
        "resposta": "a) T = 8 s · b) v = 1 m/s"
      },
      {
        "numero": 9,
        "cotacao": "2,0",
        "enunciado": "a) Durante o processo das interacções magnéticas…\nA os pólos magnéticos de nomes diferentes atraem-se.\nB os pólos magnéticos de nomes diferentes repelem-se.\nC as cargas de sinais contrários repelem-se.\nD as cargas de sinais contrários atraem-se.\nb) Quando uma corrente eléctrica atravessa uma bobina cria efeitos…\nA eléctricos.\nB magnéticos.\nC elásticos.\nD químicos.",
        "passos": [
          "a) A regra das interacções magnéticas é: pólos de nomes diferentes atraem-se e pólos do mesmo nome repelem-se. A alternativa correcta é a A. (As alternativas C e D falam de cargas eléctricas, não de interacção magnética.)",
          "b) Uma corrente eléctrica que atravessa uma bobina (solenoide) cria um campo magnético à sua volta — é o princípio do electroíman. Os efeitos criados são magnéticos: alternativa B."
        ],
        "resposta": "a) A · b) B"
      },
      {
        "numero": 10,
        "cotacao": "3,0",
        "enunciado": "A velocidade de um corpo em movimento rectilíneo varia com o tempo de acordo com a tabela.\na) De que tipo de movimento se trata? Justifique.\nb) Qual é, em m/s², a aceleração com que se move esse corpo?",
        "passos": [
          "Lê a tabela: t(s) = 0; 5; 10; 15 e v(m/s) = 0; 25; 50; 75.",
          "a) Em intervalos de tempo iguais (5 s), a velocidade aumenta sempre da mesma quantidade (25 m/s): a aceleração é constante e a velocidade cresce uniformemente — é um movimento rectilíneo uniformemente acelerado (MRUA).",
          "b) a = Δv/Δt = (25 − 0)/(5 − 0) = 25/5 = 5 m/s².",
          "Verificação com outro intervalo da tabela: de 5 s para 15 s, a = (75 − 25)/(15 − 5) = 50/10 = 5 m/s² — o mesmo valor, como tinha de ser num MRUA ✓. E v = a × t: aos 15 s, v = 5 × 15 = 75 m/s, o valor da tabela ✓."
        ],
        "resposta": "a) Movimento rectilíneo uniformemente acelerado — a velocidade aumenta 25 m/s em cada 5 s · b) a = 5 m/s²"
      }
    ]
  },
  {
    "id": "fis-10-2024-1",
    "disciplina": "Física",
    "classe": "10ª Classe",
    "ano": 2024,
    "chamada": "1ª Chamada",
    "duracao": "90 Minutos",
    "totalPerguntas": 10,
    "fonteEnunciado": "Exame Final oficial ES1/2024, Instituto Nacional de Exames, Certificação e Equivalências (Moçambique)",
    "originalPdf": "https://storage.mozexames.com/papers/e2de888a-83e5-42b8-b743-cbff50f63501/question.pdf",
    "perguntas": [
      {
        "numero": 1,
        "cotacao": "1,0",
        "enunciado": "Qual será o sinal das cargas eléctricas, que dois corpos inicialmente neutros adquirem após a electrização por fricção?",
        "passos": [
          "Na electrização por fricção, um dos corpos cede electrões e o outro recebe-os: há transferência de carga de um para o outro, sem criação de carga.",
          "O corpo que perde electrões fica com falta de cargas negativas, ou seja, com carga positiva (+); o corpo que ganha electrões fica com excesso de cargas negativas, ou seja, com carga negativa (−).",
          "Portanto, os dois corpos adquirem cargas de sinais contrários (opostos), com o mesmo valor absoluto."
        ],
        "resposta": "Sinais contrários: um corpo fica positivo (+) e o outro negativo (−)"
      },
      {
        "numero": 2,
        "cotacao": "2,0",
        "enunciado": "Num condutor de bronze, passam 4x10²⁰ electrões em 4 segundos. Qual é, em Amperes, o valor da intensidade de corrente eléctrica que passa por este condutor? (e=1,6x10⁻¹⁹C)",
        "passos": [
          "Carga total transportada: Q = n × e = 4×10²⁰ × 1,6×10⁻¹⁹ C = 64 C.",
          "Intensidade de corrente: I = Q/Δt = 64/4 = 16 A.",
          "Verificação pelo caminho inverso: com I = 16 A, em 4 s passam Q = 16 × 4 = 64 C, isto é, 64/(1,6×10⁻¹⁹) = 4×10²⁰ electrões — o número dado ✓."
        ],
        "resposta": "I = 16 A"
      },
      {
        "numero": 3,
        "cotacao": "2,0",
        "enunciado": "O gráfico mostra a variação da intensidade de corrente eléctrica (I), num condutor, em função da tensão (U).\na) O condutor obedece à lei de Ohm? Justifique.\nb) Qual é, em Ohm, o valor da resistência eléctrica para a tensão de 1,0V?",
        "passos": [
          "a) Um condutor óhmico tem resistência constante, e o seu gráfico I(U) é uma recta que passa pela origem. O gráfico da figura é uma curva (encurva para cima), por isso a razão U/I não é constante: o condutor NÃO obedece à lei de Ohm.",
          "Confirmação com dois pontos do gráfico: para U = 1,0 V, I = 0,2 A → R = 5 Ω; para U = 2,0 V, I = 1,0 A → R = 2 Ω. A resistência muda com a tensão, logo o condutor é não óhmico.",
          "b) Para U = 1,0 V, o gráfico dá I = 0,2 A. Então R = U/I = 1,0/0,2 = 5 Ω."
        ],
        "resposta": "a) Não obedece — o gráfico I(U) não é uma recta que passa pela origem e a resistência não é constante · b) R = 5 Ω"
      },
      {
        "numero": 4,
        "cotacao": "3,0",
        "enunciado": "A figura representa um circuito eléctrico, onde flui de A para B uma corrente eléctrica de 2A.\na) Qual é, em Ohm, a resistência equivalente do circuito?\nb) Qual é, em Volt, o valor da tensão eléctrica total do circuito?",
        "passos": [
          "Lê a figura: R₁ = 3 Ω, R₂ = 6 Ω e R₃ = 3 Ω estão os três em paralelo entre A e B.",
          "a) 1/Req = 1/3 + 1/6 + 1/3 = 2/6 + 1/6 + 2/6 = 5/6 → Req = 6/5 = 1,2 Ω.",
          "b) A tensão total é a tensão entre A e B: U = Req × I = 1,2 × 2 = 2,4 V.",
          "Verificação pelas correntes nos ramos: com 2,4 V em cada resistência, I₁ = 2,4/3 = 0,8 A, I₂ = 2,4/6 = 0,4 A e I₃ = 2,4/3 = 0,8 A; a soma é 0,8 + 0,4 + 0,8 = 2,0 A, a corrente total dada ✓."
        ],
        "resposta": "a) Req = 1,2 Ω · b) U = 2,4 V"
      },
      {
        "numero": 5,
        "cotacao": "2,0",
        "enunciado": "Uma certa quantidade de água é aquecida através de um termo acumulador ligado a uma tomada doméstica de 220V, durante 6 minutos. Qual é, em Joule, a quantidade de energia dissipada em calor, sabendo que a intensidade de corrente eléctrica é de 20A?",
        "passos": [
          "Converte o tempo: Δt = 6 min = 6 × 60 = 360 s.",
          "A energia eléctrica dissipada é E = U × I × Δt = 220 × 20 × 360 = 1 584 000 J.",
          "Verificação pela potência: P = U × I = 220 × 20 = 4400 W; E = P × Δt = 4400 × 360 = 1 584 000 J ✓."
        ],
        "resposta": "E = 1 584 000 J = 1,584×10⁶ J"
      },
      {
        "numero": 6,
        "cotacao": "2,0",
        "enunciado": "Qual é, em segundos, o período de oscilação de um pêndulo de mola, cuja rigidez é de 1N/m, sabendo que na sua extremidade está preso um corpo de massa igual a 4Kg? (Use π = 3)",
        "passos": [
          "O período de um pêndulo de mola (sistema massa-mola) é T = 2π√(m/k), com m em kg e k em N/m.",
          "Substitui: T = 2 × 3 × √(4/1) = 6 × 2 = 12 s.",
          "Verificação: √(4/1) = 2 e 2π ≈ 6 (com π = 3); 6 × 2 = 12 s. Um período longo é plausível: a mola é muito «mole» (k = 1 N/m) e a massa é grande ✓."
        ],
        "resposta": "T = 12 s"
      },
      {
        "numero": 7,
        "cotacao": "2,0",
        "enunciado": "O pêndulo da figura oscila entre os pontos L e M. Ele gasta 1 segundo para sair de L até M. Determine:\na) a amplitude do pêndulo.\nb) o período do pêndulo.",
        "passos": [
          "A figura marca 0,5 m entre os dois extremos L e M. A amplitude é a distância da posição de equilíbrio (o centro) a cada extremo, ou seja, metade da distância entre os extremos.",
          "a) A = 0,5/2 = 0,25 m.",
          "b) Ir de um extremo ao outro (L até M) é meia oscilação completa: T/2 = 1 s → T = 2 s.",
          "Verificação: a frequência seria f = 1/T = 0,5 Hz — em 2 segundos o pêndulo completa exactamente uma oscilação (L → M → L) ✓."
        ],
        "resposta": "a) A = 0,25 m · b) T = 2 s"
      },
      {
        "numero": 8,
        "cotacao": "2,5",
        "enunciado": "O gráfico representa a propagação de uma onda mecânica de comprimento igual a 6 metros. Determine:\na) o período da onda.\nb) a velocidade de propagação da onda.",
        "passos": [
          "Conta as oscilações no gráfico: da crista inicial (t = 0) até à crista assinalada a tracejado em t = 12 s contam-se 2 oscilações completas.",
          "a) 2T = 12 s → T = 12/2 = 6 s.",
          "b) v = λ/T = 6/6 = 1 m/s.",
          "Verificação pela frequência: f = 1/T = 1/6 Hz; v = λ × f = 6 × (1/6) = 1 m/s ✓."
        ],
        "resposta": "a) T = 6 s · b) v = 1 m/s"
      },
      {
        "numero": 9,
        "cotacao": "0,5",
        "enunciado": "Das alternativas abaixo, escolha a que melhor completa a seguinte afirmação:\nNo sul geográfico da terra localiza-se a/o…\nA carga negativa.\nB carga positiva.\nC pólo norte magnético.\nD pólo sul magnético.",
        "passos": [
          "A Terra comporta-se como um íman gigante. A agulha da bússola aponta o seu pólo norte para o norte geográfico porque é atraída por um pólo magnético de nome contrário situado nessa região: perto do norte geográfico está o pólo sul magnético.",
          "Pela mesma lógica, junto ao sul geográfico localiza-se o pólo norte magnético — alternativa C."
        ],
        "resposta": "C — pólo norte magnético"
      },
      {
        "numero": 10,
        "cotacao": "3,0",
        "enunciado": "Um móvel percorre uma trajectória rectilínea de acordo com o gráfico.\na) Classifique o tipo de movimento em cada trajecto (A e B).\nb) Calcule, em m/s², a aceleração do móvel no trajecto A.\nc) Qual é, em metros, o espaço percorrido no intervalo de 2 a 5s?",
        "passos": [
          "Lê o gráfico v(t): no trajecto A (0 a 2 s) a velocidade cresce uniformemente de 0 até 15 m/s; no trajecto B (2 a 5 s) a velocidade fica constante e igual a 15 m/s.",
          "a) Trajecto A: movimento rectilíneo uniformemente acelerado (MRUA). Trajecto B: movimento rectilíneo uniforme (MRU).",
          "b) a = Δv/Δt = (15 − 0)/(2 − 0) = 15/2 = 7,5 m/s².",
          "c) De 2 a 5 s a velocidade é constante (15 m/s) durante 3 s: Δs = v × Δt = 15 × 3 = 45 m. (É a área do rectângulo sob o gráfico nesse intervalo ✓.)"
        ],
        "resposta": "a) A: movimento rectilíneo uniformemente acelerado; B: movimento rectilíneo uniforme · b) a = 7,5 m/s² · c) Δs = 45 m"
      }
    ]
  },
  {
    "id": "fis-10-2023-1",
    "disciplina": "Física",
    "classe": "10ª Classe",
    "ano": 2023,
    "chamada": "1ª Chamada",
    "duracao": "90 Minutos",
    "totalPerguntas": 10,
    "fonteEnunciado": "Exame Final oficial ES1/2023, Instituto Nacional de Exames, Certificação e Equivalências (Moçambique)",
    "originalPdf": "https://storage.mozexames.com/papers/d70caae3-f381-452d-ad59-2a26c9d0fc5e/question.pdf",
    "perguntas": [
      {
        "numero": 1,
        "cotacao": "1,0",
        "enunciado": "Como se chama o instrumento que serve para medir a resistência eléctrica?",
        "passos": [
          "Cada grandeza eléctrica tem o seu instrumento de medida: a intensidade de corrente mede-se com o amperímetro, a tensão com o voltímetro.",
          "A resistência eléctrica mede-se com o ohmímetro (que, na prática, costuma vir integrado no multímetro)."
        ],
        "resposta": "Ohmímetro"
      },
      {
        "numero": 2,
        "cotacao": "2,0",
        "enunciado": "Por um condutor metálico, passam 1,6x10²⁰ electrões em 3,2 segundos. Qual é, em Amperes, o valor da intensidade de corrente eléctrica que passa pelo condutor? (e=1,6x10⁻¹⁹C)",
        "passos": [
          "Carga total: Q = n × e = 1,6×10²⁰ × 1,6×10⁻¹⁹ C = 25,6 C.",
          "Intensidade: I = Q/Δt = 25,6/3,2 = 8 A.",
          "Verificação pelo caminho inverso: com I = 8 A, em 3,2 s passam Q = 8 × 3,2 = 25,6 C, isto é, 25,6/(1,6×10⁻¹⁹) = 1,6×10²⁰ electrões — o número dado ✓."
        ],
        "resposta": "I = 8 A"
      },
      {
        "numero": 3,
        "cotacao": "2,0",
        "enunciado": "O gráfico mostra a variação da intensidade de corrente eléctrica (I) de um condutor em função da tensão (U).\na) O condutor é óhmico ou não óhmico? Justifique.\nb) Qual é, em Ohm, o valor da resistência eléctrica para a tensão de 0,4V?",
        "passos": [
          "a) Um condutor óhmico tem resistência constante e o gráfico I(U) é uma única recta que passa pela origem. No gráfico da figura, a linha é recta só no início e depois encurva para cima: a razão U/I não é constante, logo o condutor é NÃO óhmico.",
          "Confirmação com os pontos assinalados: para U = 0,2 V, I = 0,1 A → R = 0,2/0,1 = 2 Ω; para U = 0,4 V, I = 0,4 A → R = 0,4/0,4 = 1 Ω. A resistência diminui quando a tensão aumenta — não é constante.",
          "b) Para U = 0,4 V, o gráfico dá I = 0,4 A. Então R = U/I = 0,4/0,4 = 1 Ω."
        ],
        "resposta": "a) Não óhmico — o gráfico não é uma única recta a passar pela origem e a resistência varia com a tensão · b) R = 1 Ω"
      },
      {
        "numero": 4,
        "cotacao": "1,0",
        "enunciado": "Dois condutores metálicos A e B, de comprimentos diferentes e constituídos pelo mesmo material, possuem áreas de secção transversal diferentes. Qual é a grandeza física que o condutor A apresenta igual ao condutor B?",
        "passos": [
          "A resistência R = ρL/A depende do comprimento e da área — como L e A são diferentes nos dois condutores, as suas resistências são, em geral, diferentes.",
          "A resistividade ρ, porém, é uma propriedade do material (à mesma temperatura): não depende das dimensões do condutor. Como os dois condutores são do mesmo material, têm a mesma resistividade."
        ],
        "resposta": "A resistividade (ρ) do material"
      },
      {
        "numero": 5,
        "cotacao": "3,0",
        "enunciado": "A figura representa um circuito eléctrico, onde flui de A para B uma corrente eléctrica de 5A.\na) Qual é, em Ohm, a resistência equivalente do circuito?\nb) Qual é, em Volt, o valor da tensão eléctrica na resistência 1?",
        "passos": [
          "Lê a figura: a resistência 1 (R₁ = 3 Ω) está em série com o paralelo de R₂ = 3 Ω e R₃ = 6 Ω; a corrente total de A para B é 5 A.",
          "a) Paralelo: R₂₃ = (3 × 6)/(3 + 6) = 18/9 = 2 Ω. Série com R₁: Req = 3 + 2 = 5 Ω.",
          "b) A resistência 1 está em série no ramo principal, por isso é atravessada pela corrente total de 5 A: U₁ = R₁ × I = 3 × 5 = 15 V.",
          "Verificação pelas quedas de tensão: a tensão total é U = Req × I = 5 × 5 = 25 V; no bloco em paralelo caem 5 × 2 = 10 V; 15 + 10 = 25 V ✓. E as correntes nos ramos do paralelo somam a total: 10/3 + 10/6 ≈ 3,33 + 1,67 = 5 A ✓."
        ],
        "resposta": "a) Req = 5 Ω · b) U₁ = 15 V"
      },
      {
        "numero": 6,
        "cotacao": "2,5",
        "enunciado": "Em 10 minutos, aqueceu-se uma certa quantidade de água através de um termo acumulador ligado a uma tomada doméstica de 220V. Qual é, em Joule, a quantidade de energia dissipada em calor, sabendo que a intensidade de corrente eléctrica é de 10A?",
        "passos": [
          "Converte o tempo: Δt = 10 min = 10 × 60 = 600 s.",
          "A energia dissipada é E = U × I × Δt = 220 × 10 × 600 = 1 320 000 J.",
          "Verificação pela potência: P = U × I = 220 × 10 = 2200 W; E = P × Δt = 2200 × 600 = 1 320 000 J ✓."
        ],
        "resposta": "E = 1 320 000 J = 1,32×10⁶ J"
      },
      {
        "numero": 7,
        "cotacao": "2,5",
        "enunciado": "Qual é, em segundos, o período de oscilação de um pêndulo mola de 4000N/m de rigidez, sabendo que na sua extremidade está preso um corpo de massa de 1000Kg? (Use π = 3)",
        "passos": [
          "O período do pêndulo de mola é T = 2π√(m/k).",
          "Substitui os dados: T = 2 × 3 × √(1000/4000) = 6 × √0,25 = 6 × 0,5 = 3 s.",
          "Verificação: m/k = 1000/4000 = 0,25 e √0,25 = 0,5; com 2π ≈ 6, fica 6 × 0,5 = 3 s ✓."
        ],
        "resposta": "T = 3 s"
      },
      {
        "numero": 8,
        "cotacao": "2,0",
        "enunciado": "O pêndulo da figura oscila entre os pontos X e Y passando pelo ponto O. Ele gasta 2 segundos para sair de X até Y.\na) Determine a amplitude das oscilações.\nb) Qual é, em segundos, o período do pêndulo?",
        "passos": [
          "A figura marca 0,8 m entre os extremos X e Y, e O é a posição de equilíbrio, a meio. A amplitude é a distância de O a cada extremo.",
          "a) A = 0,8/2 = 0,4 m.",
          "b) De X até Y o pêndulo faz meia oscilação completa: T/2 = 2 s → T = 4 s.",
          "Verificação: a frequência seria f = 1/T = 0,25 Hz — uma oscilação completa (X → Y → X) demora 4 s, dos quais 2 s são a ida de X a Y ✓."
        ],
        "resposta": "a) A = 0,4 m · b) T = 4 s"
      },
      {
        "numero": 9,
        "cotacao": "2,5",
        "enunciado": "O gráfico representa a propagação de uma onda mecânica de comprimento igual a 3 metros. Determine:\na) a amplitude da onda.\nb) o período da onda.\nc) a velocidade de propagação da onda.",
        "passos": [
          "a) A amplitude é o afastamento máximo em relação à linha de equilíbrio: o gráfico marca +0,3 m nas cristas e −0,3 m nos vales, logo A = 0,3 m.",
          "b) Conta as oscilações: da crista inicial (t = 0) até à crista assinalada a tracejado em t = 6 s contam-se 2 oscilações completas: 2T = 6 s → T = 3 s.",
          "c) v = λ/T = 3/3 = 1 m/s.",
          "Verificação pela frequência: f = 1/T = 1/3 Hz; v = λ × f = 3 × (1/3) = 1 m/s ✓."
        ],
        "resposta": "a) A = 0,3 m · b) T = 3 s · c) v = 1 m/s"
      },
      {
        "numero": 10,
        "cotacao": "1,5",
        "enunciado": "Nas figuras abaixo, S, X, Y e Z representam pólos de dois ímanes. Sabe-se que X repele Y. Quais são os nomes dos pólos representados pelas letras X, Y e Z, sabendo que S corresponde ao pólo Sul (S).",
        "passos": [
          "Os dois pólos de um mesmo íman têm nomes contrários: o íman da esquerda tem S (Sul) numa ponta, logo a outra ponta, X, é o pólo Norte.",
          "X repele Y. Pólos do mesmo nome repelem-se, por isso Y tem o mesmo nome de X: Y também é pólo Norte.",
          "No segundo íman, a outra ponta é o contrário de Y: Z é o pólo Sul."
        ],
        "resposta": "X — pólo Norte · Y — pólo Norte · Z — pólo Sul"
      }
    ]
  }
]);
