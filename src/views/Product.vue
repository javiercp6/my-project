<script setup>
import { onMounted } from 'vue'
import useProduct from "../composable/useProduct";
import Card from "../components/Card.vue"

const { product, getProduct, } = useProduct();

onMounted(() => {
    getProduct();
})
</script>

<template>
  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center py-5" >
    <Card v-for="c in product" :key="c.id"
    :id="c.id"
    :name="c.title"
    :price="c.price"
    :img="c.image"
    > 
    </Card>
  
  </div>
</template>

<style scoped>

</style>
