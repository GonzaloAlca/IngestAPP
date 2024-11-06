<template>
    <div class="container">
        <div class="row">
            <!-- Usuario y Herramienta -->
            <div class="col-md-6">
                <UserSelect v-model="usuario" :usuarios="usuarios" />
                <ToolInfo :herramienta="herramienta" />
            </div>

            <!-- Tiempo de Devolución y Código -->
            <div class="col-md-6">
                <ReturnTime v-model="tiempoDevolucion" />
                <CodeSelection v-model="selectedCodigos" :codigos="codigos" />
            </div>
        </div>

        <!-- Botón Agregar Herramienta -->
        <AddToolButton :disabled="!canAddTool" @click="agregarHerramienta" />

        <!-- Tabla de herramientas agregadas -->
        <ToolTable :tools="tools" @remove="eliminarHerramienta" />

        <!-- Botones de acciones (Regresar y Enviar) -->
        <ActionButtons :canSubmit="tools.length > 0" @goBack="regresar" @submit="abrirModal" @resetForm="resetForm"
            :usuario="usuario" />
    </div>
</template>

<script>
import { ref, computed } from 'vue';
import UserSelect from '../common/UserSelect.vue';
import ToolInfo from '../common/ToolName.vue';
import ReturnTime from '../common/ReturnTime.vue';
import CodeSelection from '../common/CodeSelection.vue';
import AddToolButton from '../common/AddToolButton.vue';
import ToolTable from '../common/ToolTable.vue';
import ActionButtons from '../layouts/ActionButtons.vue';
import AuthModal from '../layouts/AuthModal.vue';

export default {
    components: {
        UserSelect,
        ToolInfo,
        ReturnTime,
        CodeSelection,
        AddToolButton,
        ToolTable,
        ActionButtons,
        AuthModal,
    },
    setup() {
        const usuario = ref('');
        const herramienta = ref('Memoria Sony SxS');
        const tiempoDevolucion = ref(0);
        const selectedCodigos = ref([]);
        const tools = ref([]);
        const usuarios = ref(['Alejandro Vasquez', 'Luis Gomez', 'Maria Perez']);
        const codigos = ref(['C001', 'C002', 'C003', 'C004']);

        // Computed para habilitar/deshabilitar el botón
        const canAddTool = computed(() => {
            return (
                usuario.value &&
                tiempoDevolucion.value > 0 &&
                selectedCodigos.value.length > 0
            );
        });

        function agregarHerramienta() {
            selectedCodigos.value.forEach((codigo) => {
                tools.value.push({
                    herramienta: herramienta.value,
                    codigo,
                    tiempoDevolucion: tiempoDevolucion.value,
                });
            });
            selectedCodigos.value = [];
        }

        function eliminarHerramienta(index) {
            tools.value.splice(index, 1);
        }

        function regresar() {
            this.$router.push('/Retiro');
        }

        function abrirModal() {
            this.$refs.authModal.abrirModal();
        }

        function enviarRegistro() {
            console.log('Registro enviado:', tools.value);
            mostrarModal.value = false;
        }

        function resetForm() {
            usuario.value = '';
            herramienta.value = 'Memoria Sony SxS';
            tiempoDevolucion.value = 0;
            selectedCodigos.value = [];
            tools.value = [];
        }

        return {
            usuario,
            herramienta,
            tiempoDevolucion,
            selectedCodigos,
            tools,
            usuarios,
            codigos,
            canAddTool,
            agregarHerramienta,
            eliminarHerramienta,
            regresar,
            abrirModal,
            enviarRegistro,
            resetForm,
        };
    },
};
</script>