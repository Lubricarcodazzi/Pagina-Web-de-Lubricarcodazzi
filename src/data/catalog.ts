export interface Product {
  id: string;
  name: string;
  category: 'aceites' | 'filtros' | 'baterias' | 'grasas' | 'accesorios' | 'repuestos' | 'correas';
  categoryLabel: string;
  tag: string;
  description: string;
  details: string;
  imageUrl: string;
  popular?: boolean;
  specs: { [key: string]: string };
}

export const PRODUCTS: Product[] = [
  {
    id: 'aceites-motor',
    name: 'Aceites y Lubricantes Multigrado y Sintéticos',
    category: 'aceites',
    categoryLabel: 'Aceites y Lubricantes',
    tag: 'Motor • Mantenimiento',
    description: 'Fórmulas avanzadas para carros, camionetas, motocicletas 4T/2T y motocarros de trabajo continuo.',
    details: 'Disponibles en grados 0W-20, 5W-30, 10W-30, 10W-40, 15W-40 y 20W-50 en marcas Mobil, Castrol, Shell, Motul, Liqui Moly, Valvoline y Havoline. Incluye cambio de aceite gratis en nuestras bahías de servicio.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjMUSCjI9rWqZTKkyZ5rPQK3pDBRSGYY7SiZkMkYtw7SXddEdSmHGIxu_o8bkDm5eGbexN4Ym7VP_Igj1qkRocaA56YO0V2zElPV1qwLMplDBmjWIj_ffK3zaWlMzVuWT8f0dllj_2HV-n2Vd3LUm0Ogdxy4SVhtVOHwrdxVqo3JuGkCjn7MfQ1X8IX8KaHb9FcQH4RkLPAoCFDzgIeI3Wpoi6hiM9qRbtW-q9JcehzDP9bnoZpMFK',
    popular: true,
    specs: {
      'Presentaciones': 'Cuarto (946ml), Galón (3.785L), Caneca y Tambor',
      'Tecnologías': 'Sintético, Semisintético, Mineral de alto kilometraje',
      'Aplicación': 'Carros gasolina, diésel ligero, motos 4T y 2T, motocarros',
      'Beneficio extra': 'Mano de obra de cambio totalmente GRATIS'
    }
  },
  {
    id: 'filtros-certificados',
    name: 'Filtros Certificados de Aceite, Aire y Combustible',
    category: 'filtros',
    categoryLabel: 'Filtros',
    tag: 'Filtración de Precisión',
    description: 'Filtros de aceite blindados y de cartucho, aire de motor, combustible y habitáculo (A/C).',
    details: 'Retienen hasta el 99.5% de micropartículas contaminantes. Disponibles para todas las marcas (Chevrolet, Renault, Toyota, Nissan, Mazda, Hyundai, Kia, Bajaj, Suzuki y más).',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBokgnT9r0I9lJLRhER5FZGmCnZBOYUzCQfHsLcgsgbdIFel8xjWDLgQ6i0wcMK4CcSuagOifJ2yyYB9yZjK2zlNXWeaerdNhnyPH0lmCQ3HLuPCuG8p2dk4OjXwbBcUchPbEJyiDscAH0vkUMUZPsCKXukGl6dLGRaD25u2zHX-h005rdtgo7kgMMuzX8X-SKBmCnL8ZWQJ8Xfhaoj2iVBcxx17r79kYyvX1xfnzHzvINsBMl-6HA7',
    popular: true,
    specs: {
      'Variedades': 'Aceite blindado, Cartucho ecológico, Aire motor, Cabina A/C, Diésel',
      'Certificación': 'Normas OEM equivalentes a equipo original',
      'Frecuencia': 'Reemplazo recomendado en cada cambio de lubricante'
    }
  },
  {
    id: 'baterias-automotrices',
    name: 'Baterías Automotrices Willard y Extrema',
    category: 'baterias',
    categoryLabel: 'Baterías',
    tag: 'Energía y Encendido',
    description: 'Líneas Willard, Willard Titanio y Extrema Titanio para encendido seguro, duradero y garantizado.',
    details: 'Baterías selladas libres de mantenimiento con garantía nacional. Capacidades desde 850A hasta 1250A para autos compactos, camionetas 4x4, camiones y maquinaria.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWXxZBI3iSvtUs1d1FO-NEIZksHQWn_amCU3pSDEhbzPHf-R_R68gjAPiqfyrx_D52EvGQaBOVEWLeG947Rwq97nCbmgumIr_mqzs2Ip6bMAmjSKxD6fRREBx8zp0Cxlux-iJK_cXpbzUVxdSlhN-f4vs1BGo6_kSK1Pj6ejT1gH-P3E2QqTbJhh7jz8OjNRkWhuGvNpZSkDoQ11KztVKzRGs9oJbRKZrQwW2xlRs1BBTj2UWHXBHf',
    popular: true,
    specs: {
      'Marcas': 'Willard estándar, Willard Titanio, Extrema Titanio',
      'Amperajes': '850A, 950A, 1000A, 1100A, 1250A',
      'Garantía': 'Garantía escrita respaldada por fabricante',
      'Servicio': 'Revisión y diagnóstico de alternador sin costo'
    }
  },
  {
    id: 'grasas-refrigerantes',
    name: 'Grasas de Chasis y Refrigerantes Anticorrosivos',
    category: 'grasas',
    categoryLabel: 'Grasas y Refrigerantes',
    tag: 'Térmico • Chasis',
    description: 'Protección anticorrosiva de radiadores y grasas de alta adherencia para rodamientos y suspensiones.',
    details: 'Refrigerantes formulados para el clima exigente del Cesar que previenen la ebullición y la cavitación. Grasas EP de litio para crucetas, terminales y rodamientos automotrices y agrícolas.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDa6RL_JkbEph8tpn3vbfto6-xDH3x_ZXlhvRq8oS5zuBKTWlXA9xgOqwQWTNtCv7ppgBdEILVdYJmQ_O_2mEbeaCgMRw7iFbDnmBoR-Ltqek0-WyRO46td9XaochEaWuq3iicVtrHppwLZzcP9izFJLVBtb84mlfBt9Hth-8tQyFTcU_9XAOutVOSc0hF744dmUnNM8DDwHss4w70y_Ex5-8Ms5hL20OCoHC5oISl0DN4_NC3fFs5',
    specs: {
      'Refrigerantes': 'Verde 33%, Rojo/Rosado OAT 50%, Agua desmineralizada',
      'Grasas': 'Grasa azul para rodamientos, Grasa roja de chasis, Grasa grafitada',
      'Protección': 'Antioxidante, anticorrosión y máxima lubricación térmica'
    }
  },
  {
    id: 'accesorios-estetica',
    name: 'Accesorios, Cuidado y Estética Automotriz',
    category: 'accesorios',
    categoryLabel: 'Accesorios y Estética',
    tag: 'Estética • Confort',
    description: 'Luces LED, cubretimones, ambientadores, silicona para tableros, ceras de brillo y renovadores.',
    details: 'Productos especializados para mantener la apariencia interior y exterior impecable. Plumillas limpiabrisas de alta adherencia y accesorios eléctricos.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZt2PaFb_ADyAWvhcrdDPjCVT3jLNXFsxHr_U90HbIgy97iirlnguexq5PkuprV0BlJFB8_4_Uy1UqJeKl-yR32ExT0wus4Rh6Lx9EbaedmcHbyiywNbcZlGgCqkKbSBG2jhsC-vzl_swLypRl5ebhyh9yh-nenQFNoCPvpbR-4CdnWz6cwKQ3pWbYt6m-spIRjHDMymF4M0fReD6lGz4m9WrmTyStBT1dBDD0by6X-faHxvk9keH8',
    specs: {
      'Línea Cuidado': 'Ceras en pasta, Champú con cera, Silicona UV, Renovador de partes negras',
      'Accesorios': 'Plumillas de silicona, forros de timón, bombillos halógenos y LED'
    }
  },
  {
    id: 'tornilleria-repuestos',
    name: 'Tornillería Especializada y Repuestos Eléctricos',
    category: 'repuestos',
    categoryLabel: 'Tornillería y Repuestos',
    tag: 'Fijación • Electricidad',
    description: 'Fijaciones de alta resistencia grado 5 y 8, fusibles automotrices, relays y conectores.',
    details: 'Tornillos de cárter con arandelas de cobre, espárragos de rueda, abrazaderas inoxidables y fusibles de protección eléctrica rápida.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrIAWKJNSQhNYcVQTaHtXGH9GQkdZorVVFGiw7aRzzac0i-Q8FcAfn8sKc8oRSMA4tcERVv6nfGT2f3LKETnKORe2nmFvUOtIf7ADmM7EE7QztOEK7d-JfNATTsTUZ43KcHjdXZsD0k_Bjo7Np75wneEcmwhm2ggqPClj-SskMriGYDFhVtksBHk6Y-oMBuzZ-eNi39MMvLyfHhJkfalGaXPOB8lYfQiw-uCIwai_uGuDSlIu36uF3',
    specs: {
      'Materiales': 'Acero templado pavonado, acero cincado y bronce',
      'Eléctrico': 'Portafusibles, terminales de batería en plomo y bronce, relés 12V/24V'
    }
  },
  {
    id: 'correas-tiempo',
    name: 'Correas de Tiempo y Kits de Sincronización',
    category: 'correas',
    categoryLabel: 'Correas de Tiempo',
    tag: 'Sincronización de Motor',
    description: 'Kits de distribución confiable para asegurar la sincronización exacta y evitar averías severas.',
    details: 'Correas dentadas de caucho HNBR reforzado resistentes a altas temperaturas y aceites. Disponibles en marcas Gates, Continental y Dayco.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3eTOMaf_ml75_UKfo72Rzb8s596-8p-f7rk-3-ka4D1BINcPBnLS_AUoLCHTpnwOZF952TyRSh2YLEQ5kzHqe69vm5lIKvk6y09eQw_67L_S4ysCwtS68aQ1LFZBnvsVXtivju15f8pi4Djhip_dx7AeFK_XOIEsnhJ4Db3wNeHv0zOpzkMIStvWynCenNvdNKBfNbMNzyDtdzGIhStXm5LKCea6tPJ9sLNSu-ojqlJ4FqTeldSGi',
    specs: {
      'Componentes': 'Correa de distribución, poleas tensoras y rodamientos guía',
      'Vida útil': 'Cambio preventivo recomendado cada 40.000 a 60.000 km'
    }
  }
];

