<template>
    <BModal v-model="mostrar" hide-footer centered>
        <div class="d-flex flex-column align-items-center justify-content-center" style="height: 200px;">
            <!-- Barra de carga circular -->
            <div v-if="!mostrarExito" class="spinner-border text-danger" role="status"
                style="width: 5rem; height: 5rem;">
                <span class="visually-hidden">Cargando...</span>
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
import { computed, defineComponent } from 'vue';
import { BModal } from 'bootstrap-vue-next';

export default defineComponent({
    components: { BModal },
    props: {
        modelValue: Boolean,      
        mostrarExito: Boolean,    
    },
    emits: ['update:modelValue'],
    setup(props, { emit }) {
        const mostrar = computed({
            get: () => props.modelValue,
            set: (value) => emit('update:modelValue', value)
        });

        return {
            mostrar,
            mostrarExito: props.mostrarExito
        };
    }
});
</script>
