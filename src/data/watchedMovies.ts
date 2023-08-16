import ContentProps from '../types/data/IContent';

const MOVIES: ContentProps[] = [
  {
    id: 1,
    name: 'Ratatouille',
    originalTitle: 'Ratatouille',
    description: 'Filme perfeito. Meu rato cozinheiro preferido.',
    longDescription: 'Não precisa de motivo pra estar no topo.',
    rating: '5',
    img: 'https://images.metahub.space/poster/small/tt0382932/img',
    media: 'https://c.tenor.com/-uhzi1JSmcYAAAAd/ana.gif',
    genres: ['animação', 'comédia'],
    banner:
      'https://www.savethecat.com/wp-content/uploads/2015/03/aa2cc38091680637512f0a07f3a4c0339abd5150main.jpg',
    releaseYear: 2007,
    directors: ['Brad Bird', 'Jan Pinkava'],
    cast: ['Patton Oswalt', 'Ian Holm', 'Lou Romano'],
    trailer: 'https://www.youtube.com/watch?v=c3sBBRxDAqk',
  },
  {
    id: 2,
    name: 'A bruxa',
    originalTitle: 'The Witch',
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
    releaseYear: 2015,
    directors: ['Robert Eggers'],
    cast: ['Anya Taylor-Joy', 'Ralph Ineson', 'Kate Dickie'],
    trailer: 'https://www.youtube.com/watch?v=iQXmlf3Sefg',
  },
  {
    id: 3,
    name: 'Os outros',
    originalTitle: 'The Others',
    description: 'O inverso do comum. Sorte de quem morou primeiro.',
    longDescription:
      'O tanto que esse filme te faz de PALHAÇO é brincadeira. Quando percebemos que o final na verdade era uma inversão de papéis, trazendo os mortos/fantasmas no centro da tela, fazendo parecer que eram, na verdade, os vivos que estavam incomodando e brincando de infernizar a, entre diversas aspas, vida deles. Simplesmente você fica sem palavras.',
    rating: '5',
    img: 'https://upload.wikimedia.org/wikipedia/pt/3/34/Outros_2001.jpg',
    media: 'https://c.tenor.com/vslHOwHvncsAAAAC/the-others-ghost.gif',
    genres: ['suspense'],
    banner:
      'https://media.fstatic.com/IwiNuTHWDMIGrjkgUhfCQ9302Xs=/600x250/smart/filters:format(webp)/media/articles/main/2020/08/13/658141ef-7d95-4697-958e-dd2f3c31903f-3671798643.jpg',
    releaseYear: 2001,
    directors: ['Alejandro Amenábar'],
    cast: ['Nicole Kidman', 'Christopher Eccleston', 'Fionnula Flanagan'],
    trailer: 'https://www.youtube.com/watch?v=0bMEGtUxajY',
  },
  {
    id: 4,
    name: 'O nevoeiro',
    originalTitle: 'The Mist',
    description: 'Ele ignorou a mulher totalmente.',
    longDescription:
      'Promete tudo e entrega nada. Basicamente meu querido David Drayton fica preso no mercado, junto com seu filho, porque apareceu um nevoeiro enorme (quem diria). Depois de menos de 2 (dois) dias começa a crítica social ácida, trazendo a divisão de valores, onde grupos foram se formando e no fim das contas a religião e o extremismo tomaram conta da situação. Depois que meu mano Atirador Profissional de 1993 (vulgo Ollie Weeks (semanas de oliva)) fez o favor de acabar com a mais INSUPORTÁVEL da obra, eles fogem, descobrem o monstro, acaba a gasolina, eles ficam tristes e decidem ir de comes e bebes. Após matar todos e seu próprio filho, simplesmente O MUNDO VOLTA AO NORMAL. ERA SÓ ELE TER ESPERADO 30 SEGUNDOS! Notou que não citei muito sobre o que há no nevoeiro? É porque é tão irrelevante que NEM O FILME FAZ QUESTÃO de explicar.',
    rating: '2.8',
    img: 'https://br.web.img2.acsta.net/medias/nmedia/18/87/10/28/19872037.jpg',
    media: 'https://media1.giphy.com/media/c62qQQtiKPdv2/giphy.gif',
    genres: ['terror', 'suspense'],
    banner:
      'https://cinemacao.com/wp-content/uploads/2017/09/91k-4GWIAL._RI_-1130x590.jpg',
    releaseYear: 2007,
    directors: ['Frank Darabont'],
    cast: ['Thomas Jane', 'Marcia Gay Harden', 'Laurie Holden'],
    trailer: 'https://www.youtube.com/watch?v=IkkSUe4zQeE',
  },
  {
    id: 5,
    name: 'Blade Runner 2049',
    originalTitle: 'Blade Runner 2049',
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
    releaseYear: 2017,
    directors: ['Denis Villeneuve'],
    cast: ['Ryan Gosling', 'Harrison Ford', 'Ana de Armas'],
    trailer: 'https://www.youtube.com/watch?v=gCcx85zbxz4',
  },
  {
    id: 6,
    name: 'Jojo Rabbit',
    originalTitle: 'Jojo Rabbit',
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
    releaseYear: 2019,
    directors: ['Taika Waititi'],
    cast: ['Roman Griffin Davis', 'Thomasin McKenzie', 'Scarlett Johansson'],
    trailer: 'https://www.youtube.com/watch?v=tL4McUzXfFI',
  },
  {
    id: 7,
    name: 'Toy Story 4',
    originalTitle: 'Toy Story 4',
    description: 'Começa interessante e se torna chato em menos de 40 minutos.',
    longDescription:
      'A estética é boa, o design de personagens também. Ótima dublagem, ótima produção. Aspectos técnicos são dignos de Oscar e o filme tem uma comédia na medida, pra não ser tão pastelão. O enredo que só é raso e mal trabalhado, sendo inferior a todos os outros anteriores.',
    rating: '2.9',
    img: 'https://br.web.img3.acsta.net/pictures/19/03/27/21/03/0464387.jpg',
    media: 'https://c.tenor.com/zR0xIPBMD_YAAAAC/toy-story-toy-story4.gif',
    genres: ['aventura', 'comédia', 'animação'],
    banner:
      'https://blogdojotace.com.br/wp-content/uploads/2019/08/ToyStory123_banner.jpg',
    releaseYear: 2019,
    directors: ['Josh Cooley'],
    cast: ['Tom Hanks', 'Tim Allen', 'Annie Potts'],
    trailer: 'https://www.youtube.com/watch?v=wmiIUN-7qhE',
  },
  {
    id: 8,
    name: 'Gênio Indomável',
    originalTitle: 'Good Will Hunting',
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
    releaseYear: 1997,
    directors: ['Gus Van Sant'],
    cast: ['Matt Damon', 'Robin Williams', 'Ben Affleck'],
    trailer: 'https://www.youtube.com/watch?v=PaZVjZEFkRs',
  },
  {
    id: 9,
    name: 'Amnésia',
    originalTitle: 'Memento',
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
    releaseYear: 2000,
    directors: ['Christopher Nolan'],
    cast: ['Guy Pearce', 'Carrie-Anne Moss', 'Joe Pantoliano'],
    trailer: 'https://www.youtube.com/watch?v=0vS0E9bBSL0',
  },
  {
    id: 10,
    name: 'Emoji: O Filme',
    originalTitle: 'The Emoji Movie',
    description: 'A existência disso é uma ofensa.',
    longDescription:
      'Essa imagem acima representa o filme: tamanho errado, qualidade horrível e não passa nenhuma emoção além de raiva.',
    rating: '-5',
    img: 'https://image.tmdb.org/t/p/w500/g4LW0JOeHyOFRsN6PAyWrH4qbG.jpg',
    media:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQC5n5VF4hPqSKSXn4UQotUcfoasi0bOqk-c5SUaJ9dBsazOr5KC8ByOFY973IYp1kEdU&usqp=CAU',
    genres: ['comédia', 'aventura', 'ficção científica', 'animação'],
    banner:
      'https://imgs.search.brave.com/PiBvk7Gq8GDYJP1boIIAPUMGQ5V0DbXi5ywTJRGAeuE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/anVzdHdhdGNoLmNv/bS9pbWFnZXMvYmFj/a2Ryb3AvMTA5MDA2/OTUvczE0NDAvZW1v/amktby1maWxtZQ',
    releaseYear: 2017,
    directors: ['Tony Leondis'],
    cast: ['T.J. Miller', 'James Corden', 'Anna Faris'],
    trailer: 'https://www.youtube.com/watch?v=O4rlvVcZYMY',
  },
  {
    id: 11,
    name: 'Hereditário',
    originalTitle: 'Hereditary',
    description: 'Estou sem cabeça pra esse filme.',
    longDescription: 'O filme poderia ser resolvido se a mãe fosse estéril...',
    rating: '3.4',
    img: 'https://br.web.img3.acsta.net/pictures/18/06/14/13/11/1751062.jpg',
    media:
      'https://3.bp.blogspot.com/-NiOIYgjZSkI/WzZmt9iJf7I/AAAAAAAAQAs/LdhknhXjZFMU4t4amHw6Evv4tvFRTJ6HwCEwYBhgL/s1600/giphy%2B%25284%2529.gif',
    genres: ['drama', 'terror'],
    banner:
      'https://1.bp.blogspot.com/-R9rbeEKawhY/X2to91raVoI/AAAAAAAALVs/ZHQoxGq4SUgIqA-8hv2d_ElgvYv420qQgCLcBGAsYHQ/s1000/hereditary.png',
    releaseYear: 2018,
    directors: ['Ari Aster'],
    cast: ['Toni Collette', 'Alex Wolff', 'Milly Shapiro'],
    trailer: 'https://www.youtube.com/watch?v=YHxcDbaiC3c',
  },
  {
    id: 12,
    name: 'Um Contratempo',
    originalTitle: 'Contratiempo',
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
    releaseYear: 2016,
    directors: ['Oriol Paulo'],
    cast: ['Mario Casas', 'Ana Wagener', 'José Coronado'],
    trailer: 'https://www.youtube.com/watch?v=I6II_8E_0S0',
  },
  {
    id: 13,
    name: 'Aquaman',
    originalTitle: 'Aquaman',
    description: 'Roubaram meu dinheiro, ME DEVOLVA, SHOPPING RIO MAR!',
    longDescription: 'Fomos no shopping mais caro pra ver uma PORCARIA dessas.',
    rating: '3',
    img: 'https://play-lh.googleusercontent.com/fxqXgfNrmoaXaFiW5r6fQw5q9nirfZY7KYSl90Kf7hrJkhcC0SvR1-qENCg31kbsvZZ9hso4nsDnV50PLvAc',
    media:
      'https://i.pinimg.com/originals/51/da/ea/51daea5ea500c54d9b4c313050998a60.gif',
    genres: ['ação', 'aventura', 'fantasia'],
    banner:
      'https://cdn.ome.lt/bRIunYNudzKo3n5xQNLemroBFlo=/1200x630/smart/extras/conteudos/aquaman-banner.jpg',
    releaseYear: 2018,
    directors: ['James Wan'],
    cast: ['Jason Momoa', 'Amber Heard', 'Willem Dafoe'],
    trailer: 'https://www.youtube.com/watch?v=WDkg3h8PCVU',
  },
  {
    id: 14,
    name: 'Homem-Aranha no Aranhaverso',
    originalTitle: 'Spider-Man: Into the Spider-Verse',
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
    releaseYear: 2018,
    directors: ['Bob Persichetti', 'Peter Ramsey', 'Rodney Rothman'],
    cast: ['Shameik Moore', 'Jake Johnson', 'Hailee Steinfeld'],
    trailer: 'https://www.youtube.com/watch?v=g4Hbz2jLxvQ',
  },
  {
    id: 15,
    name: 'Vingadores: Ultimato',
    originalTitle: 'Avengers: Endgame',
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
    releaseYear: 2019,
    directors: ['Anthony Russo', 'Joe Russo'],
    cast: ['Robert Downey Jr.', 'Chris Evans', 'Mark Ruffalo'],
    trailer: 'https://www.youtube.com/watch?v=WSJrPf-DVFc',
  },
  {
    id: 16,
    name: 'Tico e Teco: Defensores da Lei',
    originalTitle: "Chip 'n Dale: Rescue Rangers",
    description: 'O slogan diz tudo. Regrediu com força.',
    longDescription: 'Quem não dormiu assistindo isso é maluco.',
    rating: '1.4',
    img: 'https://img.olhardigital.com.br/wp-content/uploads/2022/05/tico-e-teco-defensores-da-lei-1-717x1024.png',
    media:
      'https://res.cloudinary.com/buzzfeed-brasil/image/upload/q_auto,f_auto,c_limit,w_990,h_990/image-uploads/entry-image/gif/5dc584957a9016c07804d43aab635ce5.jpg',
    genres: ['ação', 'aventura', 'comédia', 'animação'],
    banner:
      'https://techcrunch.com/wp-content/uploads/2022/05/cdrr-ff-046_f5c6c624.jpeg',
    releaseYear: 2022,
    directors: ['Akiva Schaffer'],
    cast: ['John Mulaney', 'Andy Samberg', 'Kristen Bell'],
    trailer: 'https://www.youtube.com/watch?v=MJz3g4FzR-o',
  },
  {
    id: 17,
    name: 'Blade Runner',
    originalTitle: 'Blade Runner',
    description: 'O homem apaixonado é perigoso.',
    longDescription:
      'Filme bacana. Se perde no roteiro aqui e se encontra depois alí. Tem seu valor.',
    rating: '4.2',
    img: 'https://upload.wikimedia.org/wikipedia/pt/thumb/b/bb/BladeRunner-P%C3%B4ster.jpg/250px-BladeRunner-P%C3%B4ster.jpg',
    media: 'https://i.gifer.com/Lnb.gif',
    genres: ['ação', 'aventura', 'ficção científica'],
    banner:
      'https://img.welt.de/img/kultur/mobile186991312/9571353667-ci16x9-w1200/BLADE-RUNNER-l-r-Harrison-Ford-Sean-Young-on-poster-art-for-Directors-Cut-rele.jpg',
    releaseYear: 1982,
    directors: ['Ridley Scott'],
    cast: ['Harrison Ford', 'Rutger Hauer', 'Sean Young'],
    trailer: 'https://www.youtube.com/watch?v=KPcZHjKJBnE',
  },
  {
    id: 18,
    name: 'O Ditador',
    originalTitle: 'The Dictator',
    description:
      'Se o filme fosse lançado em 2019 pra frente era cancelado até a morte e o diretor talvez preso.',
    longDescription: `"O filme é engraçadinho, tem uma pitada política sobre as relações com o oriente médio, mas o auge do filme é ele se apaixonar por uma grávida. Nada demais." Misato, Valentim (texto modificado).`,
    rating: '2.4',
    img: 'https://image.tmdb.org/t/p/w500/8wkGlPOAEnSigS1DZmf3vp9chSg.jpg',
    media: 'https://c.tenor.com/BSrg4jfHGS8AAAAM/slice-execute.gif',
    genres: ['comédia'],
    banner: 'https://image.tmdb.org/t/p/w500/jWq20KNbg5txb28tLxJl0yLYuxp.jpg',
    releaseYear: 2012,
    directors: ['Larry Charles'],
    cast: ['Sacha Baron Cohen', 'Anna Faris', 'Ben Kingsley'],
    trailer: 'https://www.youtube.com/watch?v=cYplvwBvGA4',
  },
  {
    id: 19,
    name: 'Intocáveis',
    originalTitle: 'Intouchables',
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
    releaseYear: 2011,
    directors: ['Olivier Nakache', 'Éric Toledano'],
    cast: ['François Cluzet', 'Omar Sy', 'Anne Le Ny'],
    trailer: 'https://www.youtube.com/watch?v=34WIbmXkewU',
  },
  {
    id: 20,
    name: 'Whiplash: Em Busca da Perfeição',
    originalTitle: 'Whiplash',
    description: 'Não precisa gostar de música pra gostar desse filme.',
    longDescription: 'Facilmente um dos filmes já feitos.',
    rating: '4',
    img: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/4c737b04d1a97407837e3955258134cb494181dd20ccfbaf7b7acf8c081d1708._RI_V_TTW_.jpg',
    media: 'https://c.tenor.com/josaiwe4bSoAAAAM/jk-simmons-whiplash.gif',
    genres: ['drama'],
    banner:
      'https://www.cinemundo.com.br/wp-content/uploads/2015/01/Whiplash_010814_1170x457.jpg',
    releaseYear: 2014,
    directors: ['Damien Chazelle'],
    cast: ['Miles Teller', 'J.K. Simmons', 'Melissa Benoist'],
    trailer: 'https://www.youtube.com/watch?v=7d_jQycdQGo',
  },
  {
    id: 21,
    name: 'Sociedade dos Poetas Mortos',
    originalTitle: 'Dead Poets Society',
    description: 'Carpe diem.',
    longDescription: `"nunca entendi esse filme direito é muito elogiado mas meio dane-se." - Magnata, Lucas (texto modificado)`,
    rating: '3',
    img: 'https://br.web.img2.acsta.net/pictures/210/132/21013221_20130617200543616.jpg',
    media:
      'https://5efce21e120dc77e32455754.static-01.com/l/images/436a056ec5312c18e05a693d155b3e781e8d619c.gif',
    genres: ['drama'],
    banner:
      'https://multiversonoticias.com.br/wp-content/uploads/2022/07/Sociedade-dos-Poetas-Mortos.png',
    releaseYear: 1989,
    directors: ['Peter Weir'],
    cast: ['Robin Williams', 'Ethan Hawke', 'Robert Sean Leonard'],
    trailer: 'https://www.youtube.com/watch?v=wrBk780aOis',
  },
  {
    id: 22,
    name: 'Tempos Modernos',
    originalTitle: 'Modern Times',
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
    releaseYear: 1936,
    directors: ['Charlie Chaplin'],
    cast: ['Charlie Chaplin', 'Paulette Goddard'],
    trailer: 'https://www.youtube.com/watch?v=1A6M_oYyWv0',
  },
  {
    id: 23,
    name: 'Drive',
    originalTitle: 'Drive',
    description: 'Arriscou tudo pra tentar ser padrasto.',
    longDescription: 'Morte à feminina.',
    rating: '3.3',
    img: 'https://flxt.tmsimg.com/assets/p8609718_p_v12_ar.jpg',
    media: 'https://c.tenor.com/W_4orF8nm74AAAAC/drive-movie.gif',
    genres: ['drama', 'suspense', 'neo-noir', 'policial'],
    banner: 'https://wallpaperaccess.com/full/4038652.jpg',
    releaseYear: 2011,
    directors: ['Nicolas Winding Refn'],
    cast: ['Ryan Gosling', 'Carey Mulligan', 'Bryan Cranston'],
    trailer: 'https://www.youtube.com/watch?v=KBiOF3y1W0Y',
  },
  {
    id: 24,
    name: 'Os Caras Malvados',
    originalTitle: 'Despicable Me',
    description: 'Filme infanto juvenil que entrega o que promete.',
    longDescription: 'Comparado ao filme Emoji isso é vinho.',
    rating: '2.9',
    img: 'https://br.web.img3.acsta.net/c_310_420/pictures/22/03/10/21/58/3973130.jpg',
    media:
      'https://media3.giphy.com/media/jWgfWny9RG9CHRXO5A/giphy.gif?cid=ecf05e47kcq2f2e9cfnv0wzr9k6re2wj1ovpjpsfvitc88dn&rid=giphy.gif&ct=g',
    genres: ['comédia', 'animação'],
    banner:
      'https://blog-leiturinha-novo.s3.us-east-1.amazonaws.com/production/uploads/2022/03/Caras_Malvados_Asset.png',
    releaseYear: 2010,
    directors: ['Pierre Coffin', 'Chris Renaud'],
    cast: ['Steve Carell', 'Jason Segel', 'Russell Brand'],
    trailer: 'https://www.youtube.com/watch?v=ooJCvA0t-Jk',
  },
  {
    id: 25,
    name: 'Dois Caras Legais',
    originalTitle: 'The Nice Guys',
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
    releaseYear: 2016,
    directors: ['Shane Black'],
    cast: ['Russell Crowe', 'Ryan Gosling', 'Angourie Rice'],
    trailer: 'https://www.youtube.com/watch?v=5-Rs1Y4Mj0Q',
  },
  {
    id: 26,
    name: 'Arremessando Alto',
    originalTitle: 'Hustle',
    description: 'Creed de basquete.',
    longDescription:
      'Não é necessário o conhecimento prévio de jogos de basquete ou algo do tipo para o filme ser bom. Uma história comovente e que consegue prender COMPLETAMENTE durante uma hora e cinquenta e sete minutos. Fora isso o filme possui uma ótima trilha sonora, montagem de áudio, bom uso de ângulos e ótimo film look.',
    rating: '3.9',
    img: 'https://br.web.img3.acsta.net/c_310_420/pictures/22/05/25/20/17/5781885.jpg',
    media: 'https://i.gifer.com/origin/ae/aed5788927bb207496886554ad4c1df7.gif',
    genres: ['drama', 'esportivo'],
    banner:
      'https://cdn.ome.lt/2yjfdlBwGKUvC_IU8z5ppaSITHA=/570x0/smart/uploads/conteudo/fotos/arremessando.png',
    releaseYear: 2022,
    directors: ['Jeremiah Zagar'],
    cast: ['Adam Sandler', 'Queen Latifah', 'Juancho Hernangómez'],
    trailer: 'https://www.youtube.com/watch?v=KPy0PVZLMyM',
  },
  {
    id: 27,
    name: 'Fratura',
    originalTitle: 'Fractured',
    description: 'Ilha do medo mas sem ilha e sem medo.',
    longDescription:
      'Uma odisseia psiquiátrica do nosso protagonista que após um infortúnio precisou lutar contra tudo e todos para saber onde sua filha se encontra.',
    rating: '3.5',
    img: 'https://br.web.img3.acsta.net/pictures/19/09/16/11/03/3523781.jpg',
    media: 'https://c.tenor.com/0Hqh9uYoZaYAAAAd/help-fall.gif',
    genres: ['suspense'],
    banner:
      'https://occ-0-32-41.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUoWeL23jEKvklIJ43lkzfUwwLlsEuI-6Qe82_bNYPSRnD_l2W0--sOP6B2-V0GOUathWW1LHruAuEUSDfn1eCwKALpbsQiekQaOTvALEFJMqpnAtoybIWJ739bI1sEhXcavZw.jpg?r=4be',
    releaseYear: 2019,
    directors: ['Brad Anderson'],
    cast: ['Sam Worthington', 'Lily Rabe', 'Lucy Capri'],
    trailer: 'https://www.youtube.com/watch?v=V5aJyxoE6ik',
  },
  {
    id: 28,
    name: 'Extermínio',
    originalTitle: '28 Days Later...',
    description: 'The Walking Dead com baixo orçamento.',
    longDescription:
      'Filme gravado com 2 câmeras Tekpix, o pagamento foi 2 sprite pra cada um e 1 coxinha. Onde meu caro amigo Tommy Shelby pisa ele faz algúem morrer (necessariamente alguém da equipe dele), além de ser uma máquina de pesadelos. Fora isso o filme conta com cenários super realistas que, com certeza, vai te deixar sem reação.',
    rating: '2.6',
    img: 'https://upload.wikimedia.org/wikipedia/pt/e/e4/28_days_later.jpg',
    media: 'https://i.gifer.com/3Q0K.gif',
    genres: ['ficção científica', 'terror'],
    banner:
      'https://disneyplusbrasil.com.br/wp-content/uploads/2022/11/Exterminio-Os-Dias-Estao-Contados-StarPlus.jpg',
    releaseYear: 2002,
    directors: ['Danny Boyle'],
    cast: ['Cillian Murphy', 'Naomie Harris', 'Christopher Eccleston'],
    trailer: 'https://www.youtube.com/watch?v=c7ynwAgQlDQ',
  },
  {
    id: 29,
    name: 'O Bar',
    originalTitle: 'El Bar',
    description: 'Mendigo herói muito vilão.',
    longDescription:
      'Uma crítica quase ácida sobre como as pessoas se comportam diante da pressão social e o medo. Um rapaz que fica spammando frases bíblicas, outro que tem fetiche em calcinha, e outros fenômenos. Com certeza é um filme que vai te entregar o entretenimento e vai deixar seu cérebro liso como um peito de frango.',
    rating: '2.8',
    img: 'https://image.tmdb.org/t/p/w500/qqy6zdir0lk9nPBSAPP6ap3myO4.jpg',
    media: 'https://thumbs.gfycat.com/DirectVainGuernseycow-max-1mb.gif',
    genres: ['comédia', 'horror'],
    banner: 'https://image.tmdb.org/t/p/w500/6u6KIyDKojx7pGhCn0skRHdmqX3.jpg',
    releaseYear: 2017,
    directors: ['Álex de la Iglesia'],
    cast: ['Blanca Suárez', 'Mario Casas', 'Carmen Machi'],
    trailer: 'https://www.youtube.com/watch?v=xM65fg5n1Lw',
  },
  {
    id: 30,
    name: 'Frida',
    originalTitle: 'Frida',
    description: 'A história de uma das mais conceituadas pintoras do México.',
    longDescription:
      'Um filme que fala sobre sofrimentos, bebidas, traições, artes e representatividade. Fala sobre os costumes da época e nos faz refletir sobre isso, além de ter várias referências filosóficas, dentre elas a psicanálise de Freud.',
    rating: '3.9',
    img: 'https://upload.wikimedia.org/wikipedia/pt/8/87/Frida_%28filme%29.jpg',
    media: 'https://thumbs.gfycat.com/ContentDeadCoqui-size_restricted.gif',
    genres: ['drama', 'romântico', 'histórico', 'cinebiografia'],
    banner:
      'https://feitoporelas.com.br/wp-content/uploads/2019/02/Frida-002.jpg',
    releaseYear: 2002,
    directors: ['Julie Taymor'],
    cast: ['Salma Hayek', 'Alfred Molina', 'Geoffrey Rush'],
    trailer: 'https://www.youtube.com/watch?v=uOUzQYkQcyg',
  },
  {
    id: 31,
    name: 'Depois do Universo',
    originalTitle: 'Depois do Universo',
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
    releaseYear: 2022,
    directors: ['Diego Freitas'],
    cast: ['Giulia Be', 'Henry Zaga', 'João Miguel'],
    trailer: 'https://www.youtube.com/watch?v=8OkqLOe_mZI',
  },
  {
    id: 32,
    name: 'Skinamarink',
    originalTitle: 'Skinamarink',
    description: 'Você não vai entender esse filme.',
    longDescription:
      'O filme é tão incompleto e falho que existem centenas de teorias sobre o que o filme quer tratar, porém a certa é que só vai existir algum impacto com quem sofreu algum problema (seja psicológico ou físico) durante a infância, se você não sofreu isso, ou sofreu mas não se tornou traumático, o filme será extremamente chato e irrelevante.',
    rating: '2',
    img: 'https://www.jornalismo.ufv.br/cinecom/wp-content/uploads/2022/12/Skinamarink-1-683x1024.jpg',
    media: 'https://pbs.twimg.com/media/Fbby4qNXkAEFcNG.jpg',
    genres: ['terror'],
    banner:
      'https://i0.wp.com/newspack-washingtoncitypaper.s3.amazonaws.com/uploads/2023/01/Skinamarink_Still.jpg?fit=2048%2C858&ssl=1',
    releaseYear: 2023,
    directors: ['Kyle Edward Ball'],
    cast: ['Lucas Paul', 'Dali Rose', 'Tetreault', 'Ross Paul'],
    trailer: 'https://www.youtube.com/watch?v=GNLX97_pa-I',
  },
  {
    id: 33,
    name: 'Tudo em Todo o Lugar ao Mesmo Tempo',
    originalTitle: 'Everything Everywhere All at Once',
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
    releaseYear: 2023,
    directors: ['Daniel Scheinert', 'Daniel Kwan'],
    cast: ['Michelle Yeoh', 'Ke Huy Quan', 'Jamie Lee Curtis'],
    trailer: 'https://www.youtube.com/watch?v=kULcXm9V7aY',
  },
  {
    id: 34,
    name: 'A Baleia',
    originalTitle: 'The Whale',
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
    releaseYear: 2023,
    directors: ['Darren Aronofsky'],
    cast: ['Brendan Fraser', 'Sadie Sink', 'Ty Simpkins'],
    trailer: 'https://www.youtube.com/watch?v=vqi1OuxQtJ8',
  },
  {
    id: 35,
    name: 'Gato de botas 2: O Último Pedido',
    originalTitle: 'Puss in Boots: The Last Wish',
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
    releaseYear: 2023,
    directors: ['Joel Crawford'],
    cast: ['Antonio Banderas', 'Salma Hayek', 'Harvey Guillen'],
    trailer: 'https://www.youtube.com/watch?v=Cp-Wn8EB-y8',
  },
  {
    id: 36,
    name: 'Azul Perfeito',
    originalTitle: 'Perfect Blue',
    description:
      'Christopher Nolan tem que aprender muito pra fazer um filme desse.',
    longDescription:
      'Parece brincadeira, mas esse filme te faz de palhaço. A história é sobre a Mima, uma popstar que resolve ser atriz e aí as coisas começam a ficar esquisitas. Tem crítica, tem reviravolta, tem detalhes na trama que te deixam sem palavras. E o mais incrível é que a gente nunca sabe o que é realidade e o que é imaginação.',
    rating: '4.1',
    img: 'https://upload.wikimedia.org/wikipedia/pt/a/a1/Perfect_Blue.jpg',
    media: 'https://media.tenor.com/zmiGNmB_6bMAAAAC/perfect-blue-anime.gif',
    genres: ['mistério', 'suspense', 'drama', 'animação'],
    banner: 'https://i.redd.it/2jzhj6imip061.jpg',
    releaseYear: 1997,
    directors: ['Satoshi Kon'],
    cast: ['Junko Iwao', 'Rica Matsumoto', 'Shinpachi Tsuji'],
    trailer: 'https://www.youtube.com/watch?v=BD8I4v9U4mw',
  },
  {
    id: 37,
    name: 'Super Mario Bros. - O Filme',
    originalTitle: 'The Super Mario Bros. Movie',
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
    releaseYear: 2023,
    directors: ['Aaron Horvath', 'Michael Jelenic'],
    cast: ['Raphael Rossatto', 'Chris Pratt', 'Marcio Dondi'],
    trailer: 'https://www.youtube.com/watch?v=7ZTLlerWlaE',
  },
  {
    id: 38,
    name: 'O Menu',
    originalTitle: 'The Menu',
    description: 'Era só pagar os $9,95.',
    longDescription:
      'Claramente uma carta de repúdio a quem se acha cult e paga comida cara. Ficou óbvio no final que é OBVIAMENTE um comercial da BK.',
    rating: '3.7',
    img: 'https://br.web.img2.acsta.net/pictures/22/08/17/22/25/2724945.jpg',
    media:
      'https://64.media.tumblr.com/36f63bfe55f48f64b21ea7ec16762e8e/0db11b035c5c304c-8e/s540x810/aaec5ea64fb5e1a7c4fa3070da9e4a766dd48560.gif',
    genres: ['suspense'],
    banner: 'https://cinepop.com.br/wp-content/uploads/2022/08/o-menu.webp',
    releaseYear: 2022,
    directors: ['Mark Mylod'],
    cast: ['Ralph Fiennes', 'Anya Taylor-Joy', 'Nicholas Hoult'],
    trailer: 'https://www.youtube.com/watch?v=lfbYsIIFYaw',
  },
  {
    id: 39,
    name: 'Todo Mundo Quase Morto',
    originalTitle: 'Shaun of the Dead',
    description:
      'COVID-19 se o presidente do mundo todo fosse [comentário removido pelo TSE]',
    longDescription: `Um bom filme, por incrível que pareça. Mesmo sendo de 2004 conta com um humor atemporal e sem ofensas que eram moda nessa época. A história, mesmo sendo rasa, é bem trabalhada para um filme de comédia que mistura algumas partes meio macabras. Isso gerou uma mistureba diferenciada e, na nossa opinião, boa.`,
    rating: '3.5',
    img: 'https://br.web.img3.acsta.net/c_310_420/pictures/14/09/06/06/08/169240.jpg',
    media:
      'https://media.tenor.com/wiGkYFnDjbkAAAAC/shaun-of-the-dead-shaun-of-the-dead-gifs.gif',
    genres: ['suspense'],
    banner: 'https://www.cafecomfilme.com.br/media/k2/galleries/4345/06.jpg',
    releaseYear: 2004,
    directors: ['Edgar Wright'],
    cast: ['Simon Pegg', 'Nick Frost', 'Dylan Moran'],
    trailer: 'https://www.youtube.com/watch?v=cqDy3dXLBO8',
  },
  {
    id: 40,
    name: 'Homem-Aranha: Através do Aranhaverso',
    originalTitle: 'Spider-Man: Across The Spider-Verse',
    description: 'Amar a animação desse filme é um evento canônico.',
    longDescription: `Que animação, meus amigos! A masterização do filme não é uma das melhores (e fez falta) e não há muito o que falar sobre história... é o Homem Aranha. A forma que eles desenharam tudo é magnífica ao ponto de que se você pausar em qualquer momento do filme, facilmente vai virar um papel de parede e qualquer um acharia que é um filme totalmente 2D.`,
    rating: '4.6',
    img: 'https://br.web.img3.acsta.net/pictures/23/05/17/22/43/4869322.jpg',
    media:
      'https://media.tenor.com/e1LRlRsE2U4AAAAC/miles-morales-gwen-stacy.gif',
    genres: ['animação', 'ação', 'aventura'],
    banner:
      'https://weliveentertainment.com/wp-content/uploads/2023/05/across-spider-verse-banner-4.jpg',
    releaseYear: 2023,
    directors: ['Joaquim Dos Santos', 'Kemp Powers', 'Justin Thompson'],
    cast: ['Shameik Moore', 'Hailee Steinfeld', 'Oscar Isaac'],
    trailer: 'https://www.youtube.com/watch?v=O8UGVY-wZsg',
  },
  {
    id: 41,
    name: 'Beau Tem Medo',
    originalTitle: 'Beau Is Afraid',
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
    releaseYear: 2023,
    directors: ['Ari Aster'],
    cast: ['Joaquin Phoenix', 'Nathan Lane', 'Amy Ryan'],
    trailer: 'https://www.youtube.com/watch?v=XrCg9G_OHAA',
  },
  {
    id: 42,
    name: 'Tetsuo - O Homem de Ferro',
    originalTitle: 'Tetsuo',
    description:
      'Se atropelar alguém, não tente esconder o corpo e faça sexo na frente dele. Ele pode ficar com raiva e querer se vingar.',
    longDescription: `O diretor responsável por isso e o roteirista (existe um mundo em que sejam a mesma pessoa) estavam completamente alterados pelo abuso de drogas sintéticas. Criaram uma história que tinha até potencial, mas, chegando ali perto da metade pro final do filme, esqueceram do que estavam querendo falar. Como que vai levar a sério um filme que do nada adiciona um CARRO ALEGÓRICO sem contexto algum? A sensação chega a ser até frustrante. Talvez o filme não seja tão ruim, mas a nota média diz tudo.`,
    rating: '2.7',
    img: 'https://i.pinimg.com/originals/de/95/db/de95dbfc08698415b12c426e5d9c0165.jpg',
    media: 'https://media.tenor.com/rilRhk5ZehYAAAAC/tetsuo-the.gif',
    genres: ['live-action', 'cyberpunk', 'horror', 'body horror'],
    banner: 'https://pbs.twimg.com/media/EhaziLOUMAIv0m-.jpg',
    releaseYear: 1989,
    directors: ['Shinya Tsukamoto'],
    cast: ['Tomorowo Taguchi', 'Kei Fujiwara', 'Nobu Kanaoka'],
    trailer: 'https://www.youtube.com/watch?v=ShJvheZHXdI',
  },
  {
    id: 43,
    name: 'Ghost in The Shell - O Fantasma do Futuro',
    originalTitle: 'Kôkaku kidôtai',
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
    releaseYear: 1995,
    directors: ['Mamoru Oshii'],
    cast: ['Atsuko Tanaka', 'Akio Ôtsuka', 'Tamio Ôki'],
    trailer: 'https://www.youtube.com/watch?v=8RF09G8Ymqg',
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
    releaseYear: 2017,
    directors: ['Filippo Capuzzi Lapietra'],
    cast: ['Gusta Stockler', 'Julio Cocielo', 'Teddy'],
    trailer: 'https://www.youtube.com/watch?v=8RF09G8Ymqg',
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
    releaseYear: 2023,
    directors: ['Greta Gerwig'],
    cast: ['Margot Robbie', 'Ryan Gosling', 'America Ferrera'],
    trailer: 'https://www.youtube.com/watch?v=2GTkvVeak9w',
  },
  {
    id: 46,
    name: 'O Flash',
    originalTitle: 'The Flash',
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
    releaseYear: 2023,
    directors: ['Andy Muschietti'],
    cast: ['Ezra Miller', 'Sasha Calle', 'Michael Shannon'],
    trailer: 'https://www.youtube.com/watch?v=zrtVOZ4YPFw',
  },
  {
    id: 47,
    name: 'Relatos Selvagens',
    originalTitle: 'Relatos Salvajes',
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
    releaseYear: 2014,
    directors: ['Damián Szifron'],
    cast: ['Ricardo Darín', 'Oscar Martinez', 'Leonardo Sbaraglia'],
    trailer: 'https://www.youtube.com/watch?v=dZWhQMx1SO4',
  },
  {
    id: 48,
    name: 'La La Land - Cantando Estações',
    originalTitle: 'La la Land',
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
    releaseYear: 2017,
    directors: ['Damien Chazelle'],
    cast: ['Ryan Gosling', 'Emma Stone', 'John Legend'],
    trailer: 'https://www.youtube.com/watch?v=UD-Cb2yeAPA',
  },
  {
    id: 49,
    name: 'Corrente Do Mal',
    originalTitle: 'It Follows',
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
    releaseYear: 2015,
    directors: ['David Robert Mitchell'],
    cast: ['Maika Monroe', 'Keir Gilchrist', 'Daniel Zovatto'],
    trailer: 'https://www.youtube.com/watch?v=jrohW56xLhU',
  },
];
export default MOVIES;
