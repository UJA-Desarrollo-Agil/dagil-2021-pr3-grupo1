// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "be1c95b9-cbc7-48c6-8e6a-89837aa9113e";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

/* A variable that changes the fade out speed of the option text on
 * a mobile. */
undum.game.mobileHide = 2000;

/* A variable that changes the options fade out speed. */
undum.game.fadeSpeed = 1500;

/* A variable that changes the slide up speed after clicking on an
 * option. */
undum.game.slideUpSpeed = 500;

//Variable nombre que almacena el nombre del jugador
var nombre;
nombre = prompt(
  "Antes de comenzar, por favor, ingrese un nombre para su jugador/a: "
);

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {
  start: new undum.SimpleSituation(
    "<h1>CAPÍTULO 1: LA HISTORIA COMIENZA...</h1>\
    <img src='./media/img/15.png' class='float_ce' width='500' height='400'>\
        <p>Despierto de golpe. La luz del sol me deslumbra.<br> Froto mis ojos hasta que consigo abrirlos por completo.</p>\
        <p>Miro hacia arriba y a mi alrededor. El cielo está despejado. No sé dónde estoy. Intento hacer memoria para recordar</p>\
        <p>como he llegado aquí... yo estaba en mi habitación, en el escritorio, con mi ordenador, terminando la práctica de Desarrollo Ágil que se entregaba hoy las 23.55h... ¿¡QUÉ HORA ES!? ¡Tengo que entregar la práctica! Miro mi muñeca y descubro que no tengo reloj. De repente, escucho un ruido, alguien se acerca.</p>\
        <p><b>MOMO:</b> No pongas esa cara. Me llamo Momo. No sé quién eres ni qué buscas. La verdad es que me da igual.</p>\
        <p>Continúo en shock.</p>\
        <p><a href='sin_mono'>No quiero hablar con nadie</a> ni que nadie me moleste. O quizás sea\
        <a href='con_mono'>una buena idea tener alguien al lado, aunque sea un mono.</a>.</p><br>\
        <video controls autoplay width='100%'>\
          <source src='videos/v1.mp4' type='video/mp4' />\
        </video>"
  ),
  con_mono: new undum.SimpleSituation(
    "<img src='./media/img/0.png' class='float_right' width='250' height='250'>\
    <p>Momo luce sonriente sabiendo se que puede quedar conmigo. De su riñonera saca un reloj de arena.</p>\
      <p>   <b>MOMO:</b> ¿Es el destino la mano que elige si nuestro reloj de arena funcionará hacia arriba o hacia abajo, o esa mano somos nosotros mismos?</p>\
      <p>No puede ser. Creo que ya entiendo lo que Momo me quiere decir</p>\
      <p>   <b>" +
      nombre +
      ":</b> ¿No te estarás refiriendo a que el tiempo que tiene ese reloj es el que tengo para poder\
      encontrar mi ordenador?</p>\
      <p>El mono asiente con la cabeza. ¡Qué estrés! Siento angustia. Esto me pasa por dejarlo todo para el último momento. No me veo con futuro en la carrera de ingeniería, quizás me equivoqué al elegirla...</p>\
      <p>Momo siente mi decaida. Quiere darme ánimos. ¿Sigo escuchando<a href='detalle'> más detalladamente al mono</a>?</p>\
      <p>Hace una seña para <a href='seguirlo'>lo siga</a>.</p>",
    {
      heading: "Momo me acompañará",
      enter: function (character, system, from) {
        system.setQuality(
          "progreso_historia",
          character.qualities.progreso_historia + 10
        );
      },
    }
  ),

  detalle: new undum.SimpleSituation(
    "<img src='./media/img/3.png' class='float_right' width='250' height='250'>\
    <p><b>MOMO:</b> Tú eliges, puedes pasar todo tu tiempo muerto o puedes coger tu tiempo y hacer algo valioso con él.\
      Algo que llene ese tiempo de energía. Hay que vivir con la fuerza suficiente como para que la vida ceda a tu paso, no tú ante ella.\
      La vida no es nada si no te atreves a vivirla. Hay que hacer algo con la vida que tenemos. Que se entere de que estamos aquí, dispuestos a dejarla\
      boquiabierta con nuestra forma de pasar por ella.</p>\
      <p>¡No puedo creer las palabras de este mono! Es más sabio de lo que parece, me ha hecho pensar... Y me siento con más energía. <a href='seguirlo'> CONTINUAR HISTORIA...</a></p>",
    {
      heading: "El mono me habla...",
      enter: function (character, system, from) {
        system.setQuality(
          "progreso_historia",
          character.qualities.progreso_historia + 3
        );
      },
    }
  ),

  seguirlo: new undum.SimpleSituation(
    "<img src='./media/img/1.png' class='float_right' width='250' height='250'>\
    <p>Sigo a Momo por un camino estrecho y lleno de ramas y hojas. Me hago algunos rasguños pasando entre ellas, pero mi mente se encuentra en otro sitio</p>\
      <p>Si Alicia se hubiera cansado de correr tras el Conejo Blanco, no habría caído por la madriguera. Ni descubierto el País\
      de las Maravillas. Ni descubrierto quién era ella. Seguiré corriendo. Me caeré. E intentaré no tener miedo a aquello que me tenga que enfrentar</p>\
      <p>Llegamos al final del camino. Junto a un gnomo vemos un nido de abejas. Están furiosas y vienen hacia nosotros.</p>\
      <p><a href='momo_muere'>Momo quiere enfrentarse a ellas</a>, pero ambos sabemos que puede morir.<a href='correr'> Creo que lo mejor es salir corriendo</a></p>",
    {
      heading: "Extraño camino",
      enter: function (character, system, from) {
        system.setQuality(
          "progreso_historia",
          character.qualities.progreso_historia + 6
        );
      },
    }
  ),

  momo_muere: new undum.SimpleSituation(
    "<img src='./media/img/1.png' class='float_right' width='250' height='250'>\
    <p>Momo se enfrenta a las abejas y en una dura batalla consigue alejarlas, pero las picaduras son demasiado fuertes para él y hacen que muera.</p>\
    <p>No me lo puedo creer. Ha dado su vida por mí. Me acerco a él y le acaricio la cara. Me percato de que en su riñonera hay algo. Meto la mano y encuentro un frasco que pone VIDA.</p>\
    <p>No sé lo que es, pero me lo guardo porque puede ser útil. Además, encuentro una barrita que pone CÓMEME.<a href='no_come'> No tiene muy buena pinta</a>, pero quizás</p>\
    <p><a href='come'>pueda darme fuerzas para continuar la aventura</a></p>",
    {
      heading: "Lucha de Momo contra abejas",
      enter: function (character, system, from) {
        system.setQuality(
          "progreso_historia",
          character.qualities.progreso_historia + 5
        );
        system.setQuality("frascoVida", character.qualities.frascoVida + 1);
      },
    }
  ),

  correr: new undum.SimpleSituation(
    "<img src='./media/img/1.png' class='float_right' width='250' height='250'>\
    <p>Ojeo un camino. Voy corriendo hacia por él. Le he perdido la pista a Momo. Sigo corriendo. Mientras corro miro hacia atrás por si me siguen las abejas</p>\
    <p>Al girarme, no me doy cuenta de que el camino acaba. Hay un acantilado. Sin verlo, doy un paso en él y caigo. Tengo una fatal caída que acaba con mi vida y esta aventura.</p>",
    {
      heading: "Salir corriendo",
      enter: function (character, system, from) {
        system.setQuality(
          "progreso_historia",
          character.qualities.progreso_historia + 1
        );
      },
    }
  ),

  no_come: new undum.SimpleSituation(
    "<img src='./media/img/1.png' class='float_right' width='250' height='250'>\
    <p>La barrita no tiene buena pinta. No quiero enfermar, solo quiero poder salir de aquí. Voy a acercarme al <a href='situacion_intermedia1'> gnomo</a>.</p>",
    {
      heading: "Me acerco al gnomo",
      enter: function (character, system, from) {
        system.setQuality(
          "progreso_historia",
          character.qualities.progreso_historia + 1
        );
      },
    }
  ),

  come: new undum.SimpleSituation(
    "<img src='./media/img/1.png' class='float_right' width='250' height='250'>\
    <p>Tengo mucha hambre y, aunque la barrita no tenga buen aspecto me la comeré. Abro la barrita y la introduzco en mi boca.</p>\
    <p>Es comida para mono. No es compatible para humanos. Acabo muriendo por envenenamiento.</p>",
    {
      heading: "Me como la barrita",
      enter: function (character, system, from) {
        system.setQuality(
          "progreso_historia",
          character.qualities.progreso_historia + 1
        );
      },
    }
  ),

  sin_mono: new undum.SimpleSituation(
    "<img src='./media/img/20.png' class='float_right' width='250' height='250'>\
    <p>Momo frunce el ceño y empieza a sacar plátanos de la riñonera que lleva.</p>\
    <p>Empieza a lanzármelos a la cabeza. Consigue darme con un par de ellos. Está muy cabreado.</p>\
    <p>Corro por un camino escapando de él. El camino es estrecho y lleno de ramas y hojas. Me hago algunos rasguños pasando entre ellas.</p>\
    <p>   " +
      nombre +
      " : Mi vida es un continuo intentar hacer crecer flores en el desierto...</p>\
      <p>De repente, encuentro a un <a href='situacion_intermedia1'>gnomo</a> enfrente.</p>",
    {
      heading: "No quiero continuar con Momo",
      enter: function (character, system, from) {
        system.setQuality(
          "progreso_historia",
          character.qualities.progreso_historia + 20
        );
      },
    }
  ),

 /*Comienzo capitulo 2*/
 situacion_intermedia1: new undum.SimpleSituation(
  "<h1>CHAPTER 2 - MEETING RAERPIN</h1>\
  <img src='./media/img/15_2.png' class='float_right' width='250' height='250'>\
      <p> The gnome seems friendly enough despite his ridiculous appearance so I decide to approach him to see if he has any idea where we are. </p>\
      <p> Hello, my name is " +
    nombre +
    " and I don't know whether to say good afternoon or good morning because I don't know where we are and to top it off, I have lost my watch!!!.</p>\
      <p>Hello " +
    nombre +
    ", I am Raerpin and we are in the Magical World of Arcadia, I have been waiting for you. Would you like me to guide you in your adventure?\
      <a href='acompanar'>Accompany Raerpin</a> o <a href='no_acompanar'>not to accompany Raerpin</a>.</p>"
),

/*Elijo Acompañar al gnomo*/
acompanar: new undum.SimpleSituation(
  "<img src='./media/img/6.png' class='float_right' width='250' height='250'>\
  <p>I decide to undertake my adventure with Raerpin for three reasons, the first is that I still have no idea where I am.,\
  The second one, what do you mean he was waiting for me? and the third one, which makes me decide I'M TALKING TO A GNOMO!!!!</p>\
    <p><b>Raerpin:</b> Okay, I know you're wondering how I knew you were coming, aren't you?\
    <p><b>" +
    nombre +
    ":</b> <a href='elijo_si'>-That's right-</a>   |   <a href='elijo_no'>-I prefer not to know-</a></p>",
  {
    heading: "Accompany Raerpin",
    enter: function (character, system, from) {
      system.setQuality(
        "progreso_historia",
        character.qualities.progreso_historia + 15
      );
    },
  }
),

/*DIÁLOGO CON RAERPIN*/
/*Así es*/
elijo_si: new undum.SimpleSituation(
  " <p><b>Raerpin:</b> I saw a computer fall a while ago and it was enough to see you and smell me... to know that you are an engineering student.\
    <p><b>" +
    nombre +
    ":</b> <a href='elijo_reirme'>-To tell you the truth, I've had a complicated day...-</a>   |   <a href='elijo_enfadarme'>-Engineers take showers too!-</a></p>"
),
/*Prefiero no saberlo*/
elijo_no: new undum.SimpleSituation(
  " <p><b>Raerpin:</b> I'm going to tell you anyway to make fun of you, I saw a computer fall a while ago and it was enough to see you and smell me... to know that you are an engineering student.\
    <p><b>" +
    nombre +
    ":</b> <a href='elijo_reirme'>-To tell you the truth, I've had a complicated day...-</a>   |   <a href='elijo_enfadarme'>-Engineers take showers too!-</a></p>"
),

/*He tenido un dia complicado*/
elijo_reirme: new undum.SimpleSituation(
  " <p><b>Raerpin:</b> Thank goodness I have this nose clip! </p>\
    <p><b>" +
    nombre +
    ":</b> <a href='elijo_enfadarme2'>-If you mess with the engineers again, you'll have to deal with me and my partners!-</a>   |   <a href='elijo_reirme2'>-Are all you gnomes out of the comedy club?-</a></p>"
),
/*¡Los ingernieros tambien nos duchamos!*/
elijo_enfadarme: new undum.SimpleSituation(
  " <p><b>Raerpin:</b> I don't doubt it but you forgot today. Luckily I have this nose clip!</p>\
    <p><b>" +
    nombre +
    ":</b> <a href='elijo_enfadarme2'>-If you mess with the engineers again, you'll have to deal with me and my partners!-</a>   |   <a href='elijo_reirme2'>-Are all you gnomes out of the comedy club?-</a></p>"
),

/*¿Todos los gnomos habeis salido del club de la comedia?*/
elijo_reirme2: new undum.SimpleSituation(
  " <p><b>Raerpin:</b> Unfortunately I am the last gnome left alive, after having a hard time for a long time due to the great loneliness I felt, I decided to live my remaining days with humor.</p>\
    <p><b>" +
    nombre +
    ":</b> <a href='elijo_sabermas'>-What happened to the others?-</a>   |   <a href='elijo_vacilar'>-I'm sure you deserved it-</a></p>"
),
/*¡Si te vuelves a meter con los ingenieros te las verás conmigo y mis compañeros!*/
elijo_enfadarme2: new undum.SimpleSituation(
  " <p><b>Raerpin:</b> I envy you so much, I wish I could take refuge in my friends but I can't anymore. Unfortunately I am the last gnome left alive. </p>\
    <p><b>" +
    nombre +
    ":</b> <a href='elijo_sabermas'>-What happened to the others?-</a>   |   <a href='elijo_vacilar'>-I'm sure you deserved it-</a></p>"
),

/*¿Qué paso con los demás?*/
elijo_sabermas: new undum.SimpleSituation(
  " <p><b>Raerpin:</b> Just kidding! All my friends are healthy as hell, they work out at the gym every day. I like innocent people so I won't mind putting up with your stink a little longer.</p>\
    <p><b>" +
    nombre +
    ":</b> <a href='elijo_1'>-You had scared me, I feared for my life for a moment.-</a>   |   <a href='elijo_2'>-I don't think I like you at all....-</a></p>"
),
/*Seguro que os lo merecíais*/
elijo_vacilar: new undum.SimpleSituation(
  " <p><b>Raerpin:</b> We don't deserve it, we are wonderful and I just stayed with you as I wanted to. All my friends are healthy as hell, they work out at the gym every day. But I like innocent people so I won't mind putting up with your stink a little longer. </p>\
    <p><b>" +
    nombre +
    ":</b> <a href='elijo_2'>-For a moment I believed it-</a>   |   <a href='elijo_2'>-I don't think I like you at all...-</a></p>"
),

/*Me habias asustado, he temido por mi vida por un momento.*/
elijo_1: new undum.SimpleSituation(
  " <p><b>Raerpin:</b> And you do well to fear. I will get serious, in Arcadia you will find various baddies and I will leave in your hands the choice of the path you will take. If you make it to the end intact, you will get your computer back and you will be able to finish the Agile Development practice on time. ARE YOU READY?</p>\
    <p><b>" +
    nombre +
    ":</b> <a href='elijo_seguir1'>-I was born ready-</a>   |   <a href='elijo_cabezon1'>-I'm so scared, I want to go home-</a></p>"
),
/*Creo que no me caes del todo bien... // Por un momento había picado*/
elijo_2: new undum.SimpleSituation(
  " <p><b>Raerpin:</b> I will still warn you that in Arcadia you will encounter various baddies and I will leave it up to you to choose the path you will face. If you reach the end intact, you will recover your computer and you will be able to finish the Agile Development practice on time. ARE YOU READY?</p>\
    <p><b>" +
    nombre +
    ":</b> <a href='elijo_seguir1'>-I was born ready-</a>   |   <a href='cabezon1'>-I'm so scared, I want to go home-</a></p>"
),

/*Nací preparado*/
elijo_seguir1: new undum.SimpleSituation(
  " <p><b>Raerpin:</b> Okay, are you able to guess this riddle?</p>\
  <div align='center'><img src='./media/img/acertijo.jpg' align='middle' width='250' height='250'></div>\
    <p><b>" +
    nombre +
    ":</b> <a href='elijo_40'>-40-</a>   |   <a href='elijo_96'>-96-</a></p>"
),
/*Tengo mucho miedo, quiero irme a casa- GAME OVER*/

/*40*/
elijo_40: new undum.SimpleSituation(
  "<p>Both answers were correct, you have chosen the easiest one to arrive at. The answers to the sums depend, except in the first case, on the result of the previous sum.</p>\
      <p><a href='fin_capitulo'>Continue with the story</a> o <a href='elijo_96'>See the difficult solution</a></p>",
  {
    heading: "Easy Solution",
    enter: function (character, system, from) {
      system.setQuality(
        "progreso_historia",
        character.qualities.progreso_historia + 5
      );
    },
  }
),
/*96*/
elijo_96: new undum.SimpleSituation(
  "<p>Both answers were correct, you have chosen the one that those who can think outside the box and see multiplications where others only see additions. Multiplying the digits that the sum poses and adding the first of them to the result leads to the solution.</p>\
      <p><a href='fin_capitulo'>Continue with the story</a> o <a href='elijo_40'>See the easy solution</a></p>",
  {
    heading: "Difficult Solution",
    enter: function (character, system, from) {
      system.setQuality(
        "progreso_historia",
        character.qualities.progreso_historia + 5
      );
    },
  }
),

/*Fin del capítulo 2*/
fin_capitulo: new undum.SimpleSituation(
  " <img src='./media/img/23.png' class='float_right' width='250' height='250'>\
  <p>For having found the solution, Raerpin confesses to me that I will find the computer in the last place on my way and that I will only get it if I defeat the villain of Arcadia along with all his henchmen that I will find <a href= 'capitulo_tercero'>until I get to him.</a></p>",
  {
    heading: "CContinued.....",
    enter: function (character, system, from) {
      system.setQuality(
        "progreso_historia",
        character.qualities.progreso_historia + 5
      );
    },
  }
),

/*Elijo No acompañar al gnomo*/
no_acompanar: new undum.SimpleSituation(
  "<p><b>Raerpin:</b> You think you're so smart, don't you? We all need help, look at the amount of help your classmates have given you in each of your internships, so YOU WERE ACCEPTING THEIR HELP!</p>\
  <p>And what will happen if this time I decide to do it alone? I ask him</p>\
  <p><b>Raerpin:</b> You won't last a minute longer...</p>\
  <p><a href='acompanar'>Accompany Raerpin</a> o <a href='cabezon'>not to accompany Raerpin</a>.</p>",
  {
    heading: "I don't trust him, I'd better go",
  }
),

/*Vuelvo a elegir no acompañar al gnomo*/
cabezon1: new undum.SimpleSituation(
  "<p><b>Raerpin:</b> Okay, I make you my new pet, YOU WILL BE A NICE DOG FOR THE REST OF YOUR DAYS!</p>\
  <p>   <b>" +
    nombre +
    ":</b> ¡¡Guau!! ¡¡guau!!</p>\
  <p><b>You have lost, GAME OVER</b></p>",
  {
    heading: "I want to do everything just because I am the best",
  }
),

  /*Comienzo capitulo 3*/
  capitulo_tercero: new undum.SimpleSituation(
    "<img src='./media/img/14.jpg' class='float_right' width='500' height='250'>\
    <p> After knowing the location of my computer and asking about the existing routes, I ask myself which one to follow. </p> \
        <p> By the longest route I have a <a href='campamento'>villain camp</a>, according to the data provided by the gnome there are five villains and they are armed with metal swords and wooden shields. </ p> \
        <p> By the shortest route I have to <a href='montana'>pass the mountain</a>, ruled by a monster about which no information is known, I only know that he is known as \"The king of the mountain \". </p> <br> \
        <video controls autoplay width='100%'>\
          <source src='videos/v2.mp4' type='video/mp4' />\
        </video>",
    {
      heading: "Chapter 3 - MY GOAL",
    }
  ),

  /*Elección campamento de villanos*/
  campamento: new undum.SimpleSituation(
    "<img src='./media/img/25.jpg' class='float_right' width='500' height='300'>\
    <p> I decide to take the longest route, <br> but about the one I have more information about, getting there will take me five days and four nights, so I decide to leave now. </p> \
        <p> After several days of walking incessantly, he made out the villain camp in the distance. To my amazement it is only made up of wooden huts with thatched roofs and a river that runs through the center. </p> \
        <p> <a href='detailed_camping'> Look at the campsite in detail </a>. </p> \
        <p> I remain hidden and begin to prepare the plan to attack, being able to do it in two different ways, either <a href='campamento_force'> I enter by force </a> attacking and trying to catch them off guard or I focus on <a href = 'stealth_camping'> do it stealthily </a>. </p> ",
    {
      heading: "Villain Camp",
      enter: function (character, system, from) {
        system.setQuality(
          "progreso_historia",
          character.qualities.progreso_historia + 5
        );
      },
    }
  ),
  campamento2: new undum.SimpleSituation(
    "<img src='./media/img/25.jpg' class='float_right' width='500' height='300'>\
    <p> I decide to take the longest route, <br> but about the one I have more information about, getting there will take me five days and four nights, so I decide to leave now. </p> \
        <p> After several days of walking incessantly, he made out the villain camp in the distance. To my amazement it is only made up of wooden huts with thatched roofs and a river that runs through the center. </p> \
        <p> I remain hidden and begin to prepare the plan to attack, being able to do it in two different ways, either <a href='campamento_force'> I enter by force </a> attacking and trying to catch them off guard or I focus on <a href = 'stealth_camping'> do it stealthily </a>. </p> ",
    {
      heading: "Villain Camp",
    }
  ),
  /*Mirar detalladamente el campamento*/
  detalladamente_campamento: new undum.SimpleSituation(
    "<p> I see there is a shooter with a stone bow and arrows. </p> \
    <p> <a href='camp2'> Continue with the story </a> </p>",
    {
      heading: "After looking closely ...",
      enter: function (character, system, from) {
        system.setQuality(
          "progreso_historia",
          character.qualities.progreso_historia + 3
        );
      },
    }
  ),
  /*Elección campamento de villanos a la fuerza*/
  campamento_fuerza: new undum.SimpleSituation(
    "<img src='./media/img/16.png' class='float_right' width='250' height='250'>\
    <p> I decide to make the attack by force, <br> with my sword in hand I go running towards the camp entering from the back and killing two villains. At this moment the two on the ground plus the archer on a platform focus on me. Dodging arrows and fighting both at the same time I manage to emerge victorious but with serious physical injuries, so I will have to recover before I can continue. </p> \
    <p> I lie down on one of the camp beds to <a href='campamento_force2'> rest and heal my wounds </a>. </p> ",
    {
      heading: "Attack on the camp by force",
      enter: function (character, system, from) {
        system.setQuality(
          "progreso_historia",
          character.qualities.progreso_historia + 5
        );
      },
    }
  ),
  campamento_fuerza2: new undum.SimpleSituation("", {
    enter: function (character, system, from) {
      if (character.qualities.frascoVida > 0) {
        system.write(
          "<img src='./media/img/19.png' class='float_right' width='250' height='300'>\
          <p> As I lay down on a bed in a cabin, I remember the vial of life that Momo gave me. </p> \
          <p> I decide to take it in one gulp and, to my amazement, all my wounds have healed in a matter of seconds. \
          Thanks to this I will be able to <a href='eleccion_villalanos'> continue my journey </a> without wasting time. </p> "
        );

        system.setQuality("frascoVida", character.qualities.frascoVida - 1);
      } else {
        system.write(
          "<img src='./media/img/12.png' class='float_right' width='150' height='150'>\
          <p> After a week, <br> my wounds have healed and I proceed to prepare to get to the boss's castle, </p> \
          who has stolen my computer. </p> \
          <p> Before leaving I am going to take with me some of the \
          <a href='eleccion_villains'> weapons that the villains had </a> </p> "
        );
      }
    },

    heading: "Recovery",
  }),

  /*Elección campamento de villanos en sigilo*/
  campamento_sigilo: new undum.SimpleSituation(
    "<img src='./media/img/2.png' class='float_right' width='250' height='250'>\
    <p> I decide to make a stealth attack, <br> with my sword in hand I enter the camp at night swimming by the river. </p> \
    <p> My highest priority is to take down the archer, as he is the one who presents the greatest threat. I rush on him from behind without the rest of them noticing. I take his bow and finish with two soldiers who were on guard, low and kill the soldiers who were resting in their cabins. </p> \
    <p> I decide to spend the night in the camp and before leaving for the castle <a href='eleccion_villalanos'> I collect some weapons belonging to the villains. </a> </p> ",
    {
      heading: "Attack the camp stealthily",
      enter: function (character, system, from) {
        system.setQuality(
          "progreso_historia",
          character.qualities.progreso_historia + 5
        );
      },
    }
  ),
  /*Elección pasar por la montaña*/
  montana: new undum.SimpleSituation(
    "<img src='./media/img/5.png' class='float_right' width='250' height='250'>\
    <p> I decide to go the shortest route, <br> despite having no information about the monster. </p> \
    <p> After a day of walking I arrive at the mountain plains, I notice something disturbing and that is that the vegetation and the climate are very dry. </p> \
    <p> I step into it and go straight through the day. When night comes I decide to continue without stopping until I notice how something watches me in the distance, I decide to run and something is rushing over me, I manage to escape and see it head-on, it is a huge wolf. </p> \
    <p> I have little time to think since he will attack me again, I don't know if I should <a href= 'run_out'> run away </a> or <a href='front me'> face him </a> . </p> ",
    {
      heading: "King of the mountain",
      enter: function (character, system, from) {
        system.setQuality(
          "progreso_historia",
          character.qualities.progreso_historia + 6
        );
      },
    }
  ),
  /*Salir corriendo del lobo*/
  salir_corriendo: new undum.SimpleSituation(
    "<img src='./media/img/24.jpg' class='float_right' width='500' height='300'>\
    <p> After thinking about it quickly, I decide to run through the undergrowth of the forest, the wolf chases me incessantly so I have no choice but to turn around and <a href='front me'> face him </ p> ",
    {
      heading: "Run out",
    }
  ),
  /*Enfrentarme a el*/
  enfrentarme: new undum.SimpleSituation("", {
    enter: function (character, system, from) {
      if (character.qualities.frascoVida > 0) {
        system.write(
          "<img src='./media/img/4.png' class='float_right' width='250' height='250'>\
          <p> I grab my sword, <br> and run towards him, he bites my arm as I pierce his neck with my weapon. \
          The result has been disastrous, my arm has been destroyed, but at least I have managed to survive against such a threat. </p> \
          <p> After finishing the battle I lie on the floor of the destroyed forest and I remember the vial of life that Momo gave me, \
          I decide to take it in one gulp and, to my amazement, what is happening! in a matter of seconds my wounds have healed and my arm \
          it has grown again. After several minutes assimilating what happened, I decide to talk to the gnome about the wolf. \
          The gnome tells me that it is a magical animal and that its bones are used to make weapons stronger than iron. </p> \
          <p> Since I don't have all the time in the world, I must decide what <a href='eleccion_montana'> weapons to make </a>. </p> "
        );
        system.setQuality("frascoVida", character.qualities.frascoVida - 1);
        system.setQuality(
          "progreso_historia",
          character.qualities.progreso_historia + 7
        );
      } else {
        system.write(
          "<img src='./media/img/4.png' class='float_right' width='250' height='250'>\
          <p> I grab my sword, <br> and run towards him, he bites my arm as I pierce his neck with my weapon. \
          The result has been disastrous, my arm has been destroyed, but at least I have managed to survive against such a threat. </p> \
          <p> After several days of recovery, the gnome tells me that it is a magical animal and that its bones are used to make weapons stronger than iron. </p> \
          <p> Since I don't have all the time in the world, I must decide what <a href='eleccion_montana'> weapons to make </a>. </p> "
        );
        system.setQuality(
          "progreso_historia",
          character.qualities.progreso_historia + 7
        );
      }
    },

    heading: "Confrontation with the wolf",
  }),
  /*llegada a castillo*/
  llegada_castillo: new undum.SimpleSituation(
    "<img src='./media/img/28.png' class='float_right' width='250' height='250'>\
    <p> After restocking my inventory with new weapons, <br> I focus my attention on reaching the castle. </p> \
    <p> After a day of walking without rest, I can see in the distance the immense castle of the person responsible for stealing my computer. </p> \
    <p> <a href='entry'> I'm heading towards the front door </a> </p> ",
    {
      heading: "Arrival at the castle",
      enter: function (character, system, from) {
        system.setQuality(
          "progreso_historia",
          character.qualities.progreso_historia + 12
        );
      },
    }
  ),
  // Menu elecciones.
  // cuchilloHueso
  opcion1: new undum.Situation({
    enter: function (character, system, from) {
      system.write($("#s_situations2").html());
      system.animateQuality(
        "cuchilloHueso",
        character.qualities.cuchilloHueso + 1
      );
      if (character.qualities.cuchilloHueso <= 1) {
        system.setQuality("equipamiento", character.qualities.equipamiento + 1);
      }
      system.write($("#recojo_cuchillohuesos").html());
    },
    tags: ["eleccion_montana"],
    optionText: "Bone knife",
    displayOrder: 1,
  }),
  // Cuchillo Metal
  opcion2: new undum.Situation({
    enter: function (character, system, from) {
      system.write($("#s_situations1").html());

      system.animateQuality(
        "cuchilloMetal",
        character.qualities.cuchilloMetal + 1
      );
      if (character.qualities.cuchilloMetal <= 1) {
        system.setQuality("equipamiento", character.qualities.equipamiento + 1);
      }
      system.write($("#recojo_cuchillometal").html());
    },
    tags: ["eleccion_villanos"],
    optionText: "Metal knife",
    displayOrder: 1,
  }),
  // espada de huesos
  opcion3: new undum.Situation({
    enter: function (character, system, from) {
      system.write($("#s_situations2").html());
      system.animateQuality("espadaHueso", character.qualities.espadaHueso + 1);
      if (character.qualities.espadaHueso <= 1) {
        system.setQuality("equipamiento", character.qualities.equipamiento + 1);
      }
      system.write($("#recojo_espadahuesos").html());
    },
    tags: ["eleccion_montana"],
    optionText: "Sword of bones",
    displayOrder: 1,
  }),
  // Espada de metal
  opcion4: new undum.Situation({
    enter: function (character, system, from) {
      system.write($("#s_situations1").html());

      system.animateQuality("espadaMetal", character.qualities.espadaMetal + 1);
      if (character.qualities.espadaMetal <= 1) {
        system.setQuality("equipamiento", character.qualities.equipamiento + 1);
      }
      system.write($("#recojo_espadametal").html());
    },
    tags: ["eleccion_villanos"],
    optionText: "Metal Sword",
    displayOrder: 1,
  }),
  // arco de huesos
  opcion5: new undum.Situation({
    enter: function (character, system, from) {
      system.write($("#s_situations2").html());
      system.animateQuality("arcoHueso", character.qualities.arcoHueso + 1);
      if (character.qualities.arcoHueso <= 1) {
        system.setQuality("equipamiento", character.qualities.equipamiento + 1);
      }
      system.write($("#recojo_arcohuesos").html());
    },
    tags: ["eleccion_montana"],
    optionText: "Bow of Bones",
    displayOrder: 1,
  }),
  // arco de metal
  opcion6: new undum.Situation({
    enter: function (character, system, from) {
      system.write($("#s_situations1").html());

      system.animateQuality("arcoMetal", character.qualities.arcoMetal + 1);
      if (character.qualities.arcoMetal <= 1) {
        system.setQuality("equipamiento", character.qualities.equipamiento + 1);
      }
      system.write($("#recojo_arcometal").html());
    },
    tags: ["eleccion_villanos"],
    optionText: "Metal bow",
    displayOrder: 1,
  }),
  // lanza de huesos
  opcion7: new undum.Situation({
    enter: function (character, system, from) {
      system.write($("#s_situations2").html());
      system.animateQuality("lanzaHueso", character.qualities.lanzaHueso + 1);
      if (character.qualities.lanzaHueso <= 1) {
        system.setQuality("equipamiento", character.qualities.equipamiento + 1);
      }
      system.write($("#recojo_lanzahuesos").html());
    },
    tags: ["eleccion_montana"],
    optionText: "Spear of bones",
    displayOrder: 1,
  }),
  // lanza de metal
  opcion8: new undum.Situation({
    enter: function (character, system, from) {
      system.write($("#s_situations1").html());

      system.animateQuality("lanzaMetal", character.qualities.lanzaMetal + 1);
      if (character.qualities.lanzaMetal <= 1) {
        system.setQuality("equipamiento", character.qualities.equipamiento + 1);
      }
      system.write($("#recojo_lanzametal").html());
    },
    tags: ["eleccion_villanos"],
    optionText: "Metal spear",
    displayOrder: 1,
  }),
  // Machete de huesos
  opcion9: new undum.Situation({
    enter: function (character, system, from) {
      system.write($("#s_situations2").html());
      system.animateQuality(
        "macheteHueso",
        character.qualities.macheteHueso + 1
      );
      if (character.qualities.macheteHueso <= 1) {
        system.setQuality("equipamiento", character.qualities.equipamiento + 1);
      }
      system.write($("#recojo_machetehuesos").html());
    },
    tags: ["eleccion_montana"],
    optionText: "Bone machete",
    displayOrder: 1,
  }),
  // Machete de metal
  opcion10: new undum.Situation({
    enter: function (character, system, from) {
      system.write($("#s_situations1").html());

      system.animateQuality(
        "macheteMetal",
        character.qualities.macheteMetal + 1
      );
      if (character.qualities.macheteMetal <= 1) {
        system.setQuality("equipamiento", character.qualities.equipamiento + 1);
      }
      system.write($("#recojo_machetemetal").html());
    },
    tags: ["eleccion_villanos"],
    optionText: "Metal Machete",
    displayOrder: 1,
  }),
  // Cuchara de huesos
  opcion11: new undum.Situation({
    enter: function (character, system, from) {
      system.write($("#s_situations2").html());
      system.animateQuality(
        "cucharaHueso",
        character.qualities.cucharaHueso + 1
      );
      if (character.qualities.cucharaHueso <= 1) {
        system.setQuality("equipamiento", character.qualities.equipamiento + 1);
      }
      system.write($("#recojo_cucharahuesos").html());
    },
    tags: ["eleccion_montana"],
    optionText: "Bone spoon",
    displayOrder: 1,
  }),
  // Cuchara de metal
  opcion12: new undum.Situation({
    enter: function (character, system, from) {
      system.write($("#s_situations1").html());

      system.animateQuality(
        "cucharaMetal",
        character.qualities.cucharaMetal + 1
      );
      if (character.qualities.cucharaMetal <= 1) {
        system.setQuality("equipamiento", character.qualities.equipamiento + 1);
      }
      system.write($("#recojo_cucharametal").html());
    },
    tags: ["eleccion_villanos"],
    optionText: "Metal spoon",
    displayOrder: 1,
  }),
  // Tenedor de huesos
  opcion13: new undum.Situation({
    enter: function (character, system, from) {
      system.write($("#s_situations2").html());
      system.animateQuality(
        "tenedorHueso",
        character.qualities.tenedorHueso + 1
      );
      if (character.qualities.tenedorHueso <= 1) {
        system.setQuality("equipamiento", character.qualities.equipamiento + 1);
      }
      system.write($("#recojo_tenedorhuesos").html());
    },
    tags: ["eleccion_montana"],
    optionText: "Bone fork",
    displayOrder: 1,
  }),
  // Tenedor de metal
  opcion14: new undum.Situation({
    enter: function (character, system, from) {
      system.write($("#s_situations1").html());

      system.animateQuality(
        "tenedorMetal",
        character.qualities.tenedorMetal + 1
      );
      if (character.qualities.tenedorMetal <= 1) {
        system.setQuality("equipamiento", character.qualities.equipamiento + 1);
      }
      system.write($("#recojo_tenedormetal").html());
    },
    tags: ["eleccion_villanos"],
    optionText: "Metal fork",
    displayOrder: 1,
  }),

  /*Comienzo capítulo 4*/
  entrada: new undum.SimpleSituation(
    "<img src='./media/img/29.png' width='300' height='300'>\
	<p>Antes de llegar a la puerta principal, veo un bulto a lo lejos un tanto sospechoso\
	por lo que me acerco para ver de qué se trata.</p>\
	<p>Para mi sorpresa, era un <a href='./traje-tru' class='once'>traje de guardia</a> que se había perdido.\
	Mejor lo guardo, nunca se sabe si lo podré necesitar.</p>\
	Una vez llego a la puerta principal, empiezo a pensar en la\
	forma de colarme en el castillo. Teniendo en cuenta que hay un\
	ejército de guardias rodeándolo igual es mejor buscar una opción\
	alternativa a la puerta principal.</p>\
	<p>No es momento de pensar, tengo que decidir por dónde ir.\
	Puedo <a href='entrar_sigilo'>ir en sigilo</a> e infiltrarme o puedo\
	<a href='ataca_guardias'>atacar a los guardias</a>.\
	</p>",
    {
      actions: {
        "traje-tru": function (character, system, action) {
          system.setQuality("traje", true);
        },
      },
      heading: "Entrada al castillo",
      enter: function (character, system, from) {
        system.setQuality(
          "progreso_historia",
          character.qualities.progreso_historia + 3
        );
      },
    }
  ),

  ataca_guardias: new undum.SimpleSituation("", {
    enter: function (character, system, from) {
      if (character.qualities.equipamiento > 2) {
        {
          system.setQuality(
            "progreso_historia",
            character.qualities.progreso_historia + 4
          );
        }
        system.doLink("ganas");
      } else {
        {
          system.setQuality(
            "progreso_historia",
            character.qualities.progreso_historia + 5
          );
        }
        system.write(
          "<img src='./media/img/8.png' width='400' height='400'>\
					<p>Creo que atacar a los guardias va a ser la mejor opción.\
					Cuantos menos enemigos vivos, mejor.</p>\
					<p>Voy corriendo hacia ellos y empiezo a enfrentarme con todos los que se interponen\
					en mi camino.</p>\
					<p>Cuando pensaba que habia derrotado a todos, vienen refuerzos y parecen demasiados\
					para mi solo.</p>\
					<p>Se abalanzan contra mi y me inflan a palos. Para enfrentarme a un ejército entero\
					tengo que ir mucho más armado.\
					</p>"
        );
      }
    },

    heading: "Ataco a los guardias",
  }),
  ganas: new undum.SimpleSituation(
    "<img src='./media/img/27.jpg' width='500' height='400'>\
	<p>Creo que atacar a los guardias va a ser la mejor opción.Cuantos menos enemigos vivos, mejor.</p>\
	<p>Voy corriendo hacia ellos y empiezo a enfrentarme con todos los que se interponen en mi camino.</p>\
	<p>Con mis armas voy acabando con cada uno de mis enemigos. Cuando pensaba que había derrotado a todos,\
	vienen refuerzos pero me da igual. Acabaré con todos.</p>\
	<p>Una vez he acabado con el ejército de mequetrefes, entro al castillo y busco al jefe con la\
	información que me dieron los guardias.</p>\
	<p>Efectivamente, la habitación del jefe está donde dijeron. Ahora <a href='despacho'>tengo que entrar</a>\
	a recuperar mi ordenador.\
	</p>",
    {
      enter: function (character, system, from) {
        system.setQuality(
          "progreso_historia",
          character.qualities.progreso_historia + 6
        );
      },
    }
  ),
  entrar_sigilo: new undum.SimpleSituation(
    "<img src='./media/img/9.jpg' width='500' height='400'>\
	<p>Decido entrar en sigilo ya que no me apetece enfrentarme a un ejército entero.\
	Para encontrar mi vía de entrada voy a dar una vuelta por las afueras del castillo.</p>\
	<p>Tras haber dado un paseo exploratorio, creo que las mejores opciones son\
	intentar colarme por donde menos seguridad hay, <a href='parte_atras'>la parte de atrás</a>. O quizá también puedo\
	<a href='disfraz_guardia'>disfrazarme como un guardia</a> y colarme por la puerta principal.\
	</p>",
    {
      heading: "Entro en sigilo",
      enter: function (character, system, from) {
        system.setQuality(
          "progreso_historia",
          character.qualities.progreso_historia + 2
        );
      },
    }
  ),
  parte_atras: new undum.SimpleSituation(
    "<img src='./media/img/30.png' width='400' height='300'>\
	<p>Al final la mejor decisión era infiltrarse por la parte de atrás del castillo.\
	Durante el paseo vi una ventana abierta que dejé atascada por si las moscas.\
	</p>\
	<p>Ahora que estoy dentro del castillo sólo me queda encontrar al ladrón que me robó\
	el ordenador. Para ello primero tengo que encontrar la habitación en la que está.\
	Puedo <a href='preguntar'>preguntar a los trabajadores</a> o\
	igual <a href='investigar'>puedo investigar por mi cuenta</a>.\
	</p>",
    {
      heading: "Entro por la parte de atrás",
      enter: function (character, system, from) {
        system.setQuality(
          "progreso_historia",
          character.qualities.progreso_historia + 3
        );
      },
    }
  ),
  preguntar: new undum.SimpleSituation(
    "<img src='./media/img/32.jpg' width='500' height='400'>\
	<p>Me acerco a un trabajador que estaba merodeando por los pasillos. Llevaba un uniforme\
	un tanto extraño, iba vestido de una forma elegante pero a la vez se podía adivinar que\
	trabajaba ahí.</p>\
	<p>Le pregunto sobre su jefe y su ubicación. Ahora ya conozco el nombre de mi enemigo,\
	el temible Victorcillo. También me dijo que su despacho se encontraba en la primera planta.\
	Me resulta raro que haya un despacho dentro de un castillo pero no tengo más opción que ir\
	a comprobarlo.</p>\
	<p>Efectivamente, ahí estaba. Solo me separa la puerta del despacho. No quedan más opciones.\
	Es el momento de recuperar mi ordenador. <a href='despacho'>Entro al despacho de Victorcillo</a>.\
	</p>",
    {
      heading: "Pregunto a los trabajadores",
      enter: function (character, system, from) {
        system.setQuality(
          "progreso_historia",
          character.qualities.progreso_historia + 5
        );
      },
    }
  ),
  investigar: new undum.SimpleSituation(
    "<p>Para encontrar la habitación que busco tendré que buscar por todo el castillo.\
	Espero que este proceso no sea muy largo.</p>\
	<img src='./media/img/11.jpg' width='400' height='300'>\
	<p>Tras dar un breve paseo por esta zona del castillo encuentro una habitación un tanto llamativa.\
	En la puerta pone: <em>Victorcillo</em>. No entiendo mucho de este extraño\
	lenguaje pero tiene pinta de que es la persona a la que busco.\
	</p>\
	<p><a href='despacho'>Entro al despacho</a>.\
	</p>",
    {
      heading: "Investigo por mi cuenta",
      enter: function (character, system, from) {
        system.setQuality(
          "progreso_historia",
          character.qualities.progreso_historia + 5
        );
      },
    }
  ),
  despacho: new undum.SimpleSituation(
    "<img src='./media/img/31.png' width='500' height='400'>\
	<p>Abro la puerta de la habitación y observo desde fuera sin decir nada para no revelar\
	mi identidad.</p>\
	<p>Veo que Victorcillo está usando mi ordenador mientras dice unos vocablos un tanto extraños.\
	Escucho no se qué de Scrum, que si Product Owner, que si Product Backlog. No lo tengo claro,\
	pero debe de estar haciendo un ritual satánico o debe estar borracho.</p>\
	<p>Entro a la sala y al verme, Victorcillo se levanta y viene hacia mí. Algo dentro de mí dice que\
	no le ataque, al menos todavía. Cuando está cerca, me da un abrazo mientras llora.</p>\
	<p>Aunque haya sido el ladrón de mi ordenador, me da pena y me apiado de él.\
	En su versión de la historia cuenta que tuvo que robarme el ordenador porque estaba en\
	pleno Sprint y debía acabar el trabajo. Acto seguido se arrodilló ante mí pidiéndome perdón\
	por lo que hizo.</p>\
	<p>Es una decisión difícil pero en mis manos está, <a href='perdon'>lo perdono</a> o\
	<a href='muerte'>acabo con él</a>.\
	</p>",
    {
      heading: "Entro en el despacho",
      enter: function (character, system, from) {
        system.setQuality(
          "progreso_historia",
          character.qualities.progreso_historia + 7
        );
      },
    }
  ),
  perdon: new undum.SimpleSituation(
    "<img src='./media/img/26.jpg' width='500' height='400'>\
	<p>Tras saber esto no puedo hacerle nada malo. Aunque lo que ha hecho está mal, puedo entenderlo.\
	Dicho esto, Victorcillo me entrega mi ordenador de vuelta. Ahora sí que podré acabar mis prácticas.</p>\
	<p>Arcadia es un lugar extraño pero al final, todo ha salido bien.\
	</p>",
    {
      heading: "Perdono a Victorcillo",
      enter: function (character, system, from) {
        system.setQuality(
          "progreso_historia",
          character.qualities.progreso_historia + 5
        );
      },
    }
  ),
  muerte: new undum.SimpleSituation(
    "<p>Después de lo que ha hecho no sé si espera que lo perdonase pero aprovechando que está\
	de rodillas, le atizo un puñetazo que desciende del cielo cual gráfica Burndown.</p>\
	<p>El ataque fue un éxito. Victorcillo está echando la siesta a mis pies. Aprovecho para recuperar\
	mi ordenador y escapar de ahí. Ahora sí que soy libre para terminar mis prácticas.</p>\
	<img src='./media/img/22.jpg' width='400' height='300'>\
	<p>Arcadia es un lugar extraño pero al final, todo ha salido bien.\
	</p>",
    {
      heading: "Acabo con Victorcillo",
      enter: function (character, system, from) {
        system.setQuality(
          "progreso_historia",
          character.qualities.progreso_historia + 5
        );
      },
    }
  ),
  disfraz_guardia: new undum.SimpleSituation("", {
    enter: function (character, system, from) {
      if (character.qualities.traje) {
        {
          system.setQuality(
            "progreso_historia",
            character.qualities.progreso_historia + 3
          );
        }
        system.doLink("disfraz_guardia2");
      } else {
        {
          system.setQuality(
            "progreso_historia",
            character.qualities.progreso_historia + 8
          );
        }
        system.write(
          "<p>Me acerco al grupo de guardias que estaban en la puerta principal.\
					Desde lejos ya me están gritando que no me acerque\
					pero les digo que no soy un peligro, solo un turista perdido.</p>\
					<p>Cuando estoy cerca de ellos puedo ver lo malhumorados y agresivos que están.\
					Antes de si quiera darme tiempo a responder, me finiquitan rápido cual daily Scrum.\
					Sin duda estos guardias de Arcadia son de lo más peligroso.</p>\
					<img src='./media/img/8.png' width='500' height='400'>\
					<p>En un hipotético caso de que pueda resucitar y volver a esta situación,\
					igual es mejor tener un traje de guardia para acercarme a ellos.\
					</p>"
        );
      }
    },

    heading: "Me disfrazo como un guardia",
  }),
  disfraz_guardia2: new undum.SimpleSituation(
    "<p>Me acerco al grupo de guardias que estaban en la puerta principal. Al ir vestido como ellos\
	no sospecharán de mi.</p>\
	<img src='./media/img/33.jpg' width='500' height='350'>\
	<p>Cuando estoy cerca de ellos les digo que venía de un lugar lejano ya que estaba haciendo un\
	encargo para el jefe. Por suerte me dijeron que un tal Victorcillo me estaba esperando en su despacho.</p>\
	<p>Menos mal que ha colado y he podido entrar al castillo. Además ahora sé que me tengo que\
	enfrentar a Victorcillo y que está en su habitación, así que <a href='despacho'>allí me dirijo</a>.\
	</p>",
    {
      enter: function (character, system, from) {
        system.setQuality(
          "progreso_historia",
          character.qualities.progreso_historia + 5
        );
      },
    }
  ),
};
// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";
// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
  cuchilloHueso: new undum.OnOffQuality("Cuchillo de huesos", {
    priority: "0002",
    group: "objetos",
    onDisplay: "&#10003;",
  }),
  espadaHueso: new undum.OnOffQuality("Espada de huesos", {
    priority: "0002",
    group: "objetos",
    onDisplay: "&#10003;",
  }),
  arcoHueso: new undum.OnOffQuality("Arco de huesos", {
    priority: "0002",
    group: "objetos",
    onDisplay: "&#10003;",
  }),
  lanzaHueso: new undum.OnOffQuality("Lanza de hueso", {
    priority: "0002",
    group: "objetos",
    onDisplay: "&#10003;",
  }),
  macheteHueso: new undum.OnOffQuality("Machete de hueso", {
    priority: "0002",
    group: "objetos",
    onDisplay: "&#10003;",
  }),
  cucharaHueso: new undum.OnOffQuality("Cuchara de hueso", {
    priority: "0002",
    group: "objetos",
    onDisplay: "&#10003;",
  }),
  tenedorHueso: new undum.OnOffQuality("Tenedor de hueso", {
    priority: "0002",
    group: "objetos",
    onDisplay: "&#10003;",
  }),
  cuchilloMetal: new undum.OnOffQuality("Cuchillo de metal", {
    priority: "0002",
    group: "objetos",
    onDisplay: "&#10003;",
  }),
  espadaMetal: new undum.OnOffQuality("Espada de metal", {
    priority: "0002",
    group: "objetos",
    onDisplay: "&#10003;",
  }),
  arcoMetal: new undum.OnOffQuality("Arco de metal", {
    priority: "0002",
    group: "objetos",
    onDisplay: "&#10003;",
  }),
  lanzaMetal: new undum.OnOffQuality("Lanza de metal", {
    priority: "0002",
    group: "objetos",
    onDisplay: "&#10003;",
  }),
  macheteMetal: new undum.OnOffQuality("Machete de metal", {
    priority: "0002",
    group: "objetos",
    onDisplay: "&#10003;",
  }),
  tenedorMetal: new undum.OnOffQuality("Tenedor de metal", {
    priority: "0002",
    group: "objetos",
    onDisplay: "&#10003;",
  }),
  cucharaMetal: new undum.OnOffQuality("Cuchara de metal", {
    priority: "0002",
    group: "objetos",
    onDisplay: "&#10003;",
  }),
  frascoVida: new undum.OnOffQuality("Frasco de vida", {
    priority: "0002",
    group: "objetos",
    onDisplay: "&#10003;",
  }),
  traje: new undum.OnOffQuality("Traje de guardia", {
    priority: "0002",
    group: "objetos",
    onDisplay: "&#10003;",
  }),
  progreso_historia: new undum.IntegerQuality("Progreso %:", {
    priority: "0001",
    group: "stats",
  }),
  equipamiento: new undum.IntegerQuality("Equipamiento", {
    priority: "0001",
    group: "stats",
  }),
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
  stats: new undum.QualityGroup(null, { priority: "0001" }),

  objetos: new undum.QualityGroup(null, { priority: "0001" }),

  progress: new undum.QualityGroup("Progress", { priority: "0002" }),
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function (character, system) {
  character.qualities.cuchilloHueso = 0;
  character.qualities.espadaHueso = 0;
  character.qualities.arcoHueso = 0;
  character.qualities.lanzaHueso = 0;
  character.qualities.macheteHueso = 0;
  character.qualities.tenedorHueso = 0;
  character.qualities.cucharaHueso = 0;
  character.qualities.cuchilloMetal = 0;
  character.qualities.espadaMetal = 0;
  character.qualities.arcoMetal = 0;
  character.qualities.lanzaMetal = 0;
  character.qualities.macheteMetal = 0;
  character.qualities.tenedorMetal = 0;
  character.qualities.cucharaMetal = 0;
  character.qualities.progreso_historia = 0;
  character.qualities.equipamiento = 0;
  character.qualities.frascoVida = 0;
  system.setQuality("traje", false);

  system.setCharacterText("<p>Listado de objetos que lleva encima:</p>");
};
