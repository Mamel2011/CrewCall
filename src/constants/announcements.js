const normalizarDestino = (destino) => {
  return destino === "AEROPARQUE" ? "Buenos Aires" : destino;
};

export const anuncios_es = {
  1: (vuelo, destino) => `Su atención por favor. A continuación, entregaremos las instrucciones de seguridad de este avión.`,
  2: (vuelo, destino) => `Durante el vuelo, les pedimos tener tu cinturón de seguridad abrochado y visible, especialmente cuando la señal se encuentre encendida. Para abrocharlo debes introducir la hebilla metálica dentro del seguro y tirar el extremo de la cinta para ajustarlo. Para desabrocharlo, solo debes levantar la parte superior de la hebilla y separar los extremos.`,
  3: (vuelo, destino) => `Este Airbus A 3 20 neo cuenta con 8 salidas de emergencia señaladas con pictogramas de evacuación a lo largo de la cabina. Por favor, revisa la salida más cercana a tu asiento, esta podría estar detrás de ti. Hay 2 puertas en la parte delantera, 4 ventanillas sobre las alas y 2 puertas en la parte posterior. Para llegar a ellas puedes seguir las señales luminosas y franjas en el piso. Además, cada salida cuenta con un tobogán. Te recordamos que las salidas de emergencia y primera fila deben estar libres de equipaje de mano.`,
  4: (vuelo, destino) => `Este Airbus A 3 21 neo cuenta con 10 salidas de emergencia señaladas con pictogramas de evacuación a lo largo de la cabina. Por favor, revisa la salida más cercana a tu asiento, esta podría estar detrás de ti. Hay 2 puertas en la parte delantera, 4 ventanillas sobre las alas, 2 puertas en el sector central y 2 puertas en la parte posterior. Para llegar a ellas puedes seguir las señales luminosas y franjas en el piso. Además, cada salida cuenta con un tobogán. Te recordamos que las salidas de emergencia y primera fila deben estar libres de equipaje de mano.`,
  5: (vuelo, destino) => `Si la cabina pierde presión, desde el panel sobre su asiento caerán automáticamente 4 máscaras de oxígeno. Para activarlas debes de tirar una de ellas hacia ti, acomodarla sobre tu nariz y boca, ajustar las cintas elásticas y respirar normalmente. Si llevas puesta una mascarilla sanitaria primero deberás retirarla y luego colocarte tu máscara de oxígeno. Es importante que primero asegures tu propia máscara antes de ayudar a otros pasajeros.`,
  6: (vuelo, destino) => `El chaleco salvavidas se encuentra debajo del asiento. Sólo cuando la tripulación lo indique, debes sacarlo de la bolsa y pasarlo sobre la cabeza. Luego, debes poner la cinta alrededor de la cintura, abrocharla en el seguro de la parte delantera y ajustarlo. Al salir del avión, debes tirar con fuerza las aletas rojas para inflarloautomáticamente. También puedes inflarlo soplando las boquillas. El chaleco salvavidas tiene una luz que se activa cuando entra en contacto con el agua. Recuerda no inflarlo dentro del avión.`,
  7: (vuelo, destino) => `Para mayor información, revisa la tarjeta de seguridad ubicada frente a ti, en el bolsillo del asiento delantero. Recuerda que no debes sacar estas tarjetas del avión.`,
  8: (vuelo, destino) => `Queridos pasajeros, estamos a punto de comenzar nuestro viaje y pronto despegaremos. Para un vuelo seguro y cómodo, por favor, asegure su mesa, abróchese el cinturón de seguridad, enderece el respaldo, coloque todo su equipaje de mano debajo del asiento delantero. En nombre de SKY y esta tripulación, esperamos que se relajen y disfruten de este vuelo`,
  9: (vuelo, destino) => `Queridos pasajeros, Estamos a punto de comenzar nuestro viaje y pronto despegaremos. Para un vuelo seguro y cómodo, por favor, abra las persianas de las ventanillas, asegure su bandeja, abróchese el cinturón de seguridad, enderece el respaldo, coloque todo su equipaje de mano debajo del asiento de adelante y desenchufe todos los cables de los puertos USB. En nombre de SKY y esta tripulación, esperamos que se relajen y disfruten de este vuelo`,
  10: (vuelo, destino) => `Por motivos de seguridad bajaremos la intensidad de las luces de cabina, en el panel superior encontrarán una luz de lectura.`,
};

