<template>
    <div class="form-group">
        <label for="descripcion">Descripción</label>
        <b-form-textarea
            id="descripcion"
            :value="descripcion"
            placeholder="Ingrese la descripción"
            rows="3"
            @input="$emit('update:descripcion', $event.target.value)"
        />
    </div>
</template>

<script>
export default {
    props: {
        descripcion: {
            type: String,
            default: ''
        }
    }
};
</script>
