<template>
        <div id="product-list">
        <ul>
             <li v-for="(item, key) in products">{{ item.name }} - ${{ item.price }}
                <button type="button" @click='addToCart(key)'>Add</button>
            </li>
        </ul>
        </div>
</template>

<script>

export default {
            data: function() {
                return{
                    cart_list: JSON.parse(localStorage.cart || '{}'),
                }
            },
            computed: {
                products() {
                    return this.$store.state.products;
                },
            },
            methods: {
                addToCart: function(key){
                    if(void 0 === this.cart_list[key]){
                        this.$set(this.cart_list, key, 1);
                    } else {
                        this.cart_list[key]++;
                    }
                    this.saveToCart();
                },

                saveToCart: function(){
                    localStorage.cart = JSON.stringify(this.cart_list);
                }
            },
        };
</script>

<style scoped>

</style>
