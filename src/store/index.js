import { createStore } from "vuex";
import axios from "axios";

export default createStore({
    state: {
      product: [],
      car: [],
    },
    getters: {
        product (state) {
          return state.product;
        },
        car (state){
          return state.car;
        },
        carCount (state) {
          return state.car.length;
        },
        priceTotal (state) {
            let total = 0;
            state.car.forEach(e => {
                total += e.price * e.count;
            });
          return total;
        }
      },
    mutations: {
      setProduct (state, payload) {
        state.product = payload;
      },
      addProductCard (state, payload) {
        const idxP = state.product.map((p) => p.id).indexOf(payload);
        const idxC = state.car.map((p) => p.id).indexOf(payload);
        if (idxC !== -1) {
          state.car[idxC].count += 1;
        } else {
          state.car.push(state.product[idxP]);
          state.car.at(-1).count = 1;
        }
        
      },
      addCountProductCard (state, payload) {
        const idxC = state.car.map((p) => p.id).indexOf(payload);
        state.car[idxC].count += 1;
      },
      restCountProductCard (state, payload) {
        const idxC = state.car.map((p) => p.id).indexOf(payload);
        if (state.car[idxC].count == 1) {
            //state.car = state.car.slice(idxC + 1, 1)
            state.car = state.car.filter((p) => p.id !== payload);
        } else{
            state.car[idxC].count -= 1;
        }
      },
      
    },
    actions: {
      async getProduct ({ commit }) {
        try {
          const { data } = await axios.get('https://fakestoreapi.com/products');
          commit("setProduct", data);
        } catch (error) {
        }
      },
    }
  })