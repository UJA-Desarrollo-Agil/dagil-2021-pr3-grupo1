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
        "<h1>Starting Out with Undum</h1>\
        <img src='media/games/tutorial/woodcut1.png' class='float_right'>\
        <p>Welcome to the Undum tutorial. Undum is a tool for writing\
        hypertext interactive fiction. It has some unique features\
        and a visual design that encourages narrative games.</p>\
        \
        <p>Hypertext interactive fiction is the digital equivalent of the\
        Choose Your Own Adventure (CYOA) books that were popular in the\
        1980s. The story is told in chunks, and you select from a range\
        of options to move it forward. Unlike the book form, however, the\
        digital form gives you far more flexibility to tell rich stories\
        and introduce more interesting game elements.</p>\
        \
        <p class='transient'>Click <a href='hub'>this link to\
        continue...</a></p>"
    ),

    // NB: The 'hub' situation which is the main list of topics, is
    // defined wholly in the HTML file, and doesn't have an entry in
    // the game.situations dictionary in this file.

    // For variety, here we define a situation using the top-level
    // Situation type. This is a neat approach to generate text by
    // looking it up in the HTML document. For static text that makes
    // more sense than writing it longhand.
    situations: new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#s_situations").html());
        },
        tags: ["topic"],
        optionText: "What Undum Games are Made Of",
        displayOrder: 1
    }),
	entrada: new undum.SimpleSituation(
	"<p>Antes de llegar a la puerta principal, veo un bulto a lo lejos un tanto sospechoso\
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
				"traje-tru": function(character, system, action) {
                    system.setQuality("traje", true);
				}
			},
			heading:"Entrada al castillo",
	}
	),
	ataca_guardias: new undum.SimpleSituation(
	"",
	{
			enter: function(character, system, from){
				if(character.qualities.equipamiento > 3){
					system.doLink("ganas");
				}else{
					system.write("<p>Creo que atacar a los guardias va a ser la mejor opción.\
					Cuantos menos enemigos vivos, mejor.</p>\
					<p>Voy corriendo hacia ellos y empiezo a enfrentarme con todos los que se interponen\
					en mi camino.</p>\
					<p>Cuando pensaba que habia derrotado a todos, vienen refuerzos y parecen demasiados\
					para mi solo.</p>\
					<p>Se abalanzan contra mi y me inflan a palos. Para enfrentarme a un ejército entero\
					tengo que ir mucho más armado.\
					</p>");
				}
			},
			
			heading:"Ataco a los guardias",
	}
	),
	ganas: new undum.SimpleSituation(
	"<p>Creo que atacar a los guardias va a ser la mejor opción.Cuantos menos enemigos vivos, mejor.</p>\
	<p>Voy corriendo hacia ellos y empiezo a enfrentarme con todos los que se interponen en mi camino.</p>\
	<p>Con mis armas voy acabando con cada uno de mis enemigos. Cuando pensaba que había derrotado a todos,\
	vienen refuerzos pero me da igual. Acabaré con todos.</p>\
	<p>Una vez he acabado con el ejército de mequetrefes, entro al castillo y busco al jefe con la\
	información que me dieron los guardias.</p>\
	<p>Efectivamente, la habitación del jefe está donde dijeron. Ahora <a href='despacho'>tengo que entrar</a>\
	a recuperar mi ordenador.\
	</p>",
	{
			
	}
	),
	entrar_sigilo: new undum.SimpleSituation(
	"<p>Decido entrar en sigilo ya que no me apetece enfrentarme a un ejército entero.\
	Para encontrar mi vía de entrada voy a dar una vuelta por las afueras del castillo.</p>\
	<p>Tras haber dado un paseo exploratorio, creo que las mejores opciones son\
	intentar colarme por donde menos seguridad hay, <a href='parte_atras'>la parte de atrás</a>. O quizá también puedo\
	<a href='disfraz_guardia'>disfrazarme como un guardia</a> y colarme por la puerta principal.\
	</p>",
	{			
			heading:"Entro en sigilo"
	}
	),
	parte_atras: new undum.SimpleSituation(
	"<p>Al final la mejor decisión era infiltrarse por la parte de atrás del castillo.\
	Durante el paseo vi una ventana abierta que dejé atascada por si las moscas.\
	</p>\
	<p>Ahora que estoy dentro del castillo sólo me queda encontrar al ladrón que me robó\
	el ordenador. Para ello primero tengo que encontrar la habitación en la que está.\
	Puedo <a href='preguntar'>preguntar a los trabajadores</a> o\
	igual <a href='investigar'>puedo investigar por mi cuenta</a>.\
	</p>",
	{
			heading:"Entro por la parte de atrás",
	}
	),
	preguntar: new undum.SimpleSituation(
	"<p>Me acerco a un trabajador que estaba merodeando por los pasillos. Llevaba un uniforme\
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
			heading:"Pregunto a los trabajadores",
	}
	),
	investigar: new undum.SimpleSituation(
	"<p>Para encontrar la habitación que busco tendré que buscar por todo el castillo.\
	Espero que este proceso no sea muy largo.</p>\
	<p>Tras dar un breve paseo por esta zona del castillo encuentro una habitación un tanto llamativa.\
	En la puerta pone: <em>Victorcillo</em>. No entiendo mucho de este extraño\
	lenguaje pero tiene pinta de que es la persona a la que busco.\
	</p>\
	<p><a href='despacho'>Entro al despacho</a>.\
	</p>",
	{
			heading:"Investigo por mi cuenta",
	}
	),
	despacho: new undum.SimpleSituation(
	"<p>Abro la puerta de la habitación y observo desde fuera sin decir nada para no revelar\
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
			heading:"Entro en el despacho",
	}
	),
	perdon: new undum.SimpleSituation(
	"<p>Tras saber esto no puedo hacerle nada malo. Aunque lo que ha hecho está mal, puedo entenderlo.\
	Dicho esto, Victorcillo me entrega mi ordenador de vuelta. Ahora sí que podré acabar mis prácticas.</p>\
	<p>Arcadia es un lugar extraño pero al final, todo ha salido bien.\
	</p>",
	{
			heading:"Perdono a Victorcillo",
	}
	),
	muerte: new undum.SimpleSituation(
	"<p>Después de lo que ha hecho no sé si espera que lo perdonase pero aprovechando que está\
	de rodillas, le atizo un puñetazo que desciende del cielo cual gráfica Burndown.</p>\
	<p>El ataque fue un éxito. Victorcillo está echando la siesta a mis pies. Aprovecho para recuperar\
	mi ordenador y escapar de ahí. Ahora sí que soy libre para terminar mis prácticas.</p>\
	<p>Arcadia es un lugar extraño pero al final, todo ha salido bien.\
	</p>",
	{
			heading:"Acabo con Victorcillo",
	}
	),	
	disfraz_guardia: new undum.SimpleSituation(
	"",
	{
			enter: function(character, system, from){
				if(character.qualities.traje){
					system.doLink("disfraz_guardia2");
				}else{
					system.write("<p>Me acerco al grupo de guardias que estaban en la puerta principal.\
					Desde lejos ya me están gritando que no me acerque\
					pero les digo que no soy un peligro, solo un turista perdido.</p>\
					<p>Cuando estoy cerca de ellos puedo ver lo malhumorados y agresivos que están.\
					Antes de si quiera darme tiempo a responder, me finiquitan rápido cual daily Scrum.\
					Sin duda estos guardias de Arcadia son de lo más peligroso.</p>\
					<p>En un hipotético caso de que pueda resucitar y volver a esta situación,\
					igual es mejor tener un traje de guardia para acercarme a ellos.\
					</p>");
				}
			},
			
			heading:"Me disfrazo como un guardia",
	}
	),
	disfraz_guardia2: new undum.SimpleSituation(
	"<p>Me acerco al grupo de guardias que estaban en la puerta principal. Al ir vestido como ellos\
	no sospecharán de mi.</p>\
	<p>Cuando estoy cerca de ellos les digo que venía de un lugar lejano ya que estaba haciendo un\
	encargo para el jefe. Por suerte me dijeron que un tal Victorcillo me estaba esperando en su despacho.</p>\
	<p>Menos mal que ha colado y he podido entrar al castillo. Además ahora sé que me tengo que\
	enfrentar a Victorcillo y que está en su habitación, así que <a href='despacho'>allí me dirijo</a>.\
	</p>",
	{
	
	}
	),
    sticky: new undum.SimpleSituation(
        "<p><a href='entrada'>bbbbbbbbbbbbbbbb</a></p>",
        {
            tags: ["topic"],
            displayOrder: 3,
            heading: "Different Kinds of Links"
        }
    )
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
	traje: new undum.OnOffQuality(
        "Traje de guardia", {priority:"0002", group:'objetos', onDisplay:"&#10003;"}
    ),
	    equipamiento: new undum.IntegerQuality(
        "Equipamiento", {priority:"0001", group:'stats'}
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
	character.qualities.equipamiento = 0;
	system.setQuality( "traje" , false )
    system.setCharacterText("<p>You are starting on an exciting journey.</p>");
};
