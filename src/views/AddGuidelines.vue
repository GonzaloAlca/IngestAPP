<template>
    <div class="container mt-5">
        <!-- Formulario de Pautas -->
        <GuidelinesForm @addPauta="agregarPauta" />

        <!-- Lista de Pautas -->
        <GuidelinesList :pautas="pautas" @removePauta="eliminarPauta" />

        <!-- Botones de Confirmación y Regreso -->
        <div class="text-center mt-4">
            <BackButton :route="rutaAnterior" />
            <ConfirmButton @click="enviarPautas" :disabled="pautas.length === 0" />
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import GuidelinesForm from '@/layouts/GuidelinesForm.vue';
import GuidelinesList from '@/layouts/GuidelinesList.vue';
import BackButton from '@/common/BackButton.vue';
import ConfirmButton from '@/common/ConfirmButton.vue';

export default {
    components: {
        GuidelinesForm,
        GuidelinesList,
        BackButton,
        ConfirmButton,
    },
    setup() {
        const pautas = ref([]);
        const rutaAnterior = ref('/menupautas');

        const agregarPauta = (nuevaPauta) => {
            pautas.value.push(nuevaPauta);
        };

        const eliminarPauta = (index) => {
            pautas.value.splice(index, 1);
        };

        const enviarPautas = async () => {
            try {
                const response = await fetch('https://api.pautas.com', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(pautas.value),
                });

                if (!response.ok) throw new Error('Error al enviar pautas');
                console.log('Pautas enviadas exitosamente');
                pautas.value = [];
            } catch (error) {
                console.error('Error al enviar pautas:', error);
            }
        };

        return {
            pautas,
            rutaAnterior,
            agregarPauta,
            eliminarPauta,
            enviarPautas,
        };
    },
};
</script>
