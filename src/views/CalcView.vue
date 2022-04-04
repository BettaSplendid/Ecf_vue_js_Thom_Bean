<template>
  <div class="about">
    <div class="da_body">
      <h1>Bienvenue dans le CALCULADOME</h1>
      <h2>Calculur de dimensions d’un cercle</h2>
      <Circle />

    </div>
  </div>
</template>

<script setup>
import Circle from "../components/Circle.vue"
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}


</style>
