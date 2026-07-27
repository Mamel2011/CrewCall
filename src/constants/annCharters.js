const normalizarDestino = (destino) => {
  return destino === "AEROPARQUE" ? "Buenos Aires" : destino;
};

export const anuncios_es = {
  1: (horario, vuelo, destino, puerta) => {
    if(horario >= "06:00" && horario < "12:00") {
      return `Buenos días, les damos la más cordial bienvenida a todos nuestros pasajeros al vuelo SKY ${vuelo} con destino a ${destino}, por puerta ${puerta}. Estamos felices de acompañarlos en este viaje, y agradecemos la preferencia de volar con nosotros. El embarque se realizará por números de asiento. En primer lugar, invitamos a embarcar a los pasajeros que requieran alguna asistencia especial y aquellos que estén viajando con niños de hasta 6 años.`;
    } else if(horario >= "12:00" && horario < "20:00") {
      return `Buenas tardes, les damos la más cordial bienvenida a todos nuestros pasajeros al vuelo SKY ${vuelo} con destino a ${destino}, por puerta ${puerta}. Estamos felices de acompañarlos en este viaje, y agradecemos la preferencia de volar con nosotros. El embarque se realizará por números de asiento. En primer lugar, invitamos a embarcar a los pasajeros que requieran alguna asistencia especial y aquellos que estén viajando con niños de hasta 6 años.`;
    } else {
      return `Buenas noches, les damos la más cordial bienvenida a todos nuestros pasajeros al vuelo SKY ${vuelo} con destino a ${destino}, por puerta ${puerta}. Estamos felices de acompañarlos en este viaje, y agradecemos la preferencia de volar con nosotros. El embarque se realizará por números de asiento. En primer lugar, invitamos a embarcar a los pasajeros que requieran alguna asistencia especial y aquellos que estén viajando con niños de hasta 6 años.`;
    }
  },
  2: (vuelo, destino, puerta) => `Continuaremos nuestro embarque de vuelo SKY ${vuelo} con destino a ${destino} por puerta ${puerta}. Invitamos a embarcar a los pasajeros ubicados entre los asientos de las filas 16 a 31`,
  3: (vuelo, destino, puerta) => `Continuaremos nuestro embarque de vuelo SKY ${vuelo} con destino a ${destino} por puerta ${puerta}. Invitamos a embarcar a los pasajeros ubicados entre los asientos de las filas 20 a 40`,
  4: (vuelo, destino, puerta) => `Finalizando los procesos de embarque del vuelo SKY ${vuelo} con destino a ${destino} por puerta ${puerta}. Invitamos a embarcar a los pasajeros ubicados entre los asientos de las filas 1 a 15`,
  5: (vuelo, destino, puerta) => `Finalizando los procesos de embarque del vuelo SKY ${vuelo} con destino a ${destino} por puerta ${puerta}. Invitamos a embarcar a los pasajeros ubicados entre los asientos de las filas 1 a 19`,
  6: (vuelo, destino, puerta) => `Llamado final de embarque para pasajeros del vuelo SKY ${vuelo} con destino a ${destino}. Los invitamos a embarcar en este momento por la puerta ${puerta}. Avión listo a partir`,
};

export const anuncios_en = {
  1: (horario, vuelo, destino, puerta) => {
    destino = normalizarDestino(destino);
    if(horario >= "06:00" && horario < "12:00") {
      return `Good morning, a warm welcome to all passengers traveling on SKY flight ${vuelo} to ${normalizarDestino(destino)}, boarding at Gate ${puerta}. We are delighted to have you on board today and sincerely appreciate your preference for flying with us. Boarding will be conducted by seat rows. We would first like to invite passengers requiring special assistance and those traveling with children up to 6 years old.`;
    } else if(horario >= "12:00" && horario < "20:00") {
      return `Good afternoon, a warm welcome to all passengers traveling on SKY flight ${vuelo} to ${normalizarDestino(destino)}, boarding at Gate ${puerta}. We are delighted to have you on board today and sincerely appreciate your preference for flying with us. Boarding will be conducted by seat rows. We would first like to invite passengers requiring special assistance and those traveling with children up to 6 years old.`;
    } else {
      return `Good evening, a warm welcome to all passengers traveling on SKY flight ${vuelo} to ${normalizarDestino(destino)}, boarding at Gate ${puerta}. We are delighted to have you on board today and sincerely appreciate your preference for flying with us. Boarding will be conducted by seat rows. We would first like to invite passengers requiring special assistance and those traveling with children up to 6 years old.`;
    }
  },
  2: (vuelo, destino, puerta) => `We will now continue boarding SKY Flight ${vuelo} to ${normalizarDestino(destino)} through Gate ${puerta}. We invite passengers seated in rows 16 to 31 to proceed with boarding.`,
  3: (vuelo, destino, puerta) => `We will now continue boarding SKY Flight ${vuelo} to ${normalizarDestino(destino)} through Gate ${puerta}. We invite passengers seated in rows 20 to 40 to proceed with boarding.`,
  4: (vuelo, destino, puerta) => `As we complete the boarding process for SKY Flight ${vuelo} to ${normalizarDestino(destino)} through Gate ${puerta}, we invite passengers seated in rows 1 to 15, to proceed with boarding.`,
  5: (vuelo, destino, puerta) => `As we complete the boarding process for SKY Flight ${vuelo} to ${normalizarDestino(destino)} through Gate ${puerta}, we invite passengers seated in rows 1 to 19, to proceed with boarding.`,
  6: (vuelo, destino, puerta) => `Final boarding call for passengers traveling on SKY flight ${vuelo} to the city of ${normalizarDestino(destino)}. We invite you to board at this time through Gate ${puerta}. Aircraft ready for departure`,
};

