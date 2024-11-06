<template>
    <div class="form-group">
        <label for="herramienta" class="font-weight-bold label">Herramienta:</label>
        <input :value="herramienta" type="text" id="herramienta" class="form-control" disabled />
    </div>
</template>

<script>
export default {
    props: ['herramienta']
};
</script>
