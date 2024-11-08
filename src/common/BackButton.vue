<template>
    <BButton class="btn-red small-btn" variant="danger" @click="goBack">Regresar</BButton>
</template>

<script>
import { useRouter } from 'vue-router';
import { defineComponent, defineProps } from 'vue';

export default defineComponent({
    props: {
        route: {
            type: String,
            required: true, // Aseguramos que 'route' sea una propiedad obligatoria
        },
    },
    setup(props) {
        const router = useRouter();

        const goBack = () => {
            // Accediendo correctamente a 'props.route' en la función
            router.push(props.route); // Redirige a la ruta proporcionada
        };

        return { goBack };
    },
});
</script>

