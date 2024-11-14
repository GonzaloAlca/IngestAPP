<template>
    <div class="container">
        <div class="row">
            <!-- Usuario y Herramienta -->
            <div class="col-md-6">
                <UserSelect v-model="usuario" :usuarios="usuarios" :key="usuarioKey" />
                <ToolName v-model="herramienta" :herramientas="herramientas" :key="herramientaKey" />
            </div>

            <!-- Tiempo de Devolución y Código -->
            <div class="col-md-6">
                <ReturnTime v-model="tiempoDevolucion" :key="tiempoDevolucionKey" />
                <CodeSelection v-model="selectedCodigos" :codigos="codigos" :key="codigosKey" />
            </div>
        </div>

        <!-- Botón Agregar Herramienta -->
        <AddToolButton :disabled="!canAddTool" @click="agregarHerramienta" />

        <!-- Tabla de herramientas agregadas -->
        <ToolTable :tools="tools" @remove="eliminarHerramienta" />

        <div class="action-buttons-container">
            <div class="action-buttons">
                <BackButton :route="rutaAnterior" class="btn" />
                <ConfirmButton :disabled="tools.length === 0" @confirm="abrirModal" class="btn" />
            </div>
        </div>
        <auth-modal ref="authModal" :usuario="usuario" @confirmar="enviarRegistro" @mostrarExito="resetForm" />
    </div>
</template>

<script>
import { ref, computed } from 'vue';
import UserSelect from '../common/UserSelect.vue';
import ReturnTime from '../common/ReturnTime.vue';
import CodeSelection from '../common/CodeSelection.vue';
import AddToolButton from '../common/AddToolButton.vue';
import ToolTable from '../common/ToolTable.vue';
import AuthModal from '../layouts/AuthModal.vue';
import BackButton from '../common/BackButton.vue';
import ConfirmButton from '../common/ConfirmButton.vue';
import ToolName from '../common/ToolName.vue';

export default {
    components: {
        UserSelect,
        ToolName,
        ReturnTime,
        CodeSelection,
        AddToolButton,
        ToolTable,
        AuthModal,
        ConfirmButton,
        BackButton,
    },
    setup() {
        // Definir valores reactivos
        const usuario = ref('');
        const herramienta = ref('Memoria Sony SxS');  // Valor predeterminado
        const tiempoDevolucion = ref('');
        const selectedCodigos = ref([]);
        const tools = ref([]);
        const usuarios = ref(['Alejandro Vasquez', 'Luis Gomez', 'Maria Perez']);
        const codigos = ref(['C001', 'C002', 'C003', 'C004']);
        const herramientas = ref(['Memoria Sony SxS', 'Iphone 13', 'Micro SD']);

        const rutaAnterior = ref('/retiroherramientas');

        const authModal = ref(null);

        const canAddTool = computed(() => {
            return usuario.value && tiempoDevolucion.value && selectedCodigos.value.length > 0;
        });

        // Claves para forzar la re-renderización
        const usuarioKey = ref(0);
        const herramientaKey = ref(0);
        const tiempoDevolucionKey = ref(0);
        const codigosKey = ref(0);

        // Función para agregar herramienta
        function agregarHerramienta() {
            selectedCodigos.value.forEach((codigo) => {
                tools.value.push({
                    usuario: usuario.value,
                    herramienta: herramienta.value,
                    codigo,
                    tiempoDevolucion: tiempoDevolucion.value,
                });
            });
            selectedCodigos.value = [];
        }

        // Función para eliminar herramienta
        function eliminarHerramienta(index) {
            tools.value.splice(index, 1);
        }

        // Abrir modal de autenticación
        function abrirModal() {
            authModal.value.abrirModal();
        }

        // Función para enviar el registro
        function enviarRegistro() {
            console.log('Registro enviado:', tools.value);
            authModal.value.closeModal();
        }

        // Resetear el formulario
        function resetForm() {
            usuario.value = '';
            herramienta.value = 'Memoria Sony SxS';  // Reestablecer la herramienta a valor predeterminado
            tiempoDevolucion.value = '';
            selectedCodigos.value = [];
            tools.value = [];

            // Forzar re-renderización de los componentes hijos
            usuarioKey.value++;
            herramientaKey.value++;
            tiempoDevolucionKey.value++;
            codigosKey.value++;
        }

        return {
            usuario,
            herramienta,
            tiempoDevolucion,
            selectedCodigos,
            tools,
            usuarios,
            codigos,
            herramientas,
            canAddTool,
            agregarHerramienta,
            eliminarHerramienta,
            abrirModal,
            enviarRegistro,
            resetForm,
            authModal,
            usuarioKey,
            herramientaKey,
            tiempoDevolucionKey,
            codigosKey,
            rutaAnterior
        };
    },
};
</script>

<style>
.action-buttons {
    display: flex;
    justify-content: center;
    padding: 20px;
}

.btn {
    margin: 5px;
}
</style>
