<template>
    <div class="container mt-4">
        <!-- Primera fila: UserSelect, ToolName y SingleCodeSelection -->
        <div class="row">
            <div class="col-md-4">
                <UserSelect v-model="usuario" :usuarios="usuarios" />
            </div>
            <div class="col-md-4">
                <ToolName v-model="herramienta" :herramientas="herramientas" />
            </div>
            <div class="col-md-4">
                <SingleCodeSelection v-model="codigoSeleccionado" :codigos="codigos" />
            </div>
        </div>

        <!-- Segunda fila: Campo de descripción -->
        <div class="row mb-3">
            <div class="col-12">
                <DescriptionInput v-model="descripcion" />
            </div>
        </div>

        <!-- Tercera fila: Botones BackButton y AddButton -->
        <div class="row mt-5">
            <div class="col d-flex justify-content-center">
                <BackButton class="mx-2" :route="rutaAnterior" />
                <AddButton label="Agregar reporte" :disabled="!canSubmit" @addPauta="guardarReporte" />
            </div>
        </div>
    </div>
</template>

<script>
import { ref, computed } from 'vue';
import UserSelect from '@/components/common/selects/UserSelect.vue';
import ToolName from '@/components/common/selects/ToolName.vue';
import SingleCodeSelection from '@/components/common/selects/SingleCodeSelection.vue';
import DescriptionInput from '@/components/common/inputs/DescriptionInput.vue';
import BackButton from '@/components/common/buttons/BackButton.vue';
import AddButton from '@/components/common/buttons/AddButton.vue';

export default {
    components: {
        UserSelect,
        ToolName,
        SingleCodeSelection,
        DescriptionInput,
        BackButton,
        AddButton,
    },
    setup() {
        const usuario = ref('');
        const herramienta = ref('');
        const codigoSeleccionado = ref('');
        const descripcion = ref('');

        const usuarios = ref(['Usuario 1', 'Usuario 2', 'Usuario 3']);
        const herramientas = ref(['Herramienta A', 'Herramienta B', 'Herramienta C']);
        const codigos = ref(['Código X', 'Código Y', 'Código Z']);

        const rutaAnterior = ref('/home');

        const canSubmit = computed(() => {
            return (
                usuario.value &&
                herramienta.value &&
                codigoSeleccionado.value &&
                descripcion.value
            );
        });

        const guardarReporte = () => {
            console.log('Reporte guardado:', {
                usuario: usuario.value,
                herramienta: herramienta.value,
                codigo: codigoSeleccionado.value,
                descripcion: descripcion.value,
            });
        };

        return {
            usuario,
            herramienta,
            codigoSeleccionado,
            descripcion,
            usuarios,
            herramientas,
            codigos,
            rutaAnterior,
            canSubmit,
            guardarReporte, 
        };
    },
};
</script>

<style scoped>


.row {
    margin-bottom: 1rem;
}
</style>
