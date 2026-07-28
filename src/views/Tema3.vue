<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Seguridad en turismo de aventura

    .bg6.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-5.col-md-8.col-12.mb-0(data-aos="fade-right")
          img(src='@/assets/curso/tema3/1.png', alt='')
        .col-lg-7(data-aos="fade-left")
          .p-4
            img.mb-4.img-t.d-none.d-lg-block(src='@/assets/curso/tema3/2.svg', alt='')
            p.mb-4 La seguridad constituye uno de los pilares fundamentales del turismo de aventura, debido a que las actividades desarrolladas implican la interacción con entornos naturales, condiciones ambientales cambiantes y niveles controlados de riesgo. Por esta razón, la planificación, la prevención y la gestión de la seguridad son aspectos esenciales para proteger la vida, la integridad y el bienestar de las personas participantes.
            p.mb-0 En el turismo de aventura, la seguridad no debe entenderse únicamente como la capacidad de respuesta ante emergencias, sino como un proceso integral y permanente orientado a prevenir accidentes, minimizar riesgos, fortalecer la confianza de los usuarios, garantizar experiencias responsables y contribuir a la conservación del entorno natural.
    
    p.mb-5(data-aos="fade-right") La Organización Mundial del Turismo (OMT) reconoce la seguridad turística como un factor determinante para la competitividad y sostenibilidad de los destinos, especialmente en aquellas actividades relacionadas con la naturaleza y la aventura, donde la adecuada gestión del riesgo resulta indispensable para el desarrollo seguro de la experiencia turística.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/tema3/3.png ')})`}"
          )
          .bloque-texto-g__texto.p-4.flex-column
            p.mb-0 La seguridad en el turismo de aventura comprende el conjunto de medidas preventivas, técnicas y operativas implementadas para identificar, evaluar, controlar y reducir los riesgos asociados a cada actividad. De acuerdo con la Norma Técnica Sectorial Colombiana NTS-AV, las actividades de aventura deben desarrollarse bajo criterios fundamentales de:
            br
            br
            .row.justify-content-center.align-items.mb-0.d-flex
              .col-lg-6.col-md-6
                ul.lista-ul.mb-0
                  li.d-flex.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Prevención.
                  li.d-flex.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Planificación.
                  li.d-flex.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Control operacional.
              .col-lg-6.col-md-6
                ul.lista-ul.mb-0
                  li.d-flex.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Capacitación.
                  li.d-flex.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Gestión del riesgo.

    p.mb-5(data-aos="fade-right") En este contexto, la gestión de la seguridad involucra diversos aspectos que deben ser evaluados y supervisados de manera permanente, entre ellos:

    .row.justify-content-center.align-items-stretch.mb-4(data-aos="fade-left")
      .col-lg-4.col-md-6.pe-lg-0.pe-md-0.mb-lg-0.mb-4.mb-md-4
        .bg7.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema3/4.svg')
          h3.mb-0.text-center Las características y condiciones del entorno donde se desarrolla la actividad.
      .col-lg-4.col-md-6.ps-lg-0.pe-lg-0.ps-md-0.mb-lg-0.mb-4.mb-md-4
        .bg8.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema3/5.svg')
          h3.mb-0.text-center Las condiciones climáticas y ambientales presentes durante la operación.
      .col-lg-4.col-md-6.ps-lg-0.ps-md-0.mb-0
        .bg9.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema3/6.svg')
          h3.mb-0.text-white.text-center El estado físico y las capacidades de las personas participantes.

    .row.justify-content-center.align-items-stretch.mb-5(data-aos="fade-right")
      .col-lg-4.col-md-6.pe-lg-0.pe-md-0.mb-lg-0.mb-4.mb-md-4
        .bg10.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema3/7.svg')
          h3.mb-0.text-white.text-center La revisión, mantenimiento y correcto uso de los equipos de seguridad.
      .col-lg-4.col-md-6.ps-lg-0.pe-lg-0.ps-md-0.mb-lg-0.mb-4.mb-md-4
        .bg11.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema3/8.svg')
          h3.mb-0.text-center La implementación de protocolos de emergencia y planes de contingencia.
      .col-lg-4.col-md-6.ps-lg-0.ps-md-0.mb-0
        .bg12.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema3/9.svg')
          h3.mb-0.text-center La formación, experiencia y capacidad técnica del personal responsable de la actividad.
    
    p.mb-5(data-aos="fade-left") La aplicación adecuada de estos principios permite reducir la probabilidad de incidentes, mejorar la calidad del servicio, generar confianza en los turistas y garantizar experiencias de aventura seguras, responsables y sostenibles.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Aplicación de la seguridad en turismo de aventura

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema3/10.png', alt='')
      .col-lg-7
        .bg4.p-4
          p.mb-0.mt-lg-4.mb-lg-3.mx-lg-3 La aplicación de la seguridad en el turismo de aventura constituye un proceso fundamental para garantizar el desarrollo adecuado de las actividades y la protección de todas las personas involucradas. Más allá del cumplimiento de normas y procedimientos, la seguridad implica la implementación de acciones preventivas antes, durante y después de cada experiencia, considerando factores como las características del entorno, las condiciones climáticas, el estado de los equipos, la preparación del personal y las capacidades de los participantes. Su correcta aplicación permite reducir riesgos, prevenir incidentes, fortalecer la confianza de los turistas y asegurar que las actividades de aventura se desarrollen de manera responsable, sostenible y acorde con los estándares de calidad establecidos.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Figura 4.
          | Seguridad en turismo de aventura
        .bg3.p-4.p-lg-5
          img.img-t.img-a(src='@/assets/curso/tema3/11.svg',alt='Muestra la seguridad en el turismo de aventura como un proceso continuo antes, durante y después de la actividad, incluyendo planificación, supervisión y evaluación para la gestión de riesgos.')

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        img(src='@/assets/curso/tema3/12.png', alt='')
    
    p.mb-5(data-aos="fade-right") La cultura de seguridad corresponde al conjunto de valores, actitudes, hábitos y comportamientos orientados a la prevención de riesgos y a la gestión responsable de la seguridad en el desarrollo de las actividades. En el turismo de aventura, esta cultura se refleja en el cumplimiento de los protocolos establecidos, la disciplina operativa, el autocuidado, la responsabilidad compartida entre participantes y operadores, y el respeto por las instrucciones técnicas impartidas por el personal especializado. Una sólida cultura de seguridad contribuye a fortalecer la confianza de los turistas, promover prácticas responsables y reducir la probabilidad de incidentes durante la experiencia de aventura.

    .tit.mb-5(data-aos="fade-left")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Equipos de seguridad: usos y funciones

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-6.mb-lg-0.mb-4
        p.mb-4 Los equipos de seguridad son herramientas diseñadas para proteger a las personas participantes y minimizar riesgos durante las actividades de turismo de aventura.
        p.mb-4 El uso correcto de los equipos depende del tipo de actividad, condiciones del entorno, nivel de dificultad y protocolos técnicos. 
        p.mb-0 Todos los equipos deben cumplir condiciones de mantenimiento, limpieza, revisión periódica, certificación técnica.
      .col-lg-6
        img(src='@/assets/curso/tema3/13.png', alt='')

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 2.
          | Principales equipos de seguridad en turismo de aventura
        .tabla-a.tab2.mb-0
          table
            thead
              tr
                th Equipo
                th Uso principal
                th Función
            tbody
              tr
                td Casco
                td Protección craneal
                td Reduce impactos y lesiones.
              tr
                td Arnés
                td Actividades verticales
                td Sujeta y distribuye el peso corporal.
              tr
                td Chaleco salvavidas
                td Actividades acuáticas
                td Favorece flotación y prevención de ahogamiento.
              tr
                td Cuerdas dinámicas y estáticas
                td Escalada y rescate
                td Permiten aseguramiento y desplazamiento.
              tr
                td Mosquetones
                td Sistemas de conexión
                td Facilitan anclajes seguros.
              tr
                td Botiquín de primeros auxilios
                td Atención básica
                td Permite responder ante lesiones menores.
              tr
                td Guantes
                td Protección manual
                td Evitan lesiones por fricción o impacto.
              tr
                td Linternas y radios
                td Comunicación y visibilidad
                td Facilitan orientación y coordinación.

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-5.mb-lg-0.mb-4
        img(src='@/assets/curso/tema3/14.png', alt='')
      .col-lg-7
        .row.justify-content-center.mb-3
          .col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/tema3/15.svg', alt='')
          .col-lg-10
            p.mb-0 El uso de equipos debe realizarse bajo supervisión técnica y siguiendo instrucciones específicas.  Antes de iniciar cualquier actividad es importante inspeccionar el estado del equipo, ajustar correctamente los elementos, verificar certificaciones, explicar funcionamiento al grupo. 
        p.mb-4 El mal uso de equipos representa uno de los principales factores de riesgo en actividades de aventura.
        p.mb-0 Los equipos de seguridad permiten reducir riesgos, prevenir accidentes, responder ante emergencias, fortalecer confianza, garantizar cumplimiento normativo. 
        p.mb-0 Asimismo, constituyen un requisito obligatorio dentro de las normas técnicas aplicables al turismo de aventura en Colombia.


</template>

<script>
export default {
  name: 'Tema3',
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
