<template>
    <div>
      <Child @texto-enviado="manejarTextoEnviado" />
      <p>Texto recibido: {{ texto }}</p>
    </div>
  </template>
  
  <script>
  import Child from './Child.vue';
  
  export default {
    components: {
      Child
    },
    data() {
      return {
        texto: ''
      };
    },
    methods: {
      manejarTextoEnviado(texto) {
        this.texto = texto;
      }
    }
  };
  </script>
  
  