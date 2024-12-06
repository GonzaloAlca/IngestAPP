<template>
    <div class="container mt-5">
        <!-- Formulario de Pautas -->
        <GuidelinesForm @addPauta="agregarPauta" />

        <!-- Lista de Pautas -->
        <GuidelinesList :pautas="pautas" @removePauta="eliminarPauta" />

        <!-- Botones de Confirmación y Regreso -->
        <div class="row mt-5">
            <div class="col d-flex justify-content-center">
                <BackButton class="mx-2" :route="rutaAnterior" />
                <ConfirmButton @click="enviarPautas" :disabled="pautas.length === 0" />
            </div>
        </div>

        <!-- Modal de Carga -->
        <LoadModal :modelValue="mostrarModal" :mostrarExito="mostrarExito" @update:modelValue="mostrarModal = $event" />

        <!-- Modal de Error -->
        <ErrorModal :modelValue="mostrarErrorModal" :mensaje="mensajeError"
            @update:modelValue="mostrarErrorModal = $event" />
    </div>
</template>

<script>
import { ref } from 'vue';
import GuidelinesForm from '@/components/layouts/GuidelinesForm.vue';
import GuidelinesList from '@/components/layouts/GuidelinesList.vue';
import BackButton from '@/components/common/buttons/BackButton.vue';
import ConfirmButton from '@/components/common/buttons/ConfirmButton.vue';
import LoadModal from '@/components/layouts/LoadModal.vue';
import ErrorModal from '@/components/layouts/ErrorModal.vue';

export default {
    components: {
        GuidelinesForm,
        GuidelinesList,
        BackButton,
        ConfirmButton,
        LoadModal,
        ErrorModal,
    },
    setup() {
        const pautas = ref([]);
        const rutaAnterior = ref('/menupautas');
        const mostrarModal = ref(false);
        const mostrarExito = ref(false);
        const mostrarErrorModal = ref(false);
        const mensajeError = ref('');

        const agregarPauta = (nuevaPauta) => {
            pautas.value.push(nuevaPauta);
        };

        const eliminarPauta = (index) => {
            pautas.value.splice(index, 1);
        };

        const enviarPautas = async () => {
            mostrarModal.value = true;

            try {
                const response = await fetch('https://api.pautas.com', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(pautas.value),
                });

                if (!response.ok) throw new Error('Error al enviar pautas');

                mostrarExito.value = true;
                setTimeout(() => {
                    mostrarModal.value = false;
                    mostrarExito.value = false;
                }, 2000);

                pautas.value = [];


                // /*Simulacion de operacion exitosa*/
                // try {
                //     setTimeout(() => {
                //         mostrarExito.value = true;

                //         setTimeout(() => {
                //             mostrarModal.value = false;
                //             mostrarExito.value = false;
                //         }, 2000);

                //         pautas.value = [];
                //     }, 1000);



                } catch (error) {
                    console.error('Error al enviar pautas:', error);

                    mostrarModal.value = false;
                    mensajeError.value = error.message || 'Error al enviar las pautas.';
                    mostrarErrorModal.value = true;
                }
            };

            return {
                pautas,
                rutaAnterior,
                mostrarModal,
                mostrarExito,
                mostrarErrorModal,
                mensajeError,
                agregarPauta,
                eliminarPauta,
                enviarPautas,
            };
        },
    };
</script>
