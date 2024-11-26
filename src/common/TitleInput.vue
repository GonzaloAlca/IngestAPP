<template>
    <div class="form-group">
        <label for="tema">Tema</label>
        <b-form-input
            id="tema"
            v-model="temaLocal"
            placeholder="Tema 1"
        />
    </div>
</template>

<script>
export default {
    props: {
        modelValue: {
            type: String,
            default: ''
        }
    },
    emits: ['update:modelValue'],
    computed: {
        temaLocal: {
            get() {
                return this.modelValue;
            },
            set(value) {
                this.$emit('update:modelValue', value);
            }
        }
    }
};
</script>
