<template>
    <div class="card p-3 card-fixed">
        <div class="row">
            <div class="col-md-4">
                <p class="card-title"><strong>Tema: </strong>{{ pauta.tema }}</p>
                <p class="card-text">
                    <strong>Descripción:</strong> {{ pauta.descripcion }}
                </p>
            </div>

            <div class="col-md-4">
                
                <p>
                    <strong>TC:</strong> <br> IN: {{ pauta.tcInicio }} <br> OUT: {{ pauta.tcFin }}
                </p>
            </div>

            <div class="col-md-4 d-flex align-items-center justify-content-end">
                <b-button variant="danger" @click="removePauta(index)">
                    <i class="bi bi-trash"></i> Eliminar
                </b-button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    pauta: Object,
    index: Number,
});

const emit = defineEmits(['removePauta']);
const removePauta = (idx) => {
    emit('removePauta', idx);
};
</script>

<style scoped>
.card-fixed {
    height: 150px;
    overflow-y: auto;
    box-sizing: border-box;
}
/* Estilización de la barra de desplazamiento */
.card-fixed::-webkit-scrollbar {
    width: 8px; /* Define el ancho de la barra */
    height: 50%;
}

.card-fixed::-webkit-scrollbar-thumb {
    background-color: #b8b8b8; /* Color del pulgar de la barra (parte que se desliza) */
    border-radius: 4px; /* Hace que el pulgar sea redondeado */
}

.card-fixed::-webkit-scrollbar-thumb:hover {
    background-color: #555; /* Cambia el color del pulgar cuando el usuario lo pasa por encima */
}

.card-fixed::-webkit-scrollbar-track {
    background-color: #f1f1f1; /* Color del fondo de la pista */
    border-radius: 4px; /* Hace que la pista sea redondeada */
}
</style>
