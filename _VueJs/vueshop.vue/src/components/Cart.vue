<template>
    <div id="cart">
        <ul>
            <li v-for="(item, key) in cart_list" >
                {{ products_list[key].name }} x {{ item }} = ${{ products_list[key].price * item}}
                <button type="button" @click='removeFromCart(key)'>Remove</button>
            </li>
        </ul>
        <strong>Total: </strong>${{ total }}
    </div>
</template>
<script>

export default {
           data: function() {
                return{
                      products_list: this.$store.state.products,
                      cart_list: JSON.parse(localStorage.cart || '{}'),
                }
            },
            created(){
                    this.products_list = this.$store.state.products;
            },
            computed: {
                total: function() {
                    var total = 0;
                    for (var i in this.cart_list) {
                        var prod = this.products_list[i];
                        var count = this.cart_list[i];
                        total += prod.price * count;
                    }
                    return total;
                }
            },
            methods: {
                removeFromCart: function(key){
                    this.$delete(this.cart_list, key);
                    this.saveToCart();
                },
                saveToCart: function(){
                    localStorage.cart = JSON.stringify(this.cart_list);
                }
            }
}
</script>

<style scoped>

</style>
