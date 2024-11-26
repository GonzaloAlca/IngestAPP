<template>
    <div>
        <label label-for="label">{{ label }}</label>
        <div class="d-flex">
            <!-- Input de horas -->
            <input v-model="hours" type="number" class="form-control" min="0" max="23" placeholder="HH"
                @input="handleInput('hours')" maxlength="2" />
            :
            <!-- Input de minutos -->
            <input v-model="minutes" type="number" class="form-control" min="0" max="59" placeholder="MM"
                @input="handleInput('minutes')" maxlength="2" />
            :
            <!-- Input de segundos -->
            <input v-model="seconds" type="number" class="form-control" min="0" max="59" placeholder="SS"
                @input="handleInput('seconds')" maxlength="2" />
        </div>
    </div>
</template>

<script>
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
    props: {
        label: {
            type: String,
            required: true
        },
        tc: {
            type: String,
            default: '00:00:00',
            required: true
        }
    },
    setup(props, { emit }) {


        const [hours, minutes, seconds] = (props.tc || '00:00:00').split(':').map(val => val || '00');

        const hour = ref(hours);
        const minute = ref(minutes);
        const second = ref(seconds);

        const updateTime = () => {
            const formattedTime = `${hour.value.padStart(2, '0')}:${minute.value.padStart(2, '0')}:${second.value.padStart(2, '0')}`;
            emit('update:tc', formattedTime);
        };

        // Función para validar la entrada
        const validateInput = (field) => {
            let value = field === 'hours' ? hour.value : field === 'minutes' ? minute.value : second.value;

            if (field === 'hours') {
                // Limitar a 2 dígitos y entre 0 y 23
                if (value < 0) value = 0;
                if (value > 23) value = 23;
                hour.value = value.toString().padStart(2, '0');
            } else {
                // Limitar a 2 dígitos y entre 0 y 59
                if (value < 0) value = 0;
                if (value > 59) value = 59;
                if (field === 'minutes') {
                    minute.value = value.toString().padStart(2, '0');
                } else {
                    second.value = value.toString().padStart(2, '0');
                }
            }
            updateTime();
        };

        const handleInput = (field) => {
            validateInput(field);
        };

        watch(() => props.tc, (newValue) => {
            const [newHour, newMinute, newSecond] = newValue.split(':').map(val => val || '00');
            hour.value = newHour;
            minute.value = newMinute;
            second.value = newSecond;
        });

        return {
            hours: hour,
            minutes: minute,
            seconds: second,
            handleInput
        };
    }
});
</script>

<style scoped>
.form-control {
    width: 60px;
    height: 38px;
    margin: 0 5px;
    border-radius: 5px;
}

.d-flex {
    display: flex;
    align-items: center;
}
</style>