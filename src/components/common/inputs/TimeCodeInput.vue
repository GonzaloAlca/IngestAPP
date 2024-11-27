<template>
    <div>
        <label :for="label">{{ label }}</label>
        <div class="d-flex align-items-center">
            <!-- Input de horas -->
            <input v-model="hours" type="number" class="form-control" min="0" max="23" placeholder="HH"
                @input="validateInput('hours')" :id="label" />
            :
            <!-- Input de minutos -->
            <input v-model="minutes" type="number" class="form-control" min="0" max="59" placeholder="MM"
                @input="validateInput('minutes')" />
            :
            <!-- Input de segundos -->
            <input v-model="seconds" type="number" class="form-control" min="0" max="59" placeholder="SS"
                @input="validateInput('seconds')" />
        </div>
    </div>
</template>

<script>
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
    props: {
        label: {
            type: String,
            required: true,
        },
        modelValue: {
            type: String,
            default: '00:00:00',
        },
    },
    emits: ['update:modelValue'],
    setup(props, { emit }) {
        const [initialHours, initialMinutes, initialSeconds] = props.modelValue.split(':').map((v) => v.padStart(2, '0'));

        const hours = ref(initialHours);
        const minutes = ref(initialMinutes);
        const seconds = ref(initialSeconds);

        const validateInput = (field) => {
            let value = field === 'hours' ? hours.value : field === 'minutes' ? minutes.value : seconds.value;

            // Validar límites de cada campo
            if (field === 'hours') {
                if (value < 0) value = 0;
                if (value > 23) value = 23;
                hours.value = value.toString().padStart(2, '0');
            } else {
                if (value < 0) value = 0;
                if (value > 59) value = 59;
                if (field === 'minutes') {
                    minutes.value = value.toString().padStart(2, '0');
                } else {
                    seconds.value = value.toString().padStart(2, '0');
                }
            }

            // Emitir el nuevo valor en formato HH:MM:SS
            emit('update:modelValue', `${hours.value}:${minutes.value}:${seconds.value}`);
        };

        // Sincronizar cuando se actualice la prop `modelValue`
        watch(
            () => props.modelValue,
            (newValue) => {
                const [h, m, s] = newValue.split(':').map((v) => v.padStart(2, '0'));
                hours.value = h;
                minutes.value = m;
                seconds.value = s;
            }
        );

        return {
            hours,
            minutes,
            seconds,
            validateInput,
        };
    },
});
</script>

<style scoped>
.form-control {
    width: 60px;
    height: 38px;
    margin: 0 5px;
    text-align: center;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
</style>
