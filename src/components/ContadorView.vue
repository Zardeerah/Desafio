<template>
  <div class=" contenedor-contador">
    <p>Contador: {{ contador }}</p>
    <button class="incrementar" @click="incrementar">Incrementar</button>
    <button class="decrementar" @click="decrementar">Disminuir</button>
  </div>
</template>

<script>
export default {
  computed: {
    contador() {
      return this.$store.getters.contador;
    }
  },
  methods: {
    incrementar() {
      this.$store.dispatch('incrementar');
    },
    decrementar() {
      this.$store.dispatch('decrementar');
    }
  }
}
</script>

<style>
p {
  font-size: 30px;
  color: blue;
 
}
.incrementar {
  background-color: green;
  border-radius: 5px;
  margin-right: 10px;
  color: white;
  
 
}
.decrementar {
  background-color: red;
  border-radius: 5px;
  margin-left: 10px;
  color: white;
}

</style>

