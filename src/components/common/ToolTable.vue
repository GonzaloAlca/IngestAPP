<template>
    <div v-if="tools.length > 0" class="table-responsive mt-4">
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Herramientas</th>
                    <th>Código</th>
                    <th>T. Expiración</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(tool, index) in tools" :key="index">
                    <td>{{ tool.herramienta }}</td>
                    <td>{{ tool.codigo }}</td>
                    <td>{{ tool.tiempoDevolucion }} hrs</td>
                    <td>
                        <button class="btn btn-danger" @click="$emit('remove', index)">
                            <i class="bi bi-trash"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props: {
        tools: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style scoped>
.table {
    margin-top: 20px;
}
</style>
