<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './layaouts/Header.vue';
import MenuButtons from './common/MenuButtons.vue';
</script>

<template>



  <div class="app-container d-flex flex-column">
    <Header />
    <div class="content-container flex-grow-1">
      <RouterView />

      







    </div>
  </div>





</template>

<style scoped>
.app-container {
  height: 100vh;

}

.content-container {
  display: flex;
  flex-direction: column;
  background-image: url(assets/bg-ingestapp.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.2;
}

</style>
