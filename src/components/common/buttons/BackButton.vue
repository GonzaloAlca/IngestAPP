<template>
    <BButton class="btn-red small-btn" variant="danger" @click="goBack">Regresar</BButton>
</template>

<script>
import { useRouter } from 'vue-router';
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        route: {
            type: String,
            required: true, 
        },
    },
    setup(props) {
        const router = useRouter();

        const goBack = () => {
            router.push(props.route); 
        };

        return { goBack };
    },
});
</script>

