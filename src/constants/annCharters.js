const normalizarDestino = (destino) => {
  return destino === "AEROPARQUE" ? "Buenos Aires" : destino;
};

export const anuncios_es = {
  1: (vuelo, destino) => `Queridos pasajeros, Como medida de precaución, te pedimos mantener tu cinturón abrochado durante todo el vuelo. A partir de este momento, ya puedes usar tu celular y aparatos electrónicos, pero sólo en modo avión. Te recordamos que está prohibido fumar dentro del avión, incluso cigarrillos electrónicos. Además, no debes manipular los detectores de humo ubicados en los baños, ya que está prohibido por ley. Además, este avión cuenta con 3 baños disponibles para su uso. Te invitamos a que disfrutes y te relajes mientras nos acercamos a tu destino.`,
  2: (vuelo, destino) => `Atención por favor, En algunos minutos comenzará el cruce de la Cordillera de los Andes, por este motivo el capitán mantendrá la señal de cinturones encendida. Para que disfrutes del viaje con tranquilidad y por tu seguridad te pedimos que permanezcas sentado, con el cinturón de seguridad abrochado hasta que la señal se apague. Además, te informamos que mientras la señal de cinturones esté encendida no realizaremos servicio de venta a bordo y no estará permitido el uso de baños.`,
  3: (vuelo, destino) => `Queridos pasajeros, Durante todo nuestro vuelo estaremos cruzando la Cordillera de los Andes, por este motivo el capitán mantendrá la señal de cinturones encendida todo el viaje. Para que todos disfrutemos el vuelo con tranquilidad, te recordamos que deberás permanecer en tu asiento con el cinturón de seguridad abrochado hasta que la señal se apague. Te recordamos que mientras la señal esté encendida no realizaremos servicio de venta a abordo y los baños no podrán ser usados. Está permitido usar equipos electrónicos, pero solo en modo avión. Te invitamos a disfrutar la impresionante vista a la Cordillera de los Andes desde tu asiento.`,
  4: (vuelo, destino) => `Queridos pasajeros, Toda persona mayor de 18 años que ingrese a Chile debe completar la Declaración Jurada del Servicio Agrícola y Ganadero sag e indicar si traen productos o subproductos de origen animal y/o vegetal. Al llegar al aeropuerto podrán realizar la Declaración Jurada sag desde su dispositivo móvil, en sagingresoachile.cl o escaneando el Código QR disponible en el área de retiro de equipajes, también pueden completarla en papel, documento que estará disponible en el mismo sector. Ante cualquier duda deben consultar con un inspector SAG.`,
};

export const anuncios_en = {
  1: (horario, vuelo) => `Dear passengers, As a safety measure, please keep your seatbelts fastened during the entire flight. You may now use your phone and electronic devices but only in airplane mode. We remind you that smoking is not allowed onboard, and this including electronic cigarettes. Also, tampering smoke detectors is against the law. Also, there are three lavatories available on this aircraft. We invite you to enjoy and relax as we approach your destination.`,
  2: (vuelo, destino) => `Dear passengers, In a few minutes we will be flying over the Andes Mountains and therefore the captain will keep the seatbelt sign on. To ensure a safe flight for everyone, we ask you to remain seated with your seatbelt fastened until the seatbelt sign is turned off. Additionally, while the seatbelt sign is illuminated, on board sales service will not be available, and the use of lavatories will not be permitted.`,
  3: (vuelo, destino) => `Dear passengers, During the whole flight we will be flying over the Andes Mountain and therefore the captain will keep the fasten seatbelt sign on. To ensure a safe flight for everyone, we ask you to remain seated with your seatbelt fastened until the seatbelt sign is turned off. While the seatbelt sign is on there will be no on board sales and the use of lavatories will not be permitted. You may use your electronic devices but only on airplane mode. We invite you to enjoy the breathtaking views of the Andes from the comfort of your seat.`,
  4: (vuelo, destino) => `Dear passengers, All persons over the age of 18 who enter Chile must complete the Agricultural and Livestock Service sag affidavit declaring if you carry any animal or vegetable products. Upon arrival at the airport you will be able to get the sag form from your mobile device, at sagingresoachile.cl or by scanning the QR Code available in the baggage claim area, you can also complete a paper declaration, that will be available in the same area. If you have any question, please ask a SAG inspector.`,
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
  1: 'Sin cruce Cordillera',
  2: 'Con cruce de Cordillera',
  3: 'Con cruce de Cordillera MDZ',
  4: 'Declaración Jurada SAG',
  
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
