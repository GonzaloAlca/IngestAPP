<template>
    <BButton  @click="addPauta" class="btn btn-success">
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

</style>