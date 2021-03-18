import homePage from '../pages/HomePage'
import productsPage from '../pages/ProductsPage'
import dataProvider from '../data/dataProvider';


fixture('Login feature testing')
    .page `${dataProvider.baseUrl}`

test('Login with a valid credentials', async t=>{
    await homePage.submitLoginForm(dataProvider.validUser,dataProvider.userPwd)
    await t.expect(productsPage.tblProducts.exists).ok()
})

test('Login with an ivalid credentials', async t=>{
    await homePage.submitLoginForm(dataProvider.validUser,dataProvider.invaliduserPwd)
    await t.expect(homePage.errorMessage.exists).ok()
})

test('Logout from prodcut page', async t=>{
    await homePage.submitLoginForm(dataProvider.validUser,dataProvider.userPwd)
    await t.expect(productsPage.tblProducts.exists).ok()
    await productsPage.logout()
    await t.expect(homePage.btnLogin.exists).ok()
    
})