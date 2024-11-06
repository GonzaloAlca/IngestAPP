<template>
    <div>
        <BModal v-model="showModal" hide-footer centered>
            <template #modal-title>
                <h5>Confirmar Usuario</h5>
                <BButton variant="link" @click="closeModal" class="btn-close"></BButton>
            </template>
            <div class="modal-body">
                <BForm @submit.prevent="confirmar">
                    <BFormGroup label="Usuario:" label-for="usuarioInput">
                        <BFormInput id="usuarioInput" :value="usuario" disabled></BFormInput>
                    </BFormGroup>
                    <BFormGroup label="Contraseña:" label-for="passwordInput">
                        <BFormInput id="passwordInput" type="password" v-model="password" required></BFormInput>
                    </BFormGroup>
                    <div class="d-flex justify-content-center mt-3">
                        <BButton type="submit" variant="success">Enviar</BButton>
                    </div>
                </BForm>
            </div>
        </BModal>

        <!-- Modal de Carga -->
        <LoadModal :model-value="mostrarCarga" :mostrarExito="mostrarExito"
            @update:modelValue="val => mostrarCarga = val" />
    </div>
</template>

<script>
import { ref, watch } from 'vue';
import LoadModal from './LoadModal.vue';
import { BModal, BButton, BForm, BFormGroup, BFormInput } from 'bootstrap-vue-next';

export default {
    props: {
        usuario: String, // Propiedad para el usuario
    },
    components: {
        LoadModal,
        BModal,
        BButton,
        BForm,
        BFormGroup,
        BFormInput
    },
    setup(props, { emit }) {
        const password = ref('');
        const showModal = ref(false);
        const mostrarCarga = ref(false);
        const mostrarExito = ref(false);
        const usuario = ref(props.usuario); // Usamos un ref local para usuario

        // Función para abrir el modal
        const abrirModal = () => {
            showModal.value = true;
        };

        // Función para cerrar el modal
        const closeModal = () => {
            showModal.value = false;
        };

        // Función para confirmar y mostrar el modal de carga
        const confirmar = () => {
            showModal.value = false;
            mostrarCarga.value = true;

            setTimeout(() => {
                mostrarExito.value = true;
                setTimeout(() => {
                    mostrarCarga.value = false;
                    mostrarExito.value = false;
                    emit('operacionExitosa');  // Emitir evento de operación exitosa
                }, 1000);
            }, 1000);
        };


        // Usar watch para sincronizar el valor de usuario si cambia
        watch(() => props.usuario, (newUsuario) => {
            usuario.value = newUsuario;
        });

        // Emitir el valor actualizado de usuario cuando cambie
        watch(usuario, (newUsuario) => {
            emit('update:usuario', newUsuario);
        });

        return {
            password,
            showModal,
            mostrarCarga,
            mostrarExito,
            abrirModal,
            closeModal,
            confirmar,
            usuario,
        };
    }
};
</script>
