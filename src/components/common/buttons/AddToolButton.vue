<template>
    <div class="text-center mt-3">
        <button class="btn btn-success" :disabled="disabled">
            <i class="bi bi-plus-circle"></i> Agregar herramienta
        </button>
    </div>
</template>

<script>
export default {
    props: {
        disabled: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<style scoped>
button {
    margin-right: 10px;
}
</style>
