<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center(data-aos="fade-left").mb-5
      .col-lg-12
        .bloque-texto-g.color-acento-contenido.p-3.p-lg-5.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/intro/1.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-md-4.p-4
            p.mb-0 El turismo de aventura exige no solamente conocimientos técnicos relacionados con el territorio y las actividades recreativas, sino también competencias comunicativas, habilidades de atención al cliente y capacidades para gestionar la seguridad y la operación logística de las experiencias turísticas. En este contexto, la comunicación efectiva y la adecuada gestión del servicio se convierten en elementos fundamentales para garantizar experiencias seguras, satisfactorias y memorables para las personas visitantes.
    
    .row.justify-content-center.align-items-center.mb-lg-5.mb-4(data-aos="fade-right")
      .col-lg-8
        .bg1.p-lg-5.p-4.mb-4
          p.mb-0 Actualmente, las dinámicas del turismo de aventura demandan personal capacitado para interactuar de manera asertiva con diferentes perfiles de clientes, manejar situaciones de riesgo, orientar grupos turísticos y responder adecuadamente ante contingencias o emergencias en escenarios naturales. Asimismo, las tendencias del mercado turístico evidencian una creciente necesidad de experiencias personalizadas, sostenibles y centradas en la calidad del servicio.
        p.mb-0 Este componente formativo orienta al aprendiz hacia el fortalecimiento de habilidades relacionadas con la comunicación verbal y no verbal, la comunicación asertiva, la programación neurolingüística aplicada al turismo y el manejo adecuado de protocolos sociales y de atención al cliente. De igual manera, aborda conceptos fundamentales sobre seguridad en turismo de aventura, uso de equipos de protección, gestión de riesgos, diseño de itinerarios y manejo de recursos logísticos necesarios para el desarrollo de actividades turísticas en escenarios naturales.
      .col-lg-4.d-none.d-lg-block
        img(src="@/assets/curso/intro/2.png", alt="Descripción imagen")
    
    p.mb-4(data-aos="fade-left") A través de los contenidos propuestos, el aprendiz reconocerá la importancia de integrar seguridad, comunicación y servicio al cliente como pilares fundamentales para el desarrollo de experiencias turísticas responsables, organizadas y alineadas con las necesidades del turismo de aventura en Colombia.

    .row.justify-content-center.align-items-center(data-aos="fade-right")           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/lQHbEWk2zTA?si=gIeAHbTsREJgjj1N" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Gestión de la experiencia del turista de aventura

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
