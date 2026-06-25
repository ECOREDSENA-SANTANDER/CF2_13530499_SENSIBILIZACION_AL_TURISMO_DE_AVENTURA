<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Servicio al cliente. Ciclo del servicio, momentos de verdad

    .bg2.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-5.col-md-8.col-12.mb-0(data-aos="fade-right")
          img(src='@/assets/curso/tema4/1.png', alt='')
        .col-lg-7(data-aos="fade-left")
          .p-4
            img.mb-4.img-t.d-none.d-lg-block(src='@/assets/curso/tema4/2.svg', alt='')
            p.mb-0 Para el sector turismo, el servicio al cliente es una función primordial en el desarrollo de las actividades, es la manera de atraer al cliente a la organización, darle confianza y seguridad en el servicio que solicita, el poder orientar adecuadamente y hacer que viva y disfrute la mejor experiencia. Para ofrecer un buen servicio al cliente es necesario comprender que se debe tener una preparación que se denomina el ciclo del servicio al cliente, el cual hace referencia al proceso completo que vive un usuario desde el momento en que tiene el primer contacto con una empresa u organización turística, hasta cuando recibe el servicio solicitado y queda satisfecho con la atención brindada. Para el turismo de aventura en Colombia, este ciclo inicia cuando el turista solicita información o reserva una actividad, como senderismo, #[em rafting], canopy o escalada, y termina cuando finaliza la experiencia de manera segura y positiva.

    p.mb-5(data-aos="fade-left") Durante todo este recorrido se presentan diferentes interacciones entre el cliente y el prestador del servicio, las cuales se conocen como “momentos de la verdad”. Estos momentos ocurren, por ejemplo, cuando el guía turístico brinda información, atiende dudas, entrega equipos de seguridad o acompaña al turista durante la actividad. Dependiendo de la calidad de la atención y del trato recibido, la experiencia del cliente puede ser buena o mala.

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-8
        .bg1.p-lg-5.p-4.mb-4
          p.mb-0 Por esta razón, las empresas de turismo de aventura deben prestar especial atención a cada etapa del servicio, ya que una mala experiencia, como una atención poco amable, desorganización o falta de seguridad, puede afectar la satisfacción del turista y la imagen de la empresa. En cambio, un servicio bien prestado genera confianza, recomendación y fidelización de los clientes.
        p.mb-0 Para elaborar un ciclo de servicio en una empresa de turismo de aventura, es importante identificar cada una de las etapas por las que pasa el cliente desde que solicita información hasta que termina la actividad turística. Esto permite mejorar la atención y ofrecer experiencias seguras y satisfactorias a los usuarios.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema4/3.png', alt='')

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 3.
          | Ciclo de servicio
        .tabla-a.tab3.mb-0
          table
            thead
              tr
                th Momento
                th Descripción
            tbody
              tr
                td Identificar los momentos de la verdad
                td Consiste en reconocer los momentos en los que el cliente tiene contacto con la empresa, por ejemplo, cuando pide información, realiza una reserva, recibe instrucciones de seguridad o participa en actividades como #[em rafting], senderismo o #[em canopy]. Algunos de estos momentos son críticos, porque una mala atención o desorganización puede afectar la experiencia del turista.
              tr
                td Detectar las necesidades del servicio
                td En esta etapa se analiza qué aspectos se deben mejorar para brindar una mejor atención. Para ello, es importante escuchar las opiniones de supervisores, guías y demás trabajadores, quienes conocen las fortalezas y debilidades del servicio turístico.
              tr
                td Crear planes de acción
                td Después de identificar los problemas o necesidades, se diseñan estrategias para mejorar el servicio. Por ejemplo, capacitar mejor a los guías, mejorar los equipos de seguridad o brindar información más clara a los turistas.
              tr
                td Priorizar las áreas más importantes
                td Se deben organizar las necesidades según su nivel de importancia. Las áreas que afecten directamente la seguridad, la atención al cliente o la calidad de la experiencia deben mejorarse primero.
              tr
                td Aplicar encuestas de satisfacción
                td Finalmente, es importante conocer la opinión de los clientes sobre el servicio recibido. Las encuestas ayudan a saber si los turistas quedaron satisfechos y qué aspectos se pueden seguir mejorando en las actividades de turismo de aventura.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 4.
          | Etapas del ciclo del servicio
        .row
          .col-lg-8
            .tabla-a.tab1.mb-0
              table
                thead
                  tr
                    th Etapa
                    th Características
                tbody
                  tr.bgr
                    td Información y reserva
                    td Atención inicial y orientación turística.
                  tr
                    td Preparación
                    td Entrega de recomendaciones y protocolos.
                  tr.bgr
                    td Recepción
                    td Bienvenida y organización del grupo.
                  tr
                    td Desarrollo de la actividad
                    td Atención, seguridad y acompañamiento.
                  tr.bgr
                    td Cierre de experiencia
                    td Retroalimentación y despedida.
                  tr
                    td Seguimiento
                    td Evaluación de satisfacción y fidelización.
          .col-lg-4.d-none.d-lg-block
            img(src="@/assets/curso/tema4/4.png", alt="Descripción imagen")

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        img(src='@/assets/curso/tema4/5.png', alt='')
    
    p.mb-5(data-aos="fade-right") Los momentos de verdad corresponden a situaciones específicas donde la persona cliente evalúa la calidad del servicio recibido. En turismo de aventura, algunos momentos de verdad son primer contacto con el operador, explicación de protocolos, manejo de imprevistos, acompañamiento durante la actividad, solución de dudas y atención en emergencias. Cada interacción influye directamente en la percepción del destino y la satisfacción turística.

    .tit.mb-5(data-aos="fade-left")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Atención de quejas y reclamos
    
    p.mb-5(data-aos="fade-right") De acuerdo con el Ministerio del Trabajo de Colombia, existen diferentes mecanismos de participación ciudadana que permiten a las personas expresar solicitudes, inconformidades, denuncias o propuestas ante entidades públicas y privadas. Conocer estas definiciones facilita la adecuada presentación de peticiones, quejas, reclamos, sugerencias y denuncias, según la situación que se desee comunicar.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/tema4/6.png', alt='')
      .col-lg-9
        TabsA.color-acento-botones.mb-0
          .tarjeta.color-a.p-4(titulo="Petición")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                h4.mb-3 Petición
                p.mb-0 Es un derecho fundamental reconocido por la Constitución Política de Colombia, mediante el cual toda persona puede dirigirse a las autoridades para solicitar información, realizar consultas, presentar solicitudes o requerir la intervención de una entidad frente a una situación específica. Este derecho se encuentra consagrado en el artículo 23 de la Constitución Política.
          .tarjeta.color-a.p-4(titulo="Queja")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                h4.mb-3 Queja
                p.mb-0 Es la manifestación de inconformidad o descontento relacionada con la conducta de un funcionario, colaborador o entidad, o con la prestación inadecuada, inoportuna o ineficiente de un servicio.
          .tarjeta.color-a.p-4(titulo="Reclamo")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                h4.mb-3 Reclamo
                p.mb-0 Es el derecho que tiene toda persona para exigir la corrección de una situación que afecta la adecuada prestación de un servicio o vulnera sus derechos. Generalmente se presenta cuando existe incumplimiento, deficiencia u omisión en la atención recibida.
          .tarjeta.color-a.p-4(titulo="Sugerencia")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                h4.mb-3 Sugerencia
                p.mb-0 Consiste en una propuesta, recomendación o idea presentada por los usuarios con el propósito de contribuir al mejoramiento de los servicios, procesos o procedimientos de una entidad.
          .tarjeta.color-a.p-4(titulo="Denuncia")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                h4.mb-3 Denuncia
                p.mb-0 Es el acto mediante el cual una persona pone en conocimiento de la autoridad competente la ocurrencia de hechos que pueden constituir una infracción, irregularidad o conducta contraria a la ley, con el fin de que se adelanten las investigaciones correspondientes.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-7
        .bg4.p-lg-5.p-4
          p.mb-0 En el sector turístico, los usuarios cuentan con mecanismos específicos para reportar irregularidades relacionadas con la prestación de servicios turísticos. En Colombia, el Ministerio de Comercio, Industria y Turismo, en coordinación con la Superintendencia de Industria y Comercio, permite presentar denuncias contra prestadores de servicios turísticos por situaciones como operar sin estar inscritos en el Registro Nacional de Turismo (RNT), incumplir las condiciones pactadas con el usuario o incumplir la normatividad vigente que regula la actividad turística. Estos mecanismos buscan proteger los derechos de los turistas y promover la calidad, legalidad y transparencia en la prestación de los servicios turísticos.
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema4/7.png', alt='')

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-6.mb-lg-0.mb-4
        img(src='@/assets/curso/tema4/8.png', alt='')
      .col-lg-6
        p.mb-4 Y para el caso de cada empresa, debe tener claridad a través de un protocolo los pasos a seguir y en espacios físicos y a través de la página web, resaltar de espacios visibles, para en el caso de requerir la posibilidad de dejar las quejas, reclamos o sugerencia, sea de manera fácil y segura para el cliente.
        p.mb-0 La presentación personal influye directamente en la imagen profesional y percepción de confianza dentro del turismo de aventura. Una adecuada presentación incluye higiene personal, uniformes adecuados, uso correcto de equipos, actitud profesional y lenguaje corporal apropiado.  En actividades de aventura, la presentación también debe responder a condiciones técnicas y ambientales del territorio.


</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
