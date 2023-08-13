import ContentProps from '../types/data/IContent';

const MOVIES: ContentProps[] = [
  {
    id: 1,
    name: 'Ratatouille',
    description: 'Filme perfeito. Meu rato cozinheiro preferido.',
    longDescription: 'Não precisa de motivo pra estar no topo.',
    rating: '5',
    img: 'https://images.metahub.space/poster/small/tt0382932/img',
    media: 'https://c.tenor.com/-uhzi1JSmcYAAAAd/ana.gif',
    genres: ['animação', 'comédia'],
    banner: `https://www.savethecat.com/wp-content/uploads/2015/03/aa2cc38091680637512f0a07f3a4c0339abd5150main.jpg`,
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
    banner:
      'https://www.depoisdasessao.com.br/wp-content/uploads/2016/03/a-bruxa-capa.jpg',
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
    banner:
      'https://media.fstatic.com/IwiNuTHWDMIGrjkgUhfCQ9302Xs=/600x250/smart/filters:format(webp)/media/articles/main/2020/08/13/658141ef-7d95-4697-958e-dd2f3c31903f-3671798643.jpg',
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
    banner:
      'https://cinemacao.com/wp-content/uploads/2017/09/91k-4GWIAL._RI_-1130x590.jpg',
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
    banner:
      'https://www.thebanner.org/sites/default/files/styles/article_detail_header/public/TIN-650%20Blade%20Runner_large_all.jpg?itok=I9PtFGEJ',
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
    banner:
      'https://chiefrabbi.org/wp-content/uploads/2020/02/jojo-rabbit-banner-2.jpg',
  },
  {
    id: 7,
    name: 'Toy Story 4',
    description: 'Começa interessante e se torna chato em menos de 40 minutos.',
    longDescription:
      'A estética é boa, o design de personagens também. Ótima dublagem, ótima produção. Aspectos técnicos são dignos de Oscar e o filme tem uma comédia na medida, pra não ser tão pastelão. O enredo que só é raso e mal trabalhado, sendo inferior a todos os outros anteriores.',
    rating: '2.9',
    img: 'https://br.web.img3.acsta.net/pictures/19/03/27/21/03/0464387.jpg',
    media: 'https://c.tenor.com/zR0xIPBMD_YAAAAC/toy-story-toy-story4.gif',
    genres: ['aventura', 'comédia', 'animação'],
    banner:
      'https://blogdojotace.com.br/wp-content/uploads/2019/08/ToyStory123_banner.jpg',
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
    banner:
      'https://cinelounge.ch/movie-db/images/backdrops/489/3qkfrgpXNHdhB4sDGCpLxuS0JYP.jpg',
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
    banner:
      'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/b27cd8d89ee4ec29089d32e1a309a7d80dadf3a9141b92a7d7fe671c3ff38158._UY500_UX667_RI_TTW_.jpg',
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
    banner:
      'data:image/jpeg;base64,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',
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
    banner:
      'https://1.bp.blogspot.com/-R9rbeEKawhY/X2to91raVoI/AAAAAAAALVs/ZHQoxGq4SUgIqA-8hv2d_ElgvYv420qQgCLcBGAsYHQ/s1000/hereditary.png',
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
    banner:
      'https://onthelist.com.br/uploads/a8f866c97a4f70540a43b9bb3746eb261506901087-ver-e-rever-um-contratempo.jpg',
  },
  {
    id: 13,
    name: 'Aquaman',
    description: 'Roubaram meu dinheiro, ME DEVOLVA, SHOPPING RIO MAR!',
    longDescription: 'Fomos no shopping mais caro pra ver uma PORCARIA dessas.',
    rating: '3',
    img: 'https://play-lh.googleusercontent.com/fxqXgfNrmoaXaFiW5r6fQw5q9nirfZY7KYSl90Kf7hrJkhcC0SvR1-qENCg31kbsvZZ9hso4nsDnV50PLvAc',
    media:
      'https://i.pinimg.com/originals/51/da/ea/51daea5ea500c54d9b4c313050998a60.gif',
    genres: ['ação', 'aventura', 'fantasia'],
    banner:
      'https://cdn.ome.lt/bRIunYNudzKo3n5xQNLemroBFlo=/1200x630/smart/extras/conteudos/aquaman-banner.jpg',
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
    banner:
      'https://i0.wp.com/teamcomics.com.br/wp-content/uploads/2023/05/homem-aranha-atraves-do-aranhaverso-2-1280x720-1.jpg?fit=1170%2C658&ssl=1',
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
    banner:
      'https://i0.wp.com/zattiniprd.wpcomstaging.com/wp-content/uploads/2021/08/08_infantil-idade-vingadores.png?fit=1256%2C500&ssl=1',
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
    banner:
      'https://techcrunch.com/wp-content/uploads/2022/05/cdrr-ff-046_f5c6c624.jpeg',
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
    banner:
      'https://img.welt.de/img/kultur/mobile186991312/9571353667-ci16x9-w1200/BLADE-RUNNER-l-r-Harrison-Ford-Sean-Young-on-poster-art-for-Directors-Cut-rele.jpg',
  },
  {
    id: 18,
    name: 'O Ditador',
    description:
      'Se o filme fosse lançado em 2019 pra frente era cancelado até a morte e o diretor talvez preso.',
    longDescription:
      "'O filme é engraçadinho, tem uma pitada política sobre as relações com o oriente médio, mas o auge do filme é ele se apaixonar por uma grávida. Nada demais.' Misato, Valentim (texto modificado)",
    rating: '2.4',
    img: 'https://image.tmdb.org/t/p/w500/8wkGlPOAEnSigS1DZmf3vp9chSg.jpg',
    media: 'https://c.tenor.com/BSrg4jfHGS8AAAAM/slice-execute.gif',
    genres: ['comédia'],
    banner: 'https://image.tmdb.org/t/p/w500/jWq20KNbg5txb28tLxJl0yLYuxp.jpg',
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
    banner:
      'https://assets.mubicdn.net/images/artworks/528282/images-original.png?1678878328',
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
    banner:
      'https://www.cinemundo.com.br/wp-content/uploads/2015/01/Whiplash_010814_1170x457.jpg',
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
    banner:
      'https://multiversonoticias.com.br/wp-content/uploads/2022/07/Sociedade-dos-Poetas-Mortos.png',
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
    banner:
      'https://static.todamateria.com.br/upload/te/mp/temposmodernos-cke.jpg',
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
    banner: 'https://wallpaperaccess.com/full/4038652.jpg',
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
    banner:
      'https://blog-leiturinha-novo.s3.us-east-1.amazonaws.com/production/uploads/2022/03/Caras_Malvados_Asset.png',
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
    banner:
      'https://fanboyplanet.s3.amazonaws.com/wp-content/uploads/the-nice-guys-banner.jpg',
  },
  {
    id: 26,
    name: 'Arremessando Alto',
    description: 'Creed de basquete.',
    longDescription:
      'Não é necessário o conhecimento prévio de jogos de basquete ou algo do tipo para o filme ser bom. Uma história comovente e que consegue prender COMPLETAMENTE durante uma hora e cinquenta e sete minutos. Fora isso o filme possui uma ótima trilha sonora, montagem de áudio, bom uso de ângulos e ótimo film look.',
    rating: '3.9',
    img: 'https://br.web.img3.acsta.net/c_310_420/pictures/22/05/25/20/17/5781885.jpg',
    media: 'https://i.gifer.com/origin/ae/aed5788927bb207496886554ad4c1df7.gif',
    genres: ['drama', 'esportivo'],
    banner:
      'https://cdn.ome.lt/2yjfdlBwGKUvC_IU8z5ppaSITHA=/570x0/smart/uploads/conteudo/fotos/arremessando.png',
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
    banner:
      'https://occ-0-32-41.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUoWeL23jEKvklIJ43lkzfUwwLlsEuI-6Qe82_bNYPSRnD_l2W0--sOP6B2-V0GOUathWW1LHruAuEUSDfn1eCwKALpbsQiekQaOTvALEFJMqpnAtoybIWJ739bI1sEhXcavZw.jpg?r=4be',
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
    banner:
      'https://disneyplusbrasil.com.br/wp-content/uploads/2022/11/Exterminio-Os-Dias-Estao-Contados-StarPlus.jpg',
  },
  {
    id: 29,
    name: 'O Bar',
    description: 'Mendigo herói muito vilão.',
    longDescription:
      'Uma crítica quase ácida sobre como as pessoas se comportam diante da pressão social e o medo. Um rapaz que fica spammando frases bíblicas, outro que tem fetiche em calcinha, e outros fenômenos. Com certeza é um filme que vai te entregar o entretenimento e vai deixar seu cérebro liso como um peito de frango.',
    rating: '2.8',
    img: 'https://image.tmdb.org/t/p/w500/qqy6zdir0lk9nPBSAPP6ap3myO4.jpg',
    media: 'https://thumbs.gfycat.com/DirectVainGuernseycow-max-1mb.gif',
    genres: ['comédia', 'horror'],
    banner: 'https://image.tmdb.org/t/p/w500/6u6KIyDKojx7pGhCn0skRHdmqX3.jpg',
  },
  {
    id: 30,
    name: 'Frida',
    description: 'A história de uma das mais conceituadas pintoras do México.',
    longDescription:
      'Um filme que fala sobre sofrimentos, bebidas, traições, artes e representatividade. Fala sobre os costumes da época e nos faz refletir sobre isso, além de ter várias referências filosóficas, dentre elas a psicanálise de Freud.',
    rating: '3.9',
    img: 'https://upload.wikimedia.org/wikipedia/pt/8/87/Frida_%28filme%29.jpg',
    media: 'https://thumbs.gfycat.com/ContentDeadCoqui-size_restricted.gif',
    genres: ['drama', 'romântico', 'histórico', 'cinebiografia'],
    banner:
      'https://feitoporelas.com.br/wp-content/uploads/2019/02/Frida-002.jpg',
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
    banner:
      'https://cafecomnerd.com.br/wp-content/uploads/2022/11/Depois-do-Universo-Critica-drama-romantico-nacional-com-Giulia-Be-e-Henrique-Zaga-na-Netflix.jpg',
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
    banner:
      'https://i0.wp.com/newspack-washingtoncitypaper.s3.amazonaws.com/uploads/2023/01/Skinamarink_Still.jpg?fit=2048%2C858&ssl=1',
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
    banner:
      'https://i0.wp.com/www.irishfilmcritic.com/wp-content/uploads/2022/06/Everything-Everywhere-All-at-Once.jpg?fit=1392%2C696&ssl=1',
  },
  {
    id: 34,
    name: 'A Baleia',
    description:
      'Comprei uma pizza para comer enquanto assistia. Você já pode imaginar que eu desisti de comê-la em minutos.',
    longDescription:
      'Um professor de redação que dá aulas remotas que, após um trauma, obteve uma compulsão alimentar na qual ele não consegue controlar. O filme traz uma visão mais verdadeira sobre o que a obesidade (junto, claro, aos outros problemas que será citado no filme) e quem vive com ela, além de trazer alguns fatos sobre religião e a desumanização que ele sofre por gordofobia e homofobia. O filme não foi feito para te deixar alegre e o ator principal não é o cara bonzinho.',
    rating: '4.2',
    img: 'https://image.tmdb.org/t/p/w500/4hhd8JuwsHTvpqW9wW9oebsHVu0.jpg',
    media:
      'https://media.tenor.com/wZjDnzdB0e0AAAAC/the-whale-brendan-fraser.gif',
    genres: ['drama', 'drama psicológico'],
    banner: 'https://image.tmdb.org/t/p/w500/46FRuCeAn6TrS4F1P4F9zhyCpyo.jpg',
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
    banner:
      'https://uploads.jovemnerd.com.br/wp-content/uploads/2023/01/gato_de_botas_bilheteria_brasil__8h39p01-1210x544.jpg',
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
    banner: 'https://i.redd.it/2jzhj6imip061.jpg',
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
    banner:
      'https://static.gamevicio.com/imagens_up/big/89/super-mario-bros-o-filme-quebra-recorde-e-torna-se-a-melhor-estreia-de-uma-animacao-da-historia-088510.jpg',
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
    banner: 'https://cinepop.com.br/wp-content/uploads/2022/08/o-menu.webp',
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
    banner: 'https://www.cafecomfilme.com.br/media/k2/galleries/4345/06.jpg',
  },
  {
    id: 40,
    name: 'Homem-Aranha: Através do Aranhaverso',
    description: 'Amar a animação desse filme é um evento canônico.',
    longDescription: `Que animação, meus amigos! A masterização do filme não é uma das melhores (e fez falta) e não há muito o que falar sobre história... é o Homem Aranha. A forma que eles desenharam tudo é magnífica ao ponto de que se você pausar em qualquer momento do filme, facilmente vai virar um papel de parede e qualquer um acharia que é um filme totalmente 2D.`,
    rating: '4.6',
    img: 'https://br.web.img3.acsta.net/pictures/23/05/17/22/43/4869322.jpg',
    media:
      'https://media.tenor.com/e1LRlRsE2U4AAAAC/miles-morales-gwen-stacy.gif',
    genres: ['animação', 'ação', 'aventura'],
    banner:
      'https://weliveentertainment.com/wp-content/uploads/2023/05/across-spider-verse-banner-4.jpg',
  },
  {
    id: 41,
    name: 'Beau Tem Medo',
    description: 'O filho ta de saco cheio.',
    longDescription: `Um filme que, além de ter um ótimo trabalho de câmera, tem a tendência de manipular muito bem quem está o assistindo (e creio que isso defina quem vai gostar ou não). A atuação do nosso querido Joaquin Phoenix (vulgo segundo melhor coringa) é impecável, até porque só chamam o meu amigo para fazer papel de sofredor, triste, depressivo e tudo que há de pior, tal qual Rafael Portugal está para papel de pobre, garçon e tudo que envolva subúrbio.
      O humor no filme é no limite do esquisito e perturbador, então posso dizer que é bem relativo para quem estiver assistindo.
      É um filme que facilmente você gostaria de assistir novamente.`,
    rating: '2.9',
    img: 'https://m.media-amazon.com/images/M/MV5BYTNhNWRmMDctYzE4OS00MzczLWJkODgtNzYxZTQxM2Y1YmM3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
    media:
      'https://thumbs.gfycat.com/SpitefulGleefulAmericangoldfinch-size_restricted.gif',
    genres: ['comédia', 'drama', 'terror'],
    banner:
      'https://cinepop.com.br/wp-content/uploads/2023/04/beauisafraidbanner.jpg',
  },
  {
    id: 42,
    name: 'Tetsuo - O Homem de Ferro',
    description:
      'Se atropelar alguém, não tente esconder o corpo e faça sexo na frente dele. Ele pode ficar com raiva e querer se vingar.',
    longDescription: `O diretor responsável por isso e o roteirista (existe um mundo em que sejam a mesma pessoa) estavam completamente alterados pelo abuso de drogas sintéticas. Criaram uma história que tinha até potencial, mas, chegando ali perto da metade pro final do filme, esqueceram do que estavam querendo falar. Como que vai levar a sério um filme que do nada adiciona um CARRO ALEGÓRICO sem contexto algum? A sensação chega a ser até frustrante. Talvez o filme não seja tão ruim, mas a nota média diz tudo.`,
    rating: '2.7',
    img: 'https://i.pinimg.com/originals/de/95/db/de95dbfc08698415b12c426e5d9c0165.jpg',
    media: 'https://media.tenor.com/rilRhk5ZehYAAAAC/tetsuo-the.gif',
    genres: ['live-action', 'cyberpunk', 'horror', 'body horror'],
    banner: 'https://pbs.twimg.com/media/EhaziLOUMAIv0m-.jpg',
  },
  {
    id: 43,
    name: 'O Fantasma do Futuro',
    description: 'Simplesmente a androide tem peitos humanos.',
    longDescription: `O filme nos coloca em um mundo que a diferença entre ser humano e máquinas já não é tão simples assim de ser percebida. Como todo conteúdo japonês, eles gostam de adicionar frases filósoficas de formas duvidosas e exagerar nas fobias deles de máquinas e inteligências artificais, além de colocar personagens femininas o máximo possível sensualizadas.
      É um bom filme que vai te deixar pensativo por algumas horas ou até dias (se isso acontecer procure um psicólogo). Não posso deixar de citar a MAC-10 com poder de uma paraFAL, isso é algo que me impressiona até agora.
      `,
    rating: '2.9',
    img: 'https://cinepop.com.br/wp-content/uploads/2020/08/GITS-cinepop1.jpg',
    media:
      'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXdiYWl3ZDU4Z3lwc3cxMnQzZmdkbndwMGppdGM5ZjFyYXlyMTJwayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/nlk3Y1u3r1n5C/giphy.gif',
    genres: ['animação', 'ação', 'policial'],
    banner:
      'https://edmidentity.com/wp-content/uploads/2017/04/ghost-in-the-shell-banner.jpg',
  },
  {
    id: 44,
    name: 'Internet - O Filme',
    description: 'Simplesmente jukebox fazendo a felicidade do brasileiro.',
    longDescription: `Não tem muito o que dizer dessa obra. Eu me senti criminoso por tentar achar esse filme pois foi bastante dificultoso (não existe um local onde esse filme esteja disponível de forma normal). O roteiro claramente foi um idoso que travou em 1952 e acha que gente mais nova falam dessa forma que só velho pensa que os jovens falam e que odeia o cellbit.`,
    rating: '1.8',
    img: 'https://image.tmdb.org/t/p/w500/7kyQPkPj6YDYzX4oMymtoiTzLx2.jpg',
    media:
      'https://m.media-amazon.com/images/M/MV5BZGJkMDhjNGUtY2JjZC00MDEzLTk1NDktYmQ2N2NjY2Y3MzdhXkEyXkFqcGdeQXVyMTAxMzk4OTU2._V1_.jpg',
    genres: ['comédia'],
    banner:
      'https://casadeimagem.com/wp-content/uploads/2017/01/Internet_O_Filme_Blog_Casadeimagem.png',
  },
  {
    id: 45,
    name: 'Barbie',
    description: 'Simplesmente jukebox fazendo a felicidade do brasileiro.',
    longDescription: `Houveram SAFADOS que apostavam que seria uma bomba, mas olha só, surpreendeu a galera e não ofendeu ninguém... exceto os extremistas políticos e as feministas que têm um probleminha com a boneca. Fazer o quê, né? Sempre tem os insatisfeitos de plantão (aprendi com nando moura)!
      Simplesmente comemos hambúrguer com o líquido mágico do Ryan Gosling, foi mágico.
      E falando no Gosling, o cara arrasou na atuação, tomou conta do filme da Barbie como se fosse a coisa mais natural do mundo. Genial da bola, sem dúvida! Acho que ele poderia até fazer um spin-off, o "Ken Gosling", que eu assistiria com gosto!`,
    rating: '4',
    img: 'https://image.tmdb.org/t/p/w500/yRRuLt7sMBEQkHsd1S3KaaofZn7.jpg',
    media: 'https://media.tenor.com/gNRysP_hvwQAAAAC/barbie-movie-waving.gif',
    genres: ['aventura', 'comédia', 'família'],
    banner:
      'https://knightedgemedia.com/wp-content/uploads/2022/12/barbie-movie-teaser-banner1.jpg',
  },
  {
    id: 46,
    name: 'O Flash',
    description: 'Prometeu nada e entregou nada (com maestria).',
    longDescription: `Criticaram o filme antes mesmo de assistir, mas, no geral, o filme entregou o que prometeu - e quem esperava mais, convenhamos, estava pedindo demais.
      Agora, os efeitos especiais... Bom, vamos ser sinceros, não foram lá essas coisas, mas isso não estragou o enredo. Sabe como é, tem gente que só quer procurar defeitos e criticar, nem liga pra história em si.
      A parte triste é que o Flash dos filmes parece ter perdido o GPS da inteligência. Esqueceram de pegar o Flash esperto dos quadrinhos e colocaram um sujeito bem desajeitado no lugar. Uma decisão bem esquisita, pra dizer o mínimo.
      Mas preciso dar o crédito ao ator, ele conseguiu ser estranho de um jeito divertido. Atuou bem nesse papel maluco que deram pro Flash. Acho que era isso que eles queriam desde o início.`,
    rating: '2.9',
    img: 'https://image.tmdb.org/t/p/w500/itYONYDHpJqTuu8BCXAtHxgpglq.jpg',
    media:
      'https://thumbs.gfycat.com/IllfatedCreamyIndianglassfish-size_restricted.gif',
    genres: ['ação', 'ficção científica', 'fantasia'],
    banner:
      'https://legadodadc.com.br/wp-content/uploads/2023/05/banner-the-flash-legadodadc.webp',
  },
  {
    id: 47,
    name: 'Relatos Selvagens',
    description:
      'Relatos Selvagens" é uma coletânea de histórias interessantes e loucas, com destaque para a hilária trama dos caras no deserto.',
    longDescription: `Sabe aquele teaser do avião que te deixou super curioso? Pois é, o filme é bem mais do que só isso! Na verdade, é uma coletânea de histórias bem interessantes e com um toque de salvageria.
    As tramas são incríveis e algumas delas merecem destaque especial, sério! Recomendo muito que assistam, vale a pena mesmo!
    A melhor história, sem dúvida, é a dos caras de carro numa estrada. Não vou contar o motivo, mas é simplesmente genial! Vocês precisam ver!
    Então, se você está afim de um filme com várias surpresas, emoções e algumas risadas, "Relatos Selvagens" é a escolha certa.`,
    rating: '3.5',
    img: 'https://image.tmdb.org/t/p/w500/bkhHsHoa5PYBmhT93mYOC28Hhd2.jpg',
    media:
      'https://pa1.aminoapps.com/6657/f1298d718dfff9a03cb922cef6790091220e72b4_hq.gif',
    genres: ['comédia', 'drama'],
    banner:
      'https://legadodadc.com.br/wp-content/uploads/2023/05/banner-the-flash-legadodadc.webp',
  },
  {
    id: 48,
    name: 'La La Land',
    description:
      'La La Land", uma obra de arte romântica com trilha sonora incrível e um final realista que encanta e emociona.',
    longDescription: `"La La Land", o filme romântico que até conquistou os corações mais resistentes! Uma verdadeira obra de arte, com detalhes que te fazem viajar. A trilha sonora é simplesmente incrível, e os atores, especialmente o sempre talentoso Ryan Gosling, são como mágicos naturais da atuação.
    E aquele final... sem spoilers, mas vamos combinar que foi uma sacudida da realidade, né? Nada de clichês aqui, o filme mostra que a vida nem sempre é um conto de fadas cor-de-rosa.
    Fiquei até o último segundo dessa experiência cinematográfica única!
    Resumindo, "La La Land" é uma mistura de romance, comédia, drama e uma pitada de reflexão. Vale a pena conferir essa história que nos leva para um mundo de música, dança e emoções à flor da pele. É uma experiência que fica com a gente depois dos créditos finais!`,
    rating: '4.4',
    img: 'https://image.tmdb.org/t/p/w500/AvMietG6xuobpSSdmVnKuTjv4bL.jpg',
    media:
      'https://imgs.search.brave.com/b-Tv4Pz70t-vpRBqeEdWMIlNxVgsMr9wrAG31fO557U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YTEudGVub3IuY29t/L2ltYWdlcy8yZTI5/YmUzYWZhMGEzYWRk/MDgzMmIwODhkZGI4/NmEwMS90ZW5vci5n/aWY_aXRlbWlkPTc3/NzcyMzk.gif',
    genres: ['comédia', 'musical', 'romance'],
    banner: 'https://images.alphacoders.com/808/808916.jpg',
  },
  {
    id: 49,
    name: 'Corrente Do Mal',
    description:
      'Na hora de recomendar é leão, quando é pra assistir vira gasparzinho.',
    longDescription: `"Corrente Do Mal"... Olha, não tem como negar, é um daqueles filmes que deixam a gente se perguntando o porquê de ter perdido tempo com isso.
    Os amigos insistem para assistir, mas na hora H, ninguém quer encarar essa bomba. É desculpa que não acaba mais!
    O filme é uma sequência interminável de momentos constrangedores e nada faz sentido. Sério, é difícil encontrar algo que se salve!
    Melhor nem comentar, só digo que o pessoal precisava de um roteiro melhor.
    Enfim, "Corrente Do Mal" não entrega o que promete e só deixa a gente se perguntando como filmes assim são feitos. É um daqueles que dá vontade de esquecer logo depois de assistir. A vida é curta, então escolha um filme mais digno do seu precioso tempo! 😄`,
    rating: '1.2',
    img: 'https://image.tmdb.org/t/p/w500/rGH9NafHyg3Of2cMY5oOVb7p4HA.jpg',
    media:
      'https://miro.medium.com/v2/resize:fit:960/1*zxOgmdD6FtmhlV9W0DCvxQ.gif',
    genres: ['terror'],
    banner: 'https://i.ytimg.com/vi/s8EE554SvpI/maxresdefault.jpg',
  },
];
export default MOVIES;

