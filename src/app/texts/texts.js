const title = "Sandycosturas";
const email = ""; // Información no proporcionada
const mensajeWhatsApp = encodeURIComponent(
    "¡Hola! Estoy muy interesado en tus productos de " + title + " y me gustaría recibir más información sobre ellos. Espero poder hablar pronto contigo para aclarar algunas dudas. ¡Gracias!"
);
const numeroWhatsApp = ""; // Información no proporcionada

const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "Sandycosturas se especializa en la confección de cubre lechos y cojines, combinando innovación y calidad en cada pieza. Nuestro lema es 'A cocer y a innovar', lo que refleja nuestro compromiso con la creatividad y la perfección en nuestros productos.",
        description2: "En Sandycosturas, nos dedicamos a ofrecer productos que no solo cumplen con tus expectativas, sino que también aportan un toque único a tu hogar. Descubre cómo nuestras costuras pueden hacer la diferencia en tu decoración."
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email
    },
    footer: {
        slogan: {
            p1: "A cocer y a innovar",
            p2: ""
        },
        address: "", // Información no proporcionada
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`
    },
};

export default textos;