export interface BatteryCapacity {
  amperage: string;
  category: string;
  description: string;
  examples: string;
  recommendedBrands: string[];
}

export const BATTERY_CAPACITIES: BatteryCapacity[] = [
  {
    amperage: '850 A',
    category: 'Compactos y Sedanes',
    description: 'Habitual en autos urbanos con requerimiento eléctrico estándar.',
    examples: 'Chevrolet Spark, Kia Picanto, Nissan March, Renault Twingo, Suzuki Alto',
    recommendedBrands: ['Willard Plata 850', 'Willard Titanio 850']
  },
  {
    amperage: '950 A',
    category: 'Sedanes Medios y Crossovers',
    description: 'Frecuente en modelos con mayor demanda de accesorios, aire acondicionado y pantallas.',
    examples: 'Renault Logan, Sandero, Chevrolet Aveo, Sail, Renault Duster 1.6, Ford Fiesta',
    recommendedBrands: ['Willard Titanio 950', 'Extrema Titanio 950']
  },
  {
    amperage: '1000 A',
    category: 'SUVs y Utilitarios',
    description: 'Apropiado para camionetas familiares, vanes de transporte y motores diésel medianos.',
    examples: 'Toyota Prado TX, Renault Duster 2.0, Chevrolet Tracker, Mazda CX-5, Hyundai Tucson',
    recommendedBrands: ['Willard Titanio 1000', 'Extrema Titanio 1000']
  },
  {
    amperage: '1250 A',
    category: 'Camionetas y Trabajo Pesado',
    description: 'Para motores diésel de alta compresión, camiones livianos y maquinaria exigente.',
    examples: 'Toyota Hilux, Isuzu D-Max, Ford Ranger, Nissan Frontier, Hino, Foton',
    recommendedBrands: ['Extrema Titanio 1250', 'Willard Titanio Pesado']
  }
];

