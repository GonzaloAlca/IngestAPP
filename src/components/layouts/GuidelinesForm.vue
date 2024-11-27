<template>
    <div>
        <div class="row">
            <UserSelect class="col-md-4" v-model="formFields.usuario" :usuarios="usuarios" />
            <ToolName class="col-md-4" v-model="formFields.herramienta" :herramientas="herramientas" />
            <SingleCodeSelection class="col-md-4" v-model="formFields.selectedCodigo" :codigos="codigos" />
        </div>

        <div class="row mt-3">
            <TitleInput v-model="formFields.tema" class="col-md-4" />

            <TimeCodeInput class="col-md-4" v-model="formFields.tcInicio" label="Tc. Inicio" />
            <TimeCodeInput class="col-md-4" v-model="formFields.tcFin" label="Tc. Fin" />
        </div>

        <div class="mt-3">
            <DescriptionInput v-model="formFields.descripcion" />
        </div>

        <!-- Botón para agregar pautas -->
        <div class="text-center mt-3">
            <AddButton @click="emitirPauta" :disabled="!camposLlenos" />
        </div>
    </div>
</template>

<script>
import { ref, computed } from 'vue';
import UserSelect from '@/components/common/selects/UserSelect.vue';
import ToolName from '@/components/common/selects/ToolName.vue';
import SingleCodeSelection from '@/components/common/selects/SingleCodeSelection.vue';
import TitleInput from '@/components/common/inputs/TitleInput.vue';
import TimeCodeInput from '@/components/common/inputs/TimeCodeInput.vue';
import DescriptionInput from '@/components/common/inputs/DescriptionInput.vue';
import AddButton from '@/components/common/buttons/AddButton.vue';

export default {
    components: {
        UserSelect,
        ToolName,
        SingleCodeSelection,
        TitleInput,
        TimeCodeInput,
        DescriptionInput,
        AddButton,
    },
    emits: ['addPauta'],
    setup(_, { emit }) {
        const initialFields = {
            usuario: '',
            herramienta: 'Memoria Sony SxS',
            selectedCodigo: '',
            tema: '',
            tcInicio: '00:00:00',
            tcFin: '00:00:00',
            descripcion: '',
        };

        const formFields = ref({ ...initialFields });

        const resetFields = () => {
            formFields.value = { ...initialFields };
        };

        const camposLlenos = computed(() => {
            return Object.values(formFields.value).every((campo) => campo);
        });

        const emitirPauta = () => {
            emit('addPauta', { ...formFields.value });
            console.log(formFields.value)
            resetFields();
        };

        const usuarios = ref(['Alejandro Vasquez', 'Luis Gomez', 'Maria Perez']);
        const herramientas = ref(['Memoria Sony SxS', 'Iphone 13', 'Micro SD']);
        const codigos = ref(['C001', 'C002', 'C003', 'C004']);

        return {
            formFields,
            camposLlenos,
            emitirPauta,
            usuarios,
            herramientas,
            codigos,
        };
    },
};
</script>
