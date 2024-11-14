<!-- PautaCard.vue -->
<template>
    <div class="pauta-card">
        <div>
            <strong>Tema:</strong> {{ pauta.tema }}
        </div>
        <div>
            <strong>Time Code:</strong> IN: {{ pauta.tcInicio }} OUT: {{ pauta.tcFin }}
        </div>
        <div>
            <strong>Descripción:</strong> {{ pauta.descripcion }}
        </div>
        <button @click="removePauta" class="remove-button">
            <i class="fa fa-trash"></i>
        </button>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
    pauta: Object
})

const emit = defineEmits(['removePauta'])

const removePauta = () => {
    emit('removePauta', pauta)
}
</script>

<style scoped>
.pauta-card {
    display: flex;
    justify-content: space-between;
    background-color: #f5f5f5;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px;
}

.remove-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: #d9534f;
}
</style>