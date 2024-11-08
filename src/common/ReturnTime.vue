<template>
    <div class="form-group">
        <label for="tiempoDevolucion" class="font-weight-bold label">Tiempo de Devolución:</label>
        <input v-model="tiempoDevolucion" type="time" class="form-control" id="tiempoDevolucion"
            placeholder="Ingrese horas" />
    </div>
</template>

<script>
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
    props: {
        modelValue: {
            type: String, // Usamos String para almacenar la hora
            required: true,
        },
    },
    emits: ['update:modelValue'],
    setup(props, { emit }) {

        // Valor por defecto de '00:00'
        const tiempoDevolucion = ref(props.modelValue || '00:00');  // Establecer valor predeterminado

        watch(tiempoDevolucion, (newValue) => {
            emit('update:modelValue', newValue);
        });

        return { tiempoDevolucion };
    },
});
</script>
