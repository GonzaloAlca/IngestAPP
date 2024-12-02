<template>
    <div class="container d-flex flex-column justify-content-center align-items-center flex-grow-1">

        <ButtonSlider :buttons="buttons" />

        <div class="row w-100 justify-content-center mt-5">
            <div class="col-4 d-flex justify-content-center">
                <BackButton :route="rutaAnterior" />
            </div>
        </div>
    </div>
</template>

<script>
import ButtonSlider from '@/components/common/buttons/ButtonSlider.vue';
import BackButton from '@/components/common/buttons/BackButton.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
    components: { ButtonSlider, BackButton },
    setup() {
        const buttons = ref([
            { name: 'Añadir Reporte', route: '/AddReport', icon: 'bi bi-memory' },
            { name: 'Ver reportes', route: '/SeeReport', icon: 'bi bi-phone' },
        ]);
        const rutaAnterior = ref('/');

        return { buttons, 
            rutaAnterior
        };
    }
});
</script>