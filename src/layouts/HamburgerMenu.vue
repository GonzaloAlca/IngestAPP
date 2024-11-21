<template>
    <div>
        <!-- Botón de menú hamburguesa -->
        <button class="btn btn-link text-white" @click="toggleOffcanvas">
            <i class="bi bi-list" style="font-size: 2.5rem; color: white;"></i>
        </button>

        <!-- Overlay que aparece cuando el menú está visible -->
        <div v-if="isOffcanvasVisible" class="overlay" @click="closeOffcanvas" :class="{ visible: isOffcanvasVisible }">
        </div>

        <!-- Menú lateral (offcanvas) -->
        <div class="offcanvas-menu" :class="{ 'offcanvas-visible': isOffcanvasVisible }" @click.self="closeOffcanvas">
            <div class="offcanvas-header">
                <i class="bi bi-caret-right-fill" style="font-size: 1.5rem;"></i> <!-- Icono agregado -->
                <span class="text-white h4" style="margin: 0;">INGESTA</span>
                <button class="btn btn-link text-white p-0" @click="closeOffcanvas">
                    <i class="bi bi-x-lg" style="font-size: 1.5rem;"></i>
                </button>
            </div>
            <hr>
            <ul class="menu-list">
                <!-- Enlaces con router-link -->
                <li><router-link to="/" class="text-white" @click="closeOffcanvas"><i class="bi bi-house-door"></i>
                        Inicio</router-link></li>
                <li><router-link to="/retiroherramientas" class="text-white" @click="closeOffcanvas"><i
                            class="bi bi-box-arrow-in-right"></i> Retiro</router-link></li>
                <li><router-link to="/devolucionherramientas" class="text-white" @click="closeOffcanvas"><i
                            class="bi bi-box-arrow-in-left"></i> Devolución</router-link></li>
                <li><router-link to="/menupautas" class="text-white" @click="closeOffcanvas"><i
                            class="bi bi-card-checklist"></i> Pautas</router-link></li>
                <li><router-link to="/averias" class="text-white" @click="closeOffcanvas"><i class="bi bi-tools"></i>
                        Falla/Avería</router-link></li>
                <li><router-link to="/configuracion" class="text-white" @click="closeOffcanvas"><i
                            class="bi bi-gear"></i> Configuración</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'HamburgerMenu',
    setup() {
        const isOffcanvasVisible = ref(false);

        // Muestra el offcanvas
        const toggleOffcanvas = () => {
            isOffcanvasVisible.value = !isOffcanvasVisible.value;
        };

        // Cierra el offcanvas
        const closeOffcanvas = () => {
            isOffcanvasVisible.value = false;
        };

        return {
            isOffcanvasVisible,
            toggleOffcanvas,
            closeOffcanvas
        };
    }
};
</script>

<style scoped>
/* Overlay */
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    /* Fondo semitransparente */
    z-index: 1040;
    /* Justo debajo del menú */
    opacity: 0;
    pointer-events: none;
    /* Asegura que el overlay no interfiere con el menú si no está visible */
    transition: opacity 0.3s ease-in-out;
}

/* Cuando el menú es visible, hacemos visible el overlay */
.overlay.visible {
    opacity: 1;
    pointer-events: all;
}

/* Menú lateral (offcanvas) */
.offcanvas-menu {
    position: fixed;
    top: 0;
    left: -100%;
    width: 250px;
    height: 100%;
    background: var(--Header-Nav);
    color: white;
    transition: left 0.3s ease-in-out;
    z-index: 1050;
    overflow-y: auto;
    padding: 1rem;
}

/* Menú visible */
.offcanvas-visible {
    left: 0;
}

/* Estilos del encabezado del menú */
.offcanvas-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    width: 100%;
}

.offcanvas-header i {
    margin-right: 0.5rem;
}

/* Estilos para los enlaces del menú */
.menu-list {
    list-style: none;
    padding: 0;
}

.menu-list li {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    padding: 0.5rem 0;
}

.menu-list li i {
    margin-right: 1rem;
}

.router-link-active {
    color: #ffd700;
}

/* Elimina el subrayado en los enlaces */
a {
    text-decoration: none;
}
</style>
