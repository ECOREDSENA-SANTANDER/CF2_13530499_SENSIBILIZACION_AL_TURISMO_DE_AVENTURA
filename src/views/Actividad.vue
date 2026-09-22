<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Gestión de la experiencia del turista de aventura',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la comprensión de los conceptos fundamentales relacionados con la gestión de la experiencia del turista de aventura, considerando sus necesidades, expectativas, perfil y características, así como los elementos que intervienen en la prestación del servicio turístico. Lo anterior, con el fin de fortalecer los conocimientos necesarios para brindar una experiencia segura, satisfactoria, accesible y de calidad, acorde con las características del destino y las particularidades del turismo de aventura.',
      barajarPreguntas: true,
      titulo_aprobado: '¡FELICIDADES!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la principal finalidad de una comunicación efectiva durante la prestación de un servicio de turismo de aventura?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir el tiempo destinado a la actividad turística.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Facilitar la comprensión de la información y generar confianza y seguridad en el turista.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Evitar que el turista realice preguntas durante la actividad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Limitar la interacción entre el turista y el prestador del servicio',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto: 'Revise nuevamente el componente formativo.',
        },
        {
          id: 2,
          texto:
            'Ante un turista que manifiesta inconformidad con el servicio recibido, ¿cuál es una actuación propia de la comunicación asertiva?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Interrumpir al turista para explicar inmediatamente las condiciones del servicio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ignorar la situación para evitar un conflicto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Escuchar con atención, expresar la información de manera respetuosa y buscar alternativas de solución.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Indicarle al turista que presente su inconformidad únicamente al finalizar la actividad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto: 'Revise nuevamente el componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Por qué es fundamental la seguridad en las actividades de turismo de aventura?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Porque permite aumentar la duración de las actividades.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Porque disminuye la necesidad de contar con personal capacitado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Porque contribuye a prevenir y controlar los riesgos asociados a las actividades y al entorno.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Porque permite eliminar completamente los riesgos presentes en escenarios naturales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto: 'Revise nuevamente el componente formativo.',
        },
        {
          id: 4,
          texto:
            'En el contexto del servicio al cliente, ¿qué se entiende por un momento de verdad?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El momento en que finaliza una actividad turística.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Cada interacción en la que el turista entra en contacto con la empresa y construye una percepción sobre el servicio.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'El instante en que el turista realiza el pago del servicio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El momento destinado exclusivamente a solucionar una queja.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto: 'Revise nuevamente el componente formativo.',
        },
        {
          id: 5,
          texto:
            'Un turista llega al punto de atención para iniciar una actividad de aventura. El personal lo recibe, verifica su información, brinda las indicaciones de seguridad y responde sus inquietudes. ¿Qué aspecto del servicio se está gestionando principalmente?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La promoción del destino turístico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La comercialización de productos turísticos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La experiencia del cliente durante el ciclo del servicio.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La clasificación de los atractivos turísticos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto: 'Revise nuevamente el componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Cuál de las siguientes acciones contribuye a una adecuada gestión de los recursos logísticos para una actividad de turismo de aventura?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Utilizar los equipos disponibles sin verificar su estado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Entregar los equipos al turista sin explicar su funcionamiento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Planificar los equipos, materiales, personal, tiempos y demás recursos necesarios para desarrollar la actividad.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Esperar a que se presenten dificultades para determinar qué recursos hacen falta.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto: 'Revise nuevamente el componente formativo.',
        },
        {
          id: 7,
          texto:
            'Antes de iniciar una actividad de turismo de aventura, ¿qué acción permite contribuir a la seguridad de los participantes?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Permitir que cada turista seleccione libremente los equipos que desea utilizar.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Verificar las condiciones de los equipos y brindar instrucciones claras sobre su uso y las medidas de seguridad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Reducir las instrucciones para iniciar rápidamente la actividad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Delegar todas las decisiones de seguridad en los turistas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto: 'Revise nuevamente el componente formativo.',
        },
        {
          id: 8,
          texto:
            '¿Qué elemento debe considerarse al organizar logísticamente una actividad de turismo de aventura en un escenario natural?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Únicamente el número de turistas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solo el costo de la actividad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Las características del recorrido, los recursos necesarios, las condiciones del entorno, los tiempos y las medidas de seguridad.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Exclusivamente las preferencias del prestador del servicio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto: 'Revise nuevamente el componente formativo.',
        },
        {
          id: 9,
          texto:
            'Un grupo de turistas solicita información sobre una actividad de aventura. El prestador explica de manera clara las características del recorrido, las recomendaciones de seguridad, los equipos requeridos y las condiciones de participación. ¿Qué competencia está fortaleciendo principalmente?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Gestión contable.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Promoción comercial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Gestión de la experiencia del turista mediante una comunicación clara y un servicio adecuado.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Administración de inventarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto: 'Revise nuevamente el componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿Cuál de las siguientes situaciones refleja una adecuada gestión de la experiencia del turista de aventura?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Priorizar la rapidez de la actividad sobre las condiciones de seguridad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Entregar información únicamente cuando el turista la solicite.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Utilizar los mismos procedimientos para todas las actividades, sin considerar sus características.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Integrar comunicación efectiva, seguridad, atención al cliente y organización logística durante la prestación del servicio.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto: 'Revise nuevamente el componente formativo.',
        },
        {
          id: 11,
          texto:
            '¿Qué característica debe tener la comunicación del prestador de un servicio de turismo de aventura al brindar instrucciones a los turistas?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Ser técnica y utilizar únicamente términos especializados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Ser extensa y contener información que no esté relacionada con la actividad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Ser clara, precisa y comprensible, de acuerdo con las características de los turistas y de la actividad.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Limitarse exclusivamente a las indicaciones relacionadas con el recorrido.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto: 'Revise nuevamente el componente formativo.',
        },
        {
          id: 12,
          texto:
            'Un turista no comprende las instrucciones dadas antes de iniciar una actividad de aventura. ¿Cuál sería la actuación más adecuada del prestador?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Continuar con la actividad para evitar retrasos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Solicitar al turista que consulte las instrucciones por su cuenta.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Repetir y explicar las instrucciones de manera clara, verificando que hayan sido comprendidas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Excluir al turista de la actividad sin brindarle una explicación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto: 'Revise nuevamente el componente formativo.',
        },
        {
          id: 13,
          texto:
            '¿Qué permite una comunicación asertiva entre el prestador y el turista?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Evitar cualquier tipo de interacción durante la actividad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Imponer las decisiones del prestador frente a las necesidades del turista.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Expresar información, recomendaciones y límites de manera clara, respetuosa y oportuna.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Reducir la información proporcionada al turista para facilitar el servicio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto: 'Revise nuevamente el componente formativo.',
        },
        {
          id: 14,
          texto:
            'Durante una actividad de turismo de aventura se presenta un cambio inesperado en las condiciones del entorno. ¿Qué debería hacer el prestador del servicio?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Continuar la actividad sin informar al grupo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Permitir que cada turista decida individualmente qué hacer.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Evaluar la situación, aplicar los protocolos establecidos e informar oportunamente a los turistas sobre las medidas que deben seguir.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Suspender toda comunicación con los turistas hasta que finalice la situación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto: 'Revise nuevamente el componente formativo.',
        },
        {
          id: 15,
          texto:
            '¿Qué relación existe entre la seguridad y la experiencia del turista de aventura?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La seguridad es independiente de la experiencia del turista.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La seguridad solo es necesaria cuando ocurre un accidente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La aplicación de medidas de seguridad contribuye a generar confianza y favorece una experiencia satisfactoria.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'La seguridad tiene como único propósito reducir los costos operativos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto: 'Revise nuevamente el componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Qué debe realizarse con los equipos utilizados en una actividad de turismo de aventura antes de entregarlos a los turistas?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Entregarlos directamente para optimizar el tiempo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Permitir que cada turista determine si están en condiciones de uso.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Verificar su estado, funcionamiento y condiciones de seguridad antes de utilizarlos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Guardarlos nuevamente sin realizar ninguna revisión.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto: 'Revise nuevamente el componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Cuál es la importancia de contar con una adecuada organización de los recursos logísticos?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Permite eliminar la necesidad de planificar las actividades.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Facilita únicamente el control de los costos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Permite disponer oportunamente de los equipos, materiales, personal e insumos necesarios para desarrollar la actividad.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Permite delegar toda la responsabilidad logística en los turistas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto: 'Revise nuevamente el componente formativo.',
        },
        {
          id: 18,
          texto:
            'Un turista manifiesta que el servicio no cumplió con sus expectativas. ¿Cuál es la respuesta más adecuada por parte del prestador?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Indicarle que las condiciones del servicio ya fueron establecidas y no pueden modificarse.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Evitar responder para no generar una situación incómoda.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Escuchar su percepción, identificar la situación presentada y brindar una respuesta respetuosa de acuerdo con los procedimientos establecidos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Solicitarle que abandone el lugar para evitar afectar la experiencia de los demás turistas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto: 'Revise nuevamente el componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Qué aspecto debe tenerse en cuenta al planificar los recursos logísticos de una actividad de turismo de aventura?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Únicamente el número de turistas inscritos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solamente el tiempo estimado para realizar el recorrido.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Las características de la actividad, las condiciones del entorno, el número de participantes, los equipos requeridos y las medidas de seguridad.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Exclusivamente las preferencias del guía o prestador del servicio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto: 'Revise nuevamente el componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Cuál de las siguientes acciones contribuye a mejorar la experiencia del turista al finalizar una actividad de aventura?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Finalizar la actividad sin brindar información adicional.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Evitar recibir comentarios para agilizar la salida de los turistas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Recoger las opiniones del turista, atender sus inquietudes y utilizar la información para fortalecer la calidad del servicio.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Limitar la interacción con el turista una vez termina la actividad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto: 'Revise nuevamente el componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
