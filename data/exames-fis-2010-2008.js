// PreparaMZ — Lote 11: Física 10ª classe, 2010 (1ª e 2ª Épocas), 2009 (1ª e 2ª Épocas) e 2008 (1ª e 2ª Épocas), transcritos das folhas oficiais e resolvidos passo a passo pela equipa PreparaMZ. Junta-se a window.EXAMES sem alterar os ficheiros anteriores.
window.EXAMES = window.EXAMES.concat([
  {
    "ano": 2010,
    "chamada": "1ª Época",
    "classe": "10ª Classe",
    "disciplina": "Física",
    "duracao": "90 Minutos",
    "fonteEnunciado": "Exame oficial 2010, Conselho Nacional de Exames, Certificação e Equivalências (Moçambique)",
    "id": "fis-10-2010-1",
    "originalPdf": "https://storage.mozexames.com/papers/e4fe964c-a2f5-4bf0-a237-8c98327d5ee2/question.pdf",
    "perguntas": [
      {
        "cotacao": "3,0",
        "enunciado": "O gráfico da figura representa o movimento de uma pedra em queda livre na superfície da lua. Calcule:\na) O valor da aceleração de gravidade na lua.\nb) A velocidade da pedra após 4 segundos.\nc) O espaço percorrido pela pedra em 6 s.\nNo gráfico a(t), a aceleração é uma recta horizontal em a = 1,6 m/s², com os instantes 2, 4 e 6 s assinalados (ver figura).",
        "numero": 1,
        "passos": [
          "a) O gráfico a(t) é uma recta horizontal em 1,6 m/s²: a aceleração não muda com o tempo. Em queda livre a aceleração é a aceleração de gravidade, logo g(lua) = 1,6 m/s².",
          "b) A pedra parte do repouso (queda livre, v0 = 0) com aceleração constante: v = v0 + a·t = 1,6 × 4 = 6,4 m/s.",
          "Verificação de b): a velocidade é também a área do gráfico a(t) até aos 4 s: 1,6 × 4 = 6,4 m/s — o mesmo valor.",
          "c) Com aceleração constante e v0 = 0, o espaço é s = ½·a·t² = ½ × 1,6 × 6² = 0,8 × 36 = 28,8 m.",
          "Verificação de c): a velocidade aos 6 s é v = 1,6 × 6 = 9,6 m/s, e a área do triângulo do gráfico v(t) é ½ × 6 × 9,6 = 28,8 m — o mesmo valor."
        ],
        "resposta": "a) g = 1,6 m/s²; b) v = 6,4 m/s; c) s = 28,8 m"
      },
      {
        "cotacao": "3,0",
        "enunciado": "Na figura está representada uma máquina simples.\na) De que tipo de máquina se trata?\nb) Quantas roldanas móveis tem esta máquina?\nc) Calcula o valor da força exercida por X sabendo que F = 16 N.\nNa figura: uma roldana fixa no suporte, de onde pende a força F, e três roldanas móveis em cascata, a última ligada ao bloco X (ver figura).",
        "numero": 2,
        "passos": [
          "a) A máquina combina uma roldana fixa com roldanas móveis: é uma talha (associação de roldanas).",
          "b) Contam-se as roldanas que se deslocam com a carga: são três — a roldana fixa do suporte não conta, porque o seu eixo está preso ao suporte.",
          "c) Cada roldana móvel duplica a força: com 3 roldanas móveis o ganho é 2 × 2 × 2 = 8 vezes. Logo a força exercida por X é F(X) = 8 × 16 = 128 N.",
          "Verificação de c): 128 / 8 = 16 N — a força F aplicada; e passo a passo: 16 → 32 → 64 → 128 N, uma duplicação por roldana móvel."
        ],
        "resposta": "a) talha; b) 3 roldanas móveis; c) 128 N"
      },
      {
        "cotacao": "4,5",
        "enunciado": "No circuito eléctrico representado na figura, determine a:\na) Resistência total do circuito.\nb) Intensidade total do circuito.\nc) Diferença de potencial (d.d.p) na resistência R4.\nNo circuito: R1 = 18 Ω, R2 = 3 Ω e R3 = 9 Ω em paralelo, esse paralelo em série com R4 = 5 Ω; a fonte é de 28 V e o voltímetro está em paralelo com R4 (ver figura).",
        "numero": 3,
        "passos": [
          "a) O paralelo de R1, R2 e R3 vale: 1/Rp = 1/18 + 1/3 + 1/9 = 1/18 + 6/18 + 2/18 = 9/18 = 1/2, logo Rp = 2 Ω. Em série com R4: Rtotal = 2 + 5 = 7 Ω.",
          "b) A intensidade total é I = U/Rtotal = 28/7 = 4 A.",
          "c) A d.d.p em R4 é U4 = R4 × I = 5 × 4 = 20 V.",
          "Verificação: a tensão no paralelo é U = I × Rp = 4 × 2 = 8 V, e 8 + 20 = 28 V — a tensão da fonte. As correntes nos ramos (8/18 + 8/3 + 8/9 ≈ 0,44 + 2,67 + 0,89) somam 4 A."
        ],
        "resposta": "a) R = 7 Ω; b) I = 4 A; c) U4 = 20 V"
      },
      {
        "cotacao": "1,0",
        "enunciado": "Copie para a sua folha, a alternativa correcta.\nQuando um autocarro trava, os passageiros no seu interior, tendem a movimentar-se para a frente, isto é devido a uma propriedade geral da matéria, chamada…\na) Compressibilidade.\nb) Inércia.\nc) Impenetrabilidade.",
        "numero": 4,
        "passos": [
          "Ao travar, o autocarro abranda mas os passageiros tendem a manter a velocidade que tinham: todo o corpo tende a manter o seu estado de movimento (1.ª lei de Newton).",
          "Essa propriedade chama-se inércia. A compressibilidade é a diminuição de volume sob pressão e a impenetrabilidade é dois corpos não ocuparem o mesmo lugar — nenhuma explica o movimento para a frente.",
          "A opção correcta é a b)."
        ],
        "resposta": "b — inércia"
      },
      {
        "cotacao": "4,5",
        "enunciado": "A onda cujo perfil está representado na figura, propaga-se com uma frequência de 60 Hz. Calcule:\na) O valor da amplitude.\nb) O comprimento de onda.\nc) A velocidade da onda.\nNa figura: a seta vertical de 13 cm vai do nível das cristas ao nível dos vales; a seta horizontal de 60 cm vai da 1.ª à 3.ª crista (ver figura).",
        "numero": 5,
        "passos": [
          "a) A seta vertical de 13 cm mede de crista a vale, ou seja, duas amplitudes: 2A = 13 cm, logo A = 6,5 cm.",
          "b) A seta horizontal de 60 cm vai da 1.ª à 3.ª crista, ou seja, abrange dois comprimentos de onda: 2λ = 60 cm, logo λ = 30 cm = 0,30 m.",
          "c) A velocidade é v = λ × f = 0,30 × 60 = 18 m/s.",
          "Verificação de c): o período é T = 1/f = 1/60 s, e v = λ/T = 0,30/(1/60) = 0,30 × 60 = 18 m/s — o mesmo valor."
        ],
        "resposta": "a) A = 6,5 cm; b) λ = 30 cm; c) v = 18 m/s"
      },
      {
        "cotacao": "4,0",
        "enunciado": "O pêndulo da figura, oscila de A para B passando por C. De A para C, gasta 1 s. Calcule:\na) O período do pêndulo.\nb) A amplitude das oscilações.\nc) O comprimento do pêndulo (g = 10 m/s²).\nNa figura: A e B são as posições extremas, C é a posição de equilíbrio, e a distância de A a B é de 6 cm (ver figura).",
        "numero": 6,
        "passos": [
          "a) De A (extremo) a C (equilíbrio) o pêndulo percorre um quarto de oscilação completa: T/4 = 1 s, logo T = 4 s.",
          "b) A amplitude é a distância máxima ao equilíbrio: metade da distância entre os extremos, ou seja, A = 6/2 = 3 cm.",
          "c) O período do pêndulo simples é T = 2π√(L/g). Isolando L: L = g·T²/(4π²) = 10 × 4²/(4π²) = 160/(4π²) = 40/π² ≈ 40/9,87 ≈ 4,05 m (com π ≈ 3,14).",
          "Verificação de c): com L = 4,05 m, T = 2π√(4,05/10) = 2 × 3,14 × √0,405 ≈ 6,28 × 0,636 ≈ 4,0 s — o período da alínea a). Nota: com π = 3 obtém-se L ≈ 4,44 m."
        ],
        "resposta": "a) T = 4 s; b) A = 3 cm; c) L ≈ 4,05 m"
      }
    ],
    "totalPerguntas": 6
  },
  {
    "ano": 2010,
    "chamada": "2ª Época",
    "classe": "10ª Classe",
    "disciplina": "Física",
    "duracao": "90 Minutos",
    "fonteEnunciado": "Exame oficial 2010, Conselho Nacional de Exames, Certificação e Equivalências (Moçambique)",
    "id": "fis-10-2010-2",
    "originalPdf": "https://storage.mozexames.com/papers/abff4930-9847-46ec-a3c4-20e8a2a59cf7/question.pdf",
    "perguntas": [
      {
        "cotacao": "2,5",
        "enunciado": "A tabela seguinte corresponde a um ponto material em movimento rectilíneo.\nt (s): 0 | A | 30 | 45\nv (m/s): 4 | 4 | 4 | 4\ns (m): 0 | 60 | B | 180\na) Classifique o movimento do ponto material.\nb) Represente o gráfico s × t para este caso.\nc) Calcule os valores indicados pelas letras A e B.",
        "numero": 1,
        "passos": [
          "a) A velocidade é sempre 4 m/s, não muda com o tempo, e a trajectória é uma recta: o movimento é rectilíneo uniforme (MRU).",
          "b) No MRU o espaço cresce proporcionalmente ao tempo: s = v·t = 4·t. O gráfico s(t) é uma recta que passa pela origem, pelos pontos (0 s; 0 m), (15 s; 60 m), (30 s; 120 m) e (45 s; 180 m) (ver figura da resolução).",
          "c) Para s = 60 m: t = s/v = 60/4 = 15 s, logo A = 15 s. Para t = 30 s: s = 4 × 30 = 120 m, logo B = 120 m.",
          "Verificação de c): o último par da tabela confirma a lei — 4 × 45 = 180 m, o valor impresso."
        ],
        "resposta": "a) movimento rectilíneo uniforme; b) recta pela origem, s = 4·t; c) A = 15 s; B = 120 m"
      },
      {
        "cotacao": "2,5",
        "enunciado": "A figura representa uma alavanca.\na) De que tipo de alavanca se trata?\nb) Determine o valor de F se o conjunto está em equilíbrio.\nNa figura: o apoio está entre o bloco de 300 N, a 40 cm do apoio, e a força F, a 80 cm do apoio (ver figura).",
        "numero": 2,
        "passos": [
          "a) O apoio (ponto de apoio) está entre a resistência (bloco de 300 N) e a potência (força F): é uma alavanca inter-fixa.",
          "b) Em equilíbrio, os momentos anulam-se: F × 80 = 300 × 40, logo F = 12000/80 = 150 N.",
          "Verificação de b): o momento da força é 150 × 80 = 12000 N·cm e o momento do bloco é 300 × 40 = 12000 N·cm — iguais, como exige o equilíbrio."
        ],
        "resposta": "a) inter-fixa; b) F = 150 N"
      },
      {
        "cotacao": "5,0",
        "enunciado": "A figura representa um circuito eléctrico. A intensidade da corrente que atravessa a resistência R3 é de 4 A. Calcule:\na) a resistência total do circuito.\nb) o valor indicado pelo instrumento «W».\nc) o valor indicado pelo instrumento «Z».\nNo circuito: R1 = 9 Ω e R2 = 18 Ω em paralelo, esse paralelo em série com R3 = 4 Ω; W é o amperímetro do ramo principal e Z é o voltímetro em paralelo com a fonte (ver figura).",
        "numero": 3,
        "passos": [
          "a) O paralelo de R1 e R2 vale Rp = (9 × 18)/(9 + 18) = 162/27 = 6 Ω. Em série com R3: Rtotal = 6 + 4 = 10 Ω.",
          "b) W está no ramo principal, em série com todo o circuito: indica a corrente total, que é a corrente que atravessa R3, ou seja, W = 4 A.",
          "c) Z está em paralelo com a fonte: indica a tensão total do circuito, U = Rtotal × I = 10 × 4 = 40 V.",
          "Verificação: a tensão no paralelo é 4 × 6 = 24 V e em R3 é 4 × 4 = 16 V; 24 + 16 = 40 V — a tensão indicada por Z. As correntes nos ramos (24/9 + 24/18 ≈ 2,67 + 1,33) somam 4 A."
        ],
        "resposta": "a) R = 10 Ω; b) W = 4 A; c) Z = 40 V"
      },
      {
        "cotacao": "2,0",
        "enunciado": "Assinale com «V» as afirmações que são verdadeiras e com «F» as que são falsas.\nA. A energia não pode ser criada nem destruída mas sim transformada.\nB. A energia que um corpo possui devido à sua posição em relação ao solo é chamada energia cinética.\nC. A energia que um corpo possui devido à sua posição em relação ao solo é chamada energia potencial.\nD. A energia que um corpo possui devido ao seu movimento é chamada energia cinética.",
        "numero": 4,
        "passos": [
          "A é verdadeira: é o princípio da conservação da energia — a energia transforma-se de umas formas noutras, sem ser criada nem destruída.",
          "B é falsa: a energia devida à posição (altura) em relação ao solo é a energia potencial gravítica, não a cinética.",
          "C é verdadeira: é a definição da energia potencial gravítica.",
          "D é verdadeira: é a definição da energia cinética — a energia do movimento."
        ],
        "resposta": "A V; B F; C V; D V"
      },
      {
        "cotacao": "4,0",
        "enunciado": "A figura abaixo representa um trecho de uma onda cujo período de propagação é de 4 segundos.\na) Qual o valor da amplitude?\nb) Quantas oscilações cada ponto desta onda realiza em 256 segundos?\nc) Calcule a velocidade de propagação da onda.\nNa figura: a seta vertical de 80 cm vai do nível das cristas ao nível dos vales; a seta horizontal de 150 cm vai da 1.ª crista ao 3.º vale (ver figura).",
        "numero": 5,
        "passos": [
          "a) A seta vertical de 80 cm mede de crista a vale, ou seja, duas amplitudes: 2A = 80 cm, logo A = 40 cm.",
          "b) Cada oscilação demora um período (4 s): em 256 s cada ponto realiza n = 256/4 = 64 oscilações.",
          "c) A seta horizontal de 150 cm vai da 1.ª crista ao 3.º vale: crista→vale (0,5λ), →crista (1λ), →vale (1,5λ), →crista (2λ), →vale (2,5λ). Logo 2,5λ = 150 cm, λ = 60 cm = 0,60 m, e v = λ/T = 0,60/4 = 0,15 m/s.",
          "Verificação de c): a frequência é f = 1/T = 0,25 Hz, e v = λ × f = 0,60 × 0,25 = 0,15 m/s — o mesmo valor."
        ],
        "resposta": "a) A = 40 cm; b) 64 oscilações; c) v = 0,15 m/s"
      },
      {
        "cotacao": "4,0",
        "enunciado": "Um pêndulo de comprimento L = 88,2 m, oscila entre duas posições extremas A e B, como ilustra a figura. Calcule:\na) o período das oscilações do pêndulo.\nb) a frequência (use g = 9,8 m/s²).",
        "numero": 6,
        "passos": [
          "a) O período do pêndulo simples é T = 2π√(L/g) = 2π√(88,2/9,8) = 2π√9 = 2π × 3 = 6π ≈ 6 × 3,14 = 18,84 s, ou seja, ≈ 18,8 s.",
          "b) A frequência é o inverso do período: f = 1/T = 1/18,84 ≈ 0,053 Hz.",
          "Verificação: f × T = 0,053 × 18,84 ≈ 1, como tem de ser. Nota: com π = 3 obtém-se T = 18 s e f ≈ 0,056 Hz."
        ],
        "resposta": "a) T ≈ 18,8 s; b) f ≈ 0,053 Hz"
      }
    ],
    "totalPerguntas": 6
  },
  {
    "ano": 2009,
    "chamada": "1ª Época",
    "classe": "10ª Classe",
    "disciplina": "Física",
    "duracao": "90 Minutos",
    "fonteEnunciado": "Exame oficial 2009, Conselho Nacional de Exames, Certificação e Equivalências (Moçambique)",
    "id": "fis-10-2009-1",
    "originalPdf": "https://storage.mozexames.com/papers/27f4934a-13c7-4eef-a827-4a8a18690d1a/question.pdf",
    "perguntas": [
      {
        "cotacao": "4,0",
        "enunciado": "O gráfico dado representa a relação entre a força aplicada a um corpo e a aceleração a que este está sujeito (2ª Lei de Newton):\na) Calcule a massa do corpo.\nb) Determine o valor da força que poderá causar uma aceleração de 8 m/s² ao referido corpo.\nc) Qual dos seguintes gráficos representa um corpo cuja massa é superior à massa do corpo do gráfico dado?\nNo gráfico dado, a recta passa por F = 200 N para a = 4 m/s². Nos gráficos A–D: A passa por (2; 200), B por (8; 200), C por (4; 100) e D por (8; 100), em (a em m/s²; F em N) (ver figura).",
        "numero": 1,
        "passos": [
          "a) Pela 2.ª lei de Newton, F = m × a, logo m = F/a = 200/4 = 50 kg. O declive da recta F(a) é a massa.",
          "b) Com a mesma massa, a força para a = 8 m/s² é F = m × a = 50 × 8 = 400 N.",
          "c) A massa é o declive da recta: A dá 200/2 = 100 kg; B dá 200/8 = 25 kg; C dá 100/4 = 25 kg; D dá 100/8 = 12,5 kg. Só o gráfico A tem massa superior a 50 kg.",
          "Verificação de c): 100 > 50 > 25 > 12,5 — a ordem das massas é A, dado, B = C, D."
        ],
        "resposta": "a) m = 50 kg; b) F = 400 N; c) gráfico A"
      },
      {
        "cotacao": "4,0",
        "enunciado": "A figura representa um objecto AB colocado em frente de instrumento óptico por si estudado.\na) O instrumento óptico apresentado é:\nA um espelho plano.\nB um espelho côncavo.\nC uma lente convergente.\nD uma lente divergente.\nb) Determine geometricamente a imagem do objecto AB dada pelo instrumento óptico e classifique-a quanto ao tipo, posição e tamanho.\nNa figura: o instrumento é o arco carregado à direita; no eixo estão marcados o centro C e o foco F; o objecto AB está junto ao espelho, entre F e o espelho (ver figura).",
        "numero": 2,
        "passos": [
          "a) O instrumento é uma superfície reflectora curva, côncava para o lado do objecto — não é plano nem é uma lente (não tem duas superfícies refractivas). É um espelho côncavo: a opção B.",
          "b) Construção: o objecto AB está entre o foco F e o espelho. O raio paralelo ao eixo reflecte-se passando por F; o raio que passa pelo centro C reflecte-se sobre si mesmo. Os dois raios reflectidos divergem, por isso não se cruzam à frente do espelho: os seus prolongamentos para trás do espelho cruzam-se atrás dele.",
          "A imagem é, por isso, virtual (forma-se pelos prolongamentos), direita (do mesmo lado do eixo que o objecto) e maior do que o objecto, situada atrás do espelho.",
          "Verificação: é o caso clássico do espelho côncavo com o objecto dentro da distância focal — a única posição que dá imagem virtual e ampliada, como a de um espelho de barbear."
        ],
        "resposta": "a) B — espelho côncavo; b) imagem virtual, direita, maior do que o objecto, atrás do espelho"
      },
      {
        "cotacao": "4,0",
        "enunciado": "Assinala com V a(s) afirmação(ões) verdadeira(s) e com F a(s) falsa(s).\nA A resistência equivalente ou total de duas resistências 3 Ω e 6 Ω quando associadas em paralelo é de 2 Ω.\nB Quando a intensidade da corrente que atravessa uma resistência aumenta 3 vezes, a potência nela dissipada aumenta 9 vezes.\nC Mantendo constante a temperatura de um condutor, quando a diferença de potencial nos seus extremos aumenta 2 vezes a intensidade da corrente diminui 2 vezes.\nD A resistência de um condutor aumenta quando se aumenta a área da sua secção transversal.",
        "numero": 3,
        "passos": [
          "A é verdadeira: em paralelo, 1/Req = 1/3 + 1/6 = 2/6 + 1/6 = 3/6 = 1/2, logo Req = 2 Ω.",
          "B é verdadeira: a potência dissipada é P = R × I²; se I passa a 3I, P passa a R × (3I)² = 9 × R × I², ou seja, 9 vezes maior.",
          "C é falsa: pela lei de Ohm (temperatura constante), U e I são directamente proporcionais — se U duplica, I duplica, não diminui.",
          "D é falsa: R = ρ·L/A — a resistência é inversamente proporcional à área da secção; aumentando a área, a resistência diminui."
        ],
        "resposta": "A V; B V; C F; D F"
      },
      {
        "cotacao": "3,0",
        "enunciado": "Qual das seguintes afirmações é verdadeira?\nA O comprimento de onda de uma onda sonora de 20 Hz e que se propaga no ar a uma velocidade de 340 m/s, é de 17 metros.\nB Se a distância entre duas cristas consecutivas de uma onda é de 8 metros, então o seu comprimento de onda é de 4 metros.\nC O período das oscilações de uma onda mecânica, cuja frequência é de 50 Hz, é de 100 segundos.\nD A velocidade de propagação de uma onda sonora no ar é maior do que a velocidade de propagação da mesma no ferro.",
        "numero": 4,
        "passos": [
          "A é verdadeira: λ = v/f = 340/20 = 17 m.",
          "B é falsa: a distância entre duas cristas consecutivas É o comprimento de onda — seria 8 m, não 4 m.",
          "C é falsa: o período é T = 1/f = 1/50 = 0,02 s, não 100 s.",
          "D é falsa: o som propaga-se mais depressa nos sólidos (ferro) do que no ar.",
          "Só a afirmação A é verdadeira."
        ],
        "resposta": "A — verdadeira (B, C e D falsas)"
      },
      {
        "cotacao": "5,0",
        "enunciado": "Observe o circuito eléctrico dado.\na) Determine a resistência total ou equivalente.\nb) Qual é o valor da intensidade total da corrente?\nc) Calcule o valor medido pelo instrumento «V».\nNo circuito: dois resistores de 4 Ω em paralelo, esse paralelo em série com um resistor de 2 Ω; o amperímetro A, no ramo principal, marca 2 A; o voltímetro V está em paralelo com a fonte (ver figura).",
        "numero": 5,
        "passos": [
          "a) O paralelo dos dois resistores de 4 Ω vale 4/2 = 2 Ω. Em série com o resistor de 2 Ω: Rtotal = 2 + 2 = 4 Ω.",
          "b) O amperímetro A está no ramo principal e marca a corrente total: I = 2 A.",
          "c) O voltímetro V está em paralelo com a fonte: mede a tensão total, U = Rtotal × I = 4 × 2 = 8 V.",
          "Verificação: a tensão no paralelo é 2 × 2 = 4 V e no resistor de 2 Ω é 2 × 2 = 4 V; 4 + 4 = 8 V — a tensão medida por V."
        ],
        "resposta": "a) R = 4 Ω; b) I = 2 A; c) V = 8 V"
      }
    ],
    "totalPerguntas": 5
  },
  {
    "ano": 2009,
    "chamada": "2ª Época",
    "classe": "10ª Classe",
    "disciplina": "Física",
    "duracao": "90 Minutos",
    "fonteEnunciado": "Exame oficial 2009, Conselho Nacional de Exames, Certificação e Equivalências (Moçambique)",
    "id": "fis-10-2009-2",
    "originalPdf": "https://storage.mozexames.com/papers/fc306661-22e8-48bf-923d-018e4e1499cd/question.pdf",
    "perguntas": [
      {
        "cotacao": "2,0",
        "enunciado": "O gráfico representa a variação da posição dum ponto material em movimento rectilíneo no decurso do tempo. Calcule:\na) a velocidade do ponto material em km/h.\nb) o tempo necessário para percorrer 72 km.\nNo gráfico s(t): a recta passa por (1,0 s; 10 m) e (3,5 s; 35 m) (ver figura).",
        "numero": 1,
        "passos": [
          "a) A velocidade é o declive da recta s(t): v = Δs/Δt = (35 − 10)/(3,5 − 1,0) = 25/2,5 = 10 m/s. Em km/h: 10 × 3,6 = 36 km/h.",
          "b) Com velocidade constante, t = s/v = 72/36 = 2 h.",
          "Verificação de a): a recta passa pela origem (0; 0) e por (1,0; 10): o declive é também 10/1 = 10 m/s — o mesmo valor."
        ],
        "resposta": "a) v = 36 km/h; b) t = 2 h"
      },
      {
        "cotacao": "3,5",
        "enunciado": "Um objecto AB está colocado perpendicularmente ao eixo principal dum espelho esférico.\na) Construa geometricamente a imagem do objecto.\nb) Caracterize-a.\nNa figura: o espelho côncavo está à esquerda (a parte tracejada é o reverso); no eixo estão marcados o foco F e o centro C; o objecto AB está para lá de C (ver figura).",
        "numero": 2,
        "passos": [
          "a) Construção: o raio que sai de B (topo do objecto) paralelamente ao eixo reflecte-se passando pelo foco F; o raio que sai de B passando pelo centro C reflecte-se sobre si mesmo. Os dois raios reflectidos cruzam-se entre F e C — aí fica o topo da imagem.",
          "b) A imagem é real (forma-se pelo cruzamento dos raios reflectidos, à frente do espelho), invertida (do lado oposto do eixo em relação ao objecto) e menor do que o objecto, situada entre o foco F e o centro C.",
          "Verificação: é o caso clássico do objecto para lá do centro de curvatura — imagem real, invertida e reduzida, entre F e C."
        ],
        "resposta": "imagem real, invertida, menor do que o objecto, entre F e C"
      },
      {
        "cotacao": "2,5",
        "enunciado": "A figura mostra um sólido regular de dimensões 10 cm × 20 cm × 30 cm (c × l × h). A massa específica do material da caixa é 8,5 g/cm³. Se g = 10 m/s², calcule:\na) a massa do sólido.\nb) a pressão exercida pelo sólido sobre a superfície de apoio.\nNa figura: o sólido está assente na face de 20 cm × 10 cm e a altura vertical é de 30 cm (ver figura).",
        "numero": 3,
        "passos": [
          "a) O volume é V = 10 × 20 × 30 = 6000 cm³. A massa é m = ρ × V = 8,5 × 6000 = 51000 g = 51 kg.",
          "b) O peso é P = m × g = 51 × 10 = 510 N. A área de apoio é A = 20 × 10 = 200 cm² = 0,02 m². A pressão é p = P/A = 510/0,02 = 25 500 Pa.",
          "Verificação de b): pela coluna de material, p = ρ·g·h = 8500 × 10 × 0,3 = 25 500 Pa — o mesmo valor (ρ = 8,5 g/cm³ = 8500 kg/m³)."
        ],
        "resposta": "a) m = 51 kg; b) p = 25 500 Pa"
      },
      {
        "cotacao": "2,0",
        "enunciado": "Assinale as afirmações verdadeiras (V) e as falsas (F).\nA O período das oscilações de um pêndulo simples depende da massa do corpo oscilante.\nB Para duplicarmos o período das oscilações de um pêndulo devemos quadruplicar o seu comprimento.\nC Num oscilador de mola, quanto maior é a constante elástica da mola, maior é o período das oscilações.\nD O período das oscilações de um oscilador de mola depende da massa do corpo.",
        "numero": 4,
        "passos": [
          "A é falsa: o período do pêndulo simples é T = 2π√(L/g) — não contém a massa.",
          "B é verdadeira: T é proporcional a √L; para duplicar T é preciso multiplicar L por 2² = 4.",
          "C é falsa: no oscilador de mola, T = 2π√(m/k) — maior k dá menor período, não maior.",
          "D é verdadeira: T = 2π√(m/k) contém a massa m — o período cresce com a massa."
        ],
        "resposta": "A F; B V; C F; D V"
      },
      {
        "cotacao": "5,0",
        "enunciado": "A figura mostra um circuito eléctrico onde estão inseridos aparelhos de medida.\na) Que nome tem o aparelho representado pela letra H?\nb) E pela letra G?\nc) Determine o valor que será lido por cada aparelho de medida.\nNo circuito: fonte de 12 V; R1 = 5 Ω em série com o bloco em paralelo R2 = 6 Ω // R3 = 2 Ω // R4 = 3 Ω; H está em paralelo com R1 e G está em série no ramo de R3 (ver figura).",
        "numero": 5,
        "passos": [
          "a) H está ligado em paralelo com R1, ou seja, mede uma tensão: é um voltímetro.",
          "b) G está ligado em série num ramo do circuito, ou seja, mede uma corrente: é um amperímetro.",
          "c) O bloco em paralelo vale: 1/Rp = 1/6 + 1/2 + 1/3 = 1/6 + 3/6 + 2/6 = 6/6 = 1, logo Rp = 1 Ω. A resistência total é R = 5 + 1 = 6 Ω e a corrente total é I = 12/6 = 2 A.",
          "A tensão no paralelo é U = I × Rp = 2 × 1 = 2 V. H mede a tensão em R1: U1 = I × R1 = 2 × 5 = 10 V (confirmação: 10 + 2 = 12 V, a tensão da fonte). G mede a corrente no ramo de R3: I3 = U/R3 = 2/2 = 1 A.",
          "Verificação: as correntes nos três ramos do paralelo (2/6 + 1 + 2/3 ≈ 0,33 + 1 + 0,67) somam 2 A — a corrente total."
        ],
        "resposta": "a) H — voltímetro; b) G — amperímetro; c) H = 10 V; G = 1 A"
      },
      {
        "cotacao": "5,0",
        "enunciado": "A figura representa uma onda de frequência 50 Hz, num dado instante. Determine:\na) a amplitude da onda em metros.\nb) o período.\nc) a velocidade de propagação da onda em m/s.\nNo gráfico y(x): a amplitude está marcada como 20 cm (do eixo à crista); no eixo x, o primeiro vale está em 7,5 cm, a crista seguinte em 22,5 cm e o vale seguinte em 37,5 cm (ver figura).",
        "numero": 6,
        "passos": [
          "a) A amplitude é a distância máxima ao eixo: A = 20 cm = 0,20 m.",
          "b) O período é o inverso da frequência: T = 1/f = 1/50 = 0,02 s.",
          "c) O comprimento de onda é a distância entre dois vales consecutivos: λ = 37,5 − 7,5 = 30 cm = 0,30 m (confirmação: vale→crista são 15 cm, metade de λ). A velocidade é v = λ × f = 0,30 × 50 = 15 m/s.",
          "Verificação de c): v = λ/T = 0,30/0,02 = 15 m/s — o mesmo valor."
        ],
        "resposta": "a) A = 0,20 m; b) T = 0,02 s; c) v = 15 m/s"
      }
    ],
    "totalPerguntas": 6
  },
  {
    "ano": 2008,
    "chamada": "1ª Época",
    "classe": "10ª Classe",
    "disciplina": "Física",
    "duracao": "90 Minutos",
    "fonteEnunciado": "Exame oficial 2008, Conselho Nacional de Exames, Certificação e Equivalências (Moçambique)",
    "id": "fis-10-2008-1",
    "originalPdf": "https://storage.mozexames.com/papers/475ce602-6f4f-4f0b-a206-68bad187a189/question.pdf",
    "perguntas": [
      {
        "cotacao": "3,0",
        "enunciado": "A tabela corresponde ao movimento de um ponto material que se move sob acção de uma força constante.\nV (m/s): 0 | 2,5 | 5 | 7,5 | 10 | 15\nt (s): 0 | 1 | 2 | 3 | 4 | 6\na) Classifique o movimento.\nb) Calcule a aceleração do movimento.\nc) Qual é a velocidade do ponto no instante t = 5 s? (Mostre através dos cálculos)",
        "numero": 1,
        "passos": [
          "a) A velocidade cresce sempre 2,5 m/s em cada segundo e a força é constante: é um movimento rectilíneo uniformemente acelerado (MRUA).",
          "b) A aceleração é a = Δv/Δt = (2,5 − 0)/(1 − 0) = 2,5 m/s². Confirmação com outro par: (15 − 10)/(6 − 4) = 5/2 = 2,5 m/s².",
          "c) Com v0 = 0 e aceleração constante, v = a·t = 2,5 × 5 = 12,5 m/s.",
          "Verificação de c): entre t = 4 s (10 m/s) e t = 6 s (15 m/s) a velocidade média é 12,5 m/s — exactamente o valor aos 5 s, a meio do intervalo."
        ],
        "resposta": "a) MRUA; b) a = 2,5 m/s²; c) v = 12,5 m/s"
      },
      {
        "cotacao": "3,0",
        "enunciado": "A figura representa uma associação de roldanas por si estudada.\na) De que tipo de associação se trata?\nb) Quantas roldanas móveis tem a associação?\nc) Calcule o valor da força «F» necessária para equilibrar a força exercida pela barra.\nNa figura: uma roldana fixa no suporte, duas roldanas móveis, a inferior ligada à barra de 1600 N, e a força F na ponta livre da corda (ver figura).",
        "numero": 2,
        "passos": [
          "a) A associação combina uma roldana fixa com roldanas móveis: é uma talha.",
          "b) As roldanas que se deslocam com a carga são duas — a roldana fixa do suporte não conta.",
          "c) Cada roldana móvel duplica a força: com 2 roldanas móveis o ganho é 2 × 2 = 4 vezes, logo F = 1600/4 = 400 N.",
          "Verificação de c): 4 × 400 = 1600 N — a força da barra; passo a passo, 400 → 800 → 1600 N."
        ],
        "resposta": "a) talha; b) 2 roldanas móveis; c) F = 400 N"
      },
      {
        "cotacao": "3,5",
        "enunciado": "A figura representa uma associação de resistências eléctricas. A diferença de potencial entre os extremos da associação (ponto A e B) é de 24 V.\na) Calcule a resistência equivalente da associação.\nb) Calcule a intensidade total da corrente.\nc) Calcule a diferença de potencial nos extremos da resistência de 4 Ω.\nNa associação: R1 = 6 Ω e R2 = 3 Ω em paralelo, esse paralelo em série com R3 = 2 Ω e R4 = 4 Ω, entre A e B (ver figura).",
        "numero": 3,
        "passos": [
          "a) O paralelo de R1 e R2 vale Rp = (6 × 3)/(6 + 3) = 18/9 = 2 Ω. Em série com R3 e R4: Req = 2 + 2 + 4 = 8 Ω.",
          "b) A intensidade total é I = U/Req = 24/8 = 3 A.",
          "c) A d.d.p na resistência de 4 Ω é U4 = R4 × I = 4 × 3 = 12 V.",
          "Verificação: a tensão no paralelo é 3 × 2 = 6 V e em R3 é 3 × 2 = 6 V; 6 + 6 + 12 = 24 V — a tensão entre A e B."
        ],
        "resposta": "a) Req = 8 Ω; b) I = 3 A; c) U4 = 12 V"
      },
      {
        "cotacao": "3,5",
        "enunciado": "A figura representa um pêndulo que oscila livremente entre os pontos «X» e «Y» passando pelo ponto «O». A distância entre estes pontos é de 3 metros. O corpo oscilante gasta 4 segundos de «X» para «Y».\na) Determine a amplitude das oscilações.\nb) Determine o período das oscilações.\nc) Diminuindo o comprimento do pêndulo, o período das oscilações aumenta ou diminui? Porquê?\nNa figura: X e Y são as posições extremas, O é a posição de equilíbrio, e a distância X–Y é de 3 m (ver figura).",
        "numero": 4,
        "passos": [
          "a) A amplitude é a distância máxima ao equilíbrio: metade da distância entre os extremos, ou seja, A = 3/2 = 1,5 m.",
          "b) De X a Y o pêndulo percorre metade de uma oscilação completa: T/2 = 4 s, logo T = 8 s.",
          "c) O período diminui. O período do pêndulo simples é T = 2π√(L/g): é proporcional à raiz quadrada do comprimento — menor L dá menor T."
        ],
        "resposta": "a) A = 1,5 m; b) T = 8 s; c) diminui (T ∝ √L)"
      },
      {
        "cotacao": "3,5",
        "enunciado": "A figura representa uma onda mecânica cuja frequência é de 4 Hz.\na) Determine a amplitude da onda.\nb) Calcule o comprimento de onda.\nc) Calcule a velocidade de propagação da onda.\nNa figura: a seta vertical de 6 m vai do nível das cristas ao nível dos vales; a seta horizontal de 10 m vai do 1.º vale à 3.ª crista (ver figura).",
        "numero": 5,
        "passos": [
          "a) A seta vertical de 6 m mede de crista a vale, ou seja, duas amplitudes: 2A = 6 m, logo A = 3 m.",
          "b) A seta horizontal de 10 m vai do 1.º vale à 3.ª crista: vale→crista (0,5λ), →vale (1λ), →crista (1,5λ), →vale (2λ), →crista (2,5λ). Logo 2,5λ = 10 m e λ = 4 m.",
          "c) A velocidade é v = λ × f = 4 × 4 = 16 m/s.",
          "Verificação de c): o período é T = 1/f = 0,25 s, e v = λ/T = 4/0,25 = 16 m/s — o mesmo valor."
        ],
        "resposta": "a) A = 3 m; b) λ = 4 m; c) v = 16 m/s"
      },
      {
        "cotacao": "3,5",
        "enunciado": "A força de repulsão entre duas cargas pontuais q1 = 12 μC e q2 = 6 μC, separadas no vácuo de uma distância d, é de 7,2 N. Determine o valor de d. (k = 9.10⁹ SI)",
        "numero": 6,
        "passos": [
          "A lei de Coulomb é F = k·q1·q2/d², logo d² = k·q1·q2/F.",
          "Substituindo (1 μC = 10⁻⁶ C): d² = (9×10⁹ × 12×10⁻⁶ × 6×10⁻⁶)/7,2 = (9 × 72 × 10⁻³)/7,2 = 0,648/7,2 = 0,09 m².",
          "Logo d = √0,09 = 0,3 m.",
          "Verificação: F = 9×10⁹ × 12×10⁻⁶ × 6×10⁻⁶ / 0,3² = 0,648/0,09 = 7,2 N — a força dada."
        ],
        "resposta": "d = 0,3 m"
      }
    ],
    "totalPerguntas": 6
  },
  {
    "ano": 2008,
    "chamada": "2ª Época",
    "classe": "10ª Classe",
    "disciplina": "Física",
    "duracao": "90 Minutos",
    "fonteEnunciado": "Exame oficial 2008, Conselho Nacional de Exames, Certificação e Equivalências (Moçambique)",
    "id": "fis-10-2008-2",
    "originalPdf": "https://storage.mozexames.com/papers/5021bd81-f2dd-4832-8e45-f6f6721fab29/question.pdf",
    "perguntas": [
      {
        "cotacao": "3,0",
        "enunciado": "A tabela corresponde ao movimento de uma pedra que se move sob acção da gravidade na superfície da lua.\nv (m/s): 0 | 3,2 | 6,4 | 9,6\nt (s): 0 | 2 | 4 | 6\na) A pedra está animada de um Movimento Rectilíneo Uniforme ou Uniformemente acelerado? Porquê?\nb) Calcule a aceleração da pedra.\nc) Qual é a velocidade da pedra após 3 segundos?",
        "numero": 1,
        "passos": [
          "a) A pedra está animada de um movimento rectilíneo uniformemente acelerado: a velocidade cresce sempre o mesmo valor (3,2 m/s) em cada intervalo de 2 s — a aceleração é constante e a velocidade não é constante, por isso não é uniforme.",
          "b) A aceleração é a = Δv/Δt = (3,2 − 0)/(2 − 0) = 1,6 m/s². Confirmação: (9,6 − 6,4)/(6 − 4) = 3,2/2 = 1,6 m/s². Esta é a aceleração de gravidade na lua, neste exercício.",
          "c) Com v0 = 0 e aceleração constante, v = a·t = 1,6 × 3 = 4,8 m/s.",
          "Verificação de c): aos 3 s, a meio caminho entre t = 2 s (3,2 m/s) e t = 4 s (6,4 m/s), a velocidade é a média: (3,2 + 6,4)/2 = 4,8 m/s — o mesmo valor."
        ],
        "resposta": "a) uniformemente acelerado (v cresce uniformemente); b) a = 1,6 m/s²; c) v = 4,8 m/s"
      },
      {
        "cotacao": "3,5",
        "enunciado": "A figura representa um tipo de máquina simples por si estudada a elevar uma pedra de 200 kg. A aceleração da gravidade no lugar vale 10 m/s².\na) Que tipo de alavanca está representada?\nb) Calcule o peso da pedra.\nc) Calcule o valor da força que deve ser aplicada na outra extremidade para equilibrar a pedra.\nNa figura: o apoio está entre a pedra e a outra extremidade; a pedra está a 0,5 m do apoio e a outra extremidade a 2 m do apoio (ver figura).",
        "numero": 2,
        "passos": [
          "a) O apoio está entre a resistência (pedra) e a potência (força aplicada): é uma alavanca inter-fixa.",
          "b) O peso da pedra é P = m × g = 200 × 10 = 2000 N.",
          "c) Em equilíbrio, os momentos anulam-se: F × 2 = 2000 × 0,5, logo F = 1000/2 = 500 N.",
          "Verificação de c): o momento da força é 500 × 2 = 1000 N·m e o momento do peso é 2000 × 0,5 = 1000 N·m — iguais, como exige o equilíbrio."
        ],
        "resposta": "a) inter-fixa; b) P = 2000 N; c) F = 500 N"
      },
      {
        "cotacao": "3,5",
        "enunciado": "A figura representa uma associação de resistências. A diferença de potencial entre os pontos A e B é de 90 V.\na) Calcule a resistência equivalente da associação.\nb) Calcule a intensidade total da corrente.\nc) Qual é a intensidade da corrente que atravessa a resistência de 7 Ω?\nNa associação: R1 = 2 Ω e R2 = 4 Ω em série, esse ramo em paralelo com R3 = 3 Ω, e o conjunto em série com R4 = 7 Ω, entre A e B (ver figura).",
        "numero": 3,
        "passos": [
          "a) O ramo superior vale R1 + R2 = 2 + 4 = 6 Ω. Em paralelo com R3 = 3 Ω: Rp = (6 × 3)/(6 + 3) = 18/9 = 2 Ω. Em série com R4: Req = 2 + 7 = 9 Ω.",
          "b) A intensidade total é I = U/Req = 90/9 = 10 A.",
          "c) R4 está no ramo principal, em série com todo o resto: é atravessada pela corrente total, ou seja, 10 A.",
          "Verificação: a tensão no paralelo é 10 × 2 = 20 V e em R4 é 10 × 7 = 70 V; 20 + 70 = 90 V — a tensão entre A e B."
        ],
        "resposta": "a) Req = 9 Ω; b) I = 10 A; c) I4 = 10 A"
      },
      {
        "cotacao": "3,0",
        "enunciado": "A figura representa um oscilador de mola, que oscila entre os pontos «W» e «Z», passando pelo ponto de equilíbrio «Y». A distância entre os pontos «W» e «Z» é de 20 cm e o corpo oscilante gasta 3 segundos de «W» para «Y».\na) Qual é a amplitude das oscilações?\nb) Determine o período das oscilações.\nc) Se aumentarmos a massa do corpo oscilante, o período das oscilações aumenta ou diminui? Porquê?\nNa figura: W é o extremo superior, Y é a posição de equilíbrio (onde está o corpo desenhado) e Z é o extremo inferior; a distância W–Z é de 20 cm (ver figura).",
        "numero": 4,
        "passos": [
          "a) A amplitude é a distância máxima ao equilíbrio: metade da distância entre os extremos, ou seja, A = 20/2 = 10 cm.",
          "b) De W (extremo) a Y (equilíbrio) o corpo percorre um quarto de oscilação: T/4 = 3 s, logo T = 12 s.",
          "c) O período aumenta. No oscilador de mola, T = 2π√(m/k): o período é proporcional à raiz quadrada da massa — maior massa dá maior período."
        ],
        "resposta": "a) A = 10 cm; b) T = 12 s; c) aumenta (T ∝ √m)"
      },
      {
        "cotacao": "3,5",
        "enunciado": "A figura representa uma onda mecânica cuja frequência é de 20 Hz. O lado de cada quadrado mede 2 metros.\na) Qual é a amplitude da onda?\nb) Qual é o comprimento de onda?\nc) Calcule a velocidade de propagação da onda.\nNa grelha: a onda sobe 1 quadrado do eixo à crista e as cristas consecutivas distam 4 quadrados (ver figura).",
        "numero": 5,
        "passos": [
          "a) A amplitude é a distância máxima ao eixo: 1 quadrado × 2 m = 2 m.",
          "b) O comprimento de onda é a distância entre duas cristas consecutivas: 4 quadrados × 2 m = 8 m.",
          "c) A velocidade é v = λ × f = 8 × 20 = 160 m/s.",
          "Verificação de c): o período é T = 1/f = 0,05 s, e v = λ/T = 8/0,05 = 160 m/s — o mesmo valor."
        ],
        "resposta": "a) A = 2 m; b) λ = 8 m; c) v = 160 m/s"
      },
      {
        "cotacao": "3,5",
        "enunciado": "A força de repulsão entre duas cargas iguais separadas no vácuo de uma distância de 30 cm é 3,6 N. Determine o valor de cada carga. (k = 9.10⁹ SI)",
        "numero": 6,
        "passos": [
          "Sendo as cargas iguais (q1 = q2 = q), a lei de Coulomb é F = k·q²/d², logo q² = F·d²/k.",
          "Com d = 30 cm = 0,3 m: q² = 3,6 × 0,3² / (9×10⁹) = 3,6 × 0,09 / (9×10⁹) = 0,324/(9×10⁹) = 3,6×10⁻¹¹ C².",
          "Logo q = √(3,6×10⁻¹¹) = 6×10⁻⁶ C = 6 μC. (As cargas são ambas do mesmo sinal, pois a força é de repulsão.)",
          "Verificação: F = 9×10⁹ × (6×10⁻⁶)² / 0,3² = 9×10⁹ × 36×10⁻¹² / 0,09 = 0,324/0,09 = 3,6 N — a força dada."
        ],
        "resposta": "q = 6 μC"
      }
    ],
    "totalPerguntas": 6
  }
]);
