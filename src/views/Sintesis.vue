<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 El turismo de aventura requiere la integración de diversos elementos que contribuyen a la satisfacción y seguridad de los participantes. La calidad de la experiencia turística depende de factores como la emoción y el disfrute de la actividad, una adecuada logística e infraestructura, la prestación de un servicio eficiente, la aplicación de medidas de seguridad y una comunicación clara entre guías y turistas. La articulación de estos componentes permite ofrecer experiencias organizadas, seguras y memorables, favoreciendo la satisfacción del visitante y promoviendo un turismo sostenible y responsable.
    

    .row.justify-content-center
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Muestra la gestión de la experiencia del turista de aventura, incluyendo logística turística, servicio al cliente, seguridad, comunicación y el resultado final de experiencias seguras y de calidad.")
      .col-auto
        a.anexo.mb-0(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
