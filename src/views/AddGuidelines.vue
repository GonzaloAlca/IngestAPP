<template>
    <div class="container mt-5">
        <div class="row">
            <!-- Selección de Usuario, Herramienta y Código -->
            <UserSelect class="col-md-4" :modelValue="usuario" :usuarios="usuarios"
                @update:modelValue="usuario = $event" />
            <ToolName class="col-md-4" v-model="herramienta" :herramientas="herramientas" />
            <SingleCodeSelection class="col-md-4" v-model="selectedCodigo" :codigos="codigos" />
        </div>

        <div class="row mt-3">
            <!-- Entrada de Tema y Time Codes -->
            <TitleInput class="col-md-4" :tema="tema" @update:tema="tema = $event" />
            <TimeCodeInput class="col-md-4" :tc="tcInicio" label="Tc. Inicio" @update:tc="tcInicio = $event" />
            <TimeCodeInput class="col-md-4" :tc="tcFin" label="Tc. Fin" @update:tc="tcFin = $event" />
        </div>

        <div class="mt-3">
            <DescriptionInput :descripcion="descripcion" @update:descripcion="descripcion = $event" />
        </div>

        <!-- Botón para agregar pautas -->
        <div class="text-center mt-3">
            <AddButton @addPauta="agregarPauta" :disabled="!camposLlenos"  />
        </div>

        <!-- Lista de Pautas -->
        <div class="row mt-4 contenedor_tarjetas">
            <div v-for="(pauta, index) in pautas" :key="index" class="col-md-6 mb-3">
                <GuidelineCard :pauta="pauta" :index="index" @removePauta="eliminarPauta" />
            </div>
        </div>

        <!-- Botones de Confirmación y Regreso -->
        <div class="text-center mt-4">
            <BackButton :route="rutaAnterior" />
            <ConfirmButton @click="enviarPautas" :disabled="pautas.length === 0" />
        </div>
    </div>
</template>

<script>
import { ref, computed } from 'vue';
import UserSelect from '@/common/UserSelect.vue';
import ToolName from '@/common/ToolName.vue';
import SingleCodeSelection from '@/common/SingleCodeSelection.vue';
import BackButton from '@/common/BackButton.vue';
import ConfirmButton from '@/common/ConfirmButton.vue';
import TitleInput from '@/common/TitleInput.vue';
import TimeCodeInput from '@/common/TimeCodeInput.vue'; 
import DescriptionInput from '@/common/DescriptionInput.vue';
import AddButton from '@/common/AddButton.vue';
import GuidelineCard from '@/common/GuidelineCard.vue';

export default {
    components: {
        UserSelect,
        ToolName,
        SingleCodeSelection,
        BackButton,
        ConfirmButton,
        TitleInput,
        TimeCodeInput, 
        DescriptionInput,
        AddButton,
        GuidelineCard
    },
    setup() {
        const usuario = ref('');
        const herramienta = ref('Memoria Sony SxS');
        const selectedCodigo = ref('');
        const pautas = ref([]);
        const tema = ref('');
        const tcInicio = ref('00:00:00');
        const tcFin = ref('00:00:00');
        const descripcion = ref('');
        const rutaAnterior = ref('/menupautas');
        const herramientas = ref(['Memoria Sony SxS', 'Iphone 13', 'Micro SD']);
        const usuarios = ref(['Alejandro Vasquez', 'Luis Gomez', 'Maria Perez']);
        const codigos = ref(['C001', 'C002', 'C003', 'C004']);


        const camposLlenos = computed(() => {
            return (
                usuario.value &&
                herramienta.value &&
                selectedCodigo.value &&
                tema.value &&
                tcInicio.value &&
                tcFin.value &&
                descripcion.value
            );
        });





        const agregarPauta = () => {
            pautas.value.push({
                usuario: usuario.value,
                herramienta: herramienta.value,
                codigo: selectedCodigo.value,
                tema: tema.value,
                tcInicio: tcInicio.value,
                tcFin: tcFin.value,
                descripcion: descripcion.value
            });

            usuario.value = '';
            herramienta.value = 'Memoria Sony SxS';
            selectedCodigo.value = '';
            tema.value = '';
            tcInicio.value = '00:00:00';
            tcFin.value = '00:00:00';
            descripcion.value = '';
        };

        const eliminarPauta = (index) => {
            pautas.value.splice(index, 1); // Elimina la pauta con base en el índice recibido
        };



        const enviarPautas = async () => {
            try {
                const response = await fetch('https://api.provisional', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(pautas.value)
                });

                if (!response.ok) {
                    throw new Error('Error al enviar pautas');
                }

                const data = await response.json();
                console.log('Pautas enviadas exitosamente:', data);

                pautas.value = [];
            } catch (error) {
                console.error('Hubo un problema al enviar las pautas:', error);
            }
        };

        return {
            usuario,
            herramienta,
            selectedCodigo,
            pautas,
            tema,
            tcInicio,
            tcFin,
            descripcion,
            agregarPauta,
            eliminarPauta,
            herramientas,
            rutaAnterior,
            usuarios,
            codigos,
            camposLlenos,
            enviarPautas
        };
    }
};
</script>