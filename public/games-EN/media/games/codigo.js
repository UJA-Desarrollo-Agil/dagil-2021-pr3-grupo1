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
nombre = prompt("Before starting, please enter a name for your player: ");

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {
  start: new undum.SimpleSituation(
    "<h1>CHAPTER 1: THE STORY BEGINS ... </h1>\
    <img src='./media/img/15.png' class='float_ce' width='500' height='400'>\
        <p>I wake up suddenly. The sunlight dazzles me. <br> I rub my eyes until I manage to open them fully. </p>\
        <p>I look up and around me. The sky is clear. I do not know where I am. I try to remember to remember </p>\
        <p>how I got here ... I was in my room, at the desk, with my computer, finishing the Agile Development practice that was delivered today at 11:55 pm ... WHAT TIME IS IT !? I have to turn in the practice! I look at my wrist and find that I don't have a watch. Suddenly, I hear a noise, someone is approaching. </p>\
        <p><b>MOMO:</b> Do not put that face. My name is Momo. I don't know who you are or what you are looking for. The truth is that I do not care. </p>\
        <p>I continue in shock. </p>\
        <p><a href='sin_mono'>I do not want to speak with anybody </a> nor that nobody bothers me. Or maybe it's \
        <a href='con_mono'>a good idea to have someone by your side, even a monkey. </a>.</p><br>\
        <video controls autoplay width='100%'>\
          <source src='videos/v1.mp4' type='video/mp4' />\
        </video>"
  ),
  con_mono: new undum.SimpleSituation(
    "<img src='./media/img/0.png' class='float_right' width='250' height='250'>\
    <p>Momo looks smiling knowing that she can meet me. From her fanny pack he takes out an hourglass. </p>\
      <p>   <b>MOMO:</b> Is fate the hand that chooses whether our hourglass will run up or down, or is that hand ourselves? </p>\
      <p>Can not be. I think I already understand what Momo wants to tell me </p>\
      <p>   <b>" +
      nombre +
      ":</b> Are you not referring to the time that this watch has is what I have to be able to \
      find my computer? </p>\
      <p>The monkey nods his head. What stress! I feel anguish. This happens to me for leaving everything for the last moment. I do not see myself with a future in the engineering career, perhaps I was wrong when choosing it ...</p>\
      <p>Momo feels my downcast. She wants to cheer me up. Am i still listening <a href='detalle'> in more detail to the monkey </a>?</p>\
      <p>Makes a sign to  <a href='seguirlo'>follow it</a>.</p>",
    {
      heading: "Momo will accompany me",
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
    <p><b>MOMO:</b> You choose, you can spend all your time dead or you can take your time and do something valuable with it.\
      Something that fills that time with energy. You have to live strong enough so that life gives way to you, not you to it. \
      Life is nothing if you don't dare to live it. We must do something with the life we have. Let her find out that we are here, willing to leave her \
      jaws dropped at our way of going through it. </p>\
      <p>I can't believe this monkey's words! He is wiser than he seems, he has made me think ... And I feel more energetic. <a href='seguirlo'> CONTINUE STORY ... </a></p>",
    {
      heading: "The monkey talks to me ... ",
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
    <p>I follow Momo down a narrow path full of branches and leaves. I scratch myself between them, but my mind is elsewhere </p>\
      <p>If Alice had gotten tired of running after the White Rabbit, she would not have fallen down the burrow. Nor discovered the Country \
      of Wonders. Nor did I discover who she was. I will keep running. I'll fall. And I will try not to be afraid of what I have to face </p>\
      <p>We reached the end of the road. Next to a gnome we see a nest of bees. They are furious and they are coming towards us. </p>\
      <p><a href='momo_muere'>Momo wants to face them </a>, but we both know that he can die. <a href='correr'> I think the best thing to do is run away</a></p>",
    {
      heading: "Strange way ",
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
    <p>Momo faces the bees and in a tough battle manages to drive them away, but the stings are too strong for him and cause him to die. </p>\
    <p>I can not believe it. He has given his life for me. I go up to him and caress his face. I realize there is something in his fanny pack. I reach in and find a bottle that says LIFE. </p>\
    <p>I don't know what it is, but I keep it to myself because it can be useful. Also, I find a bar that says EAT ME. <a href='no_come'> It doesn't look very good </a>, but maybe</p>\
    <p><a href='come'>can give me strength to continue the adventure </a></p>",
    {
      heading: "Momo fight against bees ",
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
    <p>I look at a path. I'm running towards him. I've lost track of Momo. I keep running. As I run I look back in case the bees follow me </p>\
    <p>When I turn around, I don't realize that the road ends. There is a cliff. Without seeing it, I step into it and fall. I have a fatal fall that ends my life and this adventure. </p>",
    {
      heading: "Run out ",
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
    <p>The bar doesn't look good. I don't want to get sick, I just want to be able to get out of here. I'm going to get closer to the <a href='situacion_intermedia1'> gnomo</a>.</p>",
    {
      heading: "I approach the gnome ",
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
    <p>I'm very hungry and, even if the bar doesn't look good, I'll eat it. I open the bar and put it in my mouth. </p>\
    <p>It's monkey food. It is not compatible for humans. I end up dying of poisoning. </p>",
    {
      heading: "I eat the bar ",
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
    <p>Momo frowns and starts pulling bananas out of her fanny pack. </p>\
    <p>Start throwing them at their heads. He manages to find me a couple of them. He is very pissed off. </p>\
    <p>I run down a road running away from him. The path is narrow and full of branches and leaves. I do some scratches going between them. </p>\
    <p>   " +
      nombre +
      " : My life is a continual trying to grow flowers in the desert ... </p>\
      <p>Suddenly I find a  <a href='situacion_intermedia1'>gnomo</a> enfrente.</p>",
    {
      heading: "I don't want to continue with Momo.",
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

  /*Elijo Acompa??ar al gnomo*/
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

  /*DI??LOGO CON RAERPIN*/
  /*As?? es*/
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
  /*??Los ingernieros tambien nos duchamos!*/
  elijo_enfadarme: new undum.SimpleSituation(
    " <p><b>Raerpin:</b> I don't doubt it but you forgot today. Luckily I have this nose clip!</p>\
    <p><b>" +
      nombre +
      ":</b> <a href='elijo_enfadarme2'>-If you mess with the engineers again, you'll have to deal with me and my partners!-</a>   |   <a href='elijo_reirme2'>-Are all you gnomes out of the comedy club?-</a></p>"
  ),

  /*??Todos los gnomos habeis salido del club de la comedia?*/
  elijo_reirme2: new undum.SimpleSituation(
    " <p><b>Raerpin:</b> Unfortunately I am the last gnome left alive, after having a hard time for a long time due to the great loneliness I felt, I decided to live my remaining days with humor.</p>\
    <p><b>" +
      nombre +
      ":</b> <a href='elijo_sabermas'>-What happened to the others?-</a>   |   <a href='elijo_vacilar'>-I'm sure you deserved it-</a></p>"
  ),
  /*??Si te vuelves a meter con los ingenieros te las ver??s conmigo y mis compa??eros!*/
  elijo_enfadarme2: new undum.SimpleSituation(
    " <p><b>Raerpin:</b> I envy you so much, I wish I could take refuge in my friends but I can't anymore. Unfortunately I am the last gnome left alive. </p>\
    <p><b>" +
      nombre +
      ":</b> <a href='elijo_sabermas'>-What happened to the others?-</a>   |   <a href='elijo_vacilar'>-I'm sure you deserved it-</a></p>"
  ),

  /*??Qu?? paso con los dem??s?*/
  elijo_sabermas: new undum.SimpleSituation(
    " <p><b>Raerpin:</b> Just kidding! All my friends are healthy as hell, they work out at the gym every day. I like innocent people so I won't mind putting up with your stink a little longer.</p>\
    <p><b>" +
      nombre +
      ":</b> <a href='elijo_1'>-You had scared me, I feared for my life for a moment.-</a>   |   <a href='elijo_2'>-I don't think I like you at all....-</a></p>"
  ),
  /*Seguro que os lo merec??ais*/
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
  /*Creo que no me caes del todo bien... // Por un momento hab??a picado*/
  elijo_2: new undum.SimpleSituation(
    " <p><b>Raerpin:</b> I will still warn you that in Arcadia you will encounter various baddies and I will leave it up to you to choose the path you will face. If you reach the end intact, you will recover your computer and you will be able to finish the Agile Development practice on time. ARE YOU READY?</p>\
    <p><b>" +
      nombre +
      ":</b> <a href='elijo_seguir1'>-I was born ready-</a>   |   <a href='cabezon1'>-I'm so scared, I want to go home-</a></p>"
  ),

  /*Nac?? preparado*/
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

  /*Fin del cap??tulo 2*/
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

  /*Elijo No acompa??ar al gnomo*/
  no_acompanar: new undum.SimpleSituation(
    "<p><b>Raerpin:</b> You think you're so smart, don't you? We all need help, look at the amount of help your classmates have given you in each of your internships, so YOU WERE ACCEPTING THEIR HELP!</p>\
  <p>And what will happen if this time I decide to do it alone? I ask him</p>\
  <p><b>Raerpin:</b> You won't last a minute longer...</p>\
  <p><a href='acompanar'>Accompany Raerpin</a> o <a href='cabezon'>not to accompany Raerpin</a>.</p>",
    {
      heading: "I don't trust him, I'd better go",
    }
  ),

  /*Vuelvo a elegir no acompa??ar al gnomo*/
  cabezon1: new undum.SimpleSituation(
    "<p><b>Raerpin:</b> Okay, I make you my new pet, YOU WILL BE A NICE DOG FOR THE REST OF YOUR DAYS!</p>\
  <p>   <b>" +
      nombre +
      ":</b> ????Guau!! ????guau!!</p>\
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

  /*Elecci??n campamento de villanos*/
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
  /*Elecci??n campamento de villanos a la fuerza*/
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

  /*Elecci??n campamento de villanos en sigilo*/
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
  /*Elecci??n pasar por la monta??a*/
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

  /*Comienzo cap??tulo 4*/
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
      heading: "Entro por la parte de atr??s",
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
	<p>After taking a short walk through this area of ??????the castle, I find a somewhat striking room. \
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
  progreso_historia: new undum.IntegerQuality("Progress %:", {
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
  system.setQuality("cuerda", false);

  system.setCharacterText("<p>List of objects that I carry:</p>");
};
