<template>
    <div class="form-group">
        <label for="herramienta" class="font-weight-bold label">Herramienta:</label>
        <select v-model="herramientaSeleccionada" class="form-control" id="herramienta">
            <option v-for="(herramienta, index) in herramientas" :key="index" :value="herramienta">
                {{ herramienta }}
            </option>
        </select>
    </div>
</template>

<script>
export default {
    props: {
        modelValue: String, // Esta es la propiedad que recibimos del padre (equivalente al v-model)
        herramientas: Array
    },
    data() {
        return {
            herramientaSeleccionada: this.modelValue // Inicializamos con el valor recibido del padre
        };
    },
    watch: {
        // Cuando se actualiza la selección, emitimos el cambio hacia el padre
        herramientaSeleccionada(newValue) {
            this.$emit('update:modelValue', newValue); // Emitir el cambio con el nombre correcto para v-model
        },
        // Si el valor de 'modelValue' cambia desde el padre, actualizamos 'herramientaSeleccionada'
        modelValue(newValue) {
            this.herramientaSeleccionada = newValue;
        }
    }
};
</script>
