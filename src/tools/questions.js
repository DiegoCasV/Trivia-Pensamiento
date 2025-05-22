const PREGUNTAS = [
    // Nivel: Baja - Entretenimiento
    { tipo: 1, nivel: 0, pregunta: "¿Quién es el personaje principal de Los Simpson?", opciones: ["Bart", "Homero", "Lisa", "Moe"], respuestaCorrecta: "Homero", nivelL: "baja", tema: "entretenimiento" },
    { tipo: 1, nivel: 0, pregunta: "¿Cómo se llama el mago creado por J.K. Rowling?", opciones: ["Frodo", "Harry Potter", "Percy Jackson", "Merlin"], respuestaCorrecta: "Harry Potter", nivelL: "baja", tema: "entretenimiento" },
    { tipo: 1, nivel: 0, pregunta: "¿Qué superhéroe es conocido como el Hombre Araña?", opciones: ["Superman", "Spider-Man", "Iron Man", "Hulk"], respuestaCorrecta: "Spider-Man", nivelL: "baja", tema: "entretenimiento" },
    { tipo: 1, nivel: 0, pregunta: "¿En qué película aparece Buzz Lightyear?", opciones: ["Wall-E", "Monsters Inc.", "Toy Story", "Cars"], respuestaCorrecta: "Toy Story", nivelL: "baja", tema: "entretenimiento" },
    { tipo: 1, nivel: 0, pregunta: "¿Quién canta la canción 'Shape of You'?", opciones: ["Bruno Mars", "Ed Sheeran", "Justin Bieber", "Sam Smith"], respuestaCorrecta: "Ed Sheeran", nivelL: "baja", tema: "entretenimiento" },

    // Nivel: Baja - Deportes
    { tipo: 3, nivel: 0, pregunta: "¿Cuántos jugadores hay en un equipo de fútbol en el campo?", opciones: ["9", "10", "11", "12"], respuestaCorrecta: "11", nivelL: "baja", tema: "deportes" },
    { tipo: 3, nivel: 0, pregunta: "¿Qué deporte practica Lionel Messi?", opciones: ["Fútbol", "Tenis", "Baloncesto", "Atletismo"], respuestaCorrecta: "Fútbol", nivelL: "baja", tema: "deportes" },
    { tipo: 3, nivel: 0, pregunta: "¿Qué país ganó el Mundial 2018?", opciones: ["Alemania", "Brasil", "Francia", "Argentina"], respuestaCorrecta: "Francia", nivelL: "baja", tema: "deportes" },
    { tipo: 3, nivel: 0, pregunta: "¿Qué deporte se juega con raqueta y red?", opciones: ["Tenis", "Rugby", "Golf", "Cricket"], respuestaCorrecta: "Tenis", nivelL: "baja", tema: "deportes" },
    { tipo: 3, nivel: 0, pregunta: "¿En qué deporte se usa un bate y una pelota?", opciones: ["Golf", "Hockey", "Béisbol", "Voleibol"], respuestaCorrecta: "Béisbol", nivelL: "baja", tema: "deportes" },

    // Nivel: Baja - Historia
    { tipo: 4, nivel: 0, pregunta: "¿Quién fue el primer presidente de EE.UU.?", opciones: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"], respuestaCorrecta: "George Washington", nivelL: "baja", tema: "historia" },
    { tipo: 4, nivel: 0, pregunta: "¿En qué año empezó la Segunda Guerra Mundial?", opciones: ["1935", "1939", "1945", "1929"], respuestaCorrecta: "1939", nivelL: "baja", tema: "historia" },
    { tipo: 4, nivel: 0, pregunta: "¿Qué civilización construyó las pirámides?", opciones: ["Mayas", "Romanos", "Egipcios", "Incas"], respuestaCorrecta: "Egipcios", nivelL: "baja", tema: "historia" },
    { tipo: 4, nivel: 0, pregunta: "¿Quién descubrió América en 1492?", opciones: ["Hernán Cortés", "Cristóbal Colón", "Marco Polo", "Americo Vespucio"], respuestaCorrecta: "Cristóbal Colón", nivelL: "baja", tema: "historia" },
    { tipo: 4, nivel: 0, pregunta: "¿Qué imperio gobernaba Roma en la antigüedad?", opciones: ["Bizantino", "Egipcio", "Romano", "Persa"], respuestaCorrecta: "Romano", nivelL: "baja", tema: "historia" },

    // Nivel: Baja - Ciencia
    { tipo: 5, nivel: 0, pregunta: "¿Cuál es el planeta rojo?", opciones: ["Júpiter", "Venus", "Marte", "Saturno"], respuestaCorrecta: "Marte", nivelL: "baja", tema: "ciencia" },
    { tipo: 5, nivel: 0, pregunta: "¿Qué órgano bombea sangre en el cuerpo?", opciones: ["Pulmón", "Corazón", "Hígado", "Riñón"], respuestaCorrecta: "Corazón", nivelL: "baja", tema: "ciencia" },
    { tipo: 5, nivel: 0, pregunta: "¿Qué gas respiramos para vivir?", opciones: ["Hidrógeno", "Oxígeno", "Nitrógeno", "Dióxido de carbono"], respuestaCorrecta: "Oxígeno", nivelL: "baja", tema: "ciencia" },
    { tipo: 5, nivel: 0, pregunta: "¿Cuántos sentidos tiene el ser humano?", opciones: ["4", "5", "6", "3"], respuestaCorrecta: "5", nivelL: "baja", tema: "ciencia" },
    { tipo: 5, nivel: 0, pregunta: "¿Qué líquido necesita el cuerpo para vivir?", opciones: ["Leche", "Jugo", "Agua", "Café"], respuestaCorrecta: "Agua", nivelL: "baja", tema: "ciencia" },

    // Nivel: Baja - Geografía
    { tipo: 2, nivel: 0, pregunta: "¿Dónde está Brasil?", opciones: ["Asia", "Europa", "América del Sur", "África"], respuestaCorrecta: "América del Sur", nivelL: "baja", tema: "geografía" },
    { tipo: 2, nivel: 0, pregunta: "¿Cuál es el río más largo del mundo?", opciones: ["Yangtsé", "Amazonas", "Nilo", "Misisipi"], respuestaCorrecta: "Amazonas", nivelL: "baja", tema: "geografía" },
    { tipo: 2, nivel: 0, pregunta: "¿Qué país tiene forma de bota?", opciones: ["Italia", "Chile", "India", "México"], respuestaCorrecta: "Italia", nivelL: "baja", tema: "geografía" },
    { tipo: 2, nivel: 0, pregunta: "¿Dónde está la Torre Eiffel?", opciones: ["Londres", "Berlín", "París", "Roma"], respuestaCorrecta: "París", nivelL: "baja", tema: "geografía" },
    { tipo: 2, nivel: 0, pregunta: "¿Cuál es la capital de Colombia?", opciones: ["Medellín", "Cali", "Bogotá", "Cartagena"], respuestaCorrecta: "Bogotá", nivelL: "baja", tema: "geografía" },

    // Nivel: Media - Entretenimiento
    { tipo: 1, nivel: 1, pregunta: "¿Qué actor interpretó a Jack en Titanic?", opciones: ["Tom Cruise", "Leonardo DiCaprio", "Brad Pitt", "Matt Damon"], respuestaCorrecta: "Leonardo DiCaprio", nivelL: "media", tema: "entretenimiento" },
    { tipo: 1, nivel: 1, pregunta: "¿Cuál es el verdadero nombre de Shakira?", opciones: ["Shakira Ripoll", "Isabel Mebarak", "Isabel Ripoll", "Shakira Mebarak"], respuestaCorrecta: "Isabel Mebarak", nivelL: "media", tema: "entretenimiento" },
    { tipo: 1, nivel: 1, pregunta: "¿En qué año se estrenó la primera película de Star Wars?", opciones: ["1977", "1980", "1975", "1983"], respuestaCorrecta: "1977", nivelL: "media", tema: "entretenimiento" },
    { tipo: 1, nivel: 1, pregunta: "¿Qué serie cuenta la historia de un profesor de química que fabrica drogas?", opciones: ["Narcos", "Breaking Bad", "Ozark", "The Sopranos"], respuestaCorrecta: "Breaking Bad", nivelL: "media", tema: "entretenimiento" },
    { tipo: 1, nivel: 1, pregunta: "¿Quién ganó el Oscar a mejor actor en 2020?", opciones: ["Joaquin Phoenix", "Brad Pitt", "Leonardo DiCaprio", "Antonio Banderas"], respuestaCorrecta: "Joaquin Phoenix", nivelL: "media", tema: "entretenimiento" },

    // Nivel: Media - Deportes
    { tipo: 3, nivel: 1, pregunta: "¿En qué país se originaron los Juegos Olímpicos?", opciones: ["Italia", "Grecia", "Egipto", "Francia"], respuestaCorrecta: "Grecia", nivelL: "media", tema: "deportes" },
    { tipo: 3, nivel: 1, pregunta: "¿Cuántos puntos vale un try en rugby?", opciones: ["3", "4", "5", "6"], respuestaCorrecta: "5", nivelL: "media", tema: "deportes" },
    { tipo: 3, nivel: 1, pregunta: "¿Quién tiene el récord mundial de los 100 metros planos?", opciones: ["Usain Bolt", "Carl Lewis", "Justin Gatlin", "Asafa Powell"], respuestaCorrecta: "Usain Bolt", nivelL: "media", tema: "deportes" },
    { tipo: 3, nivel: 1, pregunta: "¿En qué año ganó España su primera Copa Mundial de fútbol?", opciones: ["2006", "2010", "2014", "1998"], respuestaCorrecta: "2010", nivelL: "media", tema: "deportes" },
    { tipo: 3, nivel: 1, pregunta: "¿Cuál es el deporte nacional de Japón?", opciones: ["Sumo", "Judo", "Kárate", "Béisbol"], respuestaCorrecta: "Sumo", nivelL: "media", tema: "deportes" },

    // Nivel: Media - Historia
    { tipo: 4, nivel: 1, pregunta: "¿Quién fue el líder de la Revolución Cubana?", opciones: ["Fidel Castro", "Che Guevara", "Hugo Chávez", "Simón Bolívar"], respuestaCorrecta: "Fidel Castro", nivelL: "media", tema: "historia" },
    { tipo: 4, nivel: 1, pregunta: "¿En qué año cayó el muro de Berlín?", opciones: ["1987", "1989", "1991", "1993"], respuestaCorrecta: "1989", nivelL: "media", tema: "historia" },
    { tipo: 4, nivel: 1, pregunta: "¿Cuál fue la causa principal de la Primera Guerra Mundial?", opciones: ["Imperialismo", "Asesinato del archiduque Francisco Fernando", "Revolución Rusa", "Crisis económica"], respuestaCorrecta: "Asesinato del archiduque Francisco Fernando", nivelL: "media", tema: "historia" },
    { tipo: 4, nivel: 1, pregunta: "¿Quién escribió 'El Príncipe'?", opciones: ["Maquiavelo", "Plató", "Aristóteles", "Cicerón"], respuestaCorrecta: "Maquiavelo", nivelL: "media", tema: "historia" },
    { tipo: 4, nivel: 1, pregunta: "¿Qué imperio fue conocido como el 'Imperio del Sol'?", opciones: ["Azteca", "Inca", "Maya", "Egipcio"], respuestaCorrecta: "Inca", nivelL: "media", tema: "historia" },

    // Nivel: Media - Ciencia
    { tipo: 5, nivel: 1, pregunta: "¿Cuál es la fórmula química del agua?", opciones: ["H2O", "CO2", "O2", "NaCl"], respuestaCorrecta: "H2O", nivelL: "media", tema: "ciencia" },
    { tipo: 5, nivel: 1, pregunta: "¿Qué científico propuso la teoría de la relatividad?", opciones: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"], respuestaCorrecta: "Albert Einstein", nivelL: "media", tema: "ciencia" },
    { tipo: 5, nivel: 1, pregunta: "¿Cuál es la unidad básica de la vida?", opciones: ["Célula", "Átomo", "Molécula", "Tejido"], respuestaCorrecta: "Célula", nivelL: "media", tema: "ciencia" },
    { tipo: 5, nivel: 1, pregunta: "¿Qué planeta es el más grande del sistema solar?", opciones: ["Saturno", "Júpiter", "Neptuno", "Urano"], respuestaCorrecta: "Júpiter", nivelL: "media", tema: "ciencia" },
    { tipo: 5, nivel: 1, pregunta: "¿Qué tipo de energía produce una central hidroeléctrica?", opciones: ["Eólica", "Solar", "Nuclear", "Eléctrica"], respuestaCorrecta: "Eléctrica", nivelL: "media", tema: "ciencia" },

    // Nivel: Media - Geografía
    { tipo: 2, nivel: 1, pregunta: "¿Cuál es la capital de Australia?", opciones: ["Sídney", "Melbourne", "Canberra", "Brisbane"], respuestaCorrecta: "Canberra", nivelL: "media", tema: "geografía" },
    { tipo: 2, nivel: 1, pregunta: "¿Qué cordillera atraviesa América del Sur?", opciones: ["Los Alpes", "Los Andes", "Los Himalayas", "Los Pirineos"], respuestaCorrecta: "Los Andes", nivelL: "media", tema: "geografía" },
    { tipo: 2, nivel: 1, pregunta: "¿Cuál es el desierto más grande del mundo?", opciones: ["Sahara", "Gobi", "Kalahari", "Antártico"], respuestaCorrecta: "Antártico", nivelL: "media", tema: "geografía" },
    { tipo: 2, nivel: 1, pregunta: "¿En qué país está la ciudad de Dubrovnik?", opciones: ["Croacia", "Serbia", "Eslovenia", "Bosnia"], respuestaCorrecta: "Croacia", nivelL: "media", tema: "geografía" },
    { tipo: 2, nivel: 1, pregunta: "¿Cuál es el país con más islas en el mundo?", opciones: ["Indonesia", "Filipinas", "Suecia", "Canadá"], respuestaCorrecta: "Suecia", nivelL: "media", tema: "geografía" },

    // Nivel: Alta - Entretenimiento
    { tipo: 1, nivel: 2, pregunta: "¿Quién dirigió la película '2001: Odisea del espacio'?", opciones: ["Stanley Kubrick", "Steven Spielberg", "Ridley Scott", "James Cameron"], respuestaCorrecta: "Stanley Kubrick", nivelL: "alta", tema: "entretenimiento" },
    { tipo: 1, nivel: 2, pregunta: "¿Cuál es el nombre real del autor de 'Cien años de soledad'?", opciones: ["Mario Vargas Llosa", "Gabriel García Márquez", "Pablo Neruda", "Julio Cortázar"], respuestaCorrecta: "Gabriel García Márquez", nivelL: "alta", tema: "entretenimiento" },
    { tipo: 1, nivel: 2, pregunta: "¿En qué año se fundó la plataforma Netflix?", opciones: ["1997", "2000", "2007", "2010"], respuestaCorrecta: "1997", nivelL: "alta", tema: "entretenimiento" },
    { tipo: 1, nivel: 2, pregunta: "¿Quién compuso la ópera 'La flauta mágica'?", opciones: ["Beethoven", "Mozart", "Verdi", "Bach"], respuestaCorrecta: "Mozart", nivelL: "alta", tema: "entretenimiento" },
    { tipo: 1, nivel: 2, pregunta: "¿Cuál es el nombre de la novela que inspiró la serie 'The Witcher'?", opciones: ["El señor de los anillos", "The Witcher Saga", "Canción de hielo y fuego", "Harry Potter"], respuestaCorrecta: "The Witcher Saga", nivelL: "alta", tema: "entretenimiento" },

    // Nivel: Alta - Deportes
    { tipo: 3, nivel: 2, pregunta: "¿Quién tiene más títulos de Grand Slam en tenis masculino?", opciones: ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Pete Sampras"], respuestaCorrecta: "Novak Djokovic", nivelL: "alta", tema: "deportes" },
    { tipo: 3, nivel: 2, pregunta: "¿En qué año se disputó la primera Copa Mundial de Fútbol?", opciones: ["1928", "1930", "1934", "1942"], respuestaCorrecta: "1930", nivelL: "alta", tema: "deportes" },
    { tipo: 3, nivel: 2, pregunta: "¿Quién es el máximo goleador en la historia de la NBA?", opciones: ["Michael Jordan", "LeBron James", "Kareem Abdul-Jabbar", "Kobe Bryant"], respuestaCorrecta: "Kareem Abdul-Jabbar", nivelL: "alta", tema: "deportes" },
    { tipo: 3, nivel: 2, pregunta: "¿Cuál es la distancia oficial de una maratón?", opciones: ["40 km", "42.195 km", "44 km", "50 km"], respuestaCorrecta: "42.195 km", nivelL: "alta", tema: "deportes" },
    { tipo: 3, nivel: 2, pregunta: "¿Qué país ha ganado más Copas América?", opciones: ["Argentina", "Brasil", "Uruguay", "Chile"], respuestaCorrecta: "Uruguay", nivelL: "alta", tema: "deportes" },

    // Nivel: Alta - Historia
    { tipo: 4, nivel: 2, pregunta: "¿Quién fue el primer emperador romano?", opciones: ["Julio César", "Augusto", "Nerón", "Trajano"], respuestaCorrecta: "Augusto", nivelL: "alta", tema: "historia" },
    { tipo: 4, nivel: 2, pregunta: "¿En qué año se firmó la Declaración de Independencia de los Estados Unidos?", opciones: ["1775", "1776", "1781", "1787"], respuestaCorrecta: "1776", nivelL: "alta", tema: "historia" },
    { tipo: 4, nivel: 2, pregunta: "¿Quién fue el principal líder de la Revolución Francesa?", opciones: ["Napoleón Bonaparte", "Maximilien Robespierre", "Luis XVI", "Carlos X"], respuestaCorrecta: "Maximilien Robespierre", nivelL: "alta", tema: "historia" },
    { tipo: 4, nivel: 2, pregunta: "¿Qué imperio gobernó en Mesopotamia?", opciones: ["Asirio", "Egipcio", "Inca", "Griego"], respuestaCorrecta: "Asirio", nivelL: "alta", tema: "historia" },
    { tipo: 4, nivel: 2, pregunta: "¿Qué tratado puso fin a la Primera Guerra Mundial?", opciones: ["Tratado de Versalles", "Tratado de París", "Tratado de Roma", "Tratado de Utrecht"], respuestaCorrecta: "Tratado de Versalles", nivelL: "alta", tema: "historia" },

    // Nivel: Alta - Ciencia
    { tipo: 5, nivel: 2, pregunta: "¿Cuál es la partícula subatómica que tiene carga positiva?", opciones: ["Electrón", "Protón", "Neutrón", "Quark"], respuestaCorrecta: "Protón", nivelL: "alta", tema: "ciencia" },
    { tipo: 5, nivel: 2, pregunta: "¿Quién propuso la teoría de la evolución por selección natural?", opciones: ["Charles Darwin", "Gregor Mendel", "Louis Pasteur", "Isaac Newton"], respuestaCorrecta: "Charles Darwin", nivelL: "alta", tema: "ciencia" },
    { tipo: 5, nivel: 2, pregunta: "¿Cuál es el elemento más abundante en la corteza terrestre?", opciones: ["Hierro", "Oxígeno", "Silicio", "Aluminio"], respuestaCorrecta: "Oxígeno", nivelL: "alta", tema: "ciencia" },
    { tipo: 5, nivel: 2, pregunta: "¿Qué órgano es responsable de producir insulina?", opciones: ["Hígado", "Páncreas", "Riñón", "Glándula tiroides"], respuestaCorrecta: "Páncreas", nivelL: "alta", tema: "ciencia" },
    { tipo: 5, nivel: 2, pregunta: "¿Cuál es la velocidad de la luz en el vacío?", opciones: ["300,000 km/s", "150,000 km/s", "299,792 km/s", "1,000,000 km/s"], respuestaCorrecta: "299,792 km/s", nivelL: "alta", tema: "ciencia" },

    // Nivel: Alta - Geografía
    { tipo: 2, nivel: 2, pregunta: "¿Cuál es el país más grande del mundo en superficie?", opciones: ["Canadá", "China", "Estados Unidos", "Rusia"], respuestaCorrecta: "Rusia", nivelL: "alta", tema: "geografía" },
    { tipo: 2, nivel: 2, pregunta: "¿Cuál es la capital de Mongolia?", opciones: ["Ulán Bator", "Astana", "Tashkent", "Bishkek"], respuestaCorrecta: "Ulán Bator", nivelL: "alta", tema: "geografía" },
    { tipo: 2, nivel: 2, pregunta: "¿En qué continente se encuentra el río Congo?", opciones: ["África", "Asia", "Sudamérica", "Oceanía"], respuestaCorrecta: "África", nivelL: "alta", tema: "geografía" },
    { tipo: 2, nivel: 2, pregunta: "¿Cuál es la montaña más alta de América?", opciones: ["Aconcagua", "Denali", "Mont Blanc", "Pico Bolívar"], respuestaCorrecta: "Aconcagua", nivelL: "alta", tema: "geografía" },
    { tipo: 2, nivel: 2, pregunta: "¿Qué país tiene más fronteras terrestres?", opciones: ["China", "Rusia", "Brasil", "Estados Unidos"], respuestaCorrecta: "China", nivelL: "alta", tema: "geografía" }
];

export function obtenerPreguntaAleatoria(tipo, nivel) {
    const tipoN = Number(tipo);
    const preguntasFiltradas = PREGUNTAS.filter(p => p.tipo === tipoN && p.nivel === nivel);
    if (preguntasFiltradas.length === 0) return null;
    const indiceAleatorio = Math.floor(Math.random() * preguntasFiltradas.length);
    //console.log(preguntasFiltradas[indiceAleatorio]);
    return preguntasFiltradas[indiceAleatorio];
}