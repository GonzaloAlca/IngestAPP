<template>
    <div class="form-group">
        <label for="tiempoDevolucion" class="font-weight-bold label">Tiempo de Devolución:</label>
        <input v-model="tiempoDevolucion" type="number" min="0" class="form-control" id="tiempoDevolucion"
            placeholder="Ingrese horas" />
    </div>
</template>

<script>
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
    props: {
        modelValue: {
            type: Number,
            required: true,
        },
    },
    emits: ['update:modelValue'],
    setup(props, { emit }) {
        // Crear una referencia local para manejar el valor
        const tiempoDevolucion = ref(props.modelValue);

        // Observar los cambios en tiempoDevolucion y emitir al componente padre
        watch(tiempoDevolucion, (newValue) => {
            emit('update:modelValue', newValue);
        });

        return { tiempoDevolucion };
    },
});
</script>