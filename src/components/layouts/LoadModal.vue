<template>
    <BModal v-model="mostrar" hide-footer centered>
        <div class="d-flex flex-column align-items-center justify-content-center" style="height: 200px;">
            <!-- Barra de carga circular -->
            <div v-if="!mostrarExito" class="spinner-border text-danger" role="status"
                style="width: 5rem; height: 5rem;">
            </div>

            <!-- Ícono de check y mensaje de éxito -->
            <div v-if="mostrarExito" class="text-center">
                <i class="bi bi-check-circle-fill text-success" style="font-size: 3rem;"></i>
                <h5 class="text-success mt-2">¡Operación Exitosa!</h5>
            </div>
        </div>
    </BModal>
</template>

<script>
import { computed, defineComponent, ref, watch } from 'vue';
import { BModal } from 'bootstrap-vue-next';

export default defineComponent({
    components: { BModal },
    props: {
        modelValue: Boolean, 
        mostrarExito: Boolean, 
    },
    emits: ['update:modelValue'], // Emite cambios de modelValue al componente padre
    setup(props, { emit }) {
        const mostrar = computed({
            get: () => props.modelValue,
            set: (value) => emit('update:modelValue', value),
        });

        // Variable para manejar la visualización del éxito
        const mostrarExito = ref(false);

        // Observamos cambios en mostrarExito y lo actualizamos después de la carga
        watch(() => props.mostrarExito, (newValue) => {
            if (newValue) {
                mostrarExito.value = true;
            }
        });

        return {
            mostrar,
            mostrarExito,
        };
    },
});
</script>