const products = [
    {
        id: 1,
        name: "Osito De crochet",
        description: "Figuras premium con texturas realistas; el obsequio perfecto para eventos y relaciones públicas",
        price: "$1.00",
        image: "assets/images/osito.jpeg",
        tag: "Corporativo",
        tagClass: "badge-corporate"
    },
    {
        id: 2,
        name: "Corazón con flores",
        description: "Corazón de chocolate decorado a mano con rosas de azúcar y un toque dorado. El equilibrio perfecto entre la intensidad del cacao y la suavidad del diseño artesanal.",
        price: "$2.00",
        image: "assets/images/corazon.jpeg",
        tag: "Nuevo",
        tagClass: "badge-new"
    },
    {
        id: 3,
        name: "Tacones",
        description: "Una pieza de diseño comestible que combina la elegancia del calzado con la intensidad del mejor cacao.",
        price: "$3.50 c/u",
        image: "assets/images/tacones.jpeg",
        tag: "Novedad",
        tagClass: "badge-novedad"
    },
    {
        id: 4,
        name: "Flowers",
        description: "Grandes flores de chocolate en tonos metalizados y pasteles, diseñadas para elevar regalos corporativos y celebraciones especiales con distinción y sabor.",
        price: "$1.50 c/u",
        image: "assets/images/flowers.jpeg",
        tag: "Bestseller",
        tagClass: "badge-bestseller"
    },
    {
        id: 5,
        name: "Pink Roses",
        description: "Elegantes rosas de chocolate en tonos rosados, protegidos en cajas de acetato transparente con lazos de satén y tarjetas de agradecimiento.",
        price: "$1.50",
        image: "assets/images/pink-roses.jpeg",
        tag: "Popular",
        tagClass: "badge-popular"
    },
    {
        id: 6,
        name: "Set de maquillaje",
        description: "Set de maquillaje comestible con detalles dorados de chocolate en tonos pastel y metalicos",
        price: "$5.00",
        image: "assets/images/makeup1.png",
        image2: "assets/images/makeup2.png", // Two images
        tag: "Nuevo",
        tagClass: "badge-new"
    },
    {
        id: 7,
        name: "Detalles Florales",
        description: "Detalle de flores para eventos corporativos, con un diseño elegante y sofisticado que combina la belleza de las flores con la riqueza del chocolate.",
        price: "$2.50 c/u",
        image: "assets/images/flores-corp.png",
        tag: "Corporativo",
        tagClass: "badge-corporate"
    },
    {
        id: 8,
        name: "Set de maquillaje + Tacones",
        description: "Colección de chocolates artesanales en forma de cosméticos y accesorios, terminados con un sofisticado brillo dorado comestible. El equilibrio perfecto entre moda y sabor.",
        price: "$15.00",
        image: "assets/images/makeup-tacones.jpeg",
        tag: "Popular",
        tagClass: "badge-popular"
    },
    {
        id: 9,
        name: "Souvenirs white",
        description: "Souvenirs corporativos de chocolate blanco en figuritas. Un detalle elegante para tus eventos. ¡Reserva los tuyos!",
        price: "$0.80 c/u",
        image: "assets/images/souvenir-white1.jpg",
        tag: "Corporativo",
        tagClass: "badge-corporate"
    },
    {
        id: 10,
        name: "Souvenirs white",
        description: "¡Dale un toque dulce a tu próximo evento! Figuras de chocolate blanco en forma de secadores de pelo, el souvenir perfecto.",
        price: "$0.80 c/u",
        image: "assets/images/souvenir-white2.png",
        tag: "Popular",
        tagClass: "badge-popular"
    },
    {
        id: 11,
        name: "Souvenirs white",
        description: "Variedad de mini figuras de chocolate ideales para eventos o detalles sociales. Elige entre diseños como estos y personalizados.",
        price: "$0.80 c/u",
        image: "assets/images/souvenir-white3.png",
        tag: "Popular",
        tagClass: "badge-popular"
    },
    {
        id: 12,
        name: "Souvenirs Black",
        description: "¡Dale un toque dulce a tu próximo evento! Figuras de chocolate en forma de secadores de pelo, el souvenir perfecto.",
        price: "$0.80 c/u",
        image: "assets/images/souvenir-black.png",
        tag: "Star",
        tagClass: "badge-star"
    },
    {
        id: 13,
        name: "Choco details",
        description: "Mini botones de chocolate artesanal, ideales como regalos o detalle a ese ser querido en ocasiones especiales.",
        price: "$2.00",
        image: "assets/images/choco-details.png",
        tag: "Nuevo",
        tagClass: "badge-new"
    },
    {
        id: 14,
        name: "Accesorio",
        description: "Figuras de chocolate artesanal, diseñadas como accesorios de belleza o detalles de lujo. Estas piezas son el toque dulce y elegante perfecto para personalizar.",
        price: "$1.75",
        image: "assets/images/accesorio.png",
        tag: "Popular",
        tagClass: "badge-popular"
    },
    {
        id: 15,
        name: "Mini set de maquillaje",
        description: "Celebra la belleza con nuestra exclusiva colección de figuras artesanales. Desde delicados accesorios de salón hasta elegantes detalles.",
        price: "$2.50 (caja colores) / $2.00 (celofán)",
        image: "assets/images/mini-makeup.png",
        tag: "Mini",
        tagClass: "badge-mini"
    },
    {
        id: 16,
        name: "Set Big de maquillaje",
        description: "Desde sofisticados secadores y brochas hasta elegantes sets con detalles dorados, cada pieza es una obra de arte comestible diseñada para deslumbrar.",
        price: "$5.00",
        image: "assets/images/big-makeup.png",
        tag: "Star",
        tagClass: "badge-star"
    },
    // Jarros
    {
        id: 17,
        name: "Personalizables",
        description: "¡Tu diseño favorito en un jarro único! Personalizamos cada detalle para que tengas una pieza exclusiva en tus manos. No te quedes sin el tuyo, ¡pide el tuyo ahora mismo!",
        price: "$8.00",
        image: "assets/images/jarro1.png",
        tag: "Limitados",
        tagClass: "badge-limited"
    },
    {
        id: 18,
        name: "Personalizables",
        description: "El detalle ideal sí existe. Crea un jarro totalmente personalizado para ti o para esa persona especial. Diseños únicos y alta calidad. ¡Haz tu pedido hoy y sorprende a todos!",
        price: "$8.00",
        image: "assets/images/jarro2.png",
        tag: "Limitados",
        tagClass: "badge-limited"
    },
    {
        id: 19,
        name: "Personalizables",
        description: "Dale identidad a tus mañanas. Personalizamos jarros con el logo de tu empresa o el diseño que más te guste. Calidad garantizada en cada impresión. ¡Escríbenos y solicita los tuyos ya!",
        price: "$8.00",
        image: "assets/images/jarro3.png",
        tag: "Limitados",
        tagClass: "badge-limited"
    },
    {
        id: 20,
        name: "Personalizables",
        description: "¿Tienes una idea? Nosotros la ponemos en un jarro. Personalización total con colores vibrantes y acabados premium. Dale vida a tu escritorio, ¡pídelo ahora antes de que se agoten!",
        price: "$8.00",
        image: "assets/images/jarro4.png",
        tag: "Limitados",
        tagClass: "badge-limited"
    }
];

// Reusable WhatsApp Message formatter
const getWhatsAppUrl = (productName) => {
    const phoneNumber = "593996328009";
    const text = encodeURIComponent(`Hola, me interesa ordenar el producto: ${productName} del catálogo de la campaña del Día de la Mujer.`);
    return `https://wa.me/${phoneNumber}?text=${text}`;
};
