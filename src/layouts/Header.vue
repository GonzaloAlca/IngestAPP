<template>
    <b-navbar class="header">
        <b-navbar-nav>
            <HamburgerMenu /> <!-- Menú hamburguesa aquí -->

            <!-- Icono de Home temporal para poder regresar durante el desarrollo -->
            <router-link to="/" class="navbar-brand">
                <i class="bi bi-shop" style="font-size: 2.5rem; color: white;"></i>
            </router-link>

            <span class="page-title text-white ml-3">{{ currentPage }}</span> <!-- Nombre de la página -->
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
            <b-nav-item href="#">
                <i class="bi bi-person-circle" style="font-size: 2.5rem; color: white;"></i>
            </b-nav-item>
        </b-navbar-nav>
    </b-navbar>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import HamburgerMenu from './HamburgerMenu.vue';

export default {
    name: 'Header',
    components: {
        HamburgerMenu
    },
    setup() {
        const route = useRoute();
        const currentPage = computed(() => {
            return route.name || 'Página Desconocida';
        });

        return {
            currentPage
        };
    }
};
</script>

<style scoped>
.header {
    background: var(--Header-Nav);
    padding: 10px;
    color: white;
}

b-navbar-nav {
    align-items: center;
}

i {
    cursor: pointer;
}

.page-title {
    font-size: 2.5rem;
    font-weight: bold;
    display: flex;
    align-items: center;
}
</style>