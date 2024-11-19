<template>
    <BButton @click="addPauta" class="add-button">
        <i class="fa fa-plus"></i> Agregar pauta
    </BButton>
</template>

<script setup>
import { defineEmits } from 'vue'

const emit = defineEmits(['addPauta'])

const addPauta = () => {
    emit('addPauta')
}
</script>

<style scoped>
.add-button {
    background-image: var(--Menu-Button);
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
}
</style>