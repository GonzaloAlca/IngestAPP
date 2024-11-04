<!-- MainView.vue -->
<template>
    <div class="container d-flex flex-column justify-content-center align-items-center flex-grow-1">
        <!-- Slider de Botones -->
        <ButtonSlider :buttons="buttons" />

        <!-- Botón de Retroceso -->
        <div class="row w-100 justify-content-center mt-5">
            <div class="col-4 d-flex justify-content-center">
                <BackButton />
            </div>
        </div>
    </div>
</template>

<script>
import ButtonSlider from '../common/ButtonSlider.vue';
import BackButton from '../common/BackButton.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
    components: { ButtonSlider, BackButton },
    setup() {
        const buttons = ref([
            { name: 'Memoria Sony SxS', route: '/SonyMemoryTool', icon: 'bi bi-memory' },
            { name: 'Iphone 13', route: '/iphone-13', icon: 'bi bi-phone' },
            { name: 'Memorias Micro SD', route: '/micro-sd', icon: 'bi bi-sd-card' },
            { name: 'Prueba Oculto', route: '/hidden-test', icon: 'bi bi-eye-slash', hidden: true },
            { name: 'Nuevo Botón', route: '/new-button', icon: 'bi bi-new-icon' }
        ]);

        return { buttons };
    }
});
</script>
