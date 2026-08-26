export default {
  global: {
    Name: 'Gestión de la experiencia del turista de aventura',
    Description:
      'Este componente formativo fortalece las competencias necesarias para gestionar la experiencia del turista de aventura mediante la comunicación efectiva, la seguridad, la atención al cliente y la organización logística de actividades en escenarios naturales. Además, aborda aspectos relacionados con la gestión del riesgo, el uso de equipos de protección, la atención de emergencias, la calidad del servicio y la planificación operativa, promoviendo experiencias turísticas seguras, sostenibles y satisfactorias en el contexto del turismo de aventura en Colombia.',
    /*imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.jpg',*/
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.jpg',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.svg',
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-4.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Técnicas de comunicación en turismo de aventura',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Comunicación asertiva',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Seguridad en turismo de aventura',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Servicio al cliente. Ciclo del servicio, momentos de verdad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo:
          'Manejo de recursos logísticos para el desarrollo de actividades de turismo de aventura',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/13530499_CF02_CFA.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Asertividad',
      significado:
        'Capacidad de expresar ideas, emociones y necesidades de manera clara, respetuosa y equilibrada.',
    },
    {
      termino: 'Atención al cliente',
      significado:
        'Conjunto de acciones orientadas a satisfacer las necesidades y expectativas de las personas turistas.',
    },
    {
      termino: 'Comunicación asertiva',
      significado:
        'Forma de comunicación basada en el respeto, la empatía y la claridad en los mensajes.',
    },
    {
      termino: 'Comunicación no verbal',
      significado:
        'Transmisión de información mediante gestos, posturas, expresiones y tono de voz.',
    },
    {
      termino: 'Comunicación verbal',
      significado:
        'Intercambio de información mediante palabras habladas o escritas.',
    },
    {
      termino: 'Cultura de seguridad',
      significado:
        'Conjunto de hábitos y comportamientos orientados a la prevención y gestión responsable del riesgo.',
    },
    {
      termino: 'Ciclo del servicio',
      significado:
        'Secuencia de momentos de interacción entre el cliente y el prestador turístico durante la experiencia.',
    },
    {
      termino: 'Equipos de seguridad',
      significado:
        'Elementos utilizados para proteger a las personas participantes y reducir riesgos en actividades de aventura.',
    },
    {
      termino: 'Gestión del riesgo',
      significado:
        'Proceso de identificación, prevención y control de situaciones que pueden afectar la seguridad.',
    },
    {
      termino: 'Infraestructura turística',
      significado:
        'Obras y servicios que facilitan el desarrollo de actividades turísticas en un destino.',
    },
    {
      termino: 'Itinerario turístico',
      significado:
        'Organización cronológica de actividades, rutas y servicios incluidos en una experiencia turística.',
    },
    {
      termino: 'Logística turística',
      significado:
        'Planificación y coordinación de recursos necesarios para desarrollar actividades turísticas.',
    },
    {
      termino: 'Momentos de verdad',
      significado:
        'Situaciones en las que la persona cliente evalúa la calidad del servicio recibido.',
    },
    {
      termino: 'Programación neurolingüística (PNL)',
      significado:
        'Técnicas orientadas a comprender la relación entre pensamiento, lenguaje y comportamiento humano.',
    },
    {
      termino: 'Protocolo social',
      significado:
        'Normas de comportamiento y cortesía que favorecen relaciones respetuosas en contextos turísticos.',
    },
    {
      termino: 'Infraestructura turística',
      significado:
        'Obras y servicios que facilitan el desarrollo de actividades turísticas en un destino.',
    },
  ],
  referencias: [
    {
      referencia:
        'Acerenza, M. A. (2006). Conceptualización, origen y evolución del turismo. Trillas.',
      link: '',
    },
    {
      referencia:
        'Adventure Travel Trade Association. (2023). Adventure travel trends and insights.',
      link: '',
    },
    {
      referencia:
        'Berlo, D. K. (1960). El proceso de la comunicación: Introducción a la teoría y la práctica. El Ateneo.',
      link: '',
    },
    {
      referencia: 'Buckley, R. (2010). Adventure tourism management. Elsevier.',
      link: '',
    },
    {
      referencia:
        'Castanyer, O. (2013). La asertividad: Expresión de una sana autoestima (37.ª ed.). Desclée de Brouwer.',
      link: '',
    },
    {
      referencia:
        'Chiavenato, I. (2006). Introducción a la teoría general de la administración (7.ª ed.). McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'Colombia. Congreso de la República. (2012). Ley 1523 de 2012 por la cual se adopta la Política Nacional de Gestión del Riesgo de Desastres y se establece el Sistema Nacional de Gestión del Riesgo de Desastres. Diario Oficial No. 48.411.',
      link: '',
    },
    {
      referencia:
        'Colombia. Ministerio de Comercio, Industria y Turismo. (2015). Decreto 1074 de 2015. Decreto Único Reglamentario del Sector Comercio, Industria y Turismo. Diario Oficial No. 49.523.',
      link: '',
    },
    {
      referencia:
        'Mehrabian, A. (1972). Silent messages. Wadsworth Publishing Company.',
      link: '',
    },
    {
      referencia:
        'Organización Mundial del Turismo. (2014). Global report on adventure tourism.',
      link: '',
    },
    {
      referencia:
        'Pine, B. J., & Gilmore, J. H. (1999). The experience economy. Harvard Business School Press.',
      link: '',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje. (2020). Lineamientos pedagógicos para ambientes virtuales de aprendizaje.',
      link: '',
    },
    {
      referencia:
        'Swarbrooke, J., Beard, C., Leckie, S., & Pomfret, G. (2003). Adventure tourism: The new frontier. Butterworth-Heinemann.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Celmira Pereira Franco',
          cargo: 'Experta temática',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Julian Fernando Vanegas Vega',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Pedro Alonso Bolivar González',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Sandra Liliana Cristancho Cruz',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
