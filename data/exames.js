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
  }
];

// Exames em produção (aparecem na lista, ainda sem conteúdo)
window.EM_BREVE = [
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

// Arquivo de exames ORIGINAIS (PDF oficial digitalizado) — Matemática 10ª Classe
// Fonte: arquivo público mozexames.com (exames oficiais INEC/MINEDH).
window.ORIGINAIS = [
  { ano: 2000, epoca: "1ª Época", url: "https://storage.mozexames.com/papers/bcaca8b6-4121-49c8-9e67-bcf598d57643/question.pdf" },
  { ano: 2000, epoca: "2ª Época", url: "https://storage.mozexames.com/papers/4664e657-c1a0-4814-aabe-b6e9511fce63/question.pdf" },
  { ano: 2001, epoca: "1ª Época", url: "https://storage.mozexames.com/papers/d7e8d9d9-2c82-4730-af5e-9233b9024d3c/question.pdf" },
  { ano: 2001, epoca: "2ª Época", url: "https://storage.mozexames.com/papers/df0364f0-4da5-46be-99e5-da833083d86d/question.pdf" },
  { ano: 2002, epoca: "1ª Época", url: "https://storage.mozexames.com/papers/d9400a10-10b2-4f51-a8a1-fbd660c2230c/question.pdf" },
  { ano: 2002, epoca: "2ª Época", url: "https://storage.mozexames.com/papers/c2ca955d-09d2-47a3-8b4f-df8668d54d37/question.pdf" },
  { ano: 2003, epoca: "1ª Época", url: "https://storage.mozexames.com/papers/e2828b1f-0ae3-4dec-8f43-63920759f73d/question.pdf" },
  { ano: 2003, epoca: "2ª Época", url: "https://storage.mozexames.com/papers/9ae14a92-2d6a-42c9-a36a-2c92ba3ddcd3/question.pdf" },
  { ano: 2005, epoca: "1ª Época", url: "https://storage.mozexames.com/papers/a947eb5b-9d78-42e9-91ad-6f6ea04d4e08/question.pdf" },
  { ano: 2009, epoca: "2ª Época", url: "https://storage.mozexames.com/papers/efb073e8-84fa-4cdc-9101-a135e99552f0/question.pdf" },
  { ano: 2011, epoca: "1ª Época", url: "https://storage.mozexames.com/papers/8226db88-2123-400c-822b-785743646abb/question.pdf" },
  { ano: 2011, epoca: "2ª Época", url: "https://storage.mozexames.com/papers/f3e00800-fdbc-42e0-8fd1-1c1cac4506ba/question.pdf" },
  { ano: 2012, epoca: "1ª Época", url: "https://storage.mozexames.com/papers/18dec382-ee84-45e1-bbd1-b31fb8490318/question.pdf" },
  { ano: 2012, epoca: "2ª Época", url: "https://storage.mozexames.com/papers/5f8588ad-dcca-4e12-b4e6-bf0f1fda0e99/question.pdf" },
  { ano: 2013, epoca: "1ª Época", url: "https://storage.mozexames.com/papers/fdeda38a-d598-4937-9094-a5d7ebdd8246/question.pdf" },
  { ano: 2013, epoca: "2ª Época", url: "https://storage.mozexames.com/papers/e356e6f4-ae02-49be-8715-d5611e28524d/question.pdf" },
  { ano: 2014, epoca: "1ª Época", url: "https://storage.mozexames.com/papers/7e3c3b37-0007-4cea-8175-a665306c999b/question.pdf" },
  { ano: 2014, epoca: "2ª Época", url: "https://storage.mozexames.com/papers/8d9ce622-4fe4-4f2e-b90e-54fec6b43f97/question.pdf" },
  { ano: 2015, epoca: "1ª Época", url: "https://storage.mozexames.com/papers/49fe61af-16a0-4719-8f5f-286ab5d13a4a/question.pdf" },
  { ano: 2015, epoca: "2ª Época", url: "https://storage.mozexames.com/papers/08a25655-73d8-4d68-9e1b-52183d7c99d0/question.pdf" },
  { ano: 2016, epoca: "1ª Época", url: "https://storage.mozexames.com/papers/83984851-5dfe-4bc6-9093-5ce7569d079f/question.pdf" },
  { ano: 2016, epoca: "2ª Época", url: "https://storage.mozexames.com/papers/353d1db8-6559-4dc1-bef6-a8074dec1b06/question.pdf" },
  { ano: 2017, epoca: "1ª Época", url: "https://storage.mozexames.com/papers/d3b23fcb-5823-4ba6-88c0-b6025d93020f/question.pdf" },
  { ano: 2017, epoca: "2ª Época", url: "https://storage.mozexames.com/papers/2f653c24-e866-4071-bfd2-2a9b4317aba6/question.pdf" },
  { ano: 2018, epoca: "2ª Época", url: "https://storage.mozexames.com/papers/11bbeeee-a8aa-4b3f-a372-45207d6fd434/question.pdf" },
  { ano: 2019, epoca: "1ª Época", url: "https://storage.mozexames.com/papers/38b4d656-7da9-45c0-b6bd-dae242ecde0a/question.pdf" },
  { ano: 2019, epoca: "2ª Época", url: "https://storage.mozexames.com/papers/56543864-f269-47e7-8ca2-8e19abe6f34f/question.pdf" },
  { ano: 2020, epoca: "1ª Época", url: "https://storage.mozexames.com/papers/ff0c18d1-1f51-4fd9-a98a-43217e37e04d/question.pdf" },
  { ano: 2021, epoca: "1ª Época", url: "https://storage.mozexames.com/papers/ff055494-2717-48c4-bc31-b76828de42e3/question.pdf" },
  { ano: 2022, epoca: "1ª Época", url: "https://storage.mozexames.com/papers/ec74a8ce-f451-40da-bb46-d75ac821a564/question.pdf" },
  { ano: 2022, epoca: "2ª Época", url: "https://storage.mozexames.com/papers/647f5e38-f378-4e15-9baa-505ff4ba78c7/question.pdf" },
  { ano: 2023, epoca: "1ª Época", url: "https://storage.mozexames.com/papers/213396d2-0a5f-4a2b-b991-9d9e35f31cea/question.pdf" },
  { ano: 2024, epoca: "1ª Época", url: "https://storage.mozexames.com/papers/263e423b-37da-4c4c-b12f-5945934e4fde/question.pdf" },
  { ano: 2025, epoca: "1ª Época", url: "https://storage.mozexames.com/papers/6f2354c9-dee6-4224-bf85-548d21204461/question.pdf" }
];
