<template>
    <button class="btn btn-lg btn-green square-btn d-flex flex-column justify-content-between align-items-center"
        @click="navigateTo(route)">
        <div class="icon-container d-flex justify-content-center align-items-center flex-grow-1">
            <i :class="icon" class="icon"></i>
        </div>
        <div class="button-text">
            {{ name }}
        </div>
    </button>
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
.square-btn {
    width: 100%;
    max-width: 500px;
    aspect-ratio: 1;
    position: relative;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
}

.btn-green {
    background: var(--Menu-Button);
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
    font-size: 8rem;
}

.button-text {
    font-size: 1.5rem;
    margin-top: 10px;
    text-align: center;
    width: 100%;
    font-weight: bold;
}
</style>