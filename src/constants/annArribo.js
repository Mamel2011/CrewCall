const normalizarOrigen = (origins) => {
  return origins === "AEROPARQUE" ? "Buenos Aires" : origins;
};

export const anuncios_es = {
  1: (horario, vuelo, origins, cinta) => {
    if(horario >= "06:00" && horario < "12:00") {
      return `Buenos días, SKY anuncia la llegada de su vuelo ${vuelo} Procedente de la ciudad de ${origins}. Muchas gracias por su atención.`;
    } else if(horario >= "12:00" && horario < "20:00") {
      return `Buenas tardes, SKY anuncia la llegada de su vuelo ${vuelo} Procedente de la ciudad de ${origins}. Muchas gracias por su atención.`;
    } else {
      return `Buenas noches, SKY anuncia la llegada de su vuelo ${vuelo} Procedente de la ciudad de ${origins}. Muchas gracias por su atención.`;
    }
  },
  2: (horario, vuelo, origins, destination, cinta) => `Le damos la más cordial bienvenida a todos los pasajeros de SKY que han arribado en el vuelo ${vuelo} procedente de la ciudad de ${origins}, así como a quienes continúan en conexión. Les informamos que su equipaje estará disponible en la cinta de equipajes número ${cinta}. Para evitar posibles intercambios, les solicitamos verificar el comprobante de equipaje entregado en la ciudad de origen antes de retirar sus pertenencias, y no guiarse únicamente por el color o el tipo de maleta. Agradecemos su atención y la preferencia por volar con SKY. Les damos una cordial bienvenida a la ciudad de ${destination}`,
};

export const anuncios_en = {
  1: (horario, vuelo, origins, cinta) => {
    origins = normalizarOrigen(origins);
    if(horario >= "06:00" && horario < "12:00") {
      return `Good morning, SKY is pleased to announce the arrival of Flight ${vuelo} from ${origins}. Thank you very much for your attention.`;
    } else if(horario >= "12:00" && horario < "20:00") {
      return `Good afternoon, SKY is pleased to announce the arrival of Flight ${vuelo} from ${origins}. Thank you very much for your attention.`;
    } else {
      return `Good evening, SKY is pleased to announce the arrival of Flight ${vuelo} from ${origins}. Thank you very much for your attention.`;
    }
  },
  2: (horario, vuelo, origins, destination, cinta) => `We would like to extend a warm welcome to all SKY passengers arriving on Flight ${vuelo} from ${normalizarOrigen}, as well as to those continuing on connecting flights. Please be advised that your baggage will be available for collection at Baggage Carousel Number ${cinta}. To avoid any baggage mix-ups, we kindly ask you to verify the baggage claim tag issued at your departure airport before collecting your luggage and not rely solely on the color or appearance of your suitcase. Thank you for your attention and for choosing to fly with SKY. We warmly welcome you to the city of ${destination}.`,
};

export const anuncios_pt = {
  1: (horario, vuelo, origins, cinta) => {
    if(horario >= "06:00" && horario < "12:00") {
      return `Bom dia, A SKY anuncia a chegada do voo ${vuelo}, procedente da cidade de ${origins}. Muito obrigado pela atenção.`;
    } else if(horario >= "12:00" && horario < "20:00") {
      return `Boa tarde, A SKY anuncia a chegada do voo ${vuelo}, procedente da cidade de ${origins}. Muito obrigado pela atenção.`;
    } else {
      return `Boa noite, A SKY anuncia a chegada do voo ${vuelo}, procedente da cidade de ${origins}. Muito obrigado pela atenção.`;
    }
  },
  2: (horario, vuelo, origins, destination, cinta) => `Sejam muito bem-vindos todos os passageiros da SKY que chegaram no voo ${vuelo}, procedente da cidade de ${origins}, bem como aqueles que seguem em conexão. Informamos que sua bagagem estará disponível para retirada na esteira de bagagens numero ${cinta}. Para evitar possíveis trocas de bagagem, solicitamos que verifiquem a etiqueta de bagagem entregue no aeroporto de origem antes de retirar seus pertences, não se guiando apenas pela cor ou pelo modelo da mala. Agradecemos a atenção e a preferência por voar com a SKY. Desejamos a todos uma cordial boas-vindas à cidade de ${destination}

  }.`,
  
};

export const announcementTitles = {
  1: 'Arribo',
  2: 'Retiro de Maletas',
};

export const getFrase = (lang, id, horario, vuelo, origins, destination, cinta) => {
  const anuncios = { es: anuncios_es, en: anuncios_en, pt: anuncios_pt };
  if (!anuncios[lang] || !anuncios[lang][id]) return '';
  const anuncio = anuncios[lang][id];
  if (anuncio.length === 4) {
    return anuncio(horario, vuelo, origins, destination, cinta);
  }
  return anuncio(horario, vuelo, origins, destination, cinta);
};
