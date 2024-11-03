<template>
    <div class="container d-flex justify-content-center align-items-center flex-grow-1">
        <div class="row justify-content-center w-75">
            <div v-for="(button, index) in buttons" :key="index" class="col-4 d-flex justify-content-center mb-3">

                <Menubuttons :name="button.name" :route="button.route" :icon="button.icon" />
            </div>
        </div>
    </div>
</template>


<script>
import { ref } from 'vue';
import Menubuttons from '@/common/MenuButtons.vue';

export default {
    components: {
        Menubuttons,
    },
    setup() {
        const buttons = ref([
            { name: 'Retiro de Herramientas', route: '/retiroherramientas', icon: 'bi bi-arrow-up-right-circle' },
            { name: 'Devolución de Herramientas', route: '/devolucionherramientas', icon: 'bi bi-arrow-down-left-circle' },
            { name: 'Menu de Pautas', route: '/menupautas', icon: 'bi bi-journal-text' },
            { name: 'Administrador de Herramientas', route: '/administradorherramientas', icon: 'bi bi-person-badge' },
            { name: 'Averias / Reportes', route: '/averias', icon: 'bi bi-tools' },
            { name: 'Configuración', route: '/configuracion', icon: 'bi bi-gear' },
        ]);


        return {
            buttons,
        };
    },
};


</script>

<style scoped>
.container {
    text-align: center;
}

.w-75 {
    width: 75%;
}
</style>
