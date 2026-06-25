<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Manejo de recursos logísticos para el desarrollo de actividades de turismo de aventura

    .bg1.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-5.col-md-8.col-12.mb-0(data-aos="fade-right")
          img(src='@/assets/curso/tema5/1.png', alt='')
        .col-lg-7(data-aos="fade-left")
          .p-4
            img.mb-4.img-t.d-none.d-lg-block(src='@/assets/curso/tema5/2.svg', alt='')
            p.mb-4 El manejo de recursos logísticos corresponde al proceso de planificación, organización y control de los elementos necesarios para garantizar el desarrollo seguro, eficiente y organizado de las actividades turísticas. En el turismo de aventura, la logística adquiere especial importancia debido a que las experiencias se desarrollan en escenarios naturales donde intervienen factores ambientales, operativos y de seguridad que requieren coordinación permanente.
            p.mb-0 La adecuada gestión logística permite optimizar recursos, prevenir riesgos, mejorar la experiencia del cliente, garantizar cumplimiento operativo y fortalecer la seguridad turística. Según la Organización Mundial del Turismo (OMT), la planificación logística constituye un componente esencial para la sostenibilidad y competitividad de los destinos turísticos de naturaleza y aventura.

    p.mb-4(data-aos="fade-right") Las actividades de turismo de aventura requieren infraestructura, equipamiento y recursos técnicos que permitan desarrollar experiencias seguras y organizadas. La infraestructura debe responder a las características geográficas, ambientales y operativas del territorio, garantizando condiciones mínimas de accesibilidad, seguridad y sostenibilidad.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Figura 5.
          | Elementos que integran la infraestructura turística
        .bg3.p-4.p-lg-5
          img.img-t.img-a(src='@/assets/curso/tema5/3.svg',alt='Presenta los principales elementos de la infraestructura turística: vías de acceso, senderos, puentes, zonas de camping, puntos de hidratación, señalización y muelles.')

    p.mb-4(data-aos="fade-right") La infraestructura debe adaptarse al entorno natural y minimizar impactos ambientales sobre los ecosistemas.
          
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 5.
          | Recursos necesarios en turismo de aventura
        .row
          .col-lg-8
            .tabla-a.tab1.mb-0
              table
                thead
                  tr
                    th Recurso
                    th Función
                tbody
                  tr.bgr
                    td Equipos de seguridad
                    td Protección y prevención de riesgos.
                  tr
                    td Equipos de comunicación
                    td Coordinación y atención de emergencias.
                  tr.bgr
                    td Botiquines y equipos médicos
                    td Atención básica en primeros auxilios.
                  tr
                    td Transporte especializado
                    td Movilidad segura de personas y equipos.
                  tr.bgr
                    td Sistemas de señalización
                    td Orientación e información preventiva.
                  tr
                    td Material interpretativo
                    td Educación ambiental y turística.
          .col-lg-4.d-none.d-lg-block
            img(src="@/assets/curso/tema5/4.png", alt="Descripción imagen")
    
    p.mb-5(data-aos="fade-right") El talento humano constituye uno de los principales recursos dentro del turismo de aventura. Entre los perfiles más importantes se encuentran guías de turismo, instructores especializados, personal de primeros auxilios, operadores logísticos y coordinadores de actividades. Las personas responsables de las actividades deben poseer competencias técnicas, comunicativas y capacidades para la gestión del riesgo.

    .tit.mb-5(data-aos="fade-left")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Diseño de itinerarios y rutas

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-8
        .bg1.p-lg-5.p-4.mb-4
          p.mb-0 El itinerario turístico corresponde a la organización secuencial de actividades, tiempos, desplazamientos y servicios que hacen parte de una experiencia turística. En turismo de aventura, el diseño de itinerarios requiere procesos rigurosos de planificación debido a las condiciones variables del entorno natural y las características físicas de las personas participantes. #[b Según Acerenza (2006), el itinerario turístico constituye: “La descripción organizada y cronológica de las actividades y servicios incluidos en una experiencia turística” (p. 94).]
        p.mb-4 Todo itinerario de aventura debe incluir información clara y detallada relacionada con horarios, rutas, puntos de encuentro, duración de actividades, niveles de dificultad, recomendaciones físicas, condiciones climáticas, protocolos de seguridad y servicios incluidos.
        p.mb-0 Las rutas deben diseñarse considerando:
      .col-lg-4.d-none.d-lg-block
        img(src="@/assets/curso/tema5/5.png", alt="Descripción imagen")

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Figura 6.
          | Elementos de una ruta
        .bg3.p-4.p-lg-5
          img.img-t.img-a(src='@/assets/curso/tema5/6.png',alt='Diagrama que presenta los cuatro elementos clave de una ruta: seguridad, capacidad física del grupo, condiciones ambientales e interpretación turística.')
    
    p.mb-4(data-aos="fade-right") La correcta evaluación de estas características permite transitar de una simple actividad recreativa a un producto turístico de alta calidad. Al integrar la gestión del riesgo con la sensibilización ambiental, se logra que la aventura sea una herramienta de desarrollo territorial responsable, minimizando impactos negativos y maximizando el aprendizaje del turista.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 6.
          | Tipo de itinerario
        .tabla-a.tab3.mb-0
          table
            thead
              tr
                th Tipo de itinerario
                th Características
            tbody
              tr.bgr
                td Itinerario lineal
                td El recorrido inicia y termina en lugares diferentes.
              tr
                td Itinerario circular
                td El recorrido inicia y finaliza en el mismo punto.
              tr.bgr
                td Itinerario flexible
                td Permite modificaciones según condiciones climáticas o del grupo.
              tr
                td Itinerario temático
                td Integra experiencias específicas como naturaleza o cultura.
        
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        img(src='@/assets/curso/tema5/7.png', alt='')
    
    p.mb-4(data-aos="fade-left") Es fundamental que todo itinerario, independientemente de su forma o tema, cuente con un cronograma detallado que incluya tiempos de descanso y márgenes de maniobra. La correcta definición del itinerario es el primer paso para una gestión del riesgo eficiente en el territorio.    

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-7
        .bg4.p-lg-5.p-4
          p.mb-4 Por otra parte, la gestión del riesgo corresponde al conjunto de acciones orientadas a identificar, prevenir y controlar situaciones que puedan afectar la seguridad de las personas, el entorno o la operación turística. En turismo de aventura, la gestión del riesgo es obligatoria debido a las características naturales y técnicas de las actividades desarrolladas. La Ley 1523 de 2012 establece en Colombia la Política Nacional para la Gestión del Riesgo de Desastres, promoviendo procesos de prevención, reducción y manejo de emergencias. 
          p.mb-0 El primer paso en la gestión del riesgo consiste en reconocer amenazas potenciales relacionadas con condiciones climáticas, caídas, deslizamientos, crecientes súbitas, fatiga física, fallas técnicas, fauna peligrosa e incendios forestales. La identificación temprana permite implementar medidas preventivas y protocolos adecuados.      
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema5/8.png', alt='')

    .row.justify-content-center.align-items-center.mb-lg-5.mb-4(data-aos="fade-left")
      .col-lg-5.mb-lg-0.mb-4
        img(src='@/assets/curso/tema5/9.png', alt='')
      .col-lg-7
        .row.justify-content-center.mb-3
          .col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/tema5/10.svg', alt='')
          .col-lg-10
            p.mb-0 La prevención busca disminuir la probabilidad de accidentes mediante capacitación del personal, mantenimiento de equipos, evaluación de rutas, señalización preventiva, control de grupos y aplicación de protocolos técnicos.
        p.mb-0 Los planes de emergencia son documentos y procedimientos diseñados para responder adecuadamente ante incidentes o situaciones críticas. Deben incluir rutas de evacuación, puntos de encuentro, responsables de atención, medios de comunicación, contactos de emergencia y protocolos de primeros auxilios. Todas las personas participantes deben conocer las instrucciones básicas antes de iniciar las actividades.

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-6.mb-lg-0.mb-4
        p.mb-4 En turismo de aventura, la atención inicial debe realizarse de manera rápida y organizada. Las acciones básicas incluyen evaluación de la escena, protección del grupo, activación de protocolos, primeros auxilios y comunicación con organismos de apoyo. La capacidad de reacción influye directamente en la disminución de consecuencias negativas durante una emergencia.
        p.mb-0 De esta manera, la gestión del riesgo permite proteger la vida y salud de las personas, fortalecer la confianza del cliente, prevenir accidentes, reducir impactos negativos, mejorar la calidad del servicio, garantizar sostenibilidad turística. En Colombia, las actividades de turismo de aventura deben incorporar procesos permanentes de prevención y control operacional como parte de la normativa turística vigente.
      .col-lg-6
        img(src='@/assets/curso/tema5/11.png', alt='')

      
</template>

<script>
export default {
  name: 'Tema5',
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
