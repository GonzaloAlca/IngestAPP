<template>
    <div class="form-group">
        <label for="codigo" class="font-weight-bold label">Código:</label>
        <select id="codigo" class="form-select" v-model="selectedCodigo" @change="updateSelectedCodigo">
            <option v-for="code in codigos" :key="code" :value="code">
                {{ code }}
            </option>
        </select>
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
            type: String,
            default: '',
        },
    },
    emits: ['update:modelValue'],
    setup(props, { emit }) {
        const selectedCodigo = ref(props.modelValue);

        const updateSelectedCodigo = () => {
            emit('update:modelValue', selectedCodigo.value);
        };

        watch(() => props.modelValue, (newValue) => {
            selectedCodigo.value = newValue;
        });

        return { selectedCodigo, updateSelectedCodigo };
    },
});
</script>

<style scoped>
.form-select {
    width: 100%;
    height: 38px;
    border-radius: 5px;
}
</style>
