const products = [
    {
      "nombre": "Cámara de seguridad interior HD",
      "id": 1,
      "categoria": "Seguridad",
      "precio": 120,
      "marca": "Logitech",
      "descripcion": "Cámara de vigilancia inalámbrica con visión nocturna y detección de movimiento.",
      "imagen": "https://res.cloudinary.com/dphwu61we/image/upload/v1718597177/iveco_krzuno.webp"
    },
    {
      "nombre": "Cámara de vigilancia exterior 4K",
      "id": 2,
      "categoria": "Seguridad",
      "precio": 220,
      "marca": "Blink",
      "descripcion": "Cámara de seguridad resistente a la intemperie con grabación HD y alerta por móvil.",
      "imagen": "https://res.cloudinary.com/dphwu61we/image/upload/v1718597177/iveco_krzuno.webp"
    },
    {
      "nombre": "Cámara IP WiFi para interiores",
      "id": 3,
      "categoria": "Seguridad",
      "precio": 90,
      "marca": "TP-Link",
      "descripcion": "Cámara IP para interiores con audio bidireccional y fácil instalación.",
      "imagen": "https://res.cloudinary.com/dphwu61we/image/upload/v1718597177/iveco_krzuno.webp"
    },
    {
      "nombre": "Laptop Ultrabook Pro",
      "id": 4,
      "categoria": "Electrónica",
      "precio": 1200,
      "marca": "HP",
      "descripcion": "Una computadora portátil de alta calidad para trabajo y entretenimiento.",
      "imagen": "https://res.cloudinary.com/dphwu61we/image/upload/v1718597177/iveco_krzuno.webp"
    },
    {
      "nombre": "Auriculares Bluetooth ANC",
      "id": 5,
      "categoria": "Audio",
      "precio": 150,
      "marca": "Bose",
      "descripcion": "Auriculares inalámbricos con cancelación de ruido y larga duración de batería.",
      "imagen": "https://res.cloudinary.com/dphwu61we/image/upload/v1718597177/iveco_krzuno.webp"
    },
    {
      "nombre": "Smartwatch Serie 5",
      "id": 6,
      "categoria": "Accesorios",
      "precio": 300,
      "marca": "Garmin",
      "descripcion": "Reloj inteligente con monitoreo de salud y notificaciones en tiempo real.",
      "imagen": "https://res.cloudinary.com/dphwu61we/image/upload/v1718597177/iveco_krzuno.webp"
    },
    {
      "nombre": "Tablet Pro 10.5",
      "id": 7,
      "categoria": "Electrónica",
      "precio": 350,
      "marca": "Lenovo",
      "descripcion": "Tablet de alto rendimiento ideal para el trabajo y el entretenimiento.",
      "imagen": "https://res.cloudinary.com/dphwu61we/image/upload/v1718597177/iveco_krzuno.webp"
    },
    {
      "nombre": "Cámara de seguridad interior Full HD",
      "id": 8,
      "categoria": "Seguridad",
      "precio": 130,
      "marca": "Logitech",
      "descripcion": "Cámara de vigilancia inalámbrica con visión nocturna avanzada y detección de movimiento.",
      "imagen": "https://res.cloudinary.com/dphwu61we/image/upload/v1718597177/iveco_krzuno.webp"
    },
    {
      "nombre": "Cámara de vigilancia exterior 1080p",
      "id": 9,
      "categoria": "Seguridad",
      "precio": 210,
      "marca": "Blink",
      "descripcion": "Cámara de seguridad resistente a la intemperie con grabación en HD y alertas móviles.",
      "imagen": "https://res.cloudinary.com/dphwu61we/image/upload/v1718597177/iveco_krzuno.webp"
    },
    {
      "nombre": "Cámara IP WiFi con seguimiento automático",
      "id": 10,
      "categoria": "Seguridad",
      "precio": 100,
      "marca": "TP-Link",
      "descripcion": "Cámara IP para interiores con seguimiento automático y audio bidireccional.",
      "imagen": "https://res.cloudinary.com/dphwu61we/image/upload/v1718597177/iveco_krzuno.webp"
    },
    {
      "nombre": "Laptop Ultrabook Plus",
      "id": 11,
      "categoria": "Electrónica",
      "precio": 1250,
      "marca": "HP",
      "descripcion": "Una computadora portátil avanzada para tareas profesionales y entretenimiento.",
      "imagen": "https://res.cloudinary.com/dphwu61we/image/upload/v1718597177/iveco_krzuno.webp"
    },
    {
      "nombre": "Auriculares Bluetooth con ANC mejorado",
      "id": 12,
      "categoria": "Audio",
      "precio": 160,
      "marca": "Bose",
      "descripcion": "Auriculares inalámbricos con cancelación de ruido mejorada y mayor duración de batería.",
      "imagen": "https://res.cloudinary.com/dphwu61we/image/upload/v1718597177/iveco_krzuno.webp"
    },
    {
      "nombre": "Smartwatch Serie 6",
      "id": 13,
      "categoria": "Accesorios",
      "precio": 320,
      "marca": "Garmin",
      "descripcion": "Reloj inteligente con funciones avanzadas de monitoreo de salud y notificaciones en tiempo real.",
      "imagen": "https://res.cloudinary.com/dphwu61we/image/upload/v1718597177/iveco_krzuno.webp"
    },
    {
      "nombre": "Tablet Pro 11",
      "id": 14,
      "categoria": "Electrónica",
      "precio": 360,
      "marca": "Lenovo",
      "descripcion": "Tablet de alto rendimiento con pantalla más grande, ideal para el trabajo y el entretenimiento.",
      "imagen": "https://res.cloudinary.com/dphwu61we/image/upload/v1718597177/iveco_krzuno.webp"
    },
    {
      "nombre": "Cámara de seguridad interior 2K",
      "id": 15,
      "categoria": "Seguridad",
      "precio": 140,
      "marca": "Logitech",
      "descripcion": "Cámara de vigilancia inalámbrica con resolución 2K y detección de movimiento avanzada.",
      "imagen": "https://res.cloudinary.com/dphwu61we/image/upload/v1718597177/iveco_krzuno.webp"
    },
    {
      "nombre": "Cámara de vigilancia exterior 8K",
      "id": 16,
      "categoria": "Seguridad",
      "precio": 230,
      "marca": "Blink",
      "descripcion": "Cámara de seguridad resistente a la intemperie con grabación en 8K y alertas móviles en tiempo real.",
      "imagen": "https://res.cloudinary.com/dphwu61we/image/upload/v1718597177/iveco_krzuno.webp"
    },
    {
      "nombre": "Cámara IP WiFi con visión panorámica",
      "id": 17,
      "categoria": "Seguridad",
      "precio": 95,
      "marca": "TP-Link",
      "descripcion": "Cámara IP para interiores con visión panorámica y audio bidireccional.",
      "imagen": "https://res.cloudinary.com/dphwu61we/image/upload/v1718597177/iveco_krzuno.webp"
    },
    {
      "nombre": "Laptop Ultrabook X",
      "id": 18,
      "categoria": "Electrónica",
      "precio": 1180,
      "marca": "HP",
      "descripcion": "Computadora portátil ultraligera y potente para trabajo y entretenimiento.",
      "imagen": "https://res.cloudinary.com/dphwu61we/image/upload/v1718597177/iveco_krzuno.webp"
    },
    {
      "nombre": "Smartphone Galaxy S21",
      "id": 19,
      "categoria": "Telefonía",
      "precio": 999,
      "marca": "Samsung",
      "descripcion": "Teléfono inteligente con pantalla AMOLED y cámara de alta resolución.",
      "imagen": "https://res.cloudinary.com/dphwu61we/image/upload/v1718597177/iveco_krzuno.webp"
    },
    {
      "nombre": "Teclado Mecánico RGB",
      "id": 20,
      "categoria": "Computación",
      "precio": 150,
      "marca": "Corsair",
      "descripcion": "Teclado mecánico con retroiluminación RGB y teclas programables.",
      "imagen": "https://res.cloudinary.com/dphwu61we/image/upload/v1718597177/iveco_krzuno.webp"
    },
    {
      "nombre": "Smart TV 55 pulgadas",
      "id": 21,
      "categoria": "Electrónica",
      "precio": 700,
      "marca": "Sony",
      "descripcion": "Televisor inteligente con resolución 4K y acceso a aplicaciones de streaming.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/SmartTV.webp"
    },
    {
      "nombre": "Impresora Multifunción",
      "id": 22,
      "categoria": "Oficina",
      "precio": 250,
      "marca": "Canon",
      "descripcion": "Impresora todo en uno con función de escaneo y copiado.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/ImpresoraMultifuncion.webp"
    },
    {
      "nombre": "Altavoz Inteligente",
      "id": 23,
      "categoria": "Audio",
      "precio": 100,
      "marca": "Amazon",
      "descripcion": "Altavoz con asistente de voz integrado y control por comandos.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/AltavozInteligente.webp"
    },
    {
      "nombre": "Router WiFi 6",
      "id": 24,
      "categoria": "Redes",
      "precio": 180,
      "marca": "Netgear",
      "descripcion": "Router de última generación con alta velocidad y gran cobertura.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/RouterWiFi6.webp"
    },
    {
      "nombre": "Monitor de Actividad",
      "id": 25,
      "categoria": "Accesorios",
      "precio": 60,
      "marca": "Xiaomi",
      "descripcion": "Banda inteligente para monitoreo de actividad física y salud.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/MonitorActividad.webp"
    },
    {
      "nombre": "Consola de Videojuegos",
      "id": 26,
      "categoria": "Juegos",
      "precio": 500,
      "marca": "Sony",
      "descripcion": "Consola de última generación con gráficos en 4K y almacenamiento SSD.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/ConsolaVideojuegos.webp"
    },
    {
      "nombre": "Cámara Réflex Digital",
      "id": 27,
      "categoria": "Fotografía",
      "precio": 800,
      "marca": "Nikon",
      "descripcion": "Cámara digital con lente intercambiable y alta resolución.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/CamaraReflexDigital.webp"
    },
    {
      "nombre": "Lentes de Realidad Virtual",
      "id": 28,
      "categoria": "Electrónica",
      "precio": 350,
      "marca": "Oculus",
      "descripcion": "Gafas de realidad virtual con controladores de movimiento y juegos incluidos.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/LentesRealidadVirtual.webp"
    },
    {
      "nombre": "Proyector 1080p",
      "id": 29,
      "categoria": "Electrónica",
      "precio": 450,
      "marca": "Epson",
      "descripcion": "Proyector de alta definición con múltiples puertos de conexión.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/Proyector1080p.webp"
    },
    {
      "nombre": "Disco Duro Externo 2TB",
      "id": 30,
      "categoria": "Almacenamiento",
      "precio": 100,
      "marca": "Seagate",
      "descripcion": "Disco duro externo con gran capacidad de almacenamiento y conexión USB 3.0.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/DiscoDuroExterno.webp"
    },
    {
      "nombre": "Mouse Gamer RGB",
      "id": 31,
      "categoria": "Computación",
      "precio": 70,
      "marca": "Razer",
      "descripcion": "Ratón gaming con iluminación RGB y alta precisión.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/MouseGamerRGB.webp"
    },
    {
      "nombre": "Auriculares Gaming",
      "id": 32,
      "categoria": "Audio",
      "precio": 90,
      "marca": "HyperX",
      "descripcion": "Auriculares con micrófono para gaming y sonido envolvente.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/AuricularesGaming.webp"
    },
    {
      "nombre": "Tablet para Niños",
      "id": 33,
      "categoria": "Electrónica",
      "precio": 150,
      "marca": "Amazon",
      "descripcion": "Tablet resistente con contenido educativo y control parental.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/TabletNinos.webp"
    },
    {
      "nombre": "Smartwatch Deportivo",
      "id": 34,
      "categoria": "Accesorios",
      "precio": 200,
      "marca": "Fitbit",
      "descripcion": "Reloj inteligente para seguimiento de actividad física y salud.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/SmartwatchDeportivo.webp"
    },
    {
      "nombre": "Reproductor Blu-ray 4K",
      "id": 35,
      "categoria": "Electrónica",
      "precio": 180,
      "marca": "Sony",
      "descripcion": "Reproductor de Blu-ray con resolución 4K y múltiples opciones de conectividad.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/ReproductorBluray4K.webp"
    },
    {
      "nombre": "Cámara Instantánea",
      "id": 36,
      "categoria": "Fotografía",
      "precio": 100,
      "marca": "Fujifilm",
      "descripcion": "Cámara instantánea con impresión inmediata y varios modos de disparo.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/CamaraInstantanea.webp"
    },
    {
      "nombre": "Lámpara Inteligente",
      "id": 37,
      "categoria": "Hogar",
      "precio": 80,
      "marca": "Philips",
      "descripcion": "Lámpara LED con control por app y múltiples colores.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/LamparaInteligente.webp"
    },
    {
      "nombre": "Cafetera Automática",
      "id": 38,
      "categoria": "Hogar",
      "precio": 300,
      "marca": "Nespresso",
      "descripcion": "Cafetera automática con múltiples opciones de preparación.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/CafeteraAutomatica.webp"
    }, {
      "nombre": "Bicicleta de Montaña",
      "id": 39,
      "categoria": "Deportes",
      "precio": 600,
      "marca": "Trek",
      "descripcion": "Bicicleta todoterreno con suspensión delantera y frenos de disco.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/BicicletaMontana.webp"
    },
    {
      "nombre": "Aspiradora Robot",
      "id": 40,
      "categoria": "Hogar",
      "precio": 250,
      "marca": "iRobot",
      "descripcion": "Aspiradora inteligente con mapeo de habitaciones y control por voz.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/AspiradoraRobot.webp"
    }, {
      "nombre": "Robot de Cocina",
      "id": 41,
      "categoria": "Cocina",
      "precio": 350,
      "marca": "Moulinex",
      "descripcion": "Robot de cocina multifunción con capacidad para preparar diversas recetas.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/RobotCocina.webp"
    },
    {
      "nombre": "Silla de Oficina Ergonómica",
      "id": 42,
      "categoria": "Mobiliario",
      "precio": 200,
      "marca": "Herman Miller",
      "descripcion": "Silla ergonómica diseñada para brindar comodidad y apoyo durante largas jornadas laborales.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/SillaOficinaErgonomica.webp"
    },
    {
      "nombre": "Estación de Carga USB",
      "id": 43,
      "categoria": "Accesorios",
      "precio": 30,
      "marca": "Anker",
      "descripcion": "Estación de carga USB con múltiples puertos para cargar dispositivos simultáneamente.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/EstacionCargaUSB.webp"
    },
    {
      "nombre": "Cepillo Eléctrico Dental",
      "id": 44,
      "categoria": "Cuidado Personal",
      "precio": 70,
      "marca": "Oral-B",
      "descripcion": "Cepillo eléctrico recargable con tecnología de limpieza avanzada y temporizador integrado.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/CepilloElectricoDental.webp"
    },
    {
      "nombre": "Mochila Antirrobo",
      "id": 45,
      "categoria": "Accesorios",
      "precio": 80,
      "marca": "XD Design",
      "descripcion": "Mochila con diseño antirrobo y compartimentos ocultos para mayor seguridad.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/MochilaAntirrobo.webp"
    }, {
      "nombre": "Impresora Multifunción",
      "id": 46,
      "categoria": "Oficina",
      "precio": 180,
      "marca": "Epson",
      "descripcion": "Impresora multifunción con escáner y copiadora, ideal para uso doméstico y pequeñas oficinas.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/ImpresoraMultifuncion.webp"
    },
    {
      "nombre": "Reloj de Pared",
      "id": 47,
      "categoria": "Decoración",
      "precio": 50,
      "marca": "IKEA",
      "descripcion": "Reloj de pared con diseño moderno y silencioso, perfecto para cualquier ambiente.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/RelojPared.webp"
    },
    {
      "nombre": "Lámpara LED de Escritorio",
      "id": 48,
      "categoria": "Iluminación",
      "precio": 25,
      "marca": "TaoTronics",
      "descripcion": "Lámpara de escritorio LED con diferentes niveles de intensidad y brazo ajustable.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/LamparaLEDEscritorio.webp"
    },
    {
      "nombre": "Maleta de Viaje",
      "id": 49,
      "categoria": "Viajes",
      "precio": 120,
      "marca": "Samsonite",
      "descripcion": "Maleta resistente con ruedas giratorias y compartimentos internos para organizar el equipaje.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/MaletaViaje.webp"
    },
    {
      "nombre": "Juego de Sartenes Antiadherentes",
      "id": 50,
      "categoria": "Cocina",
      "precio": 90,
      "marca": "T-fal",
      "descripcion": "Set de sartenes antiadherentes de diferentes tamaños, ideales para cocinar con facilidad y limpiar con rapidez.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/SartenesAntiadherentes.webp"
    },
    {
      "nombre": "Batería Externa Portátil",
      "id": 51,
      "categoria": "Accesorios",
      "precio": 40,
      "marca": "Anker",
      "descripcion": "Batería externa compacta con capacidad para cargar dispositivos móviles varias veces.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/BateriaExterna.webp"
    },
    {
      "nombre": "Organizador de Cable",
      "id": 52,
      "categoria": "Accesorios",
      "precio": 15,
      "marca": "Belkin",
      "descripcion": "Organizador de cables para escritorio con diseño compacto y adhesivo reutilizable.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/OrganizadorCable.webp"
    },
    {
      "nombre": "Cámara Deportiva 4K",
      "id": 53,
      "categoria": "Deportes",
      "precio": 120,
      "marca": "GoPro",
      "descripcion": "Cámara deportiva resistente al agua con grabación en 4K y estabilización de imagen.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/CamaraDeportiva4K.webp"
    },
    {
      "nombre": "Altavoz Bluetooth Portátil",
      "id": 54,
      "categoria": "Audio",
      "precio": 70,
      "marca": "JBL",
      "descripcion": "Altavoz Bluetooth compacto con sonido potente y resistente al agua.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/AltavozBluetooth.webp"
    },
    {
      "nombre": "Máquina de Café Espresso",
      "id": 55,
      "categoria": "Cocina",
      "precio": 250,
      "marca": "De'Longhi",
      "descripcion": "Máquina de café espresso automática con espumador de leche y ajustes de personalización.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/MaquinaCafeEspresso.webp"
    },
    {
      "nombre": "Cámara de Seguridad para Automóvil",
      "id": 56,
      "categoria": "Seguridad",
      "precio": 100,
      "marca": "Vantrue",
      "descripcion": "Cámara de seguridad para automóvil con grabación en bucle y sensor de estacionamiento.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/CamaraSeguridadAutomovil.webp"
    },
    {
      "nombre": "Teclado Mecánico para Gaming",
      "id": 57,
      "categoria": "Accesorios",
      "precio": 120,
      "marca": "Razer",
      "descripcion": "Teclado mecánico diseñado para gaming con retroiluminación personalizable y teclas programables.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/TecladoGaming.webp"
    },
    {
      "nombre": "Cámara de Seguridad Exterior con Foco",
      "id": 58,
      "categoria": "Seguridad",
      "precio": 150,
      "marca": "Ring",
      "descripcion": "Cámara de seguridad para exterior con foco LED integrado y detección de movimiento.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/CamaraSeguridadExterior.webp"
    },{
      "nombre": "Base de Carga Inalámbrica",
      "id": 59,
      "categoria": "Accesorios",
      "precio": 25,
      "marca": "Samsung",
      "descripcion": "Base de carga inalámbrica compatible con dispositivos habilitados para Qi, con diseño delgado y elegante.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/BaseCargaInalambrica.webp"
    },
    {
      "nombre": "Báscula Inteligente",
      "id": 60,
      "categoria": "Salud",
      "precio": 40,
      "marca": "Withings",
      "descripcion": "Báscula inteligente que mide el peso, la composición corporal y se sincroniza con aplicaciones de salud.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/BasculaInteligente.webp"
    },
    {
      "nombre": "Set de Herramientas de Mano",
      "id": 61,
      "categoria": "Herramientas",
      "precio": 50,
      "marca": "Stanley",
      "descripcion": "Set de herramientas de mano con destornilladores, alicates y otras herramientas esenciales para el hogar.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/SetHerramientasMano.webp"
    },
    {
      "nombre": "Kit de Micrófonos Inalámbricos",
      "id": 62,
      "categoria": "Audio",
      "precio": 120,
      "marca": "Shure",
      "descripcion": "Kit de micrófonos inalámbricos con calidad de sonido profesional, ideal para presentaciones y actuaciones en vivo.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/KitMicrofonosInalambricos.webp"
    },
    {
      "nombre": "Sistema de Sonido Envolvente",
      "id": 63,
      "categoria": "Audio",
      "precio": 300,
      "marca": "Sony",
      "descripcion": "Sistema de sonido envolvente con altavoces inalámbricos, subwoofer y compatibilidad con audio de alta resolución.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/SistemaSonidoEnvolvente.webp"
    },
    {
      "nombre": "Monitor de Bebé con Cámara",
      "id": 64,
      "categoria": "Bebés",
      "precio": 90,
      "marca": "Infant Optics",
      "descripcion": "Monitor de bebé con cámara HD, visión nocturna y comunicación bidireccional.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/MonitorBebeCamara.webp"
    },
    {
      "nombre": "Set de Utensilios de Cocina de Silicona",
      "id": 65,
      "categoria": "Cocina",
      "precio": 35,
      "marca": "OXO",
      "descripcion": "Set de utensilios de cocina de silicona resistente al calor, antiadherente y apto para lavavajillas.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/SetUtensiliosCocina.webp"
    },
    {
      "nombre": "Humidificador de Aire",
      "id": 66,
      "categoria": "Hogar",
      "precio": 60,
      "marca": "VicTsing",
      "descripcion": "Humidificador de aire ultrasónico con capacidad para grandes espacios, temporizador y luz LED ajustable.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/HumidificadorAire.webp"
    },
    {
      "nombre": "Candado Inteligente",
      "id": 67,
      "categoria": "Seguridad",
      "precio": 50,
      "marca": "August",
      "descripcion": "Candado inteligente con desbloqueo mediante smartphone, ideal para puertas, casilleros y maletas.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/CandadoInteligente.webp"
    },
    {
      "nombre": "Cafetera de Goteo",
      "id": 68,
      "categoria": "Cocina",
      "precio": 80,
      "marca": "Cuisinart",
      "descripcion": "Cafetera de goteo programable con jarra térmica y función de pausa para servir.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/CafeteraGoteo.webp"
    },
    {
      "nombre": "Termómetro Infrarrojo",
      "id": 69,
      "categoria": "Salud",
      "precio": 30,
      "marca": "Etekcity",
      "descripcion": "Termómetro infrarrojo sin contacto para medir la temperatura corporal, de alimentos y superficies.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/TermometroInfrarrojo.webp"
    },
    {
      "nombre": "Teclado Inalámbrico",
      "id": 70,
      "categoria": "Accesorios",
      "precio": 40,
      "marca": "Logitech",
      "descripcion": "Teclado inalámbrico con diseño delgado y ergonómico, conexión Bluetooth y duración prolongada de la batería.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/TecladoInalambrico.webp"
    },
    {
      "nombre": "Aspiradora Robot",
      "id": 71,
      "categoria": "Hogar",
      "precio": 250,
      "marca": "iRobot",
      "descripcion": "Aspiradora robot con navegación inteligente, mapeo de habitaciones y control mediante smartphone.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/AspiradoraRobot.webp"
    },
    {
      "nombre": "Plancha de Vapor",
      "id": 72,
      "categoria": "Hogar",
      "precio": 60,
      "marca": "Rowenta",
      "descripcion": "Plancha de vapor con suela de acero inoxidable, sistema antical y vapor vertical.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/PlanchaVapor.webp"
    },
    {
      "nombre": "Impresora Fotográfica Portátil",
      "id": 73,
      "categoria": "Oficina",
      "precio": 150,
      "marca": "Canon",
      "descripcion": "Impresora fotográfica portátil con conexión inalámbrica, impresión sin bordes y calidad de laboratorio.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/ImpresoraFotografica.webp"
    },
    {
      "nombre": "Silla de Oficina Ergonómica",
      "id": 74,
      "categoria": "Oficina",
      "precio": 200,
      "marca": "Herman Miller",
      "descripcion": "Silla de oficina ergonómica con soporte lumbar ajustable, reposabrazos y múltiples ajustes de altura.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/SillaOficina.webp"
    },
    {
      "nombre": "Robot de Cocina Multifunción",
      "id": 75,
      "categoria": "Cocina",
      "precio": 300,
      "marca": "Moulinex",
      "descripcion": "Robot de cocina multifunción con capacidad para cocinar al vapor, triturar, batir y más.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/RobotCocinaMultifuncion.webp"
    },
    {
      "nombre": "Kit de Altavoces para Computadora",
      "id": 76,
      "categoria": "Audio",
      "precio": 80,
      "marca": "Logitech",
      "descripcion": "Kit de altavoces para computadora con subwoofer, control de volumen y entrada de audio de 3.5 mm.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/AltavocesComputadora.webp"
    },
    {
      "nombre": "Masajeador de Espalda y Cuello",
      "id": 77,
      "categoria": "Salud",
      "precio": 70,
      "marca": "Naipo",
      "descripcion": "Masajeador de espalda y cuello con función de calor, masaje Shiatsu y correas ajustables.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/MasajeadorEspalda.webp"
    },
    {
      "nombre": "Caja de Herramientas",
      "id": 78,
      "categoria": "Herramientas",
      "precio": 100,
      "marca": "Craftsman",
      "descripcion": "Caja de herramientas con múltiples compartimentos, asa telescópica y ruedas para facilitar el transporte.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/CajaHerramientas.webp"
    },
    {
      "nombre": "Purificador de Aire",
      "id": 79,
      "categoria": "Hogar",
      "precio": 150,
      "marca": "Dyson",
      "descripcion": "Purificador de aire con filtro HEPA, sensor de calidad del aire y función de ventilador.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/PurificadorAire.webp"
    },
    {
      "nombre": "Monitor Curvo para Gaming",
      "id": 80,
      "categoria": "Tecnología",
      "precio": 400,
      "marca": "Samsung",
      "descripcion": "Monitor curvo para gaming con frecuencia de actualización rápida, tiempo de respuesta ultrarrápido y colores vibrantes.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/MonitorCurvoGaming.webp"
    },  {
      "nombre": "Cámara de seguridad para exteriores",
      "id": 81,
      "categoria": "Seguridad",
      "precio": 180,
      "marca": "Arlo",
      "descripcion": "Cámara de seguridad para exteriores con resolución 1080p, visión nocturna y resistencia a la intemperie.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/CamaraExteriores.webp"
    },
    {
      "nombre": "Smart TV 4K de 55 pulgadas",
      "id": 82,
      "categoria": "Electrónica",
      "precio": 800,
      "marca": "Sony",
      "descripcion": "Smart TV con resolución 4K, pantalla HDR, sistema operativo Android TV y control por voz.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/SmartTV.webp"
    },
    {
      "nombre": "Reproductor de Blu-ray",
      "id": 83,
      "categoria": "Electrónica",
      "precio": 100,
      "marca": "Samsung",
      "descripcion": "Reproductor de Blu-ray con capacidad de reproducción de discos 3D, conexión Wi-Fi y acceso a aplicaciones de streaming.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/ReproductorBluray.webp"
    },
    {
      "nombre": "Mochila para Portátil",
      "id": 84,
      "categoria": "Accesorios",
      "precio": 50,
      "marca": "AmazonBasics",
      "descripcion": "Mochila para portátil con compartimento acolchado, bolsillos organizadores y correa para equipaje de mano.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/MochilaPortatil.webp"
    },
    {
      "nombre": "Cafetera de Espresso",
      "id": 85,
      "categoria": "Cocina",
      "precio": 250,
      "marca": "De'Longhi",
      "descripcion": "Cafetera de espresso con sistema de cappuccino automático, calentador de tazas y depósito de agua desmontable.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/CafeteraEspresso.webp"
    },
    {
      "nombre": "Batería Externa Portátil",
      "id": 86,
      "categoria": "Accesorios",
      "precio": 30,
      "marca": "Anker",
      "descripcion": "Batería externa portátil con capacidad de 10000mAh, carga rápida y puertos USB duales.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/BateriaExterna.webp"
    },
    {
      "nombre": "Cámara de seguridad para interiores",
      "id": 87,
      "categoria": "Seguridad",
      "precio": 100,
      "marca": "Wyze",
      "descripcion": "Cámara de seguridad para interiores con resolución 1080p, detección de movimiento y visión nocturna.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/CamaraInteriores.webp"
    },
    {
      "nombre": "Juego de Ollas y Sartenes",
      "id": 88,
      "categoria": "Cocina",
      "precio": 120,
      "marca": "T-fal",
      "descripcion": "Juego de ollas y sartenes antiadherentes, aptas para todo tipo de cocinas, incluida la de inducción.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/JuegoOllasSartenes.webp"
    },
    {
      "nombre": "Barra de Sonido",
      "id": 89,
      "categoria": "Audio",
      "precio": 150,
      "marca": "Yamaha",
      "descripcion": "Barra de sonido con subwoofer inalámbrico, sonido envolvente y tecnología Bluetooth para transmisión de música.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/BarraSonido.webp"
    },
    {
      "nombre": "Licuadora de Alta Velocidad",
      "id": 90,
      "categoria": "Cocina",
      "precio": 80,
      "marca": "Ninja",
      "descripcion": "Licuadora de alta velocidad con motor potente, cuchillas afiladas y programas preestablecidos.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/LicuadoraAltaVelocidad.webp"
    },{
      "nombre": "Cámara de seguridad para vehículos",
      "id": 91,
      "categoria": "Seguridad",
      "precio": 120,
      "marca": "Vantrue",
      "descripcion": "Cámara de seguridad para vehículos con grabación en bucle, visión nocturna y sensor de impacto.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/CamaraSeguridadVehiculos.webp"
    },
    {
      "nombre": "Altavoz Bluetooth Portátil",
      "id": 92,
      "categoria": "Audio",
      "precio": 60,
      "marca": "JBL",
      "descripcion": "Altavoz Bluetooth portátil resistente al agua, con sonido de alta calidad y batería de larga duración.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/AltavozBluetooth.webp"
    },
    {
      "nombre": "Cámara Deportiva 4K",
      "id": 93,
      "categoria": "Electrónica",
      "precio": 100,
      "marca": "GoPro",
      "descripcion": "Cámara deportiva con resolución 4K, sumergible hasta 10 metros y estabilización de imagen.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/CamaraDeportiva.webp"
    },
    {
      "nombre": "Auriculares Inalámbricos Deportivos",
      "id": 94,
      "categoria": "Audio",
      "precio": 70,
      "marca": "Jabra",
      "descripcion": "Auriculares inalámbricos deportivos resistentes al sudor, con ajuste seguro y cancelación de ruido.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/AuricularesDeportivos.webp"
    },
    {
      "nombre": "Kit de Iluminación para Fotografía",
      "id": 95,
      "categoria": "Fotografía",
      "precio": 150,
      "marca": "Neewer",
      "descripcion": "Kit de iluminación para fotografía con softbox, trípodes y bombillas de luz continua.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/KitIluminacionFotografia.webp"
    },
    {
      "nombre": "Smartwatch Híbrido",
      "id": 96,
      "categoria": "Accesorios",
      "precio": 120,
      "marca": "Withings",
      "descripcion": "Smartwatch híbrido con seguimiento de actividad, monitor de sueño y notificaciones inteligentes.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/SmartwatchHibrido.webp"
    },
    {
      "nombre": "Router Wi-Fi Mesh",
      "id": 97,
      "categoria": "Tecnología",
      "precio": 200,
      "marca": "Google Nest",
      "descripcion": "Router Wi-Fi Mesh con cobertura ampliada, control parental y seguridad avanzada.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/RouterWifiMesh.webp"
    },
    {
      "nombre": "Termómetro Infrarrojo",
      "id": 98,
      "categoria": "Salud",
      "precio": 50,
      "marca": "iHealth",
      "descripcion": "Termómetro infrarrojo sin contacto, con pantalla retroiluminada y función de memoria.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/TermometroInfrarrojo.webp"
    },
    {
      "nombre": "Base de Carga Inalámbrica",
      "id": 99,
      "categoria": "Accesorios",
      "precio": 40,
      "marca": "Belkin",
      "descripcion": "Base de carga inalámbrica compatible con dispositivos Qi, diseño delgado y antideslizante.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/BaseCargaInalambrica.webp"
    }, {
      "nombre": "Proyector Portátil",
      "id": 100,
      "categoria": "Electrónica",
      "precio": 300,
      "marca": "Anker",
      "descripcion": "Proyector portátil con resolución HD, altavoz integrado y conectividad HDMI.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/ProyectorPortatil.webp"
    },
    {
      "nombre": "Mesa de Escritorio Ajustable",
      "id": 101,
      "categoria": "Muebles",
      "precio": 250,
      "marca": "FlexiSpot",
      "descripcion": "Mesa de escritorio ajustable eléctricamente con altura variable y espacio para accesorios.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/MesaEscritorio.webp"
    },
    {
      "nombre": "Reloj Despertador Inteligente",
      "id": 102,
      "categoria": "Accesorios",
      "precio": 40,
      "marca": "Amazon Echo",
      "descripcion": "Reloj despertador inteligente con asistente de voz Alexa integrado y control de dispositivos domésticos.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/RelojDespertador.webp"
    },
    {
      "nombre": "Robot Aspirador",
      "id": 103,
      "categoria": "Hogar",
      "precio": 300,
      "marca": "iRobot",
      "descripcion": "Robot aspirador con navegación inteligente, mapeo de habitaciones y control mediante aplicación móvil.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/RobotAspirador.webp"
    },
    {
      "nombre": "Cargador Solar Portátil",
      "id": 104,
      "categoria": "Accesorios",
      "precio": 50,
      "marca": "RAVPower",
      "descripcion": "Cargador solar portátil con panel solar plegable, puertos USB duales y resistencia al agua.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/CargadorSolar.webp"
    },
    {
      "nombre": "Cámara de Seguridad para Bebés",
      "id": 105,
      "categoria": "Seguridad",
      "precio": 70,
      "marca": "Infant Optics",
      "descripcion": "Cámara de seguridad para bebés con visión nocturna, comunicación bidireccional y monitor de temperatura.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/CamaraSeguridadBebes.webp"
    },
    {
      "nombre": "Impresora Multifunción",
      "id": 106,
      "categoria": "Tecnología",
      "precio": 150,
      "marca": "Canon",
      "descripcion": "Impresora multifunción con impresión a color, escaneo, copiado y conectividad Wi-Fi.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/ImpresoraMultifuncion.webp"
    },
    {
      "nombre": "Báscula Inteligente",
      "id": 107,
      "categoria": "Salud",
      "precio": 40,
      "marca": "Etekcity",
      "descripcion": "Báscula inteligente con medición de peso corporal, grasa corporal, masa muscular y más, compatible con aplicaciones de fitness.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/BasculaInteligente.webp"
    },
    {
      "nombre": "Cortadora de Cabello Profesional",
      "id": 108,
      "categoria": "Cuidado Personal",
      "precio": 80,
      "marca": "Wahl",
      "descripcion": "Cortadora de cabello profesional con cuchillas de acero autoafilables, peines guía y motor potente.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/CortadoraCabello.webp"
    },
    {
      "nombre": "Humidificador Ultrasónico",
      "id": 109,
      "categoria": "Hogar",
      "precio": 30,
      "marca": "VicTsing",
      "descripcion": "Humidificador ultrasónico con tanque de agua de gran capacidad, apagado automático y luz LED de colores.",
      "imagen": "https://res.cloudinary.com/drp1ws8hy/image/upload/v1712160882/LOCAL%20CCW/Humidificador.webp"
    }
  ]
  
  export default products