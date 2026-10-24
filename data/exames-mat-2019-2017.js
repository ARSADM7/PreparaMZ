// PreparaMZ — Lote 3: Matemática 10ª classe, 2019 (1ª e 2ª Épocas),
// 2018 (2ª Época) e 2017 (1ª e 2ª Épocas), transcritos das folhas
// oficiais ESG (INEC/CNEC — Moçambique) e resolvidos passo a passo
// pela equipa PreparaMZ. Junta-se a window.EXAMES sem o alterar.
window.EXAMES = window.EXAMES.concat([
  {
    "id": "mat-10-2019-1",
    "disciplina": "Matemática",
    "classe": "10ª Classe",
    "ano": 2019,
    "chamada": "1ª Época",
    "duracao": "120 Minutos",
    "totalPerguntas": 7,
    "fonteEnunciado": "Exame oficial ESG/2019, Instituto Nacional de Exames, Certificação e Equivalências (Moçambique)",
    "originalPdf": "https://storage.mozexames.com/papers/38b4d656-7da9-45c0-b6bd-dae242ecde0a/question.pdf",
    "perguntas": [
      {
        "numero": 1,
        "cotacao": "2,0",
        "enunciado": "Com os símbolos ∈, ∉, =, ⊂, ⊃ ou ⊄ complete na sua folha de respostas de modo a obter afirmações verdadeiras:\na) {0; 1} .... [0; 1[\nb) −3 .... ℚ\nc) 1,435 .... ℕ\nd) ℝ₀⁺ ∩ ℝ₀⁻ .... {0}",
        "passos": [
          "a) Para {0; 1} estar contido em [0; 1[, os dois elementos teriam de pertencer ao intervalo. Ora, 0 ∈ [0; 1[, mas 1 ∉ [0; 1[ (o intervalo é aberto em 1). Logo o conjunto NÃO está contido: {0; 1} ⊄ [0; 1[.",
          "b) −3 é um número inteiro, e todo o inteiro é racional (−3 = −3/1). Logo −3 ∈ ℚ.",
          "c) ℕ é o conjunto dos naturais (0, 1, 2, 3, …). 1,435 é um decimal que não é natural. Logo 1,435 ∉ ℕ.",
          "d) ℝ₀⁺ (reais não negativos) e ℝ₀⁻ (reais não positivos) só têm um elemento comum: o 0. Logo ℝ₀⁺ ∩ ℝ₀⁻ = {0}.",
          "Verificação: em a) basta um elemento fora do intervalo para negar o ⊂; em d), qualquer outro número é positivo ou negativo, nunca está nos dois conjuntos ao mesmo tempo."
        ],
        "resposta": "a) ⊄ · b) ∈ · c) ∉ · d) ="
      },
      {
        "numero": 2,
        "cotacao": "1,0",
        "enunciado": "Classifique em verdadeiro (V) ou falso (F):\na) Dois planos distintos, paralelos, têm um ponto comum.\nb) Se uma recta é paralela a dois planos, então esses planos são paralelos.\nc) Se duas rectas são ortogonais, então elas formam um ângulo recto.\nd) Se duas rectas são perpendiculares, então elas formam um ângulo recto.",
        "passos": [
          "a) Planos paralelos distintos, por definição, não se intersectam: não têm nenhum ponto comum. FALSA (F).",
          "b) Uma mesma recta pode ser paralela a dois planos que se cortam um ao outro (basta ser paralela à recta de intersecção dos dois planos). Logo a conclusão não é obrigatória. FALSA (F).",
          "c) Rectas ortogonais são rectas cujas direcções formam um ângulo de 90°. Logo formam um ângulo recto. VERDADEIRA (V).",
          "d) Rectas perpendiculares são rectas concorrentes que formam um ângulo de 90°, isto é, um ângulo recto. VERDADEIRA (V)."
        ],
        "resposta": "a) F · b) F · c) V · d) V"
      },
      {
        "numero": 3,
        "cotacao": "3,5",
        "enunciado": "Resolva:\na) 2 sen x = √2, para x ∈ [0°; 90°]\nb) log₁/₃(2x + 1) − log₁/₃ x = 0",
        "passos": [
          "a) Isola o seno: sen x = √2/2. No intervalo [0°; 90°], o ângulo cujo seno é √2/2 é x = 45°. Verificação: 2 · sen 45° = 2 · (√2/2) = √2 ✓.",
          "b) Primeiro o domínio: os argumentos têm de ser positivos: 2x + 1 > 0 e x > 0, ou seja, x > 0.",
          "b) Com a mesma base, a diferença de logaritmos é o logaritmo do quociente: log₁/₃[(2x + 1)/x] = 0. Pela definição, (2x + 1)/x = (1/3)⁰ = 1, donde 2x + 1 = x e x = −1.",
          "b) MAS x = −1 não pertence ao domínio (x > 0): em x = −1 os logaritmos nem sequer existem. A equação não tem solução: S = ∅.",
          "b) Verificação do domínio por outro caminho: as condições x > 0 e 2x + 1 > 0 excluem qualquer candidato negativo; o único candidato algébrico é negativo, logo é rejeitado ✓."
        ],
        "resposta": "a) x = 45° · b) S = ∅"
      },
      {
        "numero": 4,
        "cotacao": "2,2",
        "enunciado": "Dada a equação x² − 4x + (5 − m) = 0. Determine m de modo que a equação admita duas raízes reais de sinais contrários.",
        "passos": [
          "Duas raízes de sinais contrários exigem duas condições: existirem duas raízes reais distintas (Δ > 0) e terem produto negativo (produto < 0).",
          "Produto das raízes = c/a = 5 − m. Produto < 0 → 5 − m < 0 → m > 5.",
          "Discriminante: Δ = (−4)² − 4(5 − m) = 4m − 4 > 0 → m > 1.",
          "Juntando as duas condições (m > 5 e m > 1), fica a mais forte: m > 5.",
          "Verificação com m = 6: x² − 4x − 1 = 0 tem raízes 2 ± √5 ≈ 4,24 e ≈ −0,24 — duas raízes reais de sinais contrários ✓. (Repara: produto < 0 já obriga Δ > 0, porque com c < 0 o discriminante é sempre positivo.)"
        ],
        "resposta": "m > 5, isto é, m ∈ ]5; +∞["
      },
      {
        "numero": 5,
        "cotacao": "3,0",
        "enunciado": "Resolva em ℝ: x⁴ − 4x² = 0",
        "passos": [
          "Factoriza, pondo x² em evidência: x²(x² − 4) = 0.",
          "Um produto é zero quando um dos factores é zero: x² = 0 ou x² − 4 = 0.",
          "x² = 0 → x = 0. x² − 4 = 0 → x² = 4 → x = 2 ou x = −2.",
          "Verificação por substituição: 0⁴ − 4·0² = 0 ✓; 2⁴ − 4·2² = 16 − 16 = 0 ✓; (−2)⁴ − 4(−2)² = 16 − 16 = 0 ✓."
        ],
        "resposta": "S = {−2; 0; 2}"
      },
      {
        "numero": 6,
        "cotacao": "5,3",
        "enunciado": "Considere a função f, representada pelo gráfico da figura ao lado. Pela leitura do gráfico, determine:\na) o domínio da função.\nb) a variação do sinal da função, no intervalo ]1; 3[.\nc) a expressão analítica de f.\nd) os valores para os quais f(x) ≤ 0.\ne) os intervalos de monotonia da função.",
        "passos": [
          "a) A parábola estende-se indefinidamente para a esquerda e para a direita: o domínio é todo o ℝ, D(f) = ℝ.",
          "b) No intervalo ]1; 3[: a curva está abaixo do eixo Ox entre 1 e 2, toca o eixo em x = 2 e está acima entre 2 e 3. Logo f(x) < 0 em ]1; 2[, f(2) = 0 e f(x) > 0 em ]2; 3[.",
          "c) Os zeros da função, lidos no gráfico, são x = 0 e x = 2, logo f(x) = a·x(x − 2). O vértice é (1; −1): f(1) = −1 → a·1·(−1) = −1 → a = 1. Portanto f(x) = x(x − 2) = x² − 2x.",
          "c) Verificação com o ponto assinalado no gráfico: f(3) = 9 − 6 = 3, exactamente o ponto (3; 3) marcado com as linhas tracejadas ✓. E f(0) = 0, f(2) = 0 ✓.",
          "d) f(x) ≤ 0 onde a curva está sobre ou abaixo do eixo Ox, ou seja, entre os zeros: x ∈ [0; 2].",
          "e) A função desce até ao vértice (x = 1) e sobe depois: é estritamente decrescente em ]−∞; 1] e estritamente crescente em [1; +∞[."
        ],
        "resposta": "a) D = ℝ · b) f < 0 em ]1; 2[, f(2) = 0, f > 0 em ]2; 3[ · c) f(x) = x² − 2x · d) x ∈ [0; 2] · e) decrescente em ]−∞; 1], crescente em [1; +∞["
      },
      {
        "numero": 7,
        "cotacao": "3,0",
        "enunciado": "Para a eleição do chefe de uma turma, candidataram-se cinco alunos. O gráfico a seguir mostra os resultados do processo de votação:\na) Quantos alunos participaram da votação?\nb) Quantos alunos votaram no(a) vencedor(a)?\nc) Qual é o nome do(a) vencedor(a)?\nd) Determine a percentagem de votos do(a) segundo(a) classificado(a).",
        "passos": [
          "Leitura do gráfico (fᵢ = número de votos): Dinis — 10; Nely — 20; Marta — 5; Zeca — 10; Abel — 15.",
          "a) Total de votantes: 10 + 20 + 5 + 10 + 15 = 60 alunos.",
          "b) e c) A barra mais alta é a da Nely, com 20 votos: a vencedora é a Nely, com 20 votos.",
          "d) O segundo classificado é o Abel, com 15 votos. Percentagem: 15/60 = 0,25 = 25%.",
          "Verificação: a soma das percentagens de todos (10/60 + 20/60 + 5/60 + 10/60 + 15/60) = 60/60 = 100% ✓."
        ],
        "resposta": "a) 60 alunos · b) 20 alunos · c) Nely · d) 25%"
      }
    ]
  },
  {
    "id": "mat-10-2019-2",
    "disciplina": "Matemática",
    "classe": "10ª Classe",
    "ano": 2019,
    "chamada": "2ª Época",
    "duracao": "120 Minutos",
    "totalPerguntas": 7,
    "fonteEnunciado": "Exame oficial ESG/2019, Instituto Nacional de Exames, Certificação e Equivalências (Moçambique)",
    "originalPdf": "https://storage.mozexames.com/papers/56543864-f269-47e7-8ca2-8e19abe6f34f/question.pdf",
    "perguntas": [
      {
        "numero": 1,
        "cotacao": "2,0",
        "enunciado": "Com os símbolos ∈, ∉, ⊂ ou ⊄ complete na sua folha de respostas de modo a obter afirmações verdadeiras:\na) −4/2 .... ℕ\nb) 4,55 .... ℝ\nc) ℤ⁺ .... ℚ\nd) {−1; −1/2; 1/2; 1} .... ℤ",
        "passos": [
          "a) −4/2 = −2, que é um inteiro negativo. Os naturais são 0, 1, 2, … Logo −4/2 ∉ ℕ.",
          "b) 4,55 é um número real (decimal finito). Logo 4,55 ∈ ℝ.",
          "c) ℤ⁺ é o conjunto dos inteiros positivos {1, 2, 3, …}. Todos eles são racionais (n = n/1), e o conjunto está contido em ℚ: ℤ⁺ ⊂ ℚ.",
          "d) O conjunto {−1; −1/2; 1/2; 1} contém −1/2 e 1/2, que não são inteiros. Logo não está contido em ℤ: {−1; −1/2; 1/2; 1} ⊄ ℤ.",
          "Verificação: repara que os quatro símbolos diferentes são usados, um em cada alínea — ∈, ∉, ⊂ e ⊄."
        ],
        "resposta": "a) ∉ · b) ∈ · c) ⊂ · d) ⊄"
      },
      {
        "numero": 2,
        "cotacao": "1,0",
        "enunciado": "Considere as seguintes afirmações:\n“Uma recta é paralela a um plano, se…”:\na) tem um ponto comum.\nb) tem, pelo menos, um ponto comum.\nc) não têm ponto comum.\nd) não é paralela a nenhuma recta do plano.\nQual das afirmações é verdadeira?",
        "passos": [
          "Uma recta é paralela a um plano quando nunca o encontra: a recta e o plano não têm nenhum ponto comum — é a afirmação c).",
          "a) e b) descrevem uma recta que toca o plano (concorrente ou contida nele), não uma recta paralela.",
          "d) é falsa: se a recta é paralela ao plano, então ela é paralela a infinitas rectas desse plano (todas as que têm a direcção paralela à sua).",
          "Verificação pela definição: paralelismo recta–plano ⇔ intersecção vazia ⇔ nenhum ponto comum ✓."
        ],
        "resposta": "c) não têm ponto comum"
      },
      {
        "numero": 3,
        "cotacao": "3,0",
        "enunciado": "Calcule o valor numérico das seguintes expressões:\na) sen²60° + tg60° · ctg60° + 1/2 cos45°\nb) log₁/₃ 9 + log₅ 125 − log₀,₉ (10/9)",
        "passos": [
          "a) Valores notáveis: sen 60° = √3/2, tg 60° = √3, ctg 60° = 1/√3 e cos 45° = √2/2.",
          "a) sen²60° = (√3/2)² = 3/4. tg 60° · ctg 60° = √3 · (1/√3) = 1 (a tangente e a cotangente são inversas uma da outra). (1/2)cos 45° = (1/2)(√2/2) = √2/4.",
          "a) Somando: 3/4 + 1 + √2/4 = (7 + √2)/4.",
          "b) log₁/₃ 9 = −2, porque (1/3)⁻² = 9. log₅ 125 = 3, porque 5³ = 125.",
          "b) log₀,₉(10/9): como 0,9 = 9/10, o argumento 10/9 é o inverso da base, logo log₀,₉(10/9) = −1 (verifica: 0,9⁻¹ = 10/9 ✓).",
          "b) Total: −2 + 3 − (−1) = 2."
        ],
        "resposta": "a) (7 + √2)/4 · b) 2"
      },
      {
        "numero": 4,
        "cotacao": "2,0",
        "enunciado": "Considere a equação x² + 2x + (3 − m) = 0, sendo m um parâmetro real. Determine o valor de m de modo que a equação admita duas raízes reais e distintas.",
        "passos": [
          "Duas raízes reais e distintas existem quando o discriminante é positivo: Δ > 0.",
          "Δ = 2² − 4·1·(3 − m) = 4 − 12 + 4m = 4m − 8.",
          "4m − 8 > 0 → 4m > 8 → m > 2.",
          "Verificação com m = 3: x² + 2x = 0 → x(x + 2) = 0, raízes 0 e −2, reais e distintas ✓. Com m = 2: x² + 2x + 1 = (x + 1)², raiz dupla — já não serve, o que confirma a fronteira m = 2."
        ],
        "resposta": "m > 2, isto é, m ∈ ]2; +∞["
      },
      {
        "numero": 5,
        "cotacao": "3,5",
        "enunciado": "Resolva em ℝ: x⁴ − 8x² − 9 = 0",
        "passos": [
          "É uma equação biquadrática. Faz a substituição y = x²: fica y² − 8y − 9 = 0.",
          "Resolve a quadrática: Δ = 64 + 36 = 100; y = (8 ± 10)/2, ou seja, y = 9 ou y = −1.",
          "Volta a x: x² = 9 → x = 3 ou x = −3. x² = −1 não tem solução real (um quadrado nunca é negativo).",
          "Verificação: 3⁴ − 8·3² − 9 = 81 − 72 − 9 = 0 ✓; o mesmo para x = −3, porque só aparecem potências pares ✓."
        ],
        "resposta": "S = {−3; 3}"
      },
      {
        "numero": 6,
        "cotacao": "4,0",
        "enunciado": "Considere a função f, representada pelo gráfico da figura ao lado. Pela leitura do gráfico, determine:\na) Os zeros da função.\nb) As coordenadas do vértice da parábola.\nc) A equação do eixo de simetria.\nd) O sentido da concavidade do gráfico.\ne) A expressão analítica da função.",
        "passos": [
          "a) A parábola corta o eixo Ox em x = −1 e em x = 1: os zeros são −1 e 1.",
          "b) O ponto mais baixo da parábola é (0; −1): o vértice é (0; −1).",
          "c) O eixo de simetria é a recta vertical que passa pelo vértice: x = 0 (é o próprio eixo Oy). Confirma-se pela média dos zeros: (−1 + 1)/2 = 0 ✓.",
          "d) A parábola abre para cima: a concavidade está voltada para cima.",
          "e) Com zeros −1 e 1, f(x) = a(x − 1)(x + 1) = a(x² − 1). Pelo vértice: f(0) = −1 → a(0 − 1) = −1 → a = 1. Logo f(x) = x² − 1.",
          "e) Verificação com o ponto assinalado: f(2) = 4 − 1 = 3, exactamente o ponto (2; 3) marcado no gráfico ✓."
        ],
        "resposta": "a) x = −1 e x = 1 · b) (0; −1) · c) x = 0 · d) voltada para cima · e) f(x) = x² − 1"
      },
      {
        "numero": 7,
        "cotacao": "5,5",
        "enunciado": "Sabendo que o número de filhos de 10 famílias inquiridas é: 3; 1; 0; 5; 2; 1; 2; 4; 0; 2, determine:\na) A moda.\nb) A mediana.\nc) A média aritmética.\nd) A percentagem de famílias com 3 ou mais filhos.",
        "passos": [
          "Organiza os dados por ordem crescente: 0; 0; 1; 1; 2; 2; 2; 3; 4; 5. Contagem: 0 aparece 2 vezes, 1 aparece 2, 2 aparece 3, 3, 4 e 5 aparecem 1 vez cada.",
          "a) A moda é o valor mais frequente: 2 filhos (3 famílias).",
          "b) Com 10 valores, a mediana é a média dos valores centrais (5.º e 6.º): (2 + 2)/2 = 2.",
          "c) Soma: 3 + 1 + 0 + 5 + 2 + 1 + 2 + 4 + 0 + 2 = 20. Média = 20/10 = 2 filhos.",
          "d) Famílias com 3 ou mais filhos: as que têm 3, 4 e 5 filhos — 3 famílias. Percentagem: 3/10 = 30%.",
          "Verificação das contagens: 2 + 2 + 3 + 1 + 1 + 1 = 10 famílias ✓, e a soma por frequências 0·2 + 1·2 + 2·3 + 3·1 + 4·1 + 5·1 = 20 confirma a média ✓."
        ],
        "resposta": "a) Moda = 2 filhos · b) Mediana = 2 · c) Média = 2 · d) 30%"
      }
    ]
  },
  {
    "id": "mat-10-2018-2",
    "disciplina": "Matemática",
    "classe": "10ª Classe",
    "ano": 2018,
    "chamada": "2ª Época",
    "duracao": "120 Minutos",
    "totalPerguntas": 8,
    "fonteEnunciado": "Exame oficial ESG/2018, Instituto Nacional de Exames, Certificação e Equivalências (Moçambique)",
    "originalPdf": "https://storage.mozexames.com/papers/11bbeeee-a8aa-4b3f-a372-45207d6fd434/question.pdf",
    "perguntas": [
      {
        "numero": 1,
        "cotacao": "1,0",
        "enunciado": "Determine o número x, cujo dobro, adicionado com 6 é igual ao simétrico de 24.",
        "passos": [
          "Traduz a frase para uma equação: o dobro de x é 2x; adicionado com 6 dá 2x + 6; o simétrico de 24 é −24. Equação: 2x + 6 = −24.",
          "Resolve: 2x = −24 − 6 = −30 → x = −15.",
          "Verificação: o dobro de −15 é −30; −30 + 6 = −24, que é o simétrico de 24 ✓."
        ],
        "resposta": "x = −15"
      },
      {
        "numero": 2,
        "cotacao": "2,0",
        "enunciado": "Efectue as seguintes operações:\n[(3/2)⁻¹⁷ · (1/5)⁻¹⁷ ÷ (3/10)⁻¹⁵] / [[(−1)³]² · (3/10)⁻³]",
        "passos": [
          "Numerador: (3/2)⁻¹⁷ · (1/5)⁻¹⁷ têm o mesmo expoente, por isso multiplicam-se as bases: [(3/2)·(1/5)]⁻¹⁷ = (3/10)⁻¹⁷.",
          "Dividir por (3/10)⁻¹⁵ é somar os expoentes com sinal trocado: (3/10)⁻¹⁷ ÷ (3/10)⁻¹⁵ = (3/10)^(−17+15) = (3/10)⁻².",
          "Denominador: [(−1)³]² = (−1)⁶ = 1. Fica 1 · (3/10)⁻³ = (3/10)⁻³.",
          "Quociente: (3/10)⁻²/(3/10)⁻³ = (3/10)^(−2+3) = (3/10)¹ = 3/10.",
          "Verificação por outro caminho (inverter as bases negativas): (3/10)⁻² = (10/3)² = 100/9 e (3/10)⁻³ = (10/3)³ = 1000/27; (100/9)/(1000/27) = (100/9)·(27/1000) = 27/90 = 3/10 ✓."
        ],
        "resposta": "3/10"
      },
      {
        "numero": 3,
        "cotacao": "3,0",
        "enunciado": "Observe o paralelogramo e calcule os valores dos seus ângulos.",
        "passos": [
          "Na figura, os ângulos opostos do paralelogramo são 9y + 16° e 7y + 40° (vértices opostos), e os outros dois estão marcados com a mesma letra x.",
          "Ângulos opostos de um paralelogramo são iguais: 9y + 16 = 7y + 40 → 2y = 24 → y = 12.",
          "Esses ângulos valem 9·12 + 16 = 124° (confirma: 7·12 + 40 = 124° ✓).",
          "Ângulos consecutivos são suplementares: x + 124° = 180° → x = 56°.",
          "Verificação: a soma dos ângulos internos de um quadrilátero é 360°: 124 + 56 + 124 + 56 = 360 ✓."
        ],
        "resposta": "Dois ângulos de 124° e dois ângulos de 56° (x = 56°; y = 12)"
      },
      {
        "numero": 4,
        "cotacao": "3,0",
        "enunciado": "Considere a figura:\na) Qual é o contradomínio da função g(x)?\nb) Para que valores de x, f(x) < 0?\nc) Quais são os zeros da função g(x)?\nd) Determine a expressão analítica de f(x).",
        "passos": [
          "Leitura da figura: g é a parábola de vértice (1; 4), que corta o eixo Ox em x = −1 e x = 3 e o eixo Oy em 3. f é a recta decrescente que passa por (0; 3) e (3; 0).",
          "a) O valor máximo de g é 4 (a ordenada do vértice) e a parábola desce sem limite: o contradomínio é CD(g) = ]−∞; 4].",
          "b) A recta f está abaixo do eixo Ox depois de o cortar em x = 3: f(x) < 0 para x > 3.",
          "c) Os zeros de g são os pontos onde a parábola corta o eixo Ox: x = −1 e x = 3.",
          "d) A recta passa por (0; 3) e (3; 0): declive = (0 − 3)/(3 − 0) = −1 e ordenada na origem 3. Logo f(x) = −x + 3.",
          "Verificação: f(3) = −3 + 3 = 0 ✓ e f(0) = 3 ✓, os dois pontos lidos no gráfico. (Extra: com os zeros −1 e 3 e o vértice (1; 4), g(x) = −(x − 1)² + 4 = −x² + 2x + 3, e g(0) = 3 confirma a leitura ✓.)"
        ],
        "resposta": "a) CD(g) = ]−∞; 4] · b) x > 3 · c) x = −1 e x = 3 · d) f(x) = −x + 3"
      },
      {
        "numero": 5,
        "cotacao": "3,0",
        "enunciado": "Resolva:\na) −5x⁴ + 10x² = 0\nb) x² − 2x − 3 ≥ 0",
        "passos": [
          "a) Põe −5x² em evidência: −5x²(x² − 2) = 0. Então x² = 0 (x = 0) ou x² − 2 = 0 (x = √2 ou x = −√2).",
          "a) Verificação: −5(√2)⁴ + 10(√2)² = −5·4 + 10·2 = −20 + 20 = 0 ✓.",
          "b) Zeros de x² − 2x − 3: Δ = 4 + 12 = 16; x = (2 ± 4)/2, ou seja, x = 3 ou x = −1.",
          "b) A parábola abre para cima, por isso a expressão é ≥ 0 fora do intervalo entre os zeros: S = ]−∞; −1] ∪ [3; +∞[.",
          "b) Verificação com valores de teste: x = 0 → −3 < 0 (dentro do intervalo, correctamente excluído); x = 4 → 16 − 8 − 3 = 5 ≥ 0 ✓."
        ],
        "resposta": "a) S = {−√2; 0; √2} · b) S = ]−∞; −1] ∪ [3; +∞["
      },
      {
        "numero": 6,
        "cotacao": "2,5",
        "enunciado": "Considere a equação x² + 3x + k − 4 = 0.\na) Determine k, de modo que o produto das raízes seja igual a 2/3.\nb) Para que valores de k a equação admite duas raízes reais diferentes?",
        "passos": [
          "a) Pelas relações de Girard, o produto das raízes é c/a = k − 4. Impõe k − 4 = 2/3 → k = 4 + 2/3 = 14/3.",
          "b) Duas raízes reais diferentes exigem Δ > 0: Δ = 3² − 4(k − 4) = 25 − 4k > 0 → −4k > −25 → k < 25/4.",
          "Verificação de a): com k = 14/3 a equação fica x² + 3x + 2/3 = 0; soma das raízes = −3, produto = 2/3; as raízes são [−3 ± √(9 − 8/3)]/2 = (−9 ± √57)/6, e o seu produto, pela fórmula, é c/a = 2/3 ✓.",
          "Verificação de b): com k = 6 (< 25/4 = 6,25), Δ = 25 − 24 = 1 > 0, há duas raízes diferentes ✓; com k = 7, Δ = −3 < 0, não há raízes reais ✓."
        ],
        "resposta": "a) k = 14/3 · b) k < 25/4"
      },
      {
        "numero": 7,
        "cotacao": "3,0",
        "enunciado": "Observe o diagrama que representa o número de pessoas que gostam de assistir os seguintes programas de televisão: Desporto (D), Telenovela (N) e Telejornal (J). Quantas pessoas…\na) assistem somente Desporto?\nb) assistem dois programas?\nc) não assistem a nenhum dos três programas?",
        "passos": [
          "Leitura do diagrama (U = 1800): só D = 100; D e N (só esses dois) = 120; só N = 300; os três programas = 100; D e J (só esses dois) = 80; N e J (só esses dois) = 700; só J = 200; fora dos três conjuntos há x pessoas.",
          "a) Somente Desporto é a região só de D: 100 pessoas.",
          "b) Assistir a exactamente dois programas é somar as três regiões de intersecção de dois conjuntos (sem o centro): 120 + 80 + 700 = 900 pessoas.",
          "c) Soma de todas as regiões dentro dos conjuntos: 100 + 120 + 300 + 100 + 80 + 700 + 200 = 1600. Como U = 1800, fora ficam x = 1800 − 1600 = 200 pessoas.",
          "Verificação: 1600 (dentro) + 200 (fora) = 1800 = U ✓."
        ],
        "resposta": "a) 100 pessoas · b) 900 pessoas · c) 200 pessoas"
      },
      {
        "numero": 8,
        "cotacao": "2,5",
        "enunciado": "Em 2017 o consumo mensal de água em m³ da família Neves foi o seguinte:\nMês: Jan. 10 · Fev. 10 · Março 9 · Abril 6 · Maio 10 · Junho 8 · Julho 9 · Agosto 10 · Set. 8 · Out. 8 · Nov. 10 · Dez. 12\n(consumo em m³)\na) Qual é a moda?\nb) Calcule a quantidade de água que a família consumiu em 2017.\nc) Determine o consumo médio.",
        "passos": [
          "Contagem dos valores: 10 aparece 5 vezes (Jan., Fev., Maio, Agosto, Nov.); 8 aparece 3 vezes; 9 aparece 2 vezes; 6 e 12 aparecem 1 vez cada.",
          "a) A moda é o valor mais frequente: 10 m³.",
          "b) Quantidade total em 2017: 10 + 10 + 9 + 6 + 10 + 8 + 9 + 10 + 8 + 8 + 10 + 12 = 110 m³.",
          "c) Consumo médio mensal = 110/12 ≈ 9,17 m³ (cerca de 9,2 m³ por mês).",
          "Verificação da soma por agrupamento: (10 × 5) + (8 × 3) + (9 × 2) + 6 + 12 = 50 + 24 + 18 + 18 = 110 ✓."
        ],
        "resposta": "a) Moda = 10 m³ · b) 110 m³ · c) ≈ 9,17 m³ por mês"
      }
    ]
  },
  {
    "id": "mat-10-2017-1",
    "disciplina": "Matemática",
    "classe": "10ª Classe",
    "ano": 2017,
    "chamada": "1ª Época",
    "duracao": "120 Minutos",
    "totalPerguntas": 7,
    "fonteEnunciado": "Exame oficial ESG/2017, Conselho Nacional de Exames, Certificação e Equivalências (Moçambique)",
    "originalPdf": "https://storage.mozexames.com/papers/d3b23fcb-5823-4ba6-88c0-b6025d93020f/question.pdf",
    "perguntas": [
      {
        "numero": 1,
        "cotacao": "2,0",
        "enunciado": "Assinale com (V) verdadeiras ou (F) falsas as afirmações que se seguem:\na) A ∪ ∅ = A\nb) A ∩ A = ∅\nc) A ∪ (B ∪ C) = (A ∪ B) ∪ C\nd) A ∩ (B ∩ C) = (A ∩ B) ∪ (A ∩ C)",
        "passos": [
          "a) A união de qualquer conjunto com o conjunto vazio é o próprio conjunto: A ∪ ∅ = A. VERDADEIRA (V).",
          "b) A intersecção de A consigo próprio é A (todos os elementos de A estão em A), não o vazio: A ∩ A = A. FALSA (F).",
          "c) É a propriedade associativa da união: agrupar de um lado ou do outro não muda o resultado. VERDADEIRA (V).",
          "d) O lado esquerdo é A ∩ B ∩ C. O lado direito é a distributiva, mas aplicada à UNIÃO (B ∪ C) — como está escrita, com ∩ dentro do parêntesis, a igualdade não é geral. Contra-exemplo: A = {1}, B = {1}, C = ∅: lado esquerdo = ∅, lado direito = {1} ∪ ∅ = {1}. São diferentes. FALSA (F)."
        ],
        "resposta": "a) V · b) F · c) V · d) F"
      },
      {
        "numero": 2,
        "cotacao": "2,0",
        "enunciado": "Resolva:\n{ 2x + 3y = 40\n{ 4x + 5y = 70",
        "passos": [
          "Usa o método de substituição: da 1.ª equação, x = (40 − 3y)/2.",
          "Substitui na 2.ª: 4·(40 − 3y)/2 + 5y = 70 → 2(40 − 3y) + 5y = 70 → 80 − 6y + 5y = 70 → −y = −10 → y = 10.",
          "Volta à 1.ª: x = (40 − 3·10)/2 = 10/2 = 5.",
          "Verificação nas duas equações: 2·5 + 3·10 = 10 + 30 = 40 ✓; 4·5 + 5·10 = 20 + 50 = 70 ✓."
        ],
        "resposta": "S = {(5; 10)}"
      },
      {
        "numero": 3,
        "cotacao": "3,0",
        "enunciado": "Determine o valor numérico das seguintes expressões:\na) 2√28 + 3√7 − ⁴√49\nb) [3⁻⁷ ÷ (2⁻⁷ × 3⁻⁷)] / [2⁰ × (1/2)⁻⁷]\nc) (sen30°/cos45°) · (1/tg45°)",
        "passos": [
          "a) Simplifica os radicais: 2√28 = 2√(4·7) = 2·2√7 = 4√7. E ⁴√49 = √(√49) = √7.",
          "a) Fica 4√7 + 3√7 − √7 = 6√7.",
          "b) Numerador: 3⁻⁷ ÷ (2⁻⁷ · 3⁻⁷) = 3⁻⁷/(2⁻⁷·3⁻⁷) = 1/2⁻⁷ = 2⁷. Denominador: 2⁰ × (1/2)⁻⁷ = 1 × 2⁷ = 2⁷. Quociente: 2⁷/2⁷ = 1.",
          "b) Verificação numérica: 2⁻⁷·3⁻⁷ = 1/(128·2187); 3⁻⁷ dividido por isso dá 128 = 2⁷; o denominador também é 128; 128/128 = 1 ✓.",
          "c) sen 30° = 1/2, cos 45° = √2/2, tg 45° = 1. Então (sen30°/cos45°) · (1/tg45°) = [(1/2)/(√2/2)] · 1 = 1/√2 = √2/2 (racionalizando)."
        ],
        "resposta": "a) 6√7 · b) 1 · c) √2/2"
      },
      {
        "numero": 4,
        "cotacao": "2,0",
        "enunciado": "Considere o trapézio isósceles [ABCD], abaixo representado. Determine as medidas de todos os ângulos em graus.",
        "passos": [
          "Na figura, o ângulo em A mede 2x − 10 e o ângulo em B mede x + 20. Num trapézio isósceles, os ângulos da mesma base são iguais: A = B.",
          "2x − 10 = x + 20 → x = 30.",
          "Ângulos da base maior: A = 2·30 − 10 = 50° e B = 30 + 20 = 50° ✓ (iguais, como devia ser).",
          "Ângulos da base menor: C = D = 180° − 50° = 130° (ângulos consecutivos entre bases paralelas são suplementares).",
          "Verificação: 50 + 50 + 130 + 130 = 360°, a soma dos ângulos internos de um quadrilátero ✓."
        ],
        "resposta": "A = B = 50° e C = D = 130°"
      },
      {
        "numero": 5,
        "cotacao": "2,0",
        "enunciado": "Considere a equação 3x² − (m + 1)x + m − 2 = 0. Determine m real de modo que a equação admita:\na) 2 como uma das raízes.\nb) duas raízes reais iguais.",
        "passos": [
          "a) Se 2 é raiz, satisfaz a equação. Substituindo x = 2: 3·4 − (m + 1)·2 + m − 2 = 0 → 12 − 2m − 2 + m − 2 = 0 → 8 − m = 0 → m = 8.",
          "a) Verificação: com m = 8, a equação é 3x² − 9x + 6 = 0, ou seja, x² − 3x + 2 = 0, cujas raízes são 1 e 2 — 2 é de facto raiz ✓.",
          "b) Duas raízes reais iguais exigem Δ = 0: Δ = (m + 1)² − 12(m − 2) = m² + 2m + 1 − 12m + 24 = m² − 10m + 25 = (m − 5)².",
          "b) (m − 5)² = 0 → m = 5. Verificação: com m = 5, a equação é 3x² − 6x + 3 = 0, ou seja, x² − 2x + 1 = (x − 1)² = 0 — raiz dupla x = 1 ✓."
        ],
        "resposta": "a) m = 8 · b) m = 5"
      },
      {
        "numero": 6,
        "cotacao": "7,0",
        "enunciado": "Observe a figura:\na) Qual é o domínio da função g(x)?\nb) Qual é o contradomínio da função f(x)?\nc) Faça o estudo da variação do sinal da função g(x).\nd) Faça o estudo da monotonia da função f(x).\ne) Qual é a equação da assímptota do gráfico g(x)?\nf) Determine a expressão analítica de f(x).",
        "passos": [
          "Leitura da figura: g é a curva (hipérbole) que desce junto ao eixo Oy, cruza o eixo Ox em x = 1 e passa por (2; −1); f é a parábola de vértice (1; 0), que passa por (0; −1) e (2; −1).",
          "a) Pelo gráfico, g está representada apenas para x > 0: à esquerda do eixo Oy não há ramo da curva, e em x = 0 a função não está definida (a curva aproxima-se do eixo sem o tocar). D(g) = ]0; +∞[.",
          "b) f atinge o valor máximo 0 no vértice (1; 0) e desce sem limite dos dois lados: CD(f) = ]−∞; 0].",
          "c) Sinal de g: g(x) > 0 para 0 < x < 1 (curva acima do eixo Ox); g(1) = 0; g(x) < 0 para x > 1 (curva abaixo do eixo Ox).",
          "d) Monotonia de f: f é estritamente crescente em ]−∞; 1] (sobe até ao vértice) e estritamente decrescente em [1; +∞[ (desce depois do vértice).",
          "e) A assímptota vertical do gráfico de g é o eixo Oy: x = 0.",
          "f) f é uma parábola de vértice (1; 0): f(x) = a(x − 1)². Passa por (0; −1): a(0 − 1)² = −1 → a = −1. Logo f(x) = −(x − 1)² = −x² + 2x − 1.",
          "f) Verificação: f(2) = −(2 − 1)² = −1 ✓, o ponto (2; −1) onde as duas curvas se encontram na figura; f(1) = 0 ✓. (Nota: os pontos lidos também são compatíveis com g(x) = 2/x − 2: g(1) = 0 e g(2) = −1 ✓.)"
        ],
        "resposta": "a) D(g) = ]0; +∞[ · b) CD(f) = ]−∞; 0] · c) g > 0 em ]0; 1[, g(1) = 0, g < 0 em ]1; +∞[ · d) f crescente em ]−∞; 1] e decrescente em [1; +∞[ · e) x = 0 · f) f(x) = −(x − 1)² = −x² + 2x − 1"
      },
      {
        "numero": 7,
        "cotacao": "2,0",
        "enunciado": "O gráfico abaixo representa o número de filhos por família de uma amostra extraída numa comunidade.\na) Calcule o número total de famílias inquiridas.\nb) Qual é a moda de filhos?",
        "passos": [
          "Leitura do gráfico de barras (altura de cada barra = número de famílias): 1 filho — 4 famílias; 2 filhos — 2 famílias; 3 filhos — 1 família; 4 filhos — 5 famílias; 5 filhos — 3 famílias.",
          "a) Número total de famílias: 4 + 2 + 1 + 5 + 3 = 15 famílias.",
          "b) A moda é o número de filhos com maior frequência: 4 filhos (5 famílias, a barra mais alta).",
          "Verificação: as frequências somam 4 + 2 + 1 + 5 + 3 = 15, e nenhuma outra barra ultrapassa a de 4 filhos ✓."
        ],
        "resposta": "a) 15 famílias · b) Moda = 4 filhos"
      }
    ]
  },
  {
    "id": "mat-10-2017-2",
    "disciplina": "Matemática",
    "classe": "10ª Classe",
    "ano": 2017,
    "chamada": "2ª Época",
    "duracao": "120 Minutos",
    "totalPerguntas": 8,
    "fonteEnunciado": "Exame oficial ESG/2017, Conselho Nacional de Exames, Certificação e Equivalências (Moçambique)",
    "originalPdf": "https://storage.mozexames.com/papers/2f653c24-e866-4071-bfd2-2a9b4317aba6/question.pdf",
    "perguntas": [
      {
        "numero": 1,
        "cotacao": "2,0",
        "enunciado": "Copie para a sua folha de respostas e complete os espaços em branco com os símbolos <, > ou = de modo a obter afirmações verdadeiras:\na) −5 .......... −1\nb) |−2/3| .......... 2/5\nc) 0 .............. (−1/5)²\nd) log₅ 16 ...... log₅ 8 + log₅ 2",
        "passos": [
          "a) Na recta numérica, −5 está à esquerda de −1 (é “mais negativo”): −5 < −1.",
          "b) |−2/3| = 2/3 ≈ 0,67 e 2/5 = 0,4. Como 2/3 > 2/5 (2/3 = 10/15 e 2/5 = 6/15): |−2/3| > 2/5.",
          "c) (−1/5)² = 1/25 = 0,04, que é positivo: 0 < (−1/5)².",
          "d) Pela propriedade do logaritmo do produto: log₅ 8 + log₅ 2 = log₅ (8 × 2) = log₅ 16. Logo log₅ 16 = log₅ 8 + log₅ 2."
        ],
        "resposta": "a) < · b) > · c) < · d) ="
      },
      {
        "numero": 2,
        "cotacao": "2,0",
        "enunciado": "Determine o valor numérico das seguintes expressões:\na) ⁵√(√1024) ÷ √(³√64)\nb) [−3 + 1/2 ÷ (1 − 3/4)]⁵",
        "passos": [
          "a) De dentro para fora: √1024 = 32 (porque 32² = 1024) e ⁵√32 = 2 (porque 2⁵ = 32). No denominador: ³√64 = 4 (porque 4³ = 64) e √4 = 2.",
          "a) Fica 2 ÷ 2 = 1.",
          "b) Primeiro o parêntesis: 1 − 3/4 = 1/4. Depois a divisão: (1/2) ÷ (1/4) = (1/2) × 4 = 2. Dentro dos parêntesis rectos: −3 + 2 = −1. Finalmente (−1)⁵ = −1 (potência ímpar conserva o sinal).",
          "Verificação de a) com potências fraccionárias: ⁵√(√1024) = 1024^(1/10) = (2¹⁰)^(1/10) = 2; √(³√64) = 64^(1/6) = (2⁶)^(1/6) = 2; 2/2 = 1 ✓."
        ],
        "resposta": "a) 1 · b) −1"
      },
      {
        "numero": 3,
        "cotacao": "2,5",
        "enunciado": "Dada a equação x² + 4x + m − 1 = 0, determine o valor do parâmetro m de modo que:\na) A equação admita duas raízes reais diferentes.\nb) O produto das raízes seja igual a 5/4.",
        "passos": [
          "a) Δ = 4² − 4(m − 1) = 20 − 4m. Duas raízes reais diferentes exigem Δ > 0: 20 − 4m > 0 → m < 5.",
          "b) Pelas relações de Girard, o produto das raízes é c/a = m − 1. Impõe m − 1 = 5/4 → m = 9/4.",
          "Verificação de a): com m = 4 (< 5), Δ = 4 > 0, raízes diferentes ✓; com m = 5, Δ = 0, raiz dupla — confirma a fronteira.",
          "Verificação de b): com m = 9/4, a equação é x² + 4x + 5/4 = 0, com Δ = 16 − 5 = 11 e raízes (−4 ± √11)/2; o produto é [(−4)² − 11]/4 = 5/4 ✓."
        ],
        "resposta": "a) m < 5 · b) m = 9/4"
      },
      {
        "numero": 4,
        "cotacao": "1,5",
        "enunciado": "Resolva:\n{ 5x − 2y = 5\n{ x + 3y = 18",
        "passos": [
          "Da 2.ª equação: x = 18 − 3y.",
          "Substitui na 1.ª: 5(18 − 3y) − 2y = 5 → 90 − 15y − 2y = 5 → −17y = −85 → y = 5.",
          "Então x = 18 − 3·5 = 3.",
          "Verificação: 5·3 − 2·5 = 15 − 10 = 5 ✓; 3 + 3·5 = 18 ✓."
        ],
        "resposta": "S = {(3; 5)}"
      },
      {
        "numero": 5,
        "cotacao": "1,5",
        "enunciado": "Determine todos os números inteiros que satisfazem o seguinte sistema:\n{ x − 2 ≥ 0\n{ −2x + 9 > 0",
        "passos": [
          "Primeira inequação: x − 2 ≥ 0 → x ≥ 2.",
          "Segunda inequação: −2x + 9 > 0 → −2x > −9 → x < 9/2 = 4,5 (ao dividir por um número negativo, o sinal da desigualdade inverte-se).",
          "Intersecção: 2 ≤ x < 4,5. Os números inteiros neste intervalo são 2, 3 e 4.",
          "Verificação: x = 4 satisfaz (4 ≥ 2 e −8 + 9 = 1 > 0 ✓); x = 5 já falha a segunda ( −10 + 9 = −1 < 0) ✓."
        ],
        "resposta": "{2; 3; 4}"
      },
      {
        "numero": 6,
        "cotacao": "3,0",
        "enunciado": "Numa certa escola dos 100 alunos entrevistados sobre o consumo de fruta, 80 gostam de banana, 70 de laranja, 60 das duas frutas e os restantes não gostam de nenhuma das frutas.\na) Represente os dados num diagrama de Venn.\nb) Determine o número de alunos que não gostam de nenhuma das frutas.",
        "passos": [
          "Começa sempre pela intersecção: gostam das duas frutas = 60 (região central do diagrama).",
          "Só banana: 80 − 60 = 20. Só laranja: 70 − 60 = 10.",
          "a) O diagrama de Venn (figura da resolução) coloca 20 na região só de banana, 60 na intersecção, 10 na região só de laranja e o restante fora dos dois círculos, dentro do universo de 100 alunos.",
          "b) Alunos que gostam de pelo menos uma fruta: 20 + 60 + 10 = 90. Não gostam de nenhuma: 100 − 90 = 10.",
          "Verificação por inclusão–exclusão: |B ∪ L| = 80 + 70 − 60 = 90; 100 − 90 = 10 ✓."
        ],
        "resposta": "b) 10 alunos (diagrama: 20 só banana, 60 as duas, 10 só laranja, 10 nenhuma)"
      },
      {
        "numero": 7,
        "cotacao": "3,5",
        "enunciado": "Considere a figura:\na) Qual é o nome da função f(x)?\nb) Escreva a equação da assímptota.\nc) Qual é o contradomínio de f(x)?\nd) Qual é o zero da função?\ne) Faça o estudo da variação do sinal.\nf) Faça o estudo da variação da função.",
        "passos": [
          "Leitura da figura: a curva cresce cada vez mais depressa, cruza os eixos na origem e aproxima-se da recta tracejada y = −1 à esquerda, sem nunca a tocar. É o comportamento típico de uma exponencial (os pontos (0; 0), (1; 1) e (2; 3) são compatíveis com f(x) = 2ˣ − 1).",
          "a) É uma função exponencial.",
          "b) A assímptota é horizontal: y = −1.",
          "c) A curva toma todos os valores acima de −1: CD(f) = ]−1; +∞[.",
          "d) A curva corta o eixo Ox na origem: o zero da função é x = 0.",
          "e) Sinal: f(x) < 0 para x < 0; f(0) = 0; f(x) > 0 para x > 0.",
          "f) Variação: f é estritamente crescente em todo o domínio (x cresce ⇒ f(x) cresce).",
          "Verificação com f(x) = 2ˣ − 1: f(0) = 0 ✓; f(1) = 1 ✓; f(2) = 3 ✓; quando x → −∞, 2ˣ → 0 e f → −1 (a assímptota) ✓."
        ],
        "resposta": "a) Função exponencial · b) y = −1 · c) CD = ]−1; +∞[ · d) x = 0 · e) f < 0 em x < 0, f(0) = 0, f > 0 em x > 0 · f) estritamente crescente"
      },
      {
        "numero": 8,
        "cotacao": "4,0",
        "enunciado": "Na tabela estão representadas notas de 10 alunos duma turma da 10ª classe.\nxᵢ (Notas): 12 · 15 · 16 · 18 · 19 · 20\nfᵢ (Freq. abs.): A · 2 · 1 · B · 1 · 3\nfᵣ (Freq. rel.): 0,1 · C · 0,1 · 0,2 · 0,1 · D\na) Determine os valores de A, B, C e D da tabela.\nb) Represente num diagrama de barras as frequências absolutas.\nc) Determine a moda e a mediana das notas.",
        "passos": [
          "São 10 alunos, por isso fᵣ = fᵢ/10 — e cada fᵢ lê-se da sua fᵣ multiplicando por 10.",
          "a) Nota 12: fᵣ = 0,1 → A = 1. Nota 18: fᵣ = 0,2 → B = 2. Nota 15: fᵢ = 2 → C = 2/10 = 0,2. Nota 20: fᵢ = 3 → D = 3/10 = 0,3.",
          "a) Verificação: Σfᵢ = 1 + 2 + 1 + 2 + 1 + 3 = 10 ✓ (os 10 alunos) e Σfᵣ = 0,1 + 0,2 + 0,1 + 0,2 + 0,1 + 0,3 = 1,0 ✓.",
          "b) O diagrama de barras da resolução usa as frequências absolutas completas: 12 → 1; 15 → 2; 16 → 1; 18 → 2; 19 → 1; 20 → 3.",
          "c) Moda: a nota com maior frequência é 20 (3 alunos).",
          "c) Mediana: ordenando as 10 notas — 12, 15, 15, 16, 18, 18, 19, 20, 20, 20 — a mediana é a média dos valores centrais (5.º e 6.º): (18 + 18)/2 = 18."
        ],
        "resposta": "a) A = 1, B = 2, C = 0,2, D = 0,3 · c) Moda = 20 e Mediana = 18"
      }
    ]
  }
]);
