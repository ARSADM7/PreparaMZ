// PreparaMZ — Lote 4 de Matemática 10ª classe (2016, 2015 e 2014).
// Transcrição fiel das folhas oficiais (mozexames) verificada visualmente
// a 200/300 dpi; resoluções próprias, passo a passo, com verificação por
// segundo método nas perguntas de cálculo. Notas de leitura:
// - 2015 2ª Q7: frequências lidas pelas linhas tracejadas do gráfico —
//   12 anos: 6; 13: 40; 14: 31; 15: 11; 16: 21 (quatro barras ficam
//   imediatamente acima das marcas redondas 5, 30, 10 e 20); a média
//   resulta ≈ 14,0 anos em qualquer das leituras.
// - 2014 1ª Q7: a barra B (peixe pedra) lê-se 29 kg (topo imediatamente
//   abaixo da linha dos 30); as restantes ficam sobre as linhas.
// - A figura da Q6 de 2014 1ª é o mesmo desenho da Q6 de 2016 2ª
//   (parábola f e logaritmo g, intersecção assinalada em (2, 1)).
window.EXAMES = (window.EXAMES || []).concat([
{
id: "mat-10-2016-1",
disciplina: "Matemática",
classe: "10ª Classe",
ano: 2016,
chamada: "1ª Época",
duracao: "120 Minutos",
totalPerguntas: 8,
fonteEnunciado: "Transcrição fiel do exame oficial ESG/2016 (1ª Época), verificada visualmente contra o PDF original do arquivo.",
originalPdf: "https://storage.mozexames.com/papers/83984851-5dfe-4bc6-9093-5ce7569d079f/question.pdf",
perguntas: [
{ numero: 1, cotacao: "2,0",
enunciado: "Observe a figura onde O é o centro da circunferência e assinale com (V) verdadeiras e (F) falsas as afirmações que se seguem:\na) O Ângulo ABC é um ângulo ao centro.\nb) A distância OA chama-se raio da circunferência.\nc) A distância BC chama-se diâmetro da circunferência.\nd) ABC = AOC/2",
passos: [
"a) O ângulo ABC tem o vértice B sobre a circunferência e os lados passam por A e por C: é um ângulo inscrito. O ângulo ao centro tem o vértice no centro O (como o ângulo AOC). Logo a afirmação é FALSA (F).",
"b) OA liga o centro O a um ponto A da circunferência: é, por definição, o raio. VERDADEIRA (V).",
"c) BC é uma corda da circunferência, mas não passa pelo centro O; o diâmetro é a corda que passa pelo centro. Logo BC não é um diâmetro. FALSA (F).",
"d) O ângulo inscrito ABC e o ângulo ao centro AOC apoiam-se no mesmo arco AC; o ângulo inscrito mede metade do ângulo ao centro: ABC = AOC/2. VERDADEIRA (V)."
],
resposta: "a) F · b) V · c) F · d) V" },
{ numero: 2, cotacao: "1,0",
enunciado: "Numa caixa contendo uma certa quantidade de laranjas foram tiradas 20 e sobrou um terço da quantidade inicial. Determine a quantidade inicial de laranjas.",
passos: [
"Seja x a quantidade inicial de laranjas. Depois de tirar 20, restam x − 20 laranjas, e esse resto é um terço do inicial: x − 20 = x/3.",
"Multiplicando os dois membros por 3: 3x − 60 = x, ou seja, 2x = 60 e x = 30.",
"Verificação: 30 − 20 = 10 e um terço de 30 é 10 ✓."
],
resposta: "30 laranjas" },
{ numero: 3, cotacao: "1,0",
enunciado: "Considere os Polinómios P(x) = 5x² − 2/3 x + 1 e Q(x) = 3x² − x. Calcule P(x) · Q(x).",
passos: [
"Multiplica-se cada termo de P por cada termo de Q: 5x² · 3x² = 15x⁴; 5x² · (−x) = −5x³; (−2/3 x) · 3x² = −2x³; (−2/3 x) · (−x) = 2/3 x²; 1 · 3x² = 3x²; 1 · (−x) = −x.",
"Juntando os termos semelhantes: 15x⁴ + (−5 − 2)x³ + (2/3 + 3)x² − x = 15x⁴ − 7x³ + 11/3 x² − x.",
"Verificação com x = 1: P(1) = 5 − 2/3 + 1 = 16/3 e Q(1) = 3 − 1 = 2, donde o produto é 32/3. Pela expressão obtida: 15 − 7 + 11/3 − 1 = 7 + 11/3 = 32/3 ✓."
],
resposta: "P(x) · Q(x) = 15x⁴ − 7x³ + 11/3 x² − x" },
{ numero: 4, cotacao: "2,0",
enunciado: "A figura abaixo representa um paralelogramo. Determine as medidas dos ângulos B, C e D.",
passos: [
"Na figura, o ângulo A mede 62°. Num paralelogramo, os ângulos opostos são iguais: o ângulo C é oposto ao A, logo C = 62°.",
"Ângulos consecutivos de um paralelogramo são suplementares (somam 180°): B = 180° − 62° = 118°.",
"O ângulo D é oposto ao B, logo D = 118°.",
"Verificação: a soma dos ângulos internos é 62° + 118° + 62° + 118° = 360° ✓."
],
resposta: "B = 118°, C = 62° e D = 118°" },
{ numero: 5, cotacao: "2,5",
enunciado: "Numa festa havia manga e banana. 25 pessoas comeram banana, 20 manga e 10 banana e manga. Sabe-se que cada participante comeu pelo menos um tipo de fruta.\na) Represente os dados num diagrama de Venn.\nb) Quantas pessoas participaram na festa?",
passos: [
"a) A intersecção dos dois conjuntos é 10 (comeram banana e manga). Só banana: 25 − 10 = 15 pessoas. Só manga: 20 − 10 = 10 pessoas. O diagrama de Venn fica: Banana 15 | 10 (ambas) | 10 Manga — ver a figura desta resolução.",
"b) Total de participantes = 15 + 10 + 10 = 35 pessoas.",
"Verificação (inclusão–exclusão): 25 + 20 − 10 = 35 ✓ (as 10 pessoas que comeram as duas frutas foram contadas duas vezes e tira-se uma)."
],
resposta: "a) Só banana 15, banana e manga 10, só manga 10 · b) 35 pessoas" },
{ numero: 6, cotacao: "2,5",
enunciado: "Resolva:\na) √2 sen x − 1 = 0; x ∈ 1º Q\nb) x⁴ − 2x² − 3 = 0",
passos: [
"a) √2 sen x = 1, donde sen x = 1/√2 = √2/2. No 1.º quadrante, o ângulo com este seno é x = 45°.",
"a) Verificação: √2 · sen 45° − 1 = √2 · (√2/2) − 1 = 1 − 1 = 0 ✓.",
"b) Fazendo y = x², a equação fica y² − 2y − 3 = 0, com raízes y = 3 e y = −1.",
"b) y = −1 é impossível, porque x² ≥ 0. De y = 3 vem x² = 3, donde x = √3 ou x = −√3.",
"b) Verificação: (√3)⁴ − 2(√3)² − 3 = 9 − 6 − 3 = 0 ✓."
],
resposta: "a) x = 45° · b) S = {−√3; √3}" },
{ numero: 7, cotacao: "5,0",
enunciado: "Observe a figura:\na) Qual é o contradomínio da função?\nb) Quais são os intervalos da variação da função?\nc) Determine a expressão analítica da função.",
passos: [
"Leitura do gráfico: é uma parábola com vértice na origem (0, 0), abertura para baixo, que passa pelo ponto (1, −1) assinalado a tracejado.",
"a) O maior valor da função é 0 (atingido no vértice) e ela desce sem limite: o contradomínio é ]−∞; 0].",
"b) À esquerda do vértice a função sobe até ao máximo e à direita desce: é crescente em ]−∞; 0] e decrescente em [0; +∞[.",
"c) Com vértice em (0, 0), a expressão é da forma f(x) = ax². Como a parábola passa por (1, −1): −1 = a · 1², donde a = −1. Logo f(x) = −x².",
"c) Verificação: f(1) = −1 ✓ e f(−1) = −1, como se lê no gráfico (a parábola é simétrica em relação ao eixo Oy) ✓."
],
resposta: "a) CD = ]−∞; 0] · b) Crescente em ]−∞; 0] e decrescente em [0; +∞[ · c) f(x) = −x²" },
{ numero: 8, cotacao: "4,0",
enunciado: "Uma certa empresa embala os seus produtos em caixas. Dez caixas de um lote tiveram o número de produtos contados. As quantidades obtidas foram: 88, 92, 90, 90, 89, 87, 86, 85, 89, 90.\nDetermine:\na) A moda.\nb) A mediana.\nc) O total de produtos das dez caixas.\nd) A media aritmética.",
passos: [
"Ordenando os dados por ordem crescente: 85, 86, 87, 88, 89, 89, 90, 90, 90, 92.",
"a) O valor mais frequente é 90 (aparece 3 vezes; o 89 aparece 2). A moda é 90.",
"b) Com 10 valores, a mediana é a média dos dois valores centrais (5.º e 6.º): (89 + 89)/2 = 89.",
"c) Total = 85 + 86 + 87 + 88 + 89 + 89 + 90 + 90 + 90 + 92 = 886 produtos.",
"c) Verificação do total por agrupamento: (88 + 92) + (90 + 90 + 90) + (89 + 89) + (87 + 86 + 85) = 180 + 270 + 178 + 258 = 886 ✓.",
"d) Média aritmética = 886/10 = 88,6 produtos por caixa."
],
resposta: "a) Moda = 90 · b) Mediana = 89 · c) Total = 886 produtos · d) Média = 88,6" }
]
},
{
id: "mat-10-2016-2",
disciplina: "Matemática",
classe: "10ª Classe",
ano: 2016,
chamada: "2ª Época",
duracao: "120 Minutos",
totalPerguntas: 7,
fonteEnunciado: "Transcrição fiel do exame oficial ESG/2016 (2ª Época), verificada visualmente contra o PDF original do arquivo.",
originalPdf: "https://storage.mozexames.com/papers/353d1db8-6559-4dc1-bef6-a8074dec1b06/question.pdf",
perguntas: [
{ numero: 1, cotacao: "2,0",
enunciado: "Assinale com (V) verdadeiras e (F) falsas as afirmações que se seguem:\na) A ∪ ∅ = ∅\nb) A ∩ A = A\nc) A ∪ (B ∩ C) = (A ∩ B) ∪ (A ∩ C)\nd) A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)",
passos: [
"a) A união de qualquer conjunto A com o conjunto vazio é o próprio A: A ∪ ∅ = A. A igualdade escrita só seria verdadeira se A fosse vazio. FALSA (F).",
"b) A intersecção de um conjunto consigo mesmo é ele próprio: A ∩ A = A. VERDADEIRA (V).",
"c) A distributiva correcta da união sobre a intersecção é A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C). No segundo membro escrito aparecem intersecções onde deviam estar uniões. FALSA (F).",
"c) Verificação com um exemplo: A = {1}, B = {2} e C = {1, 2}. Primeiro membro: A ∪ (B ∩ C) = {1} ∪ {2} = {1, 2}. Segundo membro escrito: (A ∩ B) ∪ (A ∩ C) = ∅ ∪ {1} = {1}. São diferentes ✓.",
"d) É a distributiva da intersecção sobre a união: A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C). VERDADEIRA (V)."
],
resposta: "a) F · b) V · c) F · d) V" },
{ numero: 2, cotacao: "2,0",
enunciado: "Resolva o sistema de equações:\nx − 3y = 6\n−x + y = 0",
passos: [
"Da segunda equação tira-se y = x.",
"Substituindo na primeira: x − 3x = 6, ou seja, −2x = 6 e x = −3. Logo y = −3.",
"Verificação: −3 − 3 · (−3) = −3 + 9 = 6 ✓ e −(−3) + (−3) = 3 − 3 = 0 ✓."
],
resposta: "S = {(−3; −3)}" },
{ numero: 3, cotacao: "3,0",
enunciado: "Determine o valor numérico das seguintes expressões:\na) 2/(2 − 2 sen 30°) + 3/(3 + 3 cos 60°)\nb) [(3/4)² ÷ (5/4)²] / [(3/5)²]³\nc) 7√3 + √12 − √75",
passos: [
"a) sen 30° = 1/2 e cos 60° = 1/2. Primeira fracção: 2/(2 − 2 · 1/2) = 2/(2 − 1) = 2. Segunda: 3/(3 + 3 · 1/2) = 3/(9/2) = 6/9 = 2/3. Soma: 2 + 2/3 = 8/3.",
"b) Numerador: (3/4)² ÷ (5/4)² = (9/16) · (16/25) = 9/25. Denominador: [(3/5)²]³ = (3/5)⁶ = 729/15625. Quociente: (9/25) ÷ (729/15625) = (9/25) · (15625/729) = 625/81.",
"b) Verificação: 15625/25 = 625 e 9/729 = 1/81, donde (9 · 15625)/(25 · 729) = 140625/18225 = 625/81 ✓.",
"c) √12 = √(4 · 3) = 2√3 e √75 = √(25 · 3) = 5√3. Logo 7√3 + 2√3 − 5√3 = 4√3."
],
resposta: "a) 8/3 · b) 625/81 · c) 4√3" },
{ numero: 4, cotacao: "2,0",
enunciado: "Na figura abaixo, [ABCD] é um paralelogramo. Determine as medidas dos ângulos W, K e Q.",
passos: [
"Na figura, o ângulo A mede 70° e o lado AB está prolongado para além de B; o ângulo entre esse prolongamento e o lado BC (ângulo externo em B) também mede 70° — é igual ao A por serem ângulos correspondentes entre as paralelas AD e BC.",
"W é o ângulo interno em B, suplementar do externo: W = 180° − 70° = 110°.",
"Num paralelogramo, os ângulos opostos são iguais: Q (em D) é oposto de W (em B), logo Q = 110°; K (em C) é oposto ao ângulo A, logo K = 70°.",
"Verificação: 70° + 110° + 70° + 110° = 360° ✓ (soma dos ângulos internos)."
],
resposta: "W = 110°, K = 70° e Q = 110°" },
{ numero: 5, cotacao: "2,0",
enunciado: "Considere a equação x² + 2x + 3 − k = 0. Determine k real de modo que a equação admita:\na) 2 como uma das raízes.\nb) uma raiz nula.",
passos: [
"a) Se 2 é raiz, satisfaz a equação: 2² + 2 · 2 + 3 − k = 0, ou seja, 11 − k = 0 e k = 11.",
"b) Se 0 é raiz, substituindo x = 0: 0² + 2 · 0 + 3 − k = 0, donde k = 3.",
"Verificação de b): com k = 3 a equação fica x² + 2x = 0, isto é, x(x + 2) = 0, com raízes 0 e −2 — tem de facto uma raiz nula ✓. Verificação de a): com k = 11, x² + 2x − 8 = 0 tem raízes 2 e −4 ✓."
],
resposta: "a) k = 11 · b) k = 3" },
{ numero: 6, cotacao: "7,0",
enunciado: "Observe a figura:\na) Qual é o domínio da função g(x)?\nb) Qual é o contradomínio da função f(x)?\nc) Faça o estudo da variação do sinal da função g(x).\nd) Faça o estudo da monotonia da função f(x).\ne) Escreva a equação da assímptota do gráfico da função g(x).\nf) Determine a expressão analítica de f(x).",
passos: [
"Leitura do gráfico: f é a parábola com vértice (1, 0), que passa por (0, 1) e por (2, 1); g é a curva logarítmica, definida só para x > 0, que cruza o eixo Ox em x = 1 e passa também por (2, 1) — ponto assinalado a tracejado.",
"a) g só existe à direita do eixo Oy: o domínio de g é ]0; +∞[.",
"b) f tem mínimo 0 no vértice (1, 0) e cresce sem limite: o contradomínio de f é [0; +∞[.",
"c) Sinal de g: g(x) = 0 em x = 1; g(x) < 0 para 0 < x < 1 (curva abaixo do eixo Ox); g(x) > 0 para x > 1.",
"d) Monotonia de f: decrescente em ]−∞; 1] e crescente em [1; +∞[ (o vértice (1, 0) separa os dois intervalos).",
"e) Quando x se aproxima de 0 pela direita, g desce sem limite junto ao eixo Oy: a assímptota vertical do gráfico de g é a recta x = 0.",
"f) Com vértice (1, 0), f é da forma f(x) = a(x − 1)². Como passa por (0, 1): 1 = a · (−1)², donde a = 1. Logo f(x) = (x − 1)² = x² − 2x + 1. Verificação: f(2) = 1 ✓, o ponto assinalado no gráfico."
],
resposta: "a) D(g) = ]0; +∞[ · b) CD(f) = [0; +∞[ · c) g é negativa em ]0; 1[, nula em x = 1 e positiva em ]1; +∞[ · d) Decrescente em ]−∞; 1] e crescente em [1; +∞[ · e) x = 0 · f) f(x) = (x − 1)²" },
{ numero: 7, cotacao: "2,0",
enunciado: "Com objectivo de equipar o ginásio de uma escola o professor de educação física inquiriu alguns alunos acerca da modalidade desportiva de preferência. Para apresentar os dados elaborou o seguinte gráfico:\na) Quantos alunos foram inquiridos?\nb) Qual é a modalidade mais preferida?",
passos: [
"Leitura das barras do gráfico: Futebol 90 alunos, Voleibol 30, Andebol 20, Basquetebol 40 e Ginástica 10.",
"a) Total de inquiridos = 90 + 30 + 20 + 40 + 10 = 190 alunos.",
"b) A barra mais alta é a do Futebol (90 alunos): é a modalidade mais preferida."
],
resposta: "a) 190 alunos · b) Futebol" }
]
},
{
id: "mat-10-2015-1",
disciplina: "Matemática",
classe: "10ª Classe",
ano: 2015,
chamada: "1ª Época",
duracao: "120 Minutos",
totalPerguntas: 7,
fonteEnunciado: "Transcrição fiel do exame oficial ESG/2015 — «Exame Final» (1ª Época), verificada visualmente contra o PDF original do arquivo.",
originalPdf: "https://storage.mozexames.com/papers/49fe61af-16a0-4719-8f5f-286ab5d13a4a/question.pdf",
perguntas: [
{ numero: 1, cotacao: "2,0",
enunciado: "Assinale com (V) verdadeiras ou (F) falsas as afirmações que se seguem:\na) −5/2 ∈ [−5, −3]\nb) |−5| > −(−5)\nc) 1²⁰¹⁵ = 2015\nd) log₂(1/4) > log₂(1/8)",
passos: [
"a) −5/2 = −2,5. O intervalo [−5, −3] só contém números de −5 até −3; −2,5 é maior que −3, está fora do intervalo. FALSA (F).",
"b) |−5| = 5 e −(−5) = 5. A afirmação diz 5 > 5, o que é falso (os dois valores são iguais). FALSA (F).",
"c) 1 elevado a qualquer expoente é 1: 1²⁰¹⁵ = 1 ≠ 2015. FALSA (F).",
"d) log₂(1/4) = −2 (porque 2⁻² = 1/4) e log₂(1/8) = −3 (porque 2⁻³ = 1/8). Como −2 > −3, a desigualdade é VERDADEIRA (V)."
],
resposta: "a) F · b) F · c) F · d) V" },
{ numero: 2, cotacao: "2,0",
enunciado: "Determine o valor numérico das seguintes expressões:\na) lg 200 − lg 20 + log₂(1/2)\nb) ∛27 + ∛81 − 3∛3 − 9",
passos: [
"a) lg 200 − lg 20 = lg(200/20) = lg 10 = 1. E log₂(1/2) = −1, porque 2⁻¹ = 1/2. Total: 1 + (−1) = 0.",
"b) ∛27 = 3 e ∛81 = ∛(27 · 3) = 3∛3. A expressão fica 3 + 3∛3 − 3∛3 − 9 = −6 (os termos em ∛3 cancelam-se)."
],
resposta: "a) 0 · b) −6" },
{ numero: 3, cotacao: "4,5",
enunciado: "Resolva:\na) o sistema de inequações: x + 1/3 > 1 − x/2 e 2x − 5 < x − 1/2\nb) tg (2x − 30°) = √3; 0° < x < 90°\nc) x² + 1 = 2/x²",
passos: [
"a) Primeira inequação: x + x/2 > 1 − 1/3, ou seja, (3/2)x > 2/3, donde x > 4/9.",
"a) Segunda inequação: 2x − x < 5 − 1/2, ou seja, x < 9/2.",
"a) Intersectando as duas condições: 4/9 < x < 9/2, isto é, S = ]4/9; 9/2[.",
"b) Com 0° < x < 90°, o ângulo 2x − 30° está entre −30° e 150°; nesse intervalo, a tangente vale √3 em 60°. Logo 2x − 30° = 60° e x = 45°. Verificação: tg(2 · 45° − 30°) = tg 60° = √3 ✓.",
"c) Multiplicando por x² (com x ≠ 0) e fazendo y = x²: y + 1 = 2/y, ou seja, y² + y − 2 = 0, com raízes y = 1 e y = −2.",
"c) y = −2 é impossível (x² ≥ 0). De y = 1 vem x² = 1, donde x = 1 ou x = −1. Verificação: 1 + 1 = 2/1 = 2 ✓."
],
resposta: "a) S = ]4/9; 9/2[ · b) x = 45° · c) S = {−1; 1}" },
{ numero: 4, cotacao: "2,5",
enunciado: "A tabela mostra as preferências dos alunos de uma escola em relação às disciplinas de Matemática e Física: Matemática — 120 alunos; Física — 200 alunos; Matemática e Física — 80 alunos.\na) Represente os dados num diagrama de Venn.\nb) Determine o número total de alunos desta escola.",
passos: [
"a) A intersecção (Matemática e Física) é 80. Só Matemática: 120 − 80 = 40 alunos. Só Física: 200 − 80 = 120 alunos. O diagrama fica: Matemática 40 | 80 (ambas) | 120 Física — ver a figura desta resolução.",
"b) Total = 40 + 80 + 120 = 240 alunos.",
"Verificação (inclusão–exclusão): 120 + 200 − 80 = 240 ✓."
],
resposta: "a) Só Matemática 40, ambas 80, só Física 120 · b) 240 alunos" },
{ numero: 5, cotacao: "4,5",
enunciado: "Considere as funções f(x) = x² + 4x + 3 e g(x) = x + 3.\na) Represente f e g no mesmo sistema cartesiano.\nb) A partir da figura resolva f(x) = g(x).\nc) Qual é o contradomínio de f(x)?\nd) Para que valores de x, g(x) < f(x)?",
passos: [
"a) f é uma parábola: zeros em x = −3 e x = −1 (porque x² + 4x + 3 = (x + 1)(x + 3)), vértice (−2, −1) e f(0) = 3. g é a recta que passa por (0, 3) e por (−3, 0). As duas curvas estão desenhadas na figura desta resolução.",
"b) Pela figura, as curvas encontram-se nos pontos (−3, 0) e (0, 3): f(x) = g(x) para x = −3 ou x = 0. Confirmação algébrica: x² + 4x + 3 = x + 3 ⇔ x² + 3x = 0 ⇔ x(x + 3) = 0 ✓.",
"c) O valor mínimo de f é o do vértice, −1: o contradomínio de f é [−1; +∞[.",
"d) Pela figura, a parábola fica acima da recta fora do intervalo entre os pontos de encontro: g(x) < f(x) para x < −3 ou x > 0, isto é, x ∈ ]−∞; −3[ ∪ ]0; +∞[. Verificação em x = −4: f(−4) = 3 e g(−4) = −1, de facto f > g ✓."
],
resposta: "b) S = {−3; 0} · c) CD(f) = [−1; +∞[ · d) x ∈ ]−∞; −3[ ∪ ]0; +∞[" },
{ numero: 6, cotacao: "2,5",
enunciado: "As notas do João em cinco testes de Matemática foram as seguintes: 15, 16, 13, 15, 11.\na) Qual é a moda das notas?\nb) Calcule a média aritmética das notas.\nc) Qual deve ser a nota do sexto teste para que a média suba em 1 valor?",
passos: [
"a) A nota 15 repete-se duas vezes e as outras aparecem uma só vez: a moda é 15.",
"b) Média = (15 + 16 + 13 + 15 + 11)/5 = 70/5 = 14 valores.",
"c) Para a média de seis testes ser 14 + 1 = 15 valores, a soma dos seis testes tem de ser 6 · 15 = 90. A nota do sexto teste é 90 − 70 = 20 valores.",
"c) Verificação: (70 + 20)/6 = 90/6 = 15 = 14 + 1 ✓."
],
resposta: "a) Moda = 15 · b) Média = 14 valores · c) 20 valores" },
{ numero: 7, cotacao: "2,0",
enunciado: "Dado o trapézio isósceles [ABCD], com AB = 10 cm e DC = DE = 4 cm. Determine:\na) a medida de AD.\nb) o perímetro do trapézio.",
passos: [
"Na figura, E e F são os pés das alturas tiradas de D e de C sobre a base maior AB. No rectângulo DCFE, EF = DC = 4 cm.",
"Como o trapézio é isósceles, os dois triângulos das pontas são iguais: AE = FB = (AB − EF)/2 = (10 − 4)/2 = 3 cm.",
"a) No triângulo rectângulo AED, os catetos são AE = 3 cm e DE = 4 cm (a altura, dada). Por Pitágoras: AD² = 3² + 4² = 25, donde AD = 5 cm.",
"b) Por ser isósceles, BC = AD = 5 cm. Perímetro = AB + BC + CD + DA = 10 + 5 + 4 + 5 = 24 cm."
],
resposta: "a) AD = 5 cm · b) Perímetro = 24 cm" }
]
},
{
id: "mat-10-2015-2",
disciplina: "Matemática",
classe: "10ª Classe",
ano: 2015,
chamada: "2ª Época",
duracao: "120 Minutos",
totalPerguntas: 7,
fonteEnunciado: "Transcrição fiel do exame oficial ESG/2015 (2ª Época), verificada visualmente contra o PDF original do arquivo.",
originalPdf: "https://storage.mozexames.com/papers/08a25655-73d8-4d68-9e1b-52183d7c99d0/question.pdf",
perguntas: [
{ numero: 1, cotacao: "2,0",
enunciado: "Assinale com (V) verdadeiras ou (F) falsas as afirmações que se seguem:\na) (3/5)^(3/5) = ⁵√((3/5)³)\nb) {1; 4} = [1; 4]\nc) −2² = (−2)²\nd) 1/√5 = √5/5",
passos: [
"a) Pela definição de potência de expoente fraccionário, a^(m/n) = ⁿ√(a^m). Com a = 3/5, m = 3 e n = 5, obtém-se exactamente o segundo membro. VERDADEIRA (V).",
"b) {1; 4} é um conjunto com apenas dois elementos (o 1 e o 4); [1; 4] é um intervalo com infinitos números reais. Não são iguais. FALSA (F).",
"c) −2² = −(2²) = −4 (a potência tem prioridade sobre o sinal de menos), enquanto (−2)² = 4. Não são iguais. FALSA (F).",
"d) Racionalizando o denominador: 1/√5 = √5/(√5 · √5) = √5/5. VERDADEIRA (V)."
],
resposta: "a) V · b) F · c) F · d) V" },
{ numero: 2, cotacao: "2,5",
enunciado: "Determine o valor numérico das seguintes expressões:\na) lg 400 − lg 4 + √0,04\nb) [(1/2 − 3)²]⁴ ÷ (2/5)^(−8)",
passos: [
"a) lg 400 − lg 4 = lg(400/4) = lg 100 = 2. E √0,04 = 0,2. Total: 2 + 0,2 = 2,2.",
"b) 1/2 − 3 = −5/2; (−5/2)² = 25/4; e (25/4)⁴ = (5/2)⁸. Por outro lado, (2/5)^(−8) = (5/2)⁸. O quociente de duas potências iguais é 1.",
"b) Verificação numérica: (25/4)⁴ = 390625/256 e (5/2)⁸ = 390625/256 — são o mesmo número, logo o quociente é 1 ✓."
],
resposta: "a) 2,2 · b) 1" },
{ numero: 3, cotacao: "3,0",
enunciado: "Considere a equação 4x² + kx + 1 = 0. Determine o valor de k de modo que:\na) a equação não tenha raízes reais.\nb) uma das raízes seja igual a 3.",
passos: [
"a) O discriminante é Δ = k² − 4 · 4 · 1 = k² − 16. A equação não tem raízes reais quando Δ < 0: k² < 16, ou seja, −4 < k < 4.",
"b) Se 3 é raiz, satisfaz a equação: 4 · 3² + 3k + 1 = 0, ou seja, 37 + 3k = 0 e k = −37/3.",
"b) Verificação pelas relações de Girard: com uma raiz 3 e produto das raízes c/a = 1/4, a outra raiz é 1/12; a soma das raízes é 3 + 1/12 = 37/12 = −k/4, donde k = −37/3 ✓."
],
resposta: "a) −4 < k < 4 · b) k = −37/3" },
{ numero: 4, cotacao: "3,0",
enunciado: "30 jovens foram inqueridos em relação à prática de futebol e de natação, dos quais 8 afirmaram que praticam futebol, 10 não praticam nem futebol nem natação, 4 praticam ambas modalidades e alguns praticam apenas natação.\na) Represente os dados num diagrama de Venn.\nb) Determine o número de jovens que praticam apenas natação.",
passos: [
"Universo: 30 jovens. Fora dos dois conjuntos (nem futebol nem natação) estão 10; logo, praticam pelo menos uma modalidade 30 − 10 = 20 jovens.",
"Futebol (total) = 8 e ambas as modalidades = 4, donde só futebol = 8 − 4 = 4 jovens.",
"b) Só natação = 20 − 8 = 12 jovens (de todos os que praticam alguma modalidade, tiram-se os que praticam futebol, com ou sem natação).",
"a) O diagrama fica: só futebol 4, ambas 4, só natação 12 e, fora dos conjuntos, 10 — ver a figura desta resolução. Verificação: 4 + 4 + 12 + 10 = 30 ✓."
],
resposta: "Apenas natação: 12 jovens (diagrama: só futebol 4, ambas 4, só natação 12, nenhum 10)" },
{ numero: 5, cotacao: "3,5",
enunciado: "Observe a figura.\na) Qual é o domínio da função f(x)?\nResolva graficamente:\nb) f(x) > 0.\nc) f(x) = g(x).\nd) f(x) ≤ g(x).\ne) Determine a expressão analítica da função g(x).",
passos: [
"Leitura do gráfico: f é a curva decrescente desenhada apenas para x > 0 (junto ao eixo Oy vem de valores muito altos), que cruza o eixo Ox em x = 1; g é a recta crescente que passa por (0, −1) e por (1, 0). As duas curvas encontram-se no ponto (1, 0).",
"a) f só está desenhada (e definida) para x > 0: o domínio de f é ]0; +∞[ — leitura feita a partir do ramo desenhado, como na folha.",
"b) f(x) > 0 onde a curva está acima do eixo Ox: desde 0 até ao zero x = 1. S = ]0; 1[.",
"c) As curvas intersectam-se em (1, 0): f(x) = g(x) quando x = 1.",
"d) f(x) ≤ g(x) onde a curva f está abaixo da recta g ou sobre ela: a partir do ponto de encontro, x ≥ 1 (dentro do domínio de f). S = [1; +∞[.",
"e) g é uma recta g(x) = mx + b. Passa por (0, −1), logo b = −1; passa por (1, 0), logo m − 1 = 0 e m = 1. Portanto g(x) = x − 1. Verificação: g(1) = 0 ✓, o ponto de encontro com f."
],
resposta: "a) D(f) = ]0; +∞[ · b) ]0; 1[ · c) x = 1 · d) [1; +∞[ · e) g(x) = x − 1" },
{ numero: 6, cotacao: "2,5",
enunciado: "Observe a figura. Sabendo que as amplitudes dos ângulos b e d são respectivamente 50° e 95°, determine a amplitude do ângulo a.",
passos: [
"Na figura, o lado AC do triângulo está prolongado para além de C: d é o ângulo externo em C e c é o ângulo interno em C. Como c e d são suplementares: c = 180° − 95° = 85°.",
"A soma dos ângulos internos do triângulo é 180°: a + b + c = 180°, ou seja, a = 180° − 50° − 85° = 45°.",
"Verificação pelo teorema do ângulo externo: o ângulo externo é igual à soma dos ângulos internos não adjacentes: d = a + b, donde a = 95° − 50° = 45° ✓."
],
resposta: "a = 45°" },
{ numero: 7, cotacao: "3,5",
enunciado: "O gráfico mostra a distribuição das idades por anos, de alunos de uma certa escola.\na) Determine a média aritmética das idades.\nb) Qual é a moda das idades?",
passos: [
"Leitura das barras (as linhas tracejadas prolongam o topo de cada barra até ao eixo das frequências): 12 anos — 6 alunos; 13 anos — 40; 14 anos — 31; 15 anos — 11; 16 anos — 21. Total de alunos: 6 + 40 + 31 + 11 + 21 = 109.",
"a) Soma das idades: 12 · 6 + 13 · 40 + 14 · 31 + 15 · 11 + 16 · 21 = 72 + 520 + 434 + 165 + 336 = 1527. Média = 1527/109 ≈ 14,0 anos.",
"b) A maior frequência é 40, correspondente aos 13 anos: a moda é 13 anos.",
"Nota de leitura: os topos de quatro barras ficam imediatamente acima das marcas redondas vizinhas (5, 30, 10 e 20), por isso se lêem 6, 31, 11 e 21; mesmo com a leitura redonda (5, 40, 30, 10, 20), a média continuaria a ser ≈ 14,0 anos."
],
resposta: "a) Média ≈ 14,0 anos · b) Moda = 13 anos" }
]
},
{
id: "mat-10-2014-1",
disciplina: "Matemática",
classe: "10ª Classe",
ano: 2014,
chamada: "1ª Época",
duracao: "120 Minutos",
totalPerguntas: 7,
fonteEnunciado: "Transcrição fiel do exame oficial ESG/2014 (1ª Época), verificada visualmente contra o PDF original do arquivo.",
originalPdf: "https://storage.mozexames.com/papers/7e3c3b37-0007-4cea-8175-a665306c999b/question.pdf",
perguntas: [
{ numero: 1, cotacao: "2,0",
enunciado: "Assinale com (V) verdadeiras ou (F) falsas as afirmações que se seguem:\na) (−2)³ = 8\nb) [((1/2)⁰)]² = 1/4\nc) 2√3 = √6\nd) 7√(4²) = 28",
passos: [
"a) (−2)³ = (−2) · (−2) · (−2) = −8 ≠ 8 (base negativa com expoente ímpar dá resultado negativo). FALSA (F).",
"b) Qualquer número não nulo elevado a 0 é 1: ((1/2)⁰)² = 1² = 1 ≠ 1/4. FALSA (F).",
"c) 2√3 = √(2² · 3) = √12 ≠ √6. FALSA (F).",
"d) √(4²) = 4, logo 7 · 4 = 28. VERDADEIRA (V)."
],
resposta: "a) F · b) F · c) F · d) V" },
{ numero: 2, cotacao: "1,0",
enunciado: "Considere os polinómios: A(x) = 3x² + 6x e B(x) = 4x² − 1. Efectue a operação 2A(x) + B(x) de polinómios em x, reduzindo os termos semelhantes.",
passos: [
"2A(x) = 2 · (3x² + 6x) = 6x² + 12x.",
"2A(x) + B(x) = (6x² + 12x) + (4x² − 1) = (6 + 4)x² + 12x − 1 = 10x² + 12x − 1.",
"Verificação com x = 1: 2A(1) + B(1) = 2 · 9 + 3 = 21; pela expressão obtida: 10 + 12 − 1 = 21 ✓."
],
resposta: "2A(x) + B(x) = 10x² + 12x − 1" },
{ numero: 3, cotacao: "4,5",
enunciado: "Resolva as seguintes equações:\na) (x − 8)/21 + (x − 2)/3 = 2/7 (x − 3)\nb) x⁴ + 3x² − 4 = 0\nc) cos(x − 90°) = 1 se 0° ≤ x ≤ 90°",
passos: [
"a) Multiplicando os dois membros por 21 (o mínimo múltiplo comum dos denominadores): (x − 8) + 7(x − 2) = 6(x − 3), ou seja, 8x − 22 = 6x − 18.",
"a) 2x = 4, donde x = 2. Verificação: (2 − 8)/21 + (2 − 2)/3 = −6/21 = −2/7 e 2/7 · (2 − 3) = −2/7 ✓.",
"b) Fazendo y = x²: y² + 3y − 4 = 0, com raízes y = 1 e y = −4.",
"b) y = −4 é impossível (x² ≥ 0). De y = 1 vem x = 1 ou x = −1. Verificação: 1 + 3 − 4 = 0 ✓.",
"c) Com 0° ≤ x ≤ 90°, o ângulo x − 90° está entre −90° e 0°; nesse intervalo, o co-seno vale 1 apenas em 0°. Logo x − 90° = 0° e x = 90°. Verificação: cos(90° − 90°) = cos 0° = 1 ✓."
],
resposta: "a) S = {2} · b) S = {−1; 1} · c) x = 90°" },
{ numero: 4, cotacao: "3,0",
enunciado: "Numa pesquisa feita na cidade de Maputo constatou-se que num universo de 100 jovens, 10 tem casa própria, 8 tem casa própria e carro próprio e 18 não tem casa própria nem carro próprio.\na) Represente os dados num diagrama de Venn.\nb) Determine o número de jovens que têm somente carro próprio.",
passos: [
"Casa própria (total) = 10 jovens, dos quais 8 também têm carro: só casa = 10 − 8 = 2 jovens.",
"Os que não têm nem casa nem carro são 18; logo, têm pelo menos um dos dois bens 100 − 18 = 82 jovens.",
"b) Só carro = 82 − 10 = 72 jovens (de todos os que têm pelo menos um bem, tiram-se os que têm casa, com ou sem carro).",
"a) O diagrama fica: só casa 2, casa e carro 8, só carro 72 e, fora dos conjuntos, 18 — ver a figura desta resolução. Verificação: 2 + 8 + 72 + 18 = 100 ✓."
],
resposta: "b) 72 jovens (diagrama: só casa 2, ambos 8, só carro 72, nenhum 18)" },
{ numero: 5, cotacao: "2,0",
enunciado: "Observe o triângulo ABC. Se D é o ponto de encontro das bissectrizes dos ângulos BCA e ABC, ∠B = ∠A + 20° e ∠C = 40°, calcule a medida do ângulo CDB.",
passos: [
"Da soma dos ângulos internos do triângulo: A + B + C = 180°. Substituindo B = A + 20° e C = 40°: A + (A + 20°) + 40° = 180°, donde 2A = 120° e A = 60°. Então B = 60° + 20° = 80°.",
"D está sobre as bissectrizes de B e de C, por isso no triângulo CDB os ângulos junto a C e a B são as metades: ∠DCB = 40°/2 = 20° e ∠DBC = 80°/2 = 40°.",
"∠CDB = 180° − 20° − 40° = 120°.",
"Verificação (propriedade do incentro): o ângulo formado pelas bissectrizes é ∠CDB = 90° + A/2 = 90° + 30° = 120° ✓."
],
resposta: "∠CDB = 120°" },
{ numero: 6, cotacao: "5,0",
enunciado: "Observe a figura:\na) Escreva o nome de cada uma das funções.\nb) Qual é o domínio de g(x)?\nc) Qual é o contradomínio de f(x)?\nd) Para que valores de x, a função f é crescente?\ne) Para que valores de x, g(x) < f(x)?\nf) Determine a expressão analítica de f(x).",
passos: [
"Leitura do gráfico: f é a curva em forma de parábola, com vértice (1, 0), que passa por (0, 1) e por (2, 1); g é a curva que só existe para x > 0, cruza o eixo Ox em x = 1 e também passa por (2, 1) — ponto assinalado a tracejado. (É o mesmo desenho da pergunta 6 do exame de 2016, 2ª Época.)",
"a) f é uma função quadrática e g é uma função logarítmica.",
"b) g só está definida à direita do eixo Oy: D(g) = ]0; +∞[.",
"c) f tem mínimo 0 no vértice: CD(f) = [0; +∞[.",
"d) f é crescente à direita do vértice: para x > 1 (intervalo [1; +∞[).",
"e) As curvas cruzam-se em x = 1 (ambas valem 0) e em x = 2 (ambas valem 1, o ponto assinalado). Entre 1 e 2, g está acima de f; fora desse intervalo, f está acima de g. Logo g(x) < f(x) para 0 < x < 1 ou x > 2, isto é, x ∈ ]0; 1[ ∪ ]2; +∞[ (dentro do domínio de g).",
"f) Com vértice (1, 0): f(x) = a(x − 1)². Passando por (0, 1): a = 1. Logo f(x) = (x − 1)² = x² − 2x + 1. Verificação: f(2) = 1 ✓."
],
resposta: "a) f — função quadrática; g — função logarítmica · b) D(g) = ]0; +∞[ · c) CD(f) = [0; +∞[ · d) x > 1 · e) x ∈ ]0; 1[ ∪ ]2; +∞[ · f) f(x) = (x − 1)²" },
{ numero: 7, cotacao: "2,5",
enunciado: "O gráfico a seguir mostra as quantidades em kg de cinco tipos de mariscos vendidos diariamente em determinada loja. (A — carapau; B — peixe pedra; C — garoupa; D — caranguejo; E — camarão)\na) Qual é o marisco mais vendido diariamente?\nb) A partir do gráfico construa uma tabela de frequências absolutas e frequências acumuladas.",
passos: [
"Leitura das barras: A (carapau) 15 kg; B (peixe pedra) 29 kg — a barra fica imediatamente abaixo da linha dos 30 kg; C (garoupa) 10 kg; D (caranguejo) 20 kg; E (camarão) 25 kg.",
"a) A barra mais alta é a de B: o marisco mais vendido diariamente é o peixe pedra (29 kg).",
"b) Tabela de frequências — Marisco: frequência absoluta (kg) → frequência acumulada (kg): A: 15 → 15; B: 29 → 44; C: 10 → 54; D: 20 → 74; E: 25 → 99. Total vendido por dia: 99 kg.",
"Verificação: a última frequência acumulada tem de ser a soma de todas as absolutas: 15 + 29 + 10 + 20 + 25 = 99 ✓."
],
resposta: "a) Peixe pedra (B) · b) Absolutas: 15, 29, 10, 20 e 25 kg; acumuladas: 15, 44, 54, 74 e 99" }
]
},
{
id: "mat-10-2014-2",
disciplina: "Matemática",
classe: "10ª Classe",
ano: 2014,
chamada: "2ª Época",
duracao: "120 Minutos",
totalPerguntas: 7,
fonteEnunciado: "Transcrição fiel do exame oficial ESG/2014 (2ª Época), verificada visualmente contra o PDF original do arquivo.",
originalPdf: "https://storage.mozexames.com/papers/8d9ce622-4fe4-4f2e-b90e-54fec6b43f97/question.pdf",
perguntas: [
{ numero: 1, cotacao: "2,0",
enunciado: "Assinale com (V) verdadeiras ou (F) falsas as afirmações que se seguem:\na) 4² − 1² = 3²\nb) |−8| > 16/2\nc) 15/3 ∈ ℕ\nd) {3} ⊂ [1; 3[",
passos: [
"a) 4² − 1² = 16 − 1 = 15 e 3² = 9. Como 15 ≠ 9, a igualdade é FALSA (F).",
"b) |−8| = 8 e 16/2 = 8. A afirmação diz 8 > 8, o que é falso (os valores são iguais). FALSA (F).",
"c) 15/3 = 5 e 5 é um número natural: 5 ∈ ℕ. VERDADEIRA (V).",
"d) O intervalo [1; 3[ não inclui o 3 (é aberto em 3); por isso o conjunto {3} não está contido nele. FALSA (F)."
],
resposta: "a) F · b) F · c) V · d) F" },
{ numero: 2, cotacao: "1,5",
enunciado: "Considere os polinómios: A(x) = 3x² + 6x; B(x) = 4x² − 1 e C(x) = 2x − 2. Efectue a operação A(C − B) de polinómios em x, reduzindo os termos semelhantes.",
passos: [
"Primeiro a diferença: C − B = (2x − 2) − (4x² − 1) = −4x² + 2x − 1.",
"Depois o produto: A · (C − B) = (3x² + 6x)(−4x² + 2x − 1). Termo a termo: 3x² · (−4x²) = −12x⁴; 3x² · 2x = 6x³; 3x² · (−1) = −3x²; 6x · (−4x²) = −24x³; 6x · 2x = 12x²; 6x · (−1) = −6x.",
"Reduzindo os termos semelhantes: −12x⁴ + (6 − 24)x³ + (−3 + 12)x² − 6x = −12x⁴ − 18x³ + 9x² − 6x.",
"Verificação com x = 1: A(1) = 9; C(1) − B(1) = 0 − 3 = −3; o produto é 9 · (−3) = −27. Pela expressão obtida: −12 − 18 + 9 − 6 = −27 ✓."
],
resposta: "A(C − B) = −12x⁴ − 18x³ + 9x² − 6x" },
{ numero: 3, cotacao: "4,0",
enunciado: "Resolva as seguintes equações:\na) 4 − x/3 = −2x + 2/3\nb) x⁴ − 6x² − 27 = 0\nc) cos(x + 30°) = 0; 0° ≤ x ≤ 90°",
passos: [
"a) Multiplicando por 3: 12 − x = −6x + 2, donde 5x = −10 e x = −2. Verificação: 4 − (−2)/3 = 4 + 2/3 = 14/3 e −2 · (−2) + 2/3 = 4 + 2/3 = 14/3 ✓.",
"b) Fazendo y = x²: y² − 6y − 27 = 0. O discriminante é 36 + 108 = 144; y = (6 ± 12)/2, donde y = 9 ou y = −3.",
"b) y = −3 é impossível (x² ≥ 0). De y = 9 vem x = 3 ou x = −3. Verificação: 81 − 54 − 27 = 0 ✓.",
"c) Com 0° ≤ x ≤ 90°, o ângulo x + 30° está entre 30° e 120°; o co-seno anula-se em 90°. Logo x + 30° = 90° e x = 60°. Verificação: cos(60° + 30°) = cos 90° = 0 ✓."
],
resposta: "a) S = {−2} · b) S = {−3; 3} · c) x = 60°" },
{ numero: 4, cotacao: "3,0",
enunciado: "Num inquérito feito a 400 pessoas sobre as emissoras de Rádio que habitualmente sintonizam, obteve-se o seguinte resultado. 230 pessoas sintonizam a emissora A, 200 sintonizam a emissora B e 40 sintonizam outras emissoras distintas de A e B.\na) Represente os dados num diagrama de Venn.\nb) Determine o número de pessoas que sintonizam somente a emissora A.",
passos: [
"As 40 pessoas que ouvem outras emissoras estão fora dos conjuntos A e B: o conjunto A ∪ B tem 400 − 40 = 360 pessoas.",
"Pela inclusão–exclusão: A ∩ B = 230 + 200 − 360 = 70 pessoas ouvem as duas emissoras.",
"b) Somente a emissora A = 230 − 70 = 160 pessoas. (E somente a B = 200 − 70 = 130.)",
"a) O diagrama fica: só A 160, A e B 70, só B 130 e, fora dos conjuntos, 40 — ver a figura desta resolução. Verificação: 160 + 70 + 130 + 40 = 400 ✓."
],
resposta: "b) 160 pessoas (diagrama: só A 160, ambas 70, só B 130, outras 40)" },
{ numero: 5, cotacao: "2,0",
enunciado: "Observe a figura. Sabe-se que: D é o ponto de encontro das bissectrizes; ∠A = 22° e ∠B = 54°. Calcule:\na) a medida do ângulo C.\nb) a medida do ângulo (BDA).",
passos: [
"a) Pela soma dos ângulos internos do triângulo: C = 180° − 22° − 54° = 104°.",
"b) No triângulo BDA, os ângulos junto a A e a B são as metades dos ângulos do triângulo (D está sobre as bissectrizes): ∠DAB = 22°/2 = 11° e ∠DBA = 54°/2 = 27°. Logo ∠BDA = 180° − 11° − 27° = 142°.",
"b) Verificação (propriedade do incentro): ∠BDA = 90° + C/2 = 90° + 52° = 142° ✓."
],
resposta: "a) ∠C = 104° · b) ∠BDA = 142°" },
{ numero: 6, cotacao: "4,5",
enunciado: "Observe a figura.\na) Qual é o zero da função f(x)?\nb) Qual é o contradomínio de g(x)?\nc) Para que valores de x, f(x) é crescente?\nd) Para que valores de x, tem-se: i) f(x) < g(x); ii) f(x) = g(x).\ne) Para que valores de x, f(x) é positiva?\nf) Determine a expressão analítica de f(x).",
passos: [
"Leitura do gráfico: f é a parábola com vértice (1, 0), que passa por (0, 1) e por (2, 1) (ponto assinalado a tracejado); g é a curva exponencial crescente que passa por (0, 1) e se aproxima do eixo Ox quando x → −∞. As duas curvas encontram-se no ponto (0, 1).",
"a) f anula-se no vértice: o zero de f é x = 1.",
"b) A exponencial g toma todos os valores positivos (nunca toca o eixo Ox): o contradomínio de g é ]0; +∞[.",
"c) f é crescente à direita do vértice: para x > 1 (intervalo [1; +∞[).",
"d) ii) As curvas encontram-se em (0, 1): f(x) = g(x) quando x = 0. i) À direita desse ponto, g fica sempre acima de f no desenho (por exemplo, em x = 2: g ≈ 4 e f = 1); à esquerda, f está acima de g. Logo f(x) < g(x) para x > 0.",
"e) A parábola está sobre o eixo Ox ou acima dele e só toca nele em x = 1: f(x) > 0 para todo o x ≠ 1, isto é, x ∈ ℝ ∖ {1}.",
"f) Com vértice (1, 0): f(x) = a(x − 1)². Passando por (0, 1): a = 1. Logo f(x) = (x − 1)² = x² − 2x + 1. Verificação: f(2) = 1 ✓ (o ponto a tracejado)."
],
resposta: "a) x = 1 · b) CD(g) = ]0; +∞[ · c) x > 1 · d) i) x > 0; ii) x = 0 · e) x ≠ 1 · f) f(x) = (x − 1)²" },
{ numero: 7, cotacao: "3,0",
enunciado: "Para a eleição do chefe de uma turma, candidataram-se cinco alunos. O gráfico a seguir mostra os resultados do processo de votação:\nResponda as questões que se seguem considerando que todos os alunos da turma participaram do processo de votação e que cada um votou em apenas um candidato.\na) Quantos alunos participaram da votação?\nb) Quantos alunos votaram no(a) vencedor(a)?\nc) Qual é o nome do(a) vencedor(a)?\nd) Determine a percentagem de votos do(a) segundo(a) classificado(a).",
passos: [
"Leitura das barras: Dinis 10 votos, Nely 20, Marta 5, Zeca 10 e Abel 15.",
"a) Como cada aluno votou uma só vez e todos participaram, o número de alunos é o total de votos: 10 + 20 + 5 + 10 + 15 = 60 alunos.",
"b) e c) A barra mais alta é a de Nely: a vencedora é Nely, com 20 votos.",
"d) O segundo classificado é Abel, com 15 votos. Percentagem: 15/60 = 0,25 = 25%.",
"Verificação: 20 + 15 + 10 + 10 + 5 = 60 ✓ e 25% de 60 = 15 ✓."
],
resposta: "a) 60 alunos · b) 20 votos · c) Nely · d) 25%" }
]
}
]);
