<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './layouts/Header.vue';
import BackgroundImage from './common/BackgroundImage.vue';
</script>



  <template>
    <div class="app-container d-flex flex-column">
      <BackgroundImage /> 
      <Header />
      <div class="content-container flex-grow-1">
        <RouterView />
      </div>
    </div>
  </template>

  <style scoped>
    .app-container {
      position: relative;
      height: 100vh;
    }

    .content-container {
      display: flex;
      flex-direction: column;
      z-index: 1;
    }
  </style>
