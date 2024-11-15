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
            <AddButton @addPauta="agregarPauta" />
        </div>

        <!-- Lista de Pautas -->
        <div class="row mt-4">
            <div v-for="(pauta, index) in pautas" :key="index" class="col-md-6">
                <GuidelineCard :pauta="pauta" @removePauta="eliminarPauta" />
            </div>
        </div>

        <!-- Botones de Confirmación y Regreso -->
        <div class="text-center mt-4">
            <BackButton :route="rutaAnterior" />
            <ConfirmButton />
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import UserSelect from '@/common/UserSelect.vue';
import ToolName from '@/common/ToolName.vue';
import SingleCodeSelection from '@/common/SingleCodeSelection.vue';
import BackButton from '@/common/BackButton.vue';
import ConfirmButton from '@/common/ConfirmButton.vue';
import TitleInput from '@/common/TitleInput.vue';
import TimeCodeInput from '@/common/TimeCodeInput.vue'; // Aquí se importa el nuevo componente
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
        TimeCodeInput, // Registra el componente
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

            // Limpiar los inputs después de agregar la pauta
            usuario.value = '';
            herramienta.value = 'Memoria Sony SxS';
            selectedCodigo.value = '';
            tema.value = '';
            tcInicio.value = '00:00:00';
            tcFin.value = '00:00:00';
            descripcion.value = '';
        };

        const eliminarPauta = (pauta) => {
            pautas.value = pautas.value.filter((p) => p !== pauta);
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
            codigos
        };
    }
};
</script>