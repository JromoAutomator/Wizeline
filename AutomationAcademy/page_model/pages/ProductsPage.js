import { Selector, t } from 'testcafe';

class productsPage{
    constructor(){
        this.tblProducts = Selector('#inventory_container')
        this.burgerMenu = Selector('#react-burger-menu-btn')
        this.btnLogout = Selector('#logout_sidebar_link')
        this.shoppingCart = Selector('svg[data-icon="shopping-cart"]')
        this.inventoryItem = Selector('.inventory_item')
        this.itemAdded = Selector('.fa-layers-counter.shopping_cart_badge')
    }

    async logout(){
        await t
            .click(this.burgerMenu)
            .click(this.btnLogout)
    }

    async AddItemstoCart(numberofItems){
        for (var i = 0; i < numberofItems; i++) {
            await t
                .click(this.inventoryItem.sibling(i).find('.btn_primary'))
        }
    }

}
export default new productsPage()