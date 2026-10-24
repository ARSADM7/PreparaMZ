// PreparaMZ — exames completos da 9ª classe (2025), transcritos das
// folhas oficiais INEC/MINEDH e resolvidos passo a passo pela equipa
// PreparaMZ. Junta-se a window.EXAMES (data/exames.js) sem o alterar.
// Gerado a partir dos fragmentos verificados em ~/workspace/prepara-mz/producao-9a/.
window.EXAMES = window.EXAMES.concat([
  {
    "id": "mat-9-2025-1",
    "disciplina": "Matemática",
    "classe": "9ª Classe",
    "ano": 2025,
    "chamada": "1ª Chamada",
    "duracao": "120 Minutos",
    "totalPerguntas": 10,
    "fonteEnunciado": "Exame Final oficial ES1/2025, Instituto Nacional de Exames, Certificação e Equivalências (Moçambique)",
    "originalPdf": "https://storage.mozexames.com/papers/9287f312-66ea-424e-b1b2-1341c16cfbb5/question.pdf",
    "perguntas": [
      {
        "numero": 1,
        "cotacao": "1,5",
        "enunciado": "Sejam A = {1,2,3}, B = {3,4,5} e U = {1,2,3,4,5,6}. Determine:\na) A ∪ B\nb) A ∩ B\nc) A \\ B",
        "passos": [
          "a) A união A ∪ B junta todos os elementos de A com os de B, sem repetir: A ∪ B = {1, 2, 3, 4, 5}.",
          "b) A intersecção A ∩ B guarda só os elementos que estão nos dois conjuntos ao mesmo tempo: o único elemento comum é o 3, logo A ∩ B = {3}.",
          "c) A diferença A \\ B guarda os elementos que estão em A mas não estão em B: retira o 3 de A, logo A \\ B = {1, 2}.",
          "Verificação: A \\ B e A ∩ B não têm elementos comuns e, juntos, reconstruam A: {1, 2} ∪ {3} = {1, 2, 3} ✓."
        ],
        "resposta": "a) A ∪ B = {1, 2, 3, 4, 5}  ·  b) A ∩ B = {3}  ·  c) A \\ B = {1, 2}"
      },
      {
        "numero": 2,
        "cotacao": "2,0",
        "enunciado": "Numa pesquisa sobre a preferência entre dois produtos, 100 pessoas foram entrevistadas. 60 disseram que preferem o produto A, 40 disseram preferir o produto B e 20 disseram preferir ambos produtos.\na) Represente, em um diagrama, a situação descrita.\nb) Quantas pessoas não preferem nem o produto A e nem o produto B?",
        "passos": [
          "a) Começa pelo meio do diagrama de Venn: 20 pessoas preferem ambos, por isso escreve 20 na intersecção dos dois círculos.",
          "a) Só o produto A: 60 − 20 = 40. Só o produto B: 40 − 20 = 20. O rectângulo representa as 100 pessoas entrevistadas.",
          "b) Pessoas que preferem pelo menos um produto: 40 + 20 + 20 = 80.",
          "b) Quem não prefere nenhum: 100 − 80 = 20 pessoas.",
          "Verificação por outro caminho: n(A ∪ B) = n(A) + n(B) − n(A ∩ B) = 60 + 40 − 20 = 80; 100 − 80 = 20 ✓."
        ],
        "resposta": "Diagrama — só A: 40; ambos: 20; só B: 20; fora dos círculos: 20.  b) 20 pessoas não preferem nenhum dos produtos."
      },
      {
        "numero": 3,
        "cotacao": "2,0",
        "enunciado": "Racionalize o denominador da fracção 2/√10.",
        "passos": [
          "Racionalizar é fazer desaparecer a raiz do denominador. Multiplica o numerador e o denominador por √10 (multiplicar por √10/√10 = 1 não altera o valor da fracção): 2/√10 = (2 × √10)/(√10 × √10).",
          "No denominador: √10 × √10 = 10. Fica 2√10/10.",
          "Simplifica dividindo o numerador e o denominador por 2: 2√10/10 = √10/5.",
          "Verificação numérica: 2/√10 ≈ 2/3,162 ≈ 0,632; √10/5 ≈ 3,162/5 ≈ 0,632 ✓."
        ],
        "resposta": "2/√10 = √10/5"
      },
      {
        "numero": 4,
        "cotacao": "3,0",
        "enunciado": "Simplifique as seguintes expressões:\na) ⁶√3 − √2 + 3⁶√3 + √(³√8)\nb) (10a⁴b² − 5a³b³ + 15a²b⁴)/(5a²b²)",
        "passos": [
          "a) Resolve primeiro o radical aninhado: ³√8 = 2, porque 2³ = 8; depois √(³√8) = √2.",
          "a) A expressão fica: ⁶√3 − √2 + 3⁶√3 + √2.",
          "a) Os termos em √2 cancelam-se: −√2 + √2 = 0. Os termos semelhantes em ⁶√3 somam-se: ⁶√3 + 3⁶√3 = 4⁶√3.",
          "a) Verificação numérica: ⁶√3 ≈ 1,201; a expressão original vale 1,201 − 1,414 + 3 × 1,201 + 1,414 ≈ 4,804 e 4⁶√3 ≈ 4 × 1,201 ≈ 4,804 ✓.",
          "b) Divide cada termo do numerador pelo denominador 5a²b²: 10a⁴b²/(5a²b²) = 2a²; −5a³b³/(5a²b²) = −ab; 15a²b⁴/(5a²b²) = 3b² (nos coeficientes divide os números; nas letras subtrai os expoentes).",
          "b) Verificação com a = 1 e b = 1: a fracção original dá (10 − 5 + 15)/5 = 4 e o resultado dá 2 − 1 + 3 = 4 ✓."
        ],
        "resposta": "a) 4⁶√3  ·  b) 2a² − ab + 3b²"
      },
      {
        "numero": 5,
        "cotacao": "2,0",
        "enunciado": "Encontre os valores de x que satisfazem o sistema:\n3x + 8 ≥ 2\nx − 6 < −4",
        "passos": [
          "Resolve cada inequação separadamente. Primeira: 3x + 8 ≥ 2 → 3x ≥ 2 − 8 → 3x ≥ −6 → x ≥ −2 (ao dividir por 3, positivo, o sinal mantém-se).",
          "Segunda: x − 6 < −4 → x < −4 + 6 → x < 2.",
          "A solução do sistema é a intersecção das duas condições: x tem de ser maior ou igual a −2 e, ao mesmo tempo, menor que 2.",
          "Verificação: x = 0 satisfaz as duas (8 ≥ 2 e −6 < −4) ✓; x = 2 falha a segunda (2 − 6 = −4 não é < −4) ✓; x = −2 satisfaz a primeira com igualdade (2 ≥ 2) ✓."
        ],
        "resposta": "S = {x ∈ ℝ: −2 ≤ x < 2}, ou seja, o intervalo [−2, 2["
      },
      {
        "numero": 6,
        "cotacao": "1,0",
        "enunciado": "Considere os seguintes polinómios A(x) = 2x² + 3x − 1 e B(x) = x − 2.\nDetermine o polinómio P(x), resultante de A × B.",
        "passos": [
          "Multiplica cada termo de A(x) por cada termo de B(x) (propriedade distributiva): P(x) = (2x² + 3x − 1)(x − 2).",
          "Produtos por x: 2x² × x = 2x³; 3x × x = 3x²; −1 × x = −x.",
          "Produtos por −2: 2x² × (−2) = −4x²; 3x × (−2) = −6x; −1 × (−2) = +2.",
          "Junta os termos semelhantes: 2x³ + (3x² − 4x²) + (−x − 6x) + 2 = 2x³ − x² − 7x + 2.",
          "Verificação com x = 1: A(1) = 2 + 3 − 1 = 4 e B(1) = −1, produto = −4; P(1) = 2 − 1 − 7 + 2 = −4 ✓."
        ],
        "resposta": "P(x) = 2x³ − x² − 7x + 2"
      },
      {
        "numero": 7,
        "cotacao": "4,0",
        "enunciado": "O João e a Maria estão a comparar a altura de dois balões que lançaram ao ar. O balão do João, representado no gráfico, segue a trajectória dada por g(x) = x², enquanto que o da Maria segue h(x) = 1/2x² + 1.\na) Esboce o gráfico de h(x).\nb) Para que valores de x os dois balões estão a mesma altura?",
        "passos": [
          "a) h(x) = 1/2x² + 1 é uma parábola com a concavidade voltada para cima (coeficiente de x² positivo). O coeficiente 1/2 torna-a mais \"aberta\" (mais larga) do que g(x) = x², e o +1 desloca o vértice para cima: vértice em (0, 1).",
          "a) Tabela de pontos de h: x = 0 → 1; x = 1 → 1,5; x = −1 → 1,5; x = 2 → 3; x = −2 → 3; x = 3 → 5,5; x = −3 → 5,5. Marca estes pontos no mesmo referencial de g(x) e une-os com uma curva suave (ver figura da resolução).",
          "b) Mesma altura significa g(x) = h(x): x² = 1/2x² + 1.",
          "b) Passa os termos em x² para o primeiro membro: x² − 1/2x² = 1 → 1/2x² = 1 → x² = 2 → x = √2 ou x = −√2.",
          "Verificação: para x = √2, g(√2) = 2 e h(√2) = 1/2 × 2 + 1 = 2 — alturas iguais a 2 ✓ (o mesmo acontece em x = −√2, pela simetria das parábolas)."
        ],
        "resposta": "a) Parábola de vértice (0, 1), concavidade para cima, mais aberta do que g(x), passando por (±1; 1,5) e (±2; 3).  b) Os balões estão à mesma altura para x = −√2 e x = √2 (altura 2)."
      },
      {
        "numero": 8,
        "cotacao": "1,0",
        "enunciado": "Numa escola, pretende-se saber qual é o desporto preferido pelos alunos da 9ª classe.\na) Se perguntarem a todos os alunos da 9ª classe, estarão a recolher dados de uma população ou de uma amostra?\nb) Se perguntarem apenas a alguns alunos de cada turma da 9ª classe, estarão a recolher dados de uma população ou de uma amostra?",
        "passos": [
          "Recorda as definições: população é o conjunto de todos os elementos que se quer estudar; amostra é apenas uma parte (um subconjunto) da população.",
          "a) Perguntar a TODOS os alunos da 9ª classe significa estudar o conjunto completo: é a população (um levantamento assim chama-se censo).",
          "b) Perguntar apenas a ALGUNS alunos de cada turma significa estudar só uma parte representativa do conjunto: é uma amostra."
        ],
        "resposta": "a) População  ·  b) Amostra"
      },
      {
        "numero": 9,
        "cotacao": "2,0",
        "enunciado": "Foi registada a altura (em cm) de um grupo de 20 alunos: 160, 165, 170, 160, 175, 165, 180, 170, 160, 175, 165, 180, 170, 160, 175, 165, 180, 170, 160, 175.\nOrganize estes dados numa tabela de frequências absoluta e relativa.",
        "passos": [
          "Conta quantas vezes aparece cada altura diferente, percorrendo a lista do início ao fim: 160 aparece 5 vezes; 165 aparece 4 vezes; 170 aparece 4 vezes; 175 aparece 4 vezes; 180 aparece 3 vezes.",
          "Confere a contagem: 5 + 4 + 4 + 4 + 3 = 20 alunos ✓ — a soma das frequências absolutas tem de dar o total de dados.",
          "Frequência relativa = frequência absoluta ÷ 20: 160 → 5/20 = 0,25; 165 → 4/20 = 0,20; 170 → 4/20 = 0,20; 175 → 4/20 = 0,20; 180 → 3/20 = 0,15.",
          "Confere: 0,25 + 0,20 + 0,20 + 0,20 + 0,15 = 1,00 ✓ — a soma das frequências relativas tem de dar 1."
        ],
        "resposta": "Altura 160 cm: f = 5, fr = 0,25 · 165 cm: f = 4, fr = 0,20 · 170 cm: f = 4, fr = 0,20 · 175 cm: f = 4, fr = 0,20 · 180 cm: f = 3, fr = 0,15 (total: f = 20, fr = 1)"
      },
      {
        "numero": 10,
        "cotacao": "1,5",
        "enunciado": "Um prisma triangular regular, tem de altura 5 cm, e o lado da base é 8 cm. Calcule o volume do prisma.",
        "passos": [
          "Num prisma triangular regular, a base é um triângulo equilátero de lado 8 cm. Área da base: A_b = (lado² × √3)/4 = (8² × √3)/4 = 64√3/4 = 16√3 cm².",
          "Confere a área por outro caminho: a altura do triângulo equilátero é 8√3/2 = 4√3 cm, logo A_b = (8 × 4√3)/2 = 16√3 cm² ✓.",
          "Volume do prisma = área da base × altura do prisma: V = 16√3 × 5 = 80√3 cm³.",
          "Valor aproximado: 80 × 1,73 ≈ 138,6 cm³."
        ],
        "resposta": "V = 80√3 cm³ ≈ 138,6 cm³"
      }
    ],
    "tipo": "Exame Final"
  },
  {
    "id": "fis-9-2025-1",
    "disciplina": "Física",
    "classe": "9ª Classe",
    "ano": 2025,
    "chamada": "1ª Chamada",
    "duracao": "90 Minutos",
    "totalPerguntas": 10,
    "fonteEnunciado": "Exame Final oficial ES1/2025, Instituto Nacional de Exames, Certificação e Equivalências (Moçambique)",
    "originalPdf": "https://storage.mozexames.com/papers/190e76a9-dcf4-4ffd-9d27-37489cb6689f/question.pdf",
    "perguntas": [
      {
        "numero": 1,
        "cotacao": "1,0",
        "enunciado": "Escolha a opção que representa instrumentos ópticos.\nA. Lupa, olho humano e lua\nB. Olho humano, lente e binóculo\nC. Plano inclinado, lupa e lente\nD. Roldana, microscópio e lente",
        "passos": [
          "Instrumentos ópticos são os dispositivos que funcionam com a luz (reflexão/refracção) para formar ou ampliar imagens: lupa, lente, binóculo, microscópio e o próprio olho humano.",
          "A: a lua não é um instrumento — é um corpo celeste (fonte secundária de luz). Errada.",
          "B: olho humano, lente e binóculo são todos instrumentos ópticos. Correcta.",
          "C: o plano inclinado é uma máquina simples, não um instrumento óptico. Errada.",
          "D: a roldana é uma máquina simples, não um instrumento óptico. Errada."
        ],
        "resposta": "B. Olho humano, lente e binóculo"
      },
      {
        "numero": 2,
        "cotacao": "1,5",
        "enunciado": "A figura 1 representa a construção da imagem de um objecto em um espelho côncavo. Caracterize a imagem quanto a:\na) Natureza\nb) Orientação\nc) Tamanho",
        "passos": [
          "Observa a figura 1: o objecto está colocado sobre o centro de curvatura C do espelho (a letra C está na base da seta do objecto) e os raios reflectidos encontram-se do mesmo lado do espelho, formando a seta da imagem no mesmo ponto C.",
          "a) Natureza: como a imagem se forma pelo encontro efectivo dos raios reflectidos, em frente ao espelho, ela é real (pode ser projectada num anteparo).",
          "b) Orientação: a seta da imagem aponta para baixo, ao contrário da seta do objecto: a imagem é invertida.",
          "c) Tamanho: na figura, a seta da imagem tem o mesmo comprimento que a seta do objecto: a imagem é igual (do mesmo tamanho) ao objecto — é o que acontece sempre que o objecto está sobre o centro de curvatura."
        ],
        "resposta": "a) Real  ·  b) Invertida  ·  c) Igual ao objecto (mesmo tamanho)"
      },
      {
        "numero": 3,
        "cotacao": "1,0",
        "enunciado": "Escolha a alternativa que corresponde a máquinas simples.\nA. Alavanca, roldana e sarilho\nB. Alicate, termómetro e bússola\nC. Roldana, plano inclinado e lupa\nD. Plano inclinado, alavanca e rolha",
        "passos": [
          "Máquinas simples são dispositivos mecânicos elementares que facilitam o trabalho: alavanca, roldana, plano inclinado, sarilho, roda e eixo, cunha e parafuso.",
          "A: alavanca, roldana e sarilho são as três máquinas simples. Correcta.",
          "B: o termómetro e a bússola são instrumentos de medida/orientação, não máquinas simples. Errada.",
          "C: a lupa é um instrumento óptico, não uma máquina simples. Errada.",
          "D: a rolha não é uma máquina simples. Errada."
        ],
        "resposta": "A. Alavanca, roldana e sarilho"
      },
      {
        "numero": 4,
        "cotacao": "2,0",
        "enunciado": "A figura 2 representa uma associação de roldanas.\na) De que tipo de associação se trata?\nb) Determine o valor da força F necessário para equilibrar o sistema.",
        "passos": [
          "a) Observa a figura 2: há uma roldana ligada ao suporte (roldana fixa, em cima) e uma roldana que se move com a carga de 150 N (roldana móvel, em baixo). Quando se combinam roldanas fixas e móveis no mesmo sistema, a associação é mista.",
          "b) Dados: peso da carga P = 150 N (valor escrito na figura 2). A roldana móvel é sustentada por 2 troços da mesma corda, e cada troço faz uma força igual a F; a roldana fixa só muda a direcção da força.",
          "b) Equilíbrio da roldana móvel: 2F = P → F = P/2 = 150/2 = 75 N.",
          "Verificação: os dois troços que seguram a roldana móvel fazem 75 N + 75 N = 150 N, exactamente o peso da carga ✓."
        ],
        "resposta": "a) Associação mista (uma roldana fixa e uma roldana móvel)  ·  b) F = 75 N"
      },
      {
        "numero": 5,
        "cotacao": "2,0",
        "enunciado": "Qual é, em g/cm³, a densidade de um bloco de ferro de volume igual a 10cm³ e 250g de massa?",
        "passos": [
          "Dados: massa m = 250 g; volume V = 10 cm³. Como a resposta é pedida em g/cm³, não é preciso converter unidades.",
          "A densidade é a massa por unidade de volume: d = m/V.",
          "Substitui: d = 250/10 = 25 g/cm³.",
          "Verificação: d × V = 25 × 10 = 250 g, que é a massa dada ✓."
        ],
        "resposta": "d = 25 g/cm³"
      },
      {
        "numero": 6,
        "cotacao": "2,5",
        "enunciado": "O tubo representado pela figura ao lado contém dois líquidos imiscíveis. A densidade do líquido A é igual a 1g/cm³. Determine em g/cm³, a densidade do líquido B.",
        "passos": [
          "Lê a figura 3 (tubo em U): no ramo esquerdo, a coluna do líquido B tem 10 cm de altura, desde a superfície livre até ao nível da superfície de separação com o líquido A (linha tracejada). No ramo direito, o líquido A está 8 cm acima desse mesmo nível de separação.",
          "Num líquido em equilíbrio, pontos ao mesmo nível horizontal têm a mesma pressão. Ao nível da superfície de separação, a pressão exercida pela coluna de B (esquerda) é igual à pressão exercida pela coluna de A (direita): d_B × h_B = d_A × h_A (a pressão hidrostática é d × g × h e o g cancela-se dos dois lados).",
          "Substitui os valores: d_B × 10 = 1 × 8.",
          "Logo d_B = 8/10 = 0,8 g/cm³.",
          "Verificação: 0,8 × 10 = 8 e 1 × 8 = 8 — as duas colunas exercem a mesma pressão ao nível da separação ✓. Faz sentido o líquido B ser menos denso (0,8 < 1): por isso a sua coluna é mais alta."
        ],
        "resposta": "d_B = 0,8 g/cm³"
      },
      {
        "numero": 7,
        "cotacao": "2,5",
        "enunciado": "Dois pontos K e L situados num líquido de densidade 800Kg/m³ distam verticalmente um do outro, como ilustra a figura 4. Calcule a diferença de pressão entre esses pontos, estando o tanque na superfície da terra. (g = 10m/s²)",
        "passos": [
          "Lê a figura 4: o ponto K está acima do ponto L e a distância vertical entre eles é Δh = 0,4 m. Dados: densidade do líquido d = 800 kg/m³; g = 10 m/s².",
          "Pela lei fundamental da hidrostática, a diferença de pressão entre dois pontos de um líquido é Δp = d × g × Δh.",
          "Substitui: Δp = 800 × 10 × 0,4 = 3200 Pa.",
          "Verificação por outro caminho: a pressão aumenta 800 × 10 = 8000 Pa por cada metro de profundidade; para 0,4 m: 8000 × 0,4 = 3200 Pa ✓. (O ponto L, mais profundo, tem maior pressão: p_L − p_K = 3200 Pa.)"
        ],
        "resposta": "Δp = 3200 Pa (3,2 × 10³ Pa)"
      },
      {
        "numero": 8,
        "cotacao": "1,0",
        "enunciado": "Um pescador sentado em seu barco, lança a sua rede pesqueira num lago. Devido as más condições do tempo, o barco enche-se de água e afunda, depositando-se no fundo do lago. Nestas condições, pode-se afirmar que o barco afundou porque a/o…\nA. densidade do barco ficou menor do que a do líquido.\nB. impulsão ficou igual ao peso do barco.\nC. impulsão ficou maior do que o peso do borco.\nD. peso do barco ficou maior do que a impulsão.",
        "passos": [
          "Um corpo flutua quando a impulsão (força vertical, de baixo para cima, exercida pelo líquido) equilibra o peso; afunda quando o peso vence a impulsão.",
          "Ao encher-se de água, o conjunto barco + água ficou mais pesado, sem que a impulsão máxima aumentasse na mesma proporção.",
          "A: se a densidade do barco ficasse menor do que a do líquido, ele flutuaria — é o contrário do que aconteceu. Errada.",
          "B: impulsão igual ao peso significa equilíbrio (flutuação), não afundamento. Errada.",
          "C: impulsão maior do que o peso faria o barco subir/emergir. Errada.",
          "D: peso maior do que a impulsão é exactamente a condição de afundamento. Correcta."
        ],
        "resposta": "D. O peso do barco ficou maior do que a impulsão"
      },
      {
        "numero": 9,
        "cotacao": "3,0",
        "enunciado": "A figura 5 representa a propagação de uma onda mecânica de comprimento igual a 4 metros. Determine:\na) a amplitude da onda.\nb) o período do movimento.\nc) a velocidade de propagação da onda.",
        "passos": [
          "O gráfico da figura 5 é y (em metros) em função de t (em segundos): mostra a oscilação de um ponto da onda ao longo do tempo.",
          "a) A amplitude é o deslocamento máximo em relação à posição de equilíbrio (y = 0). No gráfico, o vale mais baixo está marcado em −0,5 m, logo a amplitude é A = 0,5 m (a amplitude é sempre positiva).",
          "b) O período é o tempo de uma oscilação completa. A onda parte de y = 0 a descer, atinge o mínimo e volta a cruzar y = 0, a subir, em t = 1 s: esse instante corresponde a meio período (T/2 = 1 s), porque a oscilação está exactamente a meio do ciclo. Logo T = 2 × 1 = 2 s.",
          "c) Velocidade de propagação: v = λ/T, com o comprimento de onda dado λ = 4 m: v = 4/2 = 2 m/s.",
          "Verificação por outro caminho: a frequência é f = 1/T = 1/2 = 0,5 Hz; v = λ × f = 4 × 0,5 = 2 m/s ✓."
        ],
        "resposta": "a) A = 0,5 m  ·  b) T = 2 s  ·  c) v = 2 m/s"
      },
      {
        "numero": 10,
        "cotacao": "3,5",
        "enunciado": "A figura 6 representa um circuito eléctrico. A diferença de potencial (ddp) entre os pontos S e R é de 20V.\na) Qual é, em ohm, a resistência equivalente do circuito?\nb) Determine a intensidade total da corrente eléctrica entre S e R.",
        "passos": [
          "Observa a figura 6: partindo de S, a corrente atravessa R₁ = 2Ω, depois R₂ = 6Ω e depois R₃ = 2Ω, até chegar a R. Não há ramificações: as três resistências estão ligadas em série.",
          "a) Em série, a resistência equivalente é a soma das resistências: R_eq = R₁ + R₂ + R₃ = 2 + 6 + 2 = 10 Ω.",
          "b) Aplica a lei de Ohm ao circuito completo: U = R_eq × I, com U = 20 V (ddp entre S e R, dada no enunciado).",
          "b) I = U/R_eq = 20/10 = 2 A.",
          "Verificação: as quedas de tensão em cada resistência são U₁ = 2 × 2 = 4 V, U₂ = 6 × 2 = 12 V e U₃ = 2 × 2 = 4 V; 4 + 12 + 4 = 20 V, exactamente a ddp entre S e R ✓ (numa ligação em série, a corrente é a mesma em todas as resistências)."
        ],
        "resposta": "a) R_eq = 10 Ω  ·  b) I = 2 A"
      }
    ],
    "tipo": "Exame Final"
  },
  {
    "id": "qui-9-2025-1",
    "disciplina": "Química",
    "classe": "9ª Classe",
    "ano": 2025,
    "chamada": "1ª Época",
    "duracao": "90 Minutos",
    "totalPerguntas": 10,
    "fonteEnunciado": "Exame Final oficial ES1/2025, Instituto Nacional de Exames, Certificação e Equivalências (Moçambique)",
    "originalPdf": "https://storage.mozexames.com/papers/fa1f50ae-dead-4b8b-839d-ad4de24be846/question.pdf",
    "perguntas": [
      {
        "numero": 1,
        "cotacao": "1,5",
        "enunciado": "Na Química, os compostos estão agrupados de acordo com as suas propriedades semelhantes em funções.\nIdentifique a função inorgânica de cada uma das fórmulas gerais abaixo.\nI. E₂O_y    II. H_nA    III. M(OH)_x",
        "passos": [
          "Recorda as fórmulas gerais das funções inorgânicas: óxidos = elemento + oxigénio; ácidos = hidrogénio + anião; bases = metal + grupo hidróxido (OH).",
          "I. E₂O_y: há apenas um elemento E ligado ao oxigénio — é a fórmula geral de um óxido.",
          "II. H_nA: começa por hidrogénio (H) ligado a um anião A — é a fórmula geral de um ácido.",
          "III. M(OH)_x: há um metal M ligado a grupos OH (hidróxido) — é a fórmula geral de uma base (hidróxido)."
        ],
        "resposta": "I. Óxido  ·  II. Ácido  ·  III. Base (hidróxido)"
      },
      {
        "numero": 2,
        "cotacao": "3,5",
        "enunciado": "Observe as substâncias.\nI. N₂O₅    II. H₂SO₄    III. PbBr₂\na) Dê nomes às substâncias usando as regras de nomenclatura dos compostos inorgânicos.\nb) Por que razão se afirma que o composto I é um óxido ácido?\nc) Escreva em forma de equação química acertada a obtenção do composto II a partir da reacção de um óxido com a água.",
        "passos": [
          "a) I. N₂O₅ é um óxido de um ametal (azoto) com 5 átomos de oxigénio e 2 de azoto: usa-se o prefixo penta- e di- → pentóxido de dinitrogénio.",
          "a) II. H₂SO₄ é o ácido formado pelo enxofre (S) no seu estado de oxidação máximo: o sufixo é -ico → ácido sulfúrico.",
          "a) III. PbBr₂ é um sal formado pelo metal chumbo (Pb) e o bromo (Br): nome do anião (brometo) + de + nome do metal → brometo de chumbo.",
          "b) Um óxido é ácido quando é formado por um ametal (não-metal) ligado ao oxigénio. O azoto (N) é um ametal, por isso o N₂O₅ é um óxido ácido — confirma-se porque, reagindo com a água, forma um ácido (o ácido nítrico, HNO₃).",
          "c) O composto II é o H₂SO₄. Para o obter de um óxido + água, o óxido tem de ser o trióxido de enxofre, SO₃ (o óxido ácido correspondente ao ácido sulfúrico).",
          "c) Equação: SO₃ + H₂O → H₂SO₄. Verificação do acerto: S = 1 e 1; O = 3 + 1 = 4 e 4; H = 2 e 2 — a equação está acertada."
        ],
        "resposta": "a) I. Pentóxido de dinitrogénio  ·  II. Ácido sulfúrico  ·  III. Brometo de chumbo  ·  b) Porque é um óxido formado por um ametal (o azoto) ligado ao oxigénio (reage com a água formando um ácido)  ·  c) SO₃ + H₂O → H₂SO₄"
      },
      {
        "numero": 3,
        "cotacao": "2,0",
        "enunciado": "Complete e acerte as equações químicas abaixo.\na) Zn(OH)₂ + P₂O₅ → ______ + ______\nb) HCl + Fe(OH)₃ → ______ + ______",
        "passos": [
          "a) É uma reacção entre uma base, Zn(OH)₂, e um óxido ácido, P₂O₅: como nas reacções de neutralização, os produtos são um sal e água.",
          "a) O sal junta o metal da base (Zn, com valência II) ao radical do óxido ácido (o fosfato, PO₄, com valência III): cruzando as valências obtém-se Zn₃(PO₄)₂ (fosfato de zinco). Produtos: Zn₃(PO₄)₂ + H₂O.",
          "a) Acerto: para ter 3 Zn e 2 P escrevemos 3 Zn(OH)₂ + P₂O₅ → Zn₃(PO₄)₂ + 3 H₂O. Verificação: Zn = 3/3; P = 2/2; H = 6/6; O = 6 + 5 = 11 e 8 + 3 = 11 ✓.",
          "b) É uma neutralização entre um ácido, HCl, e uma base, Fe(OH)₃: os produtos são um sal e água.",
          "b) O sal junta o metal da base (Fe, valência III) ao radical do ácido (Cl, valência I): cruzando as valências obtém-se FeCl₃ (cloreto de ferro III). Produtos: FeCl₃ + H₂O.",
          "b) Acerto: 3 HCl + Fe(OH)₃ → FeCl₃ + 3 H₂O. Verificação: Fe = 1/1; Cl = 3/3; H = 3 + 3 = 6 e 6; O = 3/3 ✓."
        ],
        "resposta": "a) 3 Zn(OH)₂ + P₂O₅ → Zn₃(PO₄)₂ + 3 H₂O  ·  b) 3 HCl + Fe(OH)₃ → FeCl₃ + 3 H₂O"
      },
      {
        "numero": 4,
        "cotacao": "2,0",
        "enunciado": "O átomo de um determinado elemento possui 32 electrões e 41 neutrões.\na) Calcule o número de massa do átomo.\nb) Quantos protões apresenta o isótopo desse átomo?",
        "passos": [
          "Num átomo neutro, o número de protões é igual ao número de electrões: Z (número atómico) = 32 protões.",
          "a) O número de massa é a soma dos protões com os neutrões: A = Z + N = 32 + 41 = 73.",
          "b) Isótopos são átomos do mesmo elemento: têm o mesmo número de protões (é ele que define o elemento) e diferem apenas no número de neutrões. Logo, o isótopo também apresenta 32 protões."
        ],
        "resposta": "a) A = 73  ·  b) O isótopo apresenta 32 protões"
      },
      {
        "numero": 5,
        "cotacao": "1,5",
        "enunciado": "Um elemento químico “Q” localiza-se na Tabela Periódica no grupo dos halogéneos e no 4º período.\na) Quantos electrões de valência possui o átomo desse elemento?\nb) Apresente a configuração electrónica do elemento.",
        "passos": [
          "Os halogéneos formam o grupo VII (17) da Tabela Periódica: todos têm 7 electrões na última camada (electrões de valência).",
          "a) Logo, o átomo de Q possui 7 electrões de valência.",
          "b) Estar no 4º período significa que o elemento tem 4 camadas electrónicas. O halogéneo do 4º período é o bromo (Br), de número atómico Z = 35.",
          "b) Distribui os 35 electrões pelas subcamadas, por ordem de energia: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁵.",
          "b) Verificação: 2 + 2 + 6 + 2 + 6 + 2 + 10 + 5 = 35 electrões ✓ e a última camada (camada 4) tem 2 + 5 = 7 electrões, como se espera de um halogéneo."
        ],
        "resposta": "a) 7 electrões de valência  ·  b) 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁵ (bromo, Z = 35)"
      },
      {
        "numero": 6,
        "cotacao": "1,5",
        "enunciado": "Dadas as seguintes substâncias.\nI: NaCl    II: NH₃    III: Fe\nQue tipo de ligação existe em cada substância?",
        "passos": [
          "Identifica a natureza de cada substância: NaCl junta um metal (Na) a um ametal (Cl); NH₃ junta dois ametais (N e H); Fe é um metal puro.",
          "I. NaCl: o metal cede electrões ao ametal, formando iões que se atraem — ligação iónica.",
          "II. NH₃: os ametais partilham pares de electrões entre si — ligação covalente.",
          "III. Fe: os átomos do metal partilham uma “nuvem” de electrões livres — ligação metálica."
        ],
        "resposta": "I. NaCl — ligação iónica  ·  II. NH₃ — ligação covalente  ·  III. Fe — ligação metálica"
      },
      {
        "numero": 7,
        "cotacao": "3,0",
        "enunciado": "Com relação a equação: H₂ + Cl₂ → 2 HCl\na) A equação traduz uma reacção redox. Justifique a afirmação.\nb) Indique a oxidação, a redução e seus respectivos agentes.",
        "passos": [
          "Calcula o número de oxidação (Nox) de cada elemento antes e depois da reacção.",
          "Nos reagentes, H₂ e Cl₂ são substâncias simples: Nox(H) = 0 e Nox(Cl) = 0.",
          "No produto HCl: o H ligado a um elemento mais electronegativo tem Nox = +1 e o Cl tem Nox = −1.",
          "a) Houve variação do número de oxidação: o H passou de 0 para +1 e o Cl de 0 para −1. Sempre que há variação do Nox, a reacção é de oxidação-redução (redox) — está justificada a afirmação.",
          "b) Oxidação é o aumento do Nox (perda de electrões): quem se oxida é o H₂ (0 → +1). Como é ele que provoca a redução do outro, o H₂ é o agente redutor.",
          "b) Redução é a diminuição do Nox (ganho de electrões): quem se reduz é o Cl₂ (0 → −1). Como é ele que provoca a oxidação do outro, o Cl₂ é o agente oxidante."
        ],
        "resposta": "a) É redox porque há variação do número de oxidação (H: 0 → +1; Cl: 0 → −1)  ·  b) Oxidação: H₂ → 2 H⁺ (agente redutor: H₂)  ·  Redução: Cl₂ → 2 Cl⁻ (agente oxidante: Cl₂)"
      },
      {
        "numero": 8,
        "cotacao": "2,0",
        "enunciado": "Determine o volume do dióxido de carbono, nas CNTP, que pode ser obtido a partir de 200g de carbonato de cálcio, conforme a equação.\nCaCO₃ —Δ→ CaO + CO₂\nDados: Ar(Ca) = 40; Ar(C) = 12, Ar(O) = 16",
        "passos": [
          "Calcula a massa molar do carbonato de cálcio: Mr(CaCO₃) = 40 + 12 + 3 × 16 = 100, logo M(CaCO₃) = 100 g/mol.",
          "Converte a massa em quantidade de substância: n(CaCO₃) = 200 / 100 = 2 mol.",
          "Pela equação, 1 mol de CaCO₃ produz 1 mol de CO₂ (proporção 1:1); logo, formam-se n(CO₂) = 2 mol.",
          "Nas CNTP, 1 mol de qualquer gás ocupa 22,4 L (volume molar). Assim: V(CO₂) = 2 × 22,4 = 44,8 L.",
          "Verificação por regra de três: 100 g de CaCO₃ → 22,4 L de CO₂; então 200 g (o dobro) → 2 × 22,4 = 44,8 L ✓."
        ],
        "resposta": "V(CO₂) = 44,8 L (nas CNTP)"
      },
      {
        "numero": 9,
        "cotacao": "1,5",
        "enunciado": "Na Cinética Química estuda-se a velocidade da reacção e os seus factores.\nIdentifique o factor de velocidade em cada um dos fenómenos descritos abaixo.\na) Conservação dos alimentos no congelador.\nb) Pedaços de madeira queimando mais rapidamente que um tronco de madeira.\nc) Ingerir enzimas para a digestão rápida dos alimentos.",
        "passos": [
          "Recorda os factores que influenciam a velocidade das reacções: temperatura, superfície de contacto, concentração, pressão e catalisadores.",
          "a) No congelador, o que muda é o frio: a baixa temperatura diminui a agitação das partículas e a velocidade das reacções de decomposição dos alimentos → factor: temperatura.",
          "b) Os pedaços de madeira têm maior área exposta ao ar do que o tronco inteiro: quanto maior a área de contacto com o oxigénio, mais rápida é a combustão → factor: superfície de contacto.",
          "c) As enzimas são substâncias que aceleram reacções sem serem consumidas, e é exactamente esse o papel dos catalisadores no organismo → factor: catalisador (as enzimas são catalisadores biológicos)."
        ],
        "resposta": "a) Temperatura  ·  b) Superfície de contacto  ·  c) Catalisador (enzimas)"
      },
      {
        "numero": 10,
        "cotacao": "1,5",
        "enunciado": "A síntese do amoníaco é uma reacção em equilíbrio.\nN₂(g) + 3 H₂(g) ↔ 2NH₃    Q = −92,1 Kj\nEm que sentido se deslocará o equilíbrio químico quando se aumenta a temperatura? Justifique.",
        "passos": [
          "Interpreta o valor de Q: Q = −92,1 Kj significa que a reacção directa (formação do NH₃) liberta calor — é exotérmica. A reacção inversa (decomposição do NH₃) é, por isso, endotérmica (absorve calor).",
          "Aplica o Princípio de Le Chatelier: quando se aumenta a temperatura, o equilíbrio desloca-se no sentido que contraria esse aumento, isto é, no sentido da reacção que absorve calor (endotérmica).",
          "Logo, o equilíbrio desloca-se no sentido inverso (para a esquerda), favorecendo a decomposição do amoníaco em N₂ e H₂ e diminuindo a quantidade de NH₃ formada."
        ],
        "resposta": "O equilíbrio desloca-se para a esquerda (sentido inverso, dos reagentes), porque o aumento da temperatura favorece a reacção endotérmica, que é a decomposição do NH₃ — a reacção directa é exotérmica (Q = −92,1 Kj)"
      }
    ],
    "tipo": "Exame Final"
  },
  {
    "id": "bio-9-2025-1",
    "disciplina": "Biologia",
    "classe": "9ª Classe",
    "ano": 2025,
    "chamada": "1ª Chamada",
    "duracao": "90 Minutos",
    "totalPerguntas": 10,
    "fonteEnunciado": "Exame Final oficial ES1/2025, Instituto Nacional de Exames, Certificação e Equivalências (Moçambique)",
    "originalPdf": "https://storage.mozexames.com/papers/c32bbbb6-63e0-43d7-89c0-e2b2d797fa37/question.pdf",
    "perguntas": [
      {
        "numero": 1,
        "cotacao": "2,0",
        "enunciado": "Na natureza existe uma variedade de ecossistemas.\nMencione quatro (4) exemplos de ecossistemas naturais.",
        "passos": [
          "Um ecossistema é o conjunto dos seres vivos (factores bióticos) e do meio físico (factores abióticos) de um lugar, em interacção.",
          "Um ecossistema é natural quando se formou sem intervenção humana e se mantém por si próprio, como os que existem na natureza desde a origem.",
          "Escolhe ambientes completos, e não seres vivos isolados: floresta, rio, lago e oceano são conjuntos de seres vivos e meio em interacção.",
          "O corrector valoriza quatro exemplos diferentes de ecossistemas naturais; também seriam aceites, por exemplo, deserto, savana, mar ou mangal, desde que naturais."
        ],
        "resposta": "Resposta-modelo (proposta): floresta, rio, lago e oceano"
      },
      {
        "numero": 2,
        "cotacao": "2,0",
        "enunciado": "Considere os seres vivos: gafanhoto, cobra, sapo, capim e fungos.\na) Construa uma cadeia alimentar.\nb) Identifique o produtor e o decompositor.",
        "passos": [
          "a) Uma cadeia alimentar começa sempre pelo produtor, o ser que produz o próprio alimento: aqui é o capim, uma planta que faz fotossíntese.",
          "a) Depois vêm os consumidores, por ordem de quem come quem: o gafanhoto come o capim; o sapo come o gafanhoto; a cobra come o sapo. A seta aponta no sentido do fluxo de alimento (de quem é comido para quem come).",
          "a) Cadeia: capim → gafanhoto → sapo → cobra.",
          "b) O produtor é o primeiro elemento da cadeia e produz matéria orgânica a partir de matéria mineral: o capim.",
          "b) O decompositor decompõe os restos de seres vivos mortos, devolvendo matéria mineral ao solo; nesta lista esse papel cabe aos fungos, que por isso ficam fora da sequência de predação."
        ],
        "resposta": "a) Capim → gafanhoto → sapo → cobra  ·  b) Produtor: capim; decompositor: fungos"
      },
      {
        "numero": 3,
        "cotacao": "1,0",
        "enunciado": "A conservação dos recursos naturais garante a sobrevivência das espécies.\nO desmatamento ligado à fauna e à flora de uma região resulta na…\nA contaminação do nível freático.\nB diminuição da biodiversidade.\nC expansão dos níveis de poeira.\nD poluição dos rios.\nTranscreva para a sua folha de respostas a opção correcta.",
        "passos": [
          "Desmatamento é a remoção da cobertura vegetal (flora) de uma região.",
          "Sem as árvores, desaparecem os habitats e os alimentos de muitos animais (fauna) e são destruídas as próprias plantas: diminui o número de espécies, ou seja, diminui a biodiversidade.",
          "Elimina as outras opções: a contaminação do nível freático (A) e a poluição dos rios (D) estão ligadas a substâncias poluentes lançadas na água, e não são a consequência directa indicada para a fauna e a flora; a expansão dos níveis de poeira (C) não é a perda de espécies descrita.",
          "Verificação: o enunciado liga o desmatamento à fauna e à flora — vida — e a única opção sobre a variedade de seres vivos é a B."
        ],
        "resposta": "B — diminuição da biodiversidade"
      },
      {
        "numero": 4,
        "cotacao": "2,0",
        "enunciado": "O sistema ósseo muscular é formado por ossos e músculos.\nClassifique os ossos A e B representados na figura 1, quanto à forma.",
        "passos": [
          "Classificar um osso quanto à forma é comparar as suas dimensões: comprimento, largura e espessura.",
          "Osso A (figura 1): é um osso de um membro, com o corpo alongado e as extremidades alargadas; o comprimento é muito maior do que a largura e a espessura — é um osso longo.",
          "Osso B (figura 1): assinala um osso do crânio, uma lâmina fina e larga que protege o encéfalo; a largura e o comprimento são muito maiores do que a espessura — é um osso plano (chato)."
        ],
        "resposta": "A — osso longo; B — osso plano (chato)"
      },
      {
        "numero": 5,
        "cotacao": "2,0",
        "enunciado": "O coração impulsiona a circulação do sangue no corpo humano.\na) Qual é o tipo de músculo representado na figura 2?\nb) Mencione duas (2) características do músculo da figura 2.",
        "passos": [
          "a) A figura 2 é o coração. O tecido muscular que forma a parede do coração, o miocárdio, é um tipo próprio: o músculo estriado cardíaco, que só existe no coração.",
          "b) Caracteriza esse músculo pelo aspecto e pelo funcionamento: as suas fibras são estriadas e ramificadas, unidas entre si, e a sua contracção é involuntária, rítmica e contínua, porque o coração bate sem comando da nossa vontade e sem parar.",
          "b) O corrector valoriza duas características correctas deste músculo, por exemplo: contracção involuntária e contracção rítmica/contínua (ou fibras estriadas e ramificadas)."
        ],
        "resposta": "Resposta-modelo (proposta): a) Músculo estriado cardíaco (miocárdio)  ·  b) Contracção involuntária e contracção rítmica e contínua, que não cansa; fibras estriadas e ramificadas"
      },
      {
        "numero": 6,
        "cotacao": "2,5",
        "enunciado": "As articulações são ligações entre dois ou mais ossos.\na) Cite o tipo de articulação existente na(o):\nI. Coluna vertebral;\nII. Crânio;\nIII. Pulso.\nb) Caracterize a articulação em II.",
        "passos": [
          "a) Classifica cada articulação pelo movimento que permite: imóvel, semimóvel ou móvel.",
          "a) I. Coluna vertebral: entre as vértebras há discos de cartilagem que permitem apenas um movimento limitado — articulação semimóvel.",
          "a) II. Crânio: os ossos do crânio estão encaixados uns nos outros e não se movem — articulação imóvel.",
          "a) III. Pulso: a articulação do pulso permite movimentos amplos da mão em várias direcções — articulação móvel.",
          "b) Caracteriza a articulação em II (crânio): é uma articulação imóvel — os ossos estão unidos firmemente, por suturas, sem qualquer movimento entre eles, o que dá rigidez e protecção ao encéfalo.",
          "b) O corrector valoriza dois aspectos: ausência de movimento e união firme dos ossos (suturas), com função de protecção."
        ],
        "resposta": "Resposta-modelo (proposta): a) I. Semimóvel; II. Imóvel; III. Móvel  ·  b) Articulação imóvel: os ossos do crânio estão firmemente unidos por suturas e não realizam movimento, protegendo o encéfalo"
      },
      {
        "numero": 7,
        "cotacao": "1,0",
        "enunciado": "O sistema nervoso é formado por duas partes: sistema nervoso central e sistema nervoso periférico.\nQuais são os constituintes do sistema nervoso central do ser humano?",
        "passos": [
          "O sistema nervoso central é a parte que recebe, interpreta as informações e elabora as respostas — é o centro de comando.",
          "Ele é constituído pelos órgãos nervosos protegidos pelo crânio e pela coluna vertebral: o encéfalo (dentro do crânio) e a medula espinal (dentro da coluna vertebral).",
          "Não confundas com o sistema nervoso periférico, que é formado pelos nervos e gânglios que ligam o centro ao resto do corpo."
        ],
        "resposta": "Encéfalo e medula espinal"
      },
      {
        "numero": 8,
        "cotacao": "3,5",
        "enunciado": "As fito-hormonas são substâncias orgânicas produzidas em células vegetais.\na) Mencione quatro (4) fito-hormonas.\nb) As auxinas têm a função de…\nA estimular o amadurecimento dos frutos.\nB estimular o crescimento celular.\nC inibir o crescimento de raízes.\nD inibir a germinação de sementes.\nTranscreva para a sua folha de respostas a opção correcta.\nc) Qual é a hormona responsável pelo amadurecimento das frutas?",
        "passos": [
          "a) Fito-hormonas (hormonas vegetais) são as substâncias reguladoras do crescimento e do desenvolvimento da planta. As principais são: auxinas, giberelinas, citocininas e etileno (também se pode mencionar o ácido abscísico). Basta escrever quatro.",
          "b) As auxinas actuam sobretudo no alongamento das células, promovendo o crescimento do caule e da raiz — logo, estimulam o crescimento celular: opção B.",
          "b) Elimina as outras: o amadurecimento dos frutos (A) é função do etileno; inibir processos (C e D) é papel associado ao ácido abscísico, não às auxinas.",
          "c) Pelo passo anterior, a hormona do amadurecimento dos frutos/frutas é o etileno, uma hormona gasosa libertada pelos frutos maduros, que acelera o amadurecimento dos frutos vizinhos."
        ],
        "resposta": "a) Auxinas, giberelinas, citocininas e etileno  ·  b) B — estimular o crescimento celular  ·  c) Etileno"
      },
      {
        "numero": 9,
        "cotacao": "2,0",
        "enunciado": "Todos os seres vivos apresentam uma variedade de respostas aos estímulos do meio externo.\na) Mencione duas (2) reacções das plantas aos estímulos do ambiente.\nb) Como se chama o movimento que não envolve crescimento direccionado relativamente ao estímulo?",
        "passos": [
          "a) As plantas, embora fixas, reagem a estímulos como a luz, a gravidade, a água e o tacto, orientando o crescimento ou movendo partes do corpo.",
          "a) Dois exemplos de reacções: o fototropismo — o caule cresce em direcção à luz — e o geotropismo — a raiz cresce em direcção ao centro da Terra e o caule em sentido contrário. Também seriam aceites, por exemplo, o hidrotropismo ou o fecho das folhas ao toque.",
          "a) O corrector valoriza duas reacções diferentes e correctas das plantas a estímulos do ambiente.",
          "b) Quando o movimento não é um crescimento orientado em relação ao estímulo — a direcção do movimento não depende da direcção de onde vem o estímulo — chama-se nastismo (movimento nástico ou nastia), como o abrir e fechar de certas flores conforme a luz."
        ],
        "resposta": "Resposta-modelo (proposta): a) Fototropismo (crescimento do caule em direcção à luz) e geotropismo (crescimento da raiz em direcção à gravidade)  ·  b) Nastismo (movimento nástico / nastia)"
      },
      {
        "numero": 10,
        "cotacao": "2,0",
        "enunciado": "O solo é constituído por uma parte orgânica e outra mineral.\na) Identifique os constituintes minerais.\nI. Animais;\nII. Ar;\nIII. Areia;\nIV. Argila.\nb) Um solo com boa capacidade de reter água é…\nA argiloso.\nB arenoso.\nC calcário.\nD humífero.\nTranscreva para a sua folha de respostas a opção correcta.",
        "passos": [
          "a) A parte mineral do solo vem da desagregação das rochas: são partículas minerais como a areia e a argila (e também o limo e o cascalho).",
          "a) Testa cada item: I. Animais — são matéria viva/orgânica, não mineral; II. Ar — é um dos componentes do solo, mas não é um constituinte mineral sólido; III. Areia — mineral; IV. Argila — mineral.",
          "b) A capacidade de reter água depende do tamanho das partículas: a argila tem partículas muito finas, com espaços minúsculos, que seguram a água — o solo argiloso retém muita água e pode ficar encharcado.",
          "b) Pelo contrário, o solo arenoso tem partículas grossas e deixa a água passar (é muito permeável), por isso a opção B é o contrário do pedido."
        ],
        "resposta": "a) III. Areia e IV. Argila  ·  b) A — argiloso"
      }
    ],
    "tipo": "Exame Final"
  },
  {
    "id": "bio-9-2025-2",
    "disciplina": "Biologia",
    "classe": "9ª Classe",
    "ano": 2025,
    "chamada": "2ª Chamada",
    "duracao": "90 Minutos",
    "totalPerguntas": 10,
    "fonteEnunciado": "Exame Final oficial ES1/2025, Instituto Nacional de Exames, Certificação e Equivalências (Moçambique)",
    "originalPdf": "https://storage.mozexames.com/papers/318ce046-6307-410e-b36e-fbe01a1f15d4/question.pdf",
    "perguntas": [
      {
        "numero": 1,
        "cotacao": "1,6",
        "enunciado": "Ecossistema é o conjunto de factores bióticos e abióticos em interacção.\nAgrupe os ecossistemas abaixo apresentados em naturais e artificiais.\nA- Aquários\nB- Barragens\nC- Desertos\nD- Florestas\nE- Jardim\nF- Oceanos\nG- Plantações\nH- Rios",
        "passos": [
          "Usa o critério da origem: ecossistema natural é o que se formou sem intervenção humana; artificial é o que foi criado e é mantido pelo ser humano.",
          "Sem intervenção humana: C- Desertos, D- Florestas, F- Oceanos e H- Rios — existem e mantêm-se por si próprios.",
          "Criados pelo ser humano: A- Aquários (ambiente construído e mantido em casa/laboratório), B- Barragens (lago artificial criado por uma parede construída), E- Jardim (plantas escolhidas e cuidadas) e G- Plantações (culturas feitas pelo agricultor).",
          "Verificação: são 4 naturais e 4 artificiais, e todos os oito itens (A a H) ficam agrupados uma única vez."
        ],
        "resposta": "Naturais: C- Desertos, D- Florestas, F- Oceanos, H- Rios  ·  Artificiais: A- Aquários, B- Barragens, E- Jardim, G- Plantações"
      },
      {
        "numero": 2,
        "cotacao": "1,4",
        "enunciado": "As relações entre os seres vivos num ecossistema podem ser esquematizadas numa cadeia alimentar.\na) Considerando os organismos feijoeiro, sapo, águia, gafanhoto e cobra, a cadeia alimentar entre eles será…\nA gafanhoto → feijoeiro → sapo → águia → cobra.\nB gafanhoto → águia → feijoeiro → sapo → cobra.\nC feijoeiro → gafanhoto → sapo → cobra → águia.\nD feijoeiro → sapo → gafanhoto → cobra → águia.\nTranscreva para a sua folha de respostas a opção correcta.\nb) Qual é o nível trófico que ocupa a águia nessa cadeia?",
        "passos": [
          "a) Toda a cadeia começa pelo produtor, a planta que faz fotossíntese: aqui, o feijoeiro. Isso elimina as opções A e B, que começam pelo gafanhoto.",
          "a) Segue quem come quem: o gafanhoto (herbívoro) come o feijoeiro; o sapo come o gafanhoto; a cobra come o sapo; a águia come a cobra. A ordem é feijoeiro → gafanhoto → sapo → cobra → águia: opção C. A opção D troca o sapo e o gafanhoto, o que está errado, porque o sapo não come plantas e o gafanhoto não come sapos.",
          "b) Conta os níveis tróficos a partir do produtor: feijoeiro = 1º nível (produtor); gafanhoto = 2º nível (consumidor de 1ª ordem); sapo = 3º nível (consumidor de 2ª ordem); cobra = 4º nível (consumidor de 3ª ordem); águia = 5º nível (consumidor de 4ª ordem).",
          "Verificação: a águia é o último elemento da cadeia da opção C, por isso tem de ocupar o nível mais alto dos cinco — o 5º nível trófico."
        ],
        "resposta": "a) C — feijoeiro → gafanhoto → sapo → cobra → águia  ·  b) 5º nível trófico (consumidor de 4ª ordem)"
      },
      {
        "numero": 3,
        "cotacao": "1,0",
        "enunciado": "O desmatamento é a remoção total ou parcial da cobertura vegetal de uma região, podendo ser causada por actividades humanas.\nIdentifique o fenómeno ecológico que é, directamente, acelerado pelo desmatamento.\nA Erosão\nB Sedimentação\nC Tectanismo\nD Vulcanismo\nTranscreva para a sua folha de respostas a opção correcta.",
        "passos": [
          "A cobertura vegetal protege o solo: as raízes seguram a terra e as copas abrandam a chuva.",
          "Ao remover a vegetação (desmatamento), o solo fica exposto e é arrastado com facilidade pela água da chuva e pelo vento — esse desgaste e arrastamento do solo é a erosão, que fica directamente acelerada.",
          "Elimina as outras: a sedimentação (B) é a deposição de sedimentos, um fenómeno posterior e indirecto; o tectanismo (C) e o vulcanismo (D) são fenómenos internos da Terra, sem relação com a actividade humana nem com a vegetação."
        ],
        "resposta": "A — Erosão"
      },
      {
        "numero": 4,
        "cotacao": "1,5",
        "enunciado": "O esqueleto do ser humano é constituído por vários ossos.\nClassifique os ossos indicados pelos números 1, 2 e 3 da figura 1, quanto à forma.",
        "passos": [
          "Classificar quanto à forma é comparar comprimento, largura e espessura de cada osso assinalado na figura 1, que representa o membro superior.",
          "1: assinala a omoplata (escápula), o osso triangular e fino do ombro, com largura e comprimento muito maiores do que a espessura — osso plano (chato).",
          "2: assinala um osso do antebraço (rádio/cúbito), alongado, com o comprimento muito maior do que a largura e a espessura — osso longo.",
          "3: assinala os pequenos ossos da mão, de dimensões reduzidas e semelhantes nas três direcções — ossos curtos."
        ],
        "resposta": "1 — osso plano (chato); 2 — osso longo; 3 — ossos curtos"
      },
      {
        "numero": 5,
        "cotacao": "2,0",
        "enunciado": "A figura 2 representa a estrutura do músculo.\na) Os números I e II representam respectivamente o músculo…\nA estriado cardíaco e liso.\nB estriado esquelético e liso.\nC liso e estriado cardíaco.\nD liso e estriado esquelético.\nTranscreva para a sua folha de respostas a opção correcta.\nb) Caracterize o músculo representado em II com dois (2) aspectos.",
        "passos": [
          "a) Identifica cada número pelo órgão da figura 2: I é um órgão interno oco (o estômago), cuja parede é formada por músculo sem estrias e de contracção involuntária — músculo liso.",
          "a) II é um músculo de um membro, ligado aos ossos do esqueleto — músculo estriado esquelético. Combinando I e II, nessa ordem: liso e estriado esquelético — opção D.",
          "a) Elimina as outras: o músculo estriado cardíaco só existe no coração, que não aparece na figura, por isso as opções A e C falham; a opção B troca a ordem dos dois tipos.",
          "b) Caracteriza o músculo em II pelo funcionamento e pela ligação ao corpo: é um músculo de contracção voluntária (obedece à nossa vontade) e de contracção rápida e forte, ligado aos ossos por tendões, o que permite os movimentos do corpo.",
          "b) O corrector valoriza dois aspectos correctos do músculo estriado esquelético, por exemplo: contracção voluntária e ligação aos ossos (ou aspecto estriado e contracção rápida)."
        ],
        "resposta": "Resposta-modelo (proposta): a) D — liso e estriado esquelético  ·  b) Músculo estriado esquelético: contracção voluntária, rápida e forte, e está ligado aos ossos do esqueleto (por tendões), permitindo os movimentos"
      },
      {
        "numero": 6,
        "cotacao": "2,0",
        "enunciado": "As articulações são ligações entre dois ou mais ossos.\na) Mencione o tipo de articulação existente entre os ossos das/do…\nI. Vértebras\nII. Joelho\nb) Caracterize a articulação imóvel com dois aspectos.",
        "passos": [
          "a) Classifica cada articulação pelo movimento permitido: imóvel, semimóvel ou móvel.",
          "a) I. Entre as vértebras há discos de cartilagem que só permitem um movimento limitado da coluna — articulação semimóvel.",
          "a) II. O joelho permite movimentos amplos da perna (dobrar e esticar) — articulação móvel.",
          "b) Caracteriza a articulação imóvel: nela os ossos estão firmemente unidos e não há qualquer movimento entre eles, como acontece entre os ossos do crânio, unidos por suturas, para proteger o encéfalo.",
          "b) Os dois aspectos pedidos são: ausência de movimento e união firme/rígida dos ossos (função de protecção e sustentação). O corrector valoriza esses dois aspectos."
        ],
        "resposta": "Resposta-modelo (proposta): a) I. Semimóvel; II. Móvel  ·  b) Articulação imóvel: não permite qualquer movimento entre os ossos e os ossos estão firmemente unidos (por exemplo, por suturas, no crânio), com função de protecção"
      },
      {
        "numero": 7,
        "cotacao": "2,0",
        "enunciado": "O sistema nervoso é responsável por controlar todos os outros sistemas dos organismos.\nComo é dividido o sistema nervoso do ser humano?",
        "passos": [
          "Divide o sistema nervoso pela posição e pela função das suas partes: uma parte central, que comanda, e uma parte periférica, que liga o centro a todo o corpo.",
          "Sistema nervoso central: formado pelo encéfalo (protegido pelo crânio) e pela medula espinal (protegida pela coluna vertebral); recebe e interpreta as informações e elabora as respostas.",
          "Sistema nervoso periférico: formado pelos nervos (cranianos e raquidianos) e pelos gânglios, que conduzem os estímulos dos órgãos dos sentidos para o centro e levam as ordens do centro aos músculos e às glândulas.",
          "Verificação: encéfalo + medula espinal (central) e nervos + gânglios (periférico) cobrem todos os órgãos do sistema nervoso, sem sobreposição."
        ],
        "resposta": "Sistema nervoso central (encéfalo e medula espinal) e sistema nervoso periférico (nervos e gânglios)"
      },
      {
        "numero": 8,
        "cotacao": "3,5",
        "enunciado": "Hormonas vegetais são substâncias orgânicas produzidas em células, tecidos ou órgãos vegetais que funcionam como agentes reguladores.\na) Mencione três (3) hormonas vegetais.\nb) Nas plantas, o etileno tem a função de…\nA estimular o alongamento dos caules.\nB estimular o amadurecimento de frutos.\nC inibir a germinação das sementes.\nD inibir a queda de folhas e de frutos.\nTranscreva para a sua folha de respostas a opção correcta.\nc) Qual é a aplicação da giberelina na agricultura?",
        "passos": [
          "a) Hormonas vegetais (fito-hormonas) são os reguladores do crescimento da planta. Três delas: auxinas, giberelinas e etileno (também são correctas as citocininas e o ácido abscísico). Basta escrever três.",
          "b) O etileno é a hormona gasosa libertada pelos frutos, conhecida por acelerar o amadurecimento — é por isso que um fruto maduro faz amadurecer os frutos vizinhos. A sua função é estimular o amadurecimento de frutos: opção B.",
          "b) Elimina as outras: o alongamento dos caules (A) é estimulado pelas auxinas e giberelinas; a inibição da germinação (C) está associada ao ácido abscísico; e o etileno favorece — não inibe — a queda de folhas e de frutos, por isso a opção D inverte a sua acção.",
          "c) Na agricultura, a giberelina é aplicada para estimular o crescimento das plantas: por exemplo, para obter frutos maiores e sem sementes (como nas uvas de mesa) e para promover a germinação e o alongamento dos caules. O corrector valoriza uma aplicação correcta e concreta.",
          "c) Apresenta uma aplicação como proposta fundamentada; outras aplicações correctas da giberelina também são aceites."
        ],
        "resposta": "Resposta-modelo (proposta): a) Auxinas, giberelinas e etileno  ·  b) B — estimular o amadurecimento de frutos  ·  c) Aplicação da giberelina, por exemplo, na produção de frutos maiores e sem sementes (uvas) e na estimulação da germinação e do crescimento das plantas"
      },
      {
        "numero": 9,
        "cotacao": "2,5",
        "enunciado": "Todos os seres vivos apresentam uma capacidade de resposta a estímulos do meio externo.\nUma planta colocada num ambiente mais ou menos escuro e submetida a uma iluminação unilateral apresentou-se conforme o representado na figura 3.\na) Qual é o nome do fenómeno observado?\nb) Diferencie tropismo de nastismo.",
        "passos": [
          "a) Na figura 3, o caule da planta curvou-se e cresceu em direcção à luz que vem de um só lado (iluminação unilateral). Um crescimento orientado em direcção ao estímulo luminoso é o fototropismo (fototropismo positivo do caule).",
          "b) Compara os dois movimentos por três critérios: tipo de movimento, relação com a direcção do estímulo e exemplo.",
          "b) Tropismo: é um movimento de crescimento, lento e duradouro, cuja direcção depende da direcção do estímulo — a planta cresce em direcção ao estímulo (tropismo positivo) ou em sentido contrário (tropismo negativo), como o caule em direcção à luz.",
          "b) Nastismo (movimento nástico): não é um movimento de crescimento orientado; a direcção do movimento não depende da direcção de onde vem o estímulo, como o abrir e fechar das flores ou o fecho das folhas da mimosa ao toque."
        ],
        "resposta": "a) Fototropismo  ·  b) Tropismo: movimento de crescimento orientado, cuja direcção depende da direcção do estímulo · Nastismo: movimento que não envolve crescimento direccionado, cuja direcção não depende da direcção do estímulo"
      },
      {
        "numero": 10,
        "cotacao": "2,5",
        "enunciado": "O solo é constituído por uma parte mineral, uma parte orgânica, água e ar.\na) Como é formada a parte orgânica do solo?\nb) Associe os tipos de solo da coluna I com as respectivas características da coluna II.\nColuna I\n1. Solo argiloso\n2. Solo arenoso\n3. Solo humífero\nColuna II\na. Muito permeável água\nb. Fértil e fácil de trabalhar\nc. Retém água ficando encharcado",
        "passos": [
          "a) A parte orgânica do solo é o húmus: forma-se a partir da decomposição, feita por microrganismos e outros decompositores, dos restos de seres vivos mortos (folhas e plantas mortas, restos de animais), que se transformam em matéria orgânica escura e rica em nutrientes.",
          "b) Associa cada solo pela característica que resulta da sua composição: 1. Solo argiloso — partículas muito finas que seguram a água → c. Retém água ficando encharcado.",
          "b) 2. Solo arenoso — partículas grossas, com grandes espaços entre elas, que deixam a água passar com facilidade → a. Muito permeável água.",
          "b) 3. Solo humífero — rico em matéria orgânica (húmus), logo com muitos nutrientes e solto → b. Fértil e fácil de trabalhar.",
          "Verificação: cada letra da coluna II é usada uma só vez (1–c, 2–a, 3–b) e nenhuma característica fica trocada — um solo arenoso não pode reter água, nem um solo argiloso ser muito permeável."
        ],
        "resposta": "Resposta-modelo (proposta): a) A parte orgânica (húmus) é formada pela decomposição dos restos de plantas e de animais mortos  ·  b) 1–c; 2–a; 3–b"
      }
    ],
    "tipo": "Exame Final"
  },
  {
    "id": "geo-9-2025-1",
    "disciplina": "Geografia",
    "classe": "9ª Classe",
    "ano": 2025,
    "chamada": "1ª Chamada",
    "duracao": "90 Minutos",
    "totalPerguntas": 10,
    "fonteEnunciado": "Exame Final oficial ES1/2025, Instituto Nacional de Exames, Certificação e Equivalências (Moçambique)",
    "originalPdf": "https://storage.mozexames.com/papers/d1469d32-a04f-4b32-bb36-b1142585c5ce/question.pdf",
    "perguntas": [
      {
        "numero": 1,
        "cotacao": "2,0",
        "enunciado": "O mapa ao lado representa os países que fazem fronteira com Moçambique.\nFaça a legenda dos países que fazem fronteira com Moçambique representados pelas letras A, B, C e D.",
        "passos": [
          "Localiza Moçambique no mapa: é o país da costa oriental (à direita), banhado pelo oceano Índico.",
          "Percorre as fronteiras de norte para sul. A letra A está no pequeno país junto ao lago Niassa (Malawi), encaixado entre Moçambique, a Tanzânia e a Zâmbia: é o Malawi.",
          "A letra D está no grande país a noroeste de Moçambique, acima do Zimbabué: é a Zâmbia.",
          "A letra B está no país a oeste da zona centro de Moçambique, entre a Zâmbia e a África do Sul: é o Zimbabué.",
          "A letra C está no grande país do sul do mapa, que faz fronteira com o sul de Moçambique: é a África do Sul."
        ],
        "resposta": "A — Malawi  ·  B — Zimbabué  ·  C — África do Sul  ·  D — Zâmbia"
      },
      {
        "numero": 2,
        "cotacao": "4,0",
        "enunciado": "Em Moçambique, distinguem-se duas grandes unidades geológicas.\na) Assinale com P as características do Pré-câmbrico e com F as do Fanerozóico\nA Distribui-se sobretudo pela região Norte e Centro-Ocidental\nB Representado pelo Cratão Rodesiano e Cinturão de Moçambique\nC É constituído essencialmente por rochas sedimentares\nD Ocupa quase a totalidade das províncias de Inhambane, Gaza e Maputo\nb) Estabeleça a correspondência entre os recursos minerais (Coluna A) e as respectivas províncias de ocorrência (Coluna B).\nColuna A: 1. Bentonite · 2. Cobre · 3. Gás natural · 4. Grafite\nColuna B: A. Cabo Delgado · B. Inhambane · C. Maputo · D. Tete",
        "passos": [
          "a) O Pré-câmbrico é a unidade mais antiga, formada por rochas cristalinas (cratões e cinturões antigos); o Fanerozóico é a unidade mais recente, formada sobretudo por rochas sedimentares das bacias do sul e da faixa costeira.",
          "a) A — o Norte e o Centro-Ocidental são dominados pelo soco cristalino antigo: P (Pré-câmbrico).",
          "a) B — o Cratão Rodesiano e o Cinturão de Moçambique são formações muito antigas: P (Pré-câmbrico).",
          "a) C — as rochas sedimentares são típicas das bacias recentes: F (Fanerozóico).",
          "a) D — Inhambane, Gaza e Maputo situam-se na grande bacia sedimentar do Sul: F (Fanerozóico).",
          "b) Bentonite: explorada na zona de Boane, na província de Maputo → 1-C.",
          "b) Cobre: ocorre na província de Tete → 2-D.",
          "b) Gás natural: os jazigos de Pande e Temane localizam-se na província de Inhambane → 3-B.",
          "b) Grafite: os grandes jazigos de Balama localizam-se na província de Cabo Delgado → 4-A."
        ],
        "resposta": "a) A — P  ·  B — P  ·  C — F  ·  D — F  ·  b) 1 — C (Maputo)  ·  2 — D (Tete)  ·  3 — B (Inhambane)  ·  4 — A (Cabo Delgado)"
      },
      {
        "numero": 3,
        "cotacao": "3,0",
        "enunciado": "Observe o mapa ao lado que representa a distribuição do clima em Moçambique.\na) Indique a letra correspondente a cada tipo de clima.\n1. Tropical seco\n2. Tropical semi-árido\n3. Tropical de altitude\n4. Tropical húmido\nb) Caracterize com dois (2) aspectos o clima tropical de altitude.",
        "passos": [
          "a) Lê o mapa pelas suas zonas: a letra A cobre o Norte do país e toda a faixa costeira — as regiões mais chuvosas e sob influência do oceano: é o clima tropical húmido (4 — A).",
          "a) A letra B cobre o interior do Sul (Gaza e Inhambane interiores) e a zona de Tete/vale do Zambeze — regiões do interior com pouca chuva: é o clima tropical seco (1 — B).",
          "a) A letra C assinala apenas uma pequena área no extremo sudoeste (interior de Gaza, junto à fronteira): é a zona mais árida do país, o clima tropical semi-árido (2 — C).",
          "a) A letra D aparece em pequenas manchas nas zonas montanhosas (Lichinga, Gurué, Angónia e Manica): é o clima tropical de altitude (3 — D).",
          "b) O clima tropical de altitude ocorre nas terras altas (acima de cerca de 1000 m). Primeiro aspecto: temperaturas amenas, mais baixas do que nas regiões vizinhas de menor altitude, por causa da altitude.",
          "b) Segundo aspecto: precipitação abundante ao longo do ano, porque as massas de ar húmido são obrigadas a subir nas encostas das montanhas."
        ],
        "resposta": "a) 1. Tropical seco — B  ·  2. Tropical semi-árido — C  ·  3. Tropical de altitude — D  ·  4. Tropical húmido — A  ·  b) Resposta-modelo (proposta): ocorre nas zonas de maior altitude (terras altas de Manica, Tete, Zambézia e Niassa), com temperaturas amenas (mais baixas devido à altitude) e precipitação abundante"
      },
      {
        "numero": 4,
        "cotacao": "2,0",
        "enunciado": "Em que província se localizam os seguintes parques e reservas nacionais?\nA Parque Nacional de Gorongosa\nB Parque Nacional de Bazaruto\nC Reserva de Niassa\nD Reserva do Gilé",
        "passos": [
          "A — O Parque Nacional de Gorongosa situa-se no extremo sul da província de Sofala, no centro do país.",
          "B — O Parque Nacional de Bazaruto é um arquipélago ao largo da costa da província de Inhambane, no Sul.",
          "C — A Reserva de Niassa (Reserva Nacional do Niassa) é a maior área protegida do país e fica na província do Niassa, no Norte.",
          "D — A Reserva do Gilé localiza-se na província da Zambézia, no centro-norte do país."
        ],
        "resposta": "A — Sofala  ·  B — Inhambane  ·  C — Niassa  ·  D — Zambézia"
      },
      {
        "numero": 5,
        "cotacao": "1,0",
        "enunciado": "O relevo exerce influência sobre os rios de Moçambique.\nIndique duas (2) características dos rios moçambicanos, de acordo com a influência do relevo.",
        "passos": [
          "Recorda a forma do relevo moçambicano: terras altas a oeste (interior) que descem em degraus até à planície costeira, a este.",
          "Primeira característica: acompanhando a inclinação do relevo, os rios correm, na sua maioria, de oeste para este, nascendo no interior (ou nos países vizinhos) e desaguando no oceano Índico.",
          "Segunda característica: ao descerem os degraus do relevo, os rios apresentam corredeiras e quedas de água no curso superior e médio (o que lhes dá grande potencial hidroeléctrico), sendo mais calmos e navegáveis no curso inferior, já na planície."
        ],
        "resposta": "Resposta-modelo (proposta): (1) correm predominantemente de oeste para este, seguindo a inclinação do relevo até ao oceano Índico; (2) apresentam corredeiras e quedas de água ao atravessar os degraus do relevo (são navegáveis sobretudo no curso inferior, na planície costeira)"
      },
      {
        "numero": 6,
        "cotacao": "3,0",
        "enunciado": "Observe a pirâmide ao lado.\na) Copie para a sua folha de respostas, apenas as opções que caracterizam a mesma.\nA O topo (idade dos idosos) é curto e estreito, sinónimo de que a esperança de vida é longa\nB Há mais homens na faixa etária dos 10 aos 14 anos\nC De um modo geral, o número de mulheres é inferior ao dos homens\nD Possui uma base (dos jovens) muito larga\nb) Mencione duas (2) implicações de uma pirâmide deste tipo para Moçambique.",
        "passos": [
          "a) Lê a forma da pirâmide: base muito larga que vai estreitando rapidamente até um topo muito fino — é a pirâmide típica de uma população jovem, com natalidade elevada.",
          "a) A é falsa: um topo curto e estreito significa que poucas pessoas atingem idades avançadas, ou seja, a esperança de vida é baixa (e não longa).",
          "a) B é verdadeira: comparando os dois lados da faixa dos 10 aos 14 anos, a barra dos homens (à esquerda) é mais comprida do que a das mulheres.",
          "a) C é falsa: observando a pirâmide no seu conjunto, o número de mulheres não é inferior ao dos homens (nas idades adultas as barras das mulheres são iguais ou mais compridas).",
          "a) D é verdadeira: a base, que representa as crianças e os jovens, é muito larga — salta à vista no desenho.",
          "b) Com uma base tão larga, a maioria da população é jovem e ainda não trabalha: há uma elevada dependência dos jovens em relação à população activa.",
          "b) Uma população assim cresce rapidamente e pressiona os serviços sociais: o Estado precisa de investir cada vez mais em escolas, saúde materno-infantil e, dentro de poucos anos, em emprego para os jovens que chegam à idade de trabalhar."
        ],
        "resposta": "a) B e D  ·  b) Resposta-modelo (proposta): elevada proporção de jovens dependentes (forte pressão sobre a população activa) e grande pressão sobre os serviços de educação e saúde, com necessidade futura de muitos postos de trabalho"
      },
      {
        "numero": 7,
        "cotacao": "1,0",
        "enunciado": "Em Moçambique, predomina a agricultura familiar ou de subsistência.\nCaracterize com dois (2) aspectos este tipo de agricultura.",
        "passos": [
          "Pensa na machamba familiar típica: é trabalhada pela própria família, em pequenas parcelas, com meios muito simples.",
          "Primeiro aspecto: usa instrumentos rudimentares (como a enxada) e mão-de-obra familiar, praticamente sem mecanização nem adubos químicos, dependendo da chuva — daí a sua baixa produtividade.",
          "Segundo aspecto: a produção destina-se, acima de tudo, ao consumo da própria família (autoconsumo), vendendo-se apenas um pequeno excedente, quando existe."
        ],
        "resposta": "Resposta-modelo (proposta): (1) pratica-se em pequenas parcelas, com instrumentos rudimentares e mão-de-obra familiar, dependendo das chuvas (baixa produtividade); (2) a produção destina-se principalmente ao autoconsumo da família"
      },
      {
        "numero": 8,
        "cotacao": "2,0",
        "enunciado": "A pesca em Moçambique, pode ser dividida em dois tipos, tendo em conta o nível de desenvolvimento tecnológico.\na) Identifique-os.\nb) Caracterize com dois (2) aspectos o tipo de pesca, que pelo seu nível tecnológico e volume de produção, se pode classificar como uma verdadeira indústria.",
        "passos": [
          "a) Pelo nível tecnológico, distinguem-se a pesca artesanal (meios simples e tradicionais) e a pesca industrial (meios modernos e de grande capacidade).",
          "b) O tipo descrito é a pesca industrial. Primeiro aspecto: utiliza tecnologia moderna — grandes embarcações equipadas com meios de detecção do pescado, redes de grande dimensão e sistemas de conservação/congelação a bordo.",
          "b) Segundo aspecto: obtém um grande volume de produção, com mão-de-obra assalariada e organização empresarial, destinando o pescado ao mercado interno e à exportação — funciona como uma verdadeira indústria."
        ],
        "resposta": "a) Pesca artesanal e pesca industrial  ·  b) Resposta-modelo (proposta): a pesca industrial usa embarcações e tecnologia modernas (detecção, grandes redes, congelação a bordo) e tem um elevado volume de produção, organizada como empresa e orientada para o mercado e a exportação"
      },
      {
        "numero": 9,
        "cotacao": "1,0",
        "enunciado": "A actividade industrial é uma das responsáveis pela poluição atmosférica.\nCom dois (2) aspectos, explique de que forma a actividade industrial pode influenciar negativamente na atmosfera.",
        "passos": [
          "Pensa no que sai das chaminés das fábricas: gases e fumos resultantes da queima de combustíveis e dos processos de fabrico.",
          "Primeiro aspecto: as indústrias libertam gases como o dióxido de carbono, o dióxido de enxofre e os óxidos de azoto; estes gases contribuem para o efeito de estufa (aquecimento do clima) e, dissolvidos na água da chuva, originam as chuvas ácidas, que danificam solos, vegetação e construções.",
          "Segundo aspecto: os fumos e as poeiras/partículas lançados no ar degradam a qualidade do ar que se respira, provocando doenças respiratórias nas populações que vivem perto das zonas industriais."
        ],
        "resposta": "Resposta-modelo (proposta): (1) emissão de gases (dióxido de carbono, dióxido de enxofre, óxidos de azoto) que aumentam o efeito de estufa e provocam chuvas ácidas; (2) libertação de fumos e partículas que poluem o ar e causam doenças respiratórias"
      },
      {
        "numero": 10,
        "cotacao": "1,0",
        "enunciado": "Moçambique possui portos importantes onde se manuseia a carga nacional e da região da África Austral.\nMencione dois (2) dos principais portos de Moçambique.",
        "passos": [
          "Recorda a costa moçambicana de sul para norte: Maputo (sul), Beira (centro) e Nacala (norte) são os três grandes portos de águas profundas do país.",
          "Qualquer dois deles respondem à pergunta; os mais movimentados são o porto de Maputo, que serve também a África do Sul, e o porto da Beira, porta de entrada do Zimbabué, da Zâmbia e do Malawi."
        ],
        "resposta": "Porto de Maputo e Porto da Beira (também válido: Porto de Nacala)"
      }
    ],
    "tipo": "Exame Final"
  },
  {
    "id": "por-9-2025-1",
    "disciplina": "Português",
    "classe": "9ª Classe",
    "ano": 2025,
    "chamada": "1ª Chamada",
    "duracao": "120 Minutos",
    "totalPerguntas": 10,
    "fonteEnunciado": "Exame Final oficial ES1/2025, Instituto Nacional de Exames, Certificação e Equivalências (Moçambique)",
    "originalPdf": "https://storage.mozexames.com/papers/e9ce4e4b-fbe2-424c-9012-6cd19cb4bc9f/question.pdf",
    "perguntas": [
      {
        "numero": 1,
        "cotacao": "2,0",
        "enunciado": "Texto — A Importância da Escola\nO ser humano não nasce pronto. Ao nascer, todos precisamos do auxílio e cuidado dos outros para desenvolvermos. Aprendendo sozinho ou com os outros através da socialização, adquirimos experiências.\nAprender e ensinar constituem, assim dois processos que deverão estar no cerne do trabalho que se desenvolve em qualquer ambiente escolar. A escola possibilita através da convivência e da troca de conhecimento, um amadurecimento intelectual e amistoso contribuindo, deste modo, para o convívio social. Além disso, é responsável pelas áreas científicas e de habilidades sócio-emocionais que produzem o autoconhecimento e a aprendizagem de diversos conteúdos que serão usados nas actividades vividas pelos estudantes no decorrer da vida.\nÉ preciso considerar o valor que a escola tem na vida dos educandos. Ela constrói o repertório intelectual e académico no âmbito cognitivo, ensina a conviver em sociedade de maneira crítica e a explorar o contexto social, moldando as experiências emocionais.\nPor se tratar de um ambiente social, onde as crianças vivenciam as suas primeiras relações com os seus pares, a escola permite assim a formação das primeiras amizades. O ambiente escolar valoriza a construção de vínculos, afectividade, identidade que é essencial para o desenvolvimento pessoal e social dos alunos, porque essa identificação com os seus semelhantes ajuda no desempenho académico.\nA escola é decisiva para que as crianças e os jovens compreendam o mundo em que vivem e para que possam intervir, de forma crítica e responsável pelo seu futuro social.\nA Importância da Escola/ EDUCARE Psicopedagogia (Texto adaptado)\nVocabulário\nCerne – âmago;\nAfectividade – afeccionidade, afectuosidade.\n\n1. “O ser humano não nasce pronto.” (palavra sublinhada: não)\na) O que é que o ser humano precisa ao nascer?\nb) Do ponto de vista morfológico, classifique a palavra sublinhada na frase em 1.",
        "passos": [
          "a) Procura a prova no primeiro parágrafo do texto: logo a seguir à frase citada, lê-se “Ao nascer, todos precisamos do auxílio e cuidado dos outros para desenvolvermos.” É essa a necessidade indicada pelo texto.",
          "b) A palavra sublinhada é “não”. Repara que ela é invariável (não muda de forma) e serve para negar o sentido do verbo “nasce”: palavras com esta função são advérbios.",
          "b) Como “não” exprime negação, classifica-se, mais precisamente, como advérbio de negação."
        ],
        "resposta": "a) Ao nascer, o ser humano precisa do auxílio e do cuidado dos outros para se desenvolver.  b) “não” é um advérbio de negação."
      },
      {
        "numero": 2,
        "cotacao": "3,5",
        "enunciado": "“Aprender e ensinar constituem assim, dois processos que deverão estar no cerne do trabalho.” (oração sublinhada: que deverão estar no cerne do trabalho)\na) Qual é a importância da escola, segundo o texto?\nb) Que responsabilidade a escola tem na vida dos estudantes?\nc) Classifique a oração sublinhada na frase em 2.",
        "passos": [
          "a) Vai ao segundo parágrafo: “A escola possibilita através da convivência e da troca de conhecimento, um amadurecimento intelectual e amistoso contribuindo, deste modo, para o convívio social.” É aí que o texto mostra a importância da escola.",
          "b) No mesmo parágrafo, o texto usa a expressão “é responsável pelas áreas científicas e de habilidades sócio-emocionais que produzem o autoconhecimento e a aprendizagem de diversos conteúdos que serão usados nas actividades vividas pelos estudantes no decorrer da vida” — é essa a responsabilidade atribuída à escola.",
          "c) A oração sublinhada começa pelo pronome relativo “que”, que se refere ao nome anterior “processos” e o caracteriza, restringindo o seu sentido (não são processos quaisquer, são os que deverão estar no cerne do trabalho).",
          "c) Orações introduzidas por um pronome relativo, que funcionam como um adjectivo junto de um nome, são orações subordinadas adjectivas relativas; como restringem o sentido do nome, são restritivas."
        ],
        "resposta": "a) Segundo o texto, a escola é importante porque possibilita, através da convivência e da troca de conhecimento, um amadurecimento intelectual e amistoso, contribuindo para o convívio social.  b) A escola é responsável pelas áreas científicas e de habilidades sócio-emocionais, que produzem o autoconhecimento e a aprendizagem de diversos conteúdos usados pelos estudantes ao longo da vida.  c) Oração subordinada adjectiva relativa restritiva."
      },
      {
        "numero": 3,
        "cotacao": "1,0",
        "enunciado": "“Além disso, é responsável pelas áreas científicas e de habilidades sócio-emocionais... .” (palavra sublinhada: sócio-emocionais)\na) Identifique a função sintáctica da expressão sublinhada na frase em 3.\nb) Quanto ao processo de formação, como se classifica a palavra sócio-emocionais?",
        "passos": [
          "a) Pergunta: “habilidades de que tipo?” A palavra sublinhada, “sócio-emocionais”, acompanha o nome “habilidades” e qualifica-o, restringindo o seu sentido (não são habilidades quaisquer). Quem acompanha e restringe um nome desempenha a função de modificador restritivo do nome (na gramática tradicional, atributo/adjunto adnominal).",
          "b) Observa a construção da palavra: ela junta dois elementos com sentido próprio, “sócio” e “emocionais”, ligados por hífen, sem que nenhum deles perca letras ou se altere.",
          "b) Quando uma palavra se forma pela simples junção de dois ou mais elementos que se mantêm intactos, trata-se de uma palavra composta por justaposição."
        ],
        "resposta": "a) Modificador restritivo do nome “habilidades” (qualifica-o, como um atributo).  b) É uma palavra composta por justaposição."
      },
      {
        "numero": 4,
        "cotacao": "2,5",
        "enunciado": "“É preciso considerar o valor que a escola tem na vida dos educandos.” (palavras sublinhadas: valor; educandos)\na) De acordo com o texto, descreva o valor da escola na vida dos educandos.\nb) Reescreva a frase em 4 substituindo as palavras sublinhadas por outras equivalentes.",
        "passos": [
          "a) Vai ao terceiro parágrafo e lê o que se diz a seguir à frase citada: “Ela constrói o repertório intelectual e académico no âmbito cognitivo, ensina a conviver em sociedade de maneira crítica e a explorar o contexto social, moldando as experiências emocionais.” Descreve o valor da escola com estas ideias, por palavras tuas.",
          "b) Procura equivalentes (sinónimos) que mantenham o sentido: “valor” pode ser substituído por “importância” e “educandos” por “alunos” (ou “estudantes”).",
          "b) Reescreve a frase inteira com as substituições, sem alterar o resto: o sentido tem de ficar o mesmo."
        ],
        "resposta": "a) O valor da escola na vida dos educandos está em construir o seu repertório intelectual e académico, no âmbito cognitivo, ensinar-lhes a conviver em sociedade de maneira crítica e a explorar o contexto social, moldando as suas experiências emocionais.  b) “É preciso considerar a importância que a escola tem na vida dos alunos.”"
      },
      {
        "numero": 5,
        "cotacao": "1,5",
        "enunciado": "A escola, um lugar social. (palavra sublinhada: lugar)\nQuais são os aspectos que o ambiente escolar valoriza?",
        "passos": [
          "Procura no quarto parágrafo a frase com o verbo “valoriza”: “O ambiente escolar valoriza a construção de vínculos, afectividade, identidade que é essencial para o desenvolvimento pessoal e social dos alunos…”",
          "Lista apenas os aspectos nomeados nessa frase, sem acrescentar ideias de outros parágrafos."
        ],
        "resposta": "O ambiente escolar valoriza a construção de vínculos, a afectividade e a identidade."
      },
      {
        "numero": 6,
        "cotacao": "1,5",
        "enunciado": "De acordo com o texto, qual é a finalidade da escola?",
        "passos": [
          "A finalidade (o objectivo último) costuma aparecer no fecho do texto. Vai ao último parágrafo: “A escola é decisiva para que as crianças e os jovens compreendam o mundo em que vivem e para que possam intervir, de forma crítica e responsável pelo seu futuro social.”",
          "Responde transformando essa passagem numa frase completa: compreender o mundo + intervir nele de forma crítica e responsável."
        ],
        "resposta": "A finalidade da escola é fazer com que as crianças e os jovens compreendam o mundo em que vivem e possam intervir nele, de forma crítica e responsável, pelo seu futuro social."
      },
      {
        "numero": 7,
        "cotacao": "1,0",
        "enunciado": "É preciso começar a considerar o valor da escola. (expressão sublinhada: começar a considerar)\nA que conjugação pertence a expressão sublinhada na frase?",
        "passos": [
          "Observa a estrutura da expressão sublinhada: há dois verbos ligados — “começar” (verbo conjugado) + a preposição “a” + “considerar” (no infinitivo).",
          "Quando um verbo auxiliar se junta a um verbo principal no infinitivo (com ou sem preposição) formando um só sentido, estamos perante uma conjugação perifrástica.",
          "Neste caso, “começar a” indica ainda o início da acção (valor incoativo/inceptivo), mas a conjugação pedida é a perifrástica."
        ],
        "resposta": "A expressão “começar a considerar” pertence à conjugação perifrástica (verbo auxiliar “começar” + preposição “a” + infinitivo “considerar”, com valor de início da acção)."
      },
      {
        "numero": 8,
        "cotacao": "2,0",
        "enunciado": "Tendo em conta o conteúdo do texto, produz:\na) Uma frase usando a preposições até.\nb) Uma frase usando a preposição contra.",
        "passos": [
          "Isto é produção tua: o corrector valoriza uma frase completa, com sentido, ligada ao tema do texto (a escola), e com a preposição pedida correctamente usada.",
          "a) A preposição “até” indica limite (de tempo, de lugar ou de percurso): constrói uma frase em que algo dura ou vai “até” a um ponto — por exemplo, estudar até concluir uma classe.",
          "b) A preposição “contra” indica oposição: constrói uma frase em que alguém ou alguma coisa se opõe a outra — por exemplo, a escola lutar contra o analfabetismo.",
          "Verifica no fim: a preposição aparece mesmo na frase? A frase tem verbo e sentido completo? O tema é o do texto?"
        ],
        "resposta": "Resposta-modelo (proposta): a) Os alunos devem frequentar a escola até concluírem os seus estudos, porque é lá que adquirem os conhecimentos necessários para a vida.  b) A escola desenvolve acções contra o analfabetismo e contra todas as formas de discriminação entre os alunos."
      },
      {
        "numero": 9,
        "cotacao": "1,0",
        "enunciado": "O seu texto é expositivo-explicativo.\na) Justifique a afirmação.\nb) Transcreva um (1) enunciado explicativo.",
        "passos": [
          "a) Pensa nas características do tipo de texto: um texto expositivo-explicativo apresenta um tema e explica-o, com linguagem objectiva, para informar o leitor — não conta uma história nem defende uma opinião pessoal.",
          "a) Aplica ao texto dado: ele apresenta o tema “a importância da escola” e explica, parágrafo a parágrafo, em que consiste essa importância (o que a escola possibilita, pelo que é responsável, qual é a sua finalidade).",
          "b) Para transcrever, escolhe uma frase do texto que explique alguma coisa — por exemplo, uma frase que diga o que a escola possibilita ou por que razão algo acontece — e copia-a exactamente como está no texto, entre aspas."
        ],
        "resposta": "a) O texto é expositivo-explicativo porque apresenta o tema “a importância da escola” e explica-o de forma objectiva, informando o leitor sobre o papel da escola, sem narrar acontecimentos nem defender uma opinião pessoal.  b) “A escola possibilita através da convivência e da troca de conhecimento, um amadurecimento intelectual e amistoso contribuindo, deste modo, para o convívio social.”"
      },
      {
        "numero": 10,
        "cotacao": "4,0",
        "enunciado": "Composição:\nNum mínimo de 12 linhas e máximo de 15, elabore um texto expositivo-explicativo com o tema “A importância da escola”, obedecendo à estrutura e linguagem deste tipo de texto.\nObs.: Não se identifique no texto.",
        "passos": [
          "Antes de escrever, regista o que o corrector valoriza: respeitar o número de linhas (mínimo 12, máximo 15) e NÃO te identificares no texto (sem nome nem assinatura).",
          "Estrutura obrigatória do texto expositivo-explicativo: introdução (apresenta o tema), desenvolvimento (explica o tema por aspectos, com ideias encadeadas) e conclusão (fecha com uma ideia-síntese).",
          "Linguagem própria deste tipo de texto: objectiva, clara, em geral na 3ª pessoa e no presente, com conectores que ligam as explicações (porque, pois, além disso, também, por isso…).",
          "No desenvolvimento, explica — não basta afirmar: diz o que a escola faz (ensina conhecimentos, desenvolve habilidades sócio-emocionais, promove a convivência e a formação de vínculos) e para que serve isso na vida dos alunos e da sociedade.",
          "No fim, relê e conta as linhas: se tiveres menos de 12, acrescenta uma explicação; se tiveres mais de 15, corta o que for repetido."
        ],
        "resposta": "Resposta-modelo (proposta):\nA escola é uma instituição fundamental para a formação do ser humano,\npois é nela que as crianças e os jovens adquirem conhecimentos,\naprendem a ler, a escrever e a compreender o mundo em que vivem.\nAlém disso, a escola desenvolve habilidades científicas e sócio-emocionais,\nque produzem o autoconhecimento e preparam os alunos para a vida.\nNo ambiente escolar, os alunos convivem com colegas e professores,\nconstroem vínculos de amizade, afectividade e identidade.\nEssa convivência ensina a viver em sociedade de maneira crítica,\nrespeitando os outros e participando na vida da comunidade.\nA escola também forma cidadãos capazes de intervir, de forma\nresponsável, na transformação do seu futuro social.\nPor isso, frequentar a escola é um direito e uma oportunidade\nque deve ser valorizada por todas as famílias e comunidades. (13 linhas)"
      }
    ],
    "tipo": "Exame Final"
  },
  {
    "id": "ing-9-2025-1",
    "disciplina": "Inglês",
    "classe": "9ª Classe",
    "ano": 2025,
    "chamada": "1ª Chamada",
    "duracao": "90 Minutos",
    "totalPerguntas": 10,
    "fonteEnunciado": "Exame Final oficial ES1/2025, Instituto Nacional de Exames, Certificação e Equivalências (Moçambique)",
    "originalPdf": "https://storage.mozexames.com/papers/cbb20b1f-9ba5-4d09-93d4-b30ccd3e8084/question.pdf",
    "perguntas": [
      {
        "numero": 1,
        "cotacao": "5,0",
        "enunciado": "Section I - Reading: There are eight (8,0) marks for this section.\nRead the text carefully and answer the questions below.\nHello, my name's Manuel Manje. I am 50 years old. I come from Manica. Let me tell you about children's rights in Mozambique before and after the independence.\nWhen I was a child, children did not have many rights. Although there were international laws and conventions that clearly said that children had rights, many parents sent their children to work in cotton plantations or to sell in streets. And some parents even used their children as a business guarantee.\nMy younger brother, Massaca, grew in Maputo because my father bought a cow and did not pay for it. The owner of the cow came to Manica to get his money but my father did not have it. So, he gave my younger brother as a guarantee of payment. He came back home only after ten years. Can you imagine being separated from your beloved brother because of money?\nWhen I was a child many bad things happened. In my community, I knew some girls who were forced to marry adults at early ages. Some of these adults were their grandparents' age. They grew up knowing that they had a husband waiting for them. It was a shame!\nAfter the independence, things changed a lot. Child abuse by parents and teachers was reduced, but there are still some people abusing children around Mozambique nowadays, especially in rural areas: teachers that still beat their pupils, teachers that harass their female pupils, parents that do not allow their female children to study.\nSource: Adapted and abridged from, Inglês 9ª Classe, Plural Editores\nVocabulary\nrights – direitos    cow – boi    coton – algodão    shame – vergonha\nlaws – leis    pupils – alunos    guarantee – garantia    harass – assediar\n\n1. The violation of human rights is harmful to our society.\na) When was Mr. Manje born?\nb) Where did the parents send their children to before the independence?\nc) The word guarantee in paragraph two means that (Children were used to pay debts/ Children who had rights).\nd) What changed to children's rights after the independence?\ne) The text you have just read is about (Children's rights/ Domestic violence).",
        "passos": [
          "a) O texto não escreve nenhum ano de calendário: a única informação está na apresentação — “I am 50 years old” (tenho 50 anos). Por isso, a resposta que o texto permite é relativa: ele nasceu há 50 anos.",
          "b) Procura no segundo parágrafo a expressão “many parents sent their children to…” — aí está o destino: “to work in cotton plantations or to sell in streets” (trabalhar nas plantações de algodão ou vender nas ruas).",
          "c) Lê o episódio do parágrafo seguinte: o pai comprou uma vaca e não pagou (“bought a cow and did not pay for it”), e por isso “he gave my younger brother as a guarantee of payment” (deu o irmão mais novo como garantia de pagamento). Logo, “guarantee” significa que as crianças eram usadas para pagar dívidas — e não “children who had rights”.",
          "d) Vai ao último parágrafo: “After the independence, things changed a lot. Child abuse by parents and teachers was reduced” (depois da independência, as coisas mudaram muito; o abuso de crianças por pais e professores foi reduzido) — embora o texto acrescente que ainda há abusos, sobretudo nas zonas rurais.",
          "e) O próprio narrador anuncia o tema na primeira frase do assunto: “Let me tell you about children's rights in Mozambique before and after the independence.” O texto é sobre os direitos das crianças (Children's rights), e não sobre violência doméstica em geral."
        ],
        "resposta": "a) Mr. Manje was born 50 years ago (he says: “I am 50 years old”).  b) The parents sent their children to work in cotton plantations or to sell in streets.  c) Children were used to pay debts.  d) After the independence, things changed a lot: child abuse by parents and teachers was reduced (although some abuses still happen, especially in rural areas).  e) Children's rights."
      },
      {
        "numero": 2,
        "cotacao": "3,0",
        "enunciado": "Read this sentence: “Parents force their female children to marry adults at early ages.”\na) In which verbal tense is the sentence above?\nb) Change the sentence into the negative form.",
        "passos": [
          "a) Olha para o verbo principal: “force”. Ele está na forma base, sem marca de passado (-ed) nem auxiliares de futuro, e o sujeito “Parents” é plural — é a forma do presente simples, usada para factos habituais/gerais. Responde: Present Simple (Simple Present).",
          "b) Regra da negativa no Present Simple: sujeito + do not (don't) + verbo na forma base. O verbo principal “force” já está na forma base, por isso só tens de colocar “do not” antes dele; o resto da frase fica igual."
        ],
        "resposta": "a) The sentence is in the Present Simple (Simple Present).  b) Parents do not force their female children to marry adults at early ages."
      },
      {
        "numero": 3,
        "cotacao": "1,0",
        "enunciado": "Section II – Vocabulary and Grammar: There are (7,0) marks for this section.\nRewrite each of the following sentences, using the appropriate word or words in the brackets.\n3. International (books / laws) state that children have rights.",
        "passos": [
          "Testa as duas opções pelo sentido: “books” = livros; “laws” = leis (palavra que aparece no texto e no vocabulário: “laws – leis”). Quem “declara/diz” (state) que as crianças têm direitos, a nível internacional, são as leis internacionais.",
          "Reescreve a frase completa, mantendo tudo o resto igual."
        ],
        "resposta": "International laws state that children have rights."
      },
      {
        "numero": 4,
        "cotacao": "1,0",
        "enunciado": "Children in Mozambique have the (left / right) to go to school.",
        "passos": [
          "Cuidado com o falso amigo: “right” aqui não é “direita” — na expressão “have the right to…” significa “ter o direito de…”. “left” significa “esquerda/esquerdo” e não faz sentido na frase.",
          "A frase fala do direito de ir à escola, tema de todo o texto: escolhe “right” e reescreve a frase completa."
        ],
        "resposta": "Children in Mozambique have the right to go to school."
      },
      {
        "numero": 5,
        "cotacao": "1,0",
        "enunciado": "Marrying girls at early ages is a (crime / goodness) in Mozambique.",
        "passos": [
          "Compara os sentidos: “crime” = crime; “goodness” = bondade/coisa boa. O texto apresenta os casamentos precoces como uma violação dos direitos das crianças (“It was a shame!”), ou seja, algo mau e punível.",
          "Escolhe “crime” e reescreve a frase completa."
        ],
        "resposta": "Marrying girls at early ages is a crime in Mozambique."
      },
      {
        "numero": 6,
        "cotacao": "1,0",
        "enunciado": "My niece got the scholarship. She (is going to / will) study abroad.",
        "passos": [
          "As duas formas falam do futuro, mas usa-se “be going to” para planos/decisões já tomados, com base numa situação presente. Aqui já existe um facto presente: “My niece got the scholarship” (a minha sobrinha conseguiu a bolsa) — estudar no estrangeiro é o plano que resulta disso.",
          "Escolhe “is going to” (concorda com “She”: she is going to) e reescreve a frase completa."
        ],
        "resposta": "My niece got the scholarship. She is going to study abroad."
      },
      {
        "numero": 7,
        "cotacao": "1,0",
        "enunciado": "Parents (should / shouldn't) force their female children to marry adults.",
        "passos": [
          "“should” = devem/deviam (conselho, dever moral positivo); “shouldn't” = não devem. Obrigar as filhas a casar com adultos é uma violação dos direitos das crianças, como mostra todo o texto — o conselho correcto é o negativo.",
          "Escolhe “shouldn't” e reescreve a frase completa."
        ],
        "resposta": "Parents shouldn't force their female children to marry adults."
      },
      {
        "numero": 8,
        "cotacao": "1,0",
        "enunciado": "Nowadays, it is (easier / easiest) for girls to go to school than in the past.",
        "passos": [
          "Repara na palavra “than”: sempre que há “than”, compara-se entre dois elementos (hoje vs. no passado) e usa-se o comparativo. “easier” é o comparativo de “easy” (mais fácil); “easiest” é o superlativo (o mais fácil), que exigiria “the” e um grupo de comparação.",
          "Escolhe “easier” e reescreve a frase completa."
        ],
        "resposta": "Nowadays, it is easier for girls to go to school than in the past."
      },
      {
        "numero": 9,
        "cotacao": "1,0",
        "enunciado": "If girls go to school, we (would / will) have a more educated society.",
        "passos": [
          "Identifica a estrutura: “If + Present Simple” (If girls go…) é a condicional do tipo 1 (condição real/possível). Na oração principal, a regra é “will + verbo”: If + presente → will.",
          "“would” pertence à condicional do tipo 2, que pediria o passado na oração do “if” (If girls went…), o que não é o caso. Escolhe “will” e reescreve a frase completa."
        ],
        "resposta": "If girls go to school, we will have a more educated society."
      },
      {
        "numero": 10,
        "cotacao": "5,0",
        "enunciado": "Section III: Writing. There are five (5,0) marks for this section.\n10. In approximately 150 words, write a composition about the school subject that you mostly like at school.",
        "passos": [
          "Antes de escrever, regista o que o corrector valoriza: responder ao tema pedido (a disciplina de que mais gostas na escola), com aproximadamente 150 palavras.",
          "Organiza a composição em parágrafos: introdução (qual é a disciplina e por que gostas dela), desenvolvimento (o que aprendes nas aulas, como são as aulas) e justificação/conclusão (por que é importante para o teu futuro; fecha com uma ideia final).",
          "Dá razões e exemplos concretos — não basta dizer “I like it”: explica o que ela te permite fazer (comunicar, estudar fora, arranjar oportunidades).",
          "Usa frases completas e liga as ideias com conectores (because, also, so, for these reasons…); relê no fim a ortografia e os tempos verbais (o presente simples serve para a maior parte do texto).",
          "Nota: a disciplina da resposta-modelo é um exemplo — na tua prova, escreve sobre a disciplina de que TU mais gostas, seguindo a mesma estrutura."
        ],
        "resposta": "Resposta-modelo (proposta): My favourite subject at school is English. I like it very much because it is an international language, spoken in many countries around the world.\nAt school, we study English three times a week. In our lessons, we learn new words, grammar, reading and writing. Our teacher always encourages us to speak in class, so I am losing my fear of making mistakes.\nEnglish is also important for my future. With English, I can communicate with people from other countries, use the internet and read books and information that are not available in Portuguese. One day, I would like to get a scholarship and study abroad, and English will help me to achieve this dream. I also enjoy English songs and films, which make learning fun and interesting.\nFor these reasons, English is the subject I mostly like at school, and I advise all students to study it with dedication. (150 palavras)"
      }
    ],
    "tipo": "Exame Final"
  }
]);
