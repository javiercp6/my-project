import { computed, ref } from "vue";
import { useStore } from "vuex";



const useProduct = () => {
  const store = useStore();
  const getProduct = async () => {
    const resp = await store.dispatch("getProduct");
    return resp;
  };
  const addProductCard = (id) =>{
      store.commit("addProductCard", id);
  }
    const addCountProductCard = (id) =>{
      store.commit("addCountProductCard", id);
    
    }
    const restCountProductCard = (id) =>{
      store.commit("restCountProductCard", id);
    }

  return {
    getProduct,
    addProductCard,
    addCountProductCard,
    restCountProductCard,
    product: computed(() => store.getters["product"]),
    carCount: computed(() => store.getters["carCount"]),
    car: computed(() => store.getters["car"]),
    priceTotal: computed(() => store.getters["priceTotal"])

  };
};

export default useProduct;