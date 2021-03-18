import { Selector, t } from 'testcafe';

class overviewPage{
    constructor(){
        this.cartHeader = Selector('.subheader').withText('Checkout: Overview')
        this.btnFinishOrder = Selector('.btn_action')
        this.cartItem = Selector('.cart_item')
    }

}
export default new overviewPage()