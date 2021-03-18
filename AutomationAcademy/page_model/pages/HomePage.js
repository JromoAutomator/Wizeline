import { Selector, t } from 'testcafe';

class homePage{
    constructor(){
        this.userNameField = Selector('#user-name')
        this.passwordField = Selector('#password')
        this.btnLogin = Selector('#login-button')
        this.errorMessage = Selector('h3[data-test]')
        
    }

    async submitLoginForm(username,password){
        await t
            .typeText(this.userNameField,username)
            .typeText(this.passwordField,password)
            .click(this.btnLogin)
    }

}
export default new homePage()