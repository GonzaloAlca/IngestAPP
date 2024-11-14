<template>
    <div class="form-group">
        <label for="tema">Tema</label>
        <b-form-input id="tema" v-model="tema" placeholder="Tema 1" @input="$emit('update:tema', tema)" />
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    props: {
        tema: {
            type: String,
            default: ''
        }
    },
    setup(props, { emit }) {
        const tema = ref(props.tema);

        return { tema };
    }
};
</script>