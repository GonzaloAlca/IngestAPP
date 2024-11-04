<!-- BackButton.vue -->
<template>
    <BButton class="btn-red small-btn" variant="danger" @click="goBack">Regresar</BButton>
</template>

<script>
import { useRouter } from 'vue-router';
import { defineComponent } from 'vue';

export default defineComponent({
    setup() {
        const router = useRouter();
        const goBack = () => {
            router.push('/');
        };

        return { goBack };
    }
});
</script>
