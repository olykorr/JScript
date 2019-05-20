
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    strict:true,
    state: {
        products: [
                { name: 'Bread', price: 10},
                { name: 'Milk', price: 20},
                { name: 'Chees', price: 30},
        ]
    },
})
