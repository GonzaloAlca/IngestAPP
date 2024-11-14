<template>
    <div class="form-group">
        <label :for="label">{{ label }}</label>
        <b-form-input :id="label" v-model="tc" placeholder="HH:MM:SS" @input="$emit('update:tc', tc)" />
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    props: {
        tc: {
            type: String,
            default: ''
        },
        label: {
            type: String,
            default: ''
        }
    },
    setup(props, { emit }) {
        const tc = ref(props.tc);

        return { tc };
    }
};
</script>