export interface OilViscosityInfo {
  grade: string;
  type: string;
  title: string;
  description: string;
  targetVehicles: string;
}

export const OIL_VISCOSITIES: OilViscosityInfo[] = [
  {
    grade: '0W-20 • 5W-20',
    type: 'Sintéticos',
    title: 'Máxima Fluidez y Eficiencia',
    description: 'Los grados más modernos y fluidos. Diseñados para motores de última generación que exigen máxima eficiencia y ahorro de combustible.',
    targetVehicles: 'Modelos recientes Mazda SkyActiv, Toyota Dual VVT-i, Ford EcoBoost, Honda i-VTEC.'
  },
  {
    grade: '5W-30 • 5W-40',
    type: 'Sintéticos / Semisintéticos',
    title: 'El Estándar Actual',
    description: 'El estándar actual para la mayoría de carros particulares y SUVs modernos. Ofrecen una rápida lubricación al encender el carro y excelente protección en trancones pesados.',
    targetVehicles: 'Renault Logan/Sandero/Duster, Chevrolet Onix/Tracker, Kia Rio/Cerato, Nissan Versa/Kicks.'
  },
  {
    grade: '10W-30 • 10W-40',
    type: 'Semisintéticos / Minerales',
    title: 'Equilibrio Comercial',
    description: 'Un punto intermedio muy usado en Colombia por su equilibrio entre precio y protección en climas cálidos. Común en flotas de trabajo y vehículos intermedios.',
    targetVehicles: 'Carros comerciales, taxis, sedanes de la década pasada y motocicletas de 125cc a 250cc.'
  },
  {
    grade: '15W-40',
    type: 'Mineral Robusto / Diésel',
    title: 'Uso Rudo y Motores Diésel',
    description: 'Grado robusto utilizado habitualmente en camionetas de estacas, camperos y motores diésel de trabajo pesado en el sector agrícola y comercial.',
    targetVehicles: 'Toyota Land Cruiser, Hilux diésel, Mazda B2200/B2600, camiones Turbo NPR, NKR.'
  },
  {
    grade: '20W-50',
    type: 'Mineral Alto Kilometraje',
    title: 'Alto Kilometraje y Máxima Película',
    description: 'El aceite más espeso del mercado. Tradicionalmente muy vendido en Colombia para motores con más de 100.000 o 150.000 km que requieren sellado y protección contra humo.',
    targetVehicles: 'Carros con más de 120.000 km, motocarros Bajaj Torito/Piaggio y motos de trabajo 4T.'
  }
];