export const anuncios_en = {
  1: (horario, vuelo) => `Attention please. now, we will share the safety instructions.`,
  2: (vuelo, destino) => `Keep your seatbelt visibly fastened during the whole flight, especially when the seatbelt sign is illuminated. To fasten your seatbelt, insert the metal tip into the buckle and tighten the strap. To unfasten, simply lift the top of the buckle.`,
  3: (vuelo, destino) => `This Airbus a 3 20 neo has 8 emergency exits clearly marked with green symbols. Please locate the nearest exit to your seat, which may be behind you. There are 2 doors at the front, 4 exits over the wings, and 2 at the rear. Illuminated signs and floor light strips will guide you to the exits. All of them are equipped with a slide. Remember emergency exits and first row must be clear of all hand luggage.`,
  4: (vuelo, destino) => `This Airbus a 3 21 neo has 10 emergency exits clearly marked with green symbols. Please locate the exit nearest to your seat. Remember the closest exit may be behind your seat. There are 2 doors at the front, 4 exits over the wings; 2 doors in the middle and 2 doors at the rear of the plane. Illuminated signs and floor light strips will guide you to the exits. All exits are equipped with a slide. Please remember emergency exits and first row must be clear of all hand luggage.`,
  5: (vuelo, destino) => `If the cabin loses pressure, 4 oxygen masks will automatically drop from panel above your seat. To activate them, pull the mask, place it over your nose and mouth, adjust the elastic straps, and breathe normally. If you are wearing a face mask, you must first remove it and then put on your oxygen mask. It is important that you first secure your own mask before assisting other passengers.`,
  6: (vuelo, destino) => `Your life vest is located under your seat. If necessary, and only when instructed by the crew, remove it from the bag and place it over your head. Wrap the strap around your waist, secure the buckle into the fitting in front of the vest and adjust it. As you leave the airplane, pull on the red tab to inflate the vest. It can also be inflated by blowing into the tube. The life vest has a light that activates in contact with water. Never inflate it the vest inside the airplane.`,
  7: (vuelo, destino) => `For additional information, check the safety card located in the seatback pocket in front of you. Remember not to remove the safety card from the aircraft.`,
  8: (vuelo, destino) => `Dear passengers, We're about to begin our journey and will soon take off. To have a safe and comfortable flight, please secure your tray table, fasten your seatbelt, and straighten your seatback, place all carry-on baggage under the seat in front of you. On behalf of SKY and this crew, we hope you relax and enjoy this flight`,
  9: (vuelo, destino) => `Dear passengers, We're about to begin our journey and will soon take off. To have a safe and comfortable flight, please open the Windows shades, secure your tray table, fasten your seatbelt, and straighten your seatback, place all carry-on baggage under the seat in front of you and keep all cables unplugged from the USB ports. On behalf of SKY and this crew, we hope you relax and enjoy this flight`,
  10: (vuelo, destino) => `For safety reasons, we will dim the cabin lights. You will find a reading light in the overhead panel.`,
};
/*
export const anuncios_pt = {
  1: (horario, vuelo, destino, puerta) => {
    if(horario >= "06:00" && horario < "12:00") {
      return `Bom dia, damos as boas-vindas aos nossos passageiros SKY do voo ${vuelo} com destino a ${destino}. Nossa equipe já se encontra disponível no portão ${puerta} para apoiá-los e atender qualquer necessidade antes do início do embarque. Pedimos gentilmente que permaneçam sentados até o início do processo, que está programado para começar em aproximadamente 20 minutos. Muito obrigado pela atenção e preferência.`;
    } else if(horario >= "12:00" && horario < "20:00") {
      return `Boa tarde, damos as boas-vindas aos nossos passageiros SKY do voo ${vuelo} com destino a ${destino}. Nossa equipe já se encontra disponível no portão ${puerta} para apoiá-los e atender qualquer necessidade antes do início do embarque. Pedimos gentilmente que permaneçam sentados até o início do processo, que está programado para começar em aproximadamente 20 minutos. Muito obrigado pela atenção e preferência.`;
    } else {
      return `Boa noite, damos as boas-vindas aos nossos passageiros SKY do voo ${vuelo} com destino a ${destino}. Nossa equipe já se encontra disponível no portão ${puerta} para apoiá-los e atender qualquer necessidade antes do início do embarque. Pedimos gentilmente que permaneçam sentados até o início do processo, que está programado para começar em aproximadamente 20 minutos. Muito obrigado pela atenção e preferência.`;
    }
  },
  2: (vuelo, destino, puerta) => `Atenção, por favor, passageiros do voo SKY ${vuelo} com destino a ${destino}. Convidamos os passageiros dos grupos 3 e 4 a se dirigirem ao portão ${puerta} exclusivamente para a medição de bagagem. Lembramos que sua tarifa inclui um item pessoal, como mochila ou bolsa, que deverá ser acomodado sob o assento da frente durante o voo. Qualquer bagagem adicional ou que exceda as medidas permitidas deverá ser etiquetada e enviada ao porão da aeronave, sendo aplicada a cobrança correspondente no portão de embarque. Agradecemos sua compreensão e colaboração para mantermos um processo de embarque ágil e organizado. Muito obrigado pela atenção.`,
  3: (vuelo, destino, puerta) => `A SKY dá as boas-vindas ao embarque do nosso voo SKY ${vuelo} com destino à cidade de ${destino} pelo portão de embarque ${puerta}. Neste momento, convidamos exclusivamente os passageiros que necessitam de assistência especial durante o voo, assim como aqueles que viajam com crianças de até 6 anos de idade. Nossa equipe está disponível para apoiá-los e acompanhá-los durante o processo de embarque. Muito obrigado pela atenção e preferência.`,
  4: (vuelo, destino, puerta) => `Continuaremos nosso embarque do voo SKY ${vuelo} com destino a ${destino} pelo portão número ${puerta}. Neste momento, convidamos para embarque os nossos passageiros preferenciais do Grupo 1, sky plus ouro e platina, Tarifa max, max flex.`,
  5: (vuelo, destino, puerta) => `Dando continuidade ao embarque do voo SKY ${vuelo} com destino a ${destino} pelo portão número ${puerta}. Convidamos agora os passageiros do Grupo Número 2 para embarcar. Se você não pertence a este grupo, solicitamos gentilmente que permaneça em seu lugar até que seu grupo seja anunciado.`,
  6: (vuelo, destino, puerta) => `Dando continuidade ao embarque do voo SKY ${vuelo} com destino a ${destino} pelo portão número ${puerta}. Convidamos agora os passageiros do Grupo Número 3 para embarcar. Lembramos que a bagagem de mão incluída em sua tarifa deve cumprir as medidas e a quantidade de peças permitidas. Toda bagagem que exceder essas condições deverá ser paga como serviço adicional antes do embarque.`,
  7: (vuelo, destino, puerta) => `Finalizando o processo de embarque do voo SKY ${vuelo} com destino a ${destino} pelo portão número ${puerta}, convidamos agora os passageiros do Grupo Número 4 para embarcar. Muito obrigado pela sua atenção e colaboração.`,
  8: (vuelo, destino, puerta) => `Última chamada de embarque para os passageiros do voo SKY ${vuelo} com destino à cidade de ${destino}. Convidamos os nossos últimos passageiros para embarcar neste momento pelo portão número ${puerta}. Aeronave pronta para partida.`,
};*/

const anuncios_pt = {};

export const announcementTitles = {
  1: 'Anuncio General',
  2: 'Cinturón de seguridad',
  3: 'Salidas A320NEO',
  4: 'Salidas A321NEO',
  5: 'Máscaras de Oxígeno',
  6: 'Chalecos Salvavidas',
  7: 'Tarjeta de Seguridad',
  8: 'Cabina Libre SKU',
  9: 'Cabina Libre SKX',
  10: 'Cabina Oscura',
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
