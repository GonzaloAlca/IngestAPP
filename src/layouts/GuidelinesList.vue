<template>
    <div class="row mt-4 contenedor_tarjetas">
        <div v-for="(pauta, index) in pautas" :key="index" class="col-md-6 mb-3">
            <GuidelineCard :pauta="pauta" :index="index" @removePauta="$emit('removePauta', index)" />
        </div>
    </div>
</template>

<script>
import GuidelineCard from '@/common/GuidelineCard.vue';

export default {
    props: {
        pautas: {
            type: Array,
            required: true,
        },
    },
    components: {
        GuidelineCard,
    },
};
</script>
