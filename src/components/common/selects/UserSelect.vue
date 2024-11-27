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
        modelValue: String,
        usuarios: Array,
    },
    emits: ['update:modelValue'],
    setup(props, { emit }) {
        const selectedUser = ref(props.modelValue);

        watch(selectedUser, (newValue) => {
            emit('update:modelValue', newValue);
        });

        watch(() => props.modelValue, (newValue) => {
            selectedUser.value = newValue;
        });

        return { selectedUser };
    }
});
</script>
