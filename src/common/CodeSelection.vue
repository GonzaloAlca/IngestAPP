<template>
    <div class="form-group">
        <label label-for="codigo" class="font-weight-bold label">Código:</label>
        <div id="codigo" class="row border label-code">
            <div class="col-3" v-for="code in codigos" :key="code">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" :id="code" :value="code"
                        v-model="selectedCodigos" />
                    <label class="form-check-label" :for="code">{{ code }}</label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
    props: {
        codigos: {
            type: Array,
            required: true,
        },
        modelValue: {
            type: Array,
            default: () => [],
        },
    },
    emits: ['update:modelValue'],
    setup(props, { emit }) {
        // Crear una variable reactiva para manejar los códigos seleccionados
        const selectedCodigos = ref(props.modelValue);

        // Observar cambios en selectedCodigos y emitir al componente padre
        watch(selectedCodigos, (newValue) => {
            emit('update:modelValue', newValue);
        });

        return { selectedCodigos };
    },
});
</script>

<style scoped>
.label-code {
    border-radius: 5px;
    width: 100%;
    height: 38px;
    padding: 6px 0;
    background-color: var(--bs-secondary-bg);
}
</style>