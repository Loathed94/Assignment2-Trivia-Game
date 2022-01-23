<script setup>
    import { onMounted } from 'vue';
    import { useStore } from 'vuex';
    import SelectionItems from '../components/SelectionItems.vue';


    const store = useStore();

    onMounted(async () => {
        await store.dispatch("fetchCategories");
    })
</script>
<template>
    <SelectionItems />
</template>

<style scoped>

</style>