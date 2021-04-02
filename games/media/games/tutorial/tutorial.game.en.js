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
undum.game.mobileHide = 2000

/* A variable that changes the options fade out speed. */
undum.game.fadeSpeed = 1500

/* A variable that changes the slide up speed after clicking on an
 * option. */
undum.game.slideUpSpeed = 500

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {
    start: new undum.SimpleSituation(
        "<h1>Capítulo 3 - MI OBJETIVO</h1>\
        <p>Tras conocer la ubicación <br> de mi ordenador y preguntar por las rutas existentes me planteo cuál seguir.</p>\
        \
        <p>Por la ruta más larga tengo un <a href='campamento'>campamento de villanos</a>, según los datos proporcionados por el gnomo habitan cinco villanos y van armados con espadas de metal y escudos de madera.</p>\
        \
        <p>Por la ruta más corta tengo que <a href='montana'>pasar la montaña</a>, gobernada por un monstruo del cual no se conoce información, solo sé que es conocido como \"El rey de la montaña\".</p>"
    ),

    /*Elección campamento de villanos*/
    campamento: new undum.SimpleSituation(
        "<p>Decido ir por la ruta más larga, <br> pero de la que más información tengo, llegar hasta allí me llevará cinco días y cuatro noches, por lo que decido partir ya.</p>\
        <p>Tras varias días caminando sin cesar, diviso a lo lejos el campamento de villanos. Para mi asombro solo está compuesto por cabañas de madera con el techo de paja y de un río que cruza por el centro.</p>\
        <p><a href='detalladamente_campamento'>Mirar detalladamente el campamento</a>.</p>\
        <p>Permanezco escondido y comienzo a preparar el plan para atacar, pudiendo hacerlo de dos formas distintas, o bien <a href='campamento_fuerza'>entro a la fuerza</a> atacando e intentando pillarlos desprevenidos o me centro en <a href='campamento_sigilo'>hacerlo sigilosamente</a>.</p>",
        {
            heading: "Campamento de villanos",
        }
    ),
    campamento2: new undum.SimpleSituation(
        "<p>Decido ir por la ruta más larga, <br> pero de la que más información tengo, llegar hasta allí me llevará cinco días y cuatro noches, por lo que decido partir ya.</p>\
        <p>Tras varias días caminando sin cesar, diviso a lo lejos el campamento de villanos. Para mi asombro solo está compuesto por cabañas de madera con el techo de paja y de un río que cruza por el centro.</p>\
        <p>Permanezco escondido y comienzo a preparar el plan para atacar, pudiendo hacerlo de dos formas distintas, o bien <a href='campamento_fuerza'>entro a la fuerza</a> atacando e intentando pillarlos desprevenidos o me centro en <a href='campamento_sigilo'>hacerlo sigilosamente</a>.</p>",
        {
            heading: "Campamento de villanos",
        }
    ),
    /*Mirar detalladamente el campamento*/
    detalladamente_campamento: new undum.SimpleSituation(
        "<p>Tras mirar detallademente, veo que hay un tirador con arco y flechas de piedra.</p>\
        <p><a href='campamento2'>Continuar con la historia</a></p>",
        {
            heading: "Mirar detalladamente el campamento",
        }
    ),
    /*Elección campamento de villanos a la fuerza*/
    campamento_fuerza: new undum.SimpleSituation(
        "<p>Decido hacer el ataque por la fuerza, <br> con mi espada en mano salgo a correr hacia el campamento entrando por la parte trasera y acabando con la vida de dos villanos. En este momento los dos que se encuentran en tierra más el arquero subido en una plataforma se focalizan en mí. Esquivando flechas y luchando contra los dos a la vez consigo salir victorioso pero con heridas físicas graves, por lo que tendré que recuperarme antes de poder seguir.</p>\
        <p>Me tumbo en una de las camas del campamento para <a href='campamento_fuerza2'> reposar y sanar mis heridas</a>.</p>",
        {
            heading: "Ataque al campamento por la fuerza",
        }
    ),
    campamento_fuerza2: new undum.SimpleSituation(
        "<p> Tras una semana, <br> mis heridas han sanado y procedo a prepararme para llegar al castillo del jefe, quien ha robado mi ordenador.</p>\
        <p>Antes de salir voy a llevar conmigo algunas de las <a href='eleccion_villanos'>armas que tenían los villanos</a></p>",
        {
            heading: "Recuperación",
        }
    ),
    /*Elección campamento de villanos en sigilo*/
    campamento_sigilo: new undum.SimpleSituation(
        "<p>Decido hacer un ataque sigiloso, <br> con mi espada en mano entro de noche en el campamento nadando por el río.</p>\
        <p>Mi mayor prioridad es acabar con el arquero, ya que es el que presenta la gran amenaza. Me avalanzo sobre él por la espalda sin que el resto se percate. Cojo su arco y acabo con dos soldados que se encontraban de guardia, bajo y acaba con la vida de los soldados que estaban descansando en sus cabañas.</p>\
        <p>Decido pasar la noche en el campamento y antes de partir hacia el castillo <a href='eleccion_villanos'>recojo algunas armas pertenecientes a los villanos.</a></p>",
        {
            heading: "Ataque al campamento sigilosamente",
        }
    ),
    
    
    
    /*Elección pasar por la montaña*/
    montana: new undum.SimpleSituation(
        "<p>Decido ir por la ruta más corta, <br>pese a no tener información sobre el monstruo.</p>\
        <p>Tras un dia de camino llego a las llanuras de la montaña, noto algo inquietante y es que la vegetación y el clima son muy secos.</p>\
        <p>Me adentro en ella y continuo recto durante el día. Al llegar la noche decido continuar sin parar hasta que noto como algo me vigila en la distancia, decido correr y algo se avalanza sobre mí, consigo escaparme y verlo de frente, se trata de un lobo enorme.</p>\
        <p>Tengo poco tiempo para pensar ya que se volvera a avalanzar sobre mi, nose si debería <a href='salir_corriendo'>salir corriendo</a> o <a href='enfrentarme'>enfrentarme a él</a>.</p>",
        {
            heading: "El rey de la montaña",
        }
    ),
    
    /*Salir corriendo del lobo*/
    salir_corriendo: new undum.SimpleSituation(
        "<p>Tras pensarlo rapidamente, <br>decido salir corriendo entre la maleza del bosque, el lobo me persigue sin cesar por lo que no me queda otra que darme la vuelta y <a href='enfrentarme'>enfrentarme a él</p>",
        {
            heading: "Salir corriendo",
        }
    ),
    
    /*Enfrentarme a el*/
    enfrentarme: new undum.SimpleSituation(
        "<p>Cojo mi espada, <br> y salgo corriendo hacia él, me muerde el brazo mientras le atravieso el cuello con mi arma.\
        El resultado ha sido desastroso, mi brazo ha acabado destrozado, pero al menos he conseguido sobrevivir ante semejante amenaza.</p>\
        <p>Tras varios días de recuperación, el gnomo me cuenta que se trata de un animal mágico y que sus huesos sirven para hacer armas mas fuertes que el hierro.</p>\
        <p>Puesto que no tengo todo el tiempo del mundo debo decidir que <a href='eleccion_montana'>armas fabricar</a>.</p>",
        {
            heading: "Enfrentamiento con el lobo",
        }
    ),

    /*llegada a castillo*/
    llegada_castillo: new undum.SimpleSituation(
        "<p>Tras reponer mi inventario con nuevas armas, <br> focalizo mi atención en llegar hacia el castillo.</p>\
        <p>Tras un día caminando sin descanso diviso a lo lejos el inmenso castillo del responsable de robar mi ordenador.</p>\
        <p><a href='cap4'>Me dirigo hacia la puerta principal</a></p>",
        {
            heading: "Llegada al castillo",
        }
    ),
    // Menu elecciones.
    // cuchilloHueso
    opcion1: new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#s_situations2").html());
                system.animateQuality(
                    'cuchilloHueso', character.qualities.cuchilloHueso+1
                );
            system.write($("#recojo_cuchillohuesos").html());
        },
        tags: ["eleccion_montana"],
        optionText: "Cuchillo de huesos",
        displayOrder: 1
    }),
    // Cuchillo Metal
    opcion2: new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#s_situations1").html());
            
                system.animateQuality(
                    'cuchilloMetal', character.qualities.cuchilloMetal+1,
                );
            system.write($("#recojo_cuchillometal").html());
        },
        tags: ["eleccion_villanos"],
        optionText: "Cuchillo de metal",
        displayOrder: 1
    }),
    // espada de huesos
    opcion3: new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#s_situations2").html());
                system.animateQuality(
                    'espadaHueso', character.qualities.espadaHueso+1
                );
            system.write($("#recojo_espadahuesos").html());
        },
        tags: ["eleccion_montana"],
        optionText: "Espada de huesos",
        displayOrder: 1
    }),
    // Espada de metal
    opcion4: new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#s_situations1").html());
            
                system.animateQuality(
                    'espadaMetal', character.qualities.espadaMetal+1,
                );
            system.write($("#recojo_espadametal").html());
        },
        tags: ["eleccion_villanos"],
        optionText: "Espada de metal",
        displayOrder: 1
    }),
    // arco de huesos
    opcion5: new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#s_situations2").html());
                system.animateQuality(
                    'arcoHueso', character.qualities.arcoHueso+1
                );
            system.write($("#recojo_arcohuesos").html());
        },
        tags: ["eleccion_montana"],
        optionText: "Arco de huesos",
        displayOrder: 1
    }),
    // arco de metal
    opcion6: new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#s_situations1").html());
            
                system.animateQuality(
                    'arcoMetal', character.qualities.arcoMetal+1,
                );
            system.write($("#recojo_arcometal").html());
        },
        tags: ["eleccion_villanos"],
        optionText: "Arco de metal",
        displayOrder: 1
    })
};

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
    skill: new undum.IntegerQuality(
        "Skill", {priority:"0001", group:'stats'}
    ),
    stamina: new undum.NumericQuality(
        "Stamina", {priority:"0002", group:'stats'}
    ),
    luck: new undum.FudgeAdjectivesQuality( // Fudge as in the FUDGE RPG
        "<span title='Skill, Stamina and Luck are reverently borrowed from the Fighting Fantasy series of gamebooks. The words representing Luck are from the FUDGE RPG. This tooltip is illustrating that you can use any HTML in the label for a quality (in this case a span containing a title attribute).'>Luck</span>",
        {priority:"0003", group:'stats'}
    ),
    inspiration: new undum.NonZeroIntegerQuality(
        "Inspiration", {priority:"0001", group:'progress'}
    ),
    novice: new undum.OnOffQuality(
        "Novice", {priority:"0002", group:'progress', onDisplay:"&#10003;"}
    ),
    cuchilloHueso: new undum.OnOffQuality(
        "Cuchillo de huesos", {priority:"0002", group:'objetos', onDisplay:"&#10003;"}
    ),
    espadaHueso: new undum.OnOffQuality(
        "Espada de huesos", {priority:"0002", group:'objetos', onDisplay:"&#10003;"}
    ),
    arcoHueso: new undum.OnOffQuality(
        "Arco de huesos", {priority:"0002", group:'objetos', onDisplay:"&#10003;"}
    ),
    cuchilloMetal: new undum.OnOffQuality(
        "Cuchillo de metal", {priority:"0002", group:'objetos', onDisplay:"&#10003;"}
    ),
    espadaMetal: new undum.OnOffQuality(
        "Espada de metal", {priority:"0002", group:'objetos', onDisplay:"&#10003;"}
    ),
    arcoMetal: new undum.OnOffQuality(
        "Arco de metal", {priority:"0002", group:'objetos', onDisplay:"&#10003;"}
    )
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    stats: new undum.QualityGroup(null, {priority:"0001"}),
    objetos: new undum.QualityGroup(null, {priority:"0001"}),
    progress: new undum.QualityGroup('Progress', {priority:"0002"})
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {
    character.qualities.skill = 12;
    character.qualities.stamina = 12;
    character.qualities.luck = 0;
    character.qualities.novice = 1;
    character.qualities.inspiration = 0;
    
    //aaa
    character.qualities.cuchilloHueso = 0;
    character.qualities.espadaHueso = 0;
    character.qualities.arcoHueso = 0;
    character.qualities.cuchilloMetal = 0;
    character.qualities.espadaMetal = 0;
    character.qualities.arcoMetal = 0;
    
    system.setCharacterText("<p>Listado de objetos que lleva encima:</p>");
};
