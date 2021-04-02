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
    situacionIntermedia1: new undum.SimpleSituation(
        "<h1>Situación intermendia 1</h1>\
        <p> El gnomo parece bastante amigable a pesar de su ridículo aspecto así que decido acercarme a él para saber si tiene idea de donde estamos. </p>\
        <p> Hola, me llamo -----------nombre personaje----------- y no se si decirle Buenas tardes o buenos días porque no se donde estamos y para colmo, ¡¡he perdido mi reloj!!.</p>\
        <p>Hola -----------nombre personaje-----------, yo soy Raerpin y estamos en el Mágico Mundo de Arcadia, he estado esperándote. ¿Deseas que te acompañe en tu aventura?  <a href='acompanar'>acompañar a Raerpin</a> o <a href='no_acompanar'>no acompañar a Raerpin</a>.</p>",
    ),

    /*Elijo Acompañar al gnomo*/
    acompanar: new undum.SimpleSituation(
        "<p>Decido emprender mi aventura junto a Raerpin por tres razones, la primera es que sigo sin tener idea de donde estoy,  la segunda, ¿cómo que me estaba esperando? y la tercera, que hace decantarme ¡¡¡ESTOY HABLANDO CON UN GNOMO!!!</p>\
        <p>Raerpin me explica que me estaba esperando porque vio caer un ordenador hacía un tiempo y le basto con verme y olerme...para saber que soy estudiante de una ingeniería asi que supuso que sería mío.</p>\
        <p>Continua diciendo que en el camino encontraremos diversos malvados y que dejará en mis manos la elección del camino que afontaremos pero que si llego intacto al final, recuperaré mi ordenador y podré acabar la práctica de Desarrollo Ágil a tiempo. Pero que tendré que acertar la siguiente adivinanza: Tengo patas y no ando, soy plana y no canto, se apoyan para escribir y no te puedo hacer reír. Por suerte me la se </p>\
        <p><a href='adivinanza'>Piensa un poco....Ver solución.</a>.</p>",
        {
            heading: "Acompañar a Raerpin",
        }
    ),

    /*Solución de la adivinanza*/ 
    adivinanza: new undum.SimpleSituation(
        "<p>La mesa.</p>\
        <p><a href='fin_capitulo'>Continuar con la historia</a></p>",
        {
            heading: "Solución",
        }
    ),

    /*Fin del capítulo*/
    fin_capitulo: new undum.SimpleSituation(
        "<p>Por haber dado con la solución, Raerpin me confiesa que el ordenador lo encontraré en el último lugar de mi camino y que solo lo conseguiré si derroto al villano de Arcadia junto a todos sus secuaces que iré encontrando hasta llegar a él.</p>",
        {
            heading: "Continuamos...",
        }
    ),


    /*Elijo No acompañar al gnomo*/
    no_acompanar: new undum.SimpleSituation(
        "<p>La clave era acompañar a Raerpin, por no hacerlo me convierte en perro y acaba la historia.</p>",
        {
            heading: "No me inspira confianza, mejor me voy"
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
    system.setCharacterText("<p>You are starting on an exciting journey.</p>");
};
