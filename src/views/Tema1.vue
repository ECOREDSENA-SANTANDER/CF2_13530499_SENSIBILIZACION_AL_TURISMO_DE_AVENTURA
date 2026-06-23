<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Técnicas de comunicación en turismo de aventura
    
    .bg2.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-5.col-md-8.col-12.mb-0(data-aos="fade-right")
          img(src='@/assets/curso/tema1/1.png', alt='')
        .col-lg-7(data-aos="fade-left")
          .p-4
            img.mb-4.img-t.d-none.d-lg-block(src='@/assets/curso/tema1/2.svg', alt='')
            p.mb-4 La comunicación constituye uno de los elementos más importantes dentro de la prestación de servicios turísticos, especialmente en actividades de turismo de aventura donde la interacción entre personas guías, operadores y clientes influye directamente en la seguridad, satisfacción y calidad de la experiencia turística.
            p.mb-0 En contextos de aventura, la comunicación permite: orientar grupos, prevenir riesgos, transmitir instrucciones, fortalecer confianza, resolver situaciones imprevistas, mejorar la experiencia del visitante. 

    p.mb-5(data-aos="fade-left") Según Chiavenato (2006), la comunicación puede definirse como: “El intercambio de información entre personas mediante símbolos, signos o comportamientos” (p. 110). En el turismo de aventura, este intercambio debe realizarse de manera clara, oportuna y adaptada a las características del grupo turístico.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Lenguaje verbal
    
    p.mb-4(data-aos="fade-left") El lenguaje verbal corresponde a la comunicación transmitida mediante palabras habladas o escritas.

    p.mb-4(data-aos="fade-right") En turismo de aventura, el lenguaje verbal debe caracterizarse por:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Figura 1.
          | Claves del Lenguaje Verbal
        .bg3.p-4.p-lg-5
          img.img-t.img-a(src='@/assets/curso/tema1/3.svg',alt='Claves del lenguaje verbal orientada hacia la claridad, la precisión, el respeto, la empatía, la capacidad de adaptación al cliente, la orientación hacia la seguridad.')

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        img(src='@/assets/curso/tema1/4.png', alt='')
    
    p.mb-4(data-aos="fade-left") Las instrucciones relacionadas con protocolos de seguridad deben expresarse utilizando mensajes breves y comprensibles, evitando tecnicismos innecesarios o información ambigua.

    p.mb-5(data-aos="fade-right") Asimismo, el guía o prestador turístico debe verificar constantemente que las personas participantes comprendan las indicaciones antes de iniciar las actividades.

    .tit.mb-5(data-aos="fade-left")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Lenguaje no verbal

    p.mb-4(data-aos="fade-right") ¿Alguna vez has entendido cómo se siente una persona sin que diga una sola palabra? Esto ocurre gracias al #[b lenguaje no verbal], que corresponde a todas las formas de comunicación que transmiten información sin utilizar palabras.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/tema1/5.png ')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Algunos elementos del lenguaje no verbal son:
            br
            br
            ul.lista-ul.mb-0
              li.d-flex.mb-0
                i.fas.fa-leaf
                p.mb-0 Expresiones faciales: reflejan emociones como alegría, sorpresa, preocupación o enojo.
              li.d-flex.mb-0
                i.fas.fa-leaf
                p.mb-0 Postura corporal: puede mostrar interés, confianza, nerviosismo o desinterés. 
              li.d-flex.mb-0
                i.fas.fa-leaf
                p.mb-0 Gestos: complementan y refuerzan el mensaje verbal. 
              li.d-flex.mb-0
                i.fas.fa-leaf
                p.mb-0 Contacto visual: transmite atención, seguridad y respeto. 
              li.d-flex.mb-0
                i.fas.fa-leaf
                p.mb-0 Tono de voz: permite expresar emociones y dar énfasis al mensaje.
              li.d-flex.mb-0
                i.fas.fa-leaf
                p.mb-0 Distancia interpersonal: indica el nivel de cercanía o comodidad entre las personas.
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-5
        img(src="@/assets/curso/tema1/6.png", alt="Descripción imagen")
      .col-lg-7
        .bg4.p-lg-5.p-4.mb-4
          p.mb-0 En el turismo de aventura, el lenguaje no verbal desempeña un papel fundamental, ya que contribuye a generar confianza, brindar seguridad y mejorar la experiencia de las personas turistas. Una sonrisa amable, una postura abierta y un contacto visual adecuado pueden comunicar cordialidad y profesionalismo incluso antes de iniciar una conversación.
        p.mb-lg-0.mb-4 Según Mehrabian (1972), una parte importante del impacto de la comunicación humana está relacionada con los elementos no verbales, lo que demuestra que no solo importa lo que decimos, sino también la manera en que lo expresamos.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Figura 2.
          | Impacto comunicativo
        .bg3.p-4.p-lg-5
          img.img-t.img-a(src='@/assets/curso/tema1/7.svg',alt='Diagrama sobre la comunicación no verbal que muestra la distribución del impacto del mensaje: las palabras transmiten el 7 %, el tono de voz entre el 20 % y 30 %, y el lenguaje corporal entre el 60 % y 80 %. Además, destaca que aproximadamente el 93 % del mensaje se comunica a través del tono de voz y el lenguaje corporal.')

    .row.justify-content-center.align-items-end.mb-5(data-aos="fade-right")
      .col-lg-3
        img(src="@/assets/curso/tema1/8.png", alt="Descripción imagen")
      .col-lg-9
        .bg5.mb-5
          .row
            .col-lg-5
              img.img-t(src="@/assets/curso/tema1/9.svg", alt="Descripción imagen")
            .col-lg-7.cen
              .p-4
                p.mb-4 En el turismo de aventura, el lenguaje no verbal desempeña un papel   fundamental, ya que las personas turistas suelen depositar su seguridad y   bienestar en el guía o prestador del servicio. A través de la comunicación no   verbal se pueden transmitir aspectos esenciales como:
                .row
                  .col-lg-6
                    ul.lista-ul.mb-0
                      li.d-flex.mb-0
                        i.fas.fa-leaf
                        p.mb-0 Seguridad.
                      li.d-flex.mb-0
                        i.fas.fa-leaf
                        p.mb-0 Liderazgo.
                      li.d-flex.mb-0
                        i.fas.fa-leaf
                        p.mb-0 Confianza.
                  .col-lg-6
                    ul.lista-ul.mb-0
                      li.d-flex.mb-0
                        i.fas.fa-leaf
                        p.mb-0 Tranquilidad.
                      li.d-flex.mb-0
                        i.fas.fa-leaf
                        p.mb-0 Control emocional.
        p.mb-0 Una postura firme, un contacto visual adecuado y una actitud serena ayudan a generar confianza y a reducir la incertidumbre durante las actividades. Por el contrario, una postura insegura, gestos contradictorios o señales de nerviosismo pueden transmitir desconfianza, aumentar la percepción de riesgo y afectar negativamente la experiencia turística. Por ello, el manejo consciente del lenguaje no verbal es una competencia clave para quienes lideran actividades de turismo de aventura.

    .tit.mb-5(data-aos="fade-left")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Componentes de la comunicación

    p.mb-4(data-aos="fade-right") La comunicación está integrada por diversos elementos que permiten el intercambio adecuado de información.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 1.
          | Componentes de la comunicación
        .row
          .col-lg-8
            .tabla-a.tab1.mb-0
              table
                thead
                  tr
                    th Componente
                    th Descripción
                tbody
                  tr
                    td Emisor
                    td Persona que transmite el mensaje.
                  tr
                    td Receptor
                    td Persona que recibe e interpreta la información.
                  tr
                    td Mensaje
                    td Información que se desea comunicar.
                  tr
                    td Canal
                    td Medio utilizado para transmitir el mensaje.
                  tr
                    td Código
                    td Sistema de signos o lenguaje utilizado.
                  tr
                    td Retroalimentación
                    td Respuesta generada por quien recibe el mensaje.
                  tr
                    td Contexto
                    td Situación o entorno donde ocurre la comunicación.
          .col-lg-4
            img(src="@/assets/curso/tema1/10.png", alt="Descripción imagen")

    p.mb-5(data-aos="fade-right") En turismo de aventura, la retroalimentación resulta fundamental para verificar que las personas participantes comprendan instrucciones relacionadas con seguridad y operación turística.

    .tit.mb-5(data-aos="fade-left")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Protocolo social en turismo de aventura

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-6
        img(src="@/assets/curso/tema1/11.png", alt="Descripción imagen")
      .col-lg-6
        p.mb-3 El protocolo social comprende el conjunto de normas de comportamiento, cortesía y convivencia que favorecen una interacción respetuosa, cordial y profesional entre las personas. En el contexto del turismo de aventura, estas prácticas son fundamentales para generar ambientes de confianza, fortalecer las relaciones con las personas turistas y contribuir al desarrollo de experiencias seguras y satisfactorias.
        p.mb-0 La aplicación adecuada del protocolo social permite fortalecer aspectos clave como la atención al cliente, el respeto por la diversidad cultural, la convivencia dentro de los grupos, la imagen profesional del guía o prestador del servicio y la calidad general de la experiencia turística.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/tema1/12.png ')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Entre las principales prácticas de protocolo social se encuentran:
            br
            br
            ul.lista-ul.mb-0
              li.d-flex.mb-0
                i.fas.fa-leaf
                p.mb-0 Saludo cordial y amable.
              li.d-flex.mb-0
                i.fas.fa-leaf
                p.mb-0 Presentación personal adecuada.
              li.d-flex.mb-0
                i.fas.fa-leaf
                p.mb-0 Uso de un lenguaje respetuoso y profesional.
              li.d-flex.mb-0
                i.fas.fa-leaf
                p.mb-0 Puntualidad en las actividades programadas.
              li.d-flex.mb-0
                i.fas.fa-leaf
                p.mb-0 Escucha activa de las necesidades e inquietudes de las personas turistas.
              li.d-flex.mb-0
                i.fas.fa-leaf
                p.mb-0 Empatía y disposición para brindar apoyo.
              li.d-flex.mb-0
                i.fas.fa-leaf
                p.mb-0 Manejo adecuado de conflictos y situaciones difíciles.
              li.d-flex.mb-0
                i.fas.fa-leaf
                p.mb-0 Respeto por las diferencias culturales, sociales y personales.


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        img(src='@/assets/curso/tema1/13.svg', alt='Texto que describa la imagen')
        .row.justify-content-center.g-0
          .col-lg-12
            .tarjeta.color-secundario.p-4.rounded-0.h-100
              .tarjeta.bg-white.p-4.p-lg-5.h-100
                TarjetaAudio.color-acento-botones.mb-0(
                texto="Pódcast: Protocolo social en turismo de aventura"
                :audio="require_src('@/assets/actividad/audio/end-game-success.mp3')"
            ).mb-0
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")

    p.mb-0(data-aos="fade-left") En la actualidad, las personas turistas no solo buscan realizar actividades de aventura, sino también vivir experiencias significativas y memorables. Por esta razón, valoran especialmente el trato humano, la atención personalizada y el respeto durante cada etapa de la experiencia turística. Un adecuado protocolo social contribuye a fortalecer la satisfacción del cliente, mejorar la reputación del servicio y promover relaciones positivas entre todas las personas involucradas.

      
</template>

<script>
export default {
  name: 'Tema1',
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
