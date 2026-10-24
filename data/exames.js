// PreparaMZ — dados dos exames
// Enunciados: exames oficiais (INEC/MINEDH). Resoluções: produzidas pela equipa PreparaMZ.
window.EXAMES = [
  {
    id: "mat-10-2025-1",
    disciplina: "Matemática",
    classe: "10ª Classe",
    ano: 2025,
    chamada: "1ª Chamada",
    duracao: "120 Minutos",
    totalPerguntas: 10,
    fonteEnunciado: "Exame Final oficial ES1/2025, Instituto Nacional de Exames, Certificação e Equivalências (Moçambique)",
    originalPdf: "https://storage.mozexames.com/papers/6f2354c9-dee6-4224-bf85-548d21204461/question.pdf",
    perguntas: [
      {
        numero: 1, cotacao: "2,5",
        enunciado: "Numa pesquisa com 300 pessoas sobre hábitos alimentares, foram obtidos os seguintes dados: 210 pessoas consomem fruta diariamente; 180 consomem legumes diariamente; 150 consomem cereais diariamente; 135 consomem fruta e legumes; 120 consomem fruta e cereais; 105 consomem legumes e cereais; 90 consomem os três tipos de alimentos.\na) Represente essa situação num diagrama de Venn.\nb) Quantas pessoas não consomem nenhum dos três tipos de alimentos diariamente?",
        passos: [
          "Começa pelo centro do diagrama: coloca 90 no cruzamento dos três círculos (quem consome os três alimentos).",
          "Regiões de apenas dois alimentos: fruta e legumes = 135 − 90 = 45; fruta e cereais = 120 − 90 = 30; legumes e cereais = 105 − 90 = 15.",
          "Regiões de apenas um alimento: só fruta = 210 − (90 + 45 + 30) = 45; só legumes = 180 − (90 + 45 + 15) = 30; só cereais = 150 − (90 + 30 + 15) = 15.",
          "Soma todas as regiões do diagrama: 90 + 45 + 30 + 15 + 45 + 30 + 15 = 270 pessoas consomem pelo menos um dos alimentos.",
          "Como foram entrevistadas 300 pessoas: 300 − 270 = 30 não consomem nenhum dos três."
        ],
        resposta: "Diagrama — centro: 90; só fruta+legumes: 45; só fruta+cereais: 30; só legumes+cereais: 15; só fruta: 45; só legumes: 30; só cereais: 15.  b) 30 pessoas não consomem nenhum dos três alimentos."
      },
      {
        numero: 2, cotacao: "2,5",
        enunciado: "Dados os quadrados A e B, com áreas representadas por A(x) = 4x⁴ − 35x² e B(x) = x², respectivamente, onde x representa a medida do lado, determine o valor de x de modo que as áreas sejam iguais.",
        passos: [
          "Áreas iguais significa A(x) = B(x): 4x⁴ − 35x² = x².",
          "Passa tudo para o primeiro membro: 4x⁴ − 36x² = 0.",
          "Factoriza pondo 4x² em evidência: 4x²(x² − 9) = 0.",
          "Produto nulo: 4x² = 0 → x = 0; ou x² − 9 = 0 → x = 3 ou x = −3.",
          "Interpreta no contexto: x é a medida de um lado, por isso não pode ser 0 nem negativo."
        ],
        resposta: "x = 3"
      },
      {
        numero: 3, cotacao: "2,0",
        enunciado: "Dado o gráfico da função (curva decrescente que passa pela origem e pelo ponto (−2, 3) e se aproxima da recta y = −1 sem a tocar), indique:\na) o contradomínio;\nb) a ordenada na origem;\nc) o zero da função, se existir;\nd) a monotonia.",
        passos: [
          "Observa o gráfico: a curva desce da esquerda para a direita, passa por (0, 0) e por (−2, 3), e aproxima-se da recta y = −1 sem nunca a tocar (assíntota horizontal).",
          "a) O contradomínio lê-se no eixo y: os valores vão de logo acima de −1 até +∞.",
          "b) A ordenada na origem é o valor de y onde o gráfico corta o eixo vertical: corta em y = 0.",
          "c) O zero da função é onde o gráfico corta o eixo x: corta em x = 0, logo o zero é 0.",
          "d) Quando x aumenta, y diminui sempre: a função é decrescente em todo o seu domínio."
        ],
        resposta: "a) CD(f) = ]−1, +∞[  ·  b) ordenada na origem: 0  ·  c) zero: x = 0  ·  d) decrescente em todo o domínio"
      },
      {
        numero: 4, cotacao: "1,5",
        enunciado: "Dada a inequação −x² + 6x − 10 < 0:\na) esboce o gráfico da função quadrática associada f(x);\nb) determine o conjunto solução da inequação.",
        passos: [
          "Função associada: f(x) = −x² + 6x − 10, com a = −1, b = 6 e c = −10.",
          "Como a < 0, a parábola tem a concavidade voltada para baixo.",
          "Discriminante: Δ = 6² − 4 × (−1) × (−10) = 36 − 40 = −4 < 0. A função não tem raízes reais: a parábola não corta o eixo x.",
          "Vértice: xᵥ = −b/(2a) = −6/(−2) = 3; yᵥ = f(3) = −9 + 18 − 10 = −1. Vértice V(3, −1). O gráfico corta o eixo y em (0, −10).",
          "Esboço: parábola virada para baixo, com o ponto mais alto em (3, −1), inteiramente abaixo do eixo x.",
          "Como o valor máximo da função é −1 (negativo), f(x) < 0 para todos os valores reais de x."
        ],
        resposta: "a) Parábola de concavidade para baixo, vértice (3, −1), sem zeros reais, corta y em −10.  b) S = ℝ"
      },
      {
        numero: 5, cotacao: "2,0",
        enunciado: "Um triângulo rectângulo tem um cateto de 5 cm de comprimento e um ângulo de 60°, oposto a esse cateto. Qual é o comprimento da hipotenusa?",
        passos: [
          "Conhecemos o cateto oposto ao ângulo de 60° (5 cm) e queremos a hipotenusa: usa-se o seno.",
          "sen 60° = cateto oposto / hipotenusa → sen 60° = 5 / h.",
          "Como sen 60° = √3/2: h = 5 ÷ (√3/2) = 10/√3.",
          "Racionalizando: h = 10√3/3 ≈ 5,77 cm."
        ],
        resposta: "A hipotenusa mede 10√3/3 cm ≈ 5,77 cm"
      },
      {
        numero: 6, cotacao: "3,5",
        enunciado: "As idades de 16 alunos da 10ª classe são: 15, 16, 15, 17, 16, 15, 16, 15, 17, 15, 16, 15, 17, 16, 15, 16.\na) Construa uma tabela de frequências (absoluta e relativa) para as idades.\nb) Qual é a idade mediana dos alunos?",
        passos: [
          "Conta quantos alunos têm cada idade: 15 anos → 7 alunos; 16 anos → 6 alunos; 17 anos → 3 alunos (total: 16).",
          "Frequência relativa = frequência absoluta ÷ 16: 7/16 ≈ 0,44 (15 anos); 6/16 = 0,375 ≈ 0,38 (16 anos); 3/16 ≈ 0,19 (17 anos). A soma das relativas dá 1.",
          "Para a mediana, ordena as idades: sete 15, seis 16, três 17. Com 16 dados (número par), a mediana é a média dos valores das posições 8 e 9.",
          "A posição 8 vale 16 e a posição 9 vale 16, logo a mediana é (16 + 16) / 2 = 16."
        ],
        resposta: "a) 15 anos: f = 7, fr ≈ 0,44 · 16 anos: f = 6, fr ≈ 0,38 · 17 anos: f = 3, fr ≈ 0,19  ·  b) Idade mediana: 16 anos"
      },
      {
        numero: 7, cotacao: "2,0",
        enunciado: "Calcule o valor de p na equação x² − px + 24 = 0, de modo que a soma das raízes seja 2/3.",
        passos: [
          "Na equação ax² + bx + c = 0, a soma das raízes é dada por −b/a (relações de Girard).",
          "Aqui a = 1, b = −p e c = 24, por isso a soma das raízes é −(−p)/1 = p.",
          "Impõe a condição do enunciado: p = 2/3."
        ],
        resposta: "p = 2/3"
      },
      {
        numero: 8, cotacao: "1,0",
        enunciado: "Quais das seguintes funções são quadráticas?\nA. f(x) = 9 − 4x\nB. g(x) = 4x² + 2x − 7\nC. h(x) = √x + x²\nD. f(x) = −5x²",
        passos: [
          "Uma função é quadrática quando pode ser escrita na forma ax² + bx + c, com a ≠ 0 (polinómio de grau 2).",
          "A: o maior grau é 1 → é uma função afim, não é quadrática.",
          "B: tem a forma completa, com a = 4 ≠ 0 → é quadrática.",
          "C: contém √x, que não é um termo polinomial → não é quadrática, apesar de aparecer x².",
          "D: é da forma ax², com a = −5 ≠ 0 (b = 0 e c = 0) → é quadrática."
        ],
        resposta: "São quadráticas as funções B e D"
      },
      {
        numero: 9, cotacao: "2,0",
        enunciado: "Encontre a expressão analítica da função quadrática cujo gráfico tem zeros em −3 e 1 e passa pelo ponto (2, −5).",
        passos: [
          "Com os zeros conhecidos, usa a forma factorizada: f(x) = a(x − x₁)(x − x₂) = a(x + 3)(x − 1).",
          "Usa o ponto (2, −5): quando x = 2, f(x) = −5 → −5 = a(2 + 3)(2 − 1) = a × 5 × 1 = 5a.",
          "Logo a = −5 / 5 = −1.",
          "Substitui e desenvolve: f(x) = −(x + 3)(x − 1) = −(x² + 2x − 3) = −x² − 2x + 3.",
          "Verificação: f(2) = −4 − 4 + 3 = −5 ✓; f(−3) = −9 + 6 + 3 = 0 ✓; f(1) = −1 − 2 + 3 = 0 ✓."
        ],
        resposta: "f(x) = −x² − 2x + 3"
      },
      {
        numero: 10, cotacao: "1,0",
        enunciado: "Simplifique log₆36 + log₆1.",
        passos: [
          "Calcula cada logaritmo pela definição: log₆36 = 2, porque 6² = 36.",
          "log₆1 = 0, porque qualquer base elevada a 0 dá 1 (6⁰ = 1).",
          "Soma os resultados: 2 + 0 = 2."
        ],
        resposta: "log₆36 + log₆1 = 2"
      }
    ]
  },
  {
    id: "mat-10-2024-1",
    disciplina: "Matemática",
    classe: "10ª Classe",
    ano: 2024,
    chamada: "1ª Chamada",
    duracao: "120 Minutos",
    totalPerguntas: 10,
    originalPdf: "https://storage.mozexames.com/papers/263e423b-37da-4c4c-b12f-5945934e4fde/question.pdf",
    fonteEnunciado: "Exame Final oficial ES1/2024, Instituto Nacional de Exames, Certificação e Equivalências (Moçambique)",
    perguntas: [
      {
        numero: 1, cotacao: "2,0",
        enunciado: "Usando os símbolos >, <, =, ⊂ ou ⊃, copie e complete os espaços em branco de modo a obter afirmações verdadeiras:\na) ⅕ de 30 ___ 30% de 30\nb) ℝ\\ℝ⁻ ___ ℝ₀⁺\nc) cos 0 ___ sen π/4\nd) lg 2 + lg 5 ___ 2",
        passos: [
          "a) ⅕ de 30 = 30 ÷ 5 = 6. E 30% de 30 = 0,30 × 30 = 9. Como 6 < 9, usa-se o símbolo <.",
          "b) ℝ\\ℝ⁻ significa tirar os negativos aos reais: sobram os positivos e o zero, que é exactamente ℝ₀⁺. Logo, o símbolo é =.",
          "c) cos 0 = 1. sen π/4 = sen 45° = √2/2 ≈ 0,71. Como 1 > 0,71, usa-se >.",
          "d) lg 2 + lg 5 = lg(2 × 5) = lg 10 = 1. Como 1 < 2, usa-se <."
        ],
        resposta: "a) <  ·  b) =  ·  c) >  ·  d) <"
      },
      {
        numero: 2, cotacao: "2,0",
        enunciado: "Num concurso para admissão de pessoal de uma empresa, foram entrevistados 970 candidatos, dos quais 527 falam a língua inglesa (I), 255 falam a língua francesa (F) e 316 não falam nenhuma dessas línguas. Determine o número de candidatos que falam ambas as línguas.",
        passos: [
          "Quem fala pelo menos uma língua: 970 − 316 = 654 candidatos.",
          "Pelo princípio da inclusão–exclusão: n(I ∪ F) = n(I) + n(F) − n(I ∩ F).",
          "Substituindo: 654 = 527 + 255 − n(I ∩ F) → 654 = 782 − n(I ∩ F).",
          "Logo: n(I ∩ F) = 782 − 654 = 128."
        ],
        resposta: "128 candidatos falam ambas as línguas."
      },
      {
        numero: 3, cotacao: "1,8",
        enunciado: "Resolva em ℝ a inequação x² − 9 ≥ 0.",
        passos: [
          "Factoriza o lado esquerdo: x² − 9 = (x − 3)(x + 3).",
          "As raízes são x = −3 e x = 3, que dividem a recta real em três intervalos.",
          "A parábola y = x² − 9 abre para cima, por isso a função é positiva (≥ 0) fora do intervalo entre as raízes.",
          "Como a desigualdade é ≥, as raízes também fazem parte da solução."
        ],
        resposta: "Sol: x ∈ ]−∞, −3] ∪ [3, +∞[  (x ≤ −3 ou x ≥ 3)"
      },
      {
        numero: 4, cotacao: "1,5",
        enunciado: "Calcule o valor da expressão log₂ 32.",
        passos: [
          "Pergunta-chave: «2 elevado a quanto dá 32?»",
          "Escreve 32 como potência de 2: 32 = 2⁵.",
          "Então log₂ 32 = log₂ 2⁵ = 5 × log₂ 2 = 5 × 1 = 5."
        ],
        resposta: "log₂ 32 = 5"
      },
      {
        numero: 5, cotacao: "1,5",
        enunciado: "Simplifique a expressão (2 sen π/6 + cos π/3) / (3 tg 45°).",
        passos: [
          "Converte os ângulos: π/6 = 30° e π/3 = 60°.",
          "Valores notáveis: sen 30° = ½; cos 60° = ½; tg 45° = 1.",
          "Numerador: 2 × ½ + ½ = 1 + ½ = 3/2.",
          "Denominador: 3 × 1 = 3.",
          "Resultado: (3/2) ÷ 3 = 3/6 = ½."
        ],
        resposta: "½"
      },
      {
        numero: 6, cotacao: "1,5",
        enunciado: "Determine a altura de uma torre, sabendo que o comprimento da sombra projectada pela mesma torre num plano horizontal é de 52 m e a inclinação dos raios solares é de 60°.",
        passos: [
          "A torre, a sombra e o raio solar formam um triângulo rectângulo: a altura h é o cateto oposto ao ângulo de 60° e a sombra (52 m) é o cateto adjacente.",
          "Usa a tangente: tg 60° = h / 52.",
          "Como tg 60° = √3, vem h = 52√3.",
          "Com √3 ≈ 1,732: h ≈ 52 × 1,732 ≈ 90,07 m."
        ],
        resposta: "h = 52√3 m ≈ 90,07 m"
      },
      {
        numero: 7, cotacao: "1,5",
        enunciado: "Dado o rectângulo [ABCD], calcule o valor do ângulo x. (Na figura, a diagonal AC mede 2y e o lado DC mede y; x é o ângulo entre a diagonal e o lado, no triângulo rectângulo ADC.)",
        passos: [
          "No triângulo rectângulo ADC, a hipotenusa é a diagonal AC = 2y e o cateto oposto ao ângulo x é DC = y.",
          "Usa o seno: sen x = cateto oposto / hipotenusa = y / (2y) = ½.",
          "O ângulo cujo seno vale ½ é 30°."
        ],
        resposta: "x = 30°"
      },
      {
        numero: 8, cotacao: "3,0",
        enunciado: "Seja dada a função g(x) = log₂ x.\na) Represente graficamente a função g(x).\nb) Determine o domínio da função g(x).",
        passos: [
          "a) Constrói uma tabela com potências de 2: x = ½ → g(x) = −1; x = 1 → 0; x = 2 → 1; x = 4 → 2; x = 8 → 3.",
          "Marca os pontos (½, −1), (1, 0), (2, 1), (4, 2), (8, 3) e une-os com uma curva crescente que se aproxima do eixo Oy sem o tocar.",
          "b) Um logaritmo só existe para argumento positivo: x > 0."
        ],
        resposta: "b) Dg = ]0, +∞["
      },
      {
        numero: 9, cotacao: "2,5",
        enunciado: "Considere o gráfico da função g(x) (uma parábola com zeros em −3 e −1 e vértice no ponto (−2, 1)). Determine:\na) a equação do eixo de simetria;\nb) a expressão analítica da função.",
        passos: [
          "a) O eixo de simetria passa pelo vértice (−2, 1), logo é a recta vertical x = −2. (Confirma-se: é o ponto médio dos zeros, (−3 + (−1)) / 2 = −2.)",
          "b) Com zeros −3 e −1, escreve-se g(x) = a(x + 3)(x + 1).",
          "Usa o vértice (−2, 1): 1 = a(−2 + 3)(−2 + 1) = a(1)(−1) = −a, logo a = −1.",
          "Desenvolve: g(x) = −(x + 3)(x + 1) = −(x² + 4x + 3)."
        ],
        resposta: "a) x = −2  ·  b) g(x) = −x² − 4x − 3"
      },
      {
        numero: 10, cotacao: "2,7",
        enunciado: "Fez-se um inquérito a um grupo de 15 jovens sobre as idas ao cinema no mês de Janeiro. Resultados (nº de idas → nº de jovens): 0 → 2; 1 → 3; 2 → 2; 3 → 5; 4 → 2; 5 → 1.\na) Qual é a moda do número de idas ao cinema?\nb) Calcule a mediana.",
        passos: [
          "a) A moda é o valor com maior frequência. A maior frequência é 5 jovens, correspondente a 3 idas.",
          "b) Ordena os 15 dados: 0, 0, 1, 1, 1, 2, 2, 3, 3, 3, 3, 3, 4, 4, 5.",
          "A posição da mediana é (15 + 1) / 2 = 8ª posição.",
          "O valor na 8ª posição da lista ordenada é 3."
        ],
        resposta: "a) Moda = 3 idas  ·  b) Mediana = 3 idas"
      }
    ]
  },
  {
    id: "mat-10-2023-1",
    disciplina: "Matemática",
    classe: "10ª Classe",
    ano: 2023,
    chamada: "1ª Chamada",
    duracao: "120 Minutos",
    totalPerguntas: 10,
    fonteEnunciado: "Exame Final oficial ES1/2023, Instituto Nacional de Exames, Certificação e Equivalências (Moçambique)",
    originalPdf: "https://storage.mozexames.com/papers/213396d2-0a5f-4a2b-b991-9d9e35f31cea/question.pdf",
    perguntas: [
      {
        numero: 1, cotacao: "2,0",
        enunciado: "Com os símbolos ∈, ∉, ⊂, ⊄, ⊃ e ⊅, complete na sua folha de respostas os espaços em branco de modo a obter proposições verdadeiras:\na) π ___ ℚ\nb) 7,52 ___ ℝ\nc) ℚ ___ ℤ\nd) {9/3; √4; 3} ___ ℝ",
        passos: [
          "Primeiro decide o tipo de comparação: elemento com conjunto usa ∈ ou ∉; conjunto com conjunto usa ⊂, ⊄, ⊃ ou ⊅.",
          "a) π = 3,14159… é uma dízima infinita não periódica, logo é irracional e não pertence aos racionais: π ∉ ℚ.",
          "b) 7,52 é uma dízima finita: é um número racional e, portanto, também é real: 7,52 ∈ ℝ.",
          "c) Todo o número inteiro pode ser escrito como fracção de denominador 1, logo ℤ está contido em ℚ, ou seja, ℚ contém ℤ: ℚ ⊃ ℤ.",
          "d) Simplifica os elementos: 9/3 = 3 e √4 = 2, por isso o conjunto é {3; 2}. Como 2 e 3 são números reais, o conjunto está contido em ℝ: {9/3; √4; 3} ⊂ ℝ."
        ],
        resposta: "a) ∉  ·  b) ∈  ·  c) ⊃  ·  d) ⊂"
      },
      {
        numero: 2, cotacao: "2,0",
        enunciado: "A figura mostra a distribuição de alunos de uma certa escola que estudam as disciplinas de Língua Portuguesa (P), Língua Inglesa (I) e Matemática (M). Quantos alunos estudam:\na) nesta escola?\nb) só Língua Portuguesa?",
        passos: [
          "Lê cada região do diagrama (valores da figura): só Matemática = 90; só Português = 85; só Inglês = 52; Matemática e Português, sem Inglês = 198; Matemática e Inglês, sem Português = 155; Português e Inglês, sem Matemática = 120; as três disciplinas = 1030.",
          "a) O total da escola é a soma de todas as regiões, porque cada aluno aparece numa só região: 90 + 85 + 52 + 198 + 155 + 120 + 1030 = 1730.",
          "Verificação por grupos: só uma disciplina = 90 + 85 + 52 = 227; exactamente duas disciplinas = 198 + 155 + 120 = 473; as três = 1030. Total: 227 + 473 + 1030 = 1730.",
          "b) «Só Língua Portuguesa» é a região exclusiva do círculo P, sem nenhuma intersecção: são 85 alunos."
        ],
        resposta: "a) 1730 alunos  ·  b) 85 alunos"
      },
      {
        numero: 3, cotacao: "2,0",
        enunciado: "Calcule o valor de m, de modo que o produto das raízes da equação 2x² − 6x + 3m + 2 = 0 seja igual a 5.",
        passos: [
          "Numa equação ax² + bx + c = 0, o produto das raízes é dado por P = c/a (relações de Girard).",
          "Nesta equação, a = 2 e c = 3m + 2, logo P = (3m + 2)/2.",
          "Impõe o produto igual a 5: (3m + 2)/2 = 5 → 3m + 2 = 10 → 3m = 8 → m = 8/3.",
          "Verificação: com m = 8/3, tem-se c = 3 × (8/3) + 2 = 10 e P = 10/2 = 5, tal como pedido."
        ],
        resposta: "m = 8/3"
      },
      {
        numero: 4, cotacao: "2,0",
        enunciado: "Determine o conjunto solução da inequação 3x² − 5x + 2 < 0.",
        passos: [
          "Resolve primeiro a equação associada 3x² − 5x + 2 = 0. Discriminante: Δ = (−5)² − 4 × 3 × 2 = 25 − 24 = 1.",
          "Raízes: x = (5 ± 1)/6, ou seja, x₁ = 4/6 = 2/3 e x₂ = 6/6 = 1.",
          "Como a = 3 > 0, a parábola tem a concavidade para cima: a função é negativa entre as raízes e positiva fora delas.",
          "Verificação com um valor intermédio: para x = 0,8, obtém-se 3 × 0,64 − 5 × 0,8 + 2 = −0,08 < 0, o que confirma o intervalo."
        ],
        resposta: "S = {x ∈ ℝ : 2/3 < x < 1}, ou seja, S = ]2/3, 1["
      },
      {
        numero: 5, cotacao: "1,5",
        enunciado: "Resolva a equação logₓ 4 = 2, sabendo que x ∈ ℝ⁺ ∕ {1}.",
        passos: [
          "A condição dada significa que a base do logaritmo é positiva e diferente de 1, como qualquer base de logaritmo deve ser.",
          "Pela definição de logaritmo, logₓ 4 = 2 equivale a x² = 4.",
          "De x² = 4 resulta x = 2 ou x = −2.",
          "O valor −2 não serve, porque a base tem de ser positiva. Verificação: log₂ 4 = 2, porque 2² = 4."
        ],
        resposta: "x = 2"
      },
      {
        numero: 6, cotacao: "1,5",
        enunciado: "Sendo log₃ a + log₃ b = 2, calcule o valor de a × b.",
        passos: [
          "A soma de logaritmos com a mesma base é igual ao logaritmo do produto: log₃ a + log₃ b = log₃ (a × b).",
          "A equação fica log₃ (a × b) = 2.",
          "Pela definição de logaritmo: a × b = 3² = 9."
        ],
        resposta: "a × b = 9"
      },
      {
        numero: 7, cotacao: "1,5",
        enunciado: "Determine o valor de cos x, sabendo que 5 · sen x = 4 e x ∈ 1º Q (primeiro quadrante).",
        passos: [
          "De 5 · sen x = 4 vem sen x = 4/5.",
          "Usa a relação fundamental da trigonometria: sen² x + cos² x = 1 → cos² x = 1 − (4/5)² = 1 − 16/25 = 9/25, logo cos x = ±3/5.",
          "Como x está no 1º quadrante, o cosseno é positivo: fica o sinal +.",
          "Verificação: (4/5)² + (3/5)² = 16/25 + 9/25 = 25/25 = 1."
        ],
        resposta: "cos x = 3/5"
      },
      {
        numero: 8, cotacao: "1,5",
        enunciado: "Calcule o valor de y na equação tg 3y = cotg (y/3), sabendo que os ângulos são complementares.",
        passos: [
          "Ângulos complementares somam 90°. Os ângulos da equação são 3y e y/3, por isso 3y + y/3 = 90°.",
          "Multiplica tudo por 3: 9y + y = 270° → 10y = 270°.",
          "Logo y = 270°/10 = 27°.",
          "Verificação: 3y = 81° e y/3 = 9°; somam 90° e tg 81° = cotg 9°, tal como a equação pede."
        ],
        resposta: "y = 27°"
      },
      {
        numero: 9, cotacao: "2,5",
        enunciado: "Considere a função f(x) = 2ˣ + 2 e determine:\na) a equação da assímptota;\nb) a variação da função (monotonia). Justifique a resposta.",
        passos: [
          "a) Quando x toma valores negativos cada vez maiores, 2ˣ aproxima-se de 0 sem nunca o atingir (por exemplo, 2⁻¹⁰ ≈ 0,001). Assim, f(x) = 2ˣ + 2 aproxima-se de 2 sem nunca valer 2.",
          "a) A recta y = 2 é, portanto, a assímptota horizontal da função.",
          "b) A base da exponencial é 2, maior do que 1: quando x aumenta, 2ˣ também aumenta sempre. Somar 2 no fim não muda esse comportamento.",
          "b) Confirma com valores: f(−1) = 2,5; f(0) = 3; f(1) = 4; f(2) = 6 — os valores crescem sempre que x cresce. A função é estritamente crescente em todo o ℝ."
        ],
        resposta: "a) Assímptota horizontal: y = 2  ·  b) Estritamente crescente em ℝ, porque a base 2 é maior que 1"
      },
      {
        numero: 10, cotacao: "3,5",
        enunciado: "Seja g(x) a função cujo gráfico está representado na figura (uma parábola com vértice no ponto (2, 1) e que passa pelos pontos (0, 5) e (4, 5)). Determine:\na) o contradomínio da função;\nb) a expressão analítica da função.",
        passos: [
          "Da figura lêem-se três informações-chave: o vértice da parábola é V(2, 1) e o gráfico passa pelos pontos (0, 5) e (4, 5).",
          "a) A concavidade é para cima e o vértice é o ponto mais baixo: o menor valor da função é y = 1 e não há valor máximo. O contradomínio é [1, +∞[.",
          "b) Usa a forma do vértice: g(x) = a(x − 2)² + 1.",
          "b) Substitui o ponto (0, 5): 5 = a(0 − 2)² + 1 → 5 = 4a + 1 → 4a = 4 → a = 1.",
          "b) Verificação com o outro ponto marcado na figura: g(4) = (4 − 2)² + 1 = 5, tal como o gráfico mostra."
        ],
        resposta: "a) CD(g) = [1, +∞[  ·  b) g(x) = (x − 2)² + 1 = x² − 4x + 5"
      }
    ]
  }
];

// Exames em produção (aparecem na lista, ainda sem conteúdo)
window.EM_BREVE = [
  { disciplina: "Matemática", classe: "10ª Classe", ano: 2015, chamada: "1ª Época" },
  { disciplina: "Matemática", classe: "10ª Classe", ano: 2013, chamada: "1ª Época" },
  { disciplina: "Matemática", classe: "10ª Classe", ano: 2012, chamada: "1ª e 2ª Épocas" },
  { disciplina: "Matemática", classe: "10ª Classe", ano: 2011, chamada: "2ª Época" }
];

// O arquivo de exames ORIGINAIS (todas as disciplinas, 9ª e 10ª) vive agora
// em data/arquivo.js (window.ARQUIVO); window.ORIGINAIS é derivado lá.
