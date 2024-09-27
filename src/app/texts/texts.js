const title = "Sandycosturas";
const email = "Sandrajerez2020@hotmail.com";
const mensajeWhatsApp = encodeURIComponent(
    "¡Hola! Estoy interesado en conocer más sobre los productos de " + title + " y me gustaría obtener más información. ¡Gracias!"
);
const numeroWhatsApp = "+573175135997"; // Incluido el prefijo +57

const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "Sandycosturas se especializa en la confección de cubre lechos y cojines, combinando innovación y calidad en cada pieza. Con nuestro lema 'A cocer y a innovar', nos comprometemos a ofrecer productos que no solo cumplen con tus expectativas, sino que también aportan un toque único a tu hogar.",
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
