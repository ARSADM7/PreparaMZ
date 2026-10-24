// PreparaMZ — Matemática 10ª classe: exames de 2009 (2ª) a 2000 (Lote 6 — fecha a disciplina, 34/34)
// Transcrições fiéis dos exames oficiais (PDFs do arquivo mozexames, MD5 conferidos
// localmente a 2026-10-24), lidas visualmente a 200/300 dpi (scans antigos de livros
// de exames compilados). Resoluções próprias, passo a passo, com verificação por
// segundo método/recomputação incluída nos passos.
//
// ESCALA DAS COTAÇÕES: as provas de 2009-2ª e 2005-1ª imprimem já cotações em
// valores (total 20,0). As de 2003, 2002, 2001 e 2000 imprimem pontos em décimos
// (total 200); aqui apresentam-se convertidas em valores (pontos ÷ 10), somando
// exactamente 20,0 em cada prova — conversão indicada na fonte de cada exame.
//
// NOTAS DE LEITURA (incertezas documentadas):
// - 2003-2 Q6b: com x literalmente no 2º quadrante a equação é impossível (o seno
//   seria negativo); adopta-se a leitura coerente — o ângulo (π − 2x) no 2º
//   quadrante — explicada na própria resolução.
// - 2002-1 Q6a: a folha imprime «f(0) = 1», mas f(x) = log₂x não está definida em 0;
//   lê-se g(0) = 1 (a função quadrática), explicado na resolução.
// - 2001-2 Q4: segue-se o modelo da própria folha (área = lado × altura / 2), como
//   no precedente do Lote 5 (2011-2ª Q4); a relação exacta do equilátero daria
//   outro problema.
// - 2000-2 Q7: a condição impressa é matematicamente impossível (conduz a
//   m + 7 = m); a resolução demonstra-o em vez de inventar números — lapso da folha.
// - Valores monetários antigos mantidos como impressos: 2002-1 Q9 (MT da época) e
//   2001-1 Q8 («mil meticais», pré-redenominação).
window.EXAMES = (window.EXAMES || []).concat([
{
  id: "mat-10-2009-2",
  disciplina: "Matemática",
  classe: "10ª Classe",
  ano: 2009,
  chamada: "2ª Época",
  duracao: "120 Minutos",
  totalPerguntas: 6,
  fonteEnunciado: "Transcrição fiel do exame oficial ESG/2009 (2ª Época), verificada visualmente contra o PDF original do arquivo.",
  originalPdf: "https://storage.mozexames.com/papers/efb073e8-84fa-4cdc-9101-a135e99552f0/question.pdf",
  perguntas: [
    {
      numero: 1, cotacao: "2,0",
      enunciado: "Usando os conjuntos IN, Z, Q, IR e seus subconjuntos, complete na sua folha de exame de modo a obter afirmações verdadeiras:\na) IN ∪ Z₀⁻ = ..........\nb) Z ∩ ∅ = ..........\nc) IR \\ ..... = IR₀⁺\nd) Q ∪ Z = ..........",
      passos: [
        "a) Z₀⁻ é o conjunto dos inteiros não positivos {...; −2; −1; 0}. Juntando-lhe os naturais (os inteiros positivos) obtêm-se todos os inteiros: IN ∪ Z₀⁻ = Z.",
        "b) A intersecção de qualquer conjunto com o conjunto vazio é o conjunto vazio: Z ∩ ∅ = ∅.",
        "c) Para de IR restar IR₀⁺ = [0; +∞[ é preciso retirar os reais negativos: o espaço em branco completa-se com IR⁻, porque IR \\ IR⁻ = IR₀⁺.",
        "d) Todo o número inteiro é racional (Z ⊂ Q), por isso a união não acrescenta elementos novos a Q: Q ∪ Z = Q."
      ],
      resposta: "a) Z · b) ∅ · c) IR⁻ · d) Q"
    },
    {
      numero: 2, cotacao: "3,0",
      enunciado: "Determine o valor numérico das seguintes expressões:\na) [2^(1/2) · 3^(1/2) : 6^(2/3)] : [6^(1/2) · 6^(1/3)]\nb) tg315° : cos210°",
      passos: [
        "a) 2^(1/2) · 3^(1/2) = (2 · 3)^(1/2) = 6^(1/2) (produto de potências com o mesmo expoente).",
        "Numerador: 6^(1/2) : 6^(2/3) = 6^(1/2 − 2/3) = 6^(−1/6). Denominador: 6^(1/2) · 6^(1/3) = 6^(5/6).",
        "Quociente: 6^(−1/6 − 5/6) = 6^(−1) = 1/6.",
        "b) tg315° = tg(360° − 45°) = −tg45° = −1. cos210° = cos(180° + 30°) = −cos30° = −√3/2.",
        "Quociente: (−1) : (−√3/2) = 2/√3 = 2√3/3 (racionalizando)."
      ],
      resposta: "a) 1/6 · b) 2√3/3"
    },
    {
      numero: 3, cotacao: "5,5",
      enunciado: "Resolva em IR cada alínea:\na) 3^(2x) = ∛72 : 2\nb) 2:(x − 1) + 3 = (x − 1):x\nc) √2 · sen2x − 1 = 0, com x elemento do 1º quadrante\nd) O sistema { 1 − (x − 1) > 7 ; (x − 4):4 ≥ (5 − x):2 }",
      passos: [
        "a) ∛72 = ∛(8 · 9) = 2∛9 = 2 · 3^(2/3); dividido por 2 fica 3^(2/3). Igualando os expoentes (mesma base 3): 2x = 2/3, donde x = 1/3.",
        "b) Domínio: x ≠ 0 e x ≠ 1. Multiplicando ambos os membros por x(x − 1): 2x + 3x(x − 1) = (x − 1)², ou seja 3x² − x = x² − 2x + 1.",
        "Simplificando: 2x² + x − 1 = 0. Δ = 1 + 8 = 9; x = (−1 ± 3)/4, donde x = 1/2 ou x = −1. Ambos respeitam o domínio.",
        "Verificação com x = −1: 2:(−2) + 3 = 2 e (−2):(−1) = 2 ✓.",
        "c) sen2x = 1:√2 = √2/2. Com x no 1º quadrante, 2x está entre 0° e 180°: 2x = 45° ou 2x = 135°, donde x = 22,5° ou x = 67,5°.",
        "d) Primeira inequação: 1 − x + 1 > 7 ⇔ −x > 5 ⇔ x < −5. Segunda: multiplicando por 4, x − 4 ≥ 2(5 − x) ⇔ 3x ≥ 14 ⇔ x ≥ 14/3.",
        "Não há número que seja ao mesmo tempo menor que −5 e maior ou igual a 14/3: o sistema é impossível, S = ∅."
      ],
      resposta: "a) S = {1/3} · b) S = {−1; 1/2} · c) x = 22,5° ou x = 67,5° · d) S = ∅"
    },
    {
      numero: 4, cotacao: "4,5",
      enunciado: "Considere as funções f(x) = −x² + 2x + 3 e g(x) = −x + 3.\na) Determine os zeros da função f.\nb) Determine as coordenadas do vértice da função f.\nc) Esboce os gráficos de f e g no mesmo sistema cartesiano.\nd) Pela leitura dos gráficos determine g(x) > f(x).",
      passos: [
        "a) −x² + 2x + 3 = 0 ⇔ x² − 2x − 3 = 0. Δ = 4 + 12 = 16; x = (2 ± 4)/2, donde x = 3 ou x = −1.",
        "b) xv = −b:(2a) = −2:(−2) = 1; yv = f(1) = −1 + 2 + 3 = 4. Vértice V(1; 4).",
        "c) A parábola f tem concavidade para baixo, zeros −1 e 3, vértice (1; 4) e f(0) = 3. A recta g passa por (0; 3) e (3; 0). Os gráficos cruzam-se em (0; 3) e (3; 0) — confirmação analítica: −x² + 2x + 3 = −x + 3 ⇔ −x² + 3x = 0 ⇔ x = 0 ou x = 3 (ver figura da resolução).",
        "d) Pela leitura do gráfico, a recta g está acima da parábola f para x < 0 e para x > 3: g(x) > f(x) ⇔ x ∈ ]−∞; 0[ ∪ ]3; +∞[."
      ],
      resposta: "a) x = −1 e x = 3 · b) V(1; 4) · c) Esboço — ver figura da resolução · d) x ∈ ]−∞; 0[ ∪ ]3; +∞["
    },
    {
      numero: 5, cotacao: "3,5",
      enunciado: "Numa turma as notas de uma determinada prova variam conforme a tabela abaixo.\nNotas: 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16\nNº de alunos: 2 | 2 | 4 | 3 | 6 | 4 | 1 | 2 | 1\na) Quantos alunos foram avaliados?\nb) Quantos alunos tiveram nota positiva?\nc) Qual foi a nota média da turma?\nd) Qual é a moda?",
      passos: [
        "a) Somando as frequências: 2 + 2 + 4 + 3 + 6 + 4 + 1 + 2 + 1 = 25 alunos.",
        "b) Nota positiva é nota maior ou igual a 10: 4 + 3 + 6 + 4 + 1 + 2 + 1 = 21 alunos.",
        "c) Soma ponderada: 8·2 + 9·2 + 10·4 + 11·3 + 12·6 + 13·4 + 14·1 + 15·2 + 16·1 = 16 + 18 + 40 + 33 + 72 + 52 + 14 + 30 + 16 = 291. Média = 291:25 = 11,64 valores.",
        "d) A nota com maior frequência (6 alunos) é 12: a moda é 12 valores."
      ],
      resposta: "a) 25 alunos · b) 21 alunos · c) 11,64 valores · d) Moda = 12 valores"
    },
    {
      numero: 6, cotacao: "1,5",
      enunciado: "Considere as funções f(x) = log₂x e g(x) = 1 + log₂x.\na) Qual é o contradomínio de g(x)?\nb) Sendo (1; 0) coordenadas de um ponto pertencente ao gráfico da função f(x), quais serão as coordenadas de um ponto do gráfico de g(x)?\nc) Determine os zeros da função g(x).",
      passos: [
        "a) Somar 1 a log₂x apenas desloca o gráfico 1 unidade para cima; o conjunto de valores atingidos continua a ser todos os reais: CD(g) = IR.",
        "b) Ao ponto (1; 0) de f corresponde, no gráfico de g, o ponto com a mesma abcissa e ordenada aumentada de 1: (1; 1).",
        "c) 1 + log₂x = 0 ⇔ log₂x = −1 ⇔ x = 2⁻¹ = 1/2."
      ],
      resposta: "a) CD(g) = IR · b) (1; 1) · c) x = 1/2"
    }
  ]
},
{
  id: "mat-10-2005-1",
  disciplina: "Matemática",
  classe: "10ª Classe",
  ano: 2005,
  chamada: "1ª Época",
  duracao: "120 Minutos",
  totalPerguntas: 6,
  fonteEnunciado: "Transcrição fiel do exame oficial ESG/2005 (1ª Época), verificada visualmente contra o PDF original do arquivo.",
  originalPdf: "https://storage.mozexames.com/papers/a947eb5b-9d78-42e9-91ad-6f6ea04d4e08/question.pdf",
  perguntas: [
    {
      numero: 1, cotacao: "2,0",
      enunciado: "Transcreva para a sua folha de exame cada uma das alíneas que se seguem e complete os espaços em branco usando os símbolos >, = ou <:\na) (−1 − 1/3)³ .......... −64/27\nb) |−6| .......... |6|\nc) 0,05 .......... 3⁻³\nd) log₂(1/8) .......... log₄(1/16)",
      passos: [
        "a) (−1 − 1/3)³ = (−4/3)³ = −64/27: os dois membros são iguais, usa-se =.",
        "b) |−6| = 6 e |6| = 6: usa-se =.",
        "c) 3⁻³ = 1/27 ≈ 0,037, que é menor que 0,05: usa-se >.",
        "d) log₂(1/8) = −3 e log₄(1/16) = −2 (porque 4⁻² = 1/16); como −3 < −2, usa-se <."
      ],
      resposta: "a) = · b) = · c) > · d) <"
    },
    {
      numero: 2, cotacao: "3,0",
      enunciado: "Resolva:\na) (2/5)^(3x + 1) < (2/5)^(5x − 9)\nb) x:6 = 6:(15 − x)",
      passos: [
        "a) A base 2/5 é menor que 1, por isso a função é decrescente e a desigualdade inverte-se ao comparar os expoentes: 3x + 1 > 5x − 9 ⇔ −2x > −10 ⇔ x < 5.",
        "b) Multiplicando em cruz (com x ≠ 15): x(15 − x) = 36 ⇔ x² − 15x + 36 = 0.",
        "Δ = 225 − 144 = 81; x = (15 ± 9)/2, donde x = 12 ou x = 3.",
        "Verificação: 3:6 = 1/2 e 6:(15 − 3) = 6:12 = 1/2 ✓; 12:6 = 2 e 6:(15 − 12) = 6:3 = 2 ✓."
      ],
      resposta: "a) S = ]−∞; 5[ · b) S = {3; 12}"
    },
    {
      numero: 3, cotacao: "2,0",
      enunciado: "Num parque de estacionamento para motos (com duas rodas) e carros ligeiros (com 4 rodas), a soma dos volantes é 60 e das rodas é 198. Quantos carros e quantas motos estão no parque de estacionamento?",
      passos: [
        "Sejam m o número de motos e c o número de carros. Cada veículo tem exactamente 1 volante: m + c = 60.",
        "Contando as rodas: 2m + 4c = 198, ou seja, dividindo por 2, m + 2c = 99.",
        "Subtraindo a primeira equação da segunda: c = 99 − 60 = 39. Então m = 60 − 39 = 21.",
        "Verificação: 21 + 39 = 60 volantes ✓; 21 · 2 + 39 · 4 = 42 + 156 = 198 rodas ✓."
      ],
      resposta: "39 carros e 21 motos"
    },
    {
      numero: 4, cotacao: "4,0",
      enunciado: "Na figura está representado um cilindro cuja base é uma circunferência de centro O. Os pontos A e B pertencem à circunferência e BC é um diâmetro.\na) Qual é a amplitude do ângulo A?\nb) Sabendo que AB = 3 cm e AC = 4 cm, calcule o raio da circunferência.\nc) Calcule a área do círculo.\nd) Calcule o volume do cilindro sabendo que a sua altura mede 4 cm.",
      passos: [
        "a) BC é um diâmetro e o ângulo A está inscrito numa semicircunferência: todo o ângulo inscrito sobre um diâmetro é recto, Â = 90°.",
        "b) O triângulo ABC é rectângulo em A: BC² = AB² + AC² = 3² + 4² = 25, donde BC = 5 cm. O raio é metade do diâmetro: r = 5:2 = 2,5 cm.",
        "c) Área do círculo: A = πr² = π · (2,5)² = 6,25π cm² ≈ 19,6 cm².",
        "d) Volume do cilindro: V = área da base × altura = 6,25π × 4 = 25π cm³ ≈ 78,5 cm³."
      ],
      resposta: "a) Â = 90° · b) r = 2,5 cm · c) 6,25π cm² (≈ 19,6 cm²) · d) 25π cm³ (≈ 78,5 cm³)"
    },
    {
      numero: 5, cotacao: "5,0",
      enunciado: "A função f(x) = (x − k)² + m é definida pelo gráfico da figura.\na) Determine os valores de k e m.\nb) Determine os zeros da função f.\nc) Indique o contradomínio de f(x).\nd) Represente no mesmo S.C.O o gráfico da função g(x) = −x + 5 e indique os pontos de intersecção de f e g.",
      passos: [
        "a) Na forma f(x) = (x − k)² + m, o par (k; m) é o vértice da parábola. O gráfico mostra o vértice em (3; −4), indicado pelas linhas tracejadas: k = 3 e m = −4.",
        "b) Os zeros lêem-se onde a parábola cruza o eixo Ox: x = 1 e x = 5. Confirmação analítica: (x − 3)² − 4 = 0 ⇔ (x − 3)² = 4 ⇔ x − 3 = ±2 ⇔ x = 1 ou x = 5 ✓.",
        "c) A parábola abre para cima e o seu valor mínimo é −4: CD(f) = [−4; +∞[.",
        "d) A recta g(x) = −x + 5 passa por (0; 5) e (5; 0). Intersecção com f: (x − 3)² − 4 = −x + 5 ⇔ x² − 6x + 5 = −x + 5 ⇔ x² − 5x = 0 ⇔ x = 0 ou x = 5, com ordenadas 5 e 0 (ver figura da resolução)."
      ],
      resposta: "a) k = 3 e m = −4 · b) x = 1 e x = 5 · c) CD(f) = [−4; +∞[ · d) Pontos de intersecção (0; 5) e (5; 0)"
    },
    {
      numero: 6, cotacao: "4,0",
      enunciado: "Na machamba da Raquelina, a percentagem de ocupação com culturas é a seguinte: feijão: 50%; milho: 25%; banana: 10%.\na) Se a machamba tem uma superfície de 56 m², qual é a área cultivada de feijão?\nb) A machamba tem a sua área totalmente ocupada pelas culturas? Explique a sua resposta.\nc) Represente num diagrama circular a área da machamba ocupada pela percentagem das culturas.",
      passos: [
        "a) 50% de 56 m² = 0,5 × 56 = 28 m² de feijão.",
        "b) Somando as percentagens: 50% + 25% + 10% = 85% < 100%. Não está totalmente ocupada: faltam 15% da área (0,15 × 56 = 8,4 m²) sem nenhuma das culturas indicadas.",
        "c) Ângulos do diagrama circular (percentagem × 360°): feijão 50% → 180°; milho 25% → 90°; banana 10% → 36°; restante 15% → 54° (ver figura da resolução)."
      ],
      resposta: "a) 28 m² · b) Não — as culturas ocupam 85% da área (faltam 15%) · c) Diagrama circular — ver figura da resolução"
    }
  ]
},
{
  id: "mat-10-2003-1",
  disciplina: "Matemática",
  classe: "10ª Classe",
  ano: 2003,
  chamada: "1ª Época",
  duracao: "120 Minutos",
  totalPerguntas: 8,
  fonteEnunciado: "Transcrição fiel do exame oficial ESG/2003 (1ª Chamada), verificada visualmente contra o PDF original do arquivo. Cotações: a folha imprime pontos (total 200); aqui apresentam-se convertidas em valores (÷ 10, total 20,0).",
  originalPdf: "https://storage.mozexames.com/papers/e2828b1f-0ae3-4dec-8f43-63920759f73d/question.pdf",
  perguntas: [
    {
      numero: 1, cotacao: "2,0",
      enunciado: "Classifique em verdadeiras (V) ou falsas (F) as seguintes afirmações:\na) Um rectângulo tem dois eixos de simetria.\nb) 6 ∈ ]2; 6[\nc) log₃35 = log₃7 + log₃5\nd) |−6| = −6\ne) Um quadrado é um paralelogramo.",
      passos: [
        "a) O rectângulo tem exactamente 2 eixos de simetria (as mediatrizes dos lados): V.",
        "b) O intervalo ]2; 6[ é aberto em 6, por isso 6 não lhe pertence: F.",
        "c) Pela propriedade do logaritmo do produto: log₃7 + log₃5 = log₃(7 · 5) = log₃35: V.",
        "d) |−6| = 6 e não −6 (o módulo nunca é negativo): F.",
        "e) O quadrado tem os lados opostos paralelos e iguais — é um paralelogramo particular: V."
      ],
      resposta: "a) V · b) F · c) V · d) F · e) V"
    },
    {
      numero: 2, cotacao: "2,9",
      enunciado: "Determine:\na) [(−2) × (−2) × (−2) × (−2)] : (−2)²\nb) sen(7π:6) + cos(5π:3)",
      passos: [
        "a) O numerador tem 4 factores iguais a −2: (−2)⁴ = 16. O denominador é (−2)² = 4. Resultado: 16:4 = 4.",
        "b) sen(7π:6) = sen(180° + 30°) = −sen30° = −1/2. cos(5π:3) = cos(360° − 60°) = cos60° = 1/2. Soma: −1/2 + 1/2 = 0."
      ],
      resposta: "a) 4 · b) 0"
    },
    {
      numero: 3, cotacao: "2,2",
      enunciado: "Racionalize o denominador e simplifique a fracção: √(3xy) : [√(3xy) − y√(3x)]",
      passos: [
        "Escrevendo as raízes com factores comuns: o numerador é √3 · √x · √y; o denominador é √3 · √x · √y − y · √3 · √x = √3 · √x · (√y − y) = √3 · √x · √y · (1 − √y).",
        "Simplificando os factores comuns √3, √x e √y: a fracção reduz-se a 1:(1 − √y).",
        "Racionalizando (multiplicar numerador e denominador por 1 + √y): (1 + √y) : [(1 − √y)(1 + √y)] = (1 + √y):(1 − y).",
        "Verificação numérica com x = 1 e y = 4: a expressão original vale √12 : (√12 − 4√3) ≈ 3,46 : (3,46 − 6,93) = −1; a simplificada: (1 + 2):(1 − 4) = −1 ✓."
      ],
      resposta: "(1 + √y) : (1 − y)"
    },
    {
      numero: 4, cotacao: "1,0",
      enunciado: "Determine k de modo que a parábola da função y = (1:k − 1)x² + 2x + 3 tenha a concavidade virada para cima.",
      passos: [
        "A concavidade é virada para cima quando o coeficiente de x² é positivo: 1:k − 1 > 0, ou seja, 1:k > 1.",
        "Se k > 0, 1:k > 1 equivale a k < 1. Se k < 0, 1:k é negativo e nunca é maior que 1.",
        "Logo, a condição verifica-se exactamente para 0 < k < 1."
      ],
      resposta: "k ∈ ]0; 1["
    },
    {
      numero: 5, cotacao: "2,0",
      enunciado: "Um rectângulo tem a base igual a 3/4 da sua altura e esta (a altura) tem menos 4 metros do que a diagonal do mesmo rectângulo. Calcule a área do rectângulo.",
      passos: [
        "Seja h a altura (em metros). A base é b = (3/4)h e a diagonal é d = h + 4.",
        "Pelo teorema de Pitágoras: b² + h² = d² ⇔ (9/16)h² + h² = (h + 4)² ⇔ (25/16)h² = h² + 8h + 16 ⇔ 9h² − 128h − 256 = 0.",
        "Δ = 128² + 4 · 9 · 256 = 16 384 + 9 216 = 25 600, com √Δ = 160. h = (128 + 160):18 = 16 m (a outra raiz é negativa e não serve).",
        "Então b = (3/4) · 16 = 12 m e d = 20 m. Verificação: 12² + 16² = 144 + 256 = 400 = 20² ✓ e 20 − 16 = 4 ✓.",
        "Área = base × altura = 12 × 16 = 192 m²."
      ],
      resposta: "192 m²"
    },
    {
      numero: 6, cotacao: "2,5",
      enunciado: "Resolva:\na) 2^(x − 2) < 2^(3x − 6)\nb) log_{1/2}x = (3/2) · log_{1/2}2",
      passos: [
        "a) A base 2 é maior que 1, por isso comparam-se os expoentes sem inverter a desigualdade: x − 2 < 3x − 6 ⇔ −2x < −4 ⇔ x > 2.",
        "b) (3/2) · log_{1/2}2 = log_{1/2}(2^{3/2}) (propriedade da potência). Logo x = 2^{3/2} = √8 = 2√2, que é positivo e pertence ao domínio ✓."
      ],
      resposta: "a) S = ]2; +∞[ · b) S = {2√2}"
    },
    {
      numero: 7, cotacao: "1,7",
      enunciado: "Demonstre a seguinte identidade: [1:senα + 1] : cotgα − cotgα : [1:senα − 1] = 0",
      passos: [
        "Primeira fracção: o numerador é (1 + senα):senα; dividindo por cotgα = cosα:senα, os senα cancelam-se e fica (1 + senα):cosα.",
        "Segunda fracção: dividindo cotgα = cosα:senα por (1 − senα):senα, fica cosα:(1 − senα).",
        "Diferença com denominador comum cosα(1 − senα): [(1 + senα)(1 − senα) − cos²α] : [cosα(1 − senα)] = [(1 − sen²α) − cos²α] : [...] = [cos²α − cos²α] : [...] = 0, como se queria demonstrar (nos pontos em que a expressão está definida)."
      ],
      resposta: "Identidade demonstrada — o 1º membro simplifica-se para 0"
    },
    {
      numero: 8, cotacao: "5,7",
      enunciado: "Considere o gráfico da função f (a parábola da figura, com zeros 1 e 3, vértice (2; −1) e f(0) = 3) e a função h(x) = −x + 3.\na) Transcreva para a sua folha o gráfico dado e represente no mesmo sistema de coordenadas o gráfico de h(x) = −x + 3.\nb) Para que valores de x, h(x) > 3?\nc) Resolva graficamente f(x) ≤ h(x).\nd) Escreva a expressão analítica de f(x).",
      passos: [
        "a) A recta h passa por (0; 3) e (3; 0). Desenhada com a parábola f, os dois gráficos cruzam-se em (0; 3) e (3; 0) — ver figura da resolução.",
        "b) −x + 3 > 3 ⇔ −x > 0 ⇔ x < 0.",
        "d) (faz-se antes da c) para confirmar) Com zeros 1 e 3 e vértice (2; −1): f(x) = (x − 2)² − 1 = x² − 4x + 3. Confirma-se f(0) = 3 ✓.",
        "c) f(x) ≤ h(x) ⇔ x² − 4x + 3 ≤ −x + 3 ⇔ x² − 3x ≤ 0 ⇔ x(x − 3) ≤ 0 ⇔ 0 ≤ x ≤ 3 — exactamente o troço entre os dois pontos de intersecção, como a leitura do gráfico indica."
      ],
      resposta: "a) Esboço — ver figura da resolução · b) x < 0 · c) S = [0; 3] · d) f(x) = x² − 4x + 3"
    }
  ]
},
{
  id: "mat-10-2003-2",
  disciplina: "Matemática",
  classe: "10ª Classe",
  ano: 2003,
  chamada: "2ª Época",
  duracao: "120 Minutos",
  totalPerguntas: 8,
  fonteEnunciado: "Transcrição fiel do exame oficial ESG/2003 (2ª Chamada), verificada visualmente contra o PDF original do arquivo. Cotações: a folha imprime pontos (total 200); aqui apresentam-se convertidas em valores (÷ 10, total 20,0).",
  originalPdf: "https://storage.mozexames.com/papers/9ae14a92-2d6a-42c9-a36a-2c92ba3ddcd3/question.pdf",
  perguntas: [
    {
      numero: 1, cotacao: "1,6",
      enunciado: "Classifique de verdadeiras (V) ou falsas (F) as seguintes proposições:\na) Um triângulo equilátero tem um ângulo obtuso.\nb) 2 é um número primo.\nc) Um quadrilátero pode ter quatro ângulos agudos.\nd) Z⁻ ∪ IN = Z",
      passos: [
        "a) Os três ângulos do triângulo equilátero medem 60°, logo são agudos: F.",
        "b) 2 só tem dois divisores (1 e ele próprio): é primo. V.",
        "c) A soma dos ângulos internos de um quadrilátero é 360°; quatro ângulos agudos somariam menos de 4 × 90° = 360°: impossível. F.",
        "d) Reunindo os inteiros negativos com os naturais (IN inclui o 0) obtêm-se todos os inteiros: V."
      ],
      resposta: "a) F · b) V · c) F · d) V"
    },
    {
      numero: 2, cotacao: "1,8",
      enunciado: "Determine:\na) ∛16 + ∛250 − ∛2 + ∛54\nb) log √[1:(0,1)²]",
      passos: [
        "a) ∛16 = ∛(8 · 2) = 2∛2; ∛250 = ∛(125 · 2) = 5∛2; ∛54 = ∛(27 · 2) = 3∛2. Somando os termos semelhantes: (2 + 5 − 1 + 3)∛2 = 9∛2.",
        "b) 1:(0,1)² = 1:0,01 = 100; √100 = 10; log 10 = 1."
      ],
      resposta: "a) 9∛2 · b) 1"
    },
    {
      numero: 3, cotacao: "5,7",
      enunciado: "Na função f(x) = x² + 3x + k:\na) Determine k de modo que o gráfico da função não intersecte o eixo das abcissas.\nb) Para k = −4: i. calcule os zeros da função; ii. determine as coordenadas do vértice.\nc) Esboce os gráficos de f e g(x) = −x − 4, utilizando o mesmo S.C.O.\nd) Resolva g(x) ≥ f(x).",
      passos: [
        "a) Não intersectar o eixo Ox significa não ter zeros reais: Δ < 0 ⇔ 9 − 4k < 0 ⇔ k > 9/4.",
        "b) i. Com k = −4: x² + 3x − 4 = 0. Δ = 9 + 16 = 25; x = (−3 ± 5):2, donde x = 1 ou x = −4. ii. xv = −3:2 = −3/2; yv = f(−3/2) = 9/4 − 9/2 − 4 = −25/4. Vértice V(−3/2; −25/4).",
        "c) A parábola (com k = −4) tem zeros −4 e 1, vértice (−3/2; −25/4) e f(0) = −4; a recta g passa por (0; −4) e (−4; 0). Os gráficos cruzam-se nesses dois pontos — confirmação: x² + 3x − 4 = −x − 4 ⇔ x² + 4x = 0 ⇔ x = 0 ou x = −4 (ver figura da resolução).",
        "d) −x − 4 ≥ x² + 3x − 4 ⇔ 0 ≥ x² + 4x ⇔ x(x + 4) ≤ 0 ⇔ −4 ≤ x ≤ 0."
      ],
      resposta: "a) k > 9/4 · b) i. x = −4 e x = 1; ii. V(−3/2; −25/4) · c) Esboço — ver figura da resolução · d) S = [−4; 0]"
    },
    {
      numero: 4, cotacao: "2,0",
      enunciado: "Dado o triângulo [ABC], rectângulo em B, com BD = 3 cm e BÂC = 30°, onde D é o pé da altura traçada de B sobre a hipotenusa AC, conforme a figura:\na) Determine AB.\nb) Calcule a área do triângulo.",
      passos: [
        "a) No triângulo ABD, rectângulo em D, o cateto BD = 3 cm é oposto ao ângulo BÂD = 30°: sen30° = BD:AB ⇔ AB = 3 : (1/2) = 6 cm.",
        "b) No triângulo ABC: tg30° = BC:AB ⇔ BC = 6 · (√3/3) = 2√3 cm. Como o triângulo é rectângulo em B, a área é (AB · BC):2 = (6 · 2√3):2 = 6√3 cm² ≈ 10,4 cm².",
        "Verificação por outro caminho: AC = AB:cos30° = 6:(√3/2) = 4√3 cm; a altura relativa à hipotenusa é (AB · BC):AC = (6 · 2√3):(4√3) = 3 cm, exactamente o BD dado ✓."
      ],
      resposta: "a) AB = 6 cm · b) 6√3 cm² (≈ 10,4 cm²)"
    },
    {
      numero: 5, cotacao: "1,0",
      enunciado: "Verifique, analiticamente, se as duas rectas que representam as duas equações do sistema são concorrentes: { x − y = −3 ; 2x + y = 4 }",
      passos: [
        "A primeira equação escreve-se y = x + 3: recta de declive 1. A segunda escreve-se y = −2x + 4: recta de declive −2.",
        "Declives diferentes (1 ≠ −2) significam que as rectas não são paralelas nem coincidentes: são concorrentes.",
        "O ponto de encontro obtém-se do sistema: somando as duas equações, 3x = 1 ⇔ x = 1/3; e y = x + 3 = 10/3."
      ],
      resposta: "Sim, são concorrentes — cruzam-se no ponto (1/3; 10/3)"
    },
    {
      numero: 6, cotacao: "2,5",
      enunciado: "Resolva:\na) log₂(x − 2) + log₂x = log₂(9 − 2x)\nb) sen(π − 2x) = √2/2, com x ∈ 2º quadrante",
      passos: [
        "a) Domínio: x − 2 > 0, x > 0 e 9 − 2x > 0, ou seja, 2 < x < 4,5.",
        "Juntando os logaritmos do 1º membro: log₂[x(x − 2)] = log₂(9 − 2x) ⇔ x² − 2x = 9 − 2x ⇔ x² = 9 ⇔ x = 3 ou x = −3. Só x = 3 está no domínio.",
        "b) Nota de leitura: tomado à letra, com x no 2º quadrante o ângulo (π − 2x) cairia no 3º/4º quadrante e o seu seno seria negativo — a equação não teria solução. A leitura coerente, e a pretendida pela folha, é o ângulo (π − 2x) no 2º quadrante.",
        "Com essa leitura: sen(π − 2x) = √2/2 e (π − 2x) no 2º quadrante dão π − 2x = 135°, donde 2x = 45° e x = 22,5° (π/8 rad)."
      ],
      resposta: "a) S = {3} · b) x = 22,5° — com o ângulo (π − 2x) no 2º quadrante (ver nota nos passos)"
    },
    {
      numero: 7, cotacao: "2,0",
      enunciado: "Num trapézio rectangular a diferença dos comprimentos das bases é de 2. Determine a altura do trapézio, sabendo que ela é igual ao comprimento da base menor e que a área do trapézio é de 156 cm².",
      passos: [
        "Seja b a base menor. A altura é h = b e a base maior é B = b + 2.",
        "Área do trapézio: A = [(B + b):2] · h = [(2b + 2):2] · b = (b + 1) · b = 156 ⇔ b² + b − 156 = 0.",
        "Δ = 1 + 624 = 625, com √Δ = 25; b = (−1 + 25):2 = 12 (a outra raiz é negativa). A altura é igual à base menor: 12 cm.",
        "Verificação: bases 12 e 14, altura 12: área = (26:2) · 12 = 156 cm² ✓."
      ],
      resposta: "Altura = 12 cm"
    },
    {
      numero: 8, cotacao: "3,4",
      enunciado: "Uma turma da 10ª classe fez o exame de Matemática e obteve os seguintes resultados, segundo a tabela:\nNotas (valores): 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18\nNº de alunos: 3 | 1 | 2 | 6 | 15 | 13 | 2 | 2 | 1 | 2 | 0 | 1\na) Quantos alunos fizeram exame?\nb) Determine a moda.\nc) Represente os dados num gráfico de barras.",
      passos: [
        "a) Somando as frequências: 3 + 1 + 2 + 6 + 15 + 13 + 2 + 2 + 1 + 2 + 0 + 1 = 48 alunos.",
        "b) A maior frequência é 15 alunos, correspondente à nota 11: a moda é 11 valores.",
        "c) Gráfico de barras com uma barra por nota, de altura igual ao número de alunos — ver figura da resolução (repare que a nota 17 tem frequência 0)."
      ],
      resposta: "a) 48 alunos · b) Moda = 11 valores · c) Gráfico de barras — ver figura da resolução"
    }
  ]
},
{
  id: "mat-10-2002-1",
  disciplina: "Matemática",
  classe: "10ª Classe",
  ano: 2002,
  chamada: "1ª Época",
  duracao: "120 Minutos",
  totalPerguntas: 10,
  fonteEnunciado: "Transcrição fiel do exame oficial ESG/2002 (1ª Chamada), verificada visualmente contra o PDF original do arquivo. Cotações: a folha imprime pontos (total 200); aqui apresentam-se convertidas em valores (÷ 10, total 20,0).",
  originalPdf: "https://storage.mozexames.com/papers/d9400a10-10b2-4f51-a8a1-fbd660c2230c/question.pdf",
  perguntas: [
    {
      numero: 1, cotacao: "2,0",
      enunciado: "Classifique em verdadeiras (V) ou falsas (F) as seguintes afirmações:\na) senÂ = 3\nb) ¹⁴√3 > ¹⁵√3\nc) Todos os quadriláteros de diagonais perpendiculares são losangos.\nd) Todo o ângulo inscrito sobre um diâmetro mede 90°.",
      passos: [
        "a) O seno de qualquer ângulo está entre −1 e 1, nunca pode ser 3: F.",
        "b) ¹⁴√3 = 3^(1/14) e ¹⁵√3 = 3^(1/15). Como a base 3 é maior que 1 e o expoente 1/14 é maior que 1/15, tem-se 3^(1/14) > 3^(1/15): V.",
        "c) Basta um contra-exemplo: um papagaio (bóia) tem diagonais perpendiculares e não é losango: F.",
        "d) É a propriedade do ângulo inscrito numa semicircunferência: V."
      ],
      resposta: "a) F · b) V · c) F · d) V"
    },
    {
      numero: 2, cotacao: "2,4",
      enunciado: "Resolva:\na) −x² + 1 > 0\nb) (1/3)^(2x − 1) < 3",
      passos: [
        "a) −x² + 1 > 0 ⇔ x² < 1 ⇔ −1 < x < 1.",
        "b) Escrevendo 3 = (1/3)⁻¹, e como a base 1/3 é menor que 1 a desigualdade inverte-se: 2x − 1 > −1 ⇔ 2x > 0 ⇔ x > 0."
      ],
      resposta: "a) S = ]−1; 1[ · b) S = ]0; +∞["
    },
    {
      numero: 3, cotacao: "1,0",
      enunciado: "Simplifique: 12ab : (6a² − 9a)",
      passos: [
        "Factorizando o denominador: 6a² − 9a = 3a(2a − 3).",
        "A fracção fica 12ab : [3a(2a − 3)]; simplificando 12a com 3a obtém-se 4b : (2a − 3), válido para a ≠ 0 e a ≠ 3/2."
      ],
      resposta: "4b : (2a − 3)"
    },
    {
      numero: 4, cotacao: "1,0",
      enunciado: "Determine: log₃81 − log₂16 + log₆2 + log₆3",
      passos: [
        "log₃81 = 4 (porque 3⁴ = 81) e log₂16 = 4.",
        "log₆2 + log₆3 = log₆(2 · 3) = log₆6 = 1.",
        "Total: 4 − 4 + 1 = 1."
      ],
      resposta: "1"
    },
    {
      numero: 5, cotacao: "1,3",
      enunciado: "Determine a medida do lado de um quadrado inscrito numa circunferência com 4 cm de diâmetro.",
      passos: [
        "A diagonal do quadrado inscrito coincide com o diâmetro da circunferência: d = 4 cm.",
        "Se l é o lado, d = l√2, donde l = 4:√2 = 2√2 cm.",
        "Verificação por Pitágoras: (2√2)² + (2√2)² = 8 + 8 = 16 = 4² ✓."
      ],
      resposta: "2√2 cm (≈ 2,83 cm)"
    },
    {
      numero: 6, cotacao: "3,9",
      enunciado: "A figura representa o gráfico da função f(x) = log₂x.\na) Sendo g(x) quadrática com f(0) = 1 e vértice V(1; 0), represente-a no mesmo S.C.O.\nb) Para que valores de x, g é crescente?\nc) Resolva: • f(x) = g(x) • g(x) > f(x)",
      passos: [
        "Nota de leitura da alínea a): a folha imprime «f(0) = 1», mas f(x) = log₂x não está definida em 0. A leitura coerente é g(0) = 1 — é a função quadrática que passa por (0; 1).",
        "Com vértice (1; 0), g escreve-se g(x) = a(x − 1)²; de g(0) = 1 vem a · 1 = 1, ou seja a = 1: g(x) = (x − 1)². É a parábola tangente ao eixo Ox em (1; 0), que passa por (0; 1) e (2; 1) — ver figura da resolução.",
        "b) Parábola com concavidade para cima e vértice em x = 1: é crescente para x > 1.",
        "c) Pelo gráfico, f e g cruzam-se em x = 1 (ambas valem 0) e em x = 2 (ambas valem 1): f(x) = g(x) ⇔ x ∈ {1; 2}. Fora do intervalo entre os cruzamentos (e no domínio de f, x > 0) a parábola está acima da curva logarítmica: g(x) > f(x) ⇔ x ∈ ]0; 1[ ∪ ]2; +∞[.",
        "Verificação: em x = 4, f = 2 e g = 9 (g > f ✓); em x = 1,5, f ≈ 0,58 e g = 0,25 (f > g ✓)."
      ],
      resposta: "a) g(x) = (x − 1)² — ver figura da resolução · b) x ∈ ]1; +∞[ · c) f(x) = g(x) ⇔ x ∈ {1; 2}; g(x) > f(x) ⇔ x ∈ ]0; 1[ ∪ ]2; +∞["
    },
    {
      numero: 7, cotacao: "1,2",
      enunciado: "Existirá algum x, tal que senx = 0,3 e cosx = 0,2? Justifique a resposta.",
      passos: [
        "Para qualquer x, vale a relação fundamental da trigonometria: sen²x + cos²x = 1.",
        "Com os valores propostos: 0,3² + 0,2² = 0,09 + 0,04 = 0,13 ≠ 1.",
        "Logo, nenhum ângulo pode ter simultaneamente seno 0,3 e co-seno 0,2."
      ],
      resposta: "Não existe — sen²x + cos²x daria 0,13 ≠ 1"
    },
    {
      numero: 8, cotacao: "3,4",
      enunciado: "Considere a equação −x² + 5x + m − 4 = 0.\na) Determine o valor de m de modo que a equação admita duas raízes iguais.\nb) Para que valores de m o produto das raízes é negativo?\nc) Resolva a equação para m = −2.",
      passos: [
        "a) Raízes iguais ⇔ Δ = 0. Δ = 25 − 4 · (−1) · (m − 4) = 25 + 4(m − 4) = 4m + 9. Δ = 0 ⇔ m = −9/4.",
        "b) O produto das raízes é c:a = (m − 4):(−1) = 4 − m. Negativo ⇔ 4 − m < 0 ⇔ m > 4.",
        "c) Com m = −2: −x² + 5x − 6 = 0 ⇔ x² − 5x + 6 = 0 ⇔ (x − 2)(x − 3) = 0, donde x = 2 ou x = 3."
      ],
      resposta: "a) m = −9/4 · b) m > 4 · c) S = {2; 3}"
    },
    {
      numero: 9, cotacao: "1,3",
      enunciado: "3 kg de maçã e 5 kg de laranja custam 46 000,00 MT. 2 kg de maçã e 3 kg de laranja custam 30 000,00 MT. Quanto custa cada kg de maçã e cada kg de laranja? (Valores em meticais da época, como impressos na folha.)",
      passos: [
        "Sejam a o preço de 1 kg de maçã e l o de 1 kg de laranja. Sistema: { 3a + 5l = 46 000 ; 2a + 3l = 30 000 }.",
        "Multiplicando a 1ª equação por 2 e a 2ª por 3: 6a + 10l = 92 000 e 6a + 9l = 90 000. Subtraindo: l = 2 000.",
        "Da 2ª equação: 2a = 30 000 − 3 · 2 000 = 24 000, donde a = 12 000.",
        "Verificação: 3 · 12 000 + 5 · 2 000 = 36 000 + 10 000 = 46 000 ✓."
      ],
      resposta: "Maçã: 12 000 MT/kg · Laranja: 2 000 MT/kg"
    },
    {
      numero: 10, cotacao: "2,5",
      enunciado: "Numa turma da 10ª classe há 40 alunos, dos quais 25% são raparigas.\na) Quantos rapazes tem a turma?\nb) Represente num diagrama circular o número de rapazes e o número de raparigas da turma.",
      passos: [
        "a) Raparigas: 25% de 40 = 0,25 × 40 = 10. Rapazes: 40 − 10 = 30.",
        "b) Ângulos do diagrama circular: raparigas 25% × 360° = 90°; rapazes 75% × 360° = 270° — ver figura da resolução."
      ],
      resposta: "a) 30 rapazes · b) Diagrama circular: rapazes 270°, raparigas 90° — ver figura da resolução"
    }
  ]
},
{
  id: "mat-10-2002-2",
  disciplina: "Matemática",
  classe: "10ª Classe",
  ano: 2002,
  chamada: "2ª Época",
  duracao: "120 Minutos",
  totalPerguntas: 9,
  fonteEnunciado: "Transcrição fiel do exame oficial ESG/2002 (2ª Chamada), verificada visualmente contra o PDF original do arquivo. Cotações: a folha imprime pontos (total 200); aqui apresentam-se convertidas em valores (÷ 10, total 20,0).",
  originalPdf: "https://storage.mozexames.com/papers/c2ca955d-09d2-47a3-8b4f-df8668d54d37/question.pdf",
  perguntas: [
    {
      numero: 1, cotacao: "2,0",
      enunciado: "Das funções que se seguem indique as que correspondem aos gráficos A, B, C e D da figura:\na) f(x) = −x + 4\nb) f(x) = 2^x\nc) f(x) = senx\nd) f(x) = x² + 4x + 3\ne) f(x) = log₂x\nf) f(x) = x − 4\ng) f(x) = x² − 4x + 3",
      passos: [
        "Gráfico A: parábola com zeros −3 e −1, vértice (−2; −1) e f(0) = 3 — corresponde a x² + 4x + 3, alínea d). (A candidata g) tem zeros 1 e 3, não serve.)",
        "Gráfico B: curva logarítmica que cruza o eixo Ox em (1; 0) — corresponde a log₂x, alínea e).",
        "Gráfico C: exponencial crescente que passa por (0; 1) — corresponde a 2^x, alínea b).",
        "Gráfico D: recta de declive −1 que passa por (0; 4) e (4; 0) — corresponde a −x + 4, alínea a).",
        "Ficam de fora: c) senx, f) x − 4 e g) x² − 4x + 3."
      ],
      resposta: "A → d) x² + 4x + 3 · B → e) log₂x · C → b) 2^x · D → a) −x + 4"
    },
    {
      numero: 2, cotacao: "3,3",
      enunciado: "Determine:\na) [(2/5)⁻³ × 5⁻³]⁴ : 2⁻⁹\nb) [∛(5√5) × (√2)³] : (√125 − √45)\nc) [log₂(1/16) + (10⁻³)⁰] : tg(π:4)",
      passos: [
        "a) (2/5)⁻³ × 5⁻³ = (5/2)³ × 5⁻³ = 2⁻³ (os factores em 5 cancelam-se). Elevado a 4: (2⁻³)⁴ = 2⁻¹². Dividindo por 2⁻⁹: 2^(−12 + 9) = 2⁻³ = 1/8.",
        "b) ∛(5√5) = ∛(5^{3/2}) = 5^{1/2} = √5; (√2)³ = 2√2; numerador = √5 · 2√2 = 2√10. Denominador: √125 − √45 = 5√5 − 3√5 = 2√5. Resultado: 2√10 : 2√5 = √2.",
        "c) log₂(1/16) = −4; (10⁻³)⁰ = 1 (qualquer base não nula elevada a 0); tg(π:4) = 1. Resultado: (−4 + 1) : 1 = −3."
      ],
      resposta: "a) 1/8 · b) √2 · c) −3"
    },
    {
      numero: 3, cotacao: "1,0",
      enunciado: "Determine k ∈ IR de modo que a função f(x) = (k + 2)x + 2 seja crescente.",
      passos: [
        "Uma função linear f(x) = mx + b é crescente quando o declive é positivo e decrescente quando é negativo.",
        "Aqui o declive é (k + 2): a condição é k + 2 > 0 ⇔ k > −2."
      ],
      resposta: "k > −2, ou seja, k ∈ ]−2; +∞["
    },
    {
      numero: 4, cotacao: "1,0",
      enunciado: "Mostre que: senx × [1 : cos²x] = tgx : cosx",
      passos: [
        "O 1º membro escreve-se senx : cos²x = (senx : cosx) · (1 : cosx).",
        "Como senx : cosx = tgx, o 1º membro fica tgx : cosx — exactamente o 2º membro, como se queria mostrar (para cosx ≠ 0)."
      ],
      resposta: "Demonstração feita nos passos: senx:cos²x = tgx · (1:cosx)"
    },
    {
      numero: 5, cotacao: "3,4",
      enunciado: "Resolva:\na) 5^(3x² − 5x) = 25\nb) 2 · log₅x = log₅9\nc) senx = cos(π:6), se x ∈ [0; π:2]",
      passos: [
        "a) 25 = 5², logo 3x² − 5x = 2 ⇔ 3x² − 5x − 2 = 0. Δ = 25 + 24 = 49; x = (5 ± 7):6, donde x = 2 ou x = −1/3.",
        "b) log₅(x²) = log₅9 ⇔ x² = 9 ⇔ x = ±3. O domínio do logaritmo (x > 0) só aceita x = 3.",
        "c) cos(π:6) = √3/2. senx = √3/2 no intervalo [0; π:2] dá x = π:3 (60°), o único ângulo do intervalo com esse seno."
      ],
      resposta: "a) S = {−1/3; 2} · b) S = {3} · c) x = π/3"
    },
    {
      numero: 6, cotacao: "4,6",
      enunciado: "Considere a função f definida pelo gráfico da figura (parábola de concavidade para baixo, com vértice (−2; −1) e f(0) = −4).\na) Indique os zeros da função.\nb) Resolva f(x) > 0.\nc) Para que valores de x a função f é decrescente?\nd) Complete na sua folha de exame, com os símbolos >, < ou =, de modo a obter afirmações verdadeiras: • f(−4) .......... f(0) • f(−5) .......... f(−2) • f(−3) .......... f(1)\ne) Indique o contradomínio de f.\nf) Determine a expressão analítica da função f.",
      passos: [
        "f) (convém fazê-la primeiro) Com vértice (−2; −1): f(x) = a(x + 2)² − 1. Do gráfico lê-se f(0) = −4 (a parábola cruza o eixo Oy em −4, confirmado por medição da figura a 300 dpi): 4a − 1 = −4 ⇔ a = −3/4. Logo f(x) = −(3/4)(x + 2)² − 1 = −(3/4)x² − 3x − 4.",
        "a) O gráfico nunca cruza o eixo Ox — o valor máximo da função é −1 < 0: f não tem zeros reais.",
        "b) Pela mesma razão f(x) > 0 nunca acontece: S = ∅.",
        "c) A parábola sobe até ao vértice (x = −2) e desce a partir daí: é decrescente para x > −2.",
        "d) f(−4) = −(3/4)(−2)² − 1 = −4 e f(0) = −4, logo f(−4) = f(0). f(−5) = −(3/4)(9) − 1 = −31/4 e f(−2) = −1 (o máximo), logo f(−5) < f(−2). f(−3) = −(3/4)(1) − 1 = −7/4 e f(1) = −(3/4)(9) − 1 = −31/4, logo f(−3) > f(1).",
        "e) O maior valor atingido é −1 (no vértice): CD(f) = ]−∞; −1]."
      ],
      resposta: "a) Não tem zeros reais · b) S = ∅ · c) x ∈ ]−2; +∞[ · d) f(−4) = f(0); f(−5) < f(−2); f(−3) > f(1) · e) CD(f) = ]−∞; −1] · f) f(x) = −(3/4)(x + 2)² − 1"
    },
    {
      numero: 7, cotacao: "1,5",
      enunciado: "As notas da Helena em cinco testes de Matemática foram as seguintes: 15, 16, 13, 12, 14.\na) Indique a moda das notas obtidas.\nb) Qual deve ser a nota do 6º teste para que a média suba 1 valor?",
      passos: [
        "a) As cinco notas são todas diferentes — cada uma aparece uma única vez: não há moda (a distribuição é amodal).",
        "b) Média actual: (15 + 16 + 13 + 12 + 14):5 = 70:5 = 14. Para a média de 6 testes ser 15: (70 + n):6 = 15 ⇔ n = 90 − 70 = 20."
      ],
      resposta: "a) Não há moda — todas as notas aparecem uma só vez · b) 20 valores"
    },
    {
      numero: 8, cotacao: "1,0",
      enunciado: "Determine todos os números inteiros que satisfazem o seguinte sistema de inequações: { x − 1 ≥ 0 ; 2x < 7 }",
      passos: [
        "Da primeira inequação: x ≥ 1. Da segunda: x < 7:2 = 3,5.",
        "Intersecção: 1 ≤ x < 3,5. Os números inteiros neste intervalo são 1, 2 e 3."
      ],
      resposta: "{1; 2; 3}"
    },
    {
      numero: 9, cotacao: "2,2",
      enunciado: "A figura representa um cubo (um dado) com a base assente no plano α: a face de cima tem três pontos, a face da direita tem dois pontos e a face da frente tem um ponto.\na) Qual é a posição relativa do plano que contém a face com três pontos em relação ao plano α?\nb) Qual é a posição relativa do plano que contém a face com três pontos em relação ao plano que contém a face com dois pontos?\nc) Calcule a medida da aresta do cubo se a sua diagonal medir √12 cm.",
      passos: [
        "a) A face com três pontos é a face de cima do dado; o seu plano é paralelo ao plano da base, e a base assenta no plano α: os dois planos são paralelos.",
        "b) A face com dois pontos é uma face lateral (vertical); o plano da face de cima e o plano de uma face lateral encontram-se formando ângulos de 90°: são planos perpendiculares.",
        "c) A diagonal do cubo de aresta a é d = a√3. Com d = √12: a = √12 : √3 = √4 = 2 cm."
      ],
      resposta: "a) Paralelos · b) Perpendiculares · c) 2 cm"
    }
  ]
},
{
  id: "mat-10-2001-1",
  disciplina: "Matemática",
  classe: "10ª Classe",
  ano: 2001,
  chamada: "1ª Época",
  duracao: "120 Minutos",
  totalPerguntas: 9,
  fonteEnunciado: "Transcrição fiel do exame oficial ESG/2001 (1ª Chamada), verificada visualmente contra o PDF original do arquivo. Cotações: a folha imprime pontos (total 200); aqui apresentam-se convertidas em valores (÷ 10, total 20,0).",
  originalPdf: "https://storage.mozexames.com/papers/d7e8d9d9-2c82-4730-af5e-9233b9024d3c/question.pdf",
  perguntas: [
    {
      numero: 1, cotacao: "2,4",
      enunciado: "Classifique em verdadeiras (V) ou falsas (F) as seguintes afirmações:\na) −5 ∈ IR\nb) √2 + √2 = √4\nc) |−1/4| = 0,25\nd) −2 ∈ ]−2; +∞[\ne) A diagonal de um quadrado é mediatriz da outra diagonal.\nf) 75% = 3/4",
      passos: [
        "a) −5 é um número real: V.",
        "b) √2 + √2 = 2√2 ≈ 2,83, enquanto √4 = 2: F.",
        "c) |−1/4| = 1/4 = 0,25: V.",
        "d) O intervalo ]−2; +∞[ é aberto em −2, por isso −2 não lhe pertence: F.",
        "e) No quadrado, cada diagonal bissecta perpendicularmente a outra — é a sua mediatriz: V.",
        "f) 75% = 75/100 = 3/4: V."
      ],
      resposta: "a) V · b) F · c) V · d) F · e) V · f) V"
    },
    {
      numero: 2, cotacao: "3,2",
      enunciado: "Determine:\na) log₂16 − √(√16)\nb) cos(π:3) + (1/2)⁻²\nc) [2⁻¹ : (1/2) − (−1)⁰] : (3√3)",
      passos: [
        "a) log₂16 = 4. √(√16) = √4 = 2. Resultado: 4 − 2 = 2.",
        "b) cos(π:3) = 1/2; (1/2)⁻² = 2² = 4. Resultado: 1/2 + 4 = 9/2.",
        "c) 2⁻¹ = 1/2; (1/2):(1/2) = 1; (−1)⁰ = 1. O numerador fica 1 − 1 = 0, logo toda a fracção vale 0 (o denominador é diferente de 0)."
      ],
      resposta: "a) 2 · b) 9/2 · c) 0"
    },
    {
      numero: 3, cotacao: "3,0",
      enunciado: "Resolva:\na) 16^x = √(4³)\nb) log_x(1/8) = −1\nc) −x² + 5x + 6 = 0",
      passos: [
        "a) √(4³) = 4^{3/2} = (2²)^{3/2} = 2³; e 16^x = 2^{4x}. Igualando os expoentes: 4x = 3 ⇔ x = 3/4.",
        "b) Pela definição de logaritmo: x⁻¹ = 1/8 ⇔ 1:x = 1/8 ⇔ x = 8 (base válida: positiva e diferente de 1 ✓).",
        "c) Multiplicando por −1: x² − 5x − 6 = 0 ⇔ (x − 6)(x + 1) = 0, donde x = 6 ou x = −1. Verificação: Δ = 25 + 24 = 49; x = (5 ± 7):2 ✓."
      ],
      resposta: "a) S = {3/4} · b) S = {8} · c) S = {−1; 6}"
    },
    {
      numero: 4, cotacao: "1,0",
      enunciado: "Determine m ∈ IR de modo que a parábola da função y = (4m − 2)x² + 9x + 20 tenha a concavidade virada para baixo.",
      passos: [
        "A concavidade da parábola depende do sinal do coeficiente de x²: é virada para baixo quando esse coeficiente é negativo.",
        "Aqui o coeficiente é (4m − 2): 4m − 2 < 0 ⇔ 4m < 2 ⇔ m < 1/2."
      ],
      resposta: "m < 1/2, ou seja, m ∈ ]−∞; 1/2["
    },
    {
      numero: 5, cotacao: "1,0",
      enunciado: "Simplifique: (x² − 6x + 9) : (x² − 9)",
      passos: [
        "O numerador é um quadrado perfeito: x² − 6x + 9 = (x − 3)². O denominador é uma diferença de quadrados: x² − 9 = (x − 3)(x + 3).",
        "Simplificando o factor comum (x − 3): fica (x − 3):(x + 3), válido para x ≠ 3 e x ≠ −3."
      ],
      resposta: "(x − 3) : (x + 3)"
    },
    {
      numero: 6, cotacao: "3,0",
      enunciado: "A figura representa uma função quadrática f (parábola com zeros −3 e −1, vértice (−2; −1) e f(0) = 3). Considere a função g(x) = x + 3.\na) Represente, no mesmo S.C.O, o gráfico de g(x) = x + 3.\nb) Para que valores de x, g(x) < 0?\nc) Resolva: f(x) = g(x)\nd) Diga qual é o contradomínio de f.\ne) Determine a expressão analítica de f.",
      passos: [
        "e) (convém fazê-la primeiro) Com vértice (−2; −1): f(x) = (x + 2)² − 1 = x² + 4x + 3. Confirma-se: zeros (x + 2)² = 1 ⇔ x = −1 ou x = −3 ✓ e f(0) = 3 ✓.",
        "a) A recta g passa por (0; 3) e (−3; 0) — precisamente os pontos onde cruza a parábola (ver figura da resolução).",
        "b) x + 3 < 0 ⇔ x < −3.",
        "c) Do gráfico, f e g encontram-se em (−3; 0) e (0; 3): f(x) = g(x) ⇔ x ∈ {−3; 0}. Confirmação analítica: x² + 4x + 3 = x + 3 ⇔ x² + 3x = 0 ⇔ x(x + 3) = 0 ✓.",
        "d) A parábola abre para cima e o seu mínimo é −1: CD(f) = [−1; +∞[."
      ],
      resposta: "a) Esboço — ver figura da resolução · b) x < −3 · c) x ∈ {−3; 0} · d) CD(f) = [−1; +∞[ · e) f(x) = x² + 4x + 3"
    },
    {
      numero: 7, cotacao: "2,2",
      enunciado: "a) Simplifique a fracção: (sen²x − cos²x) : (senx − cosx)\nb) Se senx = 1/2, com x ∈ 1º quadrante, determine cosx.",
      passos: [
        "a) O numerador é uma diferença de quadrados: sen²x − cos²x = (senx − cosx)(senx + cosx). Simplificando o factor (senx − cosx) (para senx ≠ cosx), fica senx + cosx.",
        "b) Da relação fundamental: cos²x = 1 − sen²x = 1 − 1/4 = 3/4, donde cosx = ±√3/2. No 1º quadrante o co-seno é positivo: cosx = √3/2."
      ],
      resposta: "a) senx + cosx · b) cosx = √3/2"
    },
    {
      numero: 8, cotacao: "2,7",
      enunciado: "Um grupo de alunos da 10ª classe de uma escola na Zambézia abriu uma lanchonete a fim de angariar fundos para a festa do fim do ano lectivo. Um dos produtos mais procurados eram bolinhos de coco. Cada bolinho custava 3 mil meticais. Observe o pictograma que representa as quantidades dos bolinhos vendidos (cada figura representa 50 bolinhos): 4ª-feira: 3 figuras; 5ª-feira: 2 figuras; 6ª-feira: 4 figuras.\na) Qual foi o dia em que se vendeu mais?\nb) Qual foi o total das vendas na 5ª-feira?\nc) Quanto é que se ganhou com a venda dos bolinhos durante os 3 dias?",
      passos: [
        "Leitura do pictograma (cada figura = 50 bolinhos): 4ª-feira: 3 × 50 = 150 bolinhos; 5ª-feira: 2 × 50 = 100 bolinhos; 6ª-feira: 4 × 50 = 200 bolinhos — ver figura do enunciado.",
        "a) O dia com mais figuras (4) é a 6ª-feira, com 200 bolinhos vendidos.",
        "b) Na 5ª-feira: 100 bolinhos × 3 mil meticais = 300 mil meticais = 300 000 MT.",
        "c) Nos 3 dias: 150 + 100 + 200 = 450 bolinhos; ganho total: 450 × 3 mil meticais = 1 350 mil meticais = 1 350 000 MT. (Valores como impressos na folha, em meticais da época.)"
      ],
      resposta: "a) 6ª-feira (200 bolinhos) · b) 300 000 MT · c) 1 350 000 MT"
    },
    {
      numero: 9, cotacao: "1,5",
      enunciado: "Determine o volume de um cubo cuja área total é de 294 cm².",
      passos: [
        "A área total do cubo é a soma das áreas das 6 faces: 6a² = 294 ⇔ a² = 49 ⇔ a = 7 cm.",
        "Volume: V = a³ = 7³ = 343 cm³."
      ],
      resposta: "343 cm³"
    }
  ]
},
{
  id: "mat-10-2001-2",
  disciplina: "Matemática",
  classe: "10ª Classe",
  ano: 2001,
  chamada: "2ª Época",
  duracao: "120 Minutos",
  totalPerguntas: 9,
  fonteEnunciado: "Transcrição fiel do exame oficial ESG/2001 (2ª Chamada), verificada visualmente contra o PDF original do arquivo. Cotações: a folha imprime pontos (total 200); aqui apresentam-se convertidas em valores (÷ 10, total 20,0). Nota: na pergunta 4 segue-se o modelo de área da própria folha (base × altura / 2), como no precedente do Lote 5.",
  originalPdf: "https://storage.mozexames.com/papers/df0364f0-4da5-46be-99e5-da833083d86d/question.pdf",
  perguntas: [
    {
      numero: 1, cotacao: "2,5",
      enunciado: "Preencha os espaços em branco que se seguem com um dos símbolos >, < ou =:\na) −5 .......... −1\nb) |−2/3| .......... 2/5\nc) log_{1/2}8 .......... sen(π:4)\nd) ∛(3³ · 2²) .......... 3∛(2²)\ne) 0 .......... (−1/5)",
      passos: [
        "a) Na recta real, −5 está à esquerda de −1: −5 < −1.",
        "b) |−2/3| = 2/3 ≈ 0,67 e 2/5 = 0,4: usa-se >.",
        "c) log_{1/2}8 = −3 (porque (1/2)⁻³ = 8) e sen(π:4) = √2/2 ≈ 0,71: usa-se <.",
        "d) ∛(3³ · 2²) = ∛27 · ∛4 = 3∛4; e 3∛(2²) = 3∛4: os dois membros são iguais, usa-se =.",
        "e) 0 é maior que qualquer número negativo: usa-se >."
      ],
      resposta: "a) < · b) > · c) < · d) = · e) >"
    },
    {
      numero: 2, cotacao: "4,2",
      enunciado: "Resolva:\na) O sistema { x + y = 12 ; x + 2y = 7 }\nb) logx + log100 = 2\nc) (2/3)^x = (3/2)⁴",
      passos: [
        "a) Subtraindo a 1ª equação da 2ª: (x + 2y) − (x + y) = 7 − 12 ⇔ y = −5. Da 1ª: x = 12 − (−5) = 17. Verificação: 17 + 2 · (−5) = 7 ✓.",
        "b) log100 = 2, logo logx + 2 = 2 ⇔ logx = 0 ⇔ x = 1 (que está no domínio, x > 0 ✓).",
        "c) (3/2)⁴ = (2/3)⁻⁴, logo x = −4 (expoentes iguais, mesma base)."
      ],
      resposta: "a) S = {(17; −5)} · b) S = {1} · c) S = {−4}"
    },
    {
      numero: 3, cotacao: "1,5",
      enunciado: "Determine m ∈ IR de modo que a equação 2x² − 2x + m = 0 admita duas raízes reais e distintas.",
      passos: [
        "Duas raízes reais e distintas ⇔ Δ > 0. Δ = (−2)² − 4 · 2 · m = 4 − 8m.",
        "4 − 8m > 0 ⇔ −8m > −4 ⇔ m < 1/2."
      ],
      resposta: "m < 1/2"
    },
    {
      numero: 4, cotacao: "1,5",
      enunciado: "A figura representa um triângulo equilátero cuja área é 55 cm². Calcule a medida do seu lado, sabendo que esta (a medida do lado) excede a da altura em 1 cm.",
      passos: [
        "Seja h a altura; o lado é l = h + 1. Pelo modelo da própria folha (área = base × altura : 2, como no exame de 2011/2ª): (l · h):2 = 55 ⇔ (h + 1) · h = 110 ⇔ h² + h − 110 = 0.",
        "Δ = 1 + 440 = 441 = 21²; h = (−1 + 21):2 = 10 cm (a outra raiz é negativa).",
        "Lado: l = h + 1 = 11 cm. Verificação: (11 × 10):2 = 55 cm² ✓ e 11 − 10 = 1 cm ✓."
      ],
      resposta: "11 cm"
    },
    {
      numero: 5, cotacao: "2,5",
      enunciado: "Determine:\na) [(−2/7)³]² × (−2/7) × (−3,5)⁷\nb) [log0,001 : ∛27] + tg(π:4)",
      passos: [
        "a) [(−2/7)³]² = (−2/7)⁶; multiplicando por (−2/7) fica (−2/7)⁷. Como −3,5 = −7/2, o produto total é (−2/7)⁷ × (−7/2)⁷ = [(−2/7) × (−7/2)]⁷ = 1⁷ = 1.",
        "b) log0,001 = −3 (porque 10⁻³ = 0,001); ∛27 = 3; tg(π:4) = 1. Expressão: (−3):3 + 1 = −1 + 1 = 0."
      ],
      resposta: "a) 1 · b) 0"
    },
    {
      numero: 6, cotacao: "1,1",
      enunciado: "A que altura se encontra um balão, sabendo que uma corda de 150 metros é esticada até ao solo, fazendo com a horizontal um ângulo de 30°?",
      passos: [
        "A corda é a hipotenusa de um triângulo rectângulo e a altura do balão é o cateto oposto ao ângulo de 30°.",
        "sen30° = altura : 150 ⇔ altura = 150 × 1/2 = 75 metros."
      ],
      resposta: "75 metros"
    },
    {
      numero: 7, cotacao: "3,0",
      enunciado: "Considere as funções f(x) = log_{1/3}x e g(x) = x − 1.\na) Represente f e g no mesmo S.C.O.\nb) Resolva: f(x) = g(x)\nc) Resolva graficamente: g(x) < f(x)\nd) Indique o domínio e o contradomínio da função f.",
      passos: [
        "a) f é uma logarítmica de base menor que 1, logo decrescente: passa por (1; 0), (3; −1) e (1/3; 1). g é a recta que passa por (0; −1) e (1; 0) — ver figura da resolução.",
        "b) Do gráfico, os dois gráficos cruzam-se em um único ponto, (1; 0): f(x) = g(x) ⇔ x = 1.",
        "c) A recta está abaixo da curva logarítmica entre 0 e 1: g(x) < f(x) ⇔ x ∈ ]0; 1[. (Para x > 1 a recta sobe e a logarítmica desce, logo g > f.)",
        "d) D(f) = ]0; +∞[ (o logaritmo só está definido para x > 0) e CD(f) = IR."
      ],
      resposta: "a) Esboço — ver figura da resolução · b) S = {1} · c) x ∈ ]0; 1[ · d) D(f) = ]0; +∞[ e CD(f) = IR"
    },
    {
      numero: 8, cotacao: "1,1",
      enunciado: "O peso total das melancias colhidas numa certa machamba é 42 kg, sabendo que cada melancia tem um peso médio de 3,5 kg. Quantas melancias foram colhidas?",
      passos: [
        "Número de melancias = peso total : peso médio = 42 : 3,5 = 12.",
        "Verificação: 12 × 3,5 = 42 kg ✓."
      ],
      resposta: "12 melancias"
    },
    {
      numero: 9, cotacao: "2,6",
      enunciado: "Decompôs-se um paralelepípedo rectângulo com as dimensões 2 dm × 2 dm × 3 dm em dois prismas triangulares iguais.\na) Calcule o volume do paralelepípedo.\nb) Calcule o volume de cada um dos prismas triangulares.",
      passos: [
        "a) Volume do paralelepípedo: V = 2 × 2 × 3 = 12 dm³.",
        "b) Cortado em dois prismas iguais, cada um tem metade do volume: 12 : 2 = 6 dm³."
      ],
      resposta: "a) 12 dm³ · b) 6 dm³"
    }
  ]
},
{
  id: "mat-10-2000-1",
  disciplina: "Matemática",
  classe: "10ª Classe",
  ano: 2000,
  chamada: "1ª Época",
  duracao: "120 Minutos",
  totalPerguntas: 9,
  fonteEnunciado: "Transcrição fiel do exame oficial ESG/2000 (1ª Chamada), verificada visualmente contra o PDF original do arquivo. Cotações: a folha imprime pontos (total 200); aqui apresentam-se convertidas em valores (÷ 10, total 20,0).",
  originalPdf: "https://storage.mozexames.com/papers/bcaca8b6-4121-49c8-9e67-bcf598d57643/question.pdf",
  perguntas: [
    {
      numero: 1, cotacao: "2,4",
      enunciado: "Das funções que se seguem indique as que correspondem aos gráficos A, B, C e D da figura:\na) f(x) = x + 2\nb) f(x) = x² + 2x\nc) f(x) = log₂x\nd) f(x) = x² + 3x + 1\ne) f(x) = (1/2)^x\nf) f(x) = −x + 2",
      passos: [
        "Gráfico A: parábola com zeros −2 e 0, vértice (−1; −1) e concavidade para cima — corresponde a x² + 2x, alínea b). (A candidata d) tem zeros irracionais e outro vértice.)",
        "Gráfico B: exponencial decrescente que passa por (0; 1) e se aproxima do eixo Ox — corresponde a (1/2)^x, alínea e).",
        "Gráfico C: recta crescente que passa por (−2; 0) e (0; 2) — corresponde a x + 2, alínea a).",
        "Gráfico D: curva logarítmica que cruza o eixo Ox em (1; 0) e vale 1 em x = 2 (linhas tracejadas) — corresponde a log₂x, alínea c).",
        "Ficam de fora: d) x² + 3x + 1 e f) −x + 2."
      ],
      resposta: "A → b) x² + 2x · B → e) (1/2)^x · C → a) x + 2 · D → c) log₂x"
    },
    {
      numero: 2, cotacao: "2,2",
      enunciado: "Determine:\na) [(2/5)⁰ − [(−1)³]⁵] : 2⁻¹\nb) log0,00001 + sen(5π:6) rad",
      passos: [
        "a) (2/5)⁰ = 1; (−1)³ = −1 e (−1)⁵ = −1; 2⁻¹ = 1/2. Expressão: [1 − (−1)] : (1/2) = 2 : (1/2) = 4.",
        "b) log0,00001 = −5 (porque 10⁻⁵ = 0,00001); sen(5π:6) = sen(150°) = 1/2. Soma: −5 + 1/2 = −9/2."
      ],
      resposta: "a) 4 · b) −9/2"
    },
    {
      numero: 3, cotacao: "3,6",
      enunciado: "Resolva:\na) 3^{(1:x) − 1} = 9\nb) x:6 = 6:(15 − x)\nc) log₂[4x : (x + 1)] = 1",
      passos: [
        "a) 9 = 3², logo (1:x) − 1 = 2 ⇔ 1:x = 3 ⇔ x = 1/3 (que respeita o domínio, x ≠ 0 ✓).",
        "b) Multiplicando em cruz (x ≠ 15): x(15 − x) = 36 ⇔ x² − 15x + 36 = 0. Δ = 225 − 144 = 81; x = (15 ± 9):2, donde x = 3 ou x = 12. Verificação: 3:6 = 6:12 = 1/2 ✓ e 12:6 = 6:3 = 2 ✓.",
        "c) Pela definição de logaritmo: 4x:(x + 1) = 2¹ = 2 ⇔ 4x = 2(x + 1) ⇔ 2x = 2 ⇔ x = 1. O argumento fica 4:2 = 2 > 0 ✓."
      ],
      resposta: "a) S = {1/3} · b) S = {3; 12} · c) S = {1}"
    },
    {
      numero: 4, cotacao: "1,3",
      enunciado: "Numa certa empresa agrícola trava-se uma batalha pela construção de um Moçambique Novo. Dos trabalhadores, sabe-se que 60% são homens e que há mais 90 homens do que mulheres. Quantos trabalhadores têm a empresa?",
      passos: [
        "Seja T o total de trabalhadores. Homens: 0,60T; mulheres: 0,40T (os restantes 40%).",
        "A diferença entre homens e mulheres é 90: 0,60T − 0,40T = 90 ⇔ 0,20T = 90 ⇔ T = 450.",
        "Verificação: homens = 270 e mulheres = 180; 270 − 180 = 90 ✓ e 270:450 = 60% ✓."
      ],
      resposta: "450 trabalhadores"
    },
    {
      numero: 5, cotacao: "1,2",
      enunciado: "Determine o maior número inteiro que satisfaz o sistema: { (2 − x):3 > 2 ; (2x + 4):3 − 1 ≤ 0 }",
      passos: [
        "Primeira inequação: (2 − x):3 > 2 ⇔ 2 − x > 6 ⇔ x < −4.",
        "Segunda: (2x + 4):3 ≤ 1 ⇔ 2x + 4 ≤ 3 ⇔ 2x ≤ −1 ⇔ x ≤ −1/2.",
        "Intersecção: x < −4 (a condição mais forte). O maior inteiro estritamente menor que −4 é −5."
      ],
      resposta: "−5"
    },
    {
      numero: 6, cotacao: "1,0",
      enunciado: "Existirá um triângulo [ABC] tal que AC = AB e B̂ ≠ Ĉ?",
      passos: [
        "Num triângulo, a lados iguais opõem-se ângulos iguais: o lado AC opõe-se ao ângulo B e o lado AB opõe-se ao ângulo C.",
        "Se AC = AB, o triângulo é isósceles de base BC e os ângulos da base são necessariamente iguais: B̂ = Ĉ.",
        "Logo, não existe nenhum triângulo com AC = AB e B̂ ≠ Ĉ."
      ],
      resposta: "Não existe — AC = AB implica B̂ = Ĉ"
    },
    {
      numero: 7, cotacao: "1,2",
      enunciado: "Prove que: (1 + tgx) · cosx = senx + cosx",
      passos: [
        "Desenvolvendo o 1º membro: (1 + tgx) · cosx = cosx + tgx · cosx.",
        "Como tgx = senx : cosx, tem-se tgx · cosx = senx.",
        "Logo o 1º membro fica cosx + senx = senx + cosx, o 2º membro, como se queria provar (para cosx ≠ 0)."
      ],
      resposta: "Demonstração feita nos passos: (1 + tgx)·cosx = cosx + senx"
    },
    {
      numero: 8, cotacao: "5,1",
      enunciado: "Considere as funções f(x) = x² − 2x + 1 e g(x) = log₂x.\na) Indique o domínio de g.\nb) Represente f e g no mesmo sistema cartesiano ortogonal.\nc) Indique o crescimento da função f.\nd) A partir do gráfico resolva: g(x) < f(x)\ne) Determine o zero da função g.",
      passos: [
        "a) O logaritmo só está definido para argumentos positivos: D(g) = ]0; +∞[.",
        "b) f(x) = (x − 1)²: parábola tangente ao eixo Ox no vértice (1; 0), com f(0) = 1. g(x) = log₂x passa por (1; 0), (2; 1) e (4; 2) — ver figura da resolução.",
        "c) A parábola tem o vértice em x = 1 e abre para cima: f é crescente para x > 1 (e decrescente para x < 1).",
        "d) Do gráfico, f e g cruzam-se em (1; 0) e (2; 1). Entre 1 e 2 a curva logarítmica está acima da parábola; fora desse intervalo está abaixo: g(x) < f(x) ⇔ x ∈ ]0; 1[ ∪ ]2; +∞[. Verificação: em x = 4, g = 2 < f = 9 ✓; em x = 1,5, g ≈ 0,58 > f = 0,25 ✓.",
        "e) log₂x = 0 ⇔ x = 2⁰ = 1."
      ],
      resposta: "a) D(g) = ]0; +∞[ · b) Esboço — ver figura da resolução · c) f é crescente para x > 1 · d) x ∈ ]0; 1[ ∪ ]2; +∞[ · e) x = 1"
    },
    {
      numero: 9, cotacao: "2,0",
      enunciado: "Uma vendedeira do mercado vende diariamente 5 tipos de marisco em kg, designados da seguinte maneira: A – Peixe-serra; B – Carapau; C – Sardinha; D – Amêijoa; E – Camarão. As quantidades estão indicadas no gráfico de barras da figura.\na) Qual é o marisco que mais se vende diariamente? Indique a quantidade.\nb) A partir do gráfico construa uma tabela de frequências absolutas e frequências relativas percentuais.",
      passos: [
        "Leitura do gráfico, com a ajuda das linhas tracejadas da grelha: A = 15 kg; B = 30 kg; C = 10 kg; D = 20 kg; E = 25 kg. Total: 15 + 30 + 10 + 20 + 25 = 100 kg — ver figura do enunciado.",
        "a) A barra mais alta é a de B: o marisco mais vendido é o Carapau, 30 kg por dia.",
        "b) Frequência relativa percentual = frequência absoluta : total × 100: A: 15:100 = 15%; B: 30%; C: 10%; D: 20%; E: 25%. (Como o total é 100 kg, as percentagens coincidem numericamente com as quantidades.)"
      ],
      resposta: "a) B — Carapau, 30 kg · b) A: 15 kg — 15%; B: 30 kg — 30%; C: 10 kg — 10%; D: 20 kg — 20%; E: 25 kg — 25% (total 100 kg — 100%)"
    }
  ]
},
{
  id: "mat-10-2000-2",
  disciplina: "Matemática",
  classe: "10ª Classe",
  ano: 2000,
  chamada: "2ª Época",
  duracao: "120 Minutos",
  totalPerguntas: 9,
  fonteEnunciado: "Transcrição fiel do exame oficial ESG/2000 (2ª Chamada), verificada visualmente contra o PDF original do arquivo. Cotações: a folha imprime pontos (total 200); aqui apresentam-se convertidas em valores (÷ 10, total 20,0). Nota: a pergunta 7, tal como impressa, é impossível — a resolução demonstra-o (lapso da folha).",
  originalPdf: "https://storage.mozexames.com/papers/4664e657-c1a0-4814-aabe-b6e9511fce63/question.pdf",
  perguntas: [
    {
      numero: 1, cotacao: "3,0",
      enunciado: "Utilize os símbolos ⊂ ou ⊃ de modo a obter afirmações verdadeiras.\na) Z .......... Q\nb) IR .......... IR⁻\nc) Q⁻ .......... Z⁻\nd) Q⁺ .......... IR⁺\ne) IR⁺ .......... IR\nf) Z₀⁻ .......... Q",
      passos: [
        "a) Todo o inteiro é racional: Z ⊂ Q.",
        "b) IR contém os seus negativos: IR ⊃ IR⁻.",
        "c) Os racionais negativos contêm os inteiros negativos: Q⁻ ⊃ Z⁻.",
        "d) Todo o racional positivo é real positivo: Q⁺ ⊂ IR⁺.",
        "e) Os reais positivos fazem parte dos reais: IR⁺ ⊂ IR.",
        "f) Os inteiros não positivos são racionais: Z₀⁻ ⊂ Q."
      ],
      resposta: "a) ⊂ · b) ⊃ · c) ⊃ · d) ⊂ · e) ⊂ · f) ⊂"
    },
    {
      numero: 2, cotacao: "2,2",
      enunciado: "Determine:\na) √12 + √75\nb) [log₃81 : 2] − cosπ",
      passos: [
        "a) √12 = √(4 · 3) = 2√3 e √75 = √(25 · 3) = 5√3. Soma: 2√3 + 5√3 = 7√3.",
        "b) log₃81 = 4 (porque 3⁴ = 81); cosπ = −1. Expressão: 4:2 − (−1) = 2 + 1 = 3."
      ],
      resposta: "a) 7√3 · b) 3"
    },
    {
      numero: 3, cotacao: "1,3",
      enunciado: "Determine log√35, se log5 = 0,699 e log7 = 0,845.",
      passos: [
        "log√35 = (1/2) · log35 = (1/2) · log(5 · 7) = (1/2)(log5 + log7).",
        "Substituindo os valores dados: (1/2)(0,699 + 0,845) = (1/2)(1,544) = 0,772."
      ],
      resposta: "log√35 ≈ 0,772"
    },
    {
      numero: 4, cotacao: "2,6",
      enunciado: "Resolva:\na) O sistema { 5x − 2y = 5 ; x + 3y = 18 }\nb) (1/3)^x ≤ 3^(x − 2)",
      passos: [
        "a) Da 2ª equação: x = 18 − 3y. Substituindo na 1ª: 5(18 − 3y) − 2y = 5 ⇔ 90 − 17y = 5 ⇔ 17y = 85 ⇔ y = 5. Então x = 18 − 15 = 3. Verificação: 5 · 3 − 2 · 5 = 5 ✓ e 3 + 3 · 5 = 18 ✓.",
        "b) Escrevendo (1/3)^x = 3^(−x) e comparando os expoentes (base 3 > 1, sem inversão): −x ≤ x − 2 ⇔ 2 ≤ 2x ⇔ x ≥ 1."
      ],
      resposta: "a) S = {(3; 5)} · b) S = [1; +∞["
    },
    {
      numero: 5, cotacao: "1,5",
      enunciado: "Marque num S.C.O. os seguintes pontos A(3; 1), B(5; 2) e C(4; −2) e una os pontos A, B e C. Diga o nome da figura encontrada.",
      passos: [
        "Marcados os três pontos e unidos dois a dois, formam-se três segmentos: AB, BC e CA — ver figura da resolução.",
        "Os pontos não estão alinhados (o declive de AB é 1/2 e o de AC é −3, diferentes), logo a figura fechada com 3 lados é um triângulo: o triângulo [ABC]."
      ],
      resposta: "Um triângulo — ver figura da resolução"
    },
    {
      numero: 6, cotacao: "4,0",
      enunciado: "Considere as funções f(x) = (3/2)^x e g(x) = x + 1.\na) Indique o domínio de f.\nb) Represente f e g no mesmo S.C.O.\nc) Resolva: f(x) = g(x) em Z.\nd) Determine: • f(2) • g(−1)",
      passos: [
        "a) A função exponencial está definida para todo o x real: D(f) = IR.",
        "b) f passa por (0; 1), (1; 3/2) e (2; 9/4); g é a recta que passa por (−1; 0) e (0; 1). Os gráficos encontram-se em (0; 1) — ver figura da resolução.",
        "c) Em Z testam-se os inteiros: x = 0: f = 1 e g = 1 ✓; x = 1: 3/2 ≠ 2; x = 2: 9/4 ≠ 3; x = −1: 2/3 ≠ 0. O segundo cruzamento dos gráficos fica entre 3 e 4 (em 3: 27/8 < 4; em 4: 81/16 > 5), que não é inteiro. Logo, em Z: S = {0}.",
        "d) f(2) = (3/2)² = 9/4. g(−1) = −1 + 1 = 0."
      ],
      resposta: "a) D(f) = IR · b) Esboço — ver figura da resolução · c) S = {0} (em Z) · d) f(2) = 9/4 e g(−1) = 0"
    },
    {
      numero: 7, cotacao: "1,4",
      enunciado: "Determine três números inteiros consecutivos, sabendo que a diferença entre a terça parte do maior e a quarta do menor é igual ao número do meio dividido por 12.",
      passos: [
        "Sejam m − 1, m e m + 1 os três inteiros consecutivos (menor, do meio e maior). A condição da folha escreve-se: (m + 1):3 − (m − 1):4 = m:12.",
        "Reduzindo o 1º membro ao denominador 12: [4(m + 1) − 3(m − 1)]:12 = (4m + 4 − 3m + 3):12 = (m + 7):12. A equação fica (m + 7):12 = m:12, ou seja m + 7 = m — impossível (7 = 0).",
        "Conclusão honesta: tal como impressa, a condição não é satisfeita por nenhuns três inteiros consecutivos — a diferença entre a terça parte do maior e a quarta parte do menor excede sempre o segundo membro em 7/12, seja qual for o trio. É um lapso da folha oficial; não existem tais números e não se inventa uma resposta."
      ],
      resposta: "Não existem — a condição impressa conduz a m + 7 = m, impossível (lapso da folha)"
    },
    {
      numero: 8, cotacao: "1,3",
      enunciado: "Determine os valores de k e m na função f(x) = −2(x + k)² + m, sabendo que a equação do eixo de simetria é x = 6 e o contradomínio é D′f = ]−∞; 3].",
      passos: [
        "Na forma −2(x + k)² + m, o vértice é o ponto (−k; m) e o eixo de simetria é x = −k.",
        "Eixo x = 6: −k = 6 ⇔ k = −6.",
        "Como a concavidade é para baixo (coeficiente −2), o contradomínio é ]−∞; valor máximo], e o valor máximo é m: m = 3."
      ],
      resposta: "k = −6 e m = 3"
    },
    {
      numero: 9, cotacao: "2,7",
      enunciado: "Sabendo que as classificações obtidas por um aluno nas disciplinas que frequentou foram 12, 13, 11, 10, 14, 13, 9, calcule:\na) A média final arredondada a um número inteiro.\nb) A moda das classificações.\nc) A mediana das classificações.",
      passos: [
        "a) Soma das 7 classificações: 12 + 13 + 11 + 10 + 14 + 13 + 9 = 82. Média = 82:7 ≈ 11,71, que arredondada ao inteiro mais próximo é 12.",
        "b) O único valor que se repete é 13 (duas vezes): a moda é 13.",
        "c) Ordenando as classificações: 9, 10, 11, 12, 13, 13, 14. Com 7 valores, a mediana é o 4º valor: 12."
      ],
      resposta: "a) ≈ 12 · b) Moda = 13 · c) Mediana = 12"
    }
  ]
}
]);
