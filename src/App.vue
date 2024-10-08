<script setup>
import ContadorView from "./components/ContadorView.vue";
import Parent from "./components/Parent.vue";


</script>

<template class="container">
  <div>

    <nav>
      <router-link to="/">Home |</router-link>
      <router-link to="/About">About</router-link>
      <router-view />
    </nav>
  </div>
  <header>

    <ContadorView />
  </header>
  <footer>
    <Parent />

  </footer>



</template>

<style></style>
