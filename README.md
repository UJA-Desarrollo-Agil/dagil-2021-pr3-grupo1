<a name="top"></a>

# Práctica 3 Desarrollo ágil

# Consideraciones antes de comenzar:

**_URL del proyecto en un servidor externo_**: [https://el-misterio-de-arcadia.web.app/](https://el-misterio-de-arcadia.web.app/)

**_Usuario_**: admin

**_Contraseña_**: admin

## Miembros

- Domingo Aguilar, Rocío - _rda00010@red.uajen.es_.
- Hidalgo Lozano, Cristian - _chl00014@red.uajen.es_.
- Martínez Morales, Álvaro - _amm00337@red.uajen.es_.
- Vico Guzmán, Sebastián Alberto - _savg0001@red.uajen.es_.

3º Ingeniería del software - Ingeniería informática.

## Índice

[1. Sprint 0](#sprint0)

- [1.1. Descripción](#descripcion)
- [1.1.1. Título: El misterio de Arcadia](#titulo)
- [1.2. Trello](#trello)
- [1.2.1. Backlog](#backlog)

[2. Sprint 1](#sprint1)

- [2.1. Tarjetas escogidas](#tarjetas1)
- [2.2. Descomposición tarjetas](#descomposicion1)
- [2.3. Sprint Backlog Refinement](#refinemet1)
- [2.4. Sprint Review](#review1)
- [2.5. Sprint Retrospective](#retrospective1)
- [2.6. Sprint Planning e Historias de Usuario del Product Backlog](#restantes1)

[3. Sprint 2](#sprint2)

- [3.1. Tarjetas escogidas](#tarjetas2)
- [3.2. Descomposición tarjetas](#descomposicion2)
- [3.3. Sprint Backlog Refinement](#refinemet2)
- [3.4. Sprint Review](#review2)
- [3.5. Sprint Retrospective](#retrospective2)
- [3.6. Sprint Planning e Historias de Usuario del Product Backlog](#restantes2)

[4. Métricas](#metricas)

- [4.1. Proyecto en su totalidad](#totalidad)
- [4.2. Tabla de velocidades](#velocidades)
- [4.3. Sprint 1](#sprint1)
- [4.4. Sprint 2](#sprint2)

<a name="sprint0"></a>

# 1. Práctica 3 - Sprint 0

<a name="descripcion"></a>

## 1.1. Descripción

<a name="titulo"></a>

### 1.1.1. Título: El misterio de Arcadia.

La historia cuenta las anécdotas de un personaje en primera persona (el usuario introducirá las credenciales de su personaje) que despierta en un mundo de fantasía llamado Arcadia, donde todo es gigantesco.

Su objetivo es encontrar su ordenador para poder terminar la práctica de desarrollo ágil. El ordenador se encontrará al final del trayecto que tiene que recorrer el personaje.
En ese trayecto el personaje se enfrentará a varios villanos. Deberá de elegir los objetos oportunos y dependiendo de los que elija se desarrollará una historia u otra, contando con distintos finales.

<a name="trello"></a>

## 1.2. Trello

**_Enlace al tablero de Trello_**: [https://trello.com/b/jc7s84Ov/pr%C3%A1ctica-3-desarrollo-%C3%A1gil](https://trello.com/b/jc7s84Ov/pr%C3%A1ctica-3-desarrollo-%C3%A1gil)

<a name="backlog"></a>

### 1.2.1. Backlog

![Captura1](https://github.com/UJA-Desarrollo-Agil/dagil-2021-pr3-grupo1/blob/desarrollo/img/cap1.png)

_Captura del tablero de Trello al iniciar la práctica (1/3)_

![Captura2](https://github.com/UJA-Desarrollo-Agil/dagil-2021-pr3-grupo1/blob/desarrollo/img/cap2.png)

_Captura del tablero de Trello al iniciar la práctica (2/3)_

![Captura3](https://github.com/UJA-Desarrollo-Agil/dagil-2021-pr3-grupo1/blob/desarrollo/img/cap3.png)

_Captura del tablero de Trello al iniciar la práctica (3/3)_

![Captura4](https://github.com/UJA-Desarrollo-Agil/dagil-2021-pr3-grupo1/blob/desarrollo/img/cap4.PNG)

_Captura de Telegram al vincular Trello_

![Captura5](https://github.com/UJA-Desarrollo-Agil/dagil-2021-pr3-grupo1/blob/desarrollo/img/cap5.PNG)

_Captura de Telegram al vincular GitHub_

<a name="sprint1"></a>

# 2. Práctica 4 - Sprint 1

Este sprint consiste en la realización del proyecto (Primer incremento de la aplicación usando la metodología Scrum), por lo que comenzamos a trabajar con las tarjetas creadas en el Sprint 0.

<a name="tarjetas1"></a>

## 2.1. Tarjetas escogidas

![Captura6](/img/sprint1-1.png)
![Captura7](/img/sprint1-2.png)

_Capturas de las tarjetas escogidas al comienzo del primer Sprint_

**_Queremos dejar constancia de que en este momento las tarjetas no estaban ordenadas en el Product Backlog porque no eramos conscientes de ello, se ordenaron más adelante como se podrá ver._**

1. **El juego habrá de tener como mínimo 9 situaciones**: Esta tarjeta es fundamental para el desarrollo del proyecto por lo que consideramos que debía estar en el primer Sprint.
2. **El jugador podrá moverse de unas situaciones a otras**: Esta tarjeta es fundamental para el desarrollo del proyecto por lo que consideramos que debía estar en el primer Sprint.
3. **El jugador podrá recoger objetos a lo largo del juego**: Esta tarjeta la consideramos en el primer sprint ya que al trabajar con esto en la práctica 2 estabamos familiarizados y no nos supondría mucho tiempo.
4. **El jugador podrá usar objetos para resolver puzzles:** Hemos considerado realizar esta tarjeta ya que el uso de objetos para resolver ciertas situaciones puede aportar dinamismo al juego y distintos finales.
5. **El jugador podrá usar la acción “mirar detalladamente” (u otra similar) para poder descubrir nuevas cosas en las situaciones que no se le hayan descrito a primera vista:** Esta tarjeta hemos pensado que podía contribuir al proyecto ya que nos da la posibilidad de crear distintas situaciones con una simple acción.
6. **El jugador debe poder saber cuántos puntos lleva en la partida:** Hemos decidido realizar esta tarjeta porque como jugadores pensabamos que era una buena idea saber el porcentaje del juego que habíamos completado.
7. **Se podrá personalizar el juego preguntando el nombre del jugador/jugadora y modificando los textos para que le citen y pregunten personalmente por su nombre**: Esta tarjeta la añadimos porque habiamos trabajado antes con JavaScript por lo que sabiamos que no iba a suponer un problema y se realizaría rapidamente.

<a name="descomposicion1"></a>

## 2.2. Descomposición tarjetas

Descompusimos la primera tarjeta para que cada uno de los miembros del grupo se hiciera cargo en hacer una parte de la historia.
Lo dividimos de la siguiente manera: inicio, desarrollo(1), desarrollo(2) y fin. Para que todos siguiesemos la misma idea de la historia, elegimos el tema de la historia y algunos detalles de cómo se va a desarrollar. Estas notas que tomamos, las dejamos reflejadas en la descripción de cada una de las tarjetas. La idea de hacerlo así fue para que cada uno escribiese lo que se le ocurriera y así, además de sacar más de 9 situaciones, hicimos una historia más pintoresca.
En las siguientes capturas de pantalla, muestro cómo lo descomponemos:

![Captura10](/img/Descomposicion.png)

En la tarjeta 1.1, contamos la situación inicial de cómo se despierta el personaje, qué siente y qué se encuentra.
En las tarjeta 1.2, el personaje se va adentrando a la historia y conoce qué tiene que hacer.
En la tarjeta 1.3, comienza la acción donde el personaje se enfrenta a diferentes peligros.
En la tarjeta 1.4, el personaje llega al final donde encuentra lo que estaba buscando.
<a name="refinemet1"></a>

## 2.3. Sprint Backlog Refinement

El Product Owner planificó un Sprint Backlog Refinement donde agregó diversas tareas nuevas al Product Backlog. Fueron las siguientes:

**Actualización 06-abr-2021**

- Se deberá modificar el CSS del juego original, usando otras fuentes de letra, fondos de pantalla, etc.

- Se posibilitará (con css) una versión “sin distracciones” que no incluya imágenes, ni fondo, ni música.

- En al menos una situación (de las existentes o incluyendo alguna/s nueva/s), se podrá establecer un diálogo con otro personaje del juego (con preguntas y respuestas predefinidas, por supuesto, dado que serán acciones del juego; no se trata de implementar un chatbot). INNEGOCIABLE.

- Cada situación deberá llevar una imagen descriptiva asociada.

Tras asignarle una puntuación tanto al PH como al valor, decidimos realizar las siguiente en este Sprint:

16. **Se deberá modificar el CSS del juego original, usando otras fuentes de letra, fondos de pantalla, etc.**: Añadimos esta tarjeta al Sprint porque consideramos que mejoraría mucho el diseño del proyecto.

17. **En al menos una situación (de las existentes o incluyendo alguna/s nueva/s), se podrá establecer un diálogo con otro personaje del juego**: Esta tarjeta pensamos que haría el proyecto más completo e interesante por lo que también fue elegida para este sprint.

18. **Cada situación deberá llevar una imagen descriptiva asociada**: Añadimos esta tarjeta al Sprint porque consideramos que mejoraría mucho el diseño del proyecto.

**_Queremos dejar constancia de que en este momento las tarjetas ya fueron ordenadas en el Product Backlog como se puede ver._**

![Captura8](/img/Sprint1-5.PNG)

_Captura de pantalla del Product Backlog y del Sprint Backlog tras las modificaciones realizadas en el Product Backlog Refinement (1/2)_

![Captura9](/img/Sprint1-6.PNG)

_Captura de pantalla del Product Backlog y del Sprint Backlog tras las modificaciones realizadas en el Product Backlog Refinement (2/2)_

<a name="review1"></a>

## 2.4. Sprint Review

Al final de este incremento, nos reunimos todo el equipo en una reunión de 1 hora y llegamos a la conclusión de que este sprint ha sido muy productivo, ya que hemos avanzado mucho más de la mitad del proyecto, dejando solo una tarjeta innegociable de todas las que se pedían parfa el siguiente sprint, por lo que consideramos que cumpliremos con los plazos solicitados.
Para el siguiente sprint tenemos pensado realizar la única tarjeta que nos queda de innegociables (**_Si una nueva versión del juego (las entregas en cada sprint) incluye nuevas situaciones, estas deben o bien complicar la misión inicial o bien añadir una nueva misión al juego._**), puesto que es la que mayor valor aporta e ir añadiendo las tarjetas que decidiremos en el proximo Sprint Planning.
No consideramos que haya surgido ningún problema, pese a ser la primera vez que trabajamos juntos.

<a name="retrospective1"></a>

## 2.5. Sprint Retrospective

Al final de este incremento, nos reunimos todo el equipo en una reunión de 1 hora y media y llegamos a las siguientes conclusiones:

- ¿Qué ha ido bien?
  Consideramos que la comunicación ha sido muy buena, nos hemos entendido bien y hemos sabido funcionar en equipo cumpliendo con la metodología scrum.

- ¿Qué mejorar para la próxima?
  El cumplimiento de las daily scrum puesto que varios dias por calendario ha sido imposible coordinarnos, aunque las que hemos hecho han aportado cosas muy buenas al proyecto.

- ¿Qué vamos a hacer en el siguiente sprint?
  Como hemos explicado en la Sprint Review, realizaremos la tarea innegociable que nos resta puesto que es la que mayor valor aporta al proyecto de las restantes. Además, implementaremos nuevas funcionalidades que hagan el proyecto más completo.

<a name="restantes1"></a>

## 2.6. Sprint Planning e Historias de Usuario del Product Backlog

Todas las historias de usuario que propusimos hacer a lo largo de este sprint han sido completadas incluyendo las que añadimos durante el Sprint Backlog Refinement.

![Captura10](/img/sprint1-4.png)

_Captura de pantalla al finalizar el sprint (1/2)_

![Captura11](/img/sprint1-3.png)

_Captura de pantalla al finalizar el sprint (2/2)_

<a name="sprint2"></a>

# 3. Práctica 4 - Sprint 2

Este sprint consiste en la realización del proyecto (Segundo incremento de la aplicación usando la metodología Scrum), por lo que continuamos trabajando con las tarjetas restantes del product backlog.

<a name="tarjetas2"></a>

## 3.1. Tarjetas escogidas

![Captura12](/img/PB_inicial.PNG)

_Captura de las tarjetas escogidas al comienzo del segundo Sprint_

1. **Si una nueva versión del juego (las entregas en cada sprint) incluye nuevas situaciones, estas deben o bien complicar la misión inicial o bien añadir una nueva misión al juego**: Esta tarjeta es necesaria ya que es innegociable, por lo que debemos hacerla en este sprint.
2. **Se creará un sitio web que incluirá una landing page del juego, de modo que el juego esté incrustado en esa landing page (la cual puede dar info sobre los creadores del juego, la asignatura para la que se creó, etc.)**: Puesto que tenemos conocimientos en html y css creemos que no supondrá un gran esfuerzo.
3. **Se subirá el juego a un sitio web disponible on-line (es decir, no un servidor local)**: Queremos investigar sobre este tema, por lo que nos resulta interesante.
4. **Se posibilitará (con css) una versión “sin distracciones” que no incluya imágenes, ni fondo, ni música**: Nos parece una tarea interesante y que no supondrá mucho tiempo.
5. **Se añadirán videos (o enlaces a vídeos) en los que se incluya parte de la historia que necesita para completar el juego y tomar decisiones**: Nos resulta una tarea interesante de investigar.
6. **Se añadirá música de fondo al juego:**: Igual que la tarea anterior, resulta de interés para el equipo investigar sobre este tema.

El día 27-abr-2021 se actualizó y se escogieron las siguientes tarjetas:

![Captura13](/img/Tarjeta13.PNG)

_Captura de las tarjetas escogidas el día 27-abr-2021_

13. **Se establecerá un sistema de Login+contraseña para que los jugadores se puedan dar de alta en nuestro sitio web.**: Esta tarjeta es necesaria para asegurar la seguridad en el acceso al proyecto.

<a name="descomposicion2"></a>

## 3.2. Descomposición tarjetas

Descompusimos la sexta tarjeta para que cada uno de los miembros del grupo se hiciera cargo en modificar para mejorar una parte de la historia.
Lo dividimos de la siguiente manera: inicio, desarrollo(1), desarrollo(2) y fin.
En las siguientes capturas de pantalla, muestro cómo lo descomponemos:

![Captura14](/img/Descomposicion2.PNG)

En la tarjeta 6.1, se añadirán más objetos para el posible equipamiento del personaje.
En las tarjeta 6.2, se añadirán nuevas situaciones al capítulo 1 de la historia.
En la tarjeta 6.3, se alargará el diálogo entre personajes.
En la tarjeta 6.4, se añadirán más situaciones al final de la historia.

También descompusimos la tarjeta 22 para que cada uno realice la traducción de su parte. La dividimos de la siguiente manera:

![Captura15](/img/Descomposicion3.PNG)

En la tarjeta 22.1, se traducirá el capitulo 1.
En las tarjeta 22.2, se traducirá el capitulo 2.
En la tarjeta 22.3, se traducirá el capitulo 3.
En la tarjeta 22.4, se traducirá el capitulo 4.

<a name="refinemet2"></a>

## 3.3. Sprint Backlog Refinement

El Product Owner planificó un Sprint Backlog Refinement donde agregó diversas tareas nuevas al Product Backlog. Fueron las siguientes:

![Captura16](/img/PBR_inicial.PNG)

_Captura de pantalla del Product Backlog tras las modificaciones realizadas en el Product Backlog Refinement_

**Actualización 27-abr-2021**

- El jugador podrá solicitar ayuda al juego y recibirá información que le sirva para entender el juego y lograr llegar al final del mismo.

- La ayuda que aporte el juego será sensible al contexto, es decir, en función de la situación en que esté y/o los objetos que tenga y/o la puntuación que lleve y/o cualquier otro aspecto que deseéis considerar se le aportará una información de ayuda u otra. DEPENDE DE LA ANTERIOR.

- El juego estará disponible español y en otro idioma.

Tras asignarle una puntuación tanto al PH como al valor, decidimos realizar la siguiente en este Sprint:

22. **El juego estará disponible español y en otro idioma.**: Añadimos esta tarjeta al Sprint porque consideramos que mejoraría mucho la accesibilidad a nuestro proyecto.

![Captura17](/img/PBR_seleccionado.PNG)

_Captura de pantalla del Sprint Backlog tras las modificaciones realizadas en el Product Backlog Refinement_

<a name="review2"></a>

## 3.4. Sprint Review

Al final del segundo incremento nos reunimos todo el equipo en una reunión de 1 hora y llegamos a la conclusión de que al igual que el sprint anterior, ha sido muy productivo.
Hemos completado la última tarjeta innegociable que quedaba y prácticamente todas las historias de usuario restantes a excepción de cuatro, que aportan poco valor en comparación con los puntos de historia asignados y que al no disponer de demasiado tiempo hemos decidido no realizar.
Pensamos que hemos hecho un buen trabajo porque el producto final es muy completo.

<a name="retrospective2"></a>

## 3.5. Sprint Retrospective

Al final de este incremento, nos reunimos todo el equipo en una reunión de 1 hora y media y
llegamos a las siguientes conclusiones:

- ¿Qué ha ido bien?
  Al igual que en el sprint anterior la comunicación y el reparto detareas han quedado claras por los integrantes del equipo para cumplir con la metodología Scrum. Además hemos mejorado con el cumplimiento de las daily scrum.

- ¿Qué mejorar para la próxima?
  Aunque hemos mejorado con respecto al anterior sprint las Daily scrum, no han sido diarias por lo que debemos esforzarnos y encontrar un hueco que nos venga bien a todos.

- ¿Qué vamos a hacer en el siguiente sprint?
  En un supuesto siguiente sprint acabaríamos las 4 historias de usuario que nos quedan y las que se añadieran nuevas.

<a name="restantes2"></a>

## 3.6. Sprint Planning e Historias de Usuario del Product Backlog

Todas las historias que propusimos fueron completadas incluyendo las que añadimos durante el Sprint Backlog Refinement.

![Captura18](/img/final.PNG)

_Captura de pantalla final de Trello_

<a name="metricas"></a>

# 4. Métricas

El objetivo de esta parte es la realización del cálculo de métricas asociadas a nuestro proyecto y conocer la velocidad a la que hemos ido desarrollando HU.

<a name="totalidad"></a>

## 4.1. Proyecto en su totalidad

![Captura19](/img/tabla_global.png)

_Tabla del proyecto global._

![Captura20](/img/burndownph.png)

_Gráfica burnUp de los puntos de historia._

![Captura21](/img/burnupph.png)

_Gráfica burnDown de los puntos de historia._

![Captura22](/img/burndownvalor.png)

_Gráfica burnUp de los valores asociados._

![Captura23](/img/burnupvalor.png)

_Gráfica burnDown de los valores asociados._

<a name="velocidades"></a>

## 4.2. Tabla de velocidades

![Captura24](/img/tabla_velocidad.PNG)

_Tabla de velocidades._

<a name="sprint1"></a>

## 4.3. Sprint 1

![Captura25](/img/tablaburndownS1.PNG)

_Tabla de PH por hacer._

![Captura26](/img/burdownS1.PNG)

_Gráfica burnDown de PH por hacer._

![Captura27](/img/tablaburnupS1.PNG)

_Tabla de PH hechos._

![Captura28](/img/burnupS1.PNG)

_Gráfica burnUp de PH hechos._

<a name="sprint2"></a>

## 4.4. Sprint 2

![Captura29](/img/TablaSprint2.png)

_Tabla de PH Sprint 2._

![Captura30](/img/BurndownSprint2.png)

_Gráfica burnDown Sprint 2._

![Captura31](/img/Burn-upSprint2.PNG)

_Gráfica burn-up Sprint 2._