export interface BrandMatrixItem {
  brand: string;
  lines: string;
  viscosities: string;
}

export const BRAND_MATRIX: BrandMatrixItem[] = [
  {
    brand: 'Mobil',
    lines: 'Mobil 1 (Sintético), Mobil Super (Semisintético/Mineral)',
    viscosities: '0W-20, 5W-30, 10W-30, 20W-50'
  },
  {
    brand: 'Castrol',
    lines: 'Castrol EDGE (Sintético), Magnatec, GTX (Mineral)',
    viscosities: '0W-20, 5W-30, 10W-40, 20W-50'
  },
  {
    brand: 'Shell',
    lines: 'Shell Helix Ultra, Shell Helix HX7 y HX5',
    viscosities: '5W-30, 5W-40, 10W-40, 20W-50'
  },
  {
    brand: 'Motul',
    lines: '8100 X-Clean, 6100 Synergie, 4100, 5100 Moto',
    viscosities: '5W-30, 5W-40, 10W-40, 20W-50'
  },
  {
    brand: 'Liqui Moly',
    lines: 'Top Tec, Leichtlauf, Molygen con aditivos antifricción',
    viscosities: '0W-20, 5W-30, 5W-40, 10W-40'
  },
  {
    brand: 'Valvoline',
    lines: 'Advanced Full Synthetic, Daily Protection, MaxLife',
    viscosities: '5W-30, 10W-30, 20W-50'
  },
  {
    brand: 'Chevron / Havoline',
    lines: 'Havoline ProDS (Sintético), Havoline Premium Mineral',
    viscosities: '0W-20, 5W-30, 10W-30, 20W-50'
  }
];

export interface FaqItem {
  question: string;
  answer: string;
  category: 'general' | 'servicios' | 'productos' | 'ubicacion';
}

