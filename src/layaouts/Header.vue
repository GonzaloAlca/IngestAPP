<template>
    <b-navbar class="header" variant="dark">
        <b-navbar-nav>
            <!-- Icono de menú hamburguesa -->
            <button class="btn btn-link text-white" @click="toggleMenu">
                <i class="bi bi-list" style="font-size: 2.5rem; color: white;"></i> <!-- Icono de menú hamburguesa -->
            </button>

            <!-- Icono de logo que redirige a Home temporal para poder regresar durante el desarrollo -->
            <router-link to="/" class="navbar-brand">
                <i class="bi bi-shop" style="font-size: 2.5rem; color: white;"></i> <!-- Icono del logo -->
            </router-link>

            <span class="page-title text-white ml-3">{{ currentPage }}</span> <!-- Nombre de la página -->
        </b-navbar-nav>



        <b-navbar-nav class="ml-auto">
            <!-- Icono de usuario -->
            <b-nav-item href="#">
                <i class="bi bi-person-circle" style="font-size: 2.5rem; color: white;"></i>
            </b-nav-item>
        </b-navbar-nav>
    </b-navbar>
</template>

<script>
export default {
    name: 'Header',
    computed: {
        currentPage() {
            // Devuelve el nombre de la ruta actual desde el objeto $route
            return this.$route.name || 'Página Desconocida';
        }
    },
    methods: {
        toggleMenu() {
            console.log('Menú hamburguesa clicado');
        }
    }
}
</script>

<style scoped>
.header {
    background: linear-gradient(to right, #007bff, #507ee2);
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