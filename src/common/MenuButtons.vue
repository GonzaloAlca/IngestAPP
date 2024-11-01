<template>

    <Button class="square container rounded-5" @click="navigateTo(route)">
        <div class="icon-container">
            <i :class="icon" class="icon"></i>
        </div>
        <div class="button-text">
            {{ name }}
        </div>
    </Button>
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
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    color: white;
    border: none;
    background-image: var(--Menu-Button);

}

.square:hover {
    background: var(--Menu-Button-Hover);
    color: rgb(56, 56, 56);
}



.icon-container {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;

}

.icon {
    font-size: 12rem;
}

.button-text {
    font-size: 4rem;
    margin-top: 10px;
    margin-bottom: 15px;
    text-align: center;
    width: 100%;
    font-family: "Inter";
    font-weight: 600;
}
</style>