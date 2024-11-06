<!-- ConfirmButton.vue -->
<template>
    <button class="btn btn-success" :disabled="disabled" @click="confirmAction">
        Enviar Registro
    </button>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        disabled: {
            type: Boolean,
            default: false
        }
    },
    emits: ['confirm'],
    methods: {
        confirmAction() {
            this.$emit('confirm');
        }
    }
});
</script>
