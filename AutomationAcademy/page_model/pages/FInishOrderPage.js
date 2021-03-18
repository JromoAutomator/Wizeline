import { Selector, t } from 'testcafe';

class finishOrderPage{
    constructor(){
        this.successMessge = Selector('h2.complete-header')
    }
}
export default new finishOrderPage()

