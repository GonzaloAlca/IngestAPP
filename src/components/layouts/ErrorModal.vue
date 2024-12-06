<template>
    <BModal v-model="mostrar" hide-footer centered>
        <div class="text-center">
            <i class="bi bi-exclamation-circle-fill text-danger" style="font-size: 3rem;"></i>
            <h5 class="text-danger mt-2">Error</h5>
            <p>{{ mensaje }}</p>
        </div>
    </BModal>
</template>

<script>
import { defineComponent, computed } from 'vue';

export default defineComponent({

    props: {
        modelValue: Boolean,
        mensaje: {
            type: String,
            default: 'Ha ocurrido un error. Por favor, inténtelo nuevamente.',
        },
    },
    emits: ['update:modelValue'],
    setup(props, { emit }) {
        const mostrar = computed({
            get: () => props.modelValue,
            set: (value) => emit('update:modelValue', value),
        });

        return {
            mostrar,
        };
    },
});
</script>
