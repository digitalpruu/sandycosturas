const title = "SANDY CONFECCIONES";
const email = "Sandrajerez2020@hotmail.com ";
const mensajeWhatsApp = encodeURIComponent(
    "¡Hola! Estoy interesado en conocer más sobre los productos de " + title + " y me gustaría obtener más información. ¡Gracias!"
);
const numeroWhatsApp = "+3175135997"; // Incluido el prefijo +57

const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "Sandy confecciones se especializa en la elaboración de piezas artesanales en resina epóxica, también en confecciónes  de cubre lechos y cojines, combinando innovación y calidad en cada pieza. Nuestro lema es 'Innovacion y Experiencia', lo que refleja nuestro compromiso con la creatividad y la perfección en nuestros productos.\n" +
            "En Sandy confecciones, dedicamos a ofrecer productos que no solo cumplen con tus expectativas, sino que también aportan un toque único a tu hogar. Descubre cómo nuestras confecciones y piezas en resinas pueden hacer la diferencia en tu decoración ,dándole un toque de elegancia y exclusividad."
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email
    },
    footer: {
        slogan: {
            p1: "A cocer y a innovar.", // Slogan proporcionado
            p2: ""
        },
        address: "", // Información no proporcionada
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/278708455335802", // Enlace específico de Facebook
        instagram: "https://www.instagram.com", // Link base ya que no se proporcionó uno específico
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`
    },
};

export default textos;
