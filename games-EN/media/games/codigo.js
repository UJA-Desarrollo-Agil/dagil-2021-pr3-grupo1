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
    "<h1>CAPITULO 2 - CONOCIENDO A RAERPIN</h1>\
    <img src='./media/img/15_2.png' class='float_right' width='250' height='250'>\
        <p> El gnomo parece bastante amigable a pesar de su ridículo aspecto así que decido acercarme a él para saber si tiene idea de donde estamos. </p>\
        <p> Hola, me llamo " +
      nombre +
      " y no se si decirle Buenas tardes o buenos días porque no se donde estamos y para colmo, ¡¡he perdido mi reloj!!.</p>\
        <p>Hola " +
      nombre +
      ", yo soy Raerpin y estamos en el Mágico Mundo de Arcadia, he estado esperándote. ¿Deseas que te guíe en tu aventura?\
        <a href='acompanar'>Acompañar a Raerpin</a> o <a href='no_acompanar'>no acompañar a Raerpin</a>.</p>"
  ),

  /*Elijo Acompañar al gnomo*/
  acompanar: new undum.SimpleSituation(
    "<img src='./media/img/6.png' class='float_right' width='250' height='250'><p>Decido emprender mi aventura junto a Raerpin por tres razones, la primera es que sigo sin tener idea de donde estoy,\
      la segunda, ¿cómo que me estaba esperando? y la tercera, que hace decantarme ¡¡¡ESTOY HABLANDO CON UN GNOMO!!!</p>\
      <p><b>Raerpin:</b> De acuerdo, se que te estás preguntando cómo sabía que vendrías, ¿No es así?\
      <p><b>" +
      nombre +
      ":</b> <a href='elijo_si'>-Así es-</a>   |   <a href='elijo_no'>-Prefiero no saberlo-</a></p>",
    {
      heading: "Acompañar a Raerpin",
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
    " <p><b>Raerpin:</b> He visto caer un ordenador hace un rato y me ha bastado con verte y olerme...para saber que eres estudiante de una ingeniería\
      <p><b>" +
      nombre +
      ":</b> <a href='elijo_reirme'>-Si te soy sincero, he tenido un dia complicado...-</a>   |   <a href='elijo_enfadarme'>-¡Los ingenieros también nos duchamos!-</a></p>"
  ),
  /*Prefiero no saberlo*/
  elijo_no: new undum.SimpleSituation(
    " <p><b>Raerpin:</b> Igualmente te lo voy a contar para reirme de tí, he visto caer un ordenador hace un rato y me ha bastado con verte y olerme...para saber que eres estudiante de una ingeniería\
      <p><b>" +
      nombre +
      ":</b> <a href='elijo_reirme'>-He tenido un dia complicado...-</a>   |   <a href='elijo_enfadarme'>-¡Los ingenieros también nos duchamos!-</a></p>"
  ),
  /*He tenido un dia complicado*/
  elijo_reirme: new undum.SimpleSituation(
    " <p><b>Raerpin:</b> ¡Menos mal que tengo esta pinza para la nariz!. Pero ahora me pondré serio. En Arcadia encontrarás diversos malvados y dejaré en tus manos la elección del camino que afontarás. Si llegas intacto al final, recuperarás tu ordenador y podrás acabar la práctica de Desarrollo Ágil a tiempo. ¿ESTÁS PREPARADO?</p>\
      <p><b>" +
      nombre +
      ":</b> <a href='elijo_seguir'>-Nací preparado-</a>   |   <a href='elijo_asustarme'>-Tengo mucho miedo, quiero irme a casa-</a></p>"
  ),
  /*¡Los ingernieros tambien nos duchamos!*/
  elijo_enfadarme: new undum.SimpleSituation(
    " <p><b>Raerpin:</b> No lo pongo en duda pero hoy se te ha olvidado. Por suerte ¡tengo esta pinza para la nariz! Pero ahora me pondré serio. En Arcadia encontrarás diversos malvados y dejaré en tus manos la elección del camino que afontarás. Si llegas intacto al final, recuperarás tu ordenador y podrás acabar la práctica de Desarrollo Ágil a tiempo. ¿ESTÁS PREPARADO?</p>\
      <p><b>" +
      nombre +
      ":</b> <a href='elijo_seguir'>-Nací preparado-</a>   |   <a href='cabezon'>-Tengo mucho miedo, quiero irme a casa-</a></p>"
  ),

  /*Nací preparado*/
  elijo_seguir: new undum.SimpleSituation(
    " <p><b>Raerpin:</b> De acuerdo, ¿Eres capaz de acertar esta adivinanza?</p>\
    <div align='center'><img src='./media/img/acertijo.jpg' align='middle' width='250' height='250'></div>\
      <p><b>" +
      nombre +
      ":</b> <a href='elijo_40'>-40-</a>   |   <a href='elijo_96'>-96-</a></p>"
  ),
  /*Tengo mucho miedo, quiero irme a casa- GAME OVER*/

  /*40*/
  elijo_40: new undum.SimpleSituation(
    "<p>Ambas respuestas eran correctas, has elegido la más fácil a la que llegar. Las respuestas a las sumas dependen, menos en el primer caso, del resultado de la suma anterior.</p>\
        <p><a href='fin_capitulo'>Continuar con la historia</a> o <a href='elijo_96'>Ver la solución difícil</a></p>",
    {
      heading: "Solución Fácil",
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
    "<p>Ambas respuestas eran correctas, has elegido a la que llegan quienes consiguen pensar fuera de la caja y ven multiplicaciones donde otros solo ven sumas. Multiplicando los dígitos que plantea la suma y sumando al resultado el primero de ellos se llega a la solución.</p>\
        <p><a href='fin_capitulo'>Continuar con la historia</a> o <a href='elijo_40'>Ver la solución fácil</a></p>",
    {
      heading: "Solución Difícil",
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
    <p>Por haber dado con la solución, Raerpin me confiesa que el ordenador lo encontraré en el último lugar de mi camino y que solo lo conseguiré si derroto al villano de Arcadia junto a todos sus secuaces que iré encontrando <a href= 'capitulo_tercero'>hasta llegar a él.</a></p>",
    {
      heading: "Continuamos.....",
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
    "<p><b>Raerpin:</b> ¿Te crees muy listo verdad? Todos necesitamos ayuda, mira la cantidad de ayuda que te han proporcionado tus compañero en cada una de tus prácticas, entonces ¡SÍ ACEPTABAS SU AYUDA!</p>\
    <p>¿Y qué pasará si esta vez decido hacerlo solo? le pregunto</p>\
    <p><b>Raerpin:</b> Que no durarás ni un minuto más...</p>\
    <p><a href='acompanar'>Acompañar a Raerpin</a> o <a href='cabezon'>no acompañar a Raerpin</a>.</p>",
    {
      heading: "No me inspira confianza, mejor me voy",
    }
  ),

  /*Vuelvo a elegir no acompañar al gnomo*/
  cabezon: new undum.SimpleSituation(
    "<p><b>Raerpin:</b> Está bien, te convierto en mi nueva mascota, !SERÁS UN BONITO PERRO PARA EL RESTO DE TUS DÍAS!</p>\
    <p>   <b>" +
      nombre +
      ":</b> ¡¡Guau!! ¡¡guau!!</p>\
    <p><b>Has perdido, GAME OVER</b></p>",
    {
      heading: "Quiero hacerlo todo solo porque soy el mejor",
    }
  ),

  /*Comienzo capitulo 3*/
  capitulo_tercero: new undum.SimpleSituation(
    "<img src='./media/img/14.jpg' class='float_right' width='500' height='250'>\
    <p>Tras conocer la ubicación <br> de mi ordenador y preguntar por las rutas existentes me planteo cuál seguir.</p>\
        <p>Por la ruta más larga tengo un <a href='campamento'>campamento de villanos</a>, según los datos proporcionados por el gnomo habitan cinco villanos y van armados con espadas de metal y escudos de madera.</p>\
        <p>Por la ruta más corta tengo que <a href='montana'>pasar la montaña</a>, gobernada por un monstruo del cual no se conoce información, solo sé que es conocido como \"El rey de la montaña\".</p><br>\
        <video controls autoplay width='100%'>\
          <source src='videos/v2.mp4' type='video/mp4' />\
        </video>",
    {
      heading: "Capítulo 3 - MI OBJETIVO",
    }
  ),

  /*Elección campamento de villanos*/
  campamento: new undum.SimpleSituation(
    "<img src='./media/img/25.jpg' class='float_right' width='500' height='300'>\
    <p>Decido ir por la ruta más larga, <br> pero de la que más información tengo, llegar hasta allí me llevará cinco días y cuatro noches, por lo que decido partir ya.</p>\
        <p>Tras varias días caminando sin cesar, diviso a lo lejos el campamento de villanos. Para mi asombro solo está compuesto por cabañas de madera con el techo de paja y de un río que cruza por el centro.</p>\
        <p><a href='detalladamente_campamento'>Mirar detalladamente el campamento</a>.</p>\
        <p>Permanezco escondido y comienzo a preparar el plan para atacar, pudiendo hacerlo de dos formas distintas, o bien <a href='campamento_fuerza'>entro a la fuerza</a> atacando e intentando pillarlos desprevenidos o me centro en <a href='campamento_sigilo'>hacerlo sigilosamente</a>.</p>",
    {
      heading: "Campamento de villanos",
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
    <p>Decido ir por la ruta más larga, <br> pero de la que más información tengo, llegar hasta allí me llevará cinco días y cuatro noches, por lo que decido partir ya.</p>\
        <p>Tras varias días caminando sin cesar, diviso a lo lejos el campamento de villanos. Para mi asombro solo está compuesto por cabañas de madera con el techo de paja y de un río que cruza por el centro.</p>\
        <p>Permanezco escondido y comienzo a preparar el plan para atacar, pudiendo hacerlo de dos formas distintas, o bien <a href='campamento_fuerza'>entro a la fuerza</a> atacando e intentando pillarlos desprevenidos o me centro en <a href='campamento_sigilo'>hacerlo sigilosamente</a>.</p>",
    {
      heading: "Campamento de villanos",
    }
  ),
  /*Mirar detalladamente el campamento*/
  detalladamente_campamento: new undum.SimpleSituation(
    "<p>veo que hay un tirador con arco y flechas de piedra.</p>\
        <p><a href='campamento2'>Continuar con la historia</a></p>",
    {
      heading: "Tras mirar detalladamente ...",
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
    <p>Decido hacer el ataque por la fuerza, <br> con mi espada en mano salgo a correr hacia el campamento entrando por la parte trasera y acabando con la vida de dos villanos. En este momento los dos que se encuentran en tierra más el arquero subido en una plataforma se focalizan en mí. Esquivando flechas y luchando contra los dos a la vez consigo salir victorioso pero con heridas físicas graves, por lo que tendré que recuperarme antes de poder seguir.</p>\
        <p>Me tumbo en una de las camas del campamento para <a href='campamento_fuerza2'> reposar y sanar mis heridas</a>.</p>",
    {
      heading: "Ataque al campamento por la fuerza",
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
          <p>Al tumbarme sobre la cama de una cabaña, recuerdo el frasco de vida que me dio Momo.</p>\
                    <p>Decido tomarmelo de un trago y, para mi asombro todas mis heridas han sanado en cueston de segundos.\
                    Gracias a esto podré <a href='eleccion_villanos'>continuar mi viaje</a> sin perder tiempo.</p>"
        );

        system.setQuality("frascoVida", character.qualities.frascoVida - 1);
      } else {
        system.write(
          "<img src='./media/img/12.png' class='float_right' width='150' height='150'>\
          <p> Tras una semana, <br> mis heridas han sanado y procedo a prepararme para llegar al castillo del jefe,</p>\
          quien ha robado mi ordenador.</p>\
          <p>Antes de salir voy a llevar conmigo algunas de las\
          <a href='eleccion_villanos'>armas que tenían los villanos</a></p>"
        );
      }
    },

    heading: "Recuperación",
  }),

  /*Elección campamento de villanos en sigilo*/
  campamento_sigilo: new undum.SimpleSituation(
    "<img src='./media/img/2.png' class='float_right' width='250' height='250'>\
    <p>Decido hacer un ataque sigiloso, <br> con mi espada en mano entro de noche en el campamento nadando por el río.</p>\
        <p>Mi mayor prioridad es acabar con el arquero, ya que es el que presenta la gran amenaza. Me avalanzo sobre él por la espalda sin que el resto se percate. Cojo su arco y acabo con dos soldados que se encontraban de guardia, bajo y acaba con la vida de los soldados que estaban descansando en sus cabañas.</p>\
        <p>Decido pasar la noche en el campamento y antes de partir hacia el castillo <a href='eleccion_villanos'>recojo algunas armas pertenecientes a los villanos.</a></p>",
    {
      heading: "Ataque al campamento sigilosamente",
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
    <p>Decido ir por la ruta más corta, <br>pese a no tener información sobre el monstruo.</p>\
        <p>Tras un dia de camino llego a las llanuras de la montaña, noto algo inquietante y es que la vegetación y el clima son muy secos.</p>\
        <p>Me adentro en ella y continuo recto durante el día. Al llegar la noche decido continuar sin parar hasta que noto como algo me vigila en la distancia, decido correr y algo se avalanza sobre mí, consigo escaparme y verlo de frente, se trata de un lobo enorme.</p>\
        <p>Tengo poco tiempo para pensar ya que se volvera a avalanzar sobre mi, nose si debería <a href='salir_corriendo'>salir corriendo</a> o <a href='enfrentarme'>enfrentarme a él</a>.</p>",
    {
      heading: "El rey de la montaña",
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
    <p>Tras pensarlo rapidamente, <br>decido salir corriendo entre la maleza del bosque, el lobo me persigue sin cesar por lo que no me queda otra que darme la vuelta y <a href='enfrentarme'>enfrentarme a él</p>",
    {
      heading: "Salir corriendo",
    }
  ),
  /*Enfrentarme a el*/
  enfrentarme: new undum.SimpleSituation("", {
    enter: function (character, system, from) {
      if (character.qualities.frascoVida > 0) {
        system.write(
          "<img src='./media/img/4.png' class='float_right' width='250' height='250'>\
          <p>Cojo mi espada, <br> y salgo corriendo hacia él, me muerde el brazo mientras le atravieso el cuello con mi arma.\
                    El resultado ha sido desastroso, mi brazo ha acabado destrozado, pero al menos he conseguido sobrevivir ante semejante amenaza.</p>\
                    <p>Tras acabar la batalla me tumbo en el suelo del bosque destrozado y recuerdo el frasco de vida que me dió Momo,\
                    decido tomarlo de un trago y, para mi asombro ¡Qué está pasando! en cuestión de segundos mis heridas han sanado y mi brazo\
                    a crecido de nuevo. Tras varios minutos asimilando lo sucedido decido conversar con el gnomo sobre el lobo.\
                    El gnomo me cuenta que se trata de un animal mágico y que sus huesos sirven para hacer armas mas fuertes que el hierro.</p>\
                    <p>Puesto que no tengo todo el tiempo del mundo debo decidir que <a href='eleccion_montana'>armas fabricar</a>.</p>"
        );
        system.setQuality("frascoVida", character.qualities.frascoVida - 1);
        system.setQuality(
          "progreso_historia",
          character.qualities.progreso_historia + 7
        );
      } else {
        system.write(
          "<img src='./media/img/4.png' class='float_right' width='250' height='250'>\
          <p>Cojo mi espada, <br> y salgo corriendo hacia él, me muerde el brazo mientras le atravieso el cuello con mi arma.\
                    El resultado ha sido desastroso, mi brazo ha acabado destrozado, pero al menos he conseguido sobrevivir ante semejante amenaza.</p>\
                    <p>Tras varios días de recuperación, el gnomo me cuenta que se trata de un animal mágico y que sus huesos sirven para hacer armas mas fuertes que el hierro.</p>\
                    <p>Puesto que no tengo todo el tiempo del mundo debo decidir que <a href='eleccion_montana'>armas fabricar</a>.</p>"
        );
        system.setQuality(
          "progreso_historia",
          character.qualities.progreso_historia + 7
        );
      }
    },

    heading: "Enfrentamiento con el lobo",
  }),
  /*llegada a castillo*/
  llegada_castillo: new undum.SimpleSituation(
    "<img src='./media/img/28.png' class='float_right' width='250' height='250'>\
    <p>Tras reponer mi inventario con nuevas armas, <br> focalizo mi atención en llegar hacia el castillo.</p>\
        <p>Tras un día caminando sin descanso diviso a lo lejos el inmenso castillo del responsable de robar mi ordenador.</p>\
        <p><a href='entrada'>Me dirigo hacia la puerta principal</a></p>",
    {
      heading: "Llegada al castillo",
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
    optionText: "Cuchillo de huesos",
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
    optionText: "Cuchillo de metal",
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
    optionText: "Espada de huesos",
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
    optionText: "Espada de metal",
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
    optionText: "Arco de huesos",
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
    optionText: "Arco de metal",
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
    optionText: "Lanza de huesos",
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
    optionText: "Lanza de metal",
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
    optionText: "Machete de huesos",
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
    optionText: "Machete de metal",
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
    optionText: "Cuchara de huesos",
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
    optionText: "Cuchara de metal",
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
    optionText: "Tenedor de huesos",
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
    optionText: "Tenedor de metal",
    displayOrder: 1,
  }),

  /*Comienzo capítulo 4*/
  entrada: new undum.SimpleSituation(
    "<img src='./media/img/29.png' width='300' height='300'>\
	<p>Before reaching the front door, I see a somewhat suspicious bundle in the distance \
	so I go to see what it's about.</p>\
	<p>To my surprise, it was a  <a href='./traje-tru' class='once'>guard suit</a> that had been lost.\
	I better keep it, you never know if I might need it.</p>\
	Once I get to the front door, I start to think about the\
	way to sneak into the castle. Considering that there is a\
	army of guards surrounding it is better to look for an alternative option\
	to the front door.</p>\
	<p>This is not the time to think, I have to decide where to go.\
	I can <a href='entrar_sigilo'>stealth</a> and infiltrate or I can\
	<a href='ataca_guardias'>attack the guards</a>.\
	</p>",
    {
      actions: {
        "traje-tru": function (character, system, action) {
          system.setQuality("traje", true);
        },
      },
      heading: "Entrance to the castle",
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
					<p>I think attacking the guards is going to be the best option. \
					The fewer enemies alive, the better.</p>\
					<p>I run towards them and start to confront everyone who stands in the way \
					on my way.</p>\
					<p>When I thought I had defeated everyone, reinforcements come and seem too many \
					for me alone.</p>\
					<p>They pounce on me and hit me with everything. To face an entire army \
					I have to be much more armed. \
					</p>"
        );
      }
    },

    heading: "I attack the guards",
  }),
  ganas: new undum.SimpleSituation(
    "<img src='./media/img/27.jpg' width='500' height='400'>\
	<p>I think attacking the guards is going to be the best option. The fewer enemies alive, the better.</p>\
	<p>I run towards them and begin to confront everyone who stands in my way.</p>\
	<p>With my weapons I am destroying each one of my enemies. When he thought he had defeated everyone, \
	reinforcements are coming but I don't care. I'll kill them all.</p>\
	<p>Once I have finished off the army, I enter the castle and search for the boss with the \
	information the guards gave me.</p>\
	<p>Sure enough, the boss's room is where they said. Now<a href='despacho'>I have to enter</a>\
	to get my computer back.\
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
	<p>I decide to go into stealth as I don't feel like facing an entire army. \
	To find my way of entry I am going to take a walk around the outskirts of the castle.</p>\
	<p>I must be very lucky because I have found an object again, \
	this time it is <a href='./cuerda-tru' class='once'> a rope. </a> </p> \
	<p> Now I can <a href='cuerda_escalar'> climb the wall to infiltrate </a>. If not, I will continue on my way. </p> \
	<p>After taking an exploratory walk, I think the best options are \
	try to sneak through where there is less security, <a href='parte_atras'>the back</a>. Or maybe I can also\
	<a href='disfraz_guardia'>disguise myself as a guard</a> and sneak through the front door.\
	</p>",
    {
	  actions: {
			"cuerda-tru": function (character, system, action) {
				system.setQuality("cuerda", true);
			},
	  },
      heading: "I enter stealthing",
      enter: function (character, system, from) {
        system.setQuality(
          "progreso_historia",
          character.qualities.progreso_historia + 2
        );
      },
    }
  ),
  cuerda_escalar: new undum.SimpleSituation("", {
    enter: function (character, system, from) {
      if (character.qualities.cuerda) {
        {
          system.setQuality(
            "progreso_historia",
            character.qualities.progreso_historia + 5
          );
        }
        system.doLink("cuerda_escalar2");
      } else {
        {
          system.setQuality(
            "progreso_historia",
            character.qualities.progreso_historia + 8
          );
        }
        system.write(
          "<p>Although I have no rope, I am about to climb the wall. \
					<em> Surely for an ex-professional climber this is no problem.</em>\
					</p>\
					<p>That is what someone who has been a professional climber and not a useless person would say.\
					</p>\
					<p>As I go up a bit my hands start to sweat and I slip, falling \
					from a height of half a meter. The hit wasn't a big deal, but it was enough \
					to realize that being a hero is not my thing and I want to be calm again.\
					</p>"
        );
      }
    },

    heading: "I climb the wall",
  }),
   cuerda_escalar2: new undum.SimpleSituation(
    "<p>After hooking the rope to a tower, I am about to climb the wall.</p>\
	<p>Although it was not an easy task, I am finally inside the castle.</p>\
	<p>Now I have to find Victorcillo, although I suspect he will be in his room \
	so <a href='despacho'>there I go</a>.\
	</p>",
    {
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
	<p>In the end the best decision was to infiltrate the back of the castle. \
	During the walk I saw an open window that I left stuck just in case.\
	</p>\
	<p>Now that I'm inside the castle, I have to find the thief who stole from me \
	the computer. For this I first have to find the room it is in.\
	I can <a href='preguntar'>ask the workers</a> or\
	maybe <a href='investigar'>I can investigate on my own</a>.\
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
	<p>I approach a worker who was loitering in the hallways. He was wearing a uniform \
	a bit strange, he was dressed in an elegant way but at the same time you could guess that \
	worked there.</p>\
	<p> I ask him about his boss and his location. Now I know the name of my enemy, \
	the fearsome Victorcillo. He also told me that his office was on the first floor. \
	I find it strange that there is an office inside a castle but I have no choice but to go \
	check it out.</p>\
	<p>Sure enough, there it was. Only the office door separates me. There are no more options. \
	It is time to get my computer back.<a href='despacho'> I enter Victorcillo's office</a>.\
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
    "<p>To find the room I am looking for I will have to search the entire castle. \
	I hope this process is not very long.</p>\
	<img src='./media/img/11.jpg' width='400' height='300'>\
	<p>After taking a short walk through this area of ​​the castle, I find a somewhat striking room. \
	On the door it says: <em>Victorcillo</em>. I don't understand much about this strange\
	language but it looks like he is the person I am looking for.\
	</p>\
	<p><a href='despacho'>I enter the office</a>.\
	</p>",
    {
      heading: "I investigate on my own",
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
	<p>I open the door of the room and watch from outside without saying anything so as not to reveal \
	my identity.</p>\
	<p>I see that Victorcillo is using my computer while saying some strange words. \
	I don't know what about Scrum, Product Owner, Product Backlog. I am not sure, \
	but he must be doing a satanic ritual or he must be drunk.</p>\
	<p>I enter the room and when he sees me, Victorcillo gets up and comes towards me. Something inside of me tells me\
	dont attack him, at least not yet. When he's around, he gives me a hug while crying.</p>\
	<p>Even though he was the thief of my computer, I feel sorry for him and I take pity on him. \
	In his version of the story, he says that he had to steal my computer because it was in \
	full sprint and he had to finish the job. Then he knelt before me asking my forgiveness \
	for what he did.</p>\
	<p>It is a difficult decision but it is in my hands, <a href='perdon'>I forgive him</a> or\
	<a href='muerte'>I end him</a>.\
	</p>",
    {
      heading: "I enter the office",
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
	<p>After knowing this I cannot do anything wrong to him. Even though what he's done is wrong, I can understand it.\
	Victorcillo hands me my computer back. Now I will be able to finish my homework.</p>\
	<p>Arcadia is a strange place but in the end, everything turned out fine.\
	</p>",
    {
      heading: "I forgive Victorcillo",
      enter: function (character, system, from) {
        system.setQuality(
          "progreso_historia",
          character.qualities.progreso_historia + 5
        );
      },
    }
  ),
  muerte: new undum.SimpleSituation(
    "<p>After what he has done I do not know if he expects me to forgive him but taking advantage of the fact that he is\
	on my knees, I hit him with a punch that descends from the sky like a Burndown graphic. </p>\
	<p>The attack was a success. Victorcillo is taking a nap at my feet. I take this opportunity to recover \
	my computer and escape from there. Now I am free to finish my homework. </p>\
	<img src='./media/img/22.jpg' width='400' height='300'>\
	<p>Arcadia is a strange place but in the end, everything turned out fine.\
	</p>",
    {
      heading: "I end with Victorcillo",
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
          "<p>I approach the group of guards who were at the front door. \
					From afar they are already yelling at me not to come near \
					but I tell you that I am not a danger, just a lost tourist. </p>\
					<p>When I'm around them I can see how moody and aggressive they are. \
					Before I even give myself time to respond, I am quickly finalized as a daily Scrum. \
					Without a doubt these Arcadia guards are the most dangerous.</p>\
					<img src='./media/img/8.png' width='500' height='400'>\
					<p>In a hypothetical case that I can resurrect and return to this situation, \
					it is still better to have a guard suit to approach them. \
					</p>"
        );
      }
    },

    heading: "I disguise myself as a guard",
  }),
  disfraz_guardia2: new undum.SimpleSituation(
    "<p>I approach the group of guards who were at the front door. By going dressed like them \
	they will not suspect me.</p>\
	<img src='./media/img/33.jpg' width='500' height='350'>\
	<p>When I am near them I tell them that I came from a far away place since I was doing a \
	order for the boss. Luckily they told me that a certain Victorcillo was waiting for me in his office.</p>\
	<p>Luckily I sneaked in and I was able to enter the castle. Also now I know that I have to \
	face Victorcillo and he's in his room, so<a href='despacho'>there I go</a>.\
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
  traje: new undum.OnOffQuality("Guard suit", {
    priority: "0002",
    group: "objetos",
    onDisplay: "&#10003;",
  }),
  progreso_historia: new undum.IntegerQuality("Progreso %:", {
    priority: "0001",
    group: "stats",
  }),
  equipamiento: new undum.IntegerQuality("Equipment", {
    priority: "0001",
    group: "stats",
  }),
      cuerda: new undum.OnOffQuality("Rope for climbing", {
    priority: "0002",
    group: "objetos",
    onDisplay: "&#10003;",
  })
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
  system.setQuality("cuerda", false);

  system.setCharacterText("<p>List of objects that I carry:</p>");
};
