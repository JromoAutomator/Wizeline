import { Selector, t } from 'testcafe';

class checkoutPage{
    constructor(){
        this.firstNameField = Selector('#first-name')
        this.lastNameField = Selector('#last-name')
        this.zipNameField = Selector('#postal-code')
        this.btnContinue = Selector('.btn_primary')
        this.errorMessage = Selector('h3[data-test]')
        
    }

    async submitcheckoutForm(firstName,lastName,zipCode){
        await t
            .typeText(this.firstNameField,firstName)
            .typeText(this.lastNameField,lastName)
            .typeText(this.zipNameField,zipCode)
            .click(this.btnContinue)
    }

}
export default new checkoutPage()