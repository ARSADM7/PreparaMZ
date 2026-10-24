// PreparaMZ — Lote 2: Matemática 10ª classe, 2022 (1ª e 2ª Chamadas),
// 2021 e 2020 (1ª Chamada), transcritos das folhas oficiais INEC/MINEDH
// e resolvidos passo a passo pela equipa PreparaMZ. Junta-se a
// window.EXAMES (data/exames.js + data/exames-9a.js) sem os alterar.
window.EXAMES = window.EXAMES.concat([
  {
    "id": "mat-10-2022-1",
    "disciplina": "Matemática",
    "classe": "10ª Classe",
    "ano": 2022,
    "chamada": "1ª Chamada",
    "duracao": "120 Minutos",
    "totalPerguntas": 7,
    "fonteEnunciado": "Exame Final oficial ES/2022, Instituto Nacional de Exames, Certificação e Equivalências (Moçambique)",
    "originalPdf": "https://storage.mozexames.com/papers/ec74a8ce-f451-40da-bb46-d75ac821a564/question.pdf",
    "perguntas": [
      {
        "numero": 1,
        "cotacao": "2,0",
        "enunciado": "Assinale com (V) verdadeira ou com (F) falsa as afirmações que se seguem:\na) ℝ\\ℝ⁻ = ℝ₀⁺\nb) cotg 45° > tg 45°\nc) log₁/₂(4/64) = 4\nd) 0,40 = 4%",
        "passos": [
          "a) ℝ⁻ é o conjunto dos reais estritamente negativos. Retirar os negativos a ℝ deixa os não negativos (o zero e os positivos), ou seja, ℝ₀⁺. Afirmação VERDADEIRA (V).",
          "b) tg 45° = 1 e cotg 45° = 1/tg 45° = 1. São iguais, logo cotg 45° não é maior do que tg 45°. Afirmação FALSA (F).",
          "c) 4/64 = 1/16. Procura-se o expoente: (1/2)⁴ = 1/16, logo log₁/₂(1/16) = 4. Afirmação VERDADEIRA (V).",
          "d) Para passar de decimal a percentagem multiplica-se por 100: 0,40 = 40%, e não 4%. Afirmação FALSA (F).",
          "Verificação de c) por outro caminho: log₁/₂(4/64) = log₁/₂(4) − log₁/₂(64) = (−2) − (−6) = 4 ✓."
        ],
        "resposta": "a) V · b) F · c) V · d) F"
      },
      {
        "numero": 2,
        "cotacao": "1,0",
        "enunciado": "Considere o triângulo [ABC] da figura (rectângulo em B). Determine o valor de x sabendo que AB = BC = 2cm.",
        "passos": [
          "O ângulo em B é recto (90°) e os catetos são iguais: AB = BC = 2 cm. É, portanto, um triângulo rectângulo isósceles.",
          "Nos triângulos isósceles, os ângulos opostos a lados iguais são iguais: o ângulo x (em C) é igual ao ângulo em A.",
          "A soma dos ângulos internos é 180°: x + x + 90° = 180° → 2x = 90° → x = 45°.",
          "Verificação: 45° + 45° + 90° = 180° ✓, e tg x = AB/BC = 2/2 = 1 → x = 45° ✓."
        ],
        "resposta": "x = 45°"
      },
      {
        "numero": 3,
        "cotacao": "4,0",
        "enunciado": "Resolva as seguintes equações em ℝ:\na) 3 tg x − √3 = 0 para x ∈ [0°; 90°]\nb) 9x⁴ − 81 = 0\nc) −x² + 3x ≥ 0\nd) log₄(2 − 3x) = log₄(x − 3)",
        "passos": [
          "a) Isola a tangente: 3 tg x = √3 → tg x = √3/3 = 1/√3. No intervalo [0°; 90°], o ângulo com esta tangente é x = 30°. Verificação: tg 30° = √3/3 e 3 × (√3/3) − √3 = 0 ✓.",
          "b) Isola a potência: 9x⁴ = 81 → x⁴ = 9 → x = ±⁴√9 = ±√3 (porque (√3)⁴ = 9). S = {−√3; √3}. Verificação: 9 × (√3)⁴ − 81 = 9 × 9 − 81 = 0 ✓.",
          "c) É uma inequação: factoriza −x² + 3x = x(3 − x), com zeros em x = 0 e x = 3. A parábola tem concavidade para baixo, logo a expressão é ≥ 0 entre os zeros: S = [0; 3]. Verificação com x = 1: −1 + 3 = 2 ≥ 0 ✓; com x = 4: −16 + 12 = −4 < 0, fora da solução ✓.",
          "d) Com a mesma base, igualam-se os argumentos: 2 − 3x = x − 3 → 2 + 3 = 4x → x = 5/4.",
          "d) MAS é obrigatório verificar o domínio: os argumentos têm de ser positivos. Para x = 5/4: 2 − 3(5/4) = −7/4 < 0 — o logaritmo não existe. Aliás, as condições 2 − 3x > 0 (x < 2/3) e x − 3 > 0 (x > 3) são incompatíveis. Logo a equação NÃO tem solução: S = ∅."
        ],
        "resposta": "a) x = 30° · b) S = {−√3; √3} · c) S = [0; 3] · d) S = ∅ (sem solução)"
      },
      {
        "numero": 4,
        "cotacao": "4,0",
        "enunciado": "Dos 120 funcionários de uma repartição pública, 60 lêem a revista A, 80 lêem a revista B e todos os funcionários lêem pelo menos uma delas.\na) Represente os dados num diagrama de Venn.\nb) Determine o número de funcionários que lêem as duas revistas.\nc) Quantos funcionários lêem somente a revista B?\nd) Quantos funcionários lêem apenas a revista A?",
        "passos": [
          "b) Chama x ao número de funcionários que lêem as duas revistas. Quem lê pelo menos uma: 60 + 80 − x = 120 (a intersecção conta-se duas vezes, por isso subtrai-se uma).",
          "b) 140 − x = 120 → x = 20 funcionários lêem as duas revistas.",
          "c) Somente a revista B: 80 − 20 = 60 funcionários.",
          "d) Apenas a revista A: 60 − 20 = 40 funcionários.",
          "a) No diagrama de Venn: o rectângulo representa os 120 funcionários; no círculo A escreve 40 (só A), na intersecção 20 (as duas) e no círculo B escreve 60 (só B). Fora dos círculos fica 0, porque todos lêem pelo menos uma.",
          "Verificação: 40 + 20 + 60 = 120 ✓ e n(A ∪ B) = 60 + 80 − 20 = 120 ✓."
        ],
        "resposta": "b) 20 funcionários · c) 60 funcionários · d) 40 funcionários (diagrama: só A = 40, ambas = 20, só B = 60)"
      },
      {
        "numero": 5,
        "cotacao": "3,0",
        "enunciado": "Seja dada a função f(x) = log₅(x):\na) Represente graficamente a função f(x).\nb) Qual é o contradomínio da função f(x)?\nc) Qual é a variação do sinal da função no intervalo de ]0; 1[?",
        "passos": [
          "a) Tabela de pontos (potências de 5): x = 1/5 → f = −1; x = 1 → f = 0; x = 5 → f = 1; x = 25 → f = 2. Marca os pontos (1/5; −1), (1; 0), (5; 1) e (25; 2) e une-os com uma curva crescente que se aproxima do eixo Oy sem o tocar (assímptota vertical x = 0).",
          "a) O domínio é ]0; +∞[: o logaritmo só existe para x > 0.",
          "b) No gráfico, a função atinge todos os valores reais: o contradomínio é ℝ (CD = ℝ).",
          "c) Para 0 < x < 1, os valores de log₅(x) são negativos (por exemplo, log₅(1/5) = −1). Logo, em ]0; 1[, a função é NEGATIVA: f(x) < 0.",
          "Verificação: log₅(1) = 0 é a fronteira — à esquerda de 1 o sinal é negativo e à direita é positivo; como 5⁰ = 1, confirma-se ✓."
        ],
        "resposta": "b) Contradomínio = ℝ · c) Em ]0; 1[ a função é negativa (f(x) < 0)"
      },
      {
        "numero": 6,
        "cotacao": "4,0",
        "enunciado": "Considere o gráfico da função g(x) representado na figura (parábola de vértice (3, 4)):\na) Quais são os zeros da função?\nb) Para que valores de x, g(x) ≤ 0?\nc) Qual é a variação da função g(x) no intervalo de ]−∞; 3[?\nd) Determine a expressão analítica da função.",
        "passos": [
          "a) Os zeros são os pontos onde o gráfico corta o eixo Ox: x = 1 e x = 5.",
          "b) g(x) ≤ 0 onde o gráfico está sobre ou abaixo do eixo Ox: fora do intervalo entre os zeros, ou seja, x ≤ 1 ou x ≥ 5. S = ]−∞; 1] ∪ [5; +∞[.",
          "c) À esquerda do vértice (x = 3), a parábola sobe: no intervalo ]−∞; 3[ a função é CRESCENTE (estritamente).",
          "d) Usa a forma factorizada com os zeros: g(x) = a(x − 1)(x − 5). O vértice é (3, 4): g(3) = a(2)(−2) = −4a = 4 → a = −1.",
          "d) Logo g(x) = −(x − 1)(x − 5) = −x² + 6x − 5.",
          "Verificação: g(0) = −5, que coincide com a ordenada na origem lida no gráfico ✓; g(3) = −9 + 18 − 5 = 4, o valor do vértice ✓."
        ],
        "resposta": "a) Zeros: 1 e 5 · b) x ≤ 1 ou x ≥ 5 · c) Crescente · d) g(x) = −x² + 6x − 5"
      },
      {
        "numero": 7,
        "cotacao": "2,0",
        "enunciado": "12 alunos de uma escola foram inquiridos sobre o número exacto de irmãos de cada um deles e obteve-se os seguintes dados: 2, 1, 2, 3, 3, 2, 2, 1, 4, 2, 2, 3. Determine:\na) a moda.\nb) a média aritmética.",
        "passos": [
          "Conta as ocorrências de cada valor: 1 aparece 2 vezes; 2 aparece 6 vezes; 3 aparece 3 vezes; 4 aparece 1 vez. Total: 2 + 6 + 3 + 1 = 12 alunos ✓.",
          "a) A moda é o valor mais frequente: o 2 (6 vezes). Moda = 2 irmãos.",
          "b) Soma dos dados: 1×2 + 2×6 + 3×3 + 4×1 = 2 + 12 + 9 + 4 = 27. Média = 27/12 = 2,25.",
          "Verificação da soma por ordem directa: 2+1+2+3+3+2+2+1+4+2+2+3 = 27 ✓."
        ],
        "resposta": "a) Moda = 2 · b) Média = 2,25 irmãos"
      }
    ]
  },
  {
    "id": "mat-10-2022-2",
    "disciplina": "Matemática",
    "classe": "10ª Classe",
    "ano": 2022,
    "chamada": "2ª Chamada",
    "duracao": "120 Minutos",
    "totalPerguntas": 7,
    "fonteEnunciado": "Exame Final oficial ES/2022, Instituto Nacional de Exames, Certificação e Equivalências (Moçambique)",
    "originalPdf": "https://storage.mozexames.com/papers/647f5e38-f378-4e15-9baa-505ff4ba78c7/question.pdf",
    "perguntas": [
      {
        "numero": 1,
        "cotacao": "2,0",
        "enunciado": "Assinale com (V) verdadeira ou com (F) falsa as afirmações que se seguem:\na) ℝ\\ℝ₀⁺ = ℝ⁻\nb) sen 30° = cos 60°\nc) log₂(8 × 16) = 7\nd) 0,2 = 2%",
        "passos": [
          "a) ℝ₀⁺ é o conjunto dos reais não negativos (zero e positivos). Retirá-los a ℝ deixa só os estritamente negativos: ℝ⁻. Afirmação VERDADEIRA (V).",
          "b) sen 30° = 1/2 e cos 60° = 1/2 (ângulos complementares: sen α = cos(90° − α)). São iguais. Afirmação VERDADEIRA (V).",
          "c) 8 × 16 = 128 = 2⁷, logo log₂(128) = 7. Afirmação VERDADEIRA (V). Verificação por outro caminho: log₂8 + log₂16 = 3 + 4 = 7 ✓.",
          "d) 0,2 = 20%, e não 2%. Afirmação FALSA (F)."
        ],
        "resposta": "a) V · b) V · c) V · d) F"
      },
      {
        "numero": 2,
        "cotacao": "1,0",
        "enunciado": "Considere o triângulo [ABC] da figura (rectângulo em B). Determine o valor de x sabendo que AB = √2 cm e AC = 2cm.",
        "passos": [
          "No triângulo rectângulo em B, AC é a hipotenusa (2 cm) e AB é o cateto oposto ao ângulo x (que está em C).",
          "Usa o seno: sen x = cateto oposto/hipotenusa = AB/AC = √2/2.",
          "O ângulo agudo com seno √2/2 é x = 45°.",
          "Verificação pelo co-seno: BC = √(AC² − AB²) = √(4 − 2) = √2; cos x = BC/AC = √2/2 → x = 45° ✓."
        ],
        "resposta": "x = 45°"
      },
      {
        "numero": 3,
        "cotacao": "4,0",
        "enunciado": "Resolva as seguintes equações em ℝ:\na) sen x = 1 para x ∈ [0°; 90°]\nb) 7x⁴ − 567 = 0\nc) x² − 9 ≥ 0\nd) log₈(x − 2) = 4/3",
        "passos": [
          "a) No intervalo [0°; 90°], o seno vale 1 apenas no extremo: x = 90°. Verificação: sen 90° = 1 ✓.",
          "b) Isola a potência: 7x⁴ = 567 → x⁴ = 81 → x = ±⁴√81 = ±3 (porque 3⁴ = 81). S = {−3; 3}. Verificação: 7 × 81 − 567 = 567 − 567 = 0 ✓.",
          "c) É uma inequação: x² − 9 = (x − 3)(x + 3), com zeros em −3 e 3. A parábola (concavidade para cima) é ≥ 0 fora do intervalo entre os zeros: S = ]−∞; −3] ∪ [3; +∞[. Verificação com x = 0: −9 < 0, fora ✓; com x = 4: 16 − 9 = 7 ≥ 0 ✓.",
          "d) Pela definição de logaritmo: x − 2 = 8^(4/3). Calcula a potência: 8^(4/3) = (³√8)⁴ = 2⁴ = 16. Logo x − 2 = 16 → x = 18.",
          "d) Verificação do domínio: x − 2 = 16 > 0 ✓, e log₈(16) = 4/3 porque 8^(4/3) = 16 ✓."
        ],
        "resposta": "a) x = 90° · b) S = {−3; 3} · c) S = ]−∞; −3] ∪ [3; +∞[ · d) x = 18"
      },
      {
        "numero": 4,
        "cotacao": "4,0",
        "enunciado": "Numa vila de uma província, 45% dos habitantes sabe conduzir automóvel, 40% sabe conduzir motorizada e 22% sabe conduzir os dois tipos de veículos.\na) Represente a situação num diagrama de Venn.\nb) Qual é a percentagem de habitantes que não sabe conduzir nem automóvel nem motorizada?\nc) Qual é a percentagem de habitantes que sabe conduzir somente automóvel?\nd) Qual é a percentagem de habitantes que sabe conduzir apenas motorizada?",
        "passos": [
          "Começa pela intersecção: 22% conduz os dois tipos.",
          "c) Somente automóvel: 45% − 22% = 23%.",
          "d) Apenas motorizada: 40% − 22% = 18%.",
          "Quem conduz pelo menos um tipo: 23% + 22% + 18% = 63%.",
          "b) Não sabe conduzir nenhum: 100% − 63% = 37%.",
          "a) No diagrama de Venn: o rectângulo representa 100% dos habitantes; no círculo do automóvel escreve 23% (só automóvel), na intersecção 22% (os dois), no círculo da motorizada 18% (só motorizada) e fora dos círculos 37% (nenhum).",
          "Verificação pela fórmula: n(A ∪ M) = 45 + 40 − 22 = 63%; nenhum = 100 − 63 = 37% ✓."
        ],
        "resposta": "b) 37% · c) 23% · d) 18% (diagrama: só automóvel = 23%, ambos = 22%, só motorizada = 18%, nenhum = 37%)"
      },
      {
        "numero": 5,
        "cotacao": "3,0",
        "enunciado": "Seja dada a função f(x) = log₂(x):\na) Represente graficamente a função f(x).\nb) Qual é o contradomínio da função f(x)?\nc) Para que valores de x f(x) é negativa?",
        "passos": [
          "a) Tabela de pontos (potências de 2): x = 1/2 → f = −1; x = 1 → f = 0; x = 2 → f = 1; x = 4 → f = 2; x = 8 → f = 3. Marca os pontos e une-os com uma curva crescente que se aproxima do eixo Oy sem o tocar (assímptota vertical x = 0). O domínio é ]0; +∞[.",
          "b) A função atinge todos os valores reais: o contradomínio é ℝ (CD = ℝ).",
          "c) f(x) < 0 quando 0 < x < 1, porque log₂(x) é negativo para argumentos entre 0 e 1 (por exemplo, log₂(1/2) = −1).",
          "Verificação: log₂(1) = 0 marca a fronteira entre valores negativos (x < 1) e positivos (x > 1) ✓."
        ],
        "resposta": "b) Contradomínio = ℝ · c) f(x) é negativa para 0 < x < 1"
      },
      {
        "numero": 6,
        "cotacao": "4,0",
        "enunciado": "Considere o gráfico da função g(x) representado na figura (parábola de vértice (2, −1)):\na) Quais são os zeros da função?\nb) Para que valores de x, g(x) ≤ 0?\nc) Para que valores de x, g(x) é crescente?\nd) Determine a expressão analítica da função.",
        "passos": [
          "a) Os zeros são os pontos onde o gráfico corta o eixo Ox: x = 1 e x = 3.",
          "b) g(x) ≤ 0 onde o gráfico está sobre ou abaixo do eixo Ox: entre os zeros, S = [1; 3].",
          "c) A parábola tem concavidade para cima e vértice em x = 2: desce até ao vértice e sobe depois. É crescente para x ≥ 2 (intervalo [2; +∞[).",
          "d) Usa a forma factorizada com os zeros: g(x) = a(x − 1)(x − 3). Pela ordenada na origem do gráfico, g(0) = 3: a(−1)(−3) = 3a = 3 → a = 1.",
          "d) Logo g(x) = (x − 1)(x − 3) = x² − 4x + 3.",
          "Verificação: g(2) = 4 − 8 + 3 = −1, o valor do vértice lido no gráfico ✓; zeros: g(1) = 0 e g(3) = 0 ✓."
        ],
        "resposta": "a) Zeros: 1 e 3 · b) 1 ≤ x ≤ 3 · c) Para x ≥ 2 · d) g(x) = x² − 4x + 3"
      },
      {
        "numero": 7,
        "cotacao": "2,0",
        "enunciado": "As idades dos avós maternos de nove alunos duma escola são: 67, 75, 63, 72, 77, 78, 81, 77, 80. Determine:\na) a moda.\nb) a média aritmética.",
        "passos": [
          "Ordena os dados: 63, 67, 72, 75, 77, 77, 78, 80, 81 — são 9 valores ✓.",
          "a) A moda é o valor mais frequente: o 77 aparece 2 vezes e todos os outros apenas 1. Moda = 77 anos.",
          "b) Soma: 63 + 67 + 72 + 75 + 77 + 77 + 78 + 80 + 81 = 670. Média = 670/9 ≈ 74,4 anos.",
          "Verificação da soma por agrupamento: (63 + 67) + (72 + 75) + (77 + 77) + (78 + 80) + 81 = 130 + 147 + 154 + 158 + 81 = 670 ✓."
        ],
        "resposta": "a) Moda = 77 anos · b) Média = 670/9 ≈ 74,4 anos"
      }
    ]
  },
  {
    "id": "mat-10-2021-1",
    "disciplina": "Matemática",
    "classe": "10ª Classe",
    "ano": 2021,
    "chamada": "1ª Chamada",
    "duracao": "120 Minutos",
    "totalPerguntas": 7,
    "fonteEnunciado": "Exame Final oficial ESG/2021, Instituto Nacional de Exames, Certificação e Equivalências (Moçambique)",
    "originalPdf": "https://storage.mozexames.com/papers/ff055494-2717-48c4-bc31-b76828de42e3/question.pdf",
    "perguntas": [
      {
        "numero": 1,
        "cotacao": "2,0",
        "enunciado": "Assinale com (V) verdadeiras, ou com (F), falsas, as afirmações que se seguem:\na) (2x² + 3x) + (−x² + 5) = 3x\nb) −4 · (2x² + 3x) = −4x · (2x + 3)\nc) x³y² ÷ 2xy = x²y\nd) O termo x³y² é do 5º grau",
        "passos": [
          "a) Soma os polinómios termo a termo: 2x² − x² = x²; 3x fica; +5 fica. O resultado é x² + 3x + 5, e não apenas 3x. Afirmação FALSA (F).",
          "b) Primeiro membro: −4 · (2x² + 3x) = −8x² − 12x. Segundo membro: −4x · (2x + 3) = −8x² − 12x. São iguais. Afirmação VERDADEIRA (V).",
          "c) Na divisão de monómios dividem-se os coeficientes e subtraem-se os expoentes: x³y² ÷ 2xy = (1/2)x²y. Como o coeficiente correcto é 1/2 e não 1, a afirmação é FALSA (F).",
          "d) O grau de um termo é a soma dos expoentes das variáveis: 3 + 2 = 5. O termo é do 5º grau. Afirmação VERDADEIRA (V).",
          "Verificação de b) com x = 1: −4 · 5 = −20 e −4 · 5 = −20 ✓."
        ],
        "resposta": "a) F · b) V · c) F · d) V"
      },
      {
        "numero": 2,
        "cotacao": "2,5",
        "enunciado": "Copie para a sua folha de respostas e complete os espaços em branco com os símbolos ⊂, ⊃, ∈, ∉ e =.\na) 0 ___ ℝ⁺\nb) ℕ ___ ℤ₀⁺\nc) ℝ⁻ ___ ℤ⁻\nd) ℕ ___ ℚ\ne) −2/3 ___ ℚ",
        "passos": [
          "a) ℝ⁺ é o conjunto dos reais estritamente positivos (maiores que zero). O zero não é positivo: 0 ∉ ℝ⁺.",
          "b) ℕ = {0, 1, 2, 3, ...} e ℤ₀⁺ é o conjunto dos inteiros não negativos, exactamente o mesmo conjunto: ℕ = ℤ₀⁺.",
          "c) ℤ⁻ (inteiros negativos) faz parte dos reais negativos, mas ℝ⁻ também contém fraccionários negativos (por exemplo −1/2). O conjunto maior é ℝ⁻: ℝ⁻ ⊃ ℤ⁻.",
          "d) Todo o número natural é racional (pode escrever-se como fracção de denominador 1), mas nem todo o racional é natural: ℕ ⊂ ℚ.",
          "e) −2/3 é um número racional (é uma fracção de inteiros): −2/3 ∈ ℚ usa-se ∈ porque −2/3 é um elemento, e não um conjunto.",
          "Verificação: os cinco símbolos da folha (⊂, ⊃, ∈, ∉, =) foram usados exactamente uma vez cada ✓."
        ],
        "resposta": "a) ∉ · b) = · c) ⊃ · d) ⊂ · e) ∈"
      },
      {
        "numero": 3,
        "cotacao": "2,0",
        "enunciado": "Simplifique as expressões:\na) (1 − y)/(y² − 1)\nb) 2a/(2a + 4)",
        "passos": [
          "a) Factoriza o denominador (diferença de quadrados): y² − 1 = (y − 1)(y + 1). No numerador, 1 − y = −(y − 1).",
          "a) Cancela o factor comum (y − 1), válido para y ≠ 1: fica −1/(y + 1), com y ≠ −1 e y ≠ 1.",
          "a) Verificação com y = 2: (1 − 2)/(4 − 1) = −1/3; resultado: −1/(2 + 1) = −1/3 ✓.",
          "b) Factoriza o denominador: 2a + 4 = 2(a + 2). Cancela o factor 2: fica a/(a + 2), com a ≠ −2.",
          "b) Verificação com a = 2: 4/(4 + 4) = 1/2; resultado: 2/(2 + 2) = 1/2 ✓."
        ],
        "resposta": "a) −1/(y + 1) · b) a/(a + 2)"
      },
      {
        "numero": 4,
        "cotacao": "2,0",
        "enunciado": "Considere a equação paramétrica mx² − 8x − 5 = 0. Determine m:\na) para que a soma das suas raízes seja igual a 2.\nb) de modo que a equação tenha raiz única.",
        "passos": [
          "Usa as relações de Girard para ax² + bx + c = 0: soma das raízes S = −b/a. Aqui a = m, b = −8, c = −5, logo S = 8/m (é preciso m ≠ 0 para a equação ser quadrática).",
          "a) Impõe S = 2: 8/m = 2 → m = 4.",
          "a) Verificação: com m = 4, a equação é 4x² − 8x − 5 = 0, com Δ = 64 + 80 = 144 > 0 (raízes reais) e soma = 8/4 = 2 ✓.",
          "b) Raiz única (raiz dupla) acontece quando o discriminante é nulo: Δ = b² − 4ac = (−8)² − 4 · m · (−5) = 64 + 20m.",
          "b) 64 + 20m = 0 → m = −64/20 = −16/5 = −3,2.",
          "b) Verificação: com m = −16/5, Δ = 64 + 20 × (−16/5) = 64 − 64 = 0 ✓ (a raiz dupla é x = 8/(2m) = −5/4). Nota: com m = 0 a equação deixaria de ser quadrática (ficaria linear), por isso não é esse o caso pedido."
        ],
        "resposta": "a) m = 4 · b) m = −16/5 (−3,2)"
      },
      {
        "numero": 5,
        "cotacao": "3,5",
        "enunciado": "Numa empresa de construção, foram entrevistados 779 candidatos, dos quais 327 são pedreiros, 251 são canalizadores e 221 não são pedreiros nem canalizadores.\na) Represente os dados num diagrama de Venn.\nb) Qual é o número de candidatos que são pedreiros e canalizadores?\nc) Qual é o número de candidatos que são somente pedreiros?",
        "passos": [
          "Primeiro passo: quem é pedreiro ou canalizador (ou ambos): 779 − 221 = 558 candidatos.",
          "b) Pela fórmula da união: n(P ∪ C) = n(P) + n(C) − n(P ∩ C) → 558 = 327 + 251 − n(P ∩ C) → n(P ∩ C) = 578 − 558 = 20 candidatos são pedreiros e canalizadores.",
          "c) Somente pedreiros: 327 − 20 = 307 candidatos.",
          "Para o diagrama: somente canalizadores = 251 − 20 = 231. No rectângulo (779) desenha dois círculos: só pedreiros 307, intersecção 20, só canalizadores 231, e fora dos círculos 221.",
          "Verificação: 307 + 20 + 231 + 221 = 779 ✓."
        ],
        "resposta": "b) 20 candidatos · c) 307 candidatos (diagrama: só pedreiros = 307, ambos = 20, só canalizadores = 231, nenhum = 221)"
      },
      {
        "numero": 6,
        "cotacao": "2,0",
        "enunciado": "Resolva:\na) (0,04 − 2/5) · 5 =\nb) √8 + √18 − √2 =",
        "passos": [
          "a) Converte a fracção em decimal: 2/5 = 0,4. Dentro do parênteses: 0,04 − 0,4 = −0,36.",
          "a) Multiplica: −0,36 × 5 = −1,8.",
          "a) Verificação por fracções: (1/25 − 2/5) × 5 = (1/25 − 10/25) × 5 = (−9/25) × 5 = −9/5 = −1,8 ✓.",
          "b) Decompõe os radicais em factores primos: √8 = √(4 × 2) = 2√2; √18 = √(9 × 2) = 3√2.",
          "b) Soma os radicais semelhantes: 2√2 + 3√2 − √2 = 4√2.",
          "b) Verificação numérica: √8 ≈ 2,83; √18 ≈ 4,24; √2 ≈ 1,41; 2,83 + 4,24 − 1,41 ≈ 5,66; e 4√2 ≈ 5,66 ✓."
        ],
        "resposta": "a) −1,8 · b) 4√2"
      },
      {
        "numero": 7,
        "cotacao": "6,0",
        "enunciado": "Dada a função f(x), representada no gráfico ao lado (parábola de vértice (−2, −1) e ordenada na origem 3):\na) Quais são os zeros da função?\nb) Qual é o domínio da função?\nc) Qual é o contradomínio da função?\nd) Qual é a ordenada na origem?\ne) Qual é a variação do sinal da função?\nf) Qual é a variação da função?\ng) Determine a expressão analítica da função.",
        "passos": [
          "a) Os zeros são os pontos onde o gráfico corta o eixo Ox: x = −3 e x = −1.",
          "b) A parábola estende-se para todos os valores reais de x: o domínio é ℝ (D = ℝ).",
          "c) O valor mínimo da função é o do vértice, y = −1: o contradomínio é [−1; +∞[ (CD = [−1; +∞[).",
          "d) A ordenada na origem é o valor onde o gráfico corta o eixo Oy: f(0) = 3.",
          "e) Variação do sinal: f(x) > 0 para x < −3 ou x > −1; f(x) < 0 para −3 < x < −1; f(x) = 0 para x = −3 e x = −1.",
          "f) Variação (monotonia): a função é decrescente em ]−∞; −2] e crescente em [−2; +∞[, porque o vértice tem abcissa x = −2.",
          "g) Usa a forma factorizada com os zeros: f(x) = a(x + 3)(x + 1). Pela ordenada na origem: f(0) = a(3)(1) = 3a = 3 → a = 1.",
          "g) Logo f(x) = (x + 3)(x + 1) = x² + 4x + 3.",
          "Verificação: f(−2) = 4 − 8 + 3 = −1, o valor do vértice lido no gráfico ✓; f(−3) = 9 − 12 + 3 = 0 ✓ e f(−1) = 1 − 4 + 3 = 0 ✓."
        ],
        "resposta": "a) Zeros: −3 e −1 · b) Domínio = ℝ · c) Contradomínio = [−1; +∞[ · d) 3 · e) Positiva em ]−∞; −3[ ∪ ]−1; +∞[, negativa em ]−3; −1[ · f) Decrescente até x = −2 e crescente depois · g) f(x) = x² + 4x + 3"
      }
    ]
  },
  {
    "id": "mat-10-2020-1",
    "disciplina": "Matemática",
    "classe": "10ª Classe",
    "ano": 2020,
    "chamada": "1ª Chamada",
    "duracao": "120 Minutos",
    "totalPerguntas": 6,
    "fonteEnunciado": "Exame Final oficial ESG/2020, Instituto Nacional de Exames, Certificação e Equivalências (Moçambique)",
    "originalPdf": "https://storage.mozexames.com/papers/ff0c18d1-1f51-4fd9-a98a-43217e37e04d/question.pdf",
    "perguntas": [
      {
        "numero": 1,
        "cotacao": "6,0",
        "enunciado": "Considere o gráfico representado na figura (parábola de vértice (0, −4) que passa pelo ponto (3, 5)). Determine:\na) O domínio da função.\nb) O contradomínio da função.\nc) Os zeros da função.\nd) O vértice da parábola.\ne) A variação do sinal da função.\nf) A variação da função (monotonia).\ng) A equação do eixo de simetria.\nh) O sentido da concavidade do gráfico da função.\ni) A expressão analítica da função que define o gráfico.",
        "passos": [
          "a) A parábola está definida para todos os valores reais de x: o domínio é ℝ (D = ℝ).",
          "b) O valor mínimo é o do vértice, y = −4: o contradomínio é [−4; +∞[ (CD = [−4; +∞[).",
          "c) Os zeros são os pontos onde o gráfico corta o eixo Ox: x = −2 e x = 2.",
          "d) O vértice é o ponto mais baixo do gráfico: V = (0, −4).",
          "e) Variação do sinal: a função é positiva para x < −2 ou x > 2; negativa para −2 < x < 2; nula em x = −2 e x = 2.",
          "f) Monotonia: a função é decrescente em ]−∞; 0] e crescente em [0; +∞[.",
          "g) O eixo de simetria é a recta vertical que passa pelo vértice: x = 0 (o próprio eixo Oy).",
          "h) Os ramos da parábola abrem para cima: a concavidade está voltada para cima.",
          "i) Usa a forma factorizada com os zeros: f(x) = a(x − 2)(x + 2). Pelo vértice: f(0) = a(−2)(2) = −4a = −4 → a = 1. Logo f(x) = x² − 4.",
          "Verificação com o ponto marcado no gráfico: f(3) = 9 − 4 = 5 ✓, exactamente o ponto (3, 5) assinalado na folha."
        ],
        "resposta": "a) ℝ · b) [−4; +∞[ · c) −2 e 2 · d) (0, −4) · e) Positiva fora de [−2; 2], negativa em ]−2; 2[ · f) Decrescente até 0, crescente depois · g) x = 0 · h) Para cima · i) f(x) = x² − 4"
      },
      {
        "numero": 2,
        "cotacao": "1,0",
        "enunciado": "Resolva a inequação x² − 5x + 4 ≥ 0.",
        "passos": [
          "Calcula os zeros da expressão: x² − 5x + 4 = 0 → (x − 1)(x − 4) = 0 → x = 1 ou x = 4 (confere: soma 5, produto 4).",
          "A parábola tem concavidade para cima, logo a expressão é ≥ 0 fora do intervalo entre os zeros.",
          "Solução: x ≤ 1 ou x ≥ 4, ou seja, S = ]−∞; 1] ∪ [4; +∞[.",
          "Verificação com x = 0: 4 ≥ 0 ✓ (está na solução); com x = 2: 4 − 10 + 4 = −2 < 0 ✓ (está fora)."
        ],
        "resposta": "S = ]−∞; 1] ∪ [4; +∞["
      },
      {
        "numero": 3,
        "cotacao": "3,5",
        "enunciado": "Sejam dadas as funções f(x) = 2ˣ + 1 e g(x) = log₂x + 1.\na) Represente-as graficamente, no mesmo Sistema Cartesiano Ortogonal.\nb) Determine a equação da assímptota horizontal, para o gráfico de f(x).\nc) Determine a equação da assímptota vertical, para o gráfico de g(x).",
        "passos": [
          "a) Para f(x) = 2ˣ + 1 (exponencial crescente): tabela — x = −1 → 1,5; x = 0 → 2; x = 1 → 3; x = 2 → 5; x = 3 → 9. A curva aproxima-se da recta y = 1 à esquerda, sem a tocar.",
          "a) Para g(x) = log₂x + 1 (logarítmica crescente): tabela — x = 1/4 → −1; x = 1/2 → 0; x = 1 → 1; x = 2 → 2; x = 4 → 3. A curva aproxima-se do eixo Oy à medida que x → 0.",
          "a) Desenha as duas curvas no mesmo sistema de eixos (ver figura da resolução): f sobe rapidamente à direita e g cresce devagar, cruzando-se perto de x ≈ 1,5.",
          "b) A assímptota horizontal de f é a recta a que a curva se aproxima quando x → −∞: y = 1 (porque 2ˣ → 0).",
          "c) A assímptota vertical de g é a recta a que a curva se aproxima quando x → 0⁺: x = 0 (o eixo Oy).",
          "Verificação: f nunca vale 1 nem menos (2ˣ > 0 sempre) ✓; g só existe para x > 0 ✓."
        ],
        "resposta": "b) y = 1 · c) x = 0"
      },
      {
        "numero": 4,
        "cotacao": "1,0",
        "enunciado": "Desenvolva o seguinte logaritmo, aplicando as propriedades: log_b(a) ÷ [1/2 · log_b(b²)] (na folha, a fracção log_b(a) sobre 1/2 · log_b(b²)).",
        "passos": [
          "Trabalha primeiro o denominador com a propriedade da potência: log_b(b²) = 2 · log_b(b) = 2 · 1 = 2 (recorda que log_b(b) = 1).",
          "Então 1/2 · log_b(b²) = 1/2 × 2 = 1.",
          "A expressão fica: log_b(a) / 1 = log_b(a).",
          "Verificação numérica com b = 2 e a = 8: numerador log₂(8) = 3; denominador 1/2 · log₂(4) = 1/2 × 2 = 1; 3/1 = 3 = log₂(8) ✓.",
          "Nota: repare que, tal como está impressa, a expressão desenvolve-se até ficar simplesmente log_b(a), porque o denominador vale 1."
        ],
        "resposta": "log_b(a)"
      },
      {
        "numero": 5,
        "cotacao": "4,0",
        "enunciado": "A figura representa um triângulo rectângulo com AB = BF (rectângulo em B, hipotenusa AF = 6√2, AB = x e BF = x, com o ângulo α em A). Determine:\na) A medida de x.\nb) A amplitude de α.\nc) cos α, sabendo que sen α = 0,7.",
        "passos": [
          "a) Aplica o teorema de Pitágoras: AB² + BF² = AF² → x² + x² = (6√2)².",
          "a) (6√2)² = 36 × 2 = 72, logo 2x² = 72 → x² = 36 → x = 6 (medida positiva).",
          "b) Como os catetos são iguais (AB = BF), o triângulo é rectângulo isósceles e os ângulos agudos são iguais: α = (180° − 90°)/2 = 45°.",
          "b) Verificação: tg α = BF/AB = 6/6 = 1 → α = 45° ✓. (Confere também o seno: sen 45° = 6/(6√2) = √2/2 ✓.)",
          "c) Pela identidade fundamental: sen²α + cos²α = 1 → cos²α = 1 − 0,7² = 1 − 0,49 = 0,51.",
          "c) Como α é um ângulo agudo, o co-seno é positivo: cos α = √0,51 ≈ 0,71.",
          "Verificação: 0,7² + 0,71² = 0,49 + 0,5041 ≈ 0,99 ≈ 1 ✓ (diferença do arredondamento)."
        ],
        "resposta": "a) x = 6 · b) α = 45° · c) cos α = √0,51 ≈ 0,71"
      },
      {
        "numero": 6,
        "cotacao": "4,5",
        "enunciado": "Para saber o número de pessoas por agregado familiar, de determinado quarteirão, foram inqueridas 25 famílias e obteve-se os seguintes resultados: 3, 2, 3, 3, 4, 4, 5, 5, 6, 5, 1, 1, 2, 3, 4, 5, 6, 6, 6, 6, 2, 5, 4, 3, 6.\na) Construa uma tabela de frequências (absoluta, relativa e percentual).\nb) Determine a: i. média; ii. mediana; iii. moda de pessoas por agregado familiar.\nc) Qual é a população em estudo?\nd) Identifique a amostra da população em estudo.",
        "passos": [
          "a) Conta quantas vezes aparece cada valor: 1 → 2 famílias; 2 → 3; 3 → 5; 4 → 4; 5 → 5; 6 → 6. Confere o total: 2 + 3 + 5 + 4 + 5 + 6 = 25 ✓.",
          "a) Frequências relativas (a dividir por 25) e percentuais: 1 → 2/25 = 0,08 = 8%; 2 → 3/25 = 0,12 = 12%; 3 → 5/25 = 0,20 = 20%; 4 → 4/25 = 0,16 = 16%; 5 → 5/25 = 0,20 = 20%; 6 → 6/25 = 0,24 = 24%. Os percentuais somam 100% ✓. Tabela: (valor; freq. absoluta; freq. relativa; %) = (1; 2; 0,08; 8%), (2; 3; 0,12; 12%), (3; 5; 0,20; 20%), (4; 4; 0,16; 16%), (5; 5; 0,20; 20%), (6; 6; 0,24; 24%).",
          "b-i) Média: soma ponderada = 1×2 + 2×3 + 3×5 + 4×4 + 5×5 + 6×6 = 2 + 6 + 15 + 16 + 25 + 36 = 100. Média = 100/25 = 4 pessoas por agregado.",
          "b-ii) Mediana: com 25 dados ordenados, a mediana é o 13.º valor. Ordenados: 1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, ... — o 13.º valor é 4. Mediana = 4.",
          "b-iii) Moda: o valor com maior frequência é 6 (6 famílias). Moda = 6.",
          "c) A população em estudo é o conjunto de todas as famílias (agregados familiares) do quarteirão.",
          "d) A amostra é o subconjunto efectivamente inquerido: as 25 famílias que responderam ao inquérito."
        ],
        "resposta": "a) Tabela — 1: 2 (8%); 2: 3 (12%); 3: 5 (20%); 4: 4 (16%); 5: 5 (20%); 6: 6 (24%) · b) i. Média = 4; ii. Mediana = 4; iii. Moda = 6 · c) Todas as famílias do quarteirão · d) As 25 famílias inqueridas"
      }
    ]
  }
]);