export const anuncios_pt = {
  1: (horario, vuelo, destino, puerta) => {
    if(horario >= "06:00" && horario < "12:00") {
      return `Bom dia, Sejam muito bem-vindos ao voo SKY ${vuelo} com destino à cidade de ${destino}, com embarque pelo portão ${puerta}. Estamos muito felizes em acompanhá-los nesta viagem e agradecemos a preferência por voar conosco. O embarque será realizado por fileiras de assentos. Convidamos, inicialmente, os passageiros que necessitam de assistência especial e aqueles que viajam com crianças de até 6 anos.`;
    } else if(horario >= "12:00" && horario < "20:00") {
      return `Boa tarde, Sejam muito bem-vindos ao voo SKY ${vuelo} com destino à cidade de ${destino}, com embarque pelo portão ${puerta}. Estamos muito felizes em acompanhá-los nesta viagem e agradecemos a preferência por voar conosco. O embarque será realizado por fileiras de assentos. Convidamos, inicialmente, os passageiros que necessitam de assistência especial e aqueles que viajam com crianças de até 6 anos.`;
    } else {
      return `Boa noite, Sejam muito bem-vindos ao voo SKY ${vuelo} com destino à cidade de ${destino}, com embarque pelo portão ${puerta}. Estamos muito felizes em acompanhá-los nesta viagem e agradecemos a preferência por voar conosco. O embarque será realizado por fileiras de assentos. Convidamos, inicialmente, os passageiros que necessitam de assistência especial e aqueles que viajam com crianças de até 6 anos.`;
    }
  },
  2: (vuelo, destino, puerta) => `Daremos continuidade ao embarque do voo SKY ${vuelo} com destino à cidade de ${destino}, pelo portão ${puerta}. Convidamos os passageiros acomodados nas fileiras 16 a 31`,
  3: (vuelo, destino, puerta) => `Daremos continuidade ao embarque do voo SKY ${vuelo} com destino à cidade de ${destino}, pelo portão ${puerta}. Convidamos os passageiros acomodados nas fileiras 20 a 40`,
  4: (vuelo, destino, puerta) => `Finalizando o processo de embarque do voo SKY ${vuelo} com destino à cidade de ${destino}, pelo portão ${puerta}. Convidamos os passageiros acomodados nas fileiras 1 a 15`,
  5: (vuelo, destino, puerta) => `Finalizando o processo de embarque do voo SKY ${vuelo} com destino à cidade de ${destino}, pelo portão ${puerta}. Convidamos os passageiros acomodados nas fileiras 1 a 19`,
  6: (vuelo, destino, puerta) => `Última chamada para embarque dos passageiros do voo SKY ${vuelo} com destino à cidade de ${destino}. Convidamos os passageiros a embarcarem neste momento pelo portão ${puerta}. A aeronave está pronta para partir`,
};

export const announcementTitles = {
  1: 'Bienvenida - inicio embarque',
  2: 'Embarque fila 16 - 31. A320',
  3: 'Embarque fila 20 - 40. A321',
  4: 'Embarque fila 1 - 15. A320',
  5: 'Embarque fila 1 - 19. A321',
  6: 'Llamado final',
};

export const getFrase = (lang, id, vuelo, destino, puerta, horario) => {
  const anuncios = { es: anuncios_es, en: anuncios_en, pt: anuncios_pt };
  if (!anuncios[lang] || !anuncios[lang][id]) return '';
  const anuncio = anuncios[lang][id];
  if (anuncio.length === 4) {
    return anuncio(horario, vuelo, destino, puerta);
  }
  return anuncio(vuelo, destino, puerta);
};
