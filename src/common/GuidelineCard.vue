<template>
    <div class="card p-3">
        <div class="row">
            <div class="col-md-4">
                <p class="card-title"><strong>Tema: </strong>{{ pauta.tema }}</p>
                <p>
                    <strong>TC:</strong> <br> IN: {{ pauta.tcInicio }} <br> OUT: {{ pauta.tcFin }}
                </p>
            </div>

            <div class="col-md-4">
                <p class="card-text">
                    <strong>Descripción:</strong> {{ pauta.descripcion }}
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

// Emite el evento para eliminar la pauta
const emit = defineEmits(['removePauta']);
const removePauta = (idx) => {
    emit('removePauta', idx);
};
</script>
