<template>
    <div class="container mt-5">
        <div class="row">
            <!-- Selección de Usuario, Herramienta y Código -->
            <UserSelect class="col-md-4" :modelValue="usuario" :usuarios="usuarios"
                @update:modelValue="usuario = $event" />

            <!-- ToolName, usando v-model correctamente -->
            <ToolName class="col-md-4" v-model="herramienta" :herramientas="herramientas" />

            <CodeSelection class="col-md-4" :codigo="codigo" :codigos="codigos" @update:codigo="codigo = $event" />
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
import CodeSelection from '@/common/CodeSelection.vue';
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
        CodeSelection,
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
        const selectedCodigos = ref([]);
        const tools = ref([]);
        const usuarios = ref(['Alejandro Vasquez', 'Luis Gomez', 'Maria Perez']);
        const codigos = ref(['C001', 'C002', 'C003', 'C004']);
        const pautas = ref([]);
        const tema = ref('');
        const tcInicio = ref('');
        const tcFin = ref('');
        const descripcion = ref('');
        const rutaAnterior = ref('/menupautas');
        const herramientas = ref(['Memoria Sony SxS', 'Iphone 13', 'Micro SD']);

        const agregarPauta = () => {
            pautas.value.push({
                usuario: usuario.value,
                herramienta: herramienta.value,
                codigo: selectedCodigos.value,
                tema: tema.value,
                tcInicio: tcInicio.value,
                tcFin: tcFin.value,
                descripcion: descripcion.value
            });

            // Limpiar los inputs después de agregar la pauta
            usuario.value = '';
            herramienta.value = 'Memoria Sony SxS'; 
            selectedCodigos.value = [];
            tema.value = '';
            tcInicio.value = '';
            tcFin.value = '';
            descripcion.value = '';
        };

        const eliminarPauta = (pauta) => {
            pautas.value = pautas.value.filter((p) => p !== pauta);
        };

        return {
            usuario,
            herramienta, 
            selectedCodigos,
            tools,
            usuarios,
            codigos,
            pautas,
            tema,
            tcInicio,
            tcFin,
            descripcion,
            agregarPauta,
            eliminarPauta,
            herramientas,
            rutaAnterior,
        };
    }
};
</script>
