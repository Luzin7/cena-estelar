import ContentType from "../types/data/ContentType";

const VIEWED_CONTENT: ContentType = {
  movies: [
    {
      id: 1,
      name: 'Ratatouille',
      description: 'Filme perfeito. Meu rato cozinheiro preferido.',
      longDescription: 'Não precisa de motivo pra estar no topo.',
      rating: '5',
      img: 'https://upload.wikimedia.org/wikipedia/pt/8/82/Ratatouille_p%C3%B4ster.jpg',
      media: 'https://c.tenor.com/-uhzi1JSmcYAAAAd/ana.gif',
      genres: ['animação', 'comédia'],
    },
    {
      id: 2,
      name: 'A bruxa',
      description: 'Não sei, é muito fora da curva. NÃO SAIA DA SUA CASA!',
      longDescription:
        'Um grande filme de terror psicológico que brinca com a sua mente. Uma garota e sua trupe em uma floresta aleatória que DO NADA cismou em derreter a família inteira dela. Agora ela vai fazer o mesmo com outras pessoas que estiverem por perto dali também.',
      rating: '4',
      img: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRpTIDMdsWEStI5yAkPYtJcfloTOkYVCeCrD0ahQeHSnyYjBHcn',
      media:
        'https://i.kinja-img.com/gawker-media/image/upload/hilfwluqdlfwlillkxsh.gif',
      genres: ['terror'],
    },
    {
      id: 3,
      name: 'Os outros',
      description: 'O inverso do comum. Sorte de quem morou primeiro.',
      longDescription:
        'O tanto que esse filme te faz de PALHAÇO é brincadeira. Quando percebemos que o final na verdade era uma inversão de papéis, trazendo os mortos/fantasmas no centro da tela, fazendo parecer que eram, na verdade, os vivos que estavam incomodando e brincando de infernizar a, entre diversas aspas, vida deles. Simplesmente você fica sem palavras.',
      rating: '5',
      img: 'https://upload.wikimedia.org/wikipedia/pt/3/34/Outros_2001.jpg',
      media: 'https://c.tenor.com/vslHOwHvncsAAAAC/the-others-ghost.gif',
      genres: ['suspense'],
    },
    {
      id: 4,
      name: 'O nevoeiro',
      description: 'Ele ignorou a mulher totalmente.',
      longDescription:
        'Promete tudo e entrega nada. Basicamente meu querido David Drayton fica preso no mercado, junto com seu filho, porque apareceu um nevoeiro enorme (quem diria). Depois de menos de 2 (dois) dias começa a crítica social ácida, trazendo a divisão de valores, onde grupos foram se formando e no fim das contas a religião e o extremismo tomaram conta da situação. Depois que meu mano Atirador Profissional de 1993 (vulgo Ollie Weeks (semanas de oliva)) fez o favor de acabar com a mais INSUPORTÁVEL da obra, eles fogem, descobrem o monstro, acaba a gasolina, eles ficam tristes e decidem ir de comes e bebes. Após matar todos e seu próprio filho, simplesmente O MUNDO VOLTA AO NORMAL. ERA SÓ ELE TER ESPERADO 30 SEGUNDOS! Notou que não citei muito sobre o que há no nevoeiro? É porque é tão irrelevante que NEM O FILME FAZ QUESTÃO de explicar.',
      rating: '2.8',
      img: 'https://br.web.img2.acsta.net/medias/nmedia/18/87/10/28/19872037.jpg',
      media: 'https://media1.giphy.com/media/c62qQQtiKPdv2/giphy.gif',
      genres: ['terror', 'suspense'],
    },
    {
      id: 5,
      name: 'Blade Runner 2049',
      description:
        'Tem que ver o anterior. Meu mano Ryan Gosling foi pago para não atuar.',
      longDescription:
        'Basicamente 3 horas de filme. Sendo 2 horas de molho, 40 minutos de ação e muitos plot twists, 10 minutos de remember e 10 minutos de tentativa FALHA de conectar os pontos no final. Fora isso, o filme tem uma boa direção de arte e efeitos sonoros.',
      rating: '3.5',
      img: 'https://br.web.img3.acsta.net/pictures/17/08/25/11/58/463146.jpg',
      media: 'https://giffiles.alphacoders.com/207/207124.gif',
      genres: ['suspense', 'ficção científica'],
    },
    {
      id: 6,
      name: 'Jojo Rabbit',
      description: 'O cara passou raspando de ser cancelado no twitter.',
      longDescription:
        'Esse filme é muito bom. De fato um hitler judeu e um esquizofrênico são engraçados juntos.',
      rating: '4.1',
      img: 'https://br.web.img3.acsta.net/pictures/20/01/28/22/54/2304385.jpg',
      media:
        'https://i.pinimg.com/originals/08/e5/43/08e5436a88f376b1ad8e007d05e0a8c1.gif',
      genres: ['comédia', 'drama'],
    },
    {
      id: 7,
      name: 'Toy Story 4',
      description:
        'Começa interessante e se torna chato em menos de 40 minutos.',
      longDescription:
        'A estética é boa, o design de personagens também. Ótima dublagem, ótima produção. Aspectos técnicos são dignos de Oscar e o filme tem uma comédia na medida, pra não ser tão pastelão. O enredo que só é raso e mal trabalhado, sendo inferior a todos os outros anteriores.',
      rating: '2.9',
      img: 'https://br.web.img3.acsta.net/pictures/19/03/27/21/03/0464387.jpg',
      media: 'https://c.tenor.com/zR0xIPBMD_YAAAAC/toy-story-toy-story4.gif',
      genres: ['aventura', 'comédia', 'animação'],
    },
    {
      id: 8,
      name: 'Gênio Indomável',
      description: 'Gênio da Marvel para os íntimos.',
      longDescription:
        'O filme é recomendado para quem gosta ou quer se encantar com o mundo da matemática. O problema é que só tem 2 cenas sobre isso.',
      rating: '3.5',
      img: 'https://images-na.ssl-images-amazon.com/images/I/51HFYKEaYzL._SX370_BO1,204,203,200_.jpg',
      media:
        'https://lh3.googleusercontent.com/n9Pmk-SuPfz89IbRjMr75jNPAxP3XU4y7kzeSg7lyNVKxM8dURZgqlOcjdEDjHHf3TK1iqHAjNl059QXQUvI-T9vWfxpEtBJb72_xKn7z0PKLmOHoqdHlIQxM1ytprwRsMvrCroN',
      genres: ['drama'],
    },
    {
      id: 9,
      name: 'Amnésia',
      description: 'Muito brabo, presta atenção que vale a pena.',
      longDescription:
        'Tô há 15 minutos tentando escrever isso... Aqui diz que eu preciso lembrar...',
      rating: '4.5',
      img: 'https://upload.wikimedia.org/wikipedia/pt/thumb/c/cf/MementoCartaz.jpg/250px-MementoCartaz.jpg',
      media:
        'https://c.tenor.com/CZUY0PKVHfIAAAAd/dont-believe-his-lies-memento.gif',
      genres: ['drama', 'suspense'],
    },
    {
      id: 10,
      name: 'Emoji: O Filme',
      description: 'A existência disso é uma ofensa.',
      longDescription:
        'Essa imagem acima representa o filme: tamanho maior do que deveria, qualidade horrível e não passa nenhuma emoção além de raiva.',
      rating: '-5',
      img: 'https://musicimage.xboxlive.com/catalog/video.movie.8D6KGWXD9QSR/image?locale=pt-br&mode=crop&purposes=BoxArt&q=90&h=225&w=150&format=jpg',
      media:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQC5n5VF4hPqSKSXn4UQotUcfoasi0bOqk-c5SUaJ9dBsazOr5KC8ByOFY973IYp1kEdU&usqp=CAU',
      genres: ['comédia', 'aventura', 'ficção científica', 'animação'],
    },
    {
      id: 11,
      name: 'Hereditário',
      description: 'Estou sem cabeça pra esse filme.',
      longDescription:
        'O filme poderia ser resolvido se a mãe fosse estéril. Pela primeira vez na vida a OMS ta recomendando infertilidade',
      rating: '3.4',
      img: 'https://br.web.img3.acsta.net/pictures/18/06/14/13/11/1751062.jpg',
      media:
        'https://3.bp.blogspot.com/-NiOIYgjZSkI/WzZmt9iJf7I/AAAAAAAAQAs/LdhknhXjZFMU4t4amHw6Evv4tvFRTJ6HwCEwYBhgL/s1600/giphy%2B%25284%2529.gif',
      genres: ['drama', 'terror'],
    },
    {
      id: 12,
      name: 'Um Contratempo',
      description: 'Surpreendeu.',
      longDescription:
        'Ninguém tava botando fé nesse filme e do nada ele deu um tapa na nossa cara mostrando que consegue explodir mentes.',
      rating: '4',
      img: 'https://br.web.img3.acsta.net/pictures/16/11/18/11/16/356441.jpg',
      media:
        'https://2.bp.blogspot.com/-gsTrEtztbJM/WjMNOZbDKnI/AAAAAAAACOI/Qvq5iolIbXka4oNJS-HK7bRmGJPdxN6MQCLcBGAs/s640/Mario%2BCasas%2Bun%2Bcontratiempo.gif',
      genres: ['suspense'],
    },
    {
      id: 13,
      name: 'Aquaman',
      description: 'Roubaram meu dinheiro, ME DEVOLVA, SHOPPING RIO MAR!',
      longDescription:
        'Fomos no shopping mais caro pra ver uma PORCARIA dessas.',
      rating: '3',
      img: 'https://play-lh.googleusercontent.com/fxqXgfNrmoaXaFiW5r6fQw5q9nirfZY7KYSl90Kf7hrJkhcC0SvR1-qENCg31kbsvZZ9hso4nsDnV50PLvAc',
      media:
        'https://i.pinimg.com/originals/51/da/ea/51daea5ea500c54d9b4c313050998a60.gif',
      genres: ['ação', 'aventura', 'fantasia'],
    },
    {
      id: 14,
      name: 'Homem-Aranha no Aranhaverso',
      description: "UuU-Uuu-uUU Some things you just can't refuse 🎵",
      longDescription:
        "🎵 And you'll be left in the dust Unless 🎵 I stuck by ya You're the sunflower 🎵 I think your love would be too much 🎵 Or you'll be left in the dust 🎵 Unless I stuck by ya 🎵 You're the sunflower 🎵 You're the sunflower (yeah) 🎵",
      rating: '4.5',
      img: 'https://musicart.xboxlive.com/7/94fc5000-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080',
      media:
        'https://i.pinimg.com/originals/bc/35/70/bc3570011c9d166f7a2b39d921f2a4f6.gif',
      genres: ['animação', 'aventura'],
    },
    {
      id: 15,
      name: 'Vingadores: Ultimato',
      description: 'OLHA O CARA PEGANDO O MARTELO ALI, VELHO!',
      longDescription:
        '🎵 PAAAAAAAAAAM 🎵PAM 🎵 PAM 🎵PA-RAAAAM 🎵PAAAM 🎵PAAAAAAAM 🎵PAAAAAAAAAAAAAAAAAM 🎵',
      rating: '4.7',
      img: 'https://br.web.img3.acsta.net/pictures/19/04/26/17/30/2428965.jpg',
      media:
        'https://i.pinimg.com/originals/93/40/6d/93406d5b2820d0e9d045d0a3dbb7df16.gif',
      genres: ['ação', 'aventura', 'fantasia', 'fantasia científica'],
    },
    {
      id: 16,
      name: 'Tico e Teco: Defensores da Lei',
      description: 'O slogan diz tudo. Regrediu com força.',
      longDescription: 'Quem não dormiu assistindo isso é maluco.',
      rating: '1.4',
      img: 'https://img.olhardigital.com.br/wp-content/uploads/2022/05/tico-e-teco-defensores-da-lei-1-717x1024.png',
      media:
        'https://res.cloudinary.com/buzzfeed-brasil/image/upload/q_auto,f_auto,c_limit,w_990,h_990/image-uploads/entry-image/gif/5dc584957a9016c07804d43aab635ce5.jpg',
      genres: ['ação', 'aventura', 'comédia', 'animação'],
    },
    {
      id: 17,
      name: 'Blade Runner',
      description: 'O homem apaixonado é perigoso.',
      longDescription:
        'Filme bacana. Se perde no roteiro aqui e se encontra depois alí. Tem seu valor.',
      rating: '4.2',
      img: 'https://upload.wikimedia.org/wikipedia/pt/thumb/b/bb/BladeRunner-P%C3%B4ster.jpg/250px-BladeRunner-P%C3%B4ster.jpg',
      media: 'https://i.gifer.com/Lnb.gif',
      genres: ['ação', 'aventura', 'ficção científica'],
    },
    {
      id: 18,
      name: 'O Ditador',
      description:
        'Se o filme fosse lançado em 2019 pra frente era cancelado até a morte e o diretor talvez preso.',
      longDescription:
        "'O filme é engraçadinho, tem uma pitada política sobre as relações com o oriente médio, mas o auge do filme é ele se apaixonar por uma grávida. Nada demais.' Misato, Valentim (texto modificado)",
      rating: '2.4',
      img: 'https://images.justwatch.com/poster/176337837/s592/o-ditador',
      media: 'https://c.tenor.com/BSrg4jfHGS8AAAAM/slice-execute.gif',
      genres: ['comédia'],
    },
    {
      id: 19,
      name: 'Intocáveis',
      description: 'Filmão. Estou chorando só de lembrar.',
      longDescription:
        'Pega teu pano e se prepara pra chorar. Você só merece saber essa parte.',
      rating: '4.2',
      img: 'https://br.web.img2.acsta.net/medias/nmedia/18/89/89/00/20143859.jpg',
      media:
        'https://blog.jovempan.com.br/paulacarvalho/wp-content/uploads/sites/14/2017/02/GIF.gif',
      genres: ['drama', 'comédia', 'cinebiografia'],
    },
    {
      id: 20,
      name: 'Whiplash: Em Busca da Perfeição',
      description: 'Não precisa gostar de música pra gostar desse filme.',
      longDescription: 'Facilmente um dos filmes já feitos.',
      rating: '4',
      img: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/4c737b04d1a97407837e3955258134cb494181dd20ccfbaf7b7acf8c081d1708._RI_V_TTW_.jpg',
      media: 'https://c.tenor.com/josaiwe4bSoAAAAM/jk-simmons-whiplash.gif',
      genres: ['drama'],
    },
    {
      id: 21,
      name: 'Sociedade dos Poetas Mortos',
      description: 'Carpe diem.',
      longDescription:
        "'nunca entendi esse filme direito é muito elogiado mas meio dane-se' - Magnata, Lucas (texto modificado)",
      rating: '3',
      img: 'https://br.web.img2.acsta.net/pictures/210/132/21013221_20130617200543616.jpg',
      media:
        'https://5efce21e120dc77e32455754.static-01.com/l/images/436a056ec5312c18e05a693d155b3e781e8d619c.gif',
      genres: ['drama'],
    },
    {
      id: 22,
      name: 'Tempos Modernos',
      description:
        'Humor leve com críticas ácidas. Charles era com certeza um dos homens.',
      longDescription:
        "Baita longa metragem que conta a história de um rapaz que vivia numa fábrica e a partir daí se inicia a crítica precisa do meu mano Chaplin sobre a sociedade, cultura e o péssimo costume do 'modo automático'. Recomendo.",
      rating: '3.7',
      img: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Modern_Times_poster.jpg',
      media:
        'https://i.pinimg.com/originals/1b/6b/77/1b6b77b2f18c8a78f9204c84e9849774.gif',
      genres: ['comédia', 'drama', 'romance'],
    },
    {
      id: 23,
      name: 'Drive',
      description: 'Arriscou tudo pra tentar ser padrasto.',
      longDescription: 'Morte à feminina.',
      rating: '3.3',
      img: 'https://flxt.tmsimg.com/assets/p8609718_p_v12_ar.jpg',
      media: 'https://c.tenor.com/W_4orF8nm74AAAAC/drive-movie.gif',
      genres: ['drama', 'suspense', 'neo-noir', 'policial'],
    },
    {
      id: 24,
      name: 'Os Caras Malvados',
      description: 'Filme infanto juvenil que entrega o que promete.',
      longDescription: 'Comparado ao filme Emoji isso é vinho.',
      rating: '2.9',
      img: 'https://br.web.img3.acsta.net/c_310_420/pictures/22/03/10/21/58/3973130.jpg',
      media:
        'https://media3.giphy.com/media/jWgfWny9RG9CHRXO5A/giphy.gif?cid=ecf05e47kcq2f2e9cfnv0wzr9k6re2wj1ovpjpsfvitc88dn&rid=giphy.gif&ct=g',
      genres: ['comédia', 'animação'],
    },
    {
      id: 25,
      name: 'Dois Caras Legais',
      description: 'Ele tenta te fazer rir.',
      longDescription:
        "Uma tentativa de diálogos Pulp Fiction's type e uma história rasa. Piadas repetitivas e datadas. Fora isso é mediano.",
      rating: '3',
      img: 'https://upload.wikimedia.org/wikipedia/pt/e/e9/The_Nice_Guys_poster.png',
      media:
        'https://akns-images.eonline.com/eol_images/Entire_Site/201668/rs_540x220-160708104707-tumblr_o8nwyzrcvW1tkodheo4_540.gif?fit=around%7C540:220&output-quality=90&crop=540:220;center,top',
      genres: ['comédia'],
    },
    {
      id: 26,
      name: 'Arremessando Alto',
      description: 'Creed de basquete.',
      longDescription:
        'Não é necessário o conhecimento prévio de jogos de basquete ou algo do tipo para o filme ser bom. Uma história comovente e que consegue prender COMPLETAMENTE durante uma hora e cinquenta e sete minutos. Fora isso o filme possui uma ótima trilha sonora, montagem de áudio, bom uso de ângulos e ótimo film look.',
      rating: '3.9',
      img: 'https://br.web.img3.acsta.net/c_310_420/pictures/22/05/25/20/17/5781885.jpg',
      media:
        'https://i.gifer.com/origin/ae/aed5788927bb207496886554ad4c1df7.gif',
      genres: ['drama', 'esportivo'],
    },
    {
      id: 27,
      name: 'Fratura',
      description: 'Ilha do medo mas sem ilha e sem medo.',
      longDescription:
        'Uma odisseia psiquiátrica do nosso protagonista que após um infortúnio precisou lutar contra tudo e todos para saber onde sua filha se encontra.',
      rating: '3.5',
      img: 'https://br.web.img3.acsta.net/pictures/19/09/16/11/03/3523781.jpg',
      media: 'https://c.tenor.com/0Hqh9uYoZaYAAAAd/help-fall.gif',
      genres: ['suspense'],
    },
    {
      id: 28,
      name: 'Extermínio',
      description: 'The Walking Dead com baixo orçamento.',
      longDescription:
        'Filme gravado com 2 câmeras Tekpix, o pagamento foi 2 sprite pra cada um e 1 coxinha. Onde meu caro amigo Tommy Shelby pisa ele faz algúem morrer (necessariamente alguém da equipe dele), além de ser uma máquina de pesadelos. Fora isso o filme conta com cenários super realistas que, com certeza, vai te deixar sem reação.',
      rating: '2.6',
      img: 'https://upload.wikimedia.org/wikipedia/pt/e/e4/28_days_later.jpg',
      media: 'https://i.gifer.com/3Q0K.gif',
      genres: ['ficção científica', 'terror'],
    },
    {
      id: 29,
      name: 'O Bar',
      description: 'Mendigo herói muito vilão.',
      longDescription:
        'Uma crítica quase ácida sobre como as pessoas se comportam diante da pressão social e o medo. Um rapaz que fica spammando frases bíblicas, outro que tem fetiche em calcinha, e outros fenômenos. Com certeza é um filme que vai te entregar o entretenimento e vai deixar seu cérebro liso como um peito de frango.',
      rating: '2.8',
      img: 'https://br.web.img2.acsta.net/pictures/17/01/25/13/52/576358.jpg',
      media: 'https://thumbs.gfycat.com/DirectVainGuernseycow-max-1mb.gif',
      genres: ['comédia', 'horror'],
    },
    {
      id: 30,
      name: 'Frida',
      description:
        'A história de uma das mais conceituadas pintoras do México.',
      longDescription:
        'Um filme que fala sobre sofrimentos, bebidas, traições, artes e representatividade. Fala sobre os costumes da época e nos faz refletir sobre isso, além de ter várias referências filosóficas, dentre elas a psicanálise de Freud.',
      rating: '3.9',
      img: 'https://upload.wikimedia.org/wikipedia/pt/8/87/Frida_%28filme%29.jpg',
      media: 'https://thumbs.gfycat.com/ContentDeadCoqui-size_restricted.gif',
      genres: ['drama', 'romântico', 'histórico', 'cinebiografia'],
    },
    {
      id: 31,
      name: 'Depois do Universo',
      description:
        'História de românce norte americano genérica só que agora em português.',
      longDescription:
        'Fizeram as gravações no brasil mas acharam que estavam nos EUA. História bacana para quem não viu nenhum filme de drama na vida ou algo do tipo "5 passos de você", bastante fantasias e reviravoltas (totalmente previsiveis).',
      rating: '3',
      img: 'https://br.web.img2.acsta.net/pictures/22/10/27/23/27/5626842.jpg',
      media:
        'https://64.media.tumblr.com/3d6bb066494218c7ae10bc8dabd093f1/78f3394da96e0bd2-88/s540x810/ef6d6261b927dbb176e0fd4c6850d1cfb6d7d031.gifv',
      genres: ['drama'],
    },
    {
      id: 32,
      name: 'Skinamarink',
      description: 'Você não vai entender esse filme.',
      longDescription:
        'O filme é tão incompleto e falho que existem centenas de teorias sobre o que o filme quer tratar, porém a certa é que só vai existir algum impacto com quem sofreu algum problema (seja psicológico ou físico) durante a infância, se você não sofreu isso, ou sofreu mas não se tornou traumático, o filme será extremamente chato e irrelevante.',
      rating: '2',
      img: 'https://www.jornalismo.ufv.br/cinecom/wp-content/uploads/2022/12/Skinamarink-1-683x1024.jpg',
      media: 'https://pbs.twimg.com/media/Fbby4qNXkAEFcNG.jpg',
      genres: ['horror', 'terror'],
    },
    {
      id: 33,
      name: 'Tudo em Todo o Lugar ao Mesmo Tempo',
      description:
        'Um filme que conseguiu misturar comédia com universos paralelos de maneira genial.',
      longDescription:
        'Um filme que vai brincar bastante com essa idéia de viagem no tempo e vai conseguir te prender do início ao fim. A história tem uma mensagem incrivel e, mesmo sendo algo mais sentimental e bastante reflexivo, ele vai ter fazer sentir todas as emoçoes sem se sentir forçado ou fora de tempo.',
      rating: '4.2',
      img: 'https://upload.wikimedia.org/wikipedia/en/1/1e/Everything_Everywhere_All_at_Once.jpg',
      media:
        'https://img.buzzfeed.com/buzzfeed-static/static/2022-04/4/0/asset/6a080c69fb2e/anigif_sub-buzz-5674-1649033456-17.gif',
      genres: ['ficção científica', 'ação', 'comédia', 'surrealismo'],
    },
    {
      id: 34,
      name: 'A Baleia',
      description:
        'Comprei uma pizza para comer enquanto assistia. Você já pode imaginar que eu desisti de comê-la em minutos.',
      longDescription:
        'Um professor de redação que dá aulas remotas que, após um trauma, obteve uma compulsão alimentar na qual ele não consegue controlar. O filme traz uma visão mais verdadeira sobre o que a obesidade (junto, claro, aos outros problemas que será citado no filme) e quem vive com ela, além de trazer alguns fatos sobre religião e a desumanização que ele sofre por gordofobia e homofobia. O filme não foi feito para te deixar alegre e o ator principal não é o cara bonzinho.',
      rating: '4.2',
      img: 'https://m.media-amazon.com/images/M/MV5BZDQ4Njg4YTctNGZkYi00NWU1LWI4OTYtNmNjOWMyMjI1NWYzXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg',
      media:
        'https://media.tenor.com/wZjDnzdB0e0AAAAC/the-whale-brendan-fraser.gif',
      genres: ['drama', 'drama psicológico'],
    },
    {
      id: 35,
      name: 'Gato de botas 2',
      description: 'Simplesmente colocaram a MORTE pra caçar o meu mano.',
      longDescription:
        'Trilha sonora, animação, cores, efeitos sonoros, roteiro e tudo que há de bom foi adicionado nesse filme. Souberam usar o padrão ultraprocessado de filmes.',
      rating: '4.2',
      img: 'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/02/25/1070078955-puss-in-boots-the-last-wish.jpg',
      media:
        'https://gifs.eco.br/wp-content/uploads/2022/02/gif-animados-do-gato-de-botas-6.gif',
      genres: ['comédia', 'aventura', 'animação'],
    },
    {
      id: 36,
      name: 'Azul Perfeito',
      description:
        'Christopher Nolan tem que aprender muito pra fazer um filme desse.',
      longDescription:
        'Parece brincadeira, mas esse filme te faz de palhaço. A história é sobre a Mima, uma popstar que resolve ser atriz e aí as coisas começam a ficar esquisitas. Tem crítica, tem reviravolta, tem detalhes na trama que te deixam sem palavras. E o mais incrível é que a gente nunca sabe o que é realidade e o que é imaginação.',
      rating: '4.1',
      img: 'https://upload.wikimedia.org/wikipedia/pt/a/a1/Perfect_Blue.jpg',
      media: 'https://media.tenor.com/zmiGNmB_6bMAAAAC/perfect-blue-anime.gif',
      genres: ['mistério', 'suspense', 'drama', 'animação'],
    },
    {
      id: 37,
      name: 'Super Mario Bros. - O Filme',
      description: 'Nada mais que o esperado. Um prato cheio para os fãs.',
      longDescription:
        'O filme tem um tom divertido e leve, com muitas piadas e referências ao jogo. O filme não é uma obra-prima, mas cumpre o seu papel de entreter e agradar os fãs.',
      rating: '3.7',
      img: 'https://www.universalpics.com.br/tl_files/content/movies/super_mario_bros/posters/03.jpg',
      media:
        'https://www.omelete.com.br/webstories/super-mario-bros-saiba-o-elenco/assets/2.gif',
      genres: ['comédia', 'animação'],
    },
    {
      id: 38,
      name: 'O Menu',
      description: 'Era só pagar os $9,95.',
      longDescription:
        'Claramente uma carta de repúdio a quem se acha cult e paga comida cara. Ficou óbvio no final que é OBVIAMENTE um comercial da BK.',
      rating: '3.7',
      img: 'https://br.web.img2.acsta.net/pictures/22/08/17/22/25/2724945.jpg',
      media:
        'https://64.media.tumblr.com/36f63bfe55f48f64b21ea7ec16762e8e/0db11b035c5c304c-8e/s540x810/aaec5ea64fb5e1a7c4fa3070da9e4a766dd48560.gif',
      genres: ['suspense'],
    },
    {
      id: 39,
      name: 'Todo Mundo Quase Morto',
      description:
        'COVID-19 se o presidente do mundo todo fosse [comentário removido pelo TSE]',
      longDescription: `Um bom filme, por incrível que pareça. Mesmo sendo de 2004 conta com um humor atemporal e sem ofensas que eram moda nessa época. A história, mesmo sendo rasa, é bem trabalhada para um filme de comédia que mistura algumas partes meio macabras. Isso gerou uma mistureba diferenciada e, na nossa opinião, boa.`,
      rating: '3.5',
      img: 'https://br.web.img3.acsta.net/c_310_420/pictures/14/09/06/06/08/169240.jpg',
      media:
        'https://media.tenor.com/wiGkYFnDjbkAAAAC/shaun-of-the-dead-shaun-of-the-dead-gifs.gif',
      genres: ['suspense'],
    },
  ],
  series: [
    {
      id: 0,
      name: 'Ruptura',
      description: '',
      longDescription: '',
      rating: '',
      img: 'https://br.web.img2.acsta.net/c_310_420/pictures/21/12/16/17/19/2294099.jpg',
      media: '',
      genres: ['drama', 'suspense'],
    },
    {
      id: 0,
      name: 'A Origem',
      description: '',
      longDescription: '',
      rating: '',
      img: 'https://br.web.img3.acsta.net/c_310_420/pictures/22/02/04/12/42/2264086.jpg',
      media: '',
      genres: ['ficção científica', 'horror'],
    },
  ],
};
export default VIEWED_CONTENT;