export const FAQ_LIST: FaqItem[] = [
  {
    question: '¿Qué productos venden en Lubricar Codazzi?',
    answer: 'Vendemos aceites sintéticos, semisintéticos y minerales para carros, motos y motocarros; filtros certificados de aceite, aire, habitáculo y combustible; baterías automotrices Willard y Extrema; grasas para chasis y rodamientos; refrigerantes anticorrosivos; correas de tiempo; tornillería de alta resistencia y accesorios de estética vehicular.',
    category: 'productos'
  },
  {
    question: '¿El cambio de aceite es totalmente gratis?',
    answer: '¡Sí! La mano de obra del cambio de aceite es 100% gratuita al comprar el lubricante en nuestro servicentro en Agustín Codazzi. Incluye drenado completo, ajuste de tapón de cárter con torque adecuado e inspección visual de niveles complementarios de líquidos.',
    category: 'servicios'
  },
  {
    question: '¿Cómo sé qué batería necesita mi vehículo?',
    answer: 'Puedes escribirnos directamente a WhatsApp (318 528 7144) con la marca, modelo y año de tu carro, o usar nuestro Recomendador de Baterías en esta página. Te indicaremos el amperaje exacto (850A, 950A, 1000A o 1250A) y el borne correspondiente.',
    category: 'productos'
  },
  {
    question: '¿Cómo consulto precios y disponibilidad?',
    answer: 'Contáctanos directamente por nuestro canal oficial de WhatsApp al número 318 528 7144 o agrega los productos que te interesan al cotizador de esta página y pulsa "Enviar Cotización". Te responderemos al instante con la cotización exacta.',
    category: 'general'
  },
  {
    question: '¿Dónde están ubicados exactamente?',
    answer: 'Estamos ubicados en el Almacén Lubricar Codazzi, carrera 18 con calle 23 esquina, Agustín Codazzi, Cesar. Contamos con bahía de servicio y amplio espacio para vehículos y motocicletas.',
    category: 'ubicacion'
  },
  {
    question: '¿Cuáles son los horarios de atención?',
    answer: 'Atendemos de Lunes a Viernes de 7:30 a. m. a 5:00 p. m. jornada continua, y los Sábados de 7:30 a. m. a 3:30 p. m. Domingos y festivos descansamos para recargar inventario.',
    category: 'ubicacion'
  },
  {
    question: '¿Reciben tarjetas o transferencias?',
    answer: 'Sí, recibimos pagos en efectivo, transferencias directas por Nequi, Daviplata, Bancolombia y datáfono para tarjetas débito y crédito.',
    category: 'general'
  }
];

export const TESTIMONIALS = [
  {
    name: 'Liseth Ovalle',
    role: 'Cliente Particular',
    city: 'Agustín Codazzi, Cesar',
    quote: 'Quiero compartir mi experiencia en el Servicentro Lubricar Codazzi. Mi visita fue muy agradable. Recibí una atención excelente, con un personal muy amable y dispuesto a atenderme. Además, los precios me parecieron asequibles, algo que valoro mucho al momento de elegir dónde llevar mi vehículo. Me voy muy satisfecha con el servicio y con una excelente impresión del lugar. Sin duda, una buena opción para quienes buscan calidad, buena atención y precios justos.',
    rating: 5,
    initial: 'L'
  },
  {
    name: 'Marlon Marquez',
    role: 'Conductor y Transportador',
    city: 'Agustín Codazzi, Cesar',
    quote: 'La buena experiencia que tuve en el Servicentro Lubricar Codazzi, me brindaron una excelente atención, con mucha amabilidad y disposición para atenderme. Quedé satisfecho con la atención recibida y la relación entre calidad y precio. Lo recomiendo 100% para todo tipo de vehículos en el municipio.',
    rating: 5,
    initial: 'M'
  },
  {
    name: 'Carlos Andrés Mendoza',
    role: 'Propietario Motocarro Comercial',
    city: 'Agustín Codazzi, Cesar',
    quote: 'Excelente surtido en aceites 20W-50 y repuestos para trabajo pesado. Lo mejor es que uno compra el aceite y enseguida le hacen el cambio sin cobrarle la mano de obra. Atención rápida y muy seria.',
    rating: 5,
    initial: 'C'
  }
];
