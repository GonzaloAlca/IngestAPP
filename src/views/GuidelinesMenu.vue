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
import ButtonSlider from '../common/ButtonSlider.vue';
import BackButton from '../common/BackButton.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
    components: { ButtonSlider, BackButton },
    setup() {
        const buttons = ref([
            { name: 'Ver/Editar Pauta', route: '/SeeGuidelines', icon: 'bi bi-memory' },
            { name: 'Añadir Pauta', route: '/AddGuidelines', icon: 'bi bi-phone' },
        ]);
        const rutaAnterior = ref('/');

        return { buttons, 
            rutaAnterior
        };
    }
});
</script>
