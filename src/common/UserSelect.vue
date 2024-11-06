<template>
    <div class="form-group">
        <label for="usuario" class="font-weight-bold label">Usuario:</label>
        <select v-model="selectedUser" id="usuario" class="form-control">
            <option disabled value="">Seleccione un usuario</option>
            <option v-for="user in usuarios" :key="user" :value="user">{{ user }}</option>
        </select>
    </div>
</template>

<script>
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
    props: {
        modelValue: String, // Valor vinculado desde el padre
        usuarios: Array,    // Lista de usuarios
    },
    emits: ['update:modelValue'], // Emitir evento para actualizar el valor
    setup(props, { emit }) {
        const selectedUser = ref(props.modelValue);

        // Observar los cambios en selectedUser y emitir al padre
        watch(selectedUser, (newValue) => {
            emit('update:modelValue', newValue);
        });

        return { selectedUser };
    }
});
</script>