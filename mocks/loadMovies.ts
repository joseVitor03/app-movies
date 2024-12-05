const mockLoadMovies = [
  {
    backdrop_path: "/3V4kLQg0kSqPLctI5ziYWabAZYF.jpg",
    id: 912649,
    original_language: "en",
    overview:
      "Eddie e Venom estão fugindo. Perseguidos pelos dois mundos, a dupla é forçada a tomar uma decisão devastadora que vai fechar as cortinas da última rodada de Venom e Eddie.",
    popularity: 3073.235,
    poster_path: "/fTGJWXuFDcRSIVPgQLbxziGquOC.jpg",
    release_date: "2024-10-22",
    title: "Venom: A Última Rodada",
    vote_average: "6.495",
  },
  {
    backdrop_path: "/iR79ciqhtaZ9BE7YFA1HpCHQgX4.jpg",
    genre_ids: [27, 9648],
    id: 1100782,
    original_language: "en",
    overview:
      "A sequência vai girar em torno de Quinn Parsons (vivida por Naomi Scott, de Aladdin), uma cantora miserável em turnê que está tentando se recuperar do seu vício em drogas. Ela se tornará alvo da entidade do primeiro filme após seu traficante lhe passar a maldição.",
    popularity: 2261.273,
    poster_path: "/ypHiYvSJmHIyRDRiosZuE595uir.jpg",
    release_date: "2024-10-16",
    title: "Sorria 2",
    vote_average: "6.8",
  },
  {
    backdrop_path: "/euYIwmwkmz95mnXvufEmbL6ovhZ.jpg",
    genre_ids: [28, 12],
    id: 558449,
    original_language: "en",
    overview:
      "Anos depois de testemunhar a trágica morte do reverenciado herói Maximus nas mãos de seu tio malvado, Lucius se vê forçado a lutar no Coliseu depois que sua terra natal é conquistada por dois imperadores tirânicos, que agora governam Roma. Com o coração ardendo de raiva e o destino do Império pendurado por um fio, Lucius deve enfrentar perigos e inimigos, redescobrindo em seu passado a força e a honra necessárias para trazer a glória de Roma de volta ao seu povo. Prepare-se para uma jornada épica de coragem e vingança na sangrenta arena do Coliseu.",
    popularity: 1755.715,
    poster_path: "/342bly9MqveL65TnEFzx8TTUxcL.jpg",
    release_date: "2024-11-13",
    title: "Gladiador 2",
    vote_average: "6.8",
  },
  {
    backdrop_path: "/18TSJF1WLA4CkymvVUcKDBwUJ9F.jpg",
    genre_ids: [27, 53],
    id: 1034541,
    original_language: "en",
    overview:
      "O palhaço assassino Art está pronto para espalhar o caos sobre os moradores inocentes do Condado de Miles durante uma pacífica véspera de Natal.",
    popularity: 1511.13,
    poster_path: "/3HeKb5H89HjzWTkVkAqomu9mek.jpg",
    release_date: "2024-10-09",
    title: "Terrifier 3",
    vote_average: "6.9",
  },
  {
    backdrop_path: "/v9acaWVVFdZT5yAU7J2QjwfhXyD.jpg",
    genre_ids: [16, 878, 10751],
    id: 1184918,
    original_language: "en",
    overview:
      "Um robô – unidade ROZZUM 7134, abreviadamente “Roz” – naufraga em uma ilha desabitada e deve aprender a se adaptar ao ambiente hostil, gradualmente construindo relacionamentos com os animais da ilha e se tornando o pai adotivo de um filhote de ganso órfão.",
    popularity: 2014.165,
    poster_path: "/gAHNIZKG8fmK7njOTpMmLKJXiag.jpg",
    release_date: "2024-09-12",
    title: "Robô Selvagem",
    vote_average: "8.4",
  },
  {
    backdrop_path: "/kwXycPsLA6SV3KUOagn343TtMOf.jpg",
    genre_ids: [28, 878, 53],
    id: 791042,
    original_language: "en",
    overview:
      "Depois de testemunhar o assassinato de sua namorada, um homem arrisca tudo - inclusive a própria realidade - para descobrir a verdade.",
    popularity: 1292.174,
    poster_path: "/yq39ChrCDlqrurYuaC8WM0vC1cx.jpg",
    release_date: "2024-11-01",
    title: "Levels",
    vote_average: "5.935",
  },
  {
    backdrop_path: "/w22GVYotTIVC1dUd58mRhwPqiS.jpg",
    genre_ids: [18, 14, 10749],
    id: 402431,
    original_language: "en",
    overview:
      "O longa conta a história de Elphaba (Cynthia Erivo), uma jovem incompreendida por causa de sua pele verde incomum, que ainda não descobriu seu verdadeiro poder, e de Glinda (Ariana Grande), uma jovem popular e ambiciosa que só quer saber de privilégios e ainda não conhece a sua verdadeira alma. As duas se conhecem na Universidade de Shiz, na Terra de OZ, e se tornam grandes amigas, mas suas diferenças fazem com que a vida as separe, levando-as a cumprirem seus destinos como a Bruxa Boa e a Bruxa Má do Oeste.",
    popularity: 1477.864,
    poster_path: "/qcaKkLwIXCAxJtpetVYHniCvLZj.jpg",
    release_date: "2024-11-20",
    title: "Wicked",
    vote_average: "7.8",
  },
  {
    adult: false,
    backdrop_path: "/7h6TqPB3ESmjuVbxCxAeB1c9OB1.jpg",
    genre_ids: [18, 27, 878],
    id: 933260,
    original_language: "en",
    overview:
      "Já sonhou com uma versão melhor de si mesmo? Continuará sendo você, só que melhor em todos os sentidos. Então, você deveria experimentar este novo produto: A Substância. MUDOU A MINHA VIDA.",
    popularity: 1102.71,
    poster_path: "/6L3PfQEydRzONYrhtpWtchRhOuV.jpg",
    release_date: "2024-09-07",
    title: "A Substância",
    vote_average: "7.282",
  },
  {
    adult: false,
    backdrop_path: "/tElnmtQ6yz1PjN1kePNl8yMSb59.jpg",
    genre_ids: [16, 12, 10751, 35],
    id: 1241982,
    original_language: "en",
    overview:
      "Depois de receber um chamado inesperado de seus ancestrais navegadores, Moana vai viajar para mares distantes da Oceania, em águas perdidas em uma aventura perigosa.",
    popularity: 1324.077,
    poster_path: "/3E9oViQjwbbrHJogG7NtfcKWRXw.jpg",
    release_date: "2024-11-27",
    title: "Moana 2",
    vote_average: "7.8",
  },
];

export default mockLoadMovies;