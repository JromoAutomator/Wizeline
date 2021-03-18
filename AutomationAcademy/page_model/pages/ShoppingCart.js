import { Selector, t } from 'testcafe';


class shoppingCart{
    constructor(){
        this.cartHeader = Selector('.subheader').withText('Your Cart')
        this.cartItem = Selector('.cart_item')
        this.cartList = Selector('.cart_list')
        this.btnCheckout = Selector('.checkout_button')
    }


}
export default new shoppingCart()