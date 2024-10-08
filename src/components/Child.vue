<template>
    <div>
      <input v-model="inputText" placeholder="Escribe algo" />
      <button @click="enviarTexto">Enviar</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        inputText: ''
      };
    },
    methods: {
      enviarTexto() {
        this.$emit('texto-enviado', this.inputText);
      }
    }
  };
  </script>
  
  <style>
    input {
      margin-right: 10px;
      padding: 5px; 
      border-radius: 5px;
      border: 1px solid #ccc;
      font-size: 16px;
      width: 200px;
      margin-top: 20px;

    }

    button {
      padding: 5px 10px;
      border-radius: 5px;
      border: 1px solid #e92020;
      font-size: 16px;
      cursor: pointer;
      margin-top: 20px;
    }
</style>