import WatchedContentType from '../types/data/ContentType';

const MOVIES: WatchedContentType = {
  movies: [
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
      description:
        'Começa interessante e se torna chato em menos de 40 minutos.',
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
      longDescription:
        'Fomos no shopping mais caro pra ver uma PORCARIA dessas.',
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
      img: 'https://images.justwatch.com/poster/176337837/s592/o-ditador',
      media: 'https://c.tenor.com/BSrg4jfHGS8AAAAM/slice-execute.gif',
      genres: ['comédia'],
      banner:
        'data:image/jpeg;base64,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',
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
      media:
        'https://i.gifer.com/origin/ae/aed5788927bb207496886554ad4c1df7.gif',
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
      img: 'https://br.web.img2.acsta.net/pictures/17/01/25/13/52/576358.jpg',
      media: 'https://thumbs.gfycat.com/DirectVainGuernseycow-max-1mb.gif',
      genres: ['comédia', 'horror'],
      banner:
        'data:image/jpeg;base64,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',
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
      img: 'https://m.media-amazon.com/images/M/MV5BZDQ4Njg4YTctNGZkYi00NWU1LWI4OTYtNmNjOWMyMjI1NWYzXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg',
      media:
        'https://media.tenor.com/wZjDnzdB0e0AAAAC/the-whale-brendan-fraser.gif',
      genres: ['drama', 'drama psicológico'],
      banner: 'https://laeleplus.com/upload/images/a-Baleia-banner.webp',
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
      longDescription: `O diretor responsável por isso e o roteirista (existe um mundo em que sejam a mesma pessoa) estavam completamente alterados pelo abuso de drogas sintéticas. Criaram uma história que tinha até potencial, mas, chegando ali perto da metade pro final do filme, esqueceram do que estavam querendo falar. Como que vai levar a sério um filme que do nada adiciona um CARRO ALEGÓRIO sem contexto algum? A sensação chega a ser até frustrante. Talvez o filme não seja tão ruim, mas a nota média diz tudo.`,
      rating: '2.7',
      img: 'https://i.pinimg.com/originals/de/95/db/de95dbfc08698415b12c426e5d9c0165.jpg',
      media: 'https://media.tenor.com/rilRhk5ZehYAAAAC/tetsuo-the.gif',
      genres: ['live-action', 'cyberpunk', 'horror', 'body horror'],
      banner: 'https://pbs.twimg.com/media/EhaziLOUMAIv0m-.jpg',
    },
  ],
};
export default MOVIES;
