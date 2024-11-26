<!-- ConfirmButton.vue -->
<template>
    <BButton class="btn btn-success" :disabled="disabled" @click="confirmAction">
        Enviar Registro
    </BButton>
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
