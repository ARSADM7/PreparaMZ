// PreparaMZ — Lote 5 de Matemática 10ª classe (2013, 2012 e 2011).
// Transcrição fiel das folhas oficiais (mozexames) verificada visualmente
// a 200/300 dpi (as seis folhas têm camada de texto, mas todas as
// expressões ambíguas foram confirmadas na imagem); resoluções próprias,
// passo a passo, com verificação por segundo método nas perguntas de
// cálculo. As cotações impressas somam exactamente 20,0 nos SEIS exames.
// Notas de leitura:
// - 2013 1ª Q8: os topos das quatro barras ficam SOBRE as linhas da
//   grelha (medição ao pixel a 300 dpi: 30, 40, 30, 20; total 120).
// - 2012 2ª Q5 b): a folha imprime «B \ C» sem definir nenhum conjunto
//   C. Como a pergunta fornece o universo U, a leitura adoptada é o
//   complementar de B em U = {a; b; g} (se fosse B \ A seria {e; f});
//   a anomalia está assinalada nos passos da resolução.
// - 2011 2ª Q4: a folha dá a área (45 cm²) e o excesso do lado sobre a
//   altura (1 cm); a resolução segue o modelo da própria folha —
//   sistema A = (l × h)/2 com l = h + 1 — que dá l = 10 cm e h = 9 cm.
// - O gráfico da Q7 de 2012 1ª é o mesmo desenho da Q7 de 2013 2ª
//   (parábola g de vértice (1, 4) e recta h por (0, 3) e (3, 0)), e o
//   da Q6 de 2011 2ª repete o mesmo par de funções.
window.EXAMES = (window.EXAMES || []).concat([
{
id: "mat-10-2013-1",
disciplina: "Matemática",
classe: "10ª Classe",
ano: 2013,
chamada: "1ª Época",
duracao: "120 Minutos",
totalPerguntas: 8,
fonteEnunciado: "Transcrição fiel do exame oficial ESG/2013 (1ª Época), verificada visualmente contra o PDF original do arquivo.",
originalPdf: "https://storage.mozexames.com/papers/fdeda38a-d598-4937-9094-a5d7ebdd8246/question.pdf",
perguntas: [
{ numero: 1, cotacao: "2,0",
enunciado: "Assinale com (V) verdadeiras ou (F) falsas as afirmações que se seguem:\na) −4 ∈ IR\nb) Q⁻ ⊂ IR⁻\nc) {1; 2} = [1; 2]\nd) IR⁺ ∩ IR⁻ = {0}",
passos: [
"a) −4 é um número inteiro negativo e todos os inteiros são reais: −4 ∈ IR. VERDADEIRA (V).",
"b) Q⁻ é o conjunto dos racionais negativos e IR⁻ o dos reais negativos; todo o racional negativo é um real negativo, logo Q⁻ ⊂ IR⁻. VERDADEIRA (V).",
"c) O conjunto {1; 2} tem apenas dois elementos, enquanto o intervalo [1; 2] contém infinitos números reais (1,5; 1,73; …). Não são iguais. FALSA (F).",
"d) IR⁺ = [0; +∞[ e IR⁻ = ]−∞; 0]: o único número comum aos dois conjuntos é o 0, logo a intersecção é {0}. VERDADEIRA (V)."
],
resposta: "a) V · b) V · c) F · d) V" },
{ numero: 2, cotacao: "2,0",
enunciado: "Resolva o seguinte sistema:\n{ (4x − 1)/2 − (x + 1)/3 ≤ 0\n{ 5 − 3(x + 1)/2 ≥ −1",
passos: [
"Primeira inequação: multiplicando por 6 (mmc de 2 e 3), 3(4x − 1) − 2(x + 1) ≤ 0, ou seja, 12x − 3 − 2x − 2 ≤ 0, donde 10x ≤ 5 e x ≤ 1/2.",
"Segunda inequação: multiplicando por 2, 10 − 3(x + 1) ≥ −2, ou seja, 10 − 3x − 3 ≥ −2, donde −3x ≥ −9 e x ≤ 3.",
"O sistema exige as duas condições ao mesmo tempo (intersecção): x ≤ 1/2 e x ≤ 3 equivale a x ≤ 1/2.",
"Verificação com x = 0: (−1)/2 − 1/3 = −5/6 ≤ 0 ✓ e 5 − 3/2 = 3,5 ≥ −1 ✓."
],
resposta: "S = ]−∞; 1/2]" },
{ numero: 3, cotacao: "4,0",
enunciado: "Determine o conjunto solução das seguintes equações:\na) 3x²(x² − 5) = 5 − x²\nb) cos x = cos(π/3 − x), se x ∈ ]0; π/2[",
passos: [
"a) Desenvolvendo: 3x⁴ − 15x² = 5 − x², ou seja, 3x⁴ − 14x² − 5 = 0. Com a substituição y = x² fica 3y² − 14y − 5 = 0.",
"a) Δ = (−14)² − 4·3·(−5) = 196 + 60 = 256 e √Δ = 16; y = (14 ± 16)/6, donde y = 5 ou y = −1/3. Como x² ≥ 0, rejeita-se y = −1/3 e fica x² = 5, ou seja, x = −√5 ou x = √5.",
"a) Verificação com x² = 5: 3·5·(5 − 5) = 0 e 5 − 5 = 0 ✓.",
"b) Dois ângulos com o mesmo co-seno são iguais ou simétricos: x = π/3 − x + 2kπ ou x = −(π/3 − x) + 2kπ. A segunda hipótese daria 0 = −π/3, impossível; da primeira, 2x = π/3 + 2kπ, ou seja, x = π/6 + kπ.",
"b) No intervalo ]0; π/2[ só serve x = π/6. Verificação: cos(π/6) = √3/2 e cos(π/3 − π/6) = cos(π/6) = √3/2 ✓."
],
resposta: "a) S = {−√5; √5} · b) x = π/6" },
{ numero: 4, cotacao: "2,0",
enunciado: "A soma dos quadrados de três números naturais consecutivos é 50. Determine esses números.",
passos: [
"Seja n o menor dos três números; os outros são n + 1 e n + 2. A condição do enunciado escreve-se: n² + (n + 1)² + (n + 2)² = 50.",
"Desenvolvendo: n² + n² + 2n + 1 + n² + 4n + 4 = 50, ou seja, 3n² + 6n + 5 = 50 e, dividindo por 3, n² + 2n − 15 = 0.",
"Δ = 4 + 60 = 64 e √Δ = 8; n = (−2 ± 8)/2, donde n = 3 ou n = −5. Como os números são naturais, fica n = 3.",
"Verificação: 3² + 4² + 5² = 9 + 16 + 25 = 50 ✓."
],
resposta: "3, 4 e 5" },
{ numero: 5, cotacao: "2,5",
enunciado: "Dos 50 participantes de uma conferência sobre Ciência e Tecnologias, 5 falam a língua inglesa e portuguesa, 20 falam a língua portuguesa e 3 não falam nenhuma das duas línguas.\na) Represente os dados num diagrama de Venn.\nb) Determine o número de participantes que falam somente a língua inglesa.",
passos: [
"Só falam português: dos 20 que falam português, 5 também falam inglês, logo só português = 20 − 5 = 15.",
"Falam pelo menos uma das línguas: 50 − 3 = 47 participantes.",
"Total que fala inglês: 47 − 15 = 32 (todos os que falam alguma língua, menos os que só falam português).",
"b) Só inglês = 32 − 5 = 27 (tira-se os 5 que falam as duas).",
"Verificação das regiões do diagrama: 27 (só inglês) + 5 (ambas) + 15 (só português) + 3 (nenhuma) = 50 ✓."
],
resposta: "a) Diagrama de Venn (ver figura da resolução) · b) 27 participantes" },
{ numero: 6, cotacao: "2,0",
enunciado: "Considere a figura:\nDetermine a medida da altura h.",
passos: [
"Na figura, o segmento EB mede 0,5 m e está sobre B, a 2 m de A (AB = 2 m); de B a C são 38 m, logo AC = 2 + 38 = 40 m. DC é a altura h procurada.",
"Os triângulos ABE e ACD são semelhantes: partilham o ângulo em A e têm ângulos rectos em B e em C (EB e DC são verticais sobre o mesmo solo AC).",
"Da semelhança: EB/DC = AB/AC, ou seja, 0,5/h = 2/40. Logo 2h = 0,5 × 40 = 20 e h = 10.",
"Verificação: a razão das distâncias é 2/40 = 1/20 e 0,5 × 20 = 10 ✓ (a altura é 20 vezes a do segmento de referência, como as distâncias ao ponto A)."
],
resposta: "h = 10 m" },
{ numero: 7, cotacao: "4,0",
enunciado: "Seja f o gráfico representado pela figura. Determine:\na) A equação do eixo de simetria do gráfico de f.\nb) O contradomínio de f.\nc) As coordenadas do vértice.\nd) A expressão analítica de f.",
passos: [
"No gráfico, a parábola corta o eixo Ox em x = 1 e x = 3 (zeros de f) e atinge o valor mínimo y = −1 (linha tracejada).",
"a) O eixo de simetria passa a meio dos zeros: x = (1 + 3)/2 = 2. Equação do eixo: x = 2.",
"c) O vértice é o ponto do eixo de simetria com ordenada mínima: V(2; −1).",
"b) Como a parábola abre para cima e o valor mínimo é −1, o contradomínio é CD(f) = [−1; +∞[.",
"d) Na forma do vértice, f(x) = a(x − 2)² − 1. O gráfico passa por (0; 3): a(0 − 2)² − 1 = 3, ou seja, 4a = 4 e a = 1. Logo f(x) = (x − 2)² − 1 = x² − 4x + 3.",
"d) Verificação: x² − 4x + 3 = 0 ⇔ (x − 1)(x − 3) = 0, zeros 1 e 3, como no gráfico ✓."
],
resposta: "a) x = 2 · b) CD(f) = [−1; +∞[ · c) V(2; −1) · d) f(x) = x² − 4x + 3" },
{ numero: 8, cotacao: "1,5",
enunciado: "No gráfico está representado o número de praticantes de quatro modalidades desportivas de um clube escolar.\na) Tendo em conta que cada aluno pratica apenas uma modalidade, calcule o número total de praticantes das quatro modalidades.\nb) Qual é a modalidade que mais se pratica?",
passos: [
"Leitura das alturas das barras (os topos ficam sobre as linhas da grelha): Andebol = 30 alunos; Basquetebol = 40 alunos; Futebol = 30 alunos; Atletismo = 20 alunos.",
"a) Como cada aluno pratica apenas uma modalidade, somam-se as quatro barras: 30 + 40 + 30 + 20 = 120 praticantes.",
"b) A barra mais alta é a do Basquetebol (40 alunos), logo é a modalidade que mais se pratica."
],
resposta: "a) 120 praticantes · b) Basquetebol" }
]
},
{
id: "mat-10-2013-2",
disciplina: "Matemática",
classe: "10ª Classe",
ano: 2013,
chamada: "2ª Época",
duracao: "120 Minutos",
totalPerguntas: 7,
fonteEnunciado: "Transcrição fiel do exame oficial ESG/2013 (2ª Época), verificada visualmente contra o PDF original do arquivo.",
originalPdf: "https://storage.mozexames.com/papers/e356e6f4-ae02-49be-8715-d5611e28524d/question.pdf",
perguntas: [
{ numero: 1, cotacao: "2,0",
enunciado: "Dados os conjuntos A = {2, 4, 6} e B = {2, 6}, assinale com (V) verdadeiras ou (F) falsas as afirmações que se seguem:\na) 3 ∈ B\nb) A = B\nc) A ∩ B = {2; 6}\nd) A ∪ B = {2; 4; 6}",
passos: [
"a) Os elementos de B são apenas 2 e 6; o 3 não pertence a B. FALSA (F).",
"b) O 4 pertence a A mas não pertence a B, logo os conjuntos não são iguais. FALSA (F).",
"c) Os elementos comuns a A e a B são 2 e 6: A ∩ B = {2; 6}. VERDADEIRA (V).",
"d) Juntando os elementos dos dois conjuntos sem repetir: A ∪ B = {2; 4; 6}. VERDADEIRA (V)."
],
resposta: "a) F · b) F · c) V · d) V" },
{ numero: 2, cotacao: "3,0",
enunciado: "Determine:\na) [lg(1/100) + (10⁻²)⁰] / tg(π/4)\nb) ∛27 + ∛81 − 3∛3 − 9",
passos: [
"a) lg(1/100) = lg(10⁻²) = −2; qualquer potência de expoente 0 vale 1, logo (10⁻²)⁰ = 1; e tg(π/4) = 1.",
"a) Substituindo: (−2 + 1)/1 = −1.",
"b) ∛27 = 3 (porque 3³ = 27) e ∛81 = ∛(27 × 3) = 3∛3. A expressão fica 3 + 3∛3 − 3∛3 − 9 = −6.",
"b) Verificação numérica: ∛81 ≈ 4,33 e 3∛3 ≈ 4,33, logo 3 + 4,33 − 4,33 − 9 = −6 ✓."
],
resposta: "a) −1 · b) −6" },
{ numero: 3, cotacao: "2,5",
enunciado: "Resolva em IR as seguintes equações:\na) 1/x − 1/(x + 2) = 1/4\nb) 2 cos x − √3 = 0, sabendo que x ∈ [0; π/2]",
passos: [
"a) Domínio: x ≠ 0 e x ≠ −2. Reduzindo ao mesmo denominador: [(x + 2) − x] / [x(x + 2)] = 1/4, ou seja, 2/(x² + 2x) = 1/4.",
"a) Multiplicando cruzado: x² + 2x = 8, ou seja, x² + 2x − 8 = 0. Δ = 4 + 32 = 36 e x = (−2 ± 6)/2, donde x = 2 ou x = −4 (ambos dentro do domínio).",
"a) Verificação: x = 2: 1/2 − 1/4 = 1/4 ✓; x = −4: −1/4 − (−1/2) = 1/4 ✓.",
"b) 2 cos x = √3, ou seja, cos x = √3/2. No intervalo [0; π/2] o ângulo com este co-seno é x = π/6.",
"b) Verificação: 2 cos(π/6) − √3 = 2 × (√3/2) − √3 = 0 ✓."
],
resposta: "a) S = {−4; 2} · b) x = π/6" },
{ numero: 4, cotacao: "2,5",
enunciado: "Numa turma de 10ª classe, 60% gostam de futebol, 46% gostam de basquetebol e 32% não gostam nem de futebol e nem de basquetebol.\na) Represente os dados num diagrama de Venn.\nb) Calcule a percentagem de alunos que gostam de futebol e de basquetebol.",
passos: [
"Quem gosta de pelo menos uma modalidade: 100% − 32% = 68% (é a reunião F ∪ B).",
"b) Pela regra da reunião: F ∪ B = F + B − (F ∩ B), ou seja, 68% = 60% + 46% − (F ∩ B), donde F ∩ B = 106% − 68% = 38%.",
"a) Regiões do diagrama: só futebol = 60% − 38% = 22%; ambas = 38%; só basquetebol = 46% − 38% = 8%; nenhuma = 32%.",
"Verificação: 22% + 38% + 8% + 32% = 100% ✓."
],
resposta: "a) Diagrama de Venn (ver figura da resolução) · b) 38%" },
{ numero: 5, cotacao: "3,0",
enunciado: "O quadrado ABCD está inscrito numa circunferência como mostra a figura. Determine:\na) O raio da circunferência, sabendo que o lado do quadrado mede 5√2 cm.\nb) A área da parte sombreada.",
passos: [
"a) Num quadrado inscrito, a diagonal do quadrado coincide com o diâmetro da circunferência. A diagonal mede lado × √2 = 5√2 × √2 = 10 cm.",
"a) Raio = diâmetro/2 = 10/2 = 5 cm. (Verificação por Pitágoras: diagonal = √(50 + 50) = √100 = 10 ✓.)",
"b) Área da circunferência: π × r² = π × 25 = 25π ≈ 78,5 cm². Área do quadrado: (5√2)² = 50 cm².",
"b) A parte sombreada é a circunferência menos o quadrado: 25π − 50 ≈ 78,5 − 50 = 28,5 cm²."
],
resposta: "a) r = 5 cm · b) Área sombreada = 25π − 50 ≈ 28,5 cm²" },
{ numero: 6, cotacao: "2,0",
enunciado: "O pictograma a seguir representa as quantidades de refrigerantes vendidos por um grupo de finalistas da 12ª classe para juntar dinheiro para seu baile. Cada figura representa 100 refrigerantes e cada um deles custa 10,00Mt.\na) Qual foi a marca mais vendida?\nb) Qual foi o total das vendas da marca B?\nc) Quanto é que o grupo ganhou com a venda das 3 marcas de refrigerantes?",
passos: [
"Contagem das figuras do pictograma: marca A tem 4 figuras, marca B tem 3 figuras e marca C tem 2 figuras. Como cada figura vale 100 refrigerantes: A = 400, B = 300 e C = 200 refrigerantes.",
"a) A marca com mais figuras é a A (400 refrigerantes): foi a mais vendida.",
"b) A marca B vendeu 3 × 100 = 300 refrigerantes.",
"c) Total vendido: 400 + 300 + 200 = 900 refrigerantes. A 10,00Mt cada: 900 × 10,00 = 9 000,00Mt."
],
resposta: "a) Marca A · b) 300 refrigerantes · c) 9 000,00 Mt" },
{ numero: 7, cotacao: "5,0",
enunciado: "Considere a figura abaixo e responda às questões que se seguem:\na) Qual é o contradomínio de g?\nb) Quais são os zeros de g?\nc) Qual é o valor de (c) em g(x) = ax² + bx + c?\nd) Escreva a equação do eixo de simetria do gráfico de g.\ne) Estude a monotonia e a variação de sinal de g.\nf) Resolva graficamente: i) g(x) = h(x)  ii) g(x) > h(x)",
passos: [
"Na figura, g é a parábola de vértice (1; 4) que corta Ox em −1 e 3 e Oy em 3; h é a recta que passa por (0; 3) e (3; 0).",
"b) Os zeros de g são os pontos onde a parábola corta Ox: x = −1 e x = 3.",
"a) A parábola abre para baixo e o valor máximo é 4, logo o contradomínio é CD(g) = ]−∞; 4].",
"c) c é o valor de g em x = 0 (intersecção com Oy): c = 3.",
"d) O eixo de simetria passa pelo vértice: x = 1 (também é a média dos zeros: (−1 + 3)/2 = 1).",
"e) Monotonia: g é crescente em ]−∞; 1] e decrescente em [1; +∞[. Variação de sinal: g(x) > 0 em ]−1; 3[; g(x) = 0 em x = −1 e x = 3; g(x) < 0 em ]−∞; −1[ ∪ ]3; +∞[.",
"f) As curvas cruzam-se em (0; 3) e em (3; 0): i) g(x) = h(x) para x = 0 e x = 3. ii) Entre esses pontos a parábola está acima da recta: g(x) > h(x) em ]0; 3[.",
"Verificação pela expressão: do vértice, g(x) = a(x − 1)² + 4 e, passando por (0; 3), a = −1, logo g(x) = −x² + 2x + 3; a recta é h(x) = −x + 3. Igualando: −x² + 2x + 3 = −x + 3 ⇔ x² − 3x = 0 ⇔ x = 0 ou x = 3 ✓."
],
resposta: "a) CD(g) = ]−∞; 4] · b) −1 e 3 · c) c = 3 · d) x = 1 · e) Crescente em ]−∞; 1], decrescente em [1; +∞[; g(x) > 0 em ]−1; 3[ · f) i) x = 0 e x = 3 · ii) ]0; 3[" }
]
},
{
id: "mat-10-2012-1",
disciplina: "Matemática",
classe: "10ª Classe",
ano: 2012,
chamada: "1ª Época",
duracao: "120 Minutos",
totalPerguntas: 8,
fonteEnunciado: "Transcrição fiel do exame oficial ESG/2012 (1ª Época), verificada visualmente contra o PDF original do arquivo.",
originalPdf: "https://storage.mozexames.com/papers/18dec382-ee84-45e1-bbd1-b31fb8490318/question.pdf",
perguntas: [
{ numero: 1, cotacao: "2,0",
enunciado: "Assinale com (V) verdadeiras ou (F) falsas as afirmações que se seguem:\na) |−5| < 2\nb) O diâmetro duma circunferência é sempre maior do que o comprimento de qualquer das suas cordas.\nc) √5/√2 = √10/2\nd) log₅ 16 = log₅ 8 + log₅ 2",
passos: [
"a) |−5| = 5 e 5 < 2 é mentira. FALSA (F).",
"b) O diâmetro é a maior corda da circunferência: mede mais do que qualquer outra corda (todas as outras cordas são mais curtas do que o diâmetro). VERDADEIRA (V).",
"c) Racionalizando: √5/√2 = (√5 × √2)/(√2 × √2) = √10/2. VERDADEIRA (V). Verificação pelos quadrados: (√5/√2)² = 5/2 e (√10/2)² = 10/4 = 5/2 ✓.",
"d) Pela propriedade do logaritmo do produto: log₅ 8 + log₅ 2 = log₅ (8 × 2) = log₅ 16. VERDADEIRA (V)."
],
resposta: "a) F · b) V · c) V · d) V" },
{ numero: 2, cotacao: "3,0",
enunciado: "Calcule o valor das seguintes expressões:\na) [(−1 + 5/3)⁻²]³ ÷ [(1/3)³]⁻²\nb) lg 0,0001 + sen(π/6)\nc) √12 + √75",
passos: [
"a) Primeiro parêntese: −1 + 5/3 = 2/3. (2/3)⁻² = (3/2)² = 9/4 e (9/4)³ = 729/64.",
"a) Segundo parêntese: (1/3)³ = 1/27 e (1/27)⁻² = 27² = 729.",
"a) Divisão: (729/64) ÷ 729 = 729/(64 × 729) = 1/64.",
"b) lg 0,0001 = lg(10⁻⁴) = −4 e sen(π/6) = 1/2. Total: −4 + 1/2 = −3,5.",
"c) √12 = √(4 × 3) = 2√3 e √75 = √(25 × 3) = 5√3. Soma: 2√3 + 5√3 = 7√3."
],
resposta: "a) 1/64 · b) −3,5 · c) 7√3" },
{ numero: 3, cotacao: "3,5",
enunciado: "Resolva:\na) { 3x + y = 1 ; 2x − 3y = 8 }\nb) 3 cotg x − √3 = 0, com 0° ≤ x ≤ 90°",
passos: [
"a) Da primeira equação: y = 1 − 3x. Substituindo na segunda: 2x − 3(1 − 3x) = 8, ou seja, 2x − 3 + 9x = 8, donde 11x = 11 e x = 1.",
"a) y = 1 − 3 × 1 = −2. Verificação: 3(1) + (−2) = 1 ✓ e 2(1) − 3(−2) = 2 + 6 = 8 ✓.",
"b) 3 cotg x = √3, ou seja, cotg x = √3/3. Como cotg x = 1/tg x, fica tg x = 3/√3 = √3, donde x = 60° (dentro de [0°; 90°]).",
"b) Verificação: cotg 60° = 1/√3 = √3/3 e 3 × (√3/3) − √3 = 0 ✓."
],
resposta: "a) S = {(1; −2)} · b) x = 60°" },
{ numero: 4, cotacao: "2,0",
enunciado: "Resolva a seguinte equação: 48x² = 3x⁴",
passos: [
"Passando tudo para o primeiro membro: 3x⁴ − 48x² = 0. Factorizando 3x²: 3x²(x² − 16) = 0.",
"Um produto é zero quando um dos factores é zero: 3x² = 0, donde x = 0; ou x² − 16 = 0, donde x² = 16 e x = ±4.",
"Verificação com x = 4: 48 × 16 = 768 e 3 × 4⁴ = 3 × 256 = 768 ✓ (com x = −4 é igual, por serem potências pares)."
],
resposta: "S = {−4; 0; 4}" },
{ numero: 5, cotacao: "1,5",
enunciado: "A figura representa os alunos duma Escola de Música que tocam guitarra G, piano P e violino V. De acordo com a figura, quantos alunos tocam:\na) Guitarra?\nb) Apenas piano e violino?\nc) Apenas piano?",
passos: [
"As regiões do diagrama de Venn da figura são: só P = 47; só G = 75; só V = 37; P e G (sem V) = 55; P e V (sem G) = 13; G e V (sem P) = 15; os três instrumentos = 5.",
"a) Quem toca guitarra está em quatro regiões: 75 (só G) + 55 (G e P) + 15 (G e V) + 5 (os três) = 150 alunos.",
"b) «Apenas piano e violino» é a região comum a P e V sem a guitarra: 13 alunos.",
"c) «Apenas piano» é a região exclusiva de P: 47 alunos."
],
resposta: "a) 150 alunos · b) 13 alunos · c) 47 alunos" },
{ numero: 6, cotacao: "2,0",
enunciado: "Dada a equação x² − 4x + 5 − m = 0, determine m de modo que a equação admita duas raízes reais de sinais contrários.",
passos: [
"Numa equação ax² + bx + c = 0, o produto das raízes é c/a. Aqui o produto é (5 − m)/1 = 5 − m.",
"Raízes com sinais contrários têm produto negativo: 5 − m < 0, ou seja, m > 5.",
"Falta garantir que as raízes são reais: Δ = (−4)² − 4(5 − m) = 4m − 4; para m > 5 tem-se Δ > 16 > 0, logo há sempre duas raízes reais distintas. A condição final é só m > 5.",
"Verificação com m = 6: x² − 4x − 1 = 0 tem raízes 2 ± √5, uma negativa (2 − √5 < 0) e outra positiva, com produto −1 < 0 ✓."
],
resposta: "m > 5" },
{ numero: 7, cotacao: "3,0",
enunciado: "Observa a figura e determine:\na) Os zeros da função g(x).\nb) Os valores de x tal que g(x) = h(x).\nc) Os valores de x tal que g(x) > h(x).\nd) A expressão analítica de g(x).",
passos: [
"Na figura, g é a parábola de vértice (1; 4) que corta Ox em −1 e 3 e Oy em 3; h é a recta que passa por (0; 3) e (3; 0).",
"a) Os zeros de g são as intersecções com Ox: x = −1 e x = 3.",
"b) As curvas cruzam-se nos pontos (0; 3) e (3; 0): g(x) = h(x) para x = 0 e x = 3.",
"c) Entre os cruzamentos, a parábola está acima da recta: g(x) > h(x) em ]0; 3[.",
"d) Na forma do vértice: g(x) = a(x − 1)² + 4. Passando por (0; 3): a + 4 = 3, donde a = −1. Logo g(x) = −(x − 1)² + 4 = −x² + 2x + 3.",
"d) Verificação: −x² + 2x + 3 = 0 ⇔ x² − 2x − 3 = 0 ⇔ (x − 3)(x + 1) = 0, zeros 3 e −1, como na figura ✓."
],
resposta: "a) −1 e 3 · b) x = 0 e x = 3 · c) ]0; 3[ · d) g(x) = −x² + 2x + 3" },
{ numero: 8, cotacao: "3,0",
enunciado: "A tabela mostra as classificações de uma turma da 10ª classe no exame de Matemática:\nClassificações: 7 (5 alunos), 8 (7 alunos), 10 (20 alunos), 13 (12 alunos), 14 (6 alunos).\nCom base na tabela, determine:\na) A moda.\nb) A média aritmética.\nc) A percentagem de alunos com classificações positivas.",
passos: [
"Total de alunos: 5 + 7 + 20 + 12 + 6 = 50.",
"a) A moda é a classificação com maior frequência: 10 valores, com 20 alunos.",
"b) Média = (5×7 + 7×8 + 20×10 + 12×13 + 6×14)/50 = (35 + 56 + 200 + 156 + 84)/50 = 531/50 = 10,62 valores.",
"c) Classificações positivas (≥ 10): 20 + 12 + 6 = 38 alunos. Percentagem: 38/50 × 100 = 76%."
],
resposta: "a) Moda = 10 valores · b) Média = 10,62 valores · c) 76%" }
]
},
{
id: "mat-10-2012-2",
disciplina: "Matemática",
classe: "10ª Classe",
ano: 2012,
chamada: "2ª Época",
duracao: "120 Minutos",
totalPerguntas: 8,
fonteEnunciado: "Transcrição fiel do exame oficial ESG/2012 (2ª Época), verificada visualmente contra o PDF original do arquivo.",
originalPdf: "https://storage.mozexames.com/papers/5f8588ad-dcca-4e12-b4e6-bf0f1fda0e99/question.pdf",
perguntas: [
{ numero: 1, cotacao: "1,5",
enunciado: "Calcule o valor numérico das seguintes expressões:\na) (1/2)⁵ ÷ (1/2)³ · (4/3)²\nb) (√5 + 1)(√5 − 1)\nc) 2 log₂ 4² − log₃ 9 + 5",
passos: [
"a) Na divisão de potências da mesma base subtraem-se os expoentes: (1/2)⁵ ÷ (1/2)³ = (1/2)² = 1/4. E (4/3)² = 16/9. Produto: 1/4 × 16/9 = 16/36 = 4/9.",
"b) É um produto notável (soma pela diferença): (√5 + 1)(√5 − 1) = (√5)² − 1² = 5 − 1 = 4.",
"c) log₂ 4² = log₂ 16 = 4 (porque 2⁴ = 16) e log₃ 9 = 2 (porque 3² = 9). Total: 2 × 4 − 2 + 5 = 11."
],
resposta: "a) 4/9 · b) 4 · c) 11" },
{ numero: 2, cotacao: "2,5",
enunciado: "Considere os seguintes polinómios: A(x) = 3x² − 2x; B(x) = (1/2)x − 1/10 e C(x) = 2x. Calcule:\na) 2A(x) + B(x)\nb) A(x) · C(x)",
passos: [
"a) 2A(x) = 6x² − 4x. Somando B(x): 6x² − 4x + (1/2)x − 1/10 = 6x² − 7/2 x − 1/10.",
"a) Verificação com x = 1: 2A(1) + B(1) = 2(3 − 2) + (1/2 − 1/10) = 2 + 0,4 = 2,4; pela expressão: 6 − 7/2 − 1/10 = 6 − 3,5 − 0,1 = 2,4 ✓.",
"b) A(x) · C(x) = (3x² − 2x)(2x) = 6x³ − 4x².",
"b) Verificação com x = 1: A(1) × C(1) = 1 × 2 = 2 e 6 − 4 = 2 ✓."
],
resposta: "a) 6x² − 7/2 x − 1/10 · b) 6x³ − 4x²" },
{ numero: 3, cotacao: "3,0",
enunciado: "Considere a equação 3x² − (m + 1)x + m − 2 = 0. Determine o valor de m de modo que:\na) A equação tenha duas raízes reais iguais.\nb) O produto das raízes seja igual a 3/2.",
passos: [
"a) Raízes reais iguais exigem Δ = 0. Δ = (m + 1)² − 4 × 3 × (m − 2) = m² + 2m + 1 − 12m + 24 = m² − 10m + 25 = (m − 5)².",
"a) (m − 5)² = 0 ⇔ m = 5. Verificação: com m = 5 a equação é 3x² − 6x + 3 = 3(x − 1)² = 0, com raiz dupla x = 1 ✓.",
"b) O produto das raízes é c/a = (m − 2)/3. Impondo (m − 2)/3 = 3/2: m − 2 = 9/2, donde m = 13/2.",
"b) Verificação: (13/2 − 2)/3 = (9/2)/3 = 3/2 ✓."
],
resposta: "a) m = 5 · b) m = 13/2" },
{ numero: 4, cotacao: "2,5",
enunciado: "Resolva:\na) x⁴ − 8x² + 16 = 0\nb) 3x + 1 ≥ (1/2)x − 4",
passos: [
"a) A expressão é um quadrado perfeito: x⁴ − 8x² + 16 = (x² − 4)². A equação fica (x² − 4)² = 0, ou seja, x² = 4 e x = ±2 (cada um é raiz dupla).",
"a) Verificação com x = 2: 16 − 8 × 4 + 16 = 16 − 32 + 16 = 0 ✓.",
"b) Multiplicando por 2: 6x + 2 ≥ x − 8, ou seja, 5x ≥ −10 e x ≥ −2.",
"b) Verificação no extremo x = −2: 3(−2) + 1 = −5 e (1/2)(−2) − 4 = −5: há igualdade, e o extremo pertence à solução por ser ≥ ✓."
],
resposta: "a) S = {−2; 2} · b) S = [−2; +∞[" },
{ numero: 5, cotacao: "2,0",
enunciado: "Seja U = {a, b, c, d, e, f, g} o universo dos conjuntos A = {a, b, c, d} e B = {c, d, e, f}. Determine:\na) A ∩ B\nb) B \\ C [a folha imprime «B \\ C» sem definir o conjunto C — ver a nota na resolução]",
passos: [
"a) Os elementos comuns a A e a B são c e d: A ∩ B = {c; d}.",
"b) NOTA DE LEITURA: a folha pede «B \\ C», mas nenhum conjunto C é definido no enunciado — é um lapso da própria folha oficial. Como a pergunta fornece o universo U (que só é necessário para complementares), a leitura adoptada é o complementar de B em U: os elementos de U que não estão em B são a, b e g.",
"b) Resultado adoptado: {a; b; g}. (Se a intenção fosse a diferença B \\ A, o resultado seria {e; f} — fica registado para transparência.)"
],
resposta: "a) {c; d} · b) {a; b; g} (complementar de B em U — ver nota nos passos)" },
{ numero: 6, cotacao: "3,5",
enunciado: "Considere o gráfico abaixo.\na) Qual é o domínio e o contradomínio da função?\nb) Quais são as coordenadas do vértice?\nc) Escreva a equação do eixo de simetria.\nd) Faça o estudo da variação do sinal da função.",
passos: [
"No gráfico, f é uma parábola voltada para baixo, com vértice no ponto mais alto (2; 4), que corta Ox em x = 0 e x = 4.",
"a) A parábola está definida para todos os valores reais de x: D(f) = IR. O valor máximo é 4, logo o contradomínio é CD(f) = ]−∞; 4].",
"b) O vértice lê-se directamente do gráfico (ponto assinalado com as linhas tracejadas): V(2; 4).",
"c) O eixo de simetria é a recta vertical que passa pelo vértice: x = 2.",
"d) Variação do sinal: f(x) = 0 em x = 0 e x = 4; f(x) > 0 entre os zeros, em ]0; 4[; f(x) < 0 fora deles, em ]−∞; 0[ ∪ ]4; +∞[.",
"d) Verificação pela expressão: do vértice, f(x) = a(x − 2)² + 4; passando pela origem, 4a + 4 = 0, donde a = −1 e f(x) = −x² + 4x, cujos zeros são 0 e 4 ✓."
],
resposta: "a) D(f) = IR e CD(f) = ]−∞; 4] · b) V(2; 4) · c) x = 2 · d) f(x) > 0 em ]0; 4[ e f(x) < 0 em ]−∞; 0[ ∪ ]4; +∞[" },
{ numero: 7, cotacao: "2,0",
enunciado: "Observe atentamente a figura e calcule:\na) A altura (h).\nb) A sua área.",
passos: [
"Na figura, o triângulo ABC tem AC = BC = 5 cm e base AB = 6 cm. Num triângulo isósceles, a altura a partir de C cai no ponto médio da base: AD = DB = 3 cm.",
"a) Pelo teorema de Pitágoras no triângulo rectângulo ADC: h² + 3² = 5², ou seja, h² = 25 − 9 = 16 e h = 4 cm.",
"b) Área = (base × altura)/2 = (6 × 4)/2 = 12 cm².",
"Verificação: 3-4-5 é um terno pitagórico clássico (3² + 4² = 5²) ✓."
],
resposta: "a) h = 4 cm · b) Área = 12 cm²" },
{ numero: 8, cotacao: "3,0",
enunciado: "Nas eleições municipais estavam inscritos 4000 eleitores, dos quais 34% votaram no partido A, 1200 no partido B, 10% abstiveram-se e os restantes votaram no partido C. Determine:\na) O número de eleitores que votaram no partido A.\nb) A percentagem de eleitores que votaram no partido B.\nc) O número de eleitores que votaram no partido C.",
passos: [
"a) Partido A: 34% de 4000 = 0,34 × 4000 = 1360 eleitores.",
"b) Partido B: 1200 de 4000 eleitores corresponde a 1200/4000 × 100 = 30%.",
"Abstenções: 10% de 4000 = 400 eleitores.",
"c) Partido C (os restantes): 4000 − 1360 − 1200 − 400 = 1040 eleitores.",
"Verificação pelas percentagens: C = 100% − 34% − 30% − 10% = 26% e 26% de 4000 = 1040 ✓."
],
resposta: "a) 1360 eleitores · b) 30% · c) 1040 eleitores" }
]
},
{
id: "mat-10-2011-1",
disciplina: "Matemática",
classe: "10ª Classe",
ano: 2011,
chamada: "1ª Época",
duracao: "120 Minutos",
totalPerguntas: 8,
fonteEnunciado: "Transcrição fiel do exame oficial ESG/2011 (1ª Época), verificada visualmente contra o PDF original do arquivo.",
originalPdf: "https://storage.mozexames.com/papers/8226db88-2123-400c-822b-785743646abb/question.pdf",
perguntas: [
{ numero: 1, cotacao: "2,0",
enunciado: "Assinale com (V) verdadeiras ou (F) falsas as afirmações que se seguem:\na) 3^(3/4) = ⁴√27\nb) 2³ + 3³ = 5⁶\nc) {1; 2} = [1; 2]\nd) cos 60° = sen 30°",
passos: [
"a) ⁴√27 = 27^(1/4) = (3³)^(1/4) = 3^(3/4). Os dois membros são iguais. VERDADEIRA (V).",
"b) 2³ + 3³ = 8 + 27 = 35, enquanto 5⁶ = 15 625. Não são iguais. FALSA (F).",
"c) {1; 2} é um conjunto com dois elementos; [1; 2] é um intervalo com infinitos números reais. FALSA (F).",
"d) cos 60° = 1/2 e sen 30° = 1/2 (ângulos complementares têm co-seno e seno trocados). VERDADEIRA (V)."
],
resposta: "a) V · b) F · c) F · d) V" },
{ numero: 2, cotacao: "2,5",
enunciado: "Determine o valor numérico das seguintes expressões:\na) ∛64 − √81 + ⁴√(2⁸)\nb) sen 30°/cos 45° + 1/(cos 45° × tg 45°)",
passos: [
"a) ∛64 = 4 (porque 4³ = 64); √81 = 9; ⁴√(2⁸) = 2^(8/4) = 2² = 4. Total: 4 − 9 + 4 = −1.",
"b) sen 30° = 1/2 e cos 45° = √2/2. Primeira parcela: (1/2)/(√2/2) = 1/√2 = √2/2.",
"b) tg 45° = 1, logo a segunda parcela é 1/((√2/2) × 1) = 2/√2 = √2.",
"b) Soma: √2/2 + √2 = 3√2/2. Verificação numérica: 0,707 + 1,414 = 2,121 e 3√2/2 ≈ 2,121 ✓."
],
resposta: "a) −1 · b) 3√2/2" },
{ numero: 3, cotacao: "1,0",
enunciado: "Determine o valor de m de modo que o polinómio p(x) = (m + 4)x³ + 2x² + x + 1 seja do segundo grau.",
passos: [
"Para o polinómio ser do 2.º grau, o termo de grau 3 tem de desaparecer: o coeficiente de x³ tem de ser zero.",
"m + 4 = 0, ou seja, m = −4.",
"Verificação: com m = −4, p(x) = 0x³ + 2x² + x + 1 = 2x² + x + 1, que é de facto do 2.º grau ✓."
],
resposta: "m = −4" },
{ numero: 4, cotacao: "1,7",
enunciado: "Calcule o produto do polinómio p(x) = x³ − 4x² + x + 6 por x + 3.",
passos: [
"Multiplica-se cada termo de p(x) por x e por 3: x × p(x) = x⁴ − 4x³ + x² + 6x; 3 × p(x) = 3x³ − 12x² + 3x + 18.",
"Somando e juntando os termos semelhantes: x⁴ + (−4 + 3)x³ + (1 − 12)x² + (6 + 3)x + 18 = x⁴ − x³ − 11x² + 9x + 18.",
"Verificação com x = 1: p(1) = 1 − 4 + 1 + 6 = 4 e (1 + 3) = 4, donde o produto deve ser 16. Pela expressão: 1 − 1 − 11 + 9 + 18 = 16 ✓."
],
resposta: "x⁴ − x³ − 11x² + 9x + 18" },
{ numero: 5, cotacao: "2,0",
enunciado: "Resolva a equação 2 sen x − 1 = 0, sabendo que x ∈ [0; π].",
passos: [
"Isolando: 2 sen x = 1, ou seja, sen x = 1/2.",
"No intervalo [0; π] há dois ângulos com seno 1/2: x = π/6 (30°) e x = π − π/6 = 5π/6 (150°), por simetria do seno em relação a π/2.",
"Verificação: sen(5π/6) = sen(30°) = 1/2, logo 2 × (1/2) − 1 = 0 ✓."
],
resposta: "S = {π/6; 5π/6}" },
{ numero: 6, cotacao: "4,0",
enunciado: "Dos 35 alunos de uma turma da 10ª classe, 20 gostam de Biologia, 26 gostam de Matemática e 14 gostam de Matemática e de Biologia.\na) Represente os dados num diagrama de Venn.\nb) Quantos alunos não gostam de nenhuma das disciplinas?\nc) Quantos alunos gostam de Biologia ou de Matemática?\nd) Qual é a percentagem dos alunos que gostam de Biologia?",
passos: [
"Regiões do diagrama: ambas as disciplinas = 14; só Biologia = 20 − 14 = 6; só Matemática = 26 − 14 = 12.",
"c) Biologia ou Matemática (reunião): 6 + 14 + 12 = 32 alunos.",
"b) Nenhuma das duas: 35 − 32 = 3 alunos.",
"d) Percentagem que gosta de Biologia: 20/35 × 100 ≈ 57,1%.",
"Verificação: 6 + 14 + 12 + 3 = 35 ✓ e os totais batem certo (Biologia 6 + 14 = 20; Matemática 12 + 14 = 26) ✓."
],
resposta: "b) 3 alunos · c) 32 alunos · d) ≈ 57,1%" },
{ numero: 7, cotacao: "4,5",
enunciado: "Numa escola do ensino secundário foram seleccionados 20 alunos, ao acaso, para se fazer uma investigação sobre a altura dos alunos da escola. Os resultados obtidos foram os seguintes: 168; 160; 168; 175; 175; 160; 165; 154; 160; 165; 168; 168; 154; 168; 160; 160; 160; 168; 168; 154.\nA tabela de frequências tem: 154 cm → fi = 3, fr = C; 160 cm → fi = A, fr = 30%; 165 cm → fi = 2, fr = 10%; 168 cm → fi = B, fr = D; 175 cm → fi = 2, fr = 10%.\na) Quais são os valores de A, B, C e D da tabela acima?\nb) Determine a altura média dos alunos.\nc) Qual é a moda das alturas?",
passos: [
"Contando os valores da lista: 154 aparece 3 vezes; 160 aparece 6 vezes; 165 aparece 2 vezes; 168 aparece 7 vezes; 175 aparece 2 vezes. Total: 3 + 6 + 2 + 7 + 2 = 20 ✓.",
"a) A = 6 (nº de alunos com 160 cm) e B = 7 (nº de alunos com 168 cm). C = 3/20 × 100 = 15% e D = 7/20 × 100 = 35%.",
"b) Altura média = (154×3 + 160×6 + 165×2 + 168×7 + 175×2)/20 = (462 + 960 + 330 + 1176 + 350)/20 = 3278/20 = 163,9 cm.",
"c) A moda é a altura com maior frequência: 168 cm (7 alunos)."
],
resposta: "a) A = 6, B = 7, C = 15% e D = 35% · b) 163,9 cm · c) Moda = 168 cm" },
{ numero: 8, cotacao: "2,3",
enunciado: "Considere o gráfico da função f(x) = ax + b representado na figura abaixo. Determine:\na) O sinal de a.\nb) O valor de b.\nc) A variação do sinal da função.\nd) A expressão analítica de f(x).",
passos: [
"No gráfico, a recta é decrescente e corta o eixo Oy em y = 1 e o eixo Ox em x = 1.",
"a) Uma recta decrescente tem declive negativo: a < 0.",
"b) b é a intersecção com o eixo Oy: b = 1.",
"d) Com os pontos (0; 1) e (1; 0): a = (0 − 1)/(1 − 0) = −1. Logo f(x) = −x + 1. Verificação: em x = −3 o gráfico marca cerca de 4 e −(−3) + 1 = 4 ✓.",
"c) Variação do sinal: f(x) = 0 em x = 1; f(x) > 0 para x < 1; f(x) < 0 para x > 1."
],
resposta: "a) a < 0 (negativo) · b) b = 1 · c) f(x) > 0 para x < 1 e f(x) < 0 para x > 1 · d) f(x) = −x + 1" }
]
},
{
id: "mat-10-2011-2",
disciplina: "Matemática",
classe: "10ª Classe",
ano: 2011,
chamada: "2ª Época",
duracao: "120 Minutos",
totalPerguntas: 7,
fonteEnunciado: "Transcrição fiel do exame oficial ESG/2011 (2ª Época), verificada visualmente contra o PDF original do arquivo.",
originalPdf: "https://storage.mozexames.com/papers/f3e00800-fdbc-42e0-8fd1-1c1cac4506ba/question.pdf",
perguntas: [
{ numero: 1, cotacao: "2,0",
enunciado: "Assinale com (V) verdadeiras ou (F) falsas as afirmações que se seguem:\na) [(−1)³]⁵ = 15\nb) √8 + √8 = √16\nc) |−1/2| = 0,5\nd) {1; 2} ⊂ ]1; 2[",
passos: [
"a) [(−1)³]⁵ = (−1)^(3×5) = (−1)¹⁵ = −1, que é diferente de 15. FALSA (F).",
"b) √8 + √8 = 2√8 = √(4 × 8) = √32, que é diferente de √16 = 4 (2√8 ≈ 5,66). FALSA (F).",
"c) O módulo de um número negativo é o seu simétrico: |−1/2| = 1/2 = 0,5. VERDADEIRA (V).",
"d) O intervalo aberto ]1; 2[ não contém nem o 1 nem o 2, logo o conjunto {1; 2} não está contido nele. FALSA (F)."
],
resposta: "a) F · b) F · c) V · d) F" },
{ numero: 2, cotacao: "4,0",
enunciado: "Resolva em IR:\na) 2x² + 3 = 3x⁴ − 5\nb) 2 sen x − √3 = 0, se x ∈ [0°; 180°]",
passos: [
"a) Passando tudo para um membro: 3x⁴ − 2x² − 8 = 0. Com y = x²: 3y² − 2y − 8 = 0.",
"a) Δ = 4 + 96 = 100 e y = (2 ± 10)/6, donde y = 2 ou y = −4/3. Rejeita-se y = −4/3 (x² ≥ 0) e fica x² = 2, ou seja, x = −√2 ou x = √2.",
"a) Verificação com x = √2: 2(2) + 3 = 7 e 3(4) − 5 = 7 ✓.",
"b) sen x = √3/2. Em [0°; 180°] há dois ângulos com este seno: x = 60° e x = 180° − 60° = 120°.",
"b) Verificação: sen 120° = sen(180° − 120°) = sen 60° = √3/2 ✓."
],
resposta: "a) S = {−√2; √2} · b) x = 60° ou x = 120°" },
{ numero: 3, cotacao: "2,0",
enunciado: "Resolva o seguinte sistema de equações:\n{ x/3 + y = 7/3\n{ x − y/2 = 0",
passos: [
"Da segunda equação: x = y/2. Substituindo na primeira: (y/2)/3 + y = 7/3, ou seja, y/6 + y = 7/3 e (7/6)y = 7/3.",
"y = (7/3) × (6/7) = 2. Então x = 2/2 = 1.",
"Verificação: 1/3 + 2 = 7/3 ✓ e 1 − 2/2 = 0 ✓."
],
resposta: "S = {(1; 2)}" },
{ numero: 4, cotacao: "2,5",
enunciado: "Considere um triângulo equilátero de área igual a 45 cm². Determine a medida dos seus lados sabendo que esta excede a da altura em 1 cm.",
passos: [
"Seja l a medida do lado e h a da altura. Os dados do enunciado dão duas relações: l = h + 1 (o lado excede a altura em 1 cm) e a área (base × altura)/2 = (l × h)/2 = 45.",
"Substituindo l = h + 1 na área: [(h + 1) × h]/2 = 45, ou seja, h² + h = 90 e h² + h − 90 = 0.",
"Δ = 1 + 360 = 361 = 19²; h = (−1 ± 19)/2, donde h = 9 ou h = −10 (rejeita-se a medida negativa). Logo h = 9 cm e l = 9 + 1 = 10 cm.",
"Verificação: (10 × 9)/2 = 45 cm² ✓ e 10 − 9 = 1 cm ✓."
],
resposta: "10 cm" },
{ numero: 5, cotacao: "1,5",
enunciado: "Na escola do João praticam-se apenas as modalidades de futebol (F) e de basquetebol (B). Sabe-se que dos 1000 alunos praticantes de desporto, 500 praticam basquetebol e 300 praticam as duas modalidades.\na) Quantos alunos praticam apenas basquetebol?\nb) Quantos alunos praticam apenas futebol?\nc) Quantos alunos praticam futebol?",
passos: [
"a) Apenas basquetebol: dos 500 que praticam basquetebol, 300 também praticam futebol: 500 − 300 = 200 alunos.",
"b) Como só se praticam estas duas modalidades e todos os 1000 são praticantes, quem não pratica basquetebol pratica apenas futebol: 1000 − 500 = 500 alunos.",
"c) Futebol no total: apenas futebol + as duas modalidades = 500 + 300 = 800 alunos.",
"Verificação: 200 (só B) + 300 (ambas) + 500 (só F) = 1000 ✓."
],
resposta: "a) 200 alunos · b) 500 alunos · c) 800 alunos" },
{ numero: 6, cotacao: "4,0",
enunciado: "Na figura ao lado, seja f o gráfico da função quadrática e g o gráfico da função do 1º grau:\na) Indique os zeros da função f.\nb) Indique o contradomínio de f.\nc) Indique os valores de x tais que f(x) = g(x).\nd) Resolva g(x) < f(x).\ne) Determine a expressão analítica de f(x).",
passos: [
"Na figura, f é a parábola de vértice (1; 4), que corta Ox em −1 e 3 e Oy em 3; g é a recta que passa por (0; 3) e (3; 0).",
"a) Os zeros de f são as intersecções da parábola com Ox: x = −1 e x = 3.",
"b) A parábola abre para baixo com máximo 4: CD(f) = ]−∞; 4].",
"c) As curvas cruzam-se em (0; 3) e (3; 0): f(x) = g(x) para x = 0 e x = 3.",
"d) Entre os cruzamentos, a parábola está acima da recta: g(x) < f(x) em ]0; 3[.",
"e) Na forma do vértice: f(x) = a(x − 1)² + 4; passando por (0; 3), a = −1, logo f(x) = −(x − 1)² + 4 = −x² + 2x + 3.",
"e) Verificação: f(3) = −9 + 6 + 3 = 0 ✓ e f(−1) = −1 − 2 + 3 = 0 ✓ (zeros da alínea a))."
],
resposta: "a) −1 e 3 · b) CD(f) = ]−∞; 4] · c) x = 0 e x = 3 · d) ]0; 3[ · e) f(x) = −x² + 2x + 3" },
{ numero: 7, cotacao: "4,0",
enunciado: "As notas de 10 alunos duma turma da 10ª classe no exame de Matemática são as seguintes: 12, 16, 20, 15, 19, 18, 20, 18, 15, 20.\nA tabela de frequências tem: 12 → fi = A, fri = 0,1; 15 → fi = 2, fri = C; 16 → fi = 1, fri = 0,1; 18 → fi = B, fri = 0,2; 19 → fi = 1, fri = 0,1; 20 → fi = 3, fri = D.\na) Quais são os valores de A, B, C e D da tabela ao lado?\nb) Represente num diagrama de barras a frequência absoluta.\nc) Determine a moda e a mediana das notas.",
passos: [
"Contando as notas: 12 aparece 1 vez; 15 aparece 2; 16 aparece 1; 18 aparece 2; 19 aparece 1; 20 aparece 3. Total: 1 + 2 + 1 + 2 + 1 + 3 = 10 ✓.",
"a) A = 1 (fi de 12) e B = 2 (fi de 18). C = fri de 15 = 2/10 = 0,2 e D = fri de 20 = 3/10 = 0,3.",
"b) O diagrama de barras da resolução mostra, para cada nota, uma barra com a altura da frequência absoluta: 12 → 1; 15 → 2; 16 → 1; 18 → 2; 19 → 1; 20 → 3.",
"c) Moda: a nota mais frequente é 20 (3 alunos). Mediana: ordenando as notas — 12, 15, 15, 16, 18, 18, 19, 20, 20, 20 — os dois valores centrais (5.º e 6.º) são 18 e 18, logo a mediana é (18 + 18)/2 = 18."
],
resposta: "a) A = 1, B = 2, C = 0,2 e D = 0,3 · c) Moda = 20 e Mediana = 18" }
]
}
]);
