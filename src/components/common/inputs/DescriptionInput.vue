<template>
    <div class="form-group">
        <label for="descripcion">Descripción</label>
        <b-form-textarea id="descripcion" v-model="descripcionLocal" placeholder="Ingrese la descripción" rows="3"
            class="no-resize" />
    </div>
</template>

<script>
export default {
    props: {
        modelValue: {
            type: String,
            default: '',
        },
    },
    emits: ['update:modelValue'],
    computed: {
        descripcionLocal: {
            get() {
                return this.modelValue;
            },
            set(value) {
                this.$emit('update:modelValue', value);
            },
        },
    },
};
</script>

<style scoped>
.no-resize {
    resize: none;
}
</style>
