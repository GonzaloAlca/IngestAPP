<template>
    <div class="form-group">
        <label for="tema">Tema</label>
        <b-form-input
            id="tema"
            :value="tema"
            placeholder="Tema 1"
            @input="$emit('update:tema', $event.target.value)"
        />
    </div>
</template>

<script>
export default {
    props: {
        tema: {
            type: String,
            default: ''
        }
    }
};
</script>
