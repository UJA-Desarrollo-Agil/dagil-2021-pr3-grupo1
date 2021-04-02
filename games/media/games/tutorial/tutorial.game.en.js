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
        "<h1>LA HISTORIA COMIENZA...</h1>\
        <p>Despierto de golpe. La luz del sol me deslumbra. Froto mis ojos hasta que consigo abrirlos por completo.</p>\
    	<p>Miro hacia arriba y a mi alrededor. El cielo está despejado. No sé dónde estoy. Intento hacer memoria para recordar</p>\
    	<p>como he llegado aquí... yo estaba en mi habitación, en el escritorio, con mi ordenador, terminando la práctica de</p>\
    	<p>Desarrollo Ágil que se entregaba hoy las 23.55h... ¿¡QUÉ HORA ES!? ¡Tengo que entregar la práctica! Miro mi muñeca y</p>\
    	<p>descubro que no tengo reloj. De repente, escucho un ruido, alguien se acerca.</p>\
        <p class='dialogo'>- La historia comienza cuando el protagonista decide ejecutar la acción que lo inicia todo.</p>\
    	<p>No me lo puedo creer. ¡Acaba de hablarme un mono que viene hacia a mí!</p>\
        <p class='dialogo'>- No pongas esa cara. Me llamo Momo. No sé quién eres ni qué buscas. La verdad es que me da igual.\
    	Solo quiero un amigo. ¿Quieres ser mi amigo?</p>\
    	<p>Continúo en shock.</p>\
    	<a href='sin_mono'>No quiero hablar con nadie ni que nadie me moleste.</a>\
    	<a href='con_mono'>O quizás sea una buena idea tener alguien al lado, aunque sea un mono.</a>"
    ),
    
    sin_mono: new undum.SimpleSituation(
    	"<p>Momo luce sonriente sabiendo que puede quedar conmigo. Hace una seña para lo siga.\
    	Sin saber qué hacer, lo sigo por un camino extraño. De repente nos encontramos en frente de un gnomo.</p>",
        {
            heading: "Sin mono",
        }
	),
    
    con_mono: new undum.SimpleSituation(
    	"<p>Momo frunce el ceño y empieza a sacar plátanos de la riñonera que lleva.\
    	Empieza a lanzármelos a la cabeza. Consigue darme con un par de ellos. Está muy cabreado.\
    	Corro por un camino escapando de él. De repente de encuentro frente a un gnomo.</p>",
        {
            heading: "Con mono",
        }
	),

    /*Comienzo capitulo 3*/
    capitulo_tercero: new undum.SimpleSituation(
        "<p>Decido ir por la ruta más larga, <br> pero de la que más información tengo, llegar hasta allí me llevará cinco días y cuatro noches, por lo que decido partir ya.</p>\
        <p>Tras varias días caminando sin cesar, diviso a lo lejos el campamento de villanos. Para mi asombro solo está compuesto por cabañas de madera con el techo de paja y de un río que cruza por el centro.</p>\
        <p><a href='detalladamente_campamento'>Mirar detalladamente el campamento</a>.</p>\
        <p>Permanezco escondido y comienzo a preparar el plan para atacar, pudiendo hacerlo de dos formas distintas, o bien <a href='campamento_fuerza'>entro a la fuerza</a> atacando e intentando pillarlos desprevenidos o me centro en <a href='campamento_sigilo'>hacerlo sigilosamente</a>.</p>",
        {
            heading: "Campamento de villanos",
        }
    ),
    
    campamento: new undum.SimpleSituation(
        "<p>Decido ir por la ruta más larga, <br> pero de la que más información tengo, llegar hasta allí me llevará cinco días y cuatro noches, por lo que decido partir ya.</p>\
        <p>Tras varias días caminando sin cesar, diviso a lo lejos el campamento de villanos. Para mi asombro solo está compuesto por cabañas de madera con el techo de paja y de un río que cruza por el centro.</p>\
        <p><a href='detalladamente_campamento'>Mirar detalladamente el campamento</a>.</p>\
        <p>Permanezco escondido y comienzo a preparar el plan para atacar, pudiendo hacerlo de dos formas distintas, o bien <a href='campamento_fuerza'>entro a la fuerza</a> atacando e intentando pillarlos desprevenidos o me centro en <a href='campamento_sigilo'>hacerlo sigilosamente</a>.</p>",
        {
            heading: "Campamento de villanos",
        }
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
        <p><a href='campamento2'>Continuar con la historia</a></p>"
	),
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
        <p><a href='entrada'>Me dirigo hacia la puerta principal</a></p>",
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
    character.qualities.cuchilloHueso = 0;
    character.qualities.espadaHueso = 0;
    character.qualities.arcoHueso = 0;
    character.qualities.cuchilloMetal = 0;
    character.qualities.espadaMetal = 0;
    character.qualities.arcoMetal = 0;
    
    system.setCharacterText("<p>Listado de objetos que lleva encima:</p>");

	character.qualities.equipamiento = 0;
	system.setQuality( "traje" , false )
    system.setCharacterText("<p>You are starting on an exciting journey.</p>");

};
