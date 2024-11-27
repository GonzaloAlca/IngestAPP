<template>

    <BButton class="btn-primary square container rounded-5" @click="navigateTo(route)">
        <div class="icon-container">
            <i :class="icon" class="icon"></i>
        </div>
        <div class="button-text">
            {{ name }}
        </div>
    </BButton>
</template>

<script>
export default {
    name: 'Menubuttons',
    props: {
        name: {
            type: String,
            required: true,
        },
        route: {
            type: String,
            required: true,
        },
        icon: {
            type: String,
            required: true,
        }
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route);
        }
    }
};
</script>

<style scoped>
.square {
    width: 100%;
    aspect-ratio: 1;
    position: relative;
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    color: white;
    border: none;

}




.icon-container {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;

}

.icon {
    font-size: 7rem;
}

.button-text {
    font-size: 1.6rem;
    margin-top: 10px;
    margin-bottom: 15px;
    text-align: center;
    width: 80%;
    font-family: "Inter";
    font-weight: 800;
}
</style>