// PreparaMZ — Lote 8: Física 10ª classe, 2022 (1ª e 2ª Chamadas), 2021
// (1ª Chamada) e 2019 (1ª e 2ª Épocas), transcritos das folhas oficiais
// INEC/MINEDH e resolvidos passo a passo pela equipa PreparaMZ. Junta-se a
// window.EXAMES sem alterar os ficheiros anteriores. (Não há exame de Física
// de 2020 no arquivo mozexames — o registo salta de 2021 para 2019; e a
// 2ª Chamada de 2023 continua bloqueada na fonte: PDF só com a 1.ª página;
// ver PRODUCAO-RESOLUCOES.md.)
window.EXAMES = window.EXAMES.concat([
  {
    "id": "fis-10-2022-1",
    "disciplina": "Física",
    "classe": "10ª Classe",
    "ano": 2022,
    "chamada": "1ª Chamada",
    "duracao": "90 Minutos",
    "totalPerguntas": 16,
    "fonteEnunciado": "Exame Final oficial ES/2022, Instituto Nacional de Exames, Certificação e Equivalências (Moçambique)",
    "originalPdf": "https://storage.mozexames.com/papers/106380e5-ce24-41d7-a571-5b53d38e4935/question.pdf",
    "perguntas": [
      {
        "numero": 1,
        "cotacao": "0,5",
        "enunciado": "Escolha a opção que completa a seguinte frase:\nO enunciado «cargas de sinais diferentes atraem-se» corresponde a lei...\nA de conservação de cargas eléctricas.\nB de conservação de energia.\nC qualitativa das interacções eléctricas.\nD qualitativa das interacções magnéticas.",
        "passos": [
          "A frase descreve, em palavras, como as cargas eléctricas interagem entre si: cargas de sinais diferentes atraem-se (e as do mesmo sinal repelem-se). É uma descrição qualitativa da interacção entre cargas — não envolve quantidades nem fórmulas.",
          "Não é a lei de conservação da carga (que diz que a carga total se conserva), nem a conservação de energia, nem uma lei magnética (aqui não há ímanes nem pólos envolvidos).",
          "A opção correcta é a C: lei qualitativa das interacções eléctricas."
        ],
        "resposta": "C — lei qualitativa das interacções eléctricas"
      },
      {
        "numero": 2,
        "cotacao": "0,5",
        "enunciado": "Qual é a unidade da carga eléctrica no sistema internacional de unidades?\nA Ampere.\nB Volt.\nC Ohm.\nD Coulomb.",
        "passos": [
          "No SI, cada grandeza tem a sua unidade: a intensidade de corrente mede-se em Ampere, a tensão em Volt e a resistência em Ohm.",
          "A unidade da carga eléctrica é o Coulomb (C): 1 C é a carga transportada por uma corrente de 1 A durante 1 s.",
          "A opção correcta é a D."
        ],
        "resposta": "D — Coulomb"
      },
      {
        "numero": 3,
        "cotacao": "1,0",
        "enunciado": "Escolha a opção que completa a seguinte frase:\nUma pequena esfera isolada está carregada electricamente. Uma segunda esfera, também carregada e suspensa por meio de um fio de seda, é aproximada da primeira e por ela atraída. Isto acontece porque a carga da...\nA segunda é positiva.\nB segunda é diferente da primeira.\nC primeira é igual à da segunda.\nD primeira é negativa.",
        "passos": [
          "Duas cargas atraem-se quando têm sinais diferentes (opostos); repelem-se quando têm o mesmo sinal.",
          "A segunda esfera é atraída pela primeira, logo a sua carga tem sinal contrário ao da primeira — ou seja, é diferente da carga da primeira.",
          "Não se pode concluir que a segunda seja positiva (A) nem que a primeira seja negativa (D): sabe-se apenas que os sinais são opostos. Se a carga da primeira fosse igual em sinal à da segunda (C), haveria repulsão e não atracção.",
          "A opção correcta é a B."
        ],
        "resposta": "B — a carga da segunda é diferente da primeira"
      },
      {
        "numero": 4,
        "cotacao": "1,0",
        "enunciado": "Qual é, em Amperes, o valor da intensidade da corrente eléctrica que passa pela secção recta de um condutor de cobre de 15C durante 3s de ligação de um electrodoméstico?",
        "passos": [
          "A intensidade de corrente é a carga que atravessa a secção do condutor por unidade de tempo: I = Q/Δt.",
          "Substitui os dados: I = 15/3 = 5 A.",
          "Verificação pelo caminho inverso: com I = 5 A, em 3 s passam Q = 5 × 3 = 15 C — exactamente a carga dada ✓."
        ],
        "resposta": "I = 5 A"
      },
      {
        "numero": 5,
        "cotacao": "1,5",
        "enunciado": "A tabela mostra o valor da tensão (U) a que uma resistência é submetida em relação a intensidade da corrente eléctrica (I) que a atravessa.\nU(V): 50; 70; 90\nI(mA): 10; 14; 19\na) O condutor é ou não óhmico? Justifique.\nb) Calcule o valor da resistência para ddp de 70V.",
        "passos": [
          "a) Num condutor óhmico, a resistência é constante: a razão U/I tem de dar sempre o mesmo valor. Calcula a razão para os três pares da tabela (com I já em amperes): 50/0,010 = 5000 Ω; 70/0,014 = 5000 Ω; 90/0,019 ≈ 4737 Ω.",
          "Os dois primeiros pares dão 5000 Ω, mas o terceiro dá um valor diferente (≈ 4700 Ω): a razão U/I não é constante, logo o condutor é NÃO óhmico.",
          "b) Para a ddp de 70 V, a tabela dá I = 14 mA = 0,014 A. Pela lei de Ohm: R = U/I = 70/0,014 = 5000 Ω.",
          "Verificação: 5000 Ω × 0,014 A = 70 V ✓, e o mesmo valor de resistência sai do primeiro par da tabela (50 V e 10 mA), o que confirma a leitura."
        ],
        "resposta": "a) Não óhmico — a razão U/I não é constante (5000 Ω, 5000 Ω e ≈ 4700 Ω) · b) R = 5000 Ω"
      },
      {
        "numero": 6,
        "cotacao": "1,5",
        "enunciado": "A resistência de uma bobina deverá ser de 6Ω. O seu enrolamento é feito por um fio de prata de 0,5mm² de secção transversal. Quantos metros de fio condutor são necessários? (ρ=1,6x10⁻⁸Ωmm²/m)",
        "passos": [
          "A resistência de um fio é R = ρ × L/A. Conhecendo R, ρ e A, isola-se o comprimento: L = R × A/ρ.",
          "Converte a secção para m²: A = 0,5 mm² = 0,5×10⁻⁶ m². Nota de leitura: a folha imprime a unidade de ρ como «Ωmm²/m», mas o valor 1,6×10⁻⁸ é o da resistividade da prata no SI (Ω·m) — é com ele, e com a área em m², que o cálculo fecha (o mesmo lapso de impressão já visto na folha de 2025).",
          "L = (6 × 0,5×10⁻⁶)/(1,6×10⁻⁸) = (3×10⁻⁶)/(1,6×10⁻⁸) = 187,5 m.",
          "Verificação: com L = 187,5 m, R = ρL/A = (1,6×10⁻⁸ × 187,5)/(0,5×10⁻⁶) = (3×10⁻⁶)/(0,5×10⁻⁶) = 6 Ω — a resistência pedida ✓."
        ],
        "resposta": "L = 187,5 m"
      },
      {
        "numero": 7,
        "cotacao": "2,0",
        "enunciado": "A figura representa um circuito eléctrico constituído por três resistências iguais a 60Ω cada, submetidos a uma d.d.p. constante de 60V. Determine a:\na) resistência equivalente entre A e B.\nb) intensidade da corrente total do circuito.",
        "passos": [
          "Lê a figura: as três resistências (R₁ = R₂ = R₃ = 60 Ω) estão ligadas em paralelo entre os pontos A e B.",
          "a) Em paralelo: 1/Req = 1/60 + 1/60 + 1/60 = 3/60 = 1/20 → Req = 20 Ω. (Confirmação rápida: para resistências iguais em paralelo, Req = R/n = 60/3 = 20 Ω ✓.)",
          "b) A corrente total é a que a fonte entrega ao conjunto: I = U/Req = 60/20 = 3 A.",
          "Verificação pelos ramos: cada resistência está sob 60 V, por isso cada ramo leva I = 60/60 = 1 A; os três ramos somam 1 + 1 + 1 = 3 A, a corrente total ✓."
        ],
        "resposta": "a) Req = 20 Ω · b) I = 3 A"
      },
      {
        "numero": 8,
        "cotacao": "1,0",
        "enunciado": "As especificações de um electrodoméstico são 6A e 60Ω. Qual é, em Watts, a potência eléctrica dissipada?",
        "passos": [
          "A potência dissipada numa resistência percorrida por corrente é P = R × I².",
          "Substitui: P = 60 × 6² = 60 × 36 = 2160 W.",
          "Verificação por outra via: a tensão no aparelho é U = R × I = 60 × 6 = 360 V; P = U × I = 360 × 6 = 2160 W ✓."
        ],
        "resposta": "P = 2160 W"
      },
      {
        "numero": 9,
        "cotacao": "1,5",
        "enunciado": "Durante 10 minutos, um termo acumulador aqueceu certa quantidade de água ligado a uma tomada doméstica de 220V. Determine em Joule, a quantidade de energia dissipada em calor quando a intensidade de corrente eléctrica é de 5A.",
        "passos": [
          "Converte o tempo: Δt = 10 min = 10 × 60 = 600 s.",
          "A energia eléctrica dissipada é E = U × I × Δt = 220 × 5 × 600 = 660 000 J.",
          "Verificação pela potência: P = U × I = 220 × 5 = 1100 W; E = P × Δt = 1100 × 600 = 660 000 J ✓."
        ],
        "resposta": "E = 660 000 J = 6,6×10⁵ J"
      },
      {
        "numero": 10,
        "cotacao": "0,5",
        "enunciado": "O número de voltas completas que um oscilador realiza por unidade de tempo chama-se...\nA elongação.\nB período.\nC frequência.\nD amplitude.",
        "passos": [
          "Por definição, a frequência é o número de oscilações (voltas) completas realizadas por unidade de tempo: f = n/Δt, e mede-se em hertz (Hz).",
          "O período é o tempo de UMA volta completa (é o inverso da frequência); a amplitude é o afastamento máximo da posição de equilíbrio e a elongação é o afastamento num dado instante — nenhuma delas conta voltas por unidade de tempo.",
          "A opção correcta é a C."
        ],
        "resposta": "C — frequência"
      },
      {
        "numero": 11,
        "cotacao": "1,0",
        "enunciado": "Qual é, em segundos, o período de um pêndulo simples de 0,4m de comprimento num local onde a aceleração da gravidade é de 10m/s²? Considere: π = 3",
        "passos": [
          "O período de um pêndulo simples é T = 2π√(L/g).",
          "Substitui L = 0,4 m, g = 10 m/s² e π = 3: T = 2 × 3 × √(0,4/10) = 6 × √0,04 = 6 × 0,2 = 1,2 s.",
          "Verificação: √(0,04) = 0,2 porque 0,2² = 0,04 ✓; e um pêndulo curto (0,4 m) tem de facto um período da ordem de 1 segundo ✓."
        ],
        "resposta": "T = 1,2 s"
      },
      {
        "numero": 12,
        "cotacao": "2,5",
        "enunciado": "O gráfico representa a propagação de uma onda mecânica de período igual a 6 segundos. Determine:\na) a amplitude da onda.\nb) o comprimento da onda.\nc) a velocidade de propagação.",
        "passos": [
          "O gráfico é y em função de x (posição ao longo da onda): lêem-se nele a amplitude e o comprimento de onda; o período (T = 6 s) é dado no enunciado.",
          "a) A amplitude é o afastamento máximo em relação ao eixo: as cristas chegam a +0,4 m e os vales a −0,4 m, logo A = 0,4 m.",
          "b) Conta as oscilações completas ao longo do eixo x: o gráfico mostra 3 comprimentos de onda em 36 m. Então 3λ = 36 m → λ = 12 m.",
          "c) A velocidade da onda é v = λ/T = 12/6 = 2 m/s.",
          "Verificação pela frequência: f = 1/T = 1/6 Hz; v = λ × f = 12 × (1/6) = 2 m/s ✓."
        ],
        "resposta": "a) A = 0,4 m · b) λ = 12 m · c) v = 2 m/s"
      },
      {
        "numero": 13,
        "cotacao": "0,5",
        "enunciado": "Escolha a opção que completa a seguinte frase:\nOs pescadores para garantirem uma navegação segura usam a(o)...\nA voltímetro.\nB íman.\nC amperímetro.\nD bússola.",
        "passos": [
          "Para navegar em segurança é preciso conhecer a direcção (a orientação em relação aos pontos cardeais), e o instrumento que indica a direcção do norte magnético terrestre é a bússola.",
          "O voltímetro e o amperímetro são instrumentos de medidas eléctricas, e um íman sozinho não serve de instrumento de orientação na navegação.",
          "A opção correcta é a D."
        ],
        "resposta": "D — bússola"
      },
      {
        "numero": 14,
        "cotacao": "1,5",
        "enunciado": "Qual é, em metros, a distância que um objecto percorre partindo do repouso animado de movimento rectilíneo uniformemente variado sabendo que ganha uma velocidade de 50m/s quando a aceleração é de 5m/s²?",
        "passos": [
          "O objecto parte do repouso (v₀ = 0), por isso a equação de Torricelli v² = v₀² + 2aΔx reduz-se a v² = 2aΔx.",
          "Isola a distância: Δx = v²/(2a) = 50²/(2 × 5) = 2500/10 = 250 m.",
          "Verificação pelo tempo: para ganhar 50 m/s com a = 5 m/s² demora t = v/a = 10 s; a velocidade média nesse intervalo é (0 + 50)/2 = 25 m/s, e Δx = 25 × 10 = 250 m ✓."
        ],
        "resposta": "Δx = 250 m"
      },
      {
        "numero": 15,
        "cotacao": "2,5",
        "enunciado": "Um móvel percorre durante 5 horas uma trajectória rectilínea com velocidade que apresenta uma variação de acordo com o gráfico.\na) Classifique o tipo de movimento.\nb) Calcule a aceleração.\nc) Calcule o espaço percorrido no intervalo de 0 a 5 horas.",
        "passos": [
          "Lê o gráfico v–t: a velocidade cresce uniformemente de 0 (em t = 0) até 6 km/h (em t = 5 h), numa única recta inclinada.",
          "a) Como a velocidade aumenta sempre ao mesmo ritmo (aceleração constante), o movimento é rectilíneo uniformemente acelerado (MRUA).",
          "b) a = Δv/Δt = (6 − 0)/(5 − 0) = 6/5 = 1,2 km/h².",
          "c) O espaço percorrido é a área sob o gráfico entre 0 e 5 h — um triângulo: Δx = (5 × 6)/2 = 15 km.",
          "Verificação por dois caminhos: com a velocidade média (0 + 6)/2 = 3 km/h durante 5 h, Δx = 3 × 5 = 15 km ✓; e pela equação do MRUA, Δx = ½ × a × t² = 0,5 × 1,2 × 25 = 15 km ✓."
        ],
        "resposta": "a) Movimento rectilíneo uniformemente acelerado · b) a = 1,2 km/h² · c) Δx = 15 km"
      },
      {
        "numero": 16,
        "cotacao": "1,0",
        "enunciado": "Um objecto é abandonado de uma certa altura e leva 5s até atingir o solo. Considerando g=10m/s², qual é, em m/s, a velocidade com que o objecto embate o solo?",
        "passos": [
          "É uma queda livre: o objecto parte do repouso (v₀ = 0) e a velocidade cresce com a aceleração da gravidade: v = v₀ + g × t.",
          "Substitui: v = 0 + 10 × 5 = 50 m/s.",
          "Verificação pela altura descida: em 5 s de queda o objecto desce h = ½ × g × t² = 0,5 × 10 × 25 = 125 m; então, por Torricelli, v = √(2gh) = √(2 × 10 × 125) = √2500 = 50 m/s ✓."
        ],
        "resposta": "v = 50 m/s"
      }
    ]
  },
  {
    "id": "fis-10-2022-2",
    "disciplina": "Física",
    "classe": "10ª Classe",
    "ano": 2022,
    "chamada": "2ª Chamada",
    "duracao": "90 Minutos",
    "totalPerguntas": 16,
    "fonteEnunciado": "Exame Final oficial ES/2022, Instituto Nacional de Exames, Certificação e Equivalências (Moçambique)",
    "originalPdf": "https://storage.mozexames.com/papers/8e95b300-3739-4805-936e-66004a6a8c14/question.pdf",
    "perguntas": [
      {
        "numero": 1,
        "cotacao": "0,5",
        "enunciado": "Escolha a opção que completa a seguinte frase:\nO enunciado «cargas eléctricas do mesmo sinal repelem-se», corresponde à lei...\nA de conservação de cargas eléctricas.\nB de conservação de energia.\nC qualitativa das interacções eléctricas.\nD qualitativa das interacções magnéticas.",
        "passos": [
          "A frase descreve, em palavras, como as cargas eléctricas interagem: mesmo sinal → repulsão (e sinais diferentes → atracção). É a formulação qualitativa da interacção entre cargas.",
          "Não é a lei de conservação da carga, nem a de conservação de energia, e não envolve magnetismo.",
          "A opção correcta é a C."
        ],
        "resposta": "C — lei qualitativa das interacções eléctricas"
      },
      {
        "numero": 2,
        "cotacao": "0,5",
        "enunciado": "Qual é o instrumento que serve para medir a intensidade da corrente eléctrica?\nA Amperímetro.\nB Voltímetro.\nC Ohmímetro.\nD Dinamómetro.",
        "passos": [
          "A intensidade de corrente eléctrica mede-se com o amperímetro, ligado em série no circuito.",
          "O voltímetro mede a tensão, o ohmímetro a resistência e o dinamómetro mede forças.",
          "A opção correcta é a A."
        ],
        "resposta": "A — Amperímetro"
      },
      {
        "numero": 3,
        "cotacao": "1,0",
        "enunciado": "Tem-se uma barra electrizada suspensa por um fio, conforme o esquema. Aproximando a barra A da barra suspensa, as barras repelem-se. Afastando a barra A e aproximando a barra B da barra suspensa, estas atraem-se. Supondo que a barra A está electrizada positivamente, indique:\na) o sinal da carga eléctrica da barra B.\nb) o sinal da carga eléctrica da barra suspensa.",
        "passos": [
          "A barra A e a barra suspensa repelem-se. A repulsão só acontece entre cargas do mesmo sinal: como A é positiva (+), a barra suspensa também é positiva — fica assim respondida a alínea b).",
          "a) A barra B atrai a barra suspensa. A atracção acontece entre cargas de sinais contrários: se a suspensa é positiva, a barra B tem de ser negativa (−).",
          "Verificação: A(+) repele a suspensa(+) ✓ e B(−) atrai a suspensa(+) ✓ — coerente com a lei qualitativa das interacções eléctricas."
        ],
        "resposta": "a) A barra B é negativa (−) · b) A barra suspensa é positiva (+)"
      },
      {
        "numero": 4,
        "cotacao": "1,5",
        "enunciado": "Por um condutor metálico, passam 4x10¹⁸ electrões em 4 segundos. Qual é, em Amperes, o valor da intensidade de corrente eléctrica que passa pelo condutor? (e=1,6x10⁻¹⁹C)",
        "passos": [
          "Carga total transportada: Q = n × e = 4×10¹⁸ × 1,6×10⁻¹⁹ C = 0,64 C.",
          "Intensidade de corrente: I = Q/Δt = 0,64/4 = 0,16 A.",
          "Verificação pelo caminho inverso: com I = 0,16 A, em 4 s passam Q = 0,16 × 4 = 0,64 C, ou seja, 0,64/(1,6×10⁻¹⁹) = 4×10¹⁸ electrões — o número dado ✓."
        ],
        "resposta": "I = 0,16 A"
      },
      {
        "numero": 5,
        "cotacao": "1,5",
        "enunciado": "O gráfico mostra como varia a intensidade de corrente eléctrica (I) de um condutor mantido a temperatura constante em função da tensão (U).\na) O condutor é ou não óhmico? Justifique.\nb) Calcule o valor da resistência para ddp de 6V.",
        "passos": [
          "a) O gráfico I(U) é uma recta que passa pela origem: I e U são directamente proporcionais, logo a razão U/I é constante — o condutor é óhmico.",
          "Confirmação com os pontos marcados no gráfico: (2 V; 0,25 A) → U/I = 8 Ω; (4 V; 0,50 A) → 8 Ω; (6 V; 0,75 A) → 8 Ω. Sempre o mesmo valor ✓.",
          "b) Para U = 6 V, o gráfico dá I = 0,75 A. Então R = U/I = 6/0,75 = 8 Ω."
        ],
        "resposta": "a) Óhmico — o gráfico I(U) é uma recta que passa pela origem e U/I é constante · b) R = 8 Ω"
      },
      {
        "numero": 6,
        "cotacao": "1,0",
        "enunciado": "Qual deve ser, em Ohm, a resistência de um condutor de Cobre de 60m de comprimento e 0,5mm² de área de secção transversal? (ρ=1,7x10⁻⁸Ωmm²/m)",
        "passos": [
          "A resistência de um condutor é R = ρ × L/A. Converte a área: A = 0,5 mm² = 0,5×10⁻⁶ m². (Nota de leitura: a folha volta a imprimir a unidade de ρ como «Ωmm²/m»; o valor 1,7×10⁻⁸ é o da resistividade do cobre no SI, em Ω·m.)",
          "R = (1,7×10⁻⁸ × 60)/(0,5×10⁻⁶) = (1,02×10⁻⁶)/(0,5×10⁻⁶) = 2,04 Ω.",
          "Verificação de ordem de grandeza: um fio de cobre de 60 m com apenas 0,5 mm² de secção é comprido e fino, por isso uma resistência de alguns ohms é plausível ✓."
        ],
        "resposta": "R = 2,04 Ω"
      },
      {
        "numero": 7,
        "cotacao": "2,0",
        "enunciado": "A figura representa um circuito eléctrico. O amperímetro acusa uma corrente de 2A. Calcule a:\na) resistência total.\nb) tensão em R₁.",
        "passos": [
          "Lê a figura: R₁ = 15 Ω e R₂ = 10 Ω estão em paralelo, alimentados pela fonte; o amperímetro está no ramo de R₁ e acusa 2 A; o voltímetro está ligado em paralelo com a fonte.",
          "b) A tensão em R₁ é U₁ = R₁ × I₁ = 15 × 2 = 30 V.",
          "Como R₂ está em paralelo com R₁, fica sob a mesma tensão: U₂ = 30 V, e a sua corrente é I₂ = U₂/R₂ = 30/10 = 3 A. A corrente total do circuito é I = I₁ + I₂ = 2 + 3 = 5 A.",
          "a) A resistência total (equivalente) é Req = U/I = 30/5 = 6 Ω.",
          "Verificação pela fórmula do paralelo: Req = (R₁ × R₂)/(R₁ + R₂) = (15 × 10)/(15 + 10) = 150/25 = 6 Ω ✓."
        ],
        "resposta": "a) Req = 6 Ω · b) U₁ = 30 V"
      },
      {
        "numero": 8,
        "cotacao": "1,0",
        "enunciado": "Uma chaleira eléctrica é ligada a uma fonte de tensão de 220V. Sabendo que a sua resistência é de 100Ω, qual é, em Watt, a potência eléctrica da chaleira?",
        "passos": [
          "Conhecendo a tensão e a resistência, a potência calcula-se por P = U²/R.",
          "Substitui: P = 220²/100 = 48 400/100 = 484 W.",
          "Verificação por outra via: a corrente na chaleira é I = U/R = 220/100 = 2,2 A; P = U × I = 220 × 2,2 = 484 W ✓."
        ],
        "resposta": "P = 484 W"
      },
      {
        "numero": 9,
        "cotacao": "1,5",
        "enunciado": "Durante 15 minutos, um termoacumulador aqueceu certa quantidade de água ligado a uma tomada doméstica de 220 V. Determine, em Joule, a quantidade de energia dissipada em calor quando a intensidade de corrente eléctrica é de 10A.",
        "passos": [
          "Converte o tempo: Δt = 15 min = 15 × 60 = 900 s.",
          "A energia dissipada é E = U × I × Δt = 220 × 10 × 900 = 1 980 000 J.",
          "Verificação pela potência: P = U × I = 220 × 10 = 2200 W; E = P × Δt = 2200 × 900 = 1 980 000 J ✓."
        ],
        "resposta": "E = 1 980 000 J = 1,98×10⁶ J"
      },
      {
        "numero": 10,
        "cotacao": "0,5",
        "enunciado": "Escolha a opção que completa a seguinte frase:\nO deslocamento momentâneo de uma partícula oscilante em relação a sua posição de equilíbrio é...\nA elongação.\nB período.\nC frequência.\nD amplitude.",
        "passos": [
          "O afastamento (deslocamento) da partícula em relação à posição de equilíbrio, considerado num dado instante, chama-se elongação.",
          "A amplitude é o afastamento MÁXIMO (não o de cada instante); o período é o tempo de uma oscilação completa e a frequência é o número de oscilações por unidade de tempo.",
          "A opção correcta é a A."
        ],
        "resposta": "A — elongação"
      },
      {
        "numero": 11,
        "cotacao": "1,0",
        "enunciado": "Uma mola de constante elástica 40N/m é posta a oscilar com uma carga de 0,1kg. Determine o período de oscilação da mola. Considere: π = 3",
        "passos": [
          "O período do sistema massa-mola (pêndulo elástico) é T = 2π√(m/k).",
          "Substitui m = 0,1 kg, k = 40 N/m e π = 3: T = 2 × 3 × √(0,1/40) = 6 × √0,0025 = 6 × 0,05 = 0,3 s.",
          "Verificação: 0,1/40 = 0,0025 e √0,0025 = 0,05 porque 0,05² = 0,0025 ✓. Uma mola rígida (k = 40 N/m) com uma massa pequena oscila depressa — um período curto é plausível ✓."
        ],
        "resposta": "T = 0,3 s"
      },
      {
        "numero": 12,
        "cotacao": "2,5",
        "enunciado": "O gráfico representa a propagação de uma onda mecânica de comprimento igual a 2 metros. Determine:\na) a amplitude da onda.\nb) o período.\nc) a velocidade de propagação.",
        "passos": [
          "O gráfico é y em função de t: a oscilação começa no valor máximo e há uma crista assinalada a tracejado em t = 24 s.",
          "a) A amplitude lê-se no eixo y: as cristas chegam a +0,8 m e os vales a −0,8 m, logo A = 0,8 m.",
          "b) Da crista inicial (t = 0) até à crista assinalada (t = 24 s) contam-se 3 oscilações completas: 3T = 24 s → T = 8 s.",
          "c) Com λ = 2 m (dado no enunciado): v = λ/T = 2/8 = 0,25 m/s.",
          "Verificação pela frequência: f = 1/T = 0,125 Hz; v = λ × f = 2 × 0,125 = 0,25 m/s ✓. (Este mesmo gráfico aparece no exame de 2021, com a mesma leitura: A = 0,8 m e T = 8 s.)"
        ],
        "resposta": "a) A = 0,8 m · b) T = 8 s · c) v = 0,25 m/s"
      },
      {
        "numero": 13,
        "cotacao": "0,5",
        "enunciado": "Escolha a opção que completa a seguinte frase:\nO pólo sul de um íman atrai...\nA cargas negativas.\nB cargas positivas.\nC o pólo norte de outro íman.\nD o pólo sul de outro íman.",
        "passos": [
          "Nas interacções magnéticas, pólos de nomes diferentes atraem-se e pólos do mesmo nome repelem-se.",
          "O pólo sul atrai, portanto, o pólo norte de outro íman — e repele um outro pólo sul. (Cargas eléctricas paradas, A e B, não são atraídas por pólos magnéticos enquanto cargas.)",
          "A opção correcta é a C."
        ],
        "resposta": "C — o pólo norte de outro íman"
      },
      {
        "numero": 14,
        "cotacao": "1,5",
        "enunciado": "Qual será, em m/s², a aceleração de uma partícula que parte do repouso em movimento uniformemente variado sabendo que, após percorrer 12m, está animada de uma velocidade de 6m/s?",
        "passos": [
          "A partícula parte do repouso (v₀ = 0), por isso a equação de Torricelli v² = v₀² + 2aΔx fica v² = 2aΔx.",
          "Isola a aceleração: a = v²/(2Δx) = 6²/(2 × 12) = 36/24 = 1,5 m/s².",
          "Verificação pelo tempo: t = v/a = 6/1,5 = 4 s; com velocidade média (0 + 6)/2 = 3 m/s durante 4 s, a distância é Δx = 3 × 4 = 12 m — a dada ✓."
        ],
        "resposta": "a = 1,5 m/s²"
      },
      {
        "numero": 15,
        "cotacao": "2,5",
        "enunciado": "Um móvel percorre durante 10 segundos uma trajectória rectilínea com velocidade que apresenta uma variação de acordo com o gráfico.\na) Classifique o tipo de movimento no trajecto CD.\nb) Calcule a aceleração no trajecto AB.\nc) Calcule o espaço percorrido no intervalo de 0 a 10s.",
        "passos": [
          "Lê o gráfico v–t: A(0; 0), B(2; 10), C(6; 10) e D(10; 0). Em AB a velocidade sobe uniformemente de 0 a 10 m/s; em BC fica constante; em CD desce uniformemente até zero.",
          "a) No trajecto CD a velocidade diminui sempre ao mesmo ritmo (aceleração constante, contrária ao movimento): movimento rectilíneo uniformemente retardado (MRUR).",
          "b) Em AB: a = Δv/Δt = (10 − 0)/(2 − 0) = 10/2 = 5 m/s².",
          "c) O espaço percorrido é a área sob o gráfico de 0 a 10 s — um trapézio de bases 10 s e 4 s e altura 10 m/s: Δx = ((10 + 4)/2) × 10 = 70 m.",
          "Verificação por partes: AB é um triângulo: (2 × 10)/2 = 10 m; BC é um rectângulo: 4 × 10 = 40 m; CD é um triângulo: (4 × 10)/2 = 20 m. Total: 10 + 40 + 20 = 70 m ✓."
        ],
        "resposta": "a) Movimento rectilíneo uniformemente retardado · b) a = 5 m/s² · c) Δx = 70 m"
      },
      {
        "numero": 16,
        "cotacao": "1,0",
        "enunciado": "Um objecto é abandonado do topo de um prédio e leva 4s até atingir o chão. Considerando g=10m/s², qual é, em metros, a altura do prédio?",
        "passos": [
          "É uma queda livre a partir do repouso: a altura descida em cada instante é h = ½ × g × t².",
          "Substitui: h = 0,5 × 10 × 4² = 0,5 × 10 × 16 = 80 m.",
          "Verificação: a velocidade ao chegar ao chão é v = g × t = 10 × 4 = 40 m/s; a velocidade média da queda é (0 + 40)/2 = 20 m/s, donde h = 20 × 4 = 80 m ✓."
        ],
        "resposta": "h = 80 m"
      }
    ]
  },
  {
    "id": "fis-10-2021-1",
    "disciplina": "Física",
    "classe": "10ª Classe",
    "ano": 2021,
    "chamada": "1ª Chamada",
    "duracao": "90 Minutos",
    "totalPerguntas": 11,
    "fonteEnunciado": "Exame Final oficial ESG/2021, Instituto Nacional de Exames, Certificação e Equivalências (Moçambique)",
    "originalPdf": "https://storage.mozexames.com/papers/25dd64cc-9eb4-4c77-9856-5d7ebb866635/question.pdf",
    "perguntas": [
      {
        "numero": 1,
        "cotacao": "1,0",
        "enunciado": "Qual dos fenómenos é térmico?\nA Queda de um objecto.\nB Fervura do óleo.\nC Absorção da água pelas raízes.\nD Destruição da madeira.",
        "passos": [
          "Um fenómeno térmico está ligado ao calor e à temperatura: envolve aquecimento, arrefecimento ou mudança de estado por efeito do calor.",
          "A fervura do óleo é uma mudança de estado provocada pelo aquecimento — é um fenómeno térmico. A queda de um objecto é um fenómeno mecânico, e a absorção de água pelas raízes é um fenómeno das plantas, sem relação com o calor.",
          "A opção correcta é a B."
        ],
        "resposta": "B — Fervura do óleo"
      },
      {
        "numero": 2,
        "cotacao": "1,5",
        "enunciado": "A temperatura de uma certa substância é de 110ºC. Qual será o seu valor na escala Kelvin?",
        "passos": [
          "A conversão da escala Celsius para a escala Kelvin é T(K) = T(ºC) + 273: somam-se 273 (não se subtrai).",
          "Substitui: T = 110 + 273 = 383 K.",
          "Verificação: 0 ºC correspondem a 273 K e cada grau Celsius vale o mesmo que 1 K; 110 graus acima do ponto de fusão do gelo dão 273 + 110 = 383 K ✓. (O erro comum de escrever 283 K corresponderia a apenas 10 ºC.)"
        ],
        "resposta": "T = 383 K"
      },
      {
        "numero": 3,
        "cotacao": "2,0",
        "enunciado": "A figura representa uma associação de roldanas.\na) De que tipo de associação se trata?\nb) Quantas roldanas móveis possui a associação?\nc) Calcule o valor da força F necessária para equilibrar a força exercida pela barra.",
        "passos": [
          "a) Na figura, as roldanas estão associadas em cascata: o eixo de cada roldana móvel é puxado pela corda que contorna a roldana seguinte, e a força necessária diminui para metade em cada roldana móvel. É uma associação em talha (talha exponencial).",
          "b) Contando na figura: há 4 roldanas no total — 1 fixa, presa ao suporte, e 3 móveis, que acompanham a carga.",
          "c) Na talha, cada roldana móvel divide a força por 2. Com 3 roldanas móveis e a força resistente indicada na figura, Fr = 100 N: F = Fr/2³ = 100/8 = 12,5 N.",
          "Verificação: 12,5 × 2 × 2 × 2 = 12,5 × 8 = 100 N — a força aplicada, «ampliada» pelas três roldanas móveis, equilibra a carga ✓."
        ],
        "resposta": "a) Associação em talha (exponencial) · b) 3 roldanas móveis · c) F = 12,5 N"
      },
      {
        "numero": 4,
        "cotacao": "0,5",
        "enunciado": "Um submarino completamente submerso, para emergir (sobresair)...\nA mantém o empuxo sobre ele.\nB diminui o seu peso.\nC diminui o empuxo sobre ele.\nD aumenta o seu peso.",
        "passos": [
          "Completamente submerso, o volume de água deslocado pelo submarino não muda, por isso o empuxo (a impulsão) sobre ele mantém-se constante — não é por aí que ele pode emergir.",
          "Para subir, o submarino expulsa a água dos tanques de lastro, substituindo-a por ar: a sua massa diminui e, com ela, o seu peso. Quando o peso fica menor do que o empuxo, o submarino emerge.",
          "A opção correcta é a B."
        ],
        "resposta": "B — diminui o seu peso"
      },
      {
        "numero": 5,
        "cotacao": "2,0",
        "enunciado": "Um objecto de massa 4kg e volume de 0,003m³ está totalmente imerso na água. Sabendo que a densidade da água é igual a 1000Kg/m³ e considerando g = 10m/s², determine:\na) o valor do peso do objecto.\nb) a intensidade da força de impulsão que a água exerce sobre o objecto.\nc) o valor do peso aparente do objecto.",
        "passos": [
          "a) O peso é P = m × g = 4 × 10 = 40 N.",
          "b) A impulsão (empuxo) é o peso do líquido deslocado. Como o objecto está totalmente imerso, desloca o seu volume inteiro: E = ρ × V × g = 1000 × 0,003 × 10 = 30 N.",
          "c) O peso aparente é o peso real diminuído da impulsão: P_ap = P − E = 40 − 30 = 10 N.",
          "Verificação de coerência: a densidade do objecto é m/V = 4/0,003 ≈ 1333 kg/m³, maior do que a da água — por isso ele se afunda, e o peso aparente (10 N) é positivo, mas menor do que o peso real (40 N) ✓."
        ],
        "resposta": "a) P = 40 N · b) Impulsão = 30 N · c) Peso aparente = 10 N"
      },
      {
        "numero": 6,
        "cotacao": "1,0",
        "enunciado": "Um corpo de volume 60cm³ e densidade 1,8g/cm³ flutua num determinado líquido. Qual é, em gramas, a massa do corpo?",
        "passos": [
          "Da definição de densidade, ρ = m/V, tira-se a massa: m = ρ × V.",
          "Substitui (as unidades já são compatíveis: g/cm³ com cm³): m = 1,8 × 60 = 108 g.",
          "Verificação: com m = 108 g e V = 60 cm³, ρ = 108/60 = 1,8 g/cm³ — a densidade dada ✓."
        ],
        "resposta": "m = 108 g"
      },
      {
        "numero": 7,
        "cotacao": "3,0",
        "enunciado": "A figura representa um objecto, colocado em frente de um instrumento óptico.\na) De que instrumento óptico se trata?\nb) Determine graficamente a imagem do objecto.\nc) Caracterize a imagem quanto a(o):\ni. natureza\nii. orientação\niii. tamanho",
        "passos": [
          "a) A figura mostra um espelho curvo com vértice V, foco F e centro de curvatura C sobre o eixo principal, com CF = 3 cm e FV = 3 cm — logo a distância focal é f = FV = 3 cm e o raio de curvatura é CV = 6 cm. O objecto está do lado reflectante de um espelho que converge os raios: é um espelho côncavo (convergente).",
          "b) Construção gráfica (figura da resolução): do topo B do objecto traça-se um raio paralelo ao eixo principal, que se reflecte passando pelo foco F; e um raio dirigido ao vértice V, que se reflecte fazendo o mesmo ângulo com o eixo. Os dois raios reflectidos encontram-se para além do centro C: aí se forma a imagem A′B′.",
          "c) Como o objecto está entre o foco F e o centro de curvatura C, a imagem é: i) real (forma-se pelo encontro efectivo dos raios reflectidos, do mesmo lado do espelho); ii) invertida; iii) maior do que o objecto.",
          "Verificação numérica com a equação dos espelhos: na figura, o objecto está a cerca de do = 4,5 cm do vértice. 1/di = 1/f − 1/do = 1/3 − 1/4,5 = 1/9 → di = 9 cm, para além de C, como a construção mostra. A ampliação é di/do = 9/4,5 = 2 — imagem duas vezes maior e invertida ✓."
        ],
        "resposta": "a) Espelho côncavo · b) Construção gráfica na figura da resolução · c) Real, invertida e maior do que o objecto"
      },
      {
        "numero": 8,
        "cotacao": "2,0",
        "enunciado": "Dados os gráficos A, B, C e D, indique aquele que melhor representa um resistor linear (que obedece a lei de Ohm).",
        "passos": [
          "Um resistor linear (óhmico) tem resistência constante: na sua característica tensão–corrente, U e i são directamente proporcionais e o gráfico U(i) é uma recta que passa pela origem.",
          "Analisa os quatro gráficos: A é uma curva U–i (a razão U/i muda — resistor não linear); B é uma recta U–i que passa pela origem (U/i constante — resistor linear); C mostra R em função de U como uma recta horizontal; D mostra R a crescer com U (resistência não constante).",
          "A característica de um resistor linear é o gráfico B. (Nota de honestidade: o gráfico C também traduz uma resistência constante, mas representada em função de U; a característica do resistor — a tensão em função da corrente — é a do gráfico B, e é essa a representação pedida.)"
        ],
        "resposta": "Gráfico B"
      },
      {
        "numero": 9,
        "cotacao": "3,0",
        "enunciado": "Na associação indicada na figura, determine a:\na) resistência total da associação.\nb) intensidade da corrente total na associação.",
        "passos": [
          "Lê a figura: a fonte de 30 V alimenta, em série, R₄ = 7,5 Ω, o paralelo de R₁ = 10 Ω com R₂ = 2,5 Ω (entre os pontos A e B) e R₃ = 0,5 Ω.",
          "a) Primeiro reduz o paralelo: R₁₂ = (10 × 2,5)/(10 + 2,5) = 25/12,5 = 2 Ω.",
          "a) Depois soma os elementos em série: R_total = R₄ + R₁₂ + R₃ = 7,5 + 2 + 0,5 = 10 Ω.",
          "b) A corrente total é I = U/R_total = 30/10 = 3 A.",
          "Verificação pelas quedas de tensão: em R₄ caem 3 × 7,5 = 22,5 V; no bloco em paralelo caem 3 × 2 = 6 V; em R₃ caem 3 × 0,5 = 1,5 V. Soma: 22,5 + 6 + 1,5 = 30 V — a tensão da fonte ✓. E nos ramos do paralelo passam 6/10 = 0,6 A e 6/2,5 = 2,4 A, que somam 3 A ✓."
        ],
        "resposta": "a) R_total = 10 Ω · b) I = 3 A"
      },
      {
        "numero": 10,
        "cotacao": "3,0",
        "enunciado": "O gráfico representa o movimento harmónico de uma partícula. Determine:\na) a amplitude das oscilações.\nb) o período das oscilações.",
        "passos": [
          "a) A amplitude é o valor máximo do deslocamento y: o gráfico marca as cristas a +0,8 m e os vales a −0,8 m, logo A = 0,8 m.",
          "b) A oscilação começa numa crista (t = 0) e a crista assinalada a tracejado está em t = 24 s. Contando as oscilações completas até essa crista, são 3: 3T = 24 s → T = 8 s.",
          "Verificação: as cristas repetem-se de 8 em 8 segundos (0, 8, 16 e 24 s) — um espaçamento igual ao período calculado ✓. (É o mesmo gráfico do exame de 2022/2ª Chamada, com a mesma leitura.)"
        ],
        "resposta": "a) A = 0,8 m · b) T = 8 s"
      },
      {
        "numero": 11,
        "cotacao": "1,0",
        "enunciado": "O pólo sul de um íman atrai o pólo...\nA negativo.\nB positivo.\nC norte.\nD sul.",
        "passos": [
          "Pólos magnéticos de nomes diferentes atraem-se; os do mesmo nome repelem-se.",
          "O pólo sul atrai o pólo norte. («Negativo» e «positivo» são nomes de sinais de cargas eléctricas, não de pólos magnéticos.)",
          "A opção correcta é a C."
        ],
        "resposta": "C — norte"
      }
    ]
  },
  {
    "id": "fis-10-2019-1",
    "disciplina": "Física",
    "classe": "10ª Classe",
    "ano": 2019,
    "chamada": "1ª Época",
    "duracao": "90 Minutos",
    "totalPerguntas": 10,
    "fonteEnunciado": "Exame oficial ESG/2019, Instituto Nacional de Exames, Certificação e Equivalências (Moçambique)",
    "originalPdf": "https://storage.mozexames.com/papers/c386c965-9993-4b4a-b46e-5a30c28b84ef/question.pdf",
    "perguntas": [
      {
        "numero": 1,
        "cotacao": "1,5",
        "enunciado": "Assinale com V, as afirmações verdadeiras e com F, as falsas.\nA figura 1 mostra um electroscópio de folhas inicialmente neutro do qual se aproxima um bastão electrizado com carga de sinal desconhecido. Observa-se que com a aproximação do bastão, as folhas do electroscópio se abrem. Nesse caso, pode-se dizer que...\nA a carga do bastão é positiva.\nB a carga das folhas é negativa.\nC com a aproximação do bastão, alguns protões são atraídos das folhas para o botão do electroscópio.",
        "passos": [
          "É uma electrização por indução (influência): o bastão carregado, sem tocar no electroscópio, atrai para o botão as cargas de sinal contrário ao seu e empurra para as folhas as cargas do mesmo sinal que ele. As folhas, carregadas com o mesmo sinal, repelem-se e abrem-se — a abertura só prova que o bastão está carregado.",
          "A — Falsa: o sinal do bastão é desconhecido, e a abertura das folhas aconteceria quer o bastão fosse positivo, quer fosse negativo. Não se pode afirmar que a carga do bastão é positiva.",
          "B — Falsa: as folhas ficam com cargas do MESMO sinal que o bastão; como esse sinal é desconhecido, não se pode afirmar que a carga das folhas é negativa.",
          "C — Falsa: nos corpos sólidos, quem se desloca são os electrões livres; os protões estão presos nos núcleos dos átomos e não se movem das folhas para o botão."
        ],
        "resposta": "A — F · B — F · C — F"
      },
      {
        "numero": 2,
        "cotacao": "1,5",
        "enunciado": "O gráfico da figura 2 representa a intensidade da corrente eléctrica em um fio condutor, em função do tempo. Qual é, em Coulombs, a carga eléctrica que passa por uma secção recta do condutor nos primeiros 0,5 segundos?",
        "passos": [
          "O gráfico da figura 2 (i em função de t) mostra uma corrente constante de 4 A — uma recta horizontal.",
          "A carga é Q = I × Δt = 4 × 0,5 = 2 C.",
          "Verificação pela área sob o gráfico: entre 0 e 0,5 s, a área é o rectângulo de 4 A por 0,5 s, ou seja, 2 C ✓."
        ],
        "resposta": "Q = 2 C"
      },
      {
        "numero": 3,
        "cotacao": "2,5",
        "enunciado": "A figura 3 representa um circuito eléctrico. Determine, em unidades SI, a:\na) resistência equivalente;\nb) diferença de potencial entre os pontos A e B.",
        "passos": [
          "Lê a figura 3: uma fonte de 30 V alimenta, em série, uma resistência de 10 Ω e outra de 20 Ω; os pontos A e B são os extremos da resistência de 20 Ω.",
          "a) Em série, as resistências somam-se: Req = 10 + 20 = 30 Ω.",
          "A corrente é a mesma em todo o circuito: I = U/Req = 30/30 = 1 A.",
          "b) A diferença de potencial entre A e B é a tensão na resistência de 20 Ω: U_AB = R × I = 20 × 1 = 20 V.",
          "Verificação: na resistência de 10 Ω caem 10 × 1 = 10 V; 10 + 20 = 30 V — a tensão da fonte ✓."
        ],
        "resposta": "a) Req = 30 Ω · b) U_AB = 20 V"
      },
      {
        "numero": 4,
        "cotacao": "3,5",
        "enunciado": "O gráfico representado na figura 4, mostra a variação da corrente eléctrica que percorre um condutor, em função da diferença de potencial aplicada entre os seus extremos. Determine, em unidades SI, a(o):\na) resistência eléctrica do condutor;\nb) potência dissipada no condutor quando a corrente que o atravessa é de 10A;\nc) energia dissipada no condutor em 1,5 minutos quando se aplica uma tensão de 6 volts entre os seus extremos.",
        "passos": [
          "O gráfico da figura 4 é U em função de i: uma recta que passa pela origem e pelos pontos (1 A; 10 V), (2 A; 20 V), (4 A; 40 V) e (5 A; 50 V).",
          "a) A resistência é a razão U/i, constante ao longo da recta: R = 10/1 = 20/2 = 40/4 = 10 Ω (condutor óhmico).",
          "b) Com i = 10 A, a tensão correspondente é U = R × i = 10 × 10 = 100 V. A potência é P = U × i = 100 × 10 = 1000 W. (Confirmação: P = R × i² = 10 × 10² = 1000 W ✓.)",
          "c) Com U = 6 V: i = U/R = 6/10 = 0,6 A e P = U × i = 6 × 0,6 = 3,6 W. O tempo é Δt = 1,5 min = 90 s. A energia é E = P × Δt = 3,6 × 90 = 324 J."
        ],
        "resposta": "a) R = 10 Ω · b) P = 1000 W · c) E = 324 J"
      },
      {
        "numero": 5,
        "cotacao": "1,0",
        "enunciado": "A figura 5 representa um ponto P nas proximidades de um íman em forma de barra. Sabendo que N corresponde ao pólo norte da bússola e S ao pólo Sul, qual será a orientação de uma agulha magnética colocada no ponto P?\nA vertical, com N em cima e S em baixo.\nB horizontal, com S à esquerda e N à direita.\nC vertical, com S em cima e N em baixo.\nD horizontal, com N à esquerda e S à direita.",
        "passos": [
          "Na figura 5, o íman em barra tem o pólo S à esquerda e o pólo N à direita, e o ponto P está à direita do pólo N, sobre o prolongamento do eixo do íman.",
          "No exterior do íman, as linhas do campo magnético saem do pólo norte e dirigem-se para o pólo sul. Em P, o campo aponta para longe do pólo N, isto é, para a direita.",
          "A agulha magnética alinha-se com o campo, com o seu pólo norte a apontar no sentido do campo: fica horizontal, com o pólo S à esquerda (virado para o pólo N do íman, que o atrai) e o pólo N à direita.",
          "A opção correcta é a B."
        ],
        "resposta": "B — agulha horizontal, com o pólo S à esquerda e o pólo N à direita"
      },
      {
        "numero": 6,
        "cotacao": "1,0",
        "enunciado": "Indique a alternativa que melhor completa a afirmação seguinte:\nA histórica experiência de Oersted, que unificou a electricidade e o magnetismo, pode ser realizada por qualquer pessoa, bastando para tal que ela disponha de uma pilha comum de lanterna, de um fio eléctrico e de um(uma)...\nA electroscópio.\nB interruptor.\nC lâmpada.\nD bússola.",
        "passos": [
          "Na experiência de Oersted, a corrente eléctrica que percorre um fio cria um campo magnético à volta do fio — e é esse campo que desvia a agulha de uma bússola colocada nas proximidades.",
          "Sem a bússola não há desvio para observar: ela é o instrumento essencial da experiência, juntamente com a fonte (a pilha) e o fio.",
          "A opção correcta é a D."
        ],
        "resposta": "D — bússola"
      },
      {
        "numero": 7,
        "cotacao": "2,5",
        "enunciado": "A figura 6 representa uma onda mecânica que se propaga num dado meio. Determine, em unidades SI, a:\na) amplitude;\nb) velocidade de propagação da onda se seu período é de 0,4s.",
        "passos": [
          "a) A figura 6 marca no eixo y (em cm) os valores +15 e −15: a amplitude é A = 15 cm = 0,15 m, já em unidade SI.",
          "b) Primeiro, o comprimento de onda: a seta de 50 m desenhada na figura abrange 2,5 comprimentos de onda (contam-se duas oscilações completas e mais meia entre as extremidades da seta). Logo, 2,5λ = 50 m → λ = 20 m.",
          "Com T = 0,4 s: v = λ/T = 20/0,4 = 50 m/s.",
          "Verificação pela frequência: f = 1/T = 1/0,4 = 2,5 Hz; v = λ × f = 20 × 2,5 = 50 m/s ✓."
        ],
        "resposta": "a) A = 0,15 m · b) v = 50 m/s"
      },
      {
        "numero": 8,
        "cotacao": "2,0",
        "enunciado": "Uma partícula oscila ao longo do eixo oy com movimento harmónico simples, de acordo com o gráfico representado na figura 7. Determine, em unidades SI, o(a):\na) período;\nb) frequência.",
        "passos": [
          "No gráfico da figura 7 (y em função de t), a partícula parte de y = 0, sobe até um máximo de 2 m, cruza o zero a descer em t = 0,1 s e volta a passar por zero, já a subir, em t = 0,2 s — nesse instante completa exactamente uma oscilação.",
          "a) O período é o tempo de uma oscilação completa: T = 0,2 s.",
          "b) A frequência é o inverso do período: f = 1/T = 1/0,2 = 5 Hz.",
          "Verificação: meia oscilação (de uma passagem por zero à seguinte, em sentidos opostos) demora 0,1 s — metade de 0,2 s ✓; e em 1 segundo cabem 5 oscilações completas, que é a frequência encontrada ✓."
        ],
        "resposta": "a) T = 0,2 s · b) f = 5 Hz"
      },
      {
        "numero": 9,
        "cotacao": "2,0",
        "enunciado": "O gráfico da figura 8 ilustra o movimento de um ponto material em movimento. Determine, em unidades SI, a:\na) velocidade inicial do movimento;\nb) aceleração do movimento.",
        "passos": [
          "O gráfico da figura 8 é v em função de t: uma recta que começa em v = 20 m/s (em t = 0) e chega a v = 28 m/s em t = 4 s.",
          "a) A velocidade inicial é o valor da recta em t = 0: v₀ = 20 m/s.",
          "b) A aceleração é o declive da recta: a = Δv/Δt = (28 − 20)/(4 − 0) = 8/4 = 2 m/s².",
          "Verificação: com v₀ = 20 m/s e a = 2 m/s², ao fim de 4 s a velocidade é v = 20 + 2 × 4 = 28 m/s — o valor lido no gráfico ✓."
        ],
        "resposta": "a) v₀ = 20 m/s · b) a = 2 m/s²"
      },
      {
        "numero": 10,
        "cotacao": "2,5",
        "enunciado": "Um corpo é largado do alto de uma torre de 125m de altura em relação ao solo. Qual é, em unidades SI, o (a):\na) tempo gasto para atingir o solo?\nb) velocidade do corpo ao atingir o solo?\n(use g = 10m/s²)",
        "passos": [
          "É uma queda livre a partir do repouso, descrita por h = ½ × g × t².",
          "a) Isola o tempo: t = √(2h/g) = √(2 × 125/10) = √25 = 5 s.",
          "b) A velocidade ao atingir o solo é v = g × t = 10 × 5 = 50 m/s.",
          "Verificação pela equação de Torricelli: v = √(2gh) = √(2 × 10 × 125) = √2500 = 50 m/s ✓."
        ],
        "resposta": "a) t = 5 s · b) v = 50 m/s"
      }
    ]
  },
  {
    "id": "fis-10-2019-2",
    "disciplina": "Física",
    "classe": "10ª Classe",
    "ano": 2019,
    "chamada": "2ª Época",
    "duracao": "90 Minutos",
    "totalPerguntas": 10,
    "fonteEnunciado": "Exame oficial ESG/2019, Instituto Nacional de Exames, Certificação e Equivalências (Moçambique)",
    "originalPdf": "https://storage.mozexames.com/papers/566954d9-d2b6-4591-9120-696f3888b074/question.pdf",
    "perguntas": [
      {
        "numero": 1,
        "cotacao": "1,5",
        "enunciado": "A figura 1 mostra um bastão electrizado X que se aproxima de um electroscópio neutro. Assinale com V as afirmações verdadeiras e com F, as falsas.\nA. Os números 1, 2, 3 e 4, indicam respectivamente botão do electroscópio, haste metálica, isolante e folhas.\nB. O bastão X está electrizado negativamente.\nC. A abertura das folhas pode ser explicado pela lei segundo a qual cargas de mesmo sinal atraem-se.",
        "passos": [
          "Na figura 1, as setas numeradas apontam: 1 para o botão (a esfera metálica do topo), 2 para a haste metálica que desce do botão, 3 para o isolante que envolve a haste à entrada da caixa e 4 para as folhas, no interior.",
          "A — Verdadeira: os números indicam, respectivamente e por essa ordem, o botão do electroscópio, a haste metálica, o isolante e as folhas.",
          "B — Falsa: na figura, o bastão X está assinalado com um ponto de interrogação — o seu sinal é desconhecido. Como a abertura das folhas, por indução, acontece com um bastão de qualquer sinal, não se pode afirmar que ele está electrizado negativamente.",
          "C — Falsa: as folhas abrem-se porque ficam com cargas do mesmo sinal, e cargas do mesmo sinal REPELEM-se — é essa repulsão que as afasta. A lei invocada na afirmação está trocada: atraem-se as cargas de sinais diferentes."
        ],
        "resposta": "A — V · B — F · C — F"
      },
      {
        "numero": 2,
        "cotacao": "1,0",
        "enunciado": "O polo norte de um íman pode atrair um (uma)...\nA. polo norte de uma agulha magnética.\nB. pedaço de madeira.\nC. folha de papel.\nD. barra de ferro.",
        "passos": [
          "Um pólo de um íman atrai o pólo de nome contrário de outro íman e atrai também os materiais ferromagnéticos ainda não magnetizados, como o ferro, que se magnetiza por influência junto ao íman.",
          "A alternativa A está errada: um pólo norte repele outro pólo norte. A madeira e o papel não são materiais magnéticos, por isso não são atraídos.",
          "A opção correcta é a D: a barra de ferro."
        ],
        "resposta": "D — barra de ferro"
      },
      {
        "numero": 3,
        "cotacao": "2,0",
        "enunciado": "Assinale com V as alternativas verdadeiras e com F, as falsas. Os electroímanes têm inúmeras aplicações, tais como...\nA. electroscópio.\nB. campainha eléctrica.\nC. ferro de engomar.\nD. guindaste magnético.",
        "passos": [
          "Um electroíman é uma bobina com núcleo de ferro que só funciona como íman enquanto a atravessa uma corrente eléctrica. As suas aplicações usam essa atracção magnética que se liga e desliga com a corrente.",
          "A — Falsa: o electroscópio é um instrumento electrostático, para detectar cargas eléctricas; não usa electroíman.",
          "B — Verdadeira: na campainha eléctrica, o electroíman atrai repetidamente a armadura do martelo que bate na campânula.",
          "C — Falsa: o ferro de engomar aquece por efeito de Joule numa resistência eléctrica; não é uma aplicação do electroíman.",
          "D — Verdadeira: o guindaste magnético usa um electroíman potente para levantar sucata de ferro e largá-la onde se quer, bastando desligar a corrente."
        ],
        "resposta": "A — F · B — V · C — F · D — V"
      },
      {
        "numero": 4,
        "cotacao": "1,5",
        "enunciado": "A intensidade de corrente eléctrica que atravessa a secção transversal de um condutor, varia com tempo de acordo com o gráfico representado na figura 2. Que quantidade de carga, em Coulombs, atravessa esse condutor no intervalo de 0s a 2s?",
        "passos": [
          "A carga que atravessa o condutor é a área sob o gráfico i–t entre 0 e 2 s.",
          "De 0 a 1 s, a corrente é constante e igual a 4 A: área do rectângulo = 4 × 1 = 4 C. De 1 a 2 s, a corrente desce uniformemente de 4 A até 0: área do triângulo = (1 × 4)/2 = 2 C.",
          "Somando as duas partes: Q = 4 + 2 = 6 C.",
          "Verificação: a área total é a de um trapézio de bases 2 s e 1 s e altura 4 A: Q = ((2 + 1)/2) × 4 = 6 C ✓."
        ],
        "resposta": "Q = 6 C"
      },
      {
        "numero": 5,
        "cotacao": "2,5",
        "enunciado": "A figura 3 representa um circuito eléctrico. Determine, em unidades SI, a:\na) resistência equivalente\nb) corrente no resistor de 12 ohms, sabendo que V_AB=24V.",
        "passos": [
          "Lê a figura 3: três resistores — 12 Ω, 20 Ω e 30 Ω — estão ligados em paralelo entre os pontos A e B, e a tensão entre A e B é V_AB = 24 V.",
          "a) Em paralelo: 1/Req = 1/12 + 1/20 + 1/30 = (5 + 3 + 2)/60 = 10/60 = 1/6 → Req = 6 Ω.",
          "b) Em paralelo, todos os resistores ficam sob a mesma tensão de 24 V. A corrente no resistor de 12 Ω é I = V_AB/R = 24/12 = 2 A.",
          "Verificação: nos outros ramos passam 24/20 = 1,2 A e 24/30 = 0,8 A; a corrente total é 2 + 1,2 + 0,8 = 4 A, que coincide com U/Req = 24/6 = 4 A ✓."
        ],
        "resposta": "a) Req = 6 Ω · b) I = 2 A no resistor de 12 Ω"
      },
      {
        "numero": 6,
        "cotacao": "3,0",
        "enunciado": "Numa experiência realizada com um resistor óhmico, foram extraídos os dados mostrados na tabela. Determine, em unidades SI, a:\na) resistência eléctrica do condutor.\nb) potência dissipada no condutor quando a corrente que o atravessa é de 2 Ampéres.\nc) energia dissipada no condutor em 0,5 minutos quando se aplica uma tensão de 10 volts entre os seus extremos.\nU(V): 2; 4; 6; 8; 10\nI(A): 0,5; 1,0; 1,5; 2,0; 2,5",
        "passos": [
          "a) Pela lei de Ohm, R = U/I. Com qualquer par da tabela: R = 2/0,5 = 4/1,0 = 6/1,5 = 10/2,5 = 4 Ω — sempre o mesmo valor, como se espera de um resistor óhmico.",
          "b) Quando I = 2 A, a tabela dá U = 8 V. A potência é P = U × I = 8 × 2 = 16 W. (Confirmação: P = R × I² = 4 × 2² = 16 W ✓.)",
          "c) Com U = 10 V, a tabela dá I = 2,5 A, logo P = U × I = 10 × 2,5 = 25 W. O tempo é Δt = 0,5 min = 30 s. A energia é E = P × Δt = 25 × 30 = 750 J."
        ],
        "resposta": "a) R = 4 Ω · b) P = 16 W · c) E = 750 J"
      },
      {
        "numero": 7,
        "cotacao": "2,5",
        "enunciado": "A figura 4 mostra uma onda estabelecida em uma corda, ao se fazer o ponto A oscilar com uma frequência de 200Hz. Determine, em unidades SI, o(a)\na) comprimento da onda na corda.\nb) velocidade da onda.",
        "passos": [
          "Na figura 4 há duas cotas: 10 cm, do eixo da corda até à crista — é a amplitude da onda; e 20 cm, medidos a partir do ponto A, que abrangem exactamente uma oscilação completa da corda.",
          "a) O comprimento de onda é a distância de uma oscilação completa: λ = 20 cm = 0,20 m, em unidades SI. (Não confundir com os 10 cm, que são a amplitude.)",
          "b) Com f = 200 Hz: v = λ × f = 0,20 × 200 = 40 m/s.",
          "Verificação pelo período: T = 1/f = 1/200 = 0,005 s; v = λ/T = 0,20/0,005 = 40 m/s ✓."
        ],
        "resposta": "a) λ = 0,20 m · b) v = 40 m/s"
      },
      {
        "numero": 8,
        "cotacao": "2,0",
        "enunciado": "Uma partícula oscila ao longo do eixo x com movimento harmónico simples, de acordo com o gráfico representado na figura 5. Determine, em unidades SI, a:\na) amplitude.\nb) frequência.",
        "passos": [
          "a) Na grelha da figura 5 (y em função de t), a curva atinge o máximo de +2 m e o mínimo de −2 m: a amplitude é A = 2 m.",
          "b) Lê-se uma oscilação completa nos marcos da grelha: a partícula parte da posição inicial (ponto A, na origem), atinge o máximo perto de t = 2 s, cruza o zero a descer em t = 4 s, atinge o mínimo perto de t = 6 s e regressa à posição inicial, já a subir, no ponto E em t = 8 s. O período é T = 8 s.",
          "A frequência é f = 1/T = 1/8 = 0,125 Hz.",
          "Verificação: do máximo ao mínimo decorrem 4 s, que é meia oscilação — metade de 8 s ✓; e 0,125 oscilações por segundo durante 8 s perfazem exactamente 1 oscilação ✓."
        ],
        "resposta": "a) A = 2 m · b) f = 0,125 Hz"
      },
      {
        "numero": 9,
        "cotacao": "2,0",
        "enunciado": "O gráfico da figura 6 representa a velocidade escalar, em função do tempo, para o movimento de uma partícula que está posicionada na origem dos espaços no instante t = 0. Determine, em unidades SI, a:\na) aceleração escalar da partícula.\nb) distância percorrida pela partícula, entre os instantes t=0s e t=10s.",
        "passos": [
          "O gráfico da figura 6 é uma recta que desce de V = +100 m/s (em t = 0) até V = −100 m/s (em t = 20 s), cruzando o eixo dos tempos em t = 10 s.",
          "a) A aceleração escalar é o declive da recta: a = ΔV/Δt = (0 − 100)/(10 − 0) = −10 m/s². (Confirmação com os dois extremos: (−100 − 100)/(20 − 0) = −200/20 = −10 m/s² ✓.) O sinal negativo mostra que a velocidade diminui no sentido inicial do movimento.",
          "b) Entre 0 e 10 s, a velocidade é positiva e diminui uniformemente de 100 m/s até 0: a distância percorrida é a área do triângulo sob o gráfico: d = (10 × 100)/2 = 500 m.",
          "Verificação pela velocidade média: entre 0 e 10 s, a velocidade média é (100 + 0)/2 = 50 m/s; d = 50 × 10 = 500 m ✓."
        ],
        "resposta": "a) a = −10 m/s² · b) d = 500 m"
      },
      {
        "numero": 10,
        "cotacao": "2,0",
        "enunciado": "Um corpo é largado de uma altura H e leva 5s para chegar ao solo. Determine, em unidades SI, a:\na) altura H.\nb) velocidade do corpo ao atingir o solo.\n(use g=10 m/s²)",
        "passos": [
          "É uma queda livre a partir do repouso, descrita por H = ½ × g × t².",
          "a) H = 0,5 × 10 × 5² = 0,5 × 10 × 25 = 125 m.",
          "b) A velocidade ao atingir o solo é v = g × t = 10 × 5 = 50 m/s.",
          "Verificação pela equação de Torricelli: v = √(2gH) = √(2 × 10 × 125) = √2500 = 50 m/s ✓."
        ],
        "resposta": "a) H = 125 m · b) v = 50 m/s"
      }
    ]
  }
]);
