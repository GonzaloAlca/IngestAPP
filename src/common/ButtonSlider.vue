<!-- ButtonSlider.vue -->
<template>
    <div class="row justify-content-center w-75 position-relative">
        <BButton class="arrow-left" size="sm" variant="primary" @click="prevSlide">
            <i class="bi bi-chevron-left"></i>
        </BButton>

        <div v-for="(button, index) in visibleButtons" :key="index" class="col-4 d-flex justify-content-center mb-3">
            <MenuButtons :name="button.name" :route="button.route" :icon="button.icon" />
        </div>

        <BButton class="arrow-right" size="sm" variant="primary" @click="nextSlide">
            <i class="bi bi-chevron-right"></i>
        </BButton>
    </div>
</template>

<script>
import { defineComponent, computed, ref, toRefs } from 'vue';
import MenuButtons from './MenuButtons.vue';

export default defineComponent({
    components: { MenuButtons },
    props: {
        buttons: { type: Array, required: true }
    },
    setup(props) {
        const { buttons } = toRefs(props);
        const currentIndex = ref(0);
        const buttonsPerSlide = 3;

        const visibleButtons = computed(() => {
            return buttons.value.slice(currentIndex.value, currentIndex.value + buttonsPerSlide);
        });

        const nextSlide = () => {
            if (currentIndex.value + buttonsPerSlide < buttons.value.length) {
                currentIndex.value++;
            }
        };

        const prevSlide = () => {
            if (currentIndex.value > 0) {
                currentIndex.value--;
            }
        };

        return { visibleButtons, nextSlide, prevSlide };
    }
});
</script>

<style scoped>

.arrow-left,
.arrow-right {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    font-size: 1.5rem;
    padding: 0;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: none;
}

.arrow-left {
    left: -150px;
}

.arrow-right {
    right: -150px;
}


</style>