<template>
    <div class="form-group">
        <label for="descripcion">Descripción</label>
        <b-form-textarea id="descripcion" v-model="descripcion" placeholder="Ingrese la descripción" rows="3"
            @input="$emit('update:descripcion', descripcion)" />
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    props: {
        descripcion: {
            type: String,
            default: ''
        }
    },
    setup(props, { emit }) {
        const descripcion = ref(props.descripcion);

        return { descripcion };
    }
};
</script>