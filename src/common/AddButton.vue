<!-- AddButton.vue -->
<template>
    <button @click="addPauta" class="add-button">
        <i class="fa fa-plus"></i> Agregar pauta
    </button>
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
    background-color: #8dc63f;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
}
</style>