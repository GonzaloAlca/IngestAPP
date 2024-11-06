<template>
    <div class="action-buttons text-center mt-4">
        <BackButton />
        <ConfirmButton @confirm="abrirModal" />

        <!-- Modal para autenticación -->
        <auth-modal ref="authModal" :usuario="usuarioLocal" @confirmar="enviarRegistro" @operacionExitosa="resetForm"
            @update:usuario="actualizarUsuario" />
    </div>
</template>

<script>
import { ref, watch, nextTick } from 'vue';
import AuthModal from '../layouts/AuthModal.vue';
import BackButton from '../common/BackButton.vue';
import ConfirmButton from '../common/ConfirmButton.vue';

export default {
    components: {
        AuthModal,
        BackButton,
        ConfirmButton
    },
    props: {
        usuario: {
            type: String,
            required: true
        }
    },
    setup(props, { emit }) {
        const usuarioLocal = ref(props.usuario);
        const authModal = ref(null);

        watch(() => props.usuario, (newUsuario) => {
            usuarioLocal.value = newUsuario;
        });

        const actualizarUsuario = (nuevoUsuario) => {
            usuarioLocal.value = nuevoUsuario;
            emit('update:usuario', nuevoUsuario);
        };

        // Modificar abrirModal para usar nextTick
        const abrirModal = async () => {
            await nextTick();  
            if (authModal.value) {
                authModal.value.abrirModal();
            }
        };


        const enviarRegistro = () => {
            emit('enviarRegistro');
        };

        const resetForm = () => {
            emit('resetForm');
        };

        return {
            usuarioLocal,
            abrirModal,
            enviarRegistro,
            resetForm,
            actualizarUsuario,
            authModal
        };
    }
};
</script>
