// PreparaMZ — dados dos exames
// Enunciados: exames oficiais (INEC/MINEDH). Resoluções: produzidas pela equipa PreparaMZ.
window.EXAMES = [
  {
    id: "mat-10-2024-1",
    disciplina: "Matemática",
    classe: "10ª Classe",
    ano: 2024,
    chamada: "1ª Chamada",
    duracao: "120 Minutos",
    totalPerguntas: 10,
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
  }
];

// Exames em produção (aparecem na lista, ainda sem conteúdo)
window.EM_BREVE = [
  { disciplina: "Matemática", classe: "10ª Classe", ano: 2025, chamada: "1ª Chamada" },
  { disciplina: "Matemática", classe: "10ª Classe", ano: 2023, chamada: "1ª Chamada" },
  { disciplina: "Matemática", classe: "10ª Classe", ano: 2022, chamada: "1ª Chamada" },
  { disciplina: "Matemática", classe: "10ª Classe", ano: 2020, chamada: "1ª Chamada" },
  { disciplina: "Matemática", classe: "10ª Classe", ano: 2019, chamada: "1ª Época" },
  { disciplina: "Matemática", classe: "10ª Classe", ano: 2017, chamada: "1ª Época" },
  { disciplina: "Matemática", classe: "10ª Classe", ano: 2015, chamada: "1ª Época" },
  { disciplina: "Matemática", classe: "10ª Classe", ano: 2013, chamada: "1ª Época" },
  { disciplina: "Matemática", classe: "10ª Classe", ano: 2012, chamada: "1ª e 2ª Épocas" },
  { disciplina: "Matemática", classe: "10ª Classe", ano: 2011, chamada: "2ª Época" }
];
