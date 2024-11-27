<template>
    <BButton @click="addPauta" class="btn btn-success" :disabled="disabled">
        <i class="fa fa-plus"></i> Agregar pauta
    </BButton>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue';

const emit = defineEmits(['addPauta']);

const props = defineProps({
    disabled: {
        type: Boolean,
        default: false
    }
});

const addPauta = () => {
    emit('addPauta');
};
</script>

<style scoped>
</style>
