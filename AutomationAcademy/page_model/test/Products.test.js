import homePage from '../pages/HomePage'
import shoppingCart from '../pages/ShoppingCart'
import productsPage from '../pages/ProductsPage'
import dataProvider from '../data/dataProvider';
import checkoutPage from '../pages/CheckoutPage';
import overviewPage from '../pages/OverviewPage';
import finishOrderPage from '../pages/FInishOrderPage'


fixture('Products feature testing')
    .page `${dataProvider.baseUrl}`

test('Navigate to the shopping cart', async t=>{
    await homePage.submitLoginForm(dataProvider.validUser,dataProvider.userPwd)
    await t
        .click(productsPage.shoppingCart)
        .expect(shoppingCart.cartHeader.exists).ok()
})

test('Add a single item to the shopping cart', async t=>{
    await homePage.submitLoginForm(dataProvider.validUser,dataProvider.userPwd)
    let inventoryItem=await productsPage.inventoryItem.sibling(0).find('.inventory_item_name').innerText
    await productsPage.AddItemstoCart(1)
    await t
        .expect(productsPage.itemAdded.innerText).contains('1')
        .click(productsPage.shoppingCart)
        .expect(shoppingCart.cartHeader.exists).ok()
        .expect(shoppingCart.cartItem.find('.inventory_item_name').innerText).contains(inventoryItem)
})

test('Add multiple items to the shopping cart', async t=>{
    await homePage.submitLoginForm(dataProvider.validUser,dataProvider.userPwd)
    let inventoryItem1=await productsPage.inventoryItem.sibling(0).find('.inventory_item_name').innerText
    let inventoryItem2=await productsPage.inventoryItem.sibling(1).find('.inventory_item_name').innerText
    await productsPage.AddItemstoCart(2)
    await t
        .expect(productsPage.itemAdded.innerText).contains('2')
        .click(productsPage.shoppingCart)
        .expect(shoppingCart.cartHeader.exists).ok()
        .expect(shoppingCart.cartList.child(2).find('.inventory_item_name').innerText).contains(inventoryItem1)
        .expect(shoppingCart.cartList.child(3).find('.inventory_item_name').innerText).contains(inventoryItem2)
})

test('Continue with missing mail information', async t=>{
    await homePage.submitLoginForm(dataProvider.validUser,dataProvider.userPwd)
    await productsPage.AddItemstoCart(1)
    await t
        .click(productsPage.shoppingCart)
        .expect(shoppingCart.cartHeader.exists).ok()
        .click(shoppingCart.btnCheckout)
        .click(checkoutPage.btnContinue)
        .expect(checkoutPage.errorMessage.exists).ok()
})

test('Fill users information', async t=>{
    await homePage.submitLoginForm(dataProvider.validUser,dataProvider.userPwd)
    await productsPage.AddItemstoCart(1)
    await t
        .click(productsPage.shoppingCart)
        .expect(shoppingCart.cartHeader.exists).ok()
        .click(shoppingCart.btnCheckout)
    await checkoutPage.submitcheckoutForm(dataProvider.firstName,dataProvider.lastName,dataProvider.ZipCode)
    await t.expect(overviewPage.cartHeader.exists).ok()
})

test('Final Order Items', async t=>{
    await homePage.submitLoginForm(dataProvider.validUser,dataProvider.userPwd)
    let inventoryItem=await productsPage.inventoryItem.sibling(0).find('.inventory_item_name').innerText
    await productsPage.AddItemstoCart(1)
    await t
        .click(productsPage.shoppingCart)
        .expect(shoppingCart.cartHeader.exists).ok()
        .click(shoppingCart.btnCheckout)
    await checkoutPage.submitcheckoutForm(dataProvider.firstName,dataProvider.lastName,dataProvider.ZipCode)
    await t.expect(overviewPage.cartItem.find('.inventory_item_name').innerText).contains(inventoryItem)
    
})

test('Complete a purchase', async t=>{
    await homePage.submitLoginForm(dataProvider.validUser,dataProvider.userPwd)
    await productsPage.AddItemstoCart(1)
    await t
        .click(productsPage.shoppingCart)
        .expect(shoppingCart.cartHeader.exists).ok()
        .click(shoppingCart.btnCheckout)
    await checkoutPage.submitcheckoutForm(dataProvider.firstName,dataProvider.lastName,dataProvider.ZipCode)
    await t
        .click(overviewPage.btnFinishOrder)
        .expect(finishOrderPage.successMessge.exists).ok()

})